import React from 'react';

const steps = [
  {
    stepNumber: '01',
    title: 'انتخاب مقصد (One-Touch)',
    subtitle: 'ورودی ترمینال یا ایستگاه مراجعین',
    description:
      'مسافر روی صفحه لمسی با وضوح بالا یا از طریق اسکن بارکد بلیت پرواز و پذیرش درمانی، مقصد خود را با یک اشاره ساده انتخاب می‌کند.',
  },
  {
    stepNumber: '02',
    title: 'ناوبری هوشمند (Autonomous Cruising)',
    subtitle: 'طی مسیر در کریدورهای پرتردد',
    description:
      'ویلچر با بهره‌گیری از بینایی ماشین و سنسورهای ۳۶۰ درجه، بدون نیاز به GPS یا اینترنت از میان جمعیت و موانع به نرمی عبور می‌کند.',
  },
  {
    stepNumber: '03',
    title: 'توقف‌های میانی (Convenience Stops)',
    subtitle: 'انعطاف‌پذیری در طول مسیر',
    description:
      'مسافر می‌تواند در هر نقطه با فشردن کلید «توقف موقت»، جهت خرید از فروشگاه‌ها، رفتن به کافه یا استراحت توقف نماید.',
  },
  {
    stepNumber: '04',
    title: 'پیاده‌شدن و بازگشت خودکار (Auto-Return)',
    subtitle: 'مقصد نهایی و آماده‌سازی چرخه بعد',
    description:
      'پس از پیاده‌شدن مسافر در گیت پرواز، دستگاه با تأیید وضعیت خلوت به صورت خودکار به ایستگاه مبدا یا داک شارژ سریع بازمی‌گردد.',
  },
];

export default function WorkflowSteps() {
  return (
    <section className="bg-white px-6 py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20 max-w-2xl text-right">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
            چرخه سفر هوشمند • Journey Flow
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 lg:text-5xl leading-tight tracking-tight">
            سفر خودران،
            <br />
            <span className="text-slate-400">در ۴ گام بدون اصطکاک.</span>
          </h2>
        </div>

        {/* 4-Step Linear Minimalist Columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.stepNumber}
              className="border-t-2 border-slate-900 pt-8 flex flex-col justify-between text-right"
            >
              <div>
                <span className="text-3xl font-extrabold text-slate-300 block mb-6">
                  {step.stepNumber}
                </span>

                <span className="text-xs font-bold text-emerald-600 block mb-2">
                  {step.subtitle}
                </span>

                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-medium text-slate-400">
                <span>چرخه تردد مستقل</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
