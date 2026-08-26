import React from 'react';
import { Clock, Award, Users, MapPin } from 'lucide-react';

const stats = [
  { value: '+۱۰', label: 'سال تجربه و نوآوری', icon: Award },
  { value: '+۲۵۰', label: 'کاربر و سازمان همراه', icon: Users },
  { value: '۲۴/۷', label: 'پشتیبانی و همراهی', icon: Clock },
  { value: '۱۰۰٪', label: 'توسعه با دانش بومی', icon: MapPin },
];

export default function StatsBar() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-x-reverse divide-slate-200 sm:grid-cols-4">
        {stats.map(({ value, label, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center gap-2 p-7 text-center">
            <div className="grid size-9 place-items-center rounded-full bg-slate-50 text-blue-900">
              <Icon size={17} />
            </div>
            <b className="text-3xl text-blue-900">{value}</b>
            <p className="text-xs text-slate-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
