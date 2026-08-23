import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function HeroSlider() {
  return (
    <section className="relative w-full bg-slate-50 pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      {/* Very soft background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-50/50 blur-3xl"></div>
        <div className="absolute bottom-[0%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-50/30 blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full mx-auto max-w-[1440px] px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-right">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            آزادی در حرکت،
            <br />
            <span className="text-blue-700">هوشمندی در مسیر</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
            تولیدکننده نسل جدید ویلچرهای برقی، ربات‌های باربر و سیستم‌های ناوبری پیشرفته.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">
              <span>مشاهده محصولات</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white border-2 border-slate-200 hover:border-blue-700 hover:text-blue-700 text-slate-700 font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center">
              آشنایی با خدمات خودران
            </button>
          </div>
        </div>

        {/* Hero Visual (Clean, Light Mode) */}
        <div className="w-full md:w-1/2 relative h-[350px] md:h-[500px] flex items-center justify-center">
          <div className="w-full h-full max-w-lg rounded-2xl bg-white shadow-xl border border-slate-100 overflow-hidden relative group">
            {/* Using a bright, medical-tech appropriate placeholder image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80')"}} // Bright, modern clinical/tech setting
            />
            {/* Gradient overlay for contrast if needed, but keeping it light */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
          </div>
          
          {/* Slider Pagination Dots (Visual only for now) */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-8 h-2 rounded-full bg-blue-700"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
