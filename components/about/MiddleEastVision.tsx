import React from 'react';
import {
  Globe,
  Headphones,
  Wrench,
  GraduationCap,
  ShieldCheck,
  CheckCircle,
  Network,
} from 'lucide-react';

const ctscPillars = [
  {
    icon: Wrench,
    title: 'طراحی، توسعه و مهندسی منطقه‌ای',
    en: 'Regional R&D & Engineering',
    desc: 'بومی‌سازی سیستم‌های ناوبری، الگوریتم‌های هوش مصنوعی و درایوها متناسب با شرایط اقلیمی، دما و نیازهای خاص صنایع خاورمیانه.',
  },
  {
    icon: Headphones,
    title: 'خدمات فنی و پشتیبانی ۲۴/۷',
    en: 'Mission-Critical Support & Telematics',
    desc: 'عیب‌یابی از راه دور ناوگان‌ها، پایش آنلاین سلامت قطعات و اعزام فوری تیم‌های پشتیبانی همراه با تأمین تضمین‌شده قطعات اورجینال.',
  },
  {
    icon: GraduationCap,
    title: 'آکادمی و انتقال دانش تخصصی',
    en: 'Knowledge Transfer & Certification',
    desc: 'برگزاری دوره‌های تخصصی نگهداری، برنامه‌ریزی کنترلرها و هدایت سیستم‌های خودران برای کارشناسان و مهندسان سازمان‌های همکار.',
  },
  {
    icon: Network,
    title: 'یکپارچه‌سازی و سفارشی‌سازی ناوگان',
    en: 'Custom Integration & Fleet Scale',
    desc: 'اتصال بدون دردسر تجهیزات به سامانه‌های مدیریتی مشتریان (ERP/WMS) و طراحی راه‌حل‌های اختصاصی برای فرودگاه‌ها، بنادر و بیمارستان‌ها.',
  },
];

const coreValues = [
  {
    title: 'فرهنگ سازمانی پیشرو',
    desc: 'محیطی مبتنی بر یادگیری مستمر، احترام متقابل و خلاقیت نامحدود مهندسی.',
  },
  {
    title: 'تیم متخصص و نخبه',
    desc: 'ترکیبی از کارشناسان ارشد مکاترونیک، هوش مصنوعی، کنترل پیشرفته و طراحی صنعتی.',
  },
  {
    title: 'تعهد تزلزل‌ناپذیر به کیفیت',
    desc: 'پایبندی سخت‌گیرانه به استانداردهای بین‌المللی ایمنی و آزمون‌های سخت‌گیرانه عملکردی.',
  },
];

export default function MiddleEastVision() {
  return (
    <section
      id="ctsc-vision"
      dir="rtl"
      className="relative overflow-hidden bg-slate-950 py-24 lg:py-32 text-white font-[Vazirmatn,sans-serif]"
    >
      {/* High-tech Subtle Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] opacity-30" />

      {/* Emerald Ambient Aura */}
      <div className="pointer-events-none absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-500/5 blur-[140px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Section Top Header & Story Statement */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end mb-16 lg:mb-20">
          
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-bold text-emerald-400 backdrop-blur-md">
              <Globe size={14} />
              <span>چشم‌انداز منطقه‌ای و توسعه زیرساخت</span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl tracking-tight">
              نگاهی به وسعت خاورمیانه
              <br />
              <span className="text-emerald-400">مرکز جامع پشتیبانی فنی (CTSC)</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg leading-8 text-slate-300 font-normal border-r-2 border-emerald-500 pr-5">
              ما تنها به تولید محصول بسنده نمی‌کنیم. ام. آی. تک. در حال راه‌اندازی <strong className="text-white font-bold">«مرکز جامع پشتیبانی فنی» (CTSC)</strong> در منطقه خاورمیانه است. این هاب تخصصی، تمام نیازهای طراحی، توسعه و خدمات فنی سیستم‌های کنترل هوشمند و ناوبری را در سطح منطقه پوشش خواهد داد.
            </p>
          </div>

        </div>

        {/* CTSC 4 Pillar Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {ctscPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/30"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="grid size-12 place-items-center rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-600 group-hover:text-emerald-400 transition-colors">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mb-1 text-base font-bold text-white leading-snug">
                    {pillar.title}
                  </h3>
                  <div className="mb-3 text-[11px] font-mono text-emerald-400/80">
                    {pillar.en}
                  </div>

                  <p className="text-xs leading-6 text-slate-400 font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors">
                  <CheckCircle size={12} className="text-emerald-400" />
                  <span>استاندارد عملیاتی CTSC</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Culture & Core Values Banner */}
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 p-8 lg:p-10 backdrop-blur-md">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <ShieldCheck size={16} />
                <span>فرهنگ و ارزش‌های بنیادین</span>
              </div>
              <h3 className="text-2xl font-bold text-white leading-snug">
                ساخت فردایی روشن‌تر برای مشتریان سراسر جهان
              </h3>
              <p className="text-sm leading-7 text-slate-300">
                با فرهنگ سازمانی درست، تیم متخصص و ارزش‌های بنیادین، ما در حال ساخت فردایی روشن‌تر برای شرکت و مشتریانمان در سراسر جهان هستیم.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/90 bg-slate-950/60 p-4.5 transition-colors hover:border-slate-700"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                    <h4 className="text-sm font-bold text-white">{val.title}</h4>
                  </div>
                  <p className="text-xs leading-5 text-slate-400">{val.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
