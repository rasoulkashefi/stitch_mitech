import { Clock, Award, GraduationCap, ShieldCheck } from 'lucide-react';

const stats = [
  { value: '۱۵+ سال', label: 'نوآوری و مهندسی رباتیک', icon: Award },
  { value: 'دانش‌بنیان', label: 'دارای گرنت بنیاد ملی علم و همکاری با دانشگاه امیرکبیر', icon: GraduationCap },
  { value: '۲۴/۷', label: 'پشتیبانی فنی و مانیتورینگ', icon: Clock },
  { value: '۱۰۰٪', label: 'توسعه الگوریتم و سخت‌افزار بومی', icon: ShieldCheck },
];

export default function StatsBar() {
  return (
    <section className="border-b border-slate-200/50 bg-white shadow-xs">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-x-reverse divide-slate-100 sm:grid-cols-4">
        {stats.map(({ value, label, icon: Icon }) => (
          <div
            key={label}
            className="group flex flex-col items-center gap-2 px-4 py-8 text-center transition-colors hover:bg-slate-50/60"
          >
            <div className="grid size-10 place-items-center rounded-xl bg-emerald-50/70 border border-emerald-100/80 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
              <Icon size={18} />
            </div>
            <span className="text-2xl lg:text-3xl font-extrabold text-blue-950 tracking-tight">
              {value}
            </span>
            <p className="text-xs font-medium text-slate-500 max-w-[195px] leading-5">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
