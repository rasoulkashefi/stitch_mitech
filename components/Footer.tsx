import React from 'react';
import { Network } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" className="bg-blue-900 px-5 py-12 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-10 md:flex-row">
          <div>
            <div className="flex items-center gap-3 text-xl font-bold">
              <span className="grid size-10 place-items-center rounded-xl bg-emerald-600 text-white">
                <Network size={20} />
              </span>
              mitech<span className="text-emerald-400">.</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
              فناوری برای زندگی مستقل و آینده‌ای که برای همه حرکت می‌کند.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-14 gap-y-4 text-sm text-white/65">
            <a href="#products" className="hover:text-white transition-colors">محصولات</a>
            <a href="#technology" className="hover:text-white transition-colors">فناوری ما</a>
            <a href="#enterprise" className="hover:text-white transition-colors">راهکار سازمانی</a>
            <a href="#contact" className="hover:text-white transition-colors">تماس با ما</a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <span>© ۱۴۰۴ mitech. تمامی حقوق محفوظ است.</span>
          <span>تهران، ایران · ساخته‌شده برای حرکت</span>
        </div>
      </div>
    </footer>
  );
}
