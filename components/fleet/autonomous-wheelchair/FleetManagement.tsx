import React from 'react';

const fleetFeatures = [
  {
    num: '01',
    title: 'مشاهده لحظه‌ای موقعیت (Digital Twin)',
    text: 'ردیابی زنده تک‌تک ویلچرها روی نقشه ترمینال و مجتمع با دقت بالا بدون نیاز به GPS.',
  },
  {
    num: '02',
    title: 'پایش سلامت باتری و هشدار سرویس',
    text: 'مانیتورینگ آنلاین وضعیت شارژ و اعزام خودکار دستگاه‌ها به داک شارژ قبل از اتمام باتری.',
  },
  {
    num: '03',
    title: 'هدایت دستی از راه دور (Remote Override)',
    text: 'امکان کنترل مستقیم و فرمان‌دهی به ویلچر از طریق اتاق مانیتورینگ در شرایط اضطراری.',
  },
  {
    num: '04',
    title: 'گزارش‌های تحلیلی و ترافیکی',
    text: 'تحلیل ساعات اوج تقاضا، نرخ اشغال ناوگان و بهینه‌سازی مسیرهای پرتردد فرودگاهی.',
  },
];

export default function FleetManagement() {
  return (
    <section className="bg-slate-950 px-6 py-28 lg:py-32 text-white border-t border-slate-900">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end text-right">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-400">
              سیستم کنترل مرکزی • Mitech Fleet OS
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-white lg:text-5xl tracking-tight">
              کنترل متمرکز،
              <br />
              نظارت <span className="text-emerald-400">یکپارچه ناوگان.</span>
            </h2>
          </div>

          <div>
            <p className="text-base sm:text-lg leading-8 text-slate-300">
              سامانه کنترل مرکزی میکائیل امکان نظارت کامل، اعزام هوشمند و پایش لحظه‌ای ده‌ها یونیت ویلچر خودران را در محیط‌های فرودگاهی و درمانی به صورت ابری یا محلی فراهم می‌سازد.
            </p>
          </div>
        </div>

        {/* 4 Linear Grid Features */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 border-t border-white/15 pt-12">
          {fleetFeatures.map((item) => (
            <div key={item.num} className="flex flex-col justify-between text-right">
              <div>
                <span className="text-2xl font-extrabold text-emerald-400 block mb-4">
                  {item.num}
                </span>

                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 text-xs font-medium text-slate-500">
                <span>واحد تله‌متری ناوگان</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
