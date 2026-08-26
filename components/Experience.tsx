import React from 'react';
import { HeartHandshake, ShieldCheck } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* ── Image Column (right in RTL = first in DOM) ── */}
          <div className="order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=85"
                alt="فلسفه طراحی انسان‌محور ام. آی. تک."
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent" />
            </div>
          </div>

          {/* ── Text Column (left in RTL = second in DOM) ── */}
          <div className="order-2 flex flex-col gap-6 text-right">

            {/* Eyebrow */}
            <p className="text-sm font-bold text-emerald-600">
              فلسفه طراحی ام. آی. تک.
            </p>

            {/* H2 */}
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              طراحی شده برای استقلال،
              <br />
              <span className="text-slate-500">مهندسی شده برای اعتماد.</span>
            </h2>

            {/* Description */}
            <p className="max-w-lg leading-8 text-slate-600">
              ما باور داریم که تکنولوژی باید توانمندساز باشد، نه دست‌وپاگیر. محصولات ما با ترکیب مهندسی پیشرفته رباتیک و درک عمیق از نیازهای انسانی، آزادی عمل و آرامش خاطر را در خانه و بیرون از خانه به شما هدیه می‌دهند.
            </p>

            {/* Mini Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="group rounded-xl border border-slate-100 bg-slate-50 p-5 transition-all duration-300 hover:border-emerald-200 hover:shadow-md">
                <HeartHandshake className="h-8 w-8 text-emerald-600" />
                <h3 className="mt-3 font-bold text-slate-900">طراحی انسان‌محور</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  ارگونومی بی‌نقص و رابط کاربری ساده برای تمامی سنین.
                </p>
              </div>
              <div className="group rounded-xl border border-slate-100 bg-slate-50 p-5 transition-all duration-300 hover:border-emerald-200 hover:shadow-md">
                <ShieldCheck className="h-8 w-8 text-emerald-600" />
                <h3 className="mt-3 font-bold text-slate-900">قابلیت اطمینان بالا</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  همراهی مطمئن با پایداری کامل در شرایط محیطی مختلف.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
