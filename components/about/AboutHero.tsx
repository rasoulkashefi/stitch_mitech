import React from 'react';
import {
  Zap,
  Navigation,
  ShieldCheck,
  ArrowLeft,
  ChevronDown,
  Layers,
  Calendar,
} from 'lucide-react';

const milestones = [
  {
    icon: Calendar,
    title: 'تأسیس در ۱۳۸۹ (۲۰۱۰)',
    desc: 'آغاز مسیر از تحقیق بنیادین بر روی درایوهای الکتریکی و کنترل موتور',
  },
  {
    icon: Zap,
    title: 'هسته توانمند درایو',
    desc: 'تسلط بر سخت‌افزار و فریم‌ور کنترل پیشرانه با بیش از یک دهه تکامل',
  },
  {
    icon: Navigation,
    title: 'ناوبری خودران لبه (Edge AI)',
    desc: 'توسعه الگوریتم‌های بومی هدایت خودکار بدون وابستگی به زیرساخت خارجی',
  },
  {
    icon: ShieldCheck,
    title: 'استاندارد ایمنی صنعتی',
    desc: 'طراحی منطبق بر بالاترین الزامات ایمنی و کارکرد مداوم در شرایط سخت',
  },
];

export default function AboutHero() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-100"
    >
      {/* Background Decorative Tech Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />

      {/* Subtle Ambient Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-emerald-500/10 blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="راهنمای مسیر" className="mb-8 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <a href="/" className="hover:text-emerald-600 transition-colors">
            صفحه اصلی
          </a>
          <span className="text-slate-300">/</span>
          <span className="text-slate-400">درباره ما</span>
          <span className="text-slate-300">/</span>
          <span className="text-emerald-600 font-bold">داستان توسعه ام. آی. تک.</span>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-emerald-200/80 bg-emerald-50/80 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>داستان ما: از هسته محرک‌ها تا خلق آزادی حرکت</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl font-extrabold leading-[1.3] text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
              بیش از یک دهه مهندسی؛
              <br />
              <span className="text-emerald-600">برای فردایی که خودش مسیر را می‌شناسد.</span>
            </h1>

            {/* Story Paragraph */}
            <div className="space-y-4 text-base sm:text-lg leading-8 sm:leading-9 text-slate-600 font-normal">
              <p>
                شرکت دانش‌بنیان <strong className="font-bold text-slate-900">«فناوری هوشمند میکائیل» (Mitech)</strong> از سال ۱۳۸۹ فعالیت رسمی خود را در حوزه فناوری کنترل و ناوبری در وسایل نقلیه الکتریکی و تکنولوژی درایو این وسایل <span className="font-semibold text-slate-900" dir="ltr">(EV Drives Technology)</span> آغاز نمود.
              </p>
              <p>
                بیش از یک دهه تحقیق تخصصی در حوزه ادوات کمک-توانبخشی <span className="font-semibold text-slate-900" dir="ltr">(Assistive Devices)</span> و سیستم‌های رباتیک، منجر به خلق محصولاتی با بالاترین ضریب ایمنی و اعتمادپذیری گردیده که گلوگاه فناوری کنترل و ناوبری انواع متحرک‌های برقی محسوب شده و در سطح کیفی برندهای برتر جهانی ارزیابی می‌شوند.
              </p>
              <p className="text-sm sm:text-base leading-7 text-slate-500">
                با اخذ گرنت بنیاد ملی علم ایران و همکاری رسمی دانشگاه صنعتی امیرکبیر در حوزه بینایی ماشین و هوش مصنوعی، فصل نوینی در دستیابی به پلتفرم‌های حمل‌ونقل خودران سازمانی و انفرادی هوشمند در کشور گشوده شده است.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#expertise"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-500 active:scale-[0.98] transition-all duration-300"
              >
                <span>مشاهده وسعت تخصص و محصولات</span>
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              </a>

              <a
                href="#ctsc-vision"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 shadow-2xs hover:bg-slate-50 hover:border-slate-400 active:scale-[0.98] transition-all duration-300"
              >
                <span>چشم‌انداز منطقه و مرکز CTSC</span>
                <ChevronDown size={16} className="text-slate-500" />
              </a>
            </div>

          </div>

          {/* Highlights & Milestone Cards Grid */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200/50 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-8 shadow-sm">
              
              {/* Header Badge */}
              <div className="mb-6 flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="grid size-9 place-items-center rounded-xl bg-slate-900 text-white">
                    <Layers size={18} />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">ستون‌های بنیادین توسعه</h2>
                    <p className="text-xs text-slate-500">مسیر بلوغ مهندسی ام. آی. تک.</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                  ۱۳۸۹ — اکنون
                </span>
              </div>

              {/* 4 Pillars List */}
              <div className="grid grid-cols-1 gap-4">
                {milestones.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-start gap-4 rounded-2xl border border-slate-200/50 bg-white p-4 shadow-2xs transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-slate-50 text-emerald-600 border border-slate-100 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-colors">
                        <Icon size={20} />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs leading-5 text-slate-500 font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-5 flex items-center gap-2 rounded-xl bg-slate-100/70 px-3.5 py-2.5 text-xs text-slate-600">
                <ShieldCheck size={15} className="shrink-0 text-emerald-600" />
                <span>طراحی، مهندسی و تجاری‌سازی با تکیه بر استانداردهای ایمنی روز اروپا و جهان</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
