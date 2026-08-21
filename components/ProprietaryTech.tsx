import React from 'react';
import { Compass, Radar, Cloud } from 'lucide-react';

export default function ProprietaryTech() {
  const features = [
    {
      id: 'gps-free-navigation',
      title: 'ناوبری بدون نیاز به GPS',
      description: 'الگوریتم‌های پیشرفته SLAM محلی و نگاشت دینامیک، امکان هدایت دقیق ناوگان را در فضاهای سرپوشیده (Indoor) بدون افت کیفیت و بدون نیاز به سیگنال ماهواره‌ای فراهم می‌کنند.',
      icon: Compass,
    },
    {
      id: 'radar-vision',
      title: 'رادار و بینایی ماشین ۳۶۰ درجه',
      description: 'ترکیب سنسورهای LiDAR دوربرد و دوربین‌های عمق‌سنج، آگاهی محیطی کاملی ایجاد کرده و از برخورد با موانع ثابت و متحرک در راهروهای شلوغ جلوگیری می‌کند.',
      icon: Radar,
    },
    {
      id: 'cloud-dashboard',
      title: 'داشبورد ابری مدیریت ناوگان',
      description: 'یکپارچه‌سازی کامل ناوگان در یک داشبورد مرکزی؛ تخصیص وظایف، مانیتورینگ لحظه‌ای باتری، پیش‌بینی ترافیک و ارتباط مستقیم با سیستم‌های سازمانی (API).',
      icon: Cloud,
    }
  ];

  return (
    <section className="w-full bg-slate-50 py-24 border-t border-slate-200">
      <div className="w-full px-4 md:px-8 max-w-[1440px] mx-auto flex flex-col gap-16">
        
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <span className="text-indigo-600 font-bold text-sm uppercase tracking-wider">
            هسته فناوری
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            معماری نرم‌افزاری مقیاس‌پذیر و هوشمند
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            مغز متفکر ناوگان میتک، ترکیبی از پردازش لبه (Edge AI) قدرتمند در هر ربات و سیستم‌های هماهنگ‌کننده مرکزی در فضای ابری است.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id} 
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6 group"
              >
                <div className="w-16 h-16 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
