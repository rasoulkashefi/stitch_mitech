import React from 'react';

export default function Enterprise() {
  return (
    <section id="enterprise" className="bg-blue-900 px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="mb-3 text-sm font-bold text-emerald-400">راهکارهای سازمانی</p>
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              فضاهای بزرگ‌تر،
              <br />
              تجربه‌ای <span className="text-emerald-400">هوشمندتر.</span>
            </h2>
          </div>
          <p className="max-w-md leading-8 text-white/70">
            از فرودگاه و بیمارستان تا مراکز خرید؛ ناوگان خودران mitech تجربه‌ای روان، ایمن
            و به‌یادماندنی برای مراجعان می‌سازد.
          </p>
        </div>

        {/* Image */}
        <div className="mt-12 overflow-hidden rounded-3xl">
          <img
            src="/images/fleet-service.png"
            alt="ناوگان خودران سازمانی mitech"
            className="h-80 w-full object-cover lg:h-[460px]"
          />
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="border-t border-white/20 pt-5">
            <b className="text-2xl">کاهش هزینه</b>
            <p className="mt-2 text-sm text-white/60">با مدیریت هوشمند ناوگان</p>
          </div>
          <div className="border-t border-white/20 pt-5">
            <b className="text-2xl">داده‌محور</b>
            <p className="mt-2 text-sm text-white/60">تصمیم‌گیری دقیق‌تر برای کسب‌وکار</p>
          </div>
          <div className="border-t border-white/20 pt-5">
            <b className="text-2xl">قابل توسعه</b>
            <p className="mt-2 text-sm text-white/60">هماهنگ با رشد مجموعه شما</p>
          </div>
        </div>
      </div>
    </section>
  );
}
