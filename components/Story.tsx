import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="rounded-3xl border border-slate-200 p-8 lg:p-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold text-emerald-600">داستان ما</p>
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              نوآوری، وقتی
              <br />
              <span className="text-slate-500">معنادار است.</span>
            </h2>
          </div>
          <div>
            <p className="leading-8 text-slate-500">
              mitech از یک پرسش ساده شروع شد: اگر فناوری بتواند بخشی از محدودیت‌های حرکت
              را کنار بزند، زندگی چه شکلی خواهد بود؟ امروز، تیمی از مهندسان و طراحان ایرانی
              هستیم که هر روز برای پاسخ بهتر به این پرسش تلاش می‌کنیم.
            </p>
            <a
              href="#about"
              className="mt-7 inline-flex items-center gap-2 font-bold text-blue-900 hover:text-blue-700 transition-colors"
            >
              بیشتر درباره mitech
              <ArrowLeft size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
