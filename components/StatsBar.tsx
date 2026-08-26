import React from 'react';

export default function StatsBar() {
  const stats = [
    { value: '+۱۰', label: 'سال تجربه و نوآوری' },
    { value: '+۲۵۰', label: 'کاربر و سازمان همراه' },
    { value: '۲۴/۷', label: 'پشتیبانی و همراهی' },
    { value: '۱۰۰٪', label: 'توسعه با دانش بومی' },
  ];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-x-reverse divide-slate-200 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="p-7 text-center">
            <b className="text-3xl text-blue-900">{stat.value}</b>
            <p className="mt-2 text-xs text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
