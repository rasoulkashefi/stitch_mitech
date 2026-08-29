---
name: Mitech Design System
description: Autonomous robotics and human-centered mobility design system
colors:
  primary: "#0284c7"
  primary-dark: "#0f172a"
  primary-navy: "#0a192f"
  accent-emerald: "#059669"
  accent-emerald-light: "#34d399"
  surface-bg: "#ffffff"
  surface-muted: "#f8fafc"
  surface-card: "#ffffff"
  text-primary: "#0f172a"
  text-secondary: "#475569"
  text-muted: "#94a3b8"
  border-subtle: "#e2e8f0"
  border-strong: "#cbd5e1"
typography:
  fontFamily: "Vazirmatn, system-ui, -apple-system, sans-serif"
  display:
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 800
    lineHeight: "1.2"
    letterSpacing: "-0.02em"
  headline:
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: "1.3"
  title:
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: "1.4"
  body:
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.8"
  label:
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: "1.5"
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  section: "6rem"
---

# Design System

## Overview
سیستم طراحی میکائیل (Mitech) بر پایه زیبایی‌شناسی مدرن، تایپوگرافی اصیل فارسی (وزیرمتن)، تضاد هوشمند رنگ‌های آبی تیره و سبز زمردی، و ساختار بصری خلوت، دقیق و باوقار بنا شده است.

## Colors
- **آبی تیره / سرمه‌ای (`#0F172A` / `#02142B`)**: رنگ پس‌زمینه بخش‌های تاریک و هویت پایدار برند.
- **سبز زمردی (`#059669` / `#34D399`)**: رنگ تأکیدی برای دکمه‌های کنشی، هایلایت‌های مهم و نشانگرهای وضعیت مثبت.
- **متن روی سطوح تیره**: هرگز از خاکستری خنثی روی پس‌زمینه‌های رنگی/آبی استفاده نشود؛ از تناژهای روشن با کنتراست حداقل 4.5:1 استفاده شود.
- **پس‌زمینه لایه‌ها**: تناوب نرم بین پس‌زمینه سفید خالص (`#FFFFFF`) و خاکستری بسیار روشن (`#F8FAFC`).

## Typography
- قلم پیش‌فرض: `Vazirmatn` با اعداد هماهنگ فارسی.
- تیترها با وزن ضخیم (`font-bold` یا `font-extrabold`) و فواصل خطوط متناسب (`leading-tight` یا `leading-snug`).
- متن بدنه با وزن عادی (`font-normal`) و ارتفاع خطوط راحت برای خواندن (`leading-8` یا `leading-relaxed`).

## Layout
- تمام فاصله‌گذاری‌ها مبتنی بر گرید ۱۲ ستونی و کانتینرهای استاندارد `max-w-7xl` هستند.
- چیدمان‌ها به صورت کاملاً بومی برای زبان فارسی (راست‌چین / `dir="rtl"`) طراحی شده‌اند.
- فاصله عمودی بخش‌ها (`py-20` الی `py-24`) برای ایجاد تنفس بصری یکدست.

## Elevation & Depth
- سایه‌های بسیار نرم با بلور بالا و انحراف ناچیز (`shadow-sm`, `shadow-md`, `shadow-xl`).
- از سایه‌های بلوکی بدون بلور یا هاله‌های رنگی زننده اجتناب می‌شود.

## Components
- **دکمه‌های اصلی**: دکمه‌های گرد یا گوشه‌گرد با فیل زمردی و ترنزیشن‌های نرم (`rounded-full`, `bg-emerald-600`, `hover:bg-emerald-500`).
- **کارت‌ها**: گوشه‌های گرد ۱۶ الی ۲۴ پیکسلی (`rounded-2xl`, `rounded-3xl`) با حاشیه نازک `border-slate-100` یا `border-slate-200`.
- **نشانگرهای وضعیت (Badges)**: حاشیه‌های ظریف و پس‌زمینه‌های لایت هماهنگ.

## Do's and Don'ts
- **DO**: رعایت دقیق نسبت کنتراست ۴.۵:۱ برای تمامی متون.
- **DO**: استفاده از رنگ متنی هماهنگ با پس‌زمینه (Tone-matching) در سطوح تیره به جای خاکستری کدر.
- **DON'T**: استفاده از انیمیشن‌های لرزان یا المان‌های چشمک‌زن زننده.
- **DON'T**: متن خاکستری روی پس‌زمینه‌های آبی یا سبز تیره (`gray-on-color`).
