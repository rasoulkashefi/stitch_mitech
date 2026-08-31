import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Link2, Globe } from 'lucide-react';

const solutionLinks = [
  { label: 'مجتمع‌های تجاری و مال‌ها', href: '/solutions/malls' },
  { label: 'فرودگاه‌ها و پایانه‌ها', href: '/solutions/airports' },
  { label: 'مراکز درمانی و بیمارستان‌ها', href: '/solutions/healthcare' },
  { label: 'مراکز گردشگری و هتل‌ها', href: '/solutions/tourism' },
  { label: 'مشاهده همه راهکارها', href: '/solutions' },
];

const fleetLinks = [
  { label: 'ویلچرهای خودران و هوشمند', href: '/fleet/autonomous-wheelchairs' },
  { label: 'کالسکه‌های هوشمند خانواده', href: '/fleet/smart-family-carts' },
  { label: 'ربات‌های باربر تعقیب‌کننده (AMR)', href: '/fleet/following-amrs' },
  { label: 'مبل‌های هوشمند متحرک', href: '/fleet/smart-mobile-sofas' },
  { label: 'سیستم‌های کنترل و جویستیک توانبخشی', href: '/fleet/wheelchair-controllers' },
  { label: 'سیستم‌های کنترل و ناوبری رباتیک', href: '/fleet/robotic-navigation-systems' },
  { label: 'مشاهده کل محصولات و ناوگان', href: '/fleet' },
];

const techAndBizLinks = [
  { label: 'ناوبری مستقل از GPS', href: '/technology/gps-independent-navigation' },
  { label: 'سیستم‌های پیشران و کنترلرها', href: '/technology/drives-and-positioning' },
  { label: 'پلتفرم دوقلوی دیجیتال', href: '/technology/digital-twin-platform' },
  { label: 'جابجایی خودران اشتراکی (AMaaS)', href: '/business-model/amaas' },
  { label: 'اشتراک درآمد و سرمایه‌گذاری', href: '/business-model/revenue-sharing' },
];

const companyAndBlogLinks = [
  { label: 'درباره ما و اهداف شرکت', href: '/about' },
  { label: 'تاریخچه و چشم‌انداز', href: '/about/history-vision' },
  { label: 'دیدگاه‌های صنعت در وبلاگ', href: '/blog/category/industry-insights' },
  { label: 'مطالعات موردی و پروژه‌ها', href: '/blog/category/case-studies' },
  { label: 'اخبار رسمی و رویدادها', href: '/blog/category/company-news' },
];

const socialLinks = [
  { icon: Link2, href: 'https://linkedin.com', label: 'لینکدین' },
  { icon: Globe, href: 'https://mitech.ir', label: 'وب‌سایت رسمی' },
];

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="bg-slate-950 px-5 pt-16 pb-8 lg:px-8 font-[Vazirmatn,sans-serif] text-slate-200 border-t border-slate-800/80"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── Main Links Grid ── */}
        <div className="mb-14 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12">
          
          {/* Column 1: Brand & Contact Info (col-span-3) */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block">
              <Image
                src="/logo/mitech-logo.png"
                alt="شرکت دانش‌بنیان فناوری هوشمند میکائیل"
                width={170}
                height={54}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="mt-5 text-xs leading-relaxed text-slate-400 max-w-xs">
              شرکت دانش‌بنیان فناوری هوشمند میکائیل؛ پیشگام در توسعه سامانه‌های ناوبری مستقل، ربات‌های هوشمند توانبخشی و راهکارهای جامع AMaaS در خاورمیانه.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <Phone size={14} className="text-emerald-400 shrink-0" />
                <span dir="ltr">۰۲۱-۸۸۷۷۴۴۱۱</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <Mail size={14} className="text-emerald-400 shrink-0" />
                <span>info@mitech.ir</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-slate-400">
                <MapPin size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>تهران، پارک علم و فناوری | ایران</span>
              </div>
            </div>

            <div className="mt-6 flex gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/80 transition-all duration-300 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Solutions (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-bold text-white">راهکارها</h4>
            <ul className="flex flex-col gap-2.5">
              {solutionLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-slate-400 transition-colors duration-300 hover:text-emerald-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Fleet (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-bold text-white">محصولات و ناوگان</h4>
            <ul className="flex flex-col gap-2.5">
              {fleetLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-slate-400 transition-colors duration-300 hover:text-emerald-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Tech & Biz (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-bold text-white">فناوری و مدل‌های تجاری</h4>
            <ul className="flex flex-col gap-2.5">
              {techAndBizLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-slate-400 transition-colors duration-300 hover:text-emerald-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company & Blog (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-bold text-white">درباره ما و وبلاگ</h4>
            <ul className="flex flex-col gap-2.5">
              {companyAndBlogLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-slate-400 transition-colors duration-300 hover:text-emerald-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Sub-footer / Copyright ── */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 md:flex-row">
          <p>
            © ۲۰۲۶ (۱۴۰۵) تمامی حقوق مادی و معنوی برای شرکت دانش‌بنیان فناوری هوشمند میکائیل (mitech.ir) محفوظ است.
          </p>

          <div className="flex gap-6">
            <Link href="/about" className="hover:text-slate-400 transition-colors duration-300">
              حریم خصوصی
            </Link>
            <Link href="/about" className="hover:text-slate-400 transition-colors duration-300">
              شرایط و ضوابط
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors duration-300">
              پشتیبانی
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
