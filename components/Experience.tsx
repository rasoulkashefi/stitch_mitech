import React from 'react';
import { HeartHandshake, ShieldCheck } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* ── Image Column (right in RTL) ── */}
          <div className="order-1">
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-xl">
              <img
                src="/images/sections/experience.jpg"
                alt="فلسفه طراحی انسان‌محور ام. آی. تک."
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
            </div>
          </div>

          {/* ── Text Column (left in RTL) ── */}
          <div className="order-2 flex flex-col gap-6 text-right">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                فلسفه طراحی و کیفیت ساخت
              </p>
              <h2 className="text-3xl font-extrabold leading-tight text-slate-900 lg:text-5xl tracking-tight">
                طراحی شده برای استقلال،
                <br />
                <span className="text-slate-400">مهندسی شده برای اطمینان.</span>
              </h2>
            </div>

            <p className="max-w-lg leading-8 text-slate-600 text-base">
              ما باور داریم که تکنولوژی زمانی ارزشمند است که توانمندساز باشد، نه دست‌وپاگیر. محصولات میکائیل با ترکیب مهندسی کنترل پیشرفته و درک عمیق از نیازهای واقعی کاربران، آزادی عمل و آرامش خاطر را در تمام فضاهای زیستی و عمومی به ارمغان می‌آورند.
            </p>

            {/* Mini Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="group rounded-2xl border border-slate-200/70 bg-slate-50/70 p-5 transition-all duration-300 hover:border-emerald-200 hover:bg-white hover:shadow-md">
                <HeartHandshake className="h-7 w-7 text-emerald-600" />
                <h3 className="mt-3 font-bold text-slate-900 text-base">ارگونومی انسان‌محور</h3>
                <p className="mt-1.5 text-xs leading-6 text-slate-600">
                  سازگاری کامل با فرم بدنی و استفاده بدون خستگی در طول روز.
                </p>
              </div>
              <div className="group rounded-2xl border border-slate-200/70 bg-slate-50/70 p-5 transition-all duration-300 hover:border-emerald-200 hover:bg-white hover:shadow-md">
                <ShieldCheck className="h-7 w-7 text-emerald-600" />
                <h3 className="mt-3 font-bold text-slate-900 text-base">استانداردهای مهندسی</h3>
                <p className="mt-1.5 text-xs leading-6 text-slate-600">
                  پایداری شاسی، تست‌های مکرر حرکتی و ایمنی بدون افت کارایی در شرایط مختلف.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
