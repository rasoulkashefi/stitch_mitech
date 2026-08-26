import React from 'react';
import { HeartHandshake, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl bg-slate-100">
          <img
            src="/images/lifestyle-mobility.png"
            alt="تجربه‌ای آزاد و مستقل در زندگی روزمره"
            className="aspect-square size-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="mb-3 text-sm font-bold text-emerald-600">تجربه‌ای که تغییر می‌دهد</p>
          <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            زندگی را
            <br />
            با ریتم خودت زندگی کن.
          </h2>
          <p className="mt-6 leading-8 text-slate-500">
            ما فقط محصول نمی‌سازیم؛ ما تجربه‌ای می‌سازیم که به شما اجازه می‌دهد روی چیزهای
            مهم زندگی تمرکز کنید.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5 hover:shadow-sm transition-shadow">
              <HeartHandshake className="text-emerald-600" />
              <b className="mt-4 block text-slate-900">طراحی انسانی</b>
              <span className="mt-2 block text-xs leading-5 text-slate-500">
                هر لمس و حرکت با درک نیاز واقعی شما.
              </span>
            </div>
            <div className="rounded-xl border border-slate-200 p-5 hover:shadow-sm transition-shadow">
              <Sparkles className="text-emerald-600" />
              <b className="mt-4 block text-slate-900">اعتماد روزانه</b>
              <span className="mt-2 block text-xs leading-5 text-slate-500">
                همراهی مطمئن، در خانه و بیرون از خانه.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
