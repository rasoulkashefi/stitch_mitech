import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronLeft,
  Calendar,
  Zap,
  Award,
  Sparkles,
  GraduationCap,
  ShieldCheck,
  HeartHandshake,
  ArrowLeft,
  Activity,
  Layers,
  Cpu,
  Smartphone,
  Eye,
  Plane,
  Building,
  Palmtree,
  Hospital,
  Compass,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'تاریخچه، رویکرد و چشم‌انداز شرکت | فناوری هوشمند میکائیل (Mitech)',
  description:
    'داستان شکل‌گیری میکائیل از سال ۱۳۸۹ در حوزه درایوهای الکتریکی، مرجعیت رسمی سازمان بهزیستی (IATP)، گرنت بنیاد ملی علم ایران با همکاری دانشگاه امیرکبیر و افق حمل‌ونقل خودران.',
  keywords: [
    'تاریخچه میکائیل',
    'رویکرد فناوری هوشمند میکائیل',
    'EV Drives Technology',
    'IATP بهزیستی',
    'مرجع توانبخشی هوشمند',
    'گرنت بنیاد ملی علم ایران',
    'دانشگاه صنعتی امیرکبیر',
    'ناوبری خودران',
    'Mitech History',
  ],
  openGraph: {
    title: 'تاریخچه، رویکرد و چشم‌انداز | شرکت دانش‌بنیان میکائیل',
    description:
      'مسیر تکوین میکائیل از سال ۱۳۸۹؛ از کنترل درایو الکتریکی تا مرجعیت IATP و ناوبری خودران با همکاری دانشگاه امیرکبیر.',
    url: 'https://mitech.ir/about/history-vision',
    siteName: 'شرکت فناوری هوشمند میکائیل (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تاریخچه و چشم‌انداز فناوری هوشمند میکائیل',
    description: 'روایت بیش از یک دهه نوآوری مهندسی، گلوگاه‌های فناوری و افق‌های خودران.',
  },
  alternates: {
    canonical: 'https://mitech.ir/about/history-vision',
  },
};

