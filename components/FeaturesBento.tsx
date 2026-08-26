import React from 'react';
import { Cpu, ShieldCheck, Sparkles, ArrowLeft } from 'lucide-react';

export default function FeaturesBento() {
  return (
    <section id="technology" className="bg-slate-50 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* ── Text Column (right side in RTL = first in DOM) ── */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-right">
            <div>
              <p className="mb-3 text-sm font-bold text-emerald-600">
                هسته فناوری ام. آی. تک.
              </p>
              <h2 className="text-4xl font-bold leading-tight text-blue-950 lg:text-5xl">
                هوشمندی،
                <br />
                در خدمت استقلال شما.
              </h2>
            </div>

            <p className="text-base leading-8 text-slate-600">
              تمامی محصولات ما با یک هدف طراحی شده‌اند: ارائه کنترل بیشتر، آسودگی خیال و تجربه‌ای ایمن از جابه‌جایی در هر مسیری که انتخاب می‌کنید.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900 transition-colors self-end"
            >
              دریافت مشاوره فنی
              <ArrowLeft
                size={17}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
            </a>
          </div>

          {/* ── Bento Cards Column (left side in RTL = second in DOM) ── */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-5">

              {/* Card 1 – Smart Navigation */}
              <div className="flex flex-col gap-5 rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Cpu size={22} />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">ناوبری مستقل</h3>
                  <p className="text-sm leading-6 text-slate-500">
                    سیستم بینایی ماشین و رادار برای مسیریابی دقیق بدون نیاز به GPS.
                  </p>
                </div>
              </div>

              {/* Card 2 – 360 Safety */}
              <div className="flex flex-col gap-5 rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">ایمنی ۳۶۰ درجه</h3>
                  <p className="text-sm leading-6 text-slate-500">
                    تشخیص لحظه‌ای موانع و توقف خودکار برای محافظت کامل از کاربر.
                  </p>
                </div>
              </div>

              {/* Card 3 – Full width, dark bg */}
              <div className="relative col-span-2 overflow-hidden rounded-2xl bg-blue-900 p-7 text-white hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                {/* Decorative background icon */}
                <Sparkles
                  size={140}
                  className="absolute -left-6 bottom-[-20px] text-white opacity-[0.06]"
                />

                <div className="relative flex flex-col gap-5">
                  <div className="grid size-11 place-items-center rounded-xl bg-white/10 text-emerald-400">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white">
                      ساده‌تر از همیشه <span className="text-white/50 text-base font-medium">(تعامل انسان‌محور)</span>
                    </h3>
                    <p className="max-w-xl text-sm leading-7 text-white/70">
                      تکنولوژی زمانی ارزشمند است که نیازی به آموزش پیچیده نداشته باشد. رابط کاربری تجهیزات ما برای استفاده بی‌دردسر توسط تمامی سنین طراحی شده است.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
