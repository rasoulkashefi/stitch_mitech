export type ProductCategory = 'all' | 'fleet' | 'rehab' | 'hardware';

export interface ProductItem {
  id: string;
  category: 'fleet' | 'rehab' | 'hardware';
  title: string;
  englishTitle: string;
  href: string;
  image: string;
  badges: string[];
  statusTag: string;
  summary: string;
  specs: { label: string; value: string }[];
}

export const officialProducts: ProductItem[] = [
  {
    id: 'autonomous-wheelchair',
    category: 'fleet',
    title: 'ویلچر برقی خودران و هوشمند',
    englishTitle: 'Autonomous Smart Wheelchair',
    href: '/fleet/autonomous-wheelchairs',
    image: '/images/fleet/autonomous-wheelchair-hero.jpg',
    badges: ['ناوبری مستقل (Indoor SLAM)', 'سنسورهای ۳۶۰° ضد تصادف', 'مدل سازمانی AMaaS'],
    statusTag: 'آماده استقرار سازمانی',
    summary:
      'نسل جدید سکوهای حمل‌ونقل انفرادی خودران مجهز به هوش مصنوعی و بینایی ماشین؛ تردد کاملاً مستقل در فرودگاه‌ها، مراکز درمانی و مجتمع‌های تجاری بدون نیاز به اینترنت و GPS.',
    specs: [
      { label: 'ظرفیت باربری', value: '۱۲۰ کیلوگرم' },
      { label: 'مداومت باتری', value: '۸ ساعت پیمایش مداوم' },
      { label: 'سیستم ناوبری', value: 'تلفیق سنسورها (LiDAR + Vision)' },
    ],
  },
  {
    id: 'smart-family-cart',
    category: 'fleet',
    title: 'کالسکه هوشمند خانواده',
    englishTitle: 'Smart Family Cart',
    href: '/fleet/smart-family-carts',
    image: '/images/fleet/smart-family-cart-hero.jpg',
    badges: ['تبلت و نقشه تعاملی مال‌ها', 'دستیار الکتریکی', 'مدل درآمد اشتراکی'],
    statusTag: 'بهره‌برداری در مال‌ها',
    summary:
      'کالسکه برقی هوشمند مجهز به تبلت لمسی راهنمای خرید و ناوبری داخلی جهت تردد آسوده خانواده‌ها و کودکان با قابلیت درآمدزایی پایدار برای مجتمع‌های تجاری.',
    specs: [
      { label: 'ظرفیت سرنشین', value: '۲ کودک + سبد خرید بزرگ' },
      { label: 'نمایشگر هوشمند', value: 'تبلت تعاملی با نقشه و آفرها' },
      { label: 'ایمنی حرکتی', value: 'ترمز خودکار در شیب‌ها' },
    ],
  },
  {
    id: 'following-amr',
    category: 'fleet',
    title: 'ربات باربر تعقیب‌کننده (AMR)',
    englishTitle: 'Human-Following Cargo Robot',
    href: '/fleet/following-amrs',
    image: '/images/fleet/following-amr-hero.jpg',
    badges: ['بینایی ماشین AI', 'فرمان‌های اشاره‌ای دست', 'حرکت کاروانی'],
    statusTag: 'تولید صنعتی',
    summary:
      'ربات خودران حمل بار و چمدان مجهز به پردازش تصویر پیشرفته بدون نیاز به تگ سخت‌افزاری و با قابلیت تشکیل کاروان در پایانه‌های فرودگاهی و مراکز لجستیک.',
    specs: [
      { label: 'ظرفیت بارگیری', value: 'تا ۱۰۰+ کیلوگرم بار' },
      { label: 'نحوه شناسایی', value: 'بینایی ماشین بدون تگ فیزیکی' },
      { label: 'سیستم حرکتی', value: 'چرخش درجا (Zero Turn)' },
    ],
  },
  {
    id: 'smart-mobile-sofa',
    category: 'fleet',
    title: 'مبل هوشمند متحرک',
    englishTitle: 'Smart Mobile Sofa',
    href: '/fleet/smart-mobile-sofas',
    image: '/images/fleet/smart-mobile-sofa-hero.jpg',
    badges: ['طراحی لوکس VIP', 'تعلیق نرم و بی‌صدا', 'هوشمندسازی فضا'],
    statusTag: 'سفارشی‌سازی لانژ',
    summary:
      'نشیمنگاه لوکس و متحرک خودران جهت جابه‌جایی اختصاصی سرنشینان در سالن‌های VIP فرودگاهی، گالری‌های معماری و مجتمع‌های لوکس اقامتی و گردشگری.',
    specs: [
      { label: 'نوع کاربری', value: 'سالن‌های تشریفات و گالری‌ها' },
      { label: 'پیشرانه', value: 'موتورهای هاب بدون نویز' },
      { label: 'ارگونومی', value: 'صندلی مبله مموری‌فوم دو نفره' },
    ],
  },
  {
    id: 'stair-climber',
    category: 'rehab',
    title: 'پله‌پیما و بالابر هوشمند',
    englishTitle: 'Smart Tracked Stair Climber',
    href: '/fleet/stair-climbers',
    image: '/images/fleet/stair-climber-hero.jpg',
    badges: ['شنی پلیمری ضدلغزش', 'ترمز خودکار Fail-Safe', 'بدون تخریب بنا'],
    statusTag: '۳۰ ماه گارانتی طلایی',
    summary:
      'بالابر توانبخشی پرتابل با شنی‌های پلیمری تقویت‌شده و تراز خودکار ژیروسکوپی جهت صعود و فرود فوق‌العاده امن میان طبقات بدون نیاز به ریل‌کشی ثابت.',
    specs: [
      { label: 'ظرفیت وزن', value: '۱۶۰ کیلوگرم' },
      { label: 'پیمایش با شارژ', value: '۸۰ طبقه (۱۵۰۰ پله)' },
      { label: 'وزن دستگاه', value: '۲۹ کیلوگرم (تاشو و پرتابل)' },
    ],
  },
  {
    id: 'wheelchair-controllers',
    category: 'hardware',
    title: 'کنترلر، جوی‌استیک و درایورهای توانبخشی',
    englishTitle: 'Mobility Controllers & DC Drivers',
    href: '/fleet/wheelchair-controllers',
    image: '/images/fleet/controllers/hero.jpg',
    badges: ['۳۰ ماه گارانتی طلایی', 'خانواده مینی، پرو و ایکسپرو', 'معماری دو بخشی'],
    statusTag: 'تولید و تامین قطعات',
    summary:
      'خانواده تخصصی کنترلرها و جوی‌استیک‌های ارگونومیک توانبخشی با درایورهای ماسفت توان‌بالا، پایش حرارتی و امکان شخصی‌سازی پارامترهای حرکتی.',
    specs: [
      { label: 'انواع خانواده', value: 'میکائیل Mini, Pro, XPro' },
      { label: 'نوع جوی‌استیک', value: 'مغناطیسی Hall بدون سایش' },
      { label: 'گارانتی رسمی', value: '۳۰ ماه ضمانت طلایی تعویض' },
    ],
  },
  {
    id: 'industrial-drives',
    category: 'hardware',
    title: 'سامانه ناوبری مستقل و درایورهای صنعتی',
    englishTitle: 'Autonomous Navigation & Industrial Drives',
    href: '/technology/drives-and-positioning',
    image: '/images/fleet/controllers/robotics-driver.jpg',
    badges: ['ماژول ناوبری SLAM', 'درایورهای براشلس BLDC', 'باس CANopen / Modbus'],
    statusTag: 'سخت‌افزار دانش‌بنیان',
    summary:
      'زیرسیستم‌های ناوبری خودران، ماژول‌های موقعیت‌یابی دقیق و درایورهای موتور بدون جاروبک BLDC ویژه ربات‌های صنعتی، ربات‌های انبارداری و پلتفرم‌های روباتیک.',
    specs: [
      { label: 'پروتکل‌های صنعتی', value: 'CAN, RS485, Modbus' },
      { label: 'توان درایور', value: 'تا ۱۲۰۰ وات پیوسته' },
      { label: 'هسته‌های پردازشی', value: 'DSP ۳۲ بیتی بلادرنگ' },
    ],
  },
];
