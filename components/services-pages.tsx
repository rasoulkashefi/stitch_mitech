'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft, ArrowUpLeft, Check, ChevronLeft, CircleCheck, Cog, FileText, PackageCheck, ShieldCheck, Truck, Wrench, type LucideIcon } from 'lucide-react'

export type ServiceSlug = 'repairs' | 'specialist-repairs' | 'fleet-maintenance' | 'spare-parts'

type Service = { slug: ServiceSlug; label: string; eyebrow: string; title: string; description: string; icon: LucideIcon; points: string[]; metric: string; metricLabel: string }

export const services: Service[] = [
  { slug: 'repairs', label: 'تعمیرات تخصصی', eyebrow: 'SPECIALIST REPAIRS', title: 'تعمیرات تخصصی تجهیزات حرکتی و هوشمند ام‌آی‌تک', description: 'مرجع تخصصی عیب‌یابی، تعمیر و بازسازی تجهیزات جابه‌جایی هوشمند؛ با دانش فنی مهندسان ام‌آی‌تک، قطعات اصیل و گزارش شفاف از وضعیت دستگاه.', icon: Wrench, points: ['عیب‌یابی دقیق مکانیک، الکترونیک و نرم‌افزار', 'تعمیر انواع ویلچر برقی، مبل هوشمند و تجهیزات حرکتی', 'استفاده از قطعات اصلی و تست عملکرد پیش از تحویل'], metric: '۳ مرحله', metricLabel: 'تشخیص، تعمیر، تست' },
  { slug: 'fleet-maintenance', label: 'نگهداری ناوگان', eyebrow: 'FLEET MAINTENANCE', title: 'نگهداری پیشگیرانه ناوگان برای فرودگاه‌ها و مال‌ها', description: 'سرویس مستمر و SLAمحور برای ناوگان‌های سازمانی؛ با پایش سلامت، برنامه‌ریزی تعمیرات و گزارش مدیریتی قابل اندازه‌گیری.', icon: Cog, points: ['قراردادهای دوره‌ای و پاسخ‌گویی اولویت‌دار', 'بازدید پیشگیرانه، کالیبراسیون و تست ایمنی', 'داشبورد گزارش خرابی، زمان خواب و هزینه نگهداری'], metric: 'SLA', metricLabel: 'پشتیبانی سازمانی' },
  { slug: 'spare-parts', label: 'قطعات یدکی', eyebrow: 'OEM SPARE PARTS', title: 'تأمین قطعات یدکی اصیل و سازگار با ناوگان شما', description: 'زنجیره تأمین قطعات مصرفی و تخصصی تجهیزات ام‌آی‌تک با شناسایی دقیق مدل، اصالت‌سنجی و پشتیبانی فنی پیش از خرید.', icon: PackageCheck, points: ['استعلام بر اساس مدل، سریال و کاربرد دستگاه', 'قطعات اصیل، مصرفی و کیت‌های سرویس دوره‌ای', 'راهنمای نصب و پشتیبانی فنی برای تیم نگهداری'], metric: 'OEM', metricLabel: 'تأمین مطمئن' },
]

