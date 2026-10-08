import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const stats = [
  { value: '۱۳۸۹', label: 'آغاز R&D درایوهای الکتریکی (EV)' },
  { value: 'IATP', label: 'مرجع رسمی سازمان بهزیستی کشور' },
  { value: 'دانش‌بنیان', label: 'گرنت بنیاد ملی علم ایران (۱۴۰۲)' },
  { value: 'امیرکبیر', label: 'همکاری رسمی در ناوبری خودران' },
];

export default function Story() {
  return (
    <section id="story" dir="rtl" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 font-[Vazirmatn,sans-serif]">
      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* Right Side — Text Content */}
        <div className="flex flex-col gap-6">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            داستان شکل‌گیری و رویکرد میکائیل
          </p>

          <h2 className="text-3xl font-extrabold leading-snug text-blue-950 lg:text-4xl tracking-tight">
            نوآوری مهندسی، زمانی معنا دارد
            <br />
            که <span className="text-emerald-600">محدودیت‌ها</span> را بشکند.
          </h2>

          <p className="text-base sm:text-lg leading-9 text-slate-600">
            شکل‌گیری میکائیل از سال ۱۳۸۹ با تمرکز بر شکستن گلوگاه فناوری کنترل و ناوبری در وسایل نقلیه الکتریکی (EV Drives) و تجهیزات توانبخشی آغاز شد. با بیش از یک دهه انباشت دانش فنی و شناخته‌شدن به عنوان مرجع فناوری‌های کمکی هوشمند (IATP) از سوی سازمان بهزیستی کل کشور، و تلفیق آن با بال دوم پرواز یعنی هوش مصنوعی و بینایی ماشین از طریق گرنت بنیاد ملی علم ایران و همکاری دانشگاه امیرکبیر، امروز پیشرفته‌ترین پلتفرم‌های حمل‌ونقل هوشمند و خودران را راهبری می‌کنیم.
          </p>

          <div>
            <Link
              href="/about/history-vision"
              className="group inline-flex items-center gap-2 text-sm font-bold text-blue-950 transition-colors hover:text-emerald-600"
            >
              بیشتر درباره تاریخچه و رویکرد ما بخوانید
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Left Side — Stats Grid */}
        <div className="grid grid-cols-2 gap-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group flex flex-col gap-2 rounded-2xl border border-slate-200/50 bg-white p-6 shadow-xs transition-all hover:border-slate-300 hover:shadow-lg hover:-translate-y-1"
            >
              <span className="text-2xl font-extrabold text-blue-950 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-slate-500">{stat.label}</span>
              <div className="mt-2 h-0.5 w-6 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-12" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
