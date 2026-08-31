import React from 'react';
import { Check } from 'lucide-react';

const passengerBenefits = [
  {
    title: 'حرکت فوق‌العاده نرم و ارگونومیک',
    desc: 'سیستم تعلیق فعال و صندلی طبی با مموری فوم جهت جلوگیری از هرگونه تکان ناگهانی.',
  },
  {
    title: 'انتخاب آسان مقصد با یک لمس',
    desc: 'رابط کاربری لمسی با حروف درشت، زبان‌های گوناگون و امکان اسکن بلیت پرواز یا پذیرش.',
  },
  {
    title: 'توقف‌های اختیاری در طول مسیر',
    desc: 'امکان توقف بین‌راهی جهت خرید از فروشگاه‌ها، رفتن به کافه یا استراحت با یک کلید.',
  },
  {
    title: 'حفظ کامل حریم خصوصی و استقلال فردی',
    desc: 'احیای حس اعتماد به نفس و استقلال سالمندان و توان‌یابان بدون نیاز به همراهی خدمه.',
  },
];

const facilityBenefits = [
  {
    title: 'مداومت کاری ۲۴/۷ بدون خستگی',
    desc: 'پوشش بی‌وقفه شیفت‌های شبانه‌روزی و پروازهای فشرده بدون دغدغه خستگی یا غیبت پرسنل.',
  },
  {
    title: 'حذف خطای انسانی و اتلاف زمان',
    desc: 'هدایت دقیق و به‌موقع مسافر به گیت صحیح و جلوگیری از جاماندن مسافران ترانزیت.',
  },
  {
    title: 'مدیریت متمرکز ناوگان (Fleet OS)',
    desc: 'داشبورد متمرکز اعزام، پیش‌بینی ساعات پیک ورود مسافر و پایش لحظه‌ای سلامت دستگاه‌ها.',
  },
  {
    title: 'تحویل خودکار مسافر و بازگشت به ایستگاه',
    desc: 'انجام کل چرخه تردد از ورودی تا گیت بدون نیاز به جمع‌آوری دستی دستگاه‌ها توسط پرسنل.',
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-slate-50 px-6 py-28 lg:py-32 border-t border-slate-100">
      <div className="mx-auto max-w-7xl">
        
        {/* Editorial Section Header */}
        <div className="mb-16 max-w-2xl text-right">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
            ارزش پیشنهادی دوگانه • Dual Impact
          </p>
          <h2 className="text-3xl font-extrabold text-blue-950 lg:text-5xl leading-tight tracking-tight">
            استقلال برای سرنشین،
            <br />
            <span className="text-slate-400">بهره‌وری برای سازمان.</span>
          </h2>
        </div>

        {/* 2-Column Sharp Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: For Passengers (B2C) - Crisp White Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-white p-8 sm:p-10 shadow-lg text-right">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  01 / تجربه سرنشین (B2C)
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  رضایت ۹۹.۴٪
                </span>
              </div>

              <h3 className="text-2xl font-bold text-blue-950 mb-4 tracking-tight">
                استقلال، کرامت و راحتی سرنشین
              </h3>
              <p className="text-sm leading-7 text-slate-600 mb-8">
                تجربه‌ای بدون اصطکاک و محترمانه برای تمامی مراجعان با نیازهای ویژه حرکتی، بدون نیاز به انتظار برای همراه یا خدمه فرودگاه و بیمارستان.
              </p>

              {/* Minimal Linear Benefit Items */}
              <div className="space-y-6 pt-2">
                {passengerBenefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="grid size-5 place-items-center rounded-full bg-emerald-50 text-emerald-600 shrink-0 mt-1">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-blue-950">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-6 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>طراحی انسان‌محور (Human-Centered)</span>
              <span className="text-slate-700 font-semibold">User Experience First</span>
            </div>
          </div>

          {/* Column 2: For Managers (B2B) - Sharp Dark Slate Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-8 sm:p-10 text-white shadow-md text-right">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  02 / مدیریت سازمان (B2B)
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-white/10 px-3 py-1 rounded-full">
                  کاهش ۵۰٪ OPEX
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                کاهش ۵۰٪ هزینه‌های عملیاتی و ارتقای بهره‌وری
              </h3>
              <p className="text-sm leading-7 text-slate-300 mb-8">
                تبدیل خدمات همراهی مسافران کم‌توان به یک فرآیند مکانیزه، پایدار و بدون خطای انسانی، بدون نیاز به استخدام پرسنل اضافی.
              </p>

              {/* Minimal Linear Benefit Items */}
              <div className="space-y-6 pt-2">
                {facilityBenefits.map((item, index) => (
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
              <span>مدیریت ناوگان خودران (AMaaS)</span>
              <span className="text-emerald-400 font-semibold">Autonomous Mobility</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
