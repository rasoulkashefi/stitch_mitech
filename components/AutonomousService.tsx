import React from 'react';
import { Building2, Plane, CheckCircle2 } from 'lucide-react';

export default function AutonomousService() {
  const benefits = [
    'بدون نیاز به هزینه‌های سنگین خرید تجهیزات (CAPEX)',
    'پشتیبانی، تعمیرات و نگهداری دوره‌ای رایگان',
    'ارتقای سطح خدمات‌رسانی به مشتریان ویژه و توان‌یابان',
    'مدیریت هوشمند ناوگان از طریق داشبورد مرکزی'
  ];

  return (
    <section className="w-full bg-slate-50 py-24 border-y border-slate-200">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-blue-700 font-bold text-sm uppercase tracking-wider">
              راهکارهای سازمانی (B2B)
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              خدمات حمل‌ونقل خودران سازمانی
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mt-2">
              راهکاری نوین برای مجتمع‌های تجاری و فرودگاه‌ها. ناوگان ما را بدون نیاز به خرید تجهیزات، به صورت سرویس مدیریت‌شده در اختیار بگیرید.
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                <span className="text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-2">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md">
              درخواست مشاوره سازمانی
            </button>
          </div>
        </div>

        {/* Visual Side */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">مجتمع‌های تجاری</h3>
            <p className="text-sm text-slate-500">مسیریابی و جابجایی هوشمند بین طبقات و فروشگاه‌ها</p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center gap-4 hover:shadow-md transition-shadow mt-8">
            <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center">
              <Plane className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">فرودگاه‌ها</h3>
            <p className="text-sm text-slate-500">حمل و نقل مسافران از گیت‌های ورودی تا پرواز</p>
          </div>
        </div>

      </div>
    </section>
  );
}
