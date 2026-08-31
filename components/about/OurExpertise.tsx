import React from 'react';
import {
  Factory,
  HeartHandshake,
  Bot,
  Truck,
  SunMedium,
  Accessibility,
  Bike,
  MoveUpRight,
  SlidersHorizontal,
  Cpu,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const industrialProducts = [
  {
    title: 'ربات‌های خودران انبارداری',
    en: 'Warehouse AMRs & AGVs',
    desc: 'مسیریابی طبیعی بدون نشانگر (SLAM)، حمل بارهای سنگین تا ۱ تن و هماهنگی بلادرنگ با سیستم‌های مدیریت انبار (WMS).',
    icon: Bot,
    tags: ['ناوبری LiDAR', 'سیستم خودشارژ', 'ایمنی ۳۶۰ درجه'],
  },
  {
    title: 'ربات‌های تحویل کالا',
    en: 'Indoor & Campus Delivery Robots',
    desc: 'توزیع خودکار مرسولات و اقلام حساس در مجتمع‌های تجاری، بیمارستان‌ها و فرودگاه‌ها با محفظه امن کدگذاری‌شده.',
    icon: Truck,
    tags: ['تردد میان‌طبقاتی با آسانسور', 'ارتباط ابری ناوگان'],
  },
  {
    title: 'ربات‌های پاک‌کننده پنل‌های خورشیدی',
    en: 'Solar Panel Cleaning Robots',
    desc: 'نظافت مکانیزه و تمام‌خودکار مزارع خورشیدی در مناطق کویری بدون نیاز به آب و ارتقای چشمگیر راندمان تولید انرژی برق.',
    icon: SunMedium,
    tags: ['مقاومت به غبار IP66', 'عملکرد بدون آب', 'سنسورهای هوشمند لبه'],
  },
];

const assistiveProducts = [
  {
    title: 'ویلچرهای برقی هوشمند',
    en: 'Autonomous & Smart Wheelchairs',
    desc: 'ترمز اضطراری فعال، کنترلر ارگونومیک فوق‌روان، تشخیص سطوح شیب‌دار و ناوبری کمکی برای اوج استقلال فردی توانخواهان.',
    icon: Accessibility,
    tags: ['ترمز الکترومغناطیسی', 'جوی‌استیک داینامیک', 'سنسور پیشگیری برخورد'],
  },
  {
    title: 'اسکوترهای هوشمند شهری و توریستی',
    en: 'Smart Mobility Scooters',
    desc: 'وسایل نقلیه سبک، پایدار و ارگونومیک برای جابه‌جایی راحت و بی‌دغدغه در فضاهای بزرگ تجاری، مراکز گردشگری و محوطه‌ها.',
    icon: Bike,
    tags: ['شاسی فوق‌سبک', 'باتری لیتیومی بادوام', 'شعاع گردش بهینه'],
  },
  {
    title: 'پله‌پیماهای هوشمند',
    en: 'Intelligent Stairlifts',
    desc: 'سامانه‌های ایمن، نرم و بی‌صدا برای جابه‌جایی عمودی در راه‌پله‌های مستقیم و پیچشی منازل مسکونی و مراکز درمانی.',
    icon: MoveUpRight,
    tags: ['حرکت نرم و بی‌لرزش', 'سنسور توقف روی مانع', 'صندلی چرخان ارگونومیک'],
  },
  {
    title: 'سیستم‌های پیشرفته موقعیت‌یابی صندلی',
    en: 'Advanced Seating & Positioning Systems',
    desc: 'تنظیمات برقی دقیق شیب، ارتفاع، پشتی و زیرپایی با الگوریتم‌های توزیع هوشمند فشار بدن جهت جلوگیری از زخم بستر و خستگی.',
    icon: SlidersHorizontal,
    tags: ['تیلت و رایز برقی', 'توزیع فشار داینامیک', 'حافظه حالت‌های نشستن'],
  },
];

export default function OurExpertise() {
  return (
    <section
      id="expertise"
      dir="rtl"
      className="bg-slate-50/70 py-24 lg:py-32 border-b border-slate-100 font-[Vazirmatn,sans-serif]"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-emerald-700 shadow-2xs mb-4">
            <Cpu size={14} className="text-emerald-600" />
            <span>معماری محصولات و دامنه‌های مهندسی</span>
          </div>

          <h2 className="text-3xl font-extrabold leading-snug text-blue-950 sm:text-4xl lg:text-5xl tracking-tight">
            تنوع در نوآوری، <span className="text-emerald-600">یکپارچگی در کیفیت</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600">
            تخصص بیش از یک دهه‌ای ما در طراحی و ساخت درایوهای الکتریکی و هوش ناوبری، در دو شاخه کلیدی تجلی یافته است؛ اتوماسیون صنعتی و لجستیک، در کنار تجهیزات توانبخشی و تحرک فردی.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Bento Card 1: Industry & Logistics (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-white p-7 lg:p-9 shadow-sm hover:border-emerald-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="grid size-12 place-items-center rounded-2xl bg-slate-900 text-white shadow-xs">
                    <Factory size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-950">
                      صنعت و لجستیک خودران
                    </h3>
                    <p className="text-xs font-medium text-slate-500">
                      Industrial & Logistics Automation
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  ۳ دسته راهکار
                </span>
              </div>

              <p className="text-sm leading-7 text-slate-600 mb-6">
                طراحی شده برای محیط‌های پرچالش صنعتی، خطوط تولید و انبارهای هوشمند با هدف افزایش بهره‌وری، بهینه‌سازی انرژی و حذف ریسک خطای انسانی.
              </p>

              {/* Products List */}
              <div className="space-y-4">
                {industrialProducts.map((prod, idx) => {
                  const Icon = prod.icon;
                  return (
                    <div
                      key={idx}
                      className="group rounded-2xl border border-slate-200/50 bg-slate-50 p-5 transition-all duration-300 hover:border-emerald-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-emerald-600 border border-slate-200/70 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <Icon size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-1">
                            <h4 className="text-base font-bold text-blue-950">
                              {prod.title}
                            </h4>
                            <span className="text-[11px] font-mono text-slate-400">
                              {prod.en}
                            </span>
                          </div>
                          <p className="mt-1.5 text-xs leading-6 text-slate-600">
                            {prod.desc}
                          </p>

                          {/* Feature Tags */}
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {prod.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[11px] font-medium text-slate-600 border border-slate-200/60"
                              >
                                <CheckCircle2 size={10} className="text-emerald-600" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Industrial Bottom Badge */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck size={16} className="text-emerald-600" />
                مطابق استانداردهای بین‌المللی ایمنی ماشین‌آلات
              </span>
              <span className="font-mono text-slate-400">IP65 / CE Compliant</span>
            </div>
          </div>

          {/* Bento Card 2: Human Mobility & Assistive Tech (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-white p-7 lg:p-9 shadow-sm hover:border-emerald-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="grid size-12 place-items-center rounded-2xl bg-emerald-600 text-white shadow-xs">
                    <HeartHandshake size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-950">
                      توانبخشی و تحرک فردی
                    </h3>
                    <p className="text-xs font-medium text-slate-500">
                      Human Mobility & Assistive Engineering
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                  ۴ دسته محصول
                </span>
              </div>

              <p className="text-sm leading-7 text-slate-600 mb-6">
                تجهیزات ارگونومیک و فوق‌پیشرفته با تمرکز بر حفظ کرامت انسانی، بازگرداندن استقلال حرکتی به سالمندان و افراد دارای توان‌یابی، با بالاترین استاندارد رفاه و ایمنی.
              </p>

              {/* Products List */}
              <div className="space-y-4">
                {assistiveProducts.map((prod, idx) => {
                  const Icon = prod.icon;
                  return (
                    <div
                      key={idx}
                      className="group rounded-2xl border border-slate-200/50 bg-slate-50 p-4 transition-all duration-300 hover:border-emerald-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-white text-emerald-600 border border-slate-200/70 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <Icon size={18} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-1">
                            <h4 className="text-sm font-bold text-blue-950">
                              {prod.title}
                            </h4>
                            <span className="text-[10px] font-mono text-slate-400">
                              {prod.en}
                            </span>
                          </div>
                          <p className="mt-1 text-xs leading-5 text-slate-600">
                            {prod.desc}
                          </p>

                          {/* Feature Tags */}
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {prod.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] font-medium text-slate-600 border border-slate-200/60"
                              >
                                <CheckCircle2 size={10} className="text-emerald-600" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Assistive Bottom Badge */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <Zap size={16} className="text-emerald-600" />
                کنترل‌های ارگونومیک سازگار با سیستم‌های درمانی
              </span>
              <span className="font-mono text-slate-400">Medical Grade Comfort</span>
            </div>
          </div>

          {/* Bento Spanning Footer Card: The Unified Core (12 Cols) */}
          <div className="lg:col-span-12 rounded-2xl border border-slate-200/50 bg-white p-7 lg:p-8 shadow-xs">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center">
              
              <div className="md:col-span-8 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                  <Cpu size={15} />
                  <span>معماری فنی یکپارچه (Unified Drive & Navigation Stack)</span>
                </div>
                <h4 className="text-lg font-bold text-blue-950">
                  پیوند عمیق درایوهای الکتریکی پرقدرت و هوش مصنوعی ناوبری خودران
                </h4>
                <p className="text-sm leading-7 text-slate-600">
                  تمامی ربات‌ها و تجهیزات توانبخشی ام. آی. تک. از هسته مشترک کنترل توان، سنسور فیوژن ۳۶۰ درجه و سیستم مانیتورینگ آنلاین بهره می‌برند. این یکپارچگی مهندسی، قابلیت اطمینان حداکثری و استهلاک حداقلی را تضمین می‌کند.
                </p>
              </div>

              <div className="md:col-span-4 flex md:justify-end">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-xs hover:bg-emerald-600 active:scale-[0.98] transition-all duration-300"
                >
                  <span>درخواست کاتالوگ و مشاوره فنی</span>
                  <ArrowLeft
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
