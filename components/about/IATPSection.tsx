import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  HeartHandshake,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  Smartphone,
  Cpu,
  GraduationCap,
  Activity,
  Layers,
} from 'lucide-react';

export default function IATPSection() {
  return (
    <section
      id="iatp-reference"
      dir="rtl"
      className="relative overflow-hidden bg-white py-20 lg:py-28 border-b border-slate-100 font-[Vazirmatn,sans-serif]"
    >
      {/* Background Subtle Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30" />
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-800 shadow-2xs mb-4">
            <HeartHandshake size={15} className="text-emerald-600" />
            <span>مرجع مادر-تخصصی سیستم‌های کنترل و ناوبری توانبخشی</span>
          </div>

          <h2 className="text-3xl font-extrabold leading-snug text-blue-950 sm:text-4xl lg:text-5xl tracking-tight">
            مرجع فناوری‌های کمکی هوشمند{' '}
            <span className="text-emerald-600">IATP</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-8 text-slate-600">
            شرکت دانش‌بنیان فناوری هوشمند میکائیل، به عنوان تامین‌کننده مرجع فناوری‌های کمکی هوشمند{' '}
            <span className="font-semibold text-slate-900" dir="ltr">(Intelligent Assistive Technology Provider - IATP)</span>{' '}
            برای سالمندان و افراد توانیاب در کشور، رسماً از سوی «سازمان بهزیستی کل کشور» به عنوان مرجع تجهیزات توانبخشی هوشمند به تمام استان‌ها معرفی گردیده است.
          </p>
        </div>

        {/* Main Grid: Narrative + Enhanced Image */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Right Column: Narrative & Key Capabilities (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Story Card 1: Official Welfare Accreditation */}
            <div className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="grid size-10 place-items-center rounded-xl bg-emerald-600 text-white shadow-xs">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-blue-950">
                    ماموریت ملی در توانمندسازی و استقلال فردی
                  </h3>
                  <p className="text-xs text-slate-500">معرفی رسمی از سوی سازمان بهزیستی کل کشور</p>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-600">
                ارائه راهکارهای کارآمد و اختصاصی برای افراد دارای معلولیت‌های خاص نظیر{' '}
                <strong className="text-slate-900 font-semibold">ضایعات نخاعی گردنی، ام‌اس (MS)، دیستروفی عضلانی، سی‌پی (CP)</strong>{' '}
                و سالمندان عزیز؛ با هدف توانمندسازی کامل در کنترل مستقل ویلچر برقی، بازگرداندن استقلال فردی به زندگی و کاهش چشمگیر هزینه‌های عمومی نظام سلامت و بهزیستی کشور.
              </p>
            </div>

            {/* Story Card 2: Two Wings of Flight */}
            <div className="rounded-2xl border border-blue-900/10 bg-gradient-to-br from-blue-950 to-slate-900 p-6 sm:p-7 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="grid size-10 place-items-center rounded-xl bg-emerald-500 text-slate-950 shadow-xs">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    «دو بال پرواز»: تلفیق سخت‌افزار بومی با هوش مصنوعی
                  </h3>
                  <p className="text-xs text-slate-300">گرنت بنیاد ملی علم ایران و دانشگاه صنعتی امیرکبیر</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm leading-7 text-slate-200">
                با ترکیب دو فناوری زیرساختی شامل <strong className="text-emerald-400 font-semibold">بال اول (کنترل و ناوبری فیزیکی درایوها)</strong> و{' '}
                <strong className="text-emerald-400 font-semibold">بال دوم (بینایی ماشین و هوش مصنوعی)</strong>، فصل نوینی در حمل‌ونقل خودران رقم خورده است. با اخذ گرنت ملی علم در سال ۱۴۰۲ و همکاری رسمی دانشگاه امیرکبیر، این پلتفرم امروز علاوه بر حوزه توانبخشی، در صنایع فرودگاهی، تجاری، گردشگری و هتلینگ به کار گرفته می‌شود.
              </p>
            </div>

            {/* Service Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {[
                { title: 'طراحی، تولید و سفارشی‌سازی بومی', desc: 'متناسب با شرایط جسمی و ارگونومی کاربر' },
                { title: 'مشاوره فنی رایگان و ارزیابی نیاز', desc: 'توسط متخصصان باتجربه مهندسی توانبخشی' },
                { title: 'کلینیک عیب‌یابی و تعمیرات تخصصی', desc: 'تعمیر انواع بردهای کنترلر و جوی‌استیک' },
                { title: 'پلتفرم تله‌متری و اپلیکیشن همراه', desc: 'پایش موقعیت، مسافت و کنترل لمسی هوشمند' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 rounded-xl border border-slate-200/60 bg-white p-3.5 shadow-2xs">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-blue-950">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-4">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Link to Dedicated History Page */}
            <div className="pt-2">
              <Link
                href="/about/history-vision"
                className="group inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <span>مطالعه تاریخچه کامل و داستان شکل‌گیری میکائیل</span>
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              </Link>
            </div>

          </div>

          {/* Left Column: Enhanced High-Tech Visual Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50 to-white p-4 sm:p-5 shadow-xl">
              
              {/* Badges on Top of Image */}
              <div className="mb-3 flex items-center justify-between px-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-800">
                  <Activity size={13} className="text-emerald-600" />
                  اکوسیستم تحرک متصل (IoT Telemetry)
                </span>
                <span className="text-[11px] font-mono text-slate-500">IATP System</span>
              </div>

              {/* Enhanced Visual Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-900 shadow-md">
                <Image
                  src="/images/about/iatp-smart-assistive.jpg"
                  alt="مرجع تخصصی فناوری های کمکی هوشمند IATP شرکت میکائیل"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                
                {/* Subtle bottom gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Micro-Badge */}
                <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-white text-xs backdrop-blur-md bg-slate-950/60 border border-white/10 rounded-xl px-3.5 py-2">
                  <div className="flex items-center gap-2">
                    <Smartphone size={15} className="text-emerald-400 shrink-0" />
                    <span className="font-medium text-[11px] sm:text-xs">کنترل از راه دور، پایش مسیر و تله‌متری هوشمند</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">MITECH APP</span>
                </div>
              </div>

              {/* Caption Description */}
              <div className="mt-4 px-2 text-right">
                <p className="text-xs leading-6 text-slate-600">
                  اتصال یکپارچه ویلچر توانبخشی هوشمند به اپلیکیشن اختصاصی Mitech؛ ثبت مسیرهای طی‌شده، گزارش‌گیری مصرف باتری و عیب‌یابی از راه دور بر بستر اینترنت اشیاء (IoT).
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <GraduationCap size={13} className="text-emerald-600" />
                    دانشگاه صنعتی امیرکبیر
                  </span>
                  <span className="flex items-center gap-1">
                    <Cpu size={13} className="text-emerald-600" />
                    سخت‌افزار و فریم‌ور ۱۰۰٪ بومی
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
