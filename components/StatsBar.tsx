import React from 'react';
import { Clock, Award, Users, ShieldCheck } from 'lucide-react';

const stats = [
  { value: '۱۰+ سال', label: 'نوآوری و مهندسی رباتیک', icon: Award },
  { value: '۲۵۰+ سازمان', label: 'مراکز تجاری، فرودگاهی و درمانی', icon: Users },
  { value: '۲۴/۷', label: 'پشتیبانی فنی و مانیتورینگ', icon: Clock },
  { value: '۱۰۰٪', label: 'توسعه الگوریتم و سخت‌افزار بومی', icon: ShieldCheck },
];

export default function StatsBar() {
  return (
    <section className="border-b border-slate-200/80 bg-white shadow-xs">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-x-reverse divide-slate-100 sm:grid-cols-4">
        {stats.map(({ value, label, icon: Icon }) => (
          <div
            key={label}
            className="group flex flex-col items-center gap-2 px-4 py-8 text-center transition-colors hover:bg-slate-50/60"
          >
            <div className="grid size-10 place-items-center rounded-xl bg-emerald-50/70 border border-emerald-100/80 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
              <Icon size={18} />
            </div>
            <span className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
              {value}
            </span>
            <p className="text-xs font-medium text-slate-500 max-w-[170px] leading-5">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
