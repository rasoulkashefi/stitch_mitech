'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Bot, Anchor, Cpu, Compass, Radio, Activity, CheckCircle2 } from 'lucide-react';

export default function RoboticsNavigationSection() {
  const [activeTab, setActiveTab] = useState<'ugv' | 'auv'>('ugv');

  return (
    <section id="robotics-drivers" className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden" dir="rtl">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-right">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-4">
            <Cpu size={14} />
            <span>معماری سخت‌افزار و ناوبری رباتیک</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            معماری درایورهای موتور DC
            <br />
            <span className="text-emerald-400">و ناوبری موبایل‌ربات‌ها</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-300 font-normal">
            هسته مرکزی فناوری میکائیل، درایورهای قدرتمندی است که به عنوان پردازنده اصلی در انواع ربات‌های متحرک ایفای نقش می‌کنند. این سیستم‌ها قابلیت ادغام با زیرسیستم‌های شناسایی و موقعیت‌یابی (SLAM)، هوش مصنوعی (AI) و ارتباطات وایرلس را دارا هستند و در دسته‌بندی‌های زیر کاربرد دارند:
          </p>
        </div>

        {/* Feature Grid with Hardware Image & Application Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left / Visual Side (in RTL: right is content, left is photo) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/60 bg-slate-800/50 shadow-2xl shadow-slate-950/80 group">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/fleet/controllers/robotics-driver.jpg"
                  alt="درایور موتور DC و پردازنده ناوبری رباتیک میکائیل"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Floating Telemetry Box */}
              <div className="p-6 bg-slate-900/90 backdrop-blur-md border-t border-slate-700/50">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Activity size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">پروتکل‌های ارتباطی</div>
                      <div className="text-sm font-bold text-white">CAN-Bus • RS485 • Wireless Mesh</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
                      <Compass size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">قابلیت ادغام سنسوری</div>
                      <div className="text-sm font-bold text-white">LiDAR + 3D SLAM + IMU 9-DOF</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Categories */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            
            {/* Category Selector Tabs */}
            <div className="flex rounded-2xl bg-slate-800/80 p-1.5 border border-slate-700">
              <button
                onClick={() => setActiveTab('ugv')}
                className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === 'ugv'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/40'
                }`}
              >
                <Bot size={18} />
                <span>متحرک‌های روی سطحی (UGV / AGV)</span>
              </button>

              <button
                onClick={() => setActiveTab('auv')}
                className={`flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === 'auv'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/40'
                }`}
              >
                <Anchor size={18} />
                <span>متحرک‌های زیرآبی (AUV / RCV)</span>
              </button>
            </div>

            {/* Tab 1 Content: UGV / AGV */}
            {activeTab === 'ugv' && (
              <div className="bg-slate-800/50 border border-slate-700/70 rounded-3xl p-6 sm:p-8 space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-4">
                  <div>
                    <span className="text-xs font-bold text-emerald-400 tracking-wide uppercase">سیستم‌های زمینی و سالنی</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      متحرک‌های روی سطحی بدون سرنشین (UGV) و هدایت خودکار (AGV)
                    </h3>
                  </div>
                  <span className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-300">
                    <Bot size={28} />
                  </span>
                </div>

                <p className="text-sm sm:text-base leading-7 text-slate-300">
                  درایورهای توان بالای میکائیل برای روبات‌های صنعتی AGV در انبارها، پایانه‌های فرودگاهی و روبات‌های سطحی خودگردان (UGV) با کنترل هوشمند سرعت و گشتاور، مانورپذیری دقیق را در شتاب‌گیری و ترمز بدون لغزش تضمین می‌کنند.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>کنترل حرکت دیفرانسیلی و محور مستقل</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>ادغام با ماژول SLAM برای مسیریابی خودکار</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>ارتباطات وایرلس با پردازش هوش مصنوعی (AI)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>حفاظت دمایی هوشمند و جریان‌های هجومی</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2 Content: AUV / RCV */}
            {activeTab === 'auv' && (
              <div className="bg-slate-800/50 border border-slate-700/70 rounded-3xl p-6 sm:p-8 space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-4">
                  <div>
                    <span className="text-xs font-bold text-emerald-400 tracking-wide uppercase">سیستم‌های زیرسطحی و دریایی</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      متحرک‌های زیرآبی خودمختار (AUV) و هدایت از راه دور (RCV)
                    </h3>
                  </div>
                  <span className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-300">
                    <Anchor size={28} />
                  </span>
                </div>

                <p className="text-sm sm:text-base leading-7 text-slate-300">
                  در شرایط محیطی چالش‌برانگیز زیرآب، پایداری انتقال فرمان و کنترل گشتاور تراسترها اهمیتی حیاتی دارد. درایورهای میکائیل با پاسخ‌دهی فرکانسی بالا، آب‌بندی استاندارد و عایق‌بندی حفاظتی، هدایت بی‌نقص ربات‌های زیرآبی را ممکن می‌سازند.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>کنترل گشتاور میکروثانیه‌ای تراسترهای پیشران</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>پشتیبانی از تله‌متری سیمی و بی‌سیم دوربرد</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>مقاومت استثنایی در برابر نوسانات بار حرارتی</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>پایش مداوم جریان و ولتاژ در شرایط ایزوله</span>
                  </div>
                </div>
              </div>
            )}

            {/* Architecture Highlights Bar */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-800/70 border border-slate-700/80 flex items-center gap-4">
              <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl shrink-0 border border-emerald-500/20">
                <Radio size={22} />
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-6">
                معماری ماژولار میکائیل امکان سفارشی‌سازی فرم‌ور و ادغام پروتکل‌های ناوبری را برای انواع تیم‌های رباتیک دانشگاهی و صنعتی فراهم می‌کند.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
