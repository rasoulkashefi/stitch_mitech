'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Cpu, 
  Layers, 
  Zap, 
  Smartphone, 
  Radio, 
  Cable, 
  Sliders, 
  Compass, 
  ShieldCheck, 
  Bot, 
  Battery, 
  CheckCircle2, 
  Sparkles,
  Navigation
} from 'lucide-react';

export default function ModulesAndAccessoriesSection() {
  const [activeTab, setActiveTab] = useState<'power' | 'joysticks' | 'accessories' | 'autonomous'>('power');

  return (
    <section id="modules-and-subsystems" className="py-24 lg:py-32 bg-[#F8FAFC] border-t border-slate-200 text-[#0F172A]" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-right">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-4 py-1 text-xs font-bold text-emerald-700 mb-4">
            <Cpu size={14} />
            <span>کاتالوگ مهندسی و مشخصات زیرسیستم‌ها</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] leading-tight tracking-tight">
            ماژول‌های تفکیکی قدرت، فرمان
            <br />
            <span className="text-emerald-600">و لوازم جانبی هوشمند میکائیل</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600 font-normal text-justify">
            تمامی محصولات توانبخشی و ناوبری میکائیل به صورت کاملاً ماژولار با معماری دو بخشی (Two-Box Architecture) طراحی شده‌اند. این زیرساخت امکان سفارشی‌سازی دقیق انواع درایورهای قدرت، نمایشگرها، جک‌های برقی و اکسسوری‌های کمکی را برای تولیدکنندگان و کاربران فراهم می‌کند.
          </p>
        </div>

        {/* Tab Navigation (Mobile First) */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs mb-12">
          {[
            { id: 'power', label: 'ماژول‌های قدرت (XPM)', icon: Zap },
            { id: 'joysticks', label: 'ماژول‌های جویستیک و اپلیکیشن', icon: Sliders },
            { id: 'accessories', label: 'اکسسوری‌ها و رابط‌های جانبی', icon: Layers },
            { id: 'autonomous', label: 'ویلچر برقی خودران', icon: Bot },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 min-w-[150px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-emerald-400' : 'text-slate-400'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: POWER MODULES (XPM) */}
        {activeTab === 'power' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Spotlight Banner on Real XPM Driver Hardware */}
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-4 flex items-center justify-center shadow-inner">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/fleet/controllers/power-module-xpm.webp"
                        alt="ماژول درایور قدرت XPM میکائیل مجهز به هیت‌سینک اکسترود"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[10px] font-bold text-slate-800 px-2.5 py-1 rounded-full border border-slate-200">
                      هیت‌سینک اکسترود خنک‌کاری طبیعی
                    </div>
                  </div>

                  {/* Connectors Row */}
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                      <div className="relative w-12 h-12 shrink-0 bg-white rounded-lg border border-slate-200 p-1">
                        <Image
                          src="/images/fleet/controllers/connector-dynamic.webp"
                          alt="کانکتور داینامیک XPM-D"
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-slate-900">اتصال Dynamic</div>
                        <div className="text-[11px] text-slate-500">خروجی استاندارد داینامیک</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                      <div className="relative w-12 h-12 shrink-0 bg-white rounded-lg border border-slate-200 p-1">
                        <Image
                          src="/images/fleet/controllers/connector-anderson.webp"
                          alt="کانکتور اندرسونی XPM-A"
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-slate-900">اتصال Anderson</div>
                        <div className="text-[11px] text-slate-500">خروجی جریان‌بالای اندرسونی</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 text-right">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                    <Zap size={14} />
                    <span>خانواده درایورهای قدرت دوکاناله و تک‌کاناله (XPM Series)</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    کنترل هوشمند گشتاور و توان تا سقف ۷۰۰ وات برای هر موتور
                  </h3>

                  <p className="text-sm leading-7 text-slate-600 text-justify">
                    ماژول‌های قدرت سری XPM وظیفه درایو مستقیم موتورهای DC براشلس یا براش، مدیریت ترمزهای الکترومغناطیسی و پایش مداوم سلامت باتری را برعهده دارند. با انتقال این ماژول به مجاورت باتری و موتور، جریان‌های سنگین از زیر دست کاربر دور شده و افت ولتاژ به حداقل ممکن می‌رسد.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      <span>ولتاژ کاری گسترده ۱۸ تا ۳۱ ولت (حفاظت تا ۴۰ ولت)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      <span>جریان شارژ سریع باتری ۱۰A تا ۱۸A RMS</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      <span>عایق رطوبت استاندارد صنعتی IPX4</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      <span>تحمل دمای محیطی ۲۵- تا ۵۰+ درجه سانتی‌گراد</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Grid of Power Module Models */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* XPM-50 Card */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                      کد: 2-1
                    </span>
                    <span className="text-xs font-extrabold text-emerald-600">
                      دو خروجی 55A Max
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">XPM-50 (350W)</h4>
                  <div className="text-xs text-slate-500 font-medium mb-3">مناسب ویلچرهای سبک و رباتیک</div>
                  <p className="text-xs leading-6 text-slate-600 mb-4">
                    ظرفیت خروجی دوکاناله ۵۵ آمپر ماکسیمم @24V با ۱۵ آمپر بوست جریان؛ بهینه‌سازی شده برای دو موتور تا توان ۳۵۰ وات.
                  </p>
                  <div className="space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-400">تیپ داینامیک:</span>
                      <span className="font-bold">XPM-50-D</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">تیپ اندرسونی:</span>
                      <span className="font-bold">XPM-50-A</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">نسخه روشنایی:</span>
                      <span className="font-bold">XPM-50L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">نسخه جک برقی:</span>
                      <span className="font-bold">XPM-50A / AL</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* XPM-90 Card */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-200">
                      کد: 2-2
                    </span>
                    <span className="text-xs font-extrabold text-emerald-600">
                      دو خروجی 80A-90A Max
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">XPM-90 (700W)</h4>
                  <div className="text-xs text-slate-500 font-medium mb-3">مناسب ویلچرهای مبله و توان بالا</div>
                  <p className="text-xs leading-6 text-slate-600 mb-4">
                    ظرفیت خروجی پرقدرت ۸۰ آمپر پیوسته و ۹۰ آمپر پیک @24V با ۱۰ آمپر بوست برای دو موتور تا سقف توان ۷۰۰ وات.
                  </p>
                  <div className="space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-400">تیپ داینامیک:</span>
                      <span className="font-bold">XPM-90-D</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">تیپ اندرسونی:</span>
                      <span className="font-bold">XPM-90-A</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">نسخه روشنایی:</span>
                      <span className="font-bold">XPM-90L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">نسخه جک برقی:</span>
                      <span className="font-bold">XPM-90A / AL</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* XPM-100 & Robotics Card */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                      کد: 2-3 / 2-10
                    </span>
                    <span className="text-xs font-extrabold text-emerald-600">
                      تک خروجی 100A Max
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">XPM-100 / XPM-AV</h4>
                  <div className="text-xs text-slate-500 font-medium mb-3">بالابر پله‌پیما، اسکوتر و رباتیک</div>
                  <p className="text-xs leading-6 text-slate-600 mb-4">
                    ظرفیت ۱۰۰ آمپر تک‌موتور برای بالابرهای پله‌پیما (Stair Lift)، اسکوتر و ربات‌های صنعتی؛ پشتیبانی از خروجی شیر برقی (E-Valve).
                  </p>
                  <div className="space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-400">بالابر پله‌پیما:</span>
                      <span className="font-bold">XPM-100-DM / AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">ربات خورشیدی:</span>
                      <span className="font-bold">XPM-100V-Asolar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">خروجی شیر برقی:</span>
                      <span className="font-bold">PM-50AV / XPM-90AV</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">فول آپشن رباتیک:</span>
                      <span className="font-bold">XPM-90AVL</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: JOYSTICKS & APPS */}
        {activeTab === 'joysticks' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* JSM-Mini */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="relative aspect-[4/3] w-full rounded-xl bg-slate-50 border border-slate-100 mb-4 p-2 flex items-center justify-center">
                    <Image
                      src="/images/fleet/controllers/mini.webp"
                      alt="ماژول جویستیک مینی JSM-Mini"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-slate-400">کد: 90040001</span>
                    <span className="font-extrabold text-emerald-600">LED Display</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-2">JSM-Mini</h4>
                  <p className="text-xs leading-6 text-slate-600">
                    ماژول جویستیک مینی با نمایشگر خطی LED چندسطحی، سوکت شارژ زیرین، بوق داخلی و مقاومت کامل در برابر برخورد با چارچوب درها.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                  کاربری: انواع ویلچرهای سبک و ارتوپدی
                </div>
              </div>

              {/* JSM-Attend (Caregiver / Attendant) */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="relative aspect-[4/3] w-full rounded-xl bg-slate-50 border border-slate-100 mb-4 p-2 flex items-center justify-center">
                    <Image
                      src="/images/fleet/controllers/mini.webp"
                      alt="ماژول جویستیک همراه JSM-Attend"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-slate-400">کد: 90040003</span>
                    <span className="font-extrabold text-emerald-600">Attendant Module</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-2">JSM-Attend (ماژول پرستار)</h4>
                  <p className="text-xs leading-6 text-slate-600">
                    جویستیک کمکی مخصوص همراه یا پرستار برای هدایت و متوقف کردن امن ویلچر از پشت صندلی، با اولویت کنترلی ایمن.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                  کاربری: توان‌یابان با نیاز به هدایت مراقب
                </div>
              </div>

              {/* JSM-PRO */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="relative aspect-[4/3] w-full rounded-xl bg-slate-50 border border-slate-100 mb-4 p-2 flex items-center justify-center">
                    <Image
                      src="/images/fleet/controllers/pro.webp"
                      alt="ماژول جویستیک پرو JSM-PRO"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-slate-400">کد: 90040005</span>
                    <span className="font-extrabold text-emerald-600">Graphic LCD</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-2">JSM-PRO</h4>
                  <p className="text-xs leading-6 text-slate-600">
                    جویستیک پرو کلاسیک با صفحه نمایشگر LCD به زبان فارسی و ۵ زبان بین‌المللی، سنسور تنظیم نور و پشتیبانی از جک‌های برقی.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                  کاربری: ویلچرهای پیشرفته خانگی و شهری
                </div>
              </div>

              {/* JSM-XPRO */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="relative aspect-[4/3] w-full rounded-xl bg-slate-50 border border-slate-100 mb-4 p-2 flex items-center justify-center">
                    <Image
                      src="/images/fleet/controllers/xpro.webp"
                      alt="ماژول جویستیک فول‌آپشن JSM-XPRO"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-slate-400">کد: 90040009</span>
                    <span className="font-extrabold text-emerald-600">Full Options</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-2">JSM-XPRO</h4>
                  <p className="text-xs leading-6 text-slate-600">
                    جویستیک فول‌آپشن با کنترل مستقیم سیستم روشنایی StVZO، فلاشرها، بوق شهری و مدیریت همزمان ۵ جک برقی iSeating.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                  کاربری: پرچمدار ویلچرهای مدرن توانبخشی
                </div>
              </div>

            </div>

            {/* Android Navigation App Spotlight */}
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-right">
                <div className="size-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Smartphone size={30} />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-1">
                    <Radio size={12} />
                    <span>سامانه ناوبری هوشمند همراه • Bluetooth Navigation with Android</span>
                  </div>
                  <h3 className="text-xl font-black text-white">نرم‌افزار اندروید ناوبری با بلوتوث</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                    امکان اتصال جویستیک به گوشی شخصی توان‌یاب، کنترل سرعت و هدایت از طریق صفحه لمسی موبایل، تنظیم زاویه جک‌های برقی صندلی و پایش درصد دقیق باتری.
                  </p>
                </div>
              </div>

              <div className="shrink-0 bg-slate-800 border border-slate-700 px-4 py-3 rounded-xl text-center">
                <div className="text-xs text-slate-400">اتصال امن بی‌سیم</div>
                <div className="text-sm font-bold text-emerald-400 mt-0.5">رمزنگاری اختصاصی بلوتوث</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ACCESSORIES & SMART MODULES */}
        {activeTab === 'accessories' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* iSeat */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-400">کد: 3-2</span>
                    <span className="font-extrabold text-emerald-600">Multi-Actuator</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">ماژول iSeat</h4>
                  <div className="text-xs text-slate-500 mb-3 font-medium">ماژول هوشمند چندگانه محرک‌های جانبی تنظیم وضعیت</div>
                  <p className="text-xs leading-6 text-slate-600">
                    مدیریت هوشمند جک‌های جانبی صندلی شامل زاویه پشتی (Recline)، شیب نشیمن (Tilt)، ارتفاع آسانسوری (Elevate) و زیرپایی برقی با فیدبک سنسورهای زاویه.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  کاربری: ویلچرهای ارتوپدی پیشرفته و رباتیک
                </div>
              </div>

              {/* GSM-Pro */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-400">کد: 3-3</span>
                    <span className="font-extrabold text-emerald-600">Telemetry & GPS</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">ماژول GSM-Pro</h4>
                  <div className="text-xs text-slate-500 mb-3 font-medium">موقعیت‌یاب و مراقبت‌های از راه دور (Remote Care)</div>
                  <p className="text-xs leading-6 text-slate-600">
                    ارسال زنده موقعیت مکانی توان‌یاب به خانواده و مراکز درمانی، سیستم ضدسرقت، پیام هشدار سقوط (Fall Detection) و عیب‌یابی تله‌متری از راه دور.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  کاربری: مراقبت سالمندان و ایمنی شهری
                </div>
              </div>

              {/* AUSB */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-400">کد: 3-4</span>
                    <span className="font-extrabold text-emerald-600">Robotics Interface</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">ماژول رابط AUSB</h4>
                  <div className="text-xs text-slate-500 mb-3 font-medium">ماژول واسط USB با درایور قدرت</div>
                  <p className="text-xs leading-6 text-slate-600">
                    ارتباط دوطرفه سریال USB بین کامپیوترهای صنعتی، رزبری پای و فریم‌ورک‌های رباتیک (ROS / ROS2) با درایور قدرت XPM جهت توسعه ربات‌های UGV و AGV.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  کاربری: ربات‌های متحرک و پژوهش‌های دانشگاهی
                </div>
              </div>

              {/* HHP Hand Held Programmer */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-400">کد: 3-5</span>
                    <span className="font-extrabold text-emerald-600">Diagnostic Tool</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">پروگرامر دستی HHP</h4>
                  <div className="text-xs text-slate-500 mb-3 font-medium">Hand Held Programmer تکنسین‌ها</div>
                  <p className="text-xs leading-6 text-slate-600">
                    ابزار دستی پرتابل جهت تست سنسورها، کالیبراسیون انحراف جویستیک، تنظیم شتاب و سرعت بیشینه، و عیب‌یابی کدهای خطای درایور در مراکز خدمات.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  کاربری: مراکز فروش، تعمیرکاران و خدمات پس از فروش
                </div>
              </div>

              {/* XLift Interface Board */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="relative aspect-[16/9] w-full rounded-xl bg-slate-50 border border-slate-100 mb-3 p-1 flex items-center justify-center">
                    <Image
                      src="/images/fleet/controllers/xlift-module.webp"
                      alt="برد واسط کاربری بالابر پله‌پیما XLift"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-slate-400">کد: 90040013</span>
                    <span className="font-extrabold text-emerald-600">Stair Lift Board</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">ماژول XLift</h4>
                  <p className="text-xs leading-6 text-slate-600">
                    برد تخصصی واسط کاربری بالابر پله‌پیمای برقی مجهز به لیمیت سوییچ‌های ایمنی، ریموت کنترل بی‌سیم و کنترل سرعت نرم در پیچ‌ها.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  کاربری: بالابرهای ساختمانی و پله‌پیماهای خانگی
                </div>
              </div>

              {/* Mobile Holders & Wireless Charge */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-400">کد: 3-10 تا 3-12</span>
                    <span className="font-extrabold text-emerald-600">Ergonomic Clamp</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">هولدرهای هوشمند موبایل</h4>
                  <div className="text-xs text-slate-500 mb-3 font-medium">چنگکی، پایه دوربین و شارژ بی‌سیم</div>
                  <p className="text-xs leading-6 text-slate-600">
                    هولدرهای آلومینیومی مستحکم شامل مدل چنگکی ضدلرزش (Holder-Crab)، مدل همراه با پایه دوربین ورزشی (Action Camera) و مدل شارژ بی‌سیم Fast Wireless Charge.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  کاربری: نصب استاندارد روی بدنه انواع ویلچر
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 4: AUTONOMOUS WHEELCHAIR PLATFORM */}
        {activeTab === 'autonomous' && (
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-lg animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Photo */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-4 shadow-inner">
                  <Image
                    src="/images/fleet/controllers/autonomous-wheelchair-real.webp"
                    alt="ویلچر برقی خودران میکائیل با پنل لمسی و اسکنر سه بعدی لیزری"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    نسل نوین حمل‌ونقل انفرادی
                  </div>
                </div>
              </div>

              {/* Full Specs for Autonomous Wheelchair */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 text-right">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700">
                  <Navigation size={14} />
                  <span>سامانه ناوبری پیشرفته • ویلچر برقی تمام‌خودران و هوشمند</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  ویلچر برقی خودران میکائیل؛
                  <br />
                  <span className="text-emerald-600">هدایت مستقل بدون نیاز به GPS</span>
                </h3>

                <p className="text-sm leading-7 text-slate-600 text-justify">
                  ویلچر برقی خودران میکائیل یک پلتفرم هوشمند جابه‌جایی مستقل است که با بهره‌مندی از پردازنده‌های قدرتمند درایور، سنسورهای لیزر اسکنر (LiDAR) و پنل لمسی هوشمند، مسافر را بدون نیاز به هدایت دست و بدون GPS از میان جمعیت به مقصد می‌رساند.
                </p>

                {/* Technical Specifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>هدایت تمام‌خودکار بدون نیاز به ماهواره‌های GPS</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>نقشه‌برداری سه‌بعدی محیط بر پایه لیزر اسکنر پیشرفته</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>شناسایی و نقشه‌برداری فضاهای بسیار وسیع تا ۱۵,۰۰۰ متر مربع</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>مسیریابی ایمن و دینامیک از میان جمعیت و ترافیک سالنی</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>پنل کاربری لمسی برای انتخاب مقصد با یک لمس</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>تعریف نامحدود ایستگاه‌ها و توقفگاه‌های دلخواه</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>قابلیت توقف فوری یا تغییر مسیر توسط سرنشین در هر زمان</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>بازگشت خودکار و بدون سرنشین به ایستگاه مبدأ و شارژر</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>تا ۷ ساعت حرکت و فعالیت مستمر با هر بار شارژ باتری</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>نرم‌افزار مانیتورینگ و رصد متمرکز ناوگان برای سازمان‌ها</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <a
                    href="/fleet/autonomous-wheelchairs"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-xs transition-colors"
                  >
                    <span>صفحه اختصاصی ناوگان ویلچرهای خودران</span>
                    <Sparkles size={14} />
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
