import React from 'react';
import Image from 'next/image';
import { HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* ── Image Column (right in RTL) ── */}
          <div className="order-1">
            <figure className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-100/90 via-slate-50 to-slate-100/70 p-3 sm:p-4 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-300/60">
              {/* Subtle ambient light glow */}
              <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-200/60 via-slate-100 to-slate-200/70">
                <Image
                  src="/images/sections/smart-wheelchair-controller.webp"
                  alt="کنترلر هوشمند و جوی‌استیک ارگونومیک ویلچر برقی مای‌تک با نمایشگر دیجیتال وضعیت، سرعت، شارژ باتری و کلیدهای کنترل چندمنظوره"
                  title="کنترلر هوشمند و ارگونومیک ویلچر برقی مای‌تک"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-2 sm:p-4 drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full border border-white/80 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                  <span>پلتفرم ناوبری و کنترل هوشمند</span>
                </div>
              </div>

              {/* Caption */}
              <figcaption className="mt-3.5 flex flex-col gap-1 px-1 text-right">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-slate-900 sm:text-base">
                    کنترلر ارگونومیک و ماژول ناوبری مای‌تک
                  </span>
                  <span className="inline-flex items-center rounded-md border border-emerald-200/60 bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                    نسل جدید
                  </span>
                </div>
                <p className="text-xs leading-5 text-slate-500">
                  طراحی ارگونومیک، مجهز به نمایشگر وضعیت دیجیتال و هدایت حرکتی ۳۶۰ درجه فوق‌دقیق
                </p>
              </figcaption>
            </figure>
          </div>

          {/* ── Text Column (left in RTL) ── */}
          <div className="order-2 flex flex-col gap-6 text-right">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                فلسفه طراحی و کیفیت ساخت
              </p>
              <h2 className="text-3xl font-extrabold leading-tight text-blue-950 lg:text-5xl tracking-tight">
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
              <div className="group rounded-2xl border border-slate-200/50 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-lg">
                <HeartHandshake className="h-7 w-7 text-emerald-600" />
                <h3 className="mt-3 font-bold text-blue-950 text-base">ارگونومی انسان‌محور</h3>
                <p className="mt-1.5 text-xs leading-6 text-slate-600">
                  سازگاری کامل با فرم بدنی و استفاده بدون خستگی در طول روز.
                </p>
              </div>
              <div className="group rounded-2xl border border-slate-200/50 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-lg">
                <ShieldCheck className="h-7 w-7 text-emerald-600" />
                <h3 className="mt-3 font-bold text-blue-950 text-base">استانداردهای مهندسی</h3>
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
