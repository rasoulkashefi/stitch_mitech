import { createClient } from '@sanity/client';
import { readFile } from 'node:fs/promises';

const key = () => crypto.randomUUID().replaceAll('-', '').slice(0, 12);

async function run() {
  const envText = await readFile('.env.local', 'utf8');
  const env = {};
  for (const line of envText.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq > 0) {
      let val = trimmed.slice(eq + 1).trim();
      if (/^(".*"|'.*')$/.test(val)) val = val.slice(1, -1);
      env[trimmed.slice(0, eq).trim()] = val;
    }
  }

  const client = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID || env.SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET || env.SANITY_DATASET || 'production',
    token: env.SANITY_API_WRITE_TOKEN || env.SANITY_TOKEN,
    apiVersion: '2024-01-01',
    useCdn: false
  });

  const postId = '6xII3rbxPLEz402wMjpyEY';
  const existingPost = await client.fetch(`*[_id == $id][0]`, { id: postId });
  if (!existingPost) {
    throw new Error(`Post ${postId} not found in Sanity!`);
  }

  console.log(`Loaded post: ${existingPost.title} (${existingPost._id})`);

  // Helper block builder
  const textBlock = (text, style = 'normal', listItem = undefined) => {
    const b = {
      _type: 'block',
      _key: key(),
      style,
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: key(),
          marks: [],
          text: text.trim()
        }
      ]
    };
    if (listItem) {
      b.listItem = listItem;
      b.level = 1;
    }
    return b;
  };

  const calloutBlock = (type, title, text) => ({
    _type: 'callout',
    _key: key(),
    type,
    title,
    text: text.trim()
  });

  // Construct updated body
  const updatedBody = [
    // 0
    textBlock('ویلچر برقی یک وسیله نقلیه شخصی حساس است که تلفیقی از مهندسی مکانیک، الکترونیک قدرت و الگوریتم‌های کنترلی ایمنی‌محور را در خود جای داده است. از کار افتادن ناگهانی ویلچر در خارج از منزل نه تنها استقلال حرکتی کاربر را مختل می‌کند، بلکه در سراشیبی‌ها و معابر شهری می‌تواند خطرات جانی غیرقابل جبرانی به دنبال داشته باشد.'),
    // 1
    textBlock('اکثر خرابی‌های پرهزینه در ویلچرهای برقی (از قبیل سوختن ماسفت‌های درایور، شکستن دنده‌های گیربکس یا مرگ ناگهانی باتری) ناشی از غفلت از «سرویس‌های پیشگیرانه ساده» هستند. رعایت یک برنامه منظم بازرسی و آشنایی با نشانه‌های هشداردهنده سیستم، هزینه‌های استهلاک را به حداقل رسانده و قابلیت اطمینان دستگاه را تضمین می‌کند.'),
    // 2
    textBlock('جدول زمان‌بندی و چک‌لیست سرویس‌های دوره‌ای ویلچر برقی', 'h2'),
    // 3
    textBlock('اجرای منظم بازرسی‌های زیر بر اساس کارکرد ویلچر، ضامن ایمنی و طول عمر بهینه تمام ماژول‌های حرکتی است:'),
    // 4: The maintenance checklist table (preserve existing table)
    existingPost.body[4],
    // 5: The statCard (preserve existing statCard)
    existingPost.body[5],
    // 6: H2 Section
    textBlock('رمزگشایی کدهای خطای چشمک‌زن جوی‌استیک (Blink Codes)', 'h2'),
    // 7: Engineering explanation
    textBlock('کنترلرهای استاندارد بین‌المللی تجهیزات توانبخشی (نظیر خانواده‌های PG Drives VR2، Dynamic Controls، Curtis و سامانه‌های مکاترونیک میکائیل) مجهز به سامانه خودعیب‌یابی هوشمند هستند. این درایورها هنگام بروز هرگونه ناهماهنگی الکتریکی، افت ولتاژ بحرانی یا نقص در مدارات قدرت، برای محافظت از ایمنی کاربر و پیشگیری از سوختن موتورها، سیستم محرکه را قفل کرده و وضعیت خطا را از طریق «توالی چشمک‌زدن چراغ‌های نشانگر سرعت یا باتری» (Blink Codes) اعلام می‌کنند.'),
    // 8: Safety explanation
    textBlock('از آنجا که سیستم محرکه و درایورهای ویلچر برقی با آمپراژ بالا و الگوریتم‌های حفاظتی حساس کار می‌کنند، هرگونه تست خودسرانه، دستکاری کانکتورهای قدرت، باز کردن قاب جوی‌استیک یا تلاش برای رفع عیب بدون تجهیزات آزمایشگاهی دیاگ، می‌تواند به سوختگی کامل طبقه قدرت (ماسفت‌ها)، آسیب به کلاف موتور یا خطرات حرکتی غیرمنتظره منجر شود. بر همین اساس و طبق دستورالعمل استاندارد ایمنی و خدمات مهندسی میکائیل:'),
    // 9: The employer mandated instruction as a warning Callout
    calloutBlock(
      'warning',
      'دستورالعمل استاندارد ایمنی و عیب‌یابی خطاها',
      'می‌بایست در این مواقع کد خطای رخ‌داده و یا فیلم ۳۰ ثانیه‌ای از نحوه چشمک‌زدن کنترلر را برای مرکز پشتیبانی فنی معتبر ارسال نمایید تا در اسرع وقت راهنمایی مناسب را دریافت کنید.'
    ),
    // 10: 30-second video recording checklist
    textBlock('راهنمای تهیه و ارسال فیلم ۳۰ ثانیه‌ای جهت دیاگ سریع از راه دور:\n\n۱. وضوح نشانگرها: دوربین موبایل را روبروی پنل جوی‌استیک نگه دارید تا تعداد دقیق چشمک‌های چراغ نشانگر سرعت یا باتری به وضوح دیده شود.\n۲. ضبط حداقل ۲ چرخه کامل چشمک‌زدن: اجازه دهید چراغ‌ها یک دور چشمک بزنند، مکث چندثانیه‌ای ثبت شود و چرخه بعدی چشمک‌ها شروع شود تا تعداد دقیق فلاش‌ها قابل شمارش باشد.\n۳. وضعیت خلاص‌کن چرخ‌ها: در ثانیه‌های پایانی، یک نمای کوتاه از پشت چرخ‌های عقب بگیرید تا کارشناسان از وضعیت درگیر بودن کلاچ‌های مکانیکی ترمز مطمئن شوند.'),
    // 11: Callout for direct contact with technical support
    calloutBlock(
      'info',
      'ارتباط مستقیم با واحد پشتیبانی فنی و دیاگ میکائیل',
      'جهت دریافت سریع‌ترین راهنمایی، فیلم ۳۰ ثانیه‌ای ضبط‌شده را همراه با مدل ویلچر خود برای کارشناسان فنی ارسال فرمایید:\n• خط مستقیم کارشناسی فنی و ارسال ویدئو در پیام‌رسان‌ها (واتس‌اپ، تلگرام، بله، ایتا): ۰۹۱۹۲۳۱۴۰۱۰\n• سامانه سراسری خدمات و تعمیرات تخصصی: ۰۲۱-۸۸۸۹۳۴۱۲\nکارشناسان فنی پس از بررسی فیلم، در کوتاه‌ترین زمان علت خطا را شناسایی کرده و راهکار ایمن رفع آن را مستقیماً به شما اعلام خواهند نمود.'
    ),
    // 12: Image (preserve existing body image)
    existingPost.body[9],
    // 13: H2
    textBlock('بررسی اولیه دو خطای متداول کاربر پیش از تماس با پشتیبانی', 'h2'),
    // 14: Introductory text
    textBlock('تنها در دو مورد خاص، خطای چشمک‌زن دستگاه ناشی از نقص قطعات نبوده و با یک بازبینی ساده توسط خود کاربر برطرف می‌شود. چنانچه پس از انجام این دو اقدام، خطا همچنان پابرجا بود، نشان‌دهنده نیاز به بررسی تکنسین بوده و باید فوراً فیلم دستگاه ارسال گردد:'),
    // 15: H3
    textBlock('۱. خطای شماره ۷ (خطای خارج از مرکز یا Out of Neutral)', 'h3'),
    // 16: Explanation
    textBlock('این خطا زمانی رخ می‌دهد که کاربر هنگام فشردن کلید پاور، انگشت خود را روی اهرم جوی‌استیک نگه داشته یا فنر اهرم به دلیل گردوغبار با تاخیر به مرکز بازگشته باشد. کنترلر برای جلوگیری از حرکت ناخواسته، سیستم را متوقف می‌کند. برای حل این مشکل، دستگاه را خاموش کنید، دست خود را کاملاً از روی اهرم بردارید و پس از ۵ ثانیه مجدداً روشن فرمایید.'),
    // 17: H3
    textBlock('۲. خطای شماره ۹ (نقص در ترمز الکترومغناطیسی یا خلاص بودن چرخ‌ها)', 'h3'),
    // 18: Explanation
    textBlock('در بیش از ۷۰ درصد موارد، این خطا به دلیل خلاص بودن اهرم‌های دستی پشت موتورها رخ می‌دهد. سنسورهای درایور جریان عبوری از ترمز را پیوسته می‌سنجند؛ اگر اهرم‌های کلاچ در حالت خلاص (Freewheel) باشند، درایور برای ایمنی مانع حرکت می‌شود. هر دو اهرم را به حالت قفل (Drive) برگردانید و دستگاه را مجدداً روشن کنید.'),
    // 19: Critical Callout for wash warning (upgraded to real callout)
    calloutBlock(
      'critical',
      'اخطار حیاتی درباره شستشو و نفوذ رطوبت',
      'شستشوی ویلچر برقی با شیلنگ آب یا دستگاه‌های کارواش اکیداً ممنوع است. استاندارد نفوذناپذیری اغلب جوی‌استیک‌ها IPX4 یا حداکثر IPX5 است؛ نفوذ ذرات پرفشار آب به داخل برد کنترلی باعث سولفاته شدن اتصالات ریز SMD و سوختن ترانزیستورهای گران‌قیمت درایور می‌شود. نظافت بدنه باید صرفاً با دستمال نم‌دار بدون الکل انجام شود.'
    ),
    // 20: H2
    textBlock('اصول حیاتی نگهداری و محافظت از پک باتری', 'h2'),
    // 21: Battery text
    existingPost.body[17],
    // 22: Charger Callout
    existingPost.body[18],
    // 23: H2
    textBlock('مراقبت از سیستم‌های مکانیکی و روانکاری گیربکس', 'h2'),
    // 24: Gearbox text 1
    existingPost.body[20],
    // 25: Gearbox text 2
    existingPost.body[21],
    // 26: H2
    textBlock('خدمات تخصصی تعمیرات و دیاگ مکاترونیک میکائیل', 'h2'),
    // 27: Services text 1
    existingPost.body[23],
    // 28: Services text 2
    existingPost.body[24],
    // 29: Services contact text
    existingPost.body[25],
    // 30: H2 FAQ
    textBlock('پرسش‌های متداول درباره عیب‌یابی و سرویس ویلچر برقی', 'h2'),
    // 31: FAQ Accordion with refined FAQ 2
    {
      ...existingPost.body[27],
      items: [
        existingPost.body[27].items[0],
        {
          _key: key(),
          _type: 'faqItem',
          question: 'اگر چراغ‌های جوی‌استیک به صورت ممتد چشمک بزنند چه اقدامی باید انجام داد؟',
          answer: 'در اولین گام، دست خود را از روی اهرم بردارید، از درگیر بودن کلاچ ترمزهای دستی اطمینان یابید و ویلچر را خاموش و روشن کنید. در صورتی که چشمک‌زدن ادامه داشت، از هرگونه دستکاری سیم‌کشی یا باز کردن درایور خودداری فرمایید؛ یک فیلم ۳۰ ثانیه‌ای از نحوه چشمک‌زدن کنترلر ضبط کرده و برای مرکز پشتیبانی فنی میکائیل ارسال کنید تا راهنمایی تخصصی دریافت نمایید.'
        },
        existingPost.body[27].items[2],
        existingPost.body[27].items[3]
      ]
    },
    // 32: Key Takeaways with updated point 1
    {
      ...existingPost.body[28],
      points: [
        'در صورت بروز چشمک‌زدن چراغ‌های جوی‌استیک (Blink Codes)، ارسال کد یا فیلم ۳۰ ثانیه‌ای از نحوه چشمک‌زدن به مرکز پشتیبانی فنی میکائیل، سریع‌ترین و مطمئن‌ترین روش برای عیب‌یابی و پیشگیری از آسیب به درایور است.',
        'شارژ منظم روزانه و پرهیز از تخلیه شارژ به زیر ۳۰٪، عمر باتری را تا ۲ برابر افزایش می‌دهد.',
        'شستشوی ویلچر برقی با شیلنگ آب یا کارواش علت اصلی بیش از ۶۰٪ سوختگی بردهای الکترونیکی درایور است.',
        'برای پیشگیری از ساییدگی دنده‌های گران‌قیمت گیربکس، روانکاری سالانه با گریس سنتتیک الزامی است.',
        'واحد تعمیرات تخصصی میکائیل با تجهیزات دیاگ مکاترونیک، آماده عیب‌یابی و ارتقای انواع تجهیزات حرکتی است.'
      ]
    }
  ];

  const updatedTitle = 'راهنمای جامع سرویس، عیب‌یابی و نگهداری ویلچر برقی؛ کدهای خطا، باتری و گیربکس';

  const updatedSeo = {
    ...existingPost.seo,
    metaTitle: 'راهنمای سرویس، عیب‌یابی و نگهداری ویلچر برقی | میکائیل',
    metaDescription: 'چک‌لیست سرویس دوره‌ای ویلچر برقی، نحوه تشخیص کدهای خطای چشمک‌زن جوی‌استیک، روش‌های نگهداری باتری و گیربکس و دریافت پشتیبانی فنی تخصصی میکائیل.'
  };

  const updatedAiMetadata = {
    ...existingPost.aiMetadata,
    quickAnswer: 'سرویس دوره‌ای ویلچر برقی شامل شارژ اصولی بدون تخلیه عمیق، آچارکشی اتصالات شاسی، روانکاری ۶ ماهه گیربکس با گریس سنتتیک و پایش هشدارهای کنترلر است. در صورت بروز هرگونه کد خطای چشمک‌زن روی جوی‌استیک، کاربر باید از دستکاری خودسرانه خودداری کرده و کد خطا یا فیلمی ۳۰ ثانیه‌ای از نحوه چشمک‌زدن کنترلر را جهت دیاگ دقیق به مرکز پشتیبانی فنی معتبر ارسال نماید.'
  };

  console.log(`Patching post ${postId}...`);
  const result = await client
    .patch(postId)
    .set({
      title: updatedTitle,
      body: updatedBody,
      seo: updatedSeo,
      aiMetadata: updatedAiMetadata
    })
    .commit();

  console.log('✅ Successfully updated post in Sanity Studio!');
  console.log('Document ID:', result._id);
  console.log('Title:', result.title);
  console.log('Updated at:', result._updatedAt);
}

run().catch((err) => {
  console.error('❌ Error updating post:', err);
  process.exit(1);
});