export function Shell({ children, active }: { children: React.ReactNode; active?: ServiceSlug }) {
  const pathname = usePathname()
  const isRepairsActive = active === 'repairs' || active === 'specialist-repairs'
  return (
    <main dir="rtl" className="min-h-screen w-full bg-white font-[Vazirmatn,sans-serif]">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <Link href="/" className="font-mono text-sm font-black tracking-[.18em] text-blue-950">
            MITECH<span className="text-emerald-600">.</span>
          </Link>
          <nav aria-label="ناوبری خدمات" className="hidden items-center gap-1 md:flex">
            <Link 
              href="/services" 
              className={`rounded-full px-4 py-2 text-sm font-bold ${!active ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
            >
              مرکز خدمات
            </Link>
            {services.map((item) => {
              const isCurrent = active === item.slug || (item.slug === 'repairs' && isRepairsActive)
              return (
                <Link 
                  key={item.slug} 
                  href={`/services/${item.slug}`} 
                  className={`rounded-full px-3 py-2 text-xs transition-colors ${isCurrent ? 'bg-emerald-50 font-bold text-emerald-700' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <span className="hidden font-mono text-[10px] tracking-widest text-slate-400 sm:block">MIKAIL SMART TECHNOLOGY</span>
        </div>
      </header>
      
      <div className="border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-xs">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-3 text-xs text-slate-500 lg:px-10">
          <Link href="/services" className="transition-colors hover:text-emerald-600">خدمات</Link>
          {active && (
            <>
              <ChevronLeft className="size-3" />
              <span className="font-semibold text-slate-900">
                {services.find((x) => x.slug === active || (x.slug === 'repairs' && isRepairsActive))?.label}
              </span>
            </>
          )}
        </div>
      </div>
      
      {children}
    </main>
  )
}

function Visual({ service }: { service?: Service }) { 
  const Icon = service?.icon ?? Truck; 
  return (
    <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 p-8 text-white shadow-2xl shadow-slate-900/10">
      <div 
        className="absolute inset-0 opacity-15" 
        style={{ backgroundImage: 'linear-gradient(color-mix(in oklab, white 12%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, white 12%, transparent) 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex justify-between font-mono text-[10px] tracking-widest text-slate-400">
          <span>MIKAIL / SERVICE OS</span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            ACTIVE
          </span>
        </div>
        <div className="flex justify-center">
          <div className="relative flex size-56 items-center justify-center rounded-full border border-white/10">
            <div className="absolute inset-8 rounded-full border border-emerald-500/30" />
            <div className="absolute inset-20 rounded-full bg-emerald-500/20 shadow-[0_0_50px_var(--color-emerald-500)]" />
            <Icon className="relative size-24 text-emerald-400" />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[10px] text-slate-400">SERVICE STATUS</p>
            <p className="mt-1 text-2xl font-black text-white">READY<span className="text-emerald-500">.</span></p>
          </div>
          <ShieldCheck className="size-8 text-emerald-500" />
        </div>
      </div>
    </div> 
  )
}

export function CTA() { 
  return (
    <section className="bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #059669 0%, transparent 50%)' }} />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between gap-7 px-6 py-14 lg:flex-row lg:items-center lg:px-10">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">SERVICE DESK / MITECH</span>
          <h2 className="mt-3 text-3xl font-extrabold text-white tracking-tight">برای تجهیزات خود روی ام‌آی‌تک حساب کنید</h2>
          <p className="mt-3 text-sm sm:text-base leading-7 text-slate-300">مدل دستگاه یا نیاز سازمانی خود را با ما در میان بگذارید.</p>
        </div>
        <Link 
          href="mailto:service@mitech.ir" 
          className="group inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/40 transition-all hover:bg-emerald-500 active:scale-[0.98]"
        >
          درخواست سرویس 
          <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
        </Link>
      </div>
    </section> 
  ) 
}

export function ServicesHub() { 
  return (
    <Shell>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_.8fr]">
          <div>
            <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-xs">
              MITECH SERVICE NETWORK
            </span>
            <h1 className="mt-4 text-balance text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.2] text-blue-950 tracking-tight">
              خدماتی برای
              <br />
              <span className="text-emerald-600">حرکت بی‌وقفه</span>
            </h1>
          </div>
          <p className="max-w-lg text-pretty text-base sm:text-lg leading-8 text-slate-600">
            از یک تعمیر دقیق تا قرارداد نگهداری یک ناوگان کامل؛ تیم خدمات ام‌آی‌تک کنار شماست تا تجهیزات همیشه آماده، ایمن و قابل اعتماد بمانند.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((item, i) => (
            <Link 
              key={item.slug} 
              href={`/services/${item.slug}`} 
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/50 bg-slate-50 p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-white hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">
                    0{i + 1} / SERVICE
                  </span>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-950/20 group-hover:bg-emerald-500 transition-colors">
                    <item.icon size={22} />
                  </div>
                </div>
                <h2 className="mt-8 text-2xl font-bold text-blue-950 group-hover:text-emerald-700 transition-colors">{item.label}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
              <div className="mt-8 border-t border-slate-200/80 pt-5 flex items-center justify-between text-xs font-medium">
                <span className="font-semibold text-slate-700">{item.metricLabel}</span>
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700 group-hover:text-emerald-600">
                  جزئیات خدمت 
                  <ArrowUpLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <section className="border-y border-slate-200/50 bg-slate-50 py-20 px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-white shadow-lg">
            <Truck className="size-8 text-emerald-400" />
            <h2 className="mt-8 text-2xl font-extrabold tracking-tight">یک شریک فنی، نه فقط تعمیرکار</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              دانش محصول، دسترسی به قطعه و تجربه استقرار، خدمات ام‌آی‌تک را برای محیط‌های حساس متمایز می‌کند.
            </p>
          </div>
          {['شفافیت در تشخیص و هزینه','قطعات اصیل و تست‌شده'].map((x) => (
            <div key={x} className="rounded-2xl border border-slate-200/50 bg-white p-8 shadow-xs">
              <Check className="size-7 text-emerald-600" />
              <h3 className="mt-8 text-xl font-bold text-blue-950">{x}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">فرآیند مستند، قابل پیگیری و متناسب با مدل دستگاه شما.</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </Shell>
  ) 
}

export function ServiceDetail({ slug }: { slug: ServiceSlug }) { 
  const item = services.find((x) => x.slug === slug)!; 
  return (
    <Shell active={slug}>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_.72fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-xs">
              <item.icon className="size-4" /> {item.eyebrow}
            </div>
            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.2] text-blue-950 tracking-tight">
              {item.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-600">
              {item.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">خدمت رسمی ام‌آی‌تک</span>
              <span className="rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700">پشتیبانی تخصصی</span>
            </div>
          </div>
          <Visual service={item} />
        </div>
      </section>
      
      <section className="border-y border-slate-200/50 bg-slate-50 py-20 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-emerald-600">
            مزایای خدمات
          </span>
          <h2 className="text-3xl font-extrabold text-blue-950 tracking-tight">استاندارد ام‌آی‌تک در هر خدمت</h2>
          
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {item.points.map((point) => (
              <div key={point} className="rounded-2xl border border-slate-200/50 bg-white p-7 shadow-xs">
                <CircleCheck className="size-6 text-emerald-600" />
                <p className="mt-5 text-base font-bold leading-7 text-blue-950">{point}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex items-center gap-6 rounded-2xl border border-emerald-500/30 bg-emerald-50 p-8 shadow-sm">
            <div className="text-4xl font-extrabold text-blue-950 tracking-tight">{item.metric}</div>
            <div>
              <p className="font-bold text-emerald-800">{item.metricLabel}</p>
              <p className="mt-1 text-sm font-medium text-emerald-700/80">با فرآیندی استاندارد و گزارش‌پذیر</p>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
    </Shell> 
  ) 
}

export function SpecialistRepairsPage() { return <ServiceDetail slug="specialist-repairs" /> }
