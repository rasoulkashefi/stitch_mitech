'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  ChevronDown,
  Bot,
  Wrench,
  Layers,
  Sparkles,
  PhoneCall,
  ArrowLeft,
  HelpCircle,
} from 'lucide-react';

export interface FAQItem {
  id: string;
  category: 'fleet' | 'support' | 'business';
  question: string;
  answer: string;
  badge: string;
}

export const allFaqs: FAQItem[] = [
  // Category 1: ناوگان خودران و هوشمند
  {
    id: 'f-1',
    category: 'fleet',
    badge: 'ناوبری مستقل',
    question: 'سامانه‌های ناوبری و ویلچرهای خودران چگونه بدون GPS در فضاهای بسته کار می‌کنند؟',
    answer:
      'سیستم ناوبری رباتیک ام‌آی‌تک کاملاً مستقل از سیگنال‌های ماهواره‌ای GPS و بدون نیاز به اینترنت عمل می‌کند. ما از فناوری پیشرفته SLAM (نقشه‌برداری و مکان‌یابی همزمان) در ترکیب با سنسورهای LiDAR صنعتی، دوربین‌های عمق‌سنج استریو و هوش مصنوعی لبه (Edge AI) استفاده می‌کنیم. ربات به صورت محلی نقشه سه‌بعدی محیط بسته (Indoor) را پردازش کرده و موقعیت خود را با دقت میلی‌متری محاسبه می‌نماید.',
  },
  {
    id: 'f-2',
    category: 'fleet',
    badge: 'ایمنی ۳۶۰ درجه',
    question: 'سنسورهای ۳۶۰ درجه و سیستم جلوگیری از برخورد چندلایه (Safety Bubble) چطور امنیت را تضمین می‌کنند؟',
    answer:
      'تمامی ربات‌ها و ویلچرهای خودران ناوگان ام‌آی‌تک مجهز به حباب ایمنی هوشمند چندسطحی هستند. تلفیق داده‌های لایدار، رادارهای اولتراسونیک و سنسورهای ToF باعث می‌شود هرگونه مانع ساکن یا متحرک (از جمله کودکان، عابران پیاده، حیوانات یا کیف‌های چرخ‌دار) در فاصله چند متری شناسایی شود. سیستم ابتدا سرعت را نرم کاهش داده و در صورت مسدود بودن مسیر، در کسری از ثانیه تغییر مسیر داده یا توقف کامل و ایمن انجام می‌دهد.',
  },
  {
    id: 'f-3',
    category: 'fleet',
    badge: 'استقرار و زیرساخت',
    question: 'پیاده‌سازی و استقرار ناوگان در فرودگاه‌ها، مراکز درمانی و مال‌ها نیازمند چه تغییراتی در ساختمان است؟',
    answer:
      'هیچ‌گونه تغییر ساختاری، کف‌سازی مجدد، نصب نوارهای مغناطیسی روی زمین یا سیم‌کشی شبکه‌ای در محیط لازم نیست. فرآیند راه‌اندازی صرفاً شامل یک مرحله اسکن محیط توسط ربات نقشه‌بردار ام‌آی‌تک و سپس تعریف ایستگاه‌های مبدا، مقصد و مناطق تردد مجاز در سامانه نرم‌افزاری Mitech Fleet OS است. این فرآیند ظرف کمتر از ۴۸ ساعت در هر مجموعه سازمانی تکمیل می‌شود.',
  },
  {
    id: 'f-4',
    category: 'fleet',
    badge: 'مدیریت ناوگان',
    question: 'هماهنگی میان چندین ربات همزمان و مدیریت بازگشت به ایستگاه شارژ چگونه انجام می‌شود؟',
    answer:
      'نرم‌افزار جامع مدیریت ناوگان (Fleet OS) تخصیص سفارش‌ها را به صورت هوشمند و بدون تداخل انجام می‌دهد. پس از پیاده‌سازی سرنشین یا اتمام ماموریت، ربات به صورت خودکار به ایستگاه داکینگ بازگشته و در صورت کاهش باتری به زیر آستانه مشخص، به صورت اتوماتیک به شارژر متصل می‌شود. ترافیک، گلوگاه‌ها و شارژ باتری‌ها همگی از طریق یک داشبورد مرکزی مانیتور می‌گردد.',
  },

  // Category 2: خدمات و پشتیبانی توانبخشی
  {
    id: 's-1',
    category: 'support',
    badge: 'عیب‌یابی تخصصی',
    question: 'فرآیند عیب‌یابی و تعمیر جوی‌استیک و درایورهای ویلچر برقی چگونه انجام می‌شود؟',
    answer:
      'فرآیند تعمیرات در کلینیک مرکزی ام‌آی‌تک در ۴ مرحله شفاف انجام می‌شود: ۱) مشاوره اولیه و ارسال ویدیو/کد خطای دستگاه در واتساپ جهت تشخیص امکان رفع از راه دور؛ ۲) پذیرش قطعه و عیب‌یابی دقیق سخت‌افزاری با تجهیزات تستر تخصصی بردهای میکروپروسسوری و اعلام هزینه پیش از اقدام؛ ۳) تعمیر، تعویض قطعات اورجینال و تست زیر بار الکتریکی و مکانیکی؛ ۴) بسته‌بندی ایمن و تحویل ۴۸ تا ۷۲ ساعته قطعه همراه با برگه گزارش کارشناسی.',
  },
  {
    id: 's-2',
    category: 'support',
    badge: 'ارسال از شهرستان‌ها',
    question: 'من در شهرستان ساکن هستم؛ چگونه قطعه معیوب را برای تعمیر ارسال کنم؟',
    answer:
      'شما نیازی به ارسال کل بدنه سنگین ویلچر ندارید. با مشاوره تلفنی مهندسان ما، تنها بخش الکترونیکی معیوب (مانند جوی‌استیک، یونیت درایور موتور یا باکس کنترلر) را جدا کرده و از طریق پست پیشتاز، تیپاکس یا باربری به آدرس کلینیک فنی ام‌آی‌تک در تهران ارسال می‌نمایید. پس از اتمام تعمیرات و تست‌های آزمایشگاهی، قطعه با بسته‌بندی ضدضربه مجدداً به آدرس شما در هر نقطه از ایران بازگردانده می‌شود.',
  },
  {
    id: 's-3',
    category: 'support',
    badge: 'گارانتی و اصالت',
    question: 'شرایط گارانتی قطعات تعویض‌شده و تضمین کیفیت خدمات تعمیراتی چیست؟',
    answer:
      'شرکت ام‌آی‌تک منحصراً از قطعات الکترونیکی ۱۰۰٪ اورجینال برندهای معتبر بین‌المللی شامل PG Drives Technology، Dynamic Controls و Curtiss-Wright استفاده می‌کند. تمامی خدمات تعمیراتی تخصصی ما شامل مهلت تست کارکرد و گارانتی اصالت قطعات مصرفی هستند تا توانیابان و خانواده‌ها با اطمینان خاطر کامل از دستگاه خود بهره ببرند.',
  },
  {
    id: 's-4',
    category: 'support',
    badge: 'پروگرام و تنظیمات',
    question: 'آیا امکان کالیبراسیون و شخصی‌سازی پارامترهای حرکتی جوی‌استیک وجود دارد؟',
    answer:
      'بله. با استفاده از تجهیزات پروگرامر صنعتی رسمی برندهای داینامیک و پی‌جی، مهندسان ما می‌توانند شتاب حرکت، حساسیت زاویه‌ای اهرم، حداکثر سرعت رو به جلو و دنده‌عقب، و میزان نرمی ترمز را دقیقاً متناسب با سطح کنترل عضلانی و شرایط فیزیکی کاربر تنظیم نمایند.',
  },

  // Category 3: مدل‌های تجاری و همکاری (AMaaS)
  {
    id: 'b-1',
    category: 'business',
    badge: 'مدل AMaaS',
    question: 'مدل «جابه‌جایی خودران به عنوان سرویس» (AMaaS) چیست و چه مزیتی برای مراکز دارد؟',
    answer:
      'مدل AMaaS (Autonomous Mobility-as-a-Service) راهکاری بدون نیاز به سرمایه‌گذاری سنگین اولیه (CapEx) برای خرید تجهیزات رباتیک است. ام‌آی‌تک ناوگان ربات‌های حمل مسافر یا کالسکه هوشمند را در مجموعه شما مستقر کرده و مسئولیت کامل بیمه، پایش ابری، نگهداری پیشگیرانه و به‌روزرسانی نرم‌افزاری را بر عهده می‌گیرد. سازمان‌ها صرفاً اشتراک ماهانه یا هزینه بر اساس میزان پیمایش (OpEx) را پرداخت می‌کنند.',
  },
  {
    id: 'b-2',
    category: 'business',
    badge: 'تسهیم درآمد',
    question: 'مدل درآمدزایی مشترک (Revenue Sharing) در مال‌ها و مراکز گردشگری چگونه است؟',
    answer:
      'در این مدل، ناوگان کالسکه‌های هوشمند خانواده، مبل‌های متحرک یا ویلچرهای برقی در مجتمع تجاری مستقر می‌شوند. مراجعین و خانواده‌ها از طریق اسکن کیوآرکد یا اپلیکیشن اقدام به کرایه ساعتی تجهیزات می‌کنند. درآمد حاصل از کرایه و همچنین تبلیغات دیجیتال روی نمایشگر ربات‌ها بر اساس درصد توافق‌شده به صورت ماهیانه با مدیریت مجتمع تسهیم می‌گردد.',
  },
  {
    id: 'b-3',
    category: 'business',
    badge: 'پایلوت و دمو',
    question: 'چگونه می‌توان یک پروژه پایلوت (Pilot Project) را در مجموعه خود آغاز کرد؟',
    answer:
      'کافی است با ثبت درخواست در صفحه «درخواست دمو و مشاوره» یا تماس با واحد مهندسی فروش، اطلاعات اولیه مجتمع یا فرودگاه خود را ارسال کنید. کارشناسان ما ظرف ۲۴ تا ۴۸ ساعت، جلسه ارزیابی و بررسی نقشه اولیه را هماهنگ کرده و امکان استقرار یک نسخه آزمایشی جهت سنجش بازخورد کاربران و ارزیابی بهره‌وری را فراهم می‌آورند.',
  },
];

