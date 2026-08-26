import React from 'react';
import { Clock3, ArrowLeft } from 'lucide-react';

export default function Blog() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-sm font-bold text-emerald-600">مجله mitech</p>
          <h2 className="text-4xl font-bold text-slate-900">
            ایده‌هایی برای
            <br />
            <span className="text-slate-500">حرکت رو به جلو.</span>
          </h2>
        </div>
        <a
          href="#contact"
          className="flex items-center gap-2 font-bold text-blue-900 hover:text-blue-700 transition-colors"
        >
          مشاهده همه مطالب
          <ArrowLeft size={16} />
        </a>
      </div>

      {/* Blog Grid */}
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <article className="group">
          <div className="overflow-hidden rounded-2xl bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
              alt="آینده حمل‌ونقل هوشمند"
              className="aspect-[1.4] w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>
          <p className="mt-5 text-xs font-bold text-emerald-600">فناوری و آینده</p>
          <h3 className="mt-2 text-xl font-bold leading-8 text-slate-900">
            چرا آینده حمل‌ونقل، انسانی‌تر خواهد بود؟
          </h3>
        </article>

        <article className="group">
          <div className="overflow-hidden rounded-2xl bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=600&q=80"
              alt="فضاهای هوشمند"
              className="aspect-[1.4] w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>
          <p className="mt-5 text-xs font-bold text-emerald-600">راهکار سازمانی</p>
          <h3 className="mt-2 text-xl font-bold leading-8 text-slate-900">
            ساختن فضاهایی که برای همه قابل دسترس‌اند
          </h3>
        </article>

        <article className="rounded-2xl bg-blue-900 p-7 text-white shadow-sm">
          <Clock3 className="text-emerald-400" />
          <p className="mt-14 text-xs font-bold text-emerald-400">راهنمای mitech</p>
          <h3 className="mt-3 text-xl font-bold leading-8">
            ۵ نکته برای انتخاب راهکار حرکتی مناسب
          </h3>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-400 transition-colors"
          >
            مطالعه راهنما
            <ArrowLeft size={15} />
          </a>
        </article>
      </div>
    </section>
  );
}
