'use client'

import {
  Activity,
  ArrowLeft,
  ArrowUpLeft,
  Boxes,
  BrainCircuit,
  ChevronLeft,
  CircuitBoard,
  Cloud,
  Cpu,
  Database,
  Gauge,
  Layers3,
  LockKeyhole,
  Map,
  Network,
  Radio,
  Radar,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import type { ComponentType, ReactNode } from 'react'

export type TechSlug = 'gps-independent-navigation' | 'drives-and-positioning' | 'digital-twin-platform'

type Icon = ComponentType<{ className?: string }>
type Feature = { title: string; desc: string; icon: Icon }

export const techPages: Record<TechSlug, {
  eyebrow: string; title: string; description: string; short: string; icon: Icon; accent: string
  features: Feature[]; metrics: [string, string][]; layers: string[]; useCases: string[]; diagram: 'navigation' | 'drives' | 'twin'
}> = {
  'gps-independent-navigation': {
    eyebrow: 'PERCEPTION / SLAM', title: 'ناوبری مستقل و درک محیط',
    description: 'مغز حرکتی محصولات مایتک؛ ترکیبی از بینایی ماشین، لیدار و Sensor Fusion برای حرکت دقیق و ایمن در محیط‌های پیچیده، بدون وابستگی به GPS.',
    short: 'حرکت دقیق در هر محیط، بدون اتکا به GPS.', icon: Radar, accent: 'سنجش و ادراک محیط',
    features: [
      { title: 'SLAM بلادرنگ', desc: 'ساخت نقشه سه‌بعدی از محیط ناشناخته و به‌روزرسانی آن همزمان با حرکت.', icon: Map },
      { title: 'حسگر LiDAR 360°', desc: 'اسکن پیوسته اطراف برای شناسایی مانع، مسیر و محدوده‌های ایمنی تطبیقی.', icon: Radar },
      { title: 'تلفیق هوشمند حسگرها', desc: 'ترکیب داده دوربین، اولتراسونیک و لیدار برای حذف نقاط کور و خطای ادراک.', icon: ScanLine },
    ],
    metrics: [['±۲ cm', 'دقت موقعیت‌یابی'], ['۳۶۰°', 'پوشش ادراک محیط'], ['< ۵۰ ms', 'زمان پاسخ مسیر']],
    layers: ['LiDAR / Camera / IMU', 'Sensor Fusion Engine', 'SLAM + Path Planning', 'Adaptive Safety Layer'],
    useCases: ['ربات‌های خدماتی در مال و فرودگاه', 'ویلچر و پلتفرم‌های توانبخشی هوشمند', 'حرکت خودکار در انبار و فضای صنعتی'], diagram: 'navigation',
  },
  'drives-and-positioning': {
    eyebrow: 'ACTUATORS / MOTION CONTROL', title: 'درایو و کنترل حرکت چندمحوره',
    description: 'از گشتاور موتور تا فیدبک موقعیت؛ زیرساخت حرکتی مایتک برای ساخت محصولاتی نرم، دقیق، کم‌صدا و قابل اعتماد در کاربری‌های صنعتی و انسانی.',
    short: 'حرکت نرم، قدرتمند و قابل پیش‌بینی.', icon: Gauge, accent: 'حرکت و عملگرها',
    features: [
      { title: 'درایوهای صنعتی دقیق', desc: 'کنترل گشتاور و سرعت با راندمان بالا برای بارهای متغیر و چرخه کاری مداوم.', icon: Zap },
      { title: 'کنترل چندعملگره', desc: 'هماهنگی دقیق چند موتور و عملگر برای پلتفرم‌های متحرک و تجهیزات توانبخشی.', icon: Workflow },
      { title: 'پایداری در شیب', desc: 'مدیریت لغزش و توزیع گشتاور برای حرکت ایمن روی رمپ و سطوح ناهموار.', icon: Activity },
    ],
    metrics: [['۲۰۰ kg', 'ظرفیت بار حرکتی'], ['۰.۱°', 'رزولوشن کنترل'], ['۴۸ V', 'معماری توان بهینه']],
    layers: ['Motor / Encoder / Brake', 'Motion Controller', 'Torque & Position Loop', 'Safety & Diagnostics'],
    useCases: ['پلتفرم‌های خودران و ربات‌های خدماتی', 'ویلچرهای برقی و مبلمان متحرک', 'تجهیزات جابه‌جایی در محیط‌های تجاری'], diagram: 'drives',
  },
  'digital-twin-platform': {
    eyebrow: 'CLOUD / AI ORCHESTRATION', title: 'مدیریت ناوگان و همتای دیجیتال',
    description: 'لایه نرم‌افزاری مایتک برای مشاهده، هماهنگی و بهینه‌سازی صدها دستگاه؛ از تله‌متری بلادرنگ تا شبیه‌سازی رفتار ناوگان در نسخه دیجیتال محیط.',
    short: 'یک پنل برای دیدن، کنترل و بهینه‌سازی کل ناوگان.', icon: Cloud, accent: 'داده و ارکستراسیون',
    features: [
      { title: 'Fleet Orchestration', desc: 'تخصیص مأموریت و بهینه‌سازی مسیرها در سطح کل ناوگان برای حذف گره ترافیکی.', icon: Network },
      { title: 'مانیتورینگ بلادرنگ', desc: 'پایش باتری، موقعیت، سلامت و نیاز تعمیراتی هر دستگاه از یک کنسول واحد.', icon: Radio },
      { title: 'همتای دیجیتال', desc: 'شبیه‌سازی محیط واقعی برای تحلیل جریان تردد، ظرفیت و سناریوهای توسعه.', icon: BrainCircuit },
    ],
    metrics: [['۱۰۰+', 'دستگاه همزمان'], ['۹۹.۹%', 'دسترس‌پذیری سرویس'], ['۲۴/۷', 'پایش و هشدار']],
    layers: ['Robot Telemetry / IoT', 'Edge Gateway & Cache', 'Fleet Intelligence', 'Digital Twin Dashboard'],
    useCases: ['مدیریت ناوگان در مجتمع‌های بزرگ', 'پایش عملیات فرودگاه و پایانه', 'تحلیل ظرفیت و طراحی سناریوهای آینده'], diagram: 'twin',
  },
}

const childLinks = Object.entries(techPages) as [TechSlug, (typeof techPages)[TechSlug]][]

export function TechShell({ children, active }: { children: ReactNode; active?: TechSlug }) {
  return <main dir="rtl" className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link href="/technology" className="font-mono text-sm font-bold tracking-[0.16em] text-primary">MITECH<span className="text-accent">.</span></Link>
        <nav aria-label="Technology navigation" className="hidden items-center gap-1 md:flex">
          <Link href="/technology" className={`rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-primary/5 ${!active ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>مرکز فناوری</Link>
          {childLinks.map(([slug, page]) => <Link key={slug} href={`/technology/${slug}`} className={`rounded-full px-4 py-2 text-sm transition hover:bg-primary/5 ${active === slug ? 'bg-accent/20 font-bold text-primary' : 'text-muted-foreground'}`}>{page.accent}</Link>)}
        </nav>
        <span className="hidden font-mono text-[10px] tracking-[0.15em] text-muted-foreground sm:block">MIKAIL SMART TECHNOLOGY</span>
      </div>
    </header>
    <div className="border-b border-border/50 bg-secondary/25"><div className="mx-auto max-w-7xl px-6 py-3 text-xs text-muted-foreground lg:px-10"><Link href="/technology" className="hover:text-primary">فناوری‌ها</Link>{active && <><ChevronLeft className="mx-2 inline size-3" /><span className="text-primary">{techPages[active].accent}</span></>}</div></div>
    {children}
  </main>
}

function TechnicalDiagram({ type }: { type: 'navigation' | 'drives' | 'twin' }) {
  return <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-primary/15 bg-primary p-8 text-primary-foreground shadow-2xl shadow-primary/10">
    <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'linear-gradient(color-mix(in oklab, var(--color-primary-foreground) 12%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--color-primary-foreground) 12%, transparent) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
    <div className="relative flex h-full flex-col justify-between"><div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-primary-foreground/60"><span>MIKAIL / SYSTEM CORE</span><span className="flex items-center gap-2"><span className="size-2 rounded-full bg-accent" />ONLINE</span></div>
      <div className="flex items-center justify-center">{type === 'navigation' && <div className="relative flex size-56 items-center justify-center rounded-full border border-primary-foreground/20"><div className="absolute inset-8 rounded-full border border-accent/60" /><div className="absolute inset-20 rounded-full bg-accent/80 shadow-[0_0_50px_var(--color-accent)]" /><Radar className="size-28 text-primary-foreground/60" /></div>}{type === 'drives' && <div className="grid grid-cols-2 gap-5"><div className="size-24 rounded-full border-4 border-accent/80 p-5"><div className="size-full rounded-full bg-accent/60" /></div><div className="size-24 rounded-full border-4 border-accent/80 p-5"><div className="size-full rounded-full bg-accent/60" /></div><div className="col-span-2 h-10 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10" /></div>}{type === 'twin' && <div className="relative h-48 w-64"><div className="absolute inset-x-6 top-4 h-24 skew-y-[-18deg] border border-accent/70 bg-accent/10" /><div className="absolute inset-x-6 top-20 h-24 skew-y-[18deg] border border-primary-foreground/30" /><div className="absolute inset-x-16 top-16 h-20 border border-accent/50 bg-accent/20" /><Network className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 text-accent" /></div>}</div>
      <div className="flex items-end justify-between"><div><p className="font-mono text-[10px] text-primary-foreground/50">CORE TELEMETRY</p><p className="mt-1 text-2xl font-black">ACTIVE<span className="text-accent">.</span></p></div><CircuitBoard className="size-8 text-accent" /></div>
    </div>
  </div>
}

export function TechnologyOverview() {
  return <TechShell><section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"><div className="grid items-end gap-10 lg:grid-cols-[1.1fr_.9fr]"><div><span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 font-mono text-[10px] tracking-widest text-primary"><Sparkles className="size-3 text-accent" /> TECHNOLOGY PLATFORM</span><h1 className="mt-7 max-w-3xl text-balance text-5xl font-black leading-[1.15] text-primary sm:text-6xl lg:text-7xl">فناوری هوشمند<br /><span className="text-accent">میکائیل</span></h1></div><p className="max-w-md text-pretty text-lg leading-9 text-muted-foreground">در مایتک، محصول فقط یک دستگاه نیست؛ یک سیستم هوشمند است که از ادراک محیط تا تصمیم‌گیری و حرکت، با دقت مهندسی شده است.</p></div><div className="mt-16 grid gap-4 md:grid-cols-3">{childLinks.map(([slug, page], index) => <Link key={slug} href={`/technology/${slug}`} className="group rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-accent hover:shadow-xl"><div className="flex items-center justify-between"><span className="font-mono text-xs text-muted-foreground">0{index + 1} / CORE</span><div className="rounded-2xl bg-primary/5 p-3 text-accent"><page.icon className="size-6" /></div></div><h2 className="mt-12 text-2xl font-black text-primary">{page.accent}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{page.short}</p><span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary">مشاهده فناوری <ArrowUpLeft className="size-4 text-accent transition group-hover:-translate-x-1 group-hover:-translate-y-1" /></span></Link>)}</div></section><section className="border-y border-border/60 bg-secondary/25"><div className="mx-auto max-w-7xl px-6 py-16 lg:px-10"><div className="grid gap-10 lg:grid-cols-2"><div><span className="font-mono text-xs text-accent">// SYSTEM ARCHITECTURE</span><h2 className="mt-4 text-3xl font-black text-primary">از داده تا تصمیم،<br />در یک معماری یکپارچه</h2><p className="mt-6 max-w-lg leading-8 text-muted-foreground">پلتفرم مایتک به‌صورت لایه‌ای طراحی شده تا هر محصول، قابل توسعه، قابل پایش و آماده اتصال به زیرساخت‌های سازمانی باشد.</p></div><div className="grid gap-3 sm:grid-cols-2">{[['01','ادراک','Perception Layer',Radar],['02','حرکت','Motion Layer',Gauge],['03','هوش','Intelligence Layer',BrainCircuit],['04','مقیاس','Cloud Layer',Cloud]].map(([num, title, sub, Icon]) => <div key={num as string} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"><span className="font-mono text-xs text-accent">{num}</span><Icon className="size-5 text-primary" /><div><p className="font-bold text-primary">{title}</p><p className="font-mono text-[10px] text-muted-foreground">{sub}</p></div></div>)}</div></div></div></section><section className="bg-primary text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:flex-row sm:items-center sm:justify-between lg:px-10"><div><p className="font-mono text-xs text-accent">BUILD WITH MITECH</p><h2 className="mt-3 text-3xl font-black">برای مسئله شما، یک زیرساخت هوشمند می‌سازیم.</h2></div><Link href="mailto:hello@mitech.ir" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-accent px-6 py-3 font-bold text-primary transition hover:bg-primary-foreground">گفت‌وگو با تیم فنی <ArrowLeft className="size-4" /></Link></div></section></TechShell>
}

export function TechnologyDetail({ slug }: { slug: TechSlug }) { const page = techPages[slug]; const Icon = page.icon; return <TechShell active={slug}><section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20"><div className="grid items-center gap-12 lg:grid-cols-[1fr_.8fr]"><div><div className="flex items-center gap-3 font-mono text-xs text-accent"><Icon className="size-4" /> {page.eyebrow}</div><h1 className="mt-6 text-balance text-4xl font-black leading-tight text-primary sm:text-5xl lg:text-6xl">{page.title}</h1><p className="mt-7 max-w-2xl text-lg leading-9 text-muted-foreground">{page.description}</p><div className="mt-8 flex flex-wrap gap-3"><span className="rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">فناوری اختصاصی مایتک</span><span className="rounded-full bg-accent/15 px-4 py-2 text-sm font-semibold text-primary">قابل یکپارچه‌سازی</span></div></div><TechnicalDiagram type={page.diagram} /></div></section><section className="border-y border-border/60 bg-secondary/25"><div className="mx-auto max-w-7xl px-6 py-14 lg:px-10"><div className="mb-9 flex items-end justify-between gap-6"><div><span className="font-mono text-xs text-accent">// CAPABILITIES</span><h2 className="mt-3 text-3xl font-black text-primary">قابلیت‌های کلیدی</h2></div><span className="hidden font-mono text-xs text-muted-foreground sm:block">ENGINEERED IN IRAN / 2026</span></div><div className="grid gap-4 md:grid-cols-3">{page.features.map(({ title, desc, icon: FeatureIcon }) => <article key={title} className="rounded-2xl border border-border bg-card p-7"><div className="flex size-12 items-center justify-center rounded-xl bg-primary text-accent"><FeatureIcon className="size-5" /></div><h3 className="mt-8 text-lg font-bold text-primary">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p></article>)}</div></div></section><section className="mx-auto max-w-7xl px-6 py-14 lg:px-10"><div className="grid gap-12 lg:grid-cols-[.8fr_1fr]"><div><span className="font-mono text-xs text-accent">// PERFORMANCE</span><h2 className="mt-3 text-3xl font-black text-primary">قابل اندازه‌گیری،<br />قابل اعتماد</h2><div className="mt-8 grid grid-cols-3 gap-3">{page.metrics.map(([value, label]) => <div key={label} className="rounded-2xl border border-border bg-card p-4"><p className="text-xl font-black text-primary">{value}</p><p className="mt-2 text-[11px] leading-5 text-muted-foreground">{label}</p></div>)}</div></div><div><span className="font-mono text-xs text-accent">// DATA FLOW</span><h2 className="mt-3 text-3xl font-black text-primary">معماری لایه‌ای</h2><div className="mt-7 flex flex-col gap-2">{page.layers.map((layer, index) => <div key={layer} className="flex items-center gap-4 rounded-xl border border-border bg-secondary/40 p-4"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-black text-primary">{index + 1}</span><span className="font-mono text-xs text-primary">{layer}</span>{index < page.layers.length - 1 && <ArrowLeft className="mr-auto size-4 rotate-[-45deg] text-accent" />}</div>)}</div></div></div></section><section className="border-t border-border/60 bg-primary text-primary-foreground"><div className="mx-auto max-w-7xl px-6 py-14 lg:px-10"><div className="grid gap-8 lg:grid-cols-2"><div><span className="font-mono text-xs text-accent">// USE CASES</span><h2 className="mt-3 text-3xl font-black">در محصول، در دنیای واقعی</h2></div><ul className="grid gap-3">{page.useCases.map((item) => <li key={item} className="flex items-center gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 text-sm"><ShieldCheck className="size-4 text-accent" />{item}</li>)}</ul></div><div className="mt-12 flex flex-col gap-5 border-t border-primary-foreground/15 pt-8 sm:flex-row sm:items-center sm:justify-between"><p className="text-lg font-bold">آماده‌اید فناوری را به مزیت رقابتی تبدیل کنید؟</p><Link href="/technology" className="inline-flex items-center gap-2 font-bold text-accent hover:text-primary-foreground">بازگشت به مرکز فناوری <ChevronLeft className="size-4" /></Link></div></div></section></TechShell> }

export function TechSubpagesComponent() { return <TechnologyOverview /> }
