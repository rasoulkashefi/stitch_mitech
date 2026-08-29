import React from 'react';
import { Cpu, ShieldCheck, Sparkles, ArrowLeft, Radar } from 'lucide-react';

export default function FeaturesBento() {
  return (
    <section id="technology" className="bg-slate-50/80 px-5 py-24 lg:px-8 border-t border-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* ── Text Column (right side in RTL) ── */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-right">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
                هسته فناوری و هوش مصنوعی
              </p>
              <h2 className="text-3xl font-extrabold leading-tight text-slate-900 lg:text-5xl tracking-tight">
                هوشمندی،
                <br />
                در خدمت استقلال شما.
              </h2>
            </div>

            <p className="text-base leading-8 text-slate-600">
              تمامی محصولات ما با یک هدف مهندسی شده‌اند: ارائه کنترل بیشتر، بالاترین ضریب ایمنی و تجربه‌ای روان از جابه‌جایی در هر فضایی که انتخاب می‌کنید؛ بدون نیاز به اینترنت یا زیرساخت پیچیده.
            </p>

            <div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                دریافت مشاوره فنی مهندسی
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* ── Bento Cards Column (left side in RTL) ── */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-5">

              {/* Card 1 – Smart Navigation */}
              <div className="flex flex-col gap-5 rounded-2xl border border-slate-200/70 bg-white p-7 shadow-xs hover:-translate-y-1 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                <div className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Cpu size={22} />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">ناوبری مستقل ۳۶۰ درجه</h3>
                  <p className="text-sm leading-6 text-slate-500">
                    سیستم تلفیقی بینایی ماشین و رادار برای مسیریابی میلی‌متری در فضاهای مسقف بدون نیاز به GPS.
                  </p>
                </div>
              </div>

              {/* Card 2 – 360 Safety */}
              <div className="flex flex-col gap-5 rounded-2xl border border-slate-200/70 bg-white p-7 shadow-xs hover:-translate-y-1 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                <div className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">ایمنی فعال و هوشمند</h3>
                  <p className="text-sm leading-6 text-slate-500">
                    تشخیص بلادرنگ موانع پویا، افراد و توقف خودکار چندمرحله‌ای برای جلوگیری از هرگونه برخورد.
                  </p>
                </div>
              </div>

              {/* Card 3 – Full width, dark high-tech bg */}
              <div className="relative col-span-2 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-8 text-white shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <Sparkles
                  size={160}
                  className="pointer-events-none absolute -left-6 bottom-[-30px] text-white opacity-[0.03]"
                />

                <div className="relative flex flex-col gap-5">
                  <div className="grid size-11 place-items-center rounded-xl bg-white/10 text-emerald-400">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      طراحی انسان‌محور <span className="text-emerald-400 text-sm font-semibold mr-2">(Human-Centered AI)</span>
                    </h3>
                    <p className="max-w-xl text-sm leading-7 text-slate-300">
                      تکنولوژی زمانی کاربردی است که به آسانیِ یک لمس باشد. رابط کاربری تجهیزات ما برای استفاده بی‌دردسر و بدون نیاز به دوره‌های آموزشی پیچیده برای تمامی گروه‌های سنی مهندسی شده است.
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