export default function HistoryVisionPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'تاریخچه و رویکرد شرکت دانش‌بنیان فناوری هوشمند میکائیل',
    description:
      'شروع از سال ۱۳۸۹ در حوزه درایوهای الکتریکی، مرجعیت IATP سازمان بهزیستی و توسعه فناوری خودران با گرنت بنیاد ملی علم ایران و دانشگاه امیرکبیر.',
    publisher: {
      '@type': 'Organization',
      name: 'Mitech',
      foundingDate: '2010',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tehran',
        addressCountry: 'IR',
        streetAddress: 'تهران، پارک علم و فناوری دانشگاه امام حسین(ع)، واحد ۳۶۳',
      },
    },
  };

  return (
    <main className="min-h-screen bg-white text-slate-800 font-[Vazirmatn,sans-serif]" dir="rtl">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. Hero Header ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white py-16 lg:py-24">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80" />
        <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="راهنمای مسیر" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              صفحه اصلی
            </Link>
            <ChevronLeft size={13} className="text-slate-600" />
            <Link href="/about" className="hover:text-emerald-400 transition-colors">
              درباره ما
            </Link>
            <ChevronLeft size={13} className="text-slate-600" />
            <span className="text-emerald-400 font-semibold">تاریخچه و رویکرد</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400 backdrop-blur-md">
              <Calendar size={14} />
              <span>روایت شکل‌گیری و تکامل از ۱۳۸۹ تا امروز</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.25]">
              تاریخچه و رویکرد؛{' '}
              <span className="text-emerald-400">از گلوگاه فناوری تا استقلال حرکت</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-300">
              شرکت دانش‌بنیان «فناوری هوشمند میکائیل» (Mitech)، از سال ۱۳۸۹ فعالیت تخصصی خود را در حوزه درایوهای الکتریکی و سیستم‌های ناوبری آغاز نمود؛ مسیری که با انباشت دانش فنی بومی، به مرجعیت ملی توانبخشی و خلق افق‌های نو در حمل‌ونقل خودران پیوند خورده است.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Story Chapter 1: History & Approach ── */}
      <section className="py-16 lg:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-900">
                <Zap size={14} className="text-blue-700" />
                <span>فصل اول: تسلط بر هسته درایو الکتریکی (۱۳۸۹)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 tracking-tight leading-snug">
                کنترل و ناوبری در وسایل نقلیه الکتریکی؛{' '}
                <span className="text-emerald-600">گلوگاه فناوری بومی</span>
              </h2>

              <div className="space-y-4 text-base leading-8 text-slate-600">
                <p>
                  شرکت دانش‌بنیان <strong className="text-slate-900 font-bold">«فناوری هوشمند میکائیل»</strong> از سال ۱۳۸۹ فعالیت خود را در حوزه فناوری کنترل و ناوبری وسایل نقلیه الکتریکی و تکنولوژی درایو این وسایل <span className="font-semibold text-slate-900" dir="ltr">(EV Drives Technology)</span> آغاز نمود.
                </p>
                <p>
                  بیش از یک دهه فعالیت تحقیقاتی و تخصصی در این حوزه با رویکرد کاربردی در ادوات کمک-توانبخشی <span className="font-semibold text-slate-900" dir="ltr">(Assistive Devices)</span> و سیستم‌های رباتیک، منجر به تولید محصولاتی پیشرفته با سطح ایمنی و اعتمادپذیری بسیار بالا، کارآمد و مقرون‌به‌صرفه گردیده است.
                </p>
                <p>
                  این محصولات جهت کنترل و ناوبری انواع متحرک‌های الکتریکی از جمله ویلچر و اسکوتر برقی، پله‌پیمای برقی و سیستم‌های رباتیک متحرک هدایت‌شونده یا خودمختار، گلوگاه اصلی فناوری محسوب می‌شوند و از نظر دانش فنی، هم‌تراز با برترین برندهای بین‌المللی ارزیابی شده و دارای تأییدیه رسمی دانش‌بنیان هستند.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 text-right">
                  <div className="text-2xl font-black text-blue-950">۱۳۸۹</div>
                  <div className="text-xs text-slate-500 mt-1">آغاز تحقیقات کاربردی</div>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 text-right">
                  <div className="text-2xl font-black text-emerald-600">۱۵+ سال</div>
                  <div className="text-xs text-slate-500 mt-1">تکامل و R&D مداوم</div>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 text-right col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-blue-950">۱۰۰٪</div>
                  <div className="text-xs text-slate-500 mt-1">دانش فنی بومی‌شده</div>
                </div>
              </div>
            </div>

            {/* Quick Pillars Sidebar */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50 to-white p-7 shadow-lg">
                <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4 mb-5">
                  <div className="grid size-10 place-items-center rounded-xl bg-blue-950 text-white">
                    <Layers size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-950 text-base">دامنه‌های فناوری درایو میکائیل</h3>
                    <p className="text-xs text-slate-500">پلتفرم‌های عملیاتی توسعه‌یافته</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {[
                    { title: 'کنترلرهای توانبخشی (Micro-Controllers)', desc: 'هدایت انواع ویلچر برقی با پردازش فوق‌روان Hall جوی‌استیک' },
                    { title: 'درایورهای موتور توان‌بالا (Power Drivers)', desc: 'مدیریت حرارتی ماسفت‌ها و مصرف بهینه باتری' },
                    { title: 'بالابرهای پرتابل پله‌پیما (Stair Climbers)', desc: 'تراز خودکار ژیروسکوپی و ترمزهای Fail-Safe' },
                    { title: 'درایوهای ربات‌های صنعتی و هدایت‌شونده', desc: 'ارتباطات شبکه صنعتی CANopen و Modbus' },
                  ].map((item, idx) => (
                    <div key={idx} className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-2xs">
                      <div className="flex items-center gap-2 text-sm font-bold text-blue-950">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 leading-5 mr-6">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Story Chapter 2: Official IATP Welfare Reference ── */}
      <section className="py-16 lg:py-24 bg-slate-50/60 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-2xs mb-4">
              <HeartHandshake size={15} className="text-emerald-600" />
              <span>فصل دوم: مرجع ملی تجهیزات توانبخشی هوشمند</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight leading-snug">
              مرکز مادر-تخصصی فناوری‌های کمکی هوشمند{' '}
              <span className="text-emerald-600">(IATP)</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600">
              طی سال‌ها انباشت دانش فنی، این شرکت به عنوان مرجع تخصصی فناوری‌های کمکی هوشمند{' '}
              <span className="font-semibold text-slate-900" dir="ltr">(Intelligent Assistive Technology Provider - IATP)</span>{' '}
              برای سالمندان و افراد توانیاب در کشور شناخته شده و از سوی <strong className="text-slate-900 font-bold">«سازمان بهزیستی کل کشور»</strong>، رسماً به عنوان مرجع تجهیزات توانبخشی هوشمند به تمام استان‌های کشور معرفی گردیده است.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column: Visual Showcase (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-900 shadow-md">
                  <Image
                    src="/images/about/iatp-smart-assistive.jpg"
                    alt="سیستم های کمکی هوشمند IATP میکائیل"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-white text-xs backdrop-blur-md bg-slate-950/60 border border-white/10 rounded-xl px-3.5 py-2">
                    <div className="flex items-center gap-2">
                      <Activity size={15} className="text-emerald-400" />
                      <span className="text-[11px] font-medium">پایش سلامت، تله‌متری و استقلال فردی</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">IATP</span>
                  </div>
                </div>

                <div className="mt-4 px-2 text-right">
                  <h4 className="text-sm font-bold text-blue-950">
                    اکوسیستم تحرک متصل ویژه معلولیت‌های خاص
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 leading-6">
                    ترکیب سخت‌افزار ارگونومیک با اپلیکیشن موبایل، ثبت مسافت‌های طی‌شده، کنترل کمکی والدین یا مراقبین و عیب‌یابی از راه دور.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Mission and Target Conditions (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6 order-1 lg:order-2">
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-6 sm:p-7">
                <h3 className="text-lg font-bold text-blue-950 mb-3 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-emerald-600" />
                  گستره خدمات تخصصی شرکت در این حوزه:
                </h3>
                <ul className="space-y-4 text-sm leading-7 text-slate-700">
                  <li className="flex items-start gap-3">
                    <div className="grid size-6 place-items-center rounded-full bg-emerald-600 text-white shrink-0 mt-0.5 text-xs font-bold">۱</div>
                    <div>
                      <strong className="text-slate-950 font-bold block">ارائه راهکارهای «کارآمد» برای افراد دارای معلولیت خاص:</strong>
                      پوشش تخصصی افراد با ضایعات نخاعی گردنی (کوادری‌پلژی)، ام‌اس (MS)، دیستروفی عضلانی، سی‌پی (CP) و سایر توان‌یابان عزیز؛ جهت توانمندسازی کامل در استفاده از ویلچر برقی، تأمین استقلال فردی در تردد و کاهش چشمگیر هزینه‌های عمومی بهزیستی در سراسر کشور.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="grid size-6 place-items-center rounded-full bg-emerald-600 text-white shrink-0 mt-0.5 text-xs font-bold">۲</div>
                    <div>
                      <strong className="text-slate-950 font-bold block">چرخه کامل خدمات توانبخشی مهندسی:</strong>
                      شامل طراحی و تولید، سفارشی‌سازی ارگونومیک متناسب با شرایط فیزیکی کاربر، مشاوره تخصصی رایگان و تعمیرات فوق‌تخصصی بردهای الکترونیکی.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Conditions Supported Badges */}
              <div>
                <span className="text-xs font-bold text-slate-500 block mb-2.5">
                  شرایط و نیازهای تحت پوشش راهکارهای سفارشی IATP:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'ضایعات نخاعی گردنی (Spinal Cord Injury)',
                    'ام‌اس (Multiple Sclerosis)',
                    'دیستروفی‌های عضلانی (Muscular Dystrophy)',
                    'فلج مغزی (Cerebral Palsy - CP)',
                    'سالمندان با افت توان حرکتی',
                    'جانبازان و ایثارگران معزز',
                  ].map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. Story Chapter 3: The Two Wings of Flight ── */}
      <section className="py-16 lg:py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          <div className="mx-auto max-w-3xl text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-50 px-4 py-1.5 text-xs font-bold text-purple-800 shadow-2xs mb-4">
              <Sparkles size={15} className="text-purple-600" />
              <span>فصل سوم: پرش فناوری و نسل نوین خودران</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight leading-snug">
              روایت «بال‌های پرواز»؛{' '}
              <span className="text-emerald-600">پیوند فیزیک حرکت با هوش مصنوعی</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600">
              با ترکیب دو فناوری زیرساختی در متحرک‌های الکتریکی — کنترل و ناوبری فیزیکی در کنار بینایی ماشین و هوش مصنوعی — به کاربردهای وسیعی از سیستم‌های حمل‌ونقل هوشمند در زندگی انسان دست یافته‌ایم.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            
            {/* Wing 1 */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm hover:border-slate-300 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-5">
                <span className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-emerald-400">
                  <Cpu size={14} />
                  بال اول پرواز
                </span>
                <span className="text-xs font-mono text-slate-400">۱۳۸۹ تا امروز</span>
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                فناوری سخت‌افزاری و نرم‌افزاری کنترل و ناوبری فیزیکی
              </h3>
              <p className="text-sm leading-8 text-slate-600">
                طی بیش از یک دهه تحقیق و توسعه مستمر در این شرکت، زیرساخت سخت‌افزاری درایوها، فریم‌ورها، بردهای کنترلر و پروتکل‌های ناوبری فیزیکی به طور کاملاً ایمن، اعتمادپذیر و کارآمد پیاده‌سازی و وارد فاز تولید صنعتی گردید؛ شالوده‌ای استوار که امکان حرکت دقیق و مطمئن را فراهم می‌سازد.
              </p>
            </div>

            {/* Wing 2 */}
            <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 p-8 text-white shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-5">
                <span className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-3.5 py-1.5 text-xs font-bold text-slate-950">
                  <Eye size={14} />
                  بال دوم پرواز
                </span>
                <span className="text-xs font-mono text-emerald-300">۱۴۰۲ تا اکنون</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                بینایی ماشین، هوش مصنوعی و گرنت بنیاد ملی علم ایران
              </h3>
              <p className="text-sm leading-8 text-slate-200">
                با اخذ گرنت بنیاد ملی علم ایران توسط این شرکت در سال ۱۴۰۲ و همکاری رسمی دانشگاه صنعتی امیرکبیر، بال دوم پرواز شکل گرفت و فصل نوینی در دستیابی به دانش‌فنی حمل‌ونقل خودران آغاز شد. حاصل آن پلتفرمی قدرتمند و منعطف در کاربردهای ناوبری هوشمند بر پایه هوش مصنوعی در لبه (Edge AI) است.
              </p>
            </div>

          </div>

          {/* Broad Industry Applications Grid */}
          <div className="mt-12 rounded-3xl border border-slate-200/80 bg-slate-50/80 p-8 sm:p-10">
            <h4 className="text-base sm:text-lg font-bold text-blue-950 mb-2">
              گسترش کاربردهای پلتفرم خودران میکائیل در صنایع مختلف:
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-6">
              بلوغ فناوری حمل و جابه‌جایی خودران و تعاملی با انسان، این امکان را فراهم آورده که پلتفرم بومی میکائیل در دامنه‌های تجاری و سازمانی گوناگون مستقر شود:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {[
                { title: 'پایانه‌های فرودگاهی', desc: 'جابجایی خودران مسافران و حمل بار چمدان', icon: Plane },
                { title: 'مجتمع‌های تجاری و مال‌ها', desc: 'کالسکه‌های تعاملی و راهنمای دیجیتال', icon: Building },
                { title: 'مراکز درمانی و بیمارستانی', desc: 'تردد امن توان‌یابان و ربات‌های لجستیک', icon: Hospital },
                { title: 'گردشگری و اماکن تفریحی', desc: 'مبل‌های متحرک و اسکوترهای محوطه‌ای', icon: Palmtree },
                { title: 'مراکز اقامتی و هتلینگ', desc: 'سرویس‌دهی لوکس و حمل مکانیزه چمدان', icon: Compass },
              ].map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <div key={i} className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-2xs">
                    <Icon size={20} className="text-emerald-600 mb-2" />
                    <h5 className="text-xs font-bold text-blue-950">{ind.title}</h5>
                    <p className="text-[11px] text-slate-500 mt-1 leading-4">{ind.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. Future Horizon & Call for Synergy ── */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          
          <div className="mx-auto max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3 block">
              چشم‌انداز و مأموریت انسانی
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight leading-snug">
              همکاری جمعی برای ارتقای کیفیت زندگی و سربلندی ایران
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-9 text-slate-600">
              اکنون با بلوغ فناوری حمل و جابه‌جایی خودران و یا تعاملی با انسان بر پایه بینایی و یادگیری ماشین، تمرکز شرکت فناوری هوشمند میکائیل بر توسعه کاربردها در نسل نوین متحرک‌های انفرادی هوشمند قرار گرفته است.
            </p>
            <p className="mt-3 text-base sm:text-lg leading-9 text-slate-600 font-semibold text-blue-950">
              ما از همکاری صمیمانه با گروه‌های متخصص، اساتید دانشگاهی و صنایع پیشرو جهت توسعه فناوری‌های پیشرفته، ارتقاء امید به زندگی در جامعه و سربلندی ایران عزیز با آغوش باز استقبال می‌کنیم؛ چرا که این مسیر یقیناً با همکاری جمعی و مشارکت هم‌افزا پیش خواهد رفت.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 hover:bg-emerald-500 active:scale-[0.98] transition-all"
              >
                <span>ارتباط و پیشنهاد همکاری هم‌افزا</span>
                <ArrowLeft size={16} />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-800 shadow-2xs hover:bg-slate-50 active:scale-[0.98] transition-all"
              >
                <span>مشاهده کاتالوگ محصولات فعال</span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
