import React from 'react';
import { CheckCircle2, Scan, Hand, Zap, ScanLine, MapPin } from 'lucide-react';

const ourTechFeatures = [
  {
    icon: Scan,
    title: 'شناسایی هوشمند بدون تگ سخت‌افزاری',
    desc: 'سیستم بینایی ماشین ام. آی. تک. با استفاده از دوربین و الگوریتم‌های هوش مصنوعی، کاربر را بدون نیاز به ریموت، تگ RFID یا هیچ ماژول سخت‌افزاری اضافی شناسایی کرده و قفل بصری روی او برقرار می‌کند.',
  },
  {
    icon: Hand,
    title: 'فرامین اشاره‌ای (Gesture Recognition)',
    desc: 'کاربر با علامت «ایست دست»، اشاره «بیا دنبالم» یا هر زبان اشاره از پیش تعریف‌شده می‌تواند ربات را کنترل کند. نه اپ. نه ریموت. فقط یک اشاره.',
  },
];

const legacyProblems = [
  'نیاز به حمل ریموت یا تگ RFID توسط کاربر',
  'از دست دادن ردیابی در ازدحام یا گرد و غبار',
  'وابستگی به نوار مغناطیسی یا خطوط کف زمین',
  'ناتوانی در مسیریابی دینامیک و واکنش به موانع',
  'فرمان‌دهی پیچیده از طریق کنترل دستی',
];

const navFeatures = [
  {
    icon: ScanLine,
    title: 'اسکنر لیزری LiDAR ۳۶۰ درجه',
    desc: 'پوشش کامل محیطی برای تشخیص موانع متحرک و ثابت در تمام زوایا، حتی در شرایط کم‌نور یا غبارآلود.',
  },
  {
    icon: MapPin,
    title: 'مسیریابی دینامیک بدون زیرساخت زمین',
    desc: 'بدون نیاز به نوار مغناطیسی، خط‌کشی کف یا آنتن‌های هدایتی. ربات نقشه محیط را لحظه‌به‌لحظه بازسازی می‌کند.',
  },
  {
    icon: Zap,
    title: 'توقف اضطراری فوری در کمتر از ۰.۱ ثانیه',
    desc: 'سیستم ضد برخورد چندلایه با پاسخ‌دهی فوری که هم انسان‌ها و هم محموله را در هر شرایطی محافظت می‌کند.',
  },
];

export default function VisionDifferentiator() {
  return (
    <section className="bg-white px-6 py-28 lg:py-32 border-t border-slate-100">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-16 max-w-2xl text-right">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
            تمایز رقابتی • Why Mitech Vision AI
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 lg:text-5xl leading-tight tracking-tight">
            بینایی ماشین به جای سخت‌افزار؛
            <br />
            <span className="text-slate-400">فناوری نسل بعدی تعقیب هوشمند.</span>
          </h2>
        </div>

        {/* Main Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">

          {/* Left (Dark): Our Technology */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950 p-8 sm:p-10 text-white text-right">
            <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                01 / فناوری ام. آی. تک. (AI Vision)
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-white/10 px-3 py-1 rounded-full">
                نسل جدید
              </span>
            </div>

            <div className="space-y-8 flex-1">
              {ourTechFeatures.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="grid size-10 place-items-center rounded-xl bg-emerald-600/20 text-emerald-400 shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-6">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span>بدون تگ • بدون ریموت • بدون زیرساخت</span>
              <span className="text-emerald-400 font-semibold">Zero Hardware</span>
            </div>
          </div>

          {/* Right (Light): Legacy Problems */}
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10 text-right">
            <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                02 / نسل قبلی رقبا (Tag-Based)
              </span>
              <span className="text-xs font-bold text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
                نسل قدیمی
              </span>
            </div>

            <div className="space-y-4 flex-1">
              <p className="text-sm text-slate-600 leading-7 mb-6">
                سیستم‌های نسل قبلی مانند Fotrak و مشابهان برای تعقیب کاربر به تگ‌های فیزیکی یا ریموت کنترل وابسته‌اند — که این خود یک بار اضافی برای کاربر و یک نقطه شکست برای سیستم است.
              </p>
              {legacyProblems.map((prob, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-2" />
                  <span className="text-sm text-slate-500 leading-6">{prob}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
              <span>وابسته به سخت‌افزار جانبی</span>
              <span className="text-slate-500 font-semibold">Hardware-Dependent</span>
            </div>
          </div>
        </div>

        {/* Navigation Safety Row */}
        <div className="border-t border-slate-100 pt-16">
          <div className="mb-10 text-right">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              ناوبری ایمن ۳۶۰ درجه • Safe Navigation
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              بدون خطکشی، بدون زیرساخت — فقط هوش مصنوعی.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {navFeatures.map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-7 text-right hover:border-slate-300 transition-colors shadow-xs">
                <div className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 mb-5">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm leading-6 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
