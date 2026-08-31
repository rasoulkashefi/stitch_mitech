'use client';

import React, { useState } from 'react';
import {
  Workflow,
  Handshake,
  ShieldCheck,
  Zap,
  Boxes,
  Activity,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { BusinessModelSlug } from './business-model-data';

interface BusinessVisualDiagramProps {
  type: 'hub' | BusinessModelSlug;
  modelCode?: string;
}

export default function BusinessVisualDiagram({
  type,
  modelCode = 'MITECH-ECONOMICS-CORE-v2.6',
}: BusinessVisualDiagramProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  // ── 1. Hub Diagram ──
  if (type === 'hub') {
    const pillars = [
      {
        id: 0,
        title: 'مدل اشتراکی AMaaS',
        code: 'MOD-01 // ZERO-CAPEX',
        icon: Workflow,
        desc: 'ناوگان کامل، نرم‌افزار ابری و نگهداری بدون پرداخت هزینه خرید اولیه در قالب اشتراک منظم.',
        status: 'ACTIVE OPEX',
        stat: '۹۹.۹٪ SLA',
      },
      {
        id: 1,
        title: 'مدل تسهیم درآمد',
        code: 'MOD-02 // REV-SHARE',
        icon: Handshake,
        desc: 'تجهیز رایگان فضا توسط میکائیل و تقسیم شفاف درآمدهای کرایه و تبلیغات با مالک مجموعه.',
        status: 'SHARED GROWTH',
        stat: 'تسهیم روزانه',
      },
    ];

    const current = pillars[activeTab];
    const Icon = current.icon;

    return (
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 text-white shadow-2xl">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 0%, #059669 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '100% 100%, 28px 28px, 28px 28px',
          }}
        />

        <div className="relative z-10">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold tracking-wider text-emerald-400">
                {modelCode}
              </span>
            </div>
            <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-400">
              اقتصاد هوشمند جابجایی
            </span>
          </div>

          {/* Interactive Model Selector Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {pillars.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center justify-between rounded-2xl border p-3.5 text-right transition-all duration-200 ${
                  activeTab === item.id
                    ? 'border-emerald-500 bg-emerald-950/40 shadow-md shadow-emerald-950/50'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-9 items-center justify-center rounded-xl transition-colors ${
                      activeTab === item.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-100">{item.title}</p>
                    <p className="text-xs text-slate-400">{item.code}</p>
                  </div>
                </div>
                <div
                  className={`size-2 rounded-full ${
                    activeTab === item.id ? 'bg-emerald-400' : 'bg-slate-700'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Central Architecture Visual */}
          <div className="mt-6 rounded-2xl border border-slate-800/80 bg-slate-900/80 p-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                  {current.status}
                </span>
                <h3 className="mt-1 text-xl font-bold text-white flex items-center gap-2">
                  <Icon size={20} className="text-emerald-400" />
                  {current.title}
                </h3>
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-emerald-300">
                {current.stat}
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
              {current.desc}
            </p>

            {/* Architecture Node Flow */}
            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
                <span className="text-xs text-slate-400 font-semibold">ورودی</span>
                <p className="mt-1 text-xs font-bold text-emerald-400">فضای میزبان</p>
                <p className="mt-0.5 text-xs text-slate-400">بدون تغییر ساختمانی</p>
              </div>

              <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-3">
                <span className="text-xs text-emerald-300 font-semibold">پلتفرم</span>
                <p className="mt-1 text-xs font-bold text-white">ناوگان میکائیل</p>
                <p className="mt-0.5 text-xs text-emerald-300/80">هوش مصنوعی + نگهداری</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
                <span className="text-xs text-slate-400 font-semibold">خروجی</span>
                <p className="mt-1 text-xs font-bold text-emerald-400">ارزش اقتصادی</p>
                <p className="mt-0.5 text-xs text-slate-400">سود مستقیم / کاهش هزینه</p>
              </div>
            </div>
          </div>

          {/* Bottom Live Metrics Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-400" />
              پوشش کامل بیمه و ممیزی مالی
            </span>
            <span className="text-slate-300 font-semibold">صفر ریال ریسک مالی</span>
          </div>
        </div>
      </div>
    );
  }

  // ── 2. AMaaS Detail Diagram ──
  if (type === 'amaas') {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 text-white shadow-2xl">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, #059669 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '100% 100%, 28px 28px, 28px 28px',
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold text-emerald-400">
                چرخه عملیاتی AMaaS
              </span>
            </div>
            <span className="rounded-full bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-400">
              ZERO CAPEX // OPEX
            </span>
          </div>

          {/* 4 Loop Quadrants */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <Workflow size={16} />
                <span className="text-xs font-bold text-slate-200">تأمین ناوگان هوشمند</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                تحویل انواع ویلچر، کالسکه و باربر خودران بدون هزینه خرید اولیه توسط سازمان.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <Boxes size={16} />
                <span className="text-xs font-bold text-slate-200">پلتفرم دوقلوی دیجیتال</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                مانیتورینگ ابری زنده، مدیریت هوشمند شارژ باتری و تحلیل داده‌های ترافیک مسیر.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck size={16} />
                <span className="text-xs font-bold text-slate-200">تضمین پایداری ۹۹.۹٪</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                تکنسین‌های فنی مقیم، تعویض سریع وسیله ظرف ۱۵ دقیقه و پوشش ۱۰۰٪ بیمه حوادث.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <Zap size={16} />
                <span className="text-xs font-bold text-slate-200">آپدیت خودکار OTA</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                ارتقای مداوم الگوریتم‌های هوش مصنوعی و ناوبری بدون نیاز به پرداخت هزینه اضافی.
              </p>
            </div>
          </div>

          {/* Flow Indicator */}
          <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-4 text-center">
            <p className="text-xs font-bold text-emerald-300">
              گردش چابک عملیات: از ممیزی محیط تا مدیریت ابری و ارتقای مداوم
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400 font-semibold">
              <span>ممیزی فضا</span>
              <ChevronRight size={12} className="rotate-180 text-emerald-400" />
              <span>استقرار</span>
              <ChevronRight size={12} className="rotate-180 text-emerald-400" />
              <span>مدیریت ابری</span>
              <ChevronRight size={12} className="rotate-180 text-emerald-400" />
              <span className="text-emerald-400 font-bold">مقیاس‌پذیری</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── 3. Revenue Sharing Detail Diagram ──
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 text-white shadow-2xl">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 80%, #059669 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 28px 28px, 28px 28px',
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-bold text-emerald-400">
              موتور درآمدزایی مشترک
            </span>
          </div>
          <span className="rounded-full bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-400">
            مدل ارزش دوجانبه
          </span>
        </div>

        {/* Dual Pillar Value Flow */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-200">آورده شریک تجاری</span>
              <Activity size={16} className="text-emerald-400" />
            </div>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span>فضای فیزیکی و مسیرهای پرتردد</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span>برق مصرفی ناچیز ایستگاه شارژ</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span>صفر ریال سرمایه‌گذاری نقدی</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">آورده شرکت میکائیل</span>
              <Workflow size={16} className="text-emerald-400" />
            </div>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span>تأمین ۱۰۰٪ ناوگان و ایستگاه‌ها</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span>درگاه پرداخت الکترونیک و تبلیغات</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span>مدیریت کامل نگهداری، نظافت و بیمه</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Revenue Stream Indicators */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/90 p-4">
          <p className="text-xs font-bold text-slate-300 mb-3">۳ خروجی درآمدی مشترک:</p>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="rounded-xl bg-slate-950 p-2.5 border border-slate-800">
              <p className="font-bold text-emerald-400">کرایه مراجعین</p>
              <p className="text-xs text-slate-400 mt-0.5">پرداخت بر مبنای مصرف</p>
            </div>
            <div className="rounded-xl bg-slate-950 p-2.5 border border-slate-800">
              <p className="font-bold text-emerald-400">تبلیغات نمایشگر</p>
              <p className="text-xs text-slate-400 mt-0.5">تبلیغات هوشمند محیطی</p>
            </div>
            <div className="rounded-xl bg-slate-950 p-2.5 border border-slate-800">
              <p className="font-bold text-emerald-400">بسته‌های VIP</p>
              <p className="text-xs text-slate-400 mt-0.5">تورها و رزرو ویژه</p>
            </div>
          </div>
        </div>

        {/* Bottom Status */}
        <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
          <span>داشبورد ممیزی روزانه</span>
          <span className="text-emerald-400 font-bold">تسویه مالی شفاف</span>
        </div>
      </div>
    </div>
  );
}
