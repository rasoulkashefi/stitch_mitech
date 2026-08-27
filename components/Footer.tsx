import Image from 'next/image';
import { Phone, Mail, MapPin, Link2, Globe, X } from 'lucide-react';

const products = [
  { label: 'ویلچر برقی خودران', href: '#products' },
  { label: 'ربات باربر تعقیب‌کننده', href: '#products' },
  { label: 'کالسکه هوشمند خانواده', href: '#products' },
  { label: 'سیستم‌های کنترلر ویلچر', href: '#products' },
  { label: 'قطعات پله‌پیما', href: '#products' },
];

const enterprise = [
  { label: 'ناوگان مجتمع‌های تجاری', href: '#enterprise' },
  { label: 'لجستیک هوشمند فرودگاهی', href: '#enterprise' },
  { label: 'حمل‌ونقل در مراکز درمانی', href: '#enterprise' },
  { label: 'مراکز گردشگری و هتل‌ها', href: '#enterprise' },
];

const socialLinks = [
  { icon: Link2, href: '#', label: 'لینکدین' },
  { icon: Globe, href: '#', label: 'وب‌سایت' },
  { icon: X, href: '#', label: 'ایکس (توییتر)' },
];

export default function Footer() {
  return (
    <footer
      id="about"
      dir="rtl"
      className="bg-blue-950 px-5 pt-16 pb-8 lg:px-8 font-[Vazirmatn,sans-serif]"
    >
      <div className="mx-auto max-w-7xl">

        {/* ── Main Grid ── */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">

          {/* Column 1 — Brand (col-span-4) */}
          <div className="lg:col-span-4">
                      {/* Logo */}
            <Image
              src="/logo/mitech-logo.png"
              alt="فناوری هوشمند میکائیل"
              width={180}
              height={56}
              className="h-14 w-auto object-contain brightness-0 invert"
            />

            {/* SEO Description */}
            <p className="mt-6 text-sm leading-relaxed text-slate-400 max-w-sm">
              پلتفرم جامع رباتیک و توانبخشی. ارائه‌دهنده راهکارهای نوین حمل‌ونقل خودران
              (AMaaS) و تولیدکننده پیشرفته‌ترین تجهیزات کنترلی برای استقلال فردی و
              هوشمندسازی سازمانی.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-all hover:bg-emerald-600 hover:text-white"
                >
                  <Icon size={16} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Products (col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 font-bold text-white">محصولات و قطعات</h3>
            <ul className="flex flex-col gap-3">
              {products.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Enterprise (col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 font-bold text-white">راهکارهای سازمانی (AMaaS)</h3>
            <ul className="flex flex-col gap-3">
              {enterprise.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact & Trust (col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 font-bold text-white">ارتباط با ما</h3>

            <div className="flex flex-col gap-4">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone size={15} strokeWidth={1.8} className="shrink-0 text-emerald-500" />
                <span className="text-sm text-slate-400" dir="ltr">
                  ۰۲۱-۸۸۷۷۴۴۱۱
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail size={15} strokeWidth={1.8} className="shrink-0 text-emerald-500" />
                <span className="text-sm text-slate-400">info@mitech.ir</span>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin size={15} strokeWidth={1.8} className="mt-0.5 shrink-0 text-emerald-500" />
                <span className="text-sm text-slate-400 leading-6">
                  تهران، ایران
                </span>
              </div>
            </div>

            {/* Trust Badge Placeholder */}
            <div className="mt-6 flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-xl border border-slate-700 bg-slate-800 text-center">
              <span className="text-[10px] leading-4 text-slate-500">
                نماد دانش‌بنیان
                <br />/ اینماد
              </span>
            </div>
          </div>
        </div>

        {/* ── Sub-footer / Copyright ── */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-slate-500">
            © ۲۰۲۶ (۱۴۰۵) تمامی حقوق برای شرکت دانش‌بنیان فناوری هوشمند میکائیل محفوظ است.
          </p>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="transition-colors hover:text-slate-300">
              حریم خصوصی
            </a>
            <a href="#" className="transition-colors hover:text-slate-300">
              قوانین و مقررات
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