const categories = [
  { id: 'all', label: 'همه سوالات', icon: Sparkles, count: 11 },
  { id: 'fleet', label: 'ناوگان خودران و هوشمند', icon: Bot, count: 4 },
  { id: 'support', label: 'خدمات و پشتیبانی توانبخشی', icon: Wrench, count: 4 },
  { id: 'business', label: 'مدل‌های تجاری و همکاری (AMaaS)', icon: Layers, count: 3 },
];

export default function FaqExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ 'f-1': true, 's-1': true });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const normalizedQuery = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !normalizedQuery ||
        item.question.toLowerCase().includes(normalizedQuery) ||
        item.answer.toLowerCase().includes(normalizedQuery) ||
        item.badge.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:py-24 font-[Vazirmatn,sans-serif]">
      {/* Search Input Bar */}
      <div className="relative mx-auto max-w-2xl mb-12">
        <div className="relative flex items-center">
          <Search className="absolute right-4 size-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجوی موضوعی (مثال: GPS، گارانتی، AMaaS، ارسال شهرستان، سنسور...)"
            className="w-full rounded-2xl border border-slate-300 bg-white py-4 pr-12 pl-4 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 shadow-sm transition-all focus:border-emerald-500 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute left-4 text-xs font-semibold text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              پاک کردن
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/15 scale-102'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 shadow-xs'
              }`}
            >
              <Icon className={`size-4 ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`} />
              <span>{cat.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-mono ${
                  isSelected ? 'bg-white/20 text-emerald-300' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* FAQs List */}
      <div className="flex flex-col gap-4">
        {filteredFaqs.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-xs">
            <HelpCircle className="mx-auto size-12 text-slate-300 mb-4" />
            <h3 className="text-lg font-bold text-slate-800">موردی با این عبارت یافت نشد</h3>
            <p className="mt-2 text-sm text-slate-500">
              لطفاً از کلمات کلیدی دیگر استفاده کنید یا با کارشناسان ما تماس بگیرید.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200"
            >
              نمایش همه سوالات
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-200 hover:border-emerald-500/40"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-right transition-colors hover:bg-slate-50/80 cursor-pointer"
                >
                  <div className="flex-1">
                    <div className="mb-2 inline-flex items-center gap-1.5 rounded-md bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                      <span>{faq.badge}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-blue-950 leading-8">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-600 rotate-180'
                        : 'border-slate-200 bg-slate-50 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 bg-slate-50/50 p-6 sm:p-7 text-sm sm:text-base leading-8 text-slate-700">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Unresolved Questions Help Card */}
      <div className="mt-16 rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 to-blue-950 p-8 sm:p-12 text-white shadow-xl shadow-slate-900/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <span className="inline-block rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-xs font-semibold text-emerald-400 mb-3">
              پاسخ به ابهامات تخصصی
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              پاسخ سوال خود را پیدا نکردید؟
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-300 max-w-lg">
              مهندسان و کارشناسان پشتیبانی ام‌آی‌تک آماده‌اند تا به صورت دقیق به پرسش‌های فنی، شرایط استقرار ناوگان و تعمیرات دستگاه شما پاسخ دهند.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/contact/sales"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95"
            >
              <PhoneCall className="size-4" />
              <span>تماس با مشاوران</span>
            </Link>
            <Link
              href="/contact/request-demo"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 active:scale-95"
            >
              <span>درخواست جلسه دمو</span>
              <ArrowLeft className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
