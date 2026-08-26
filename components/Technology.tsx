import React from 'react';
import { Cpu, ShieldCheck, Zap, ArrowLeft } from 'lucide-react';

export default function Technology() {
  return (
    <section id="technology" className="bg-slate-50 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          {/* Text Side */}
          <div>
            <p className="mb-3 text-sm font-bold text-emerald-600">فناوری که حس می‌شود</p>
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              هوشمندی،
              <br />
              <span className="text-blue-900">در خدمت شما.</span>
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              هر جزئیات با یک هدف طراحی شده: کنترل بیشتر، آسودگی بیشتر و تجربه‌ای طبیعی‌تر
              در تمام مسیر.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-blue-900 hover:text-blue-700 transition-colors"
            >
              با متخصصان ما صحبت کنید
              <ArrowLeft size={16} />
            </a>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
              <Cpu className="text-emerald-600" />
              <h3 className="mt-8 text-lg font-bold text-slate-900">کنترل هوشمند</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                سیستم حرکتی دقیق که با شما و محیط اطراف سازگار می‌شود.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="text-emerald-600" />
              <h3 className="mt-8 text-lg font-bold text-slate-900">ایمنی در اولویت</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                تشخیص موانع و تصمیم‌گیری سریع برای حرکت مطمئن.
              </p>
            </div>

            {/* Wide Card */}
            <div className="rounded-2xl bg-blue-900 p-7 text-white sm:col-span-2 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <Zap className="text-emerald-400" />
                  <h3 className="mt-8 text-lg font-bold">ساده‌تر از همیشه</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
                    تکنولوژی واقعی زمانی ارزشمند است که استفاده از آن آسان باشد. رابط کاربری
                    mitech برای تجربه‌ای بی‌دردسر ساخته شده است.
                  </p>
                </div>
                <span className="text-6xl font-bold text-emerald-400/20">∞</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
