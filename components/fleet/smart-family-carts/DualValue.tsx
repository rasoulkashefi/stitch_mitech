import React from 'react';
import { Check } from 'lucide-react';

const familyBenefits = [
  {
    title: 'صندلی ارگونومیک طبی و استاندارد',
    desc: 'طراحی منطبق بر آناتومی خردسالان همراه با امکان تغییر زاویه لمیدن و خواب برای آسایش طولانی‌مدت.',
  },
  {
    title: 'المان‌های سرگرمی داخلی و تعاملی',
    desc: 'سیستم صوتی اختصاصی با ولوم کنترل‌شده برای پخش قصه‌های صوتی، موسیقی ملایم و بازی‌های تعاملی کودکانه.',
  },
  {
    title: 'دست‌های کاملاً آزاد والدین',
    desc: 'حذف کامل نیروی هل دادن کالسکه؛ امکان حمل راحت کیسه‌های خرید، کار با تلفن همراه یا نوشیدن قهوه.',
  },
  {
    title: 'حرکت همیشگی در دید مستقیم والدین',
    desc: 'کالسکه جلوتر از والدین حرکت می‌کند تا نیازی به چرخیدن یا نگرانی از وضعیت فرزند در طول گشت‌وگذار نباشد.',
  },
];

const venueBenefits = [
  {
    title: 'افزایش زمان ماندگاری و حجم سبد خرید',
    desc: 'والدین بدون خستگی کودکان ساعات بیشتری را در مرکز خرید سپری کرده و خریدهای بیشتری انجام می‌دهند.',
  },
  {
    title: 'جذب خانواده‌ها به عنوان مشتریان کلیدی',
    desc: 'تبدیل مال یا هایپرمارکت به انتخاب اول خانواده‌های دارای فرزند و ایجاد تمایز قاطع با سایر رقبا.',
  },
  {
    title: 'درآمدزایی مستقیم به صورت کرایه‌ای (MaaS)',
    desc: 'امکان ارائه کالسکه به صورت اجاره برحسب زمان با اپلیکیشن یا به عنوان مزیت اختصاصی باشگاه مشتریان.',
  },
  {
    title: 'بهینه‌سازی جریان تردد و کاهش تداخل راهروها',
    desc: 'ناوبری هوشمند، حفظ سرعت یکنواخت و جلوگیری از راه‌بندان در ورودی‌ها، راهروها و نزدیکی فروشگاه‌ها.',
  },
];

export default function DualValue() {
  return (
    <section className="bg-slate-50/60 px-6 py-28 lg:py-32 border-t border-slate-100" dir="rtl">
      <div className="mx-auto max-w-7xl">
        
        {/* Editorial Section Header */}
        <div className="mb-16 max-w-2xl text-right">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
            ارزش پیشنهادی دوگانه • Dual Value Proposition
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 lg:text-5xl leading-tight tracking-tight">
            لذت خرید برای خانواده‌ها،
            <br />
            <span className="text-slate-400">سودآوری برای مراکز تجاری.</span>
          </h2>
        </div>

        {/* 2-Column Sharp Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: For Families (B2C) - Crisp White Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xs text-right">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  01 / والدین و کودکان (B2C)
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  رضایت ۱۰۰٪ خانواده‌ها
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                پایان خستگی کودکان و استرس والدین
              </h3>
              <p className="text-sm leading-7 text-slate-600 mb-8">
                تجربه‌ای شاداب و بی‌دغدغه در گشت‌وگذار و خرید، بدون خستگی دست‌ها و کلافگی خردسالان با پشتیبانی دستیار حرکتی هوشمند.
              </p>

              {/* Minimal Linear Benefit Items */}
              <div className="space-y-6 pt-2">
                {familyBenefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="grid size-5 place-items-center rounded-full bg-emerald-50 text-emerald-600 shrink-0 mt-1">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-6 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>طراحی انسان‌محور (Human-Centered)</span>
              <span className="text-slate-700 font-semibold">Family Experience First</span>
            </div>
          </div>

          {/* Column 2: For Malls & Venues (B2B) - Sharp Dark Slate Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-8 sm:p-10 text-white shadow-md text-right">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  02 / مال‌ها، هایپرمارکت‌ها و هتل‌ها (B2B)
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-white/10 px-3 py-1 rounded-full">
                  رشد ۳۵٪ زمان ماندگاری
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                افزایش زمان ماندگاری مراجعان و ارتقای وفاداری مشتری
              </h3>
              <p className="text-sm leading-7 text-slate-300 mb-8">
                جذب خانواده‌ها به عنوان باارزش‌ترین مشتریان مراکز خرید و ارائه نسل نوین خدمات رفاهی ارزش افزوده در فضاهای مدرن.
              </p>

              {/* Minimal Linear Benefit Items */}
              <div className="space-y-6 pt-2">
                {venueBenefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="grid size-5 place-items-center rounded-full bg-white/10 text-emerald-400 shrink-0 mt-1">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-6 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span>مدیریت ناوگان تجاری (Smart Retail Mobility)</span>
              <span className="text-emerald-400 font-semibold">High-Traffic Venues</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
