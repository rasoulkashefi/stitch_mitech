import {
  ArrowLeft,
  ArrowUpLeft,
  Bot,
  BrainCircuit,
  Check,
  ChevronLeft,
  CircleDot,
  Cpu,
  Factory,
  Leaf,
  Menu,
  Network,
  Orbit,
  Play,
  Radio,
  ShieldCheck,
  Layers,
  X,
  Zap,
} from 'lucide-react'
import Link from 'next/link'

const capabilities = [
  { icon: BrainCircuit, title: 'هوش مصنوعی', text: 'راهکارهای هوشمند برای تصمیم‌گیری دقیق‌تر و آینده‌نگرانه.' },
  { icon: Cpu, title: 'نرم‌افزار', text: 'ساخت محصولات دیجیتال مقیاس‌پذیر، سریع و معنادار.' },
  { icon: Network, title: 'زیرساخت', text: 'اتصال امن داده، ابر و شبکه برای سازمان‌های در حال رشد.' },
]

const branches = [
  { icon: Bot, title: 'اتوماسیون و رباتیک', text: 'از ایده تا خط تولید هوشمند، انسان را توانمندتر می‌کنیم.', tag: 'AUTOMATION' },
  { icon: Leaf, title: 'انرژی پاک', text: 'راهکارهای داده‌محور برای ساخت آینده‌ای پایدارتر.', tag: 'CLEAN ENERGY' },
  { icon: Orbit, title: 'تحقیق و توسعه', text: 'مرزهای فناوری را با آزمایش‌های جسورانه جابه‌جا می‌کنیم.', tag: 'R&D LAB' },
]

export function MitechPage() {
  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="#top" className="font-mono text-sm font-bold tracking-[0.18em] text-primary" aria-label="Mitech home">MITECH<span className="text-accent">.</span></Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="ناوبری اصلی">
          <Link className="transition-colors hover:text-foreground" href="#about">درباره ما</Link>
          <Link className="transition-colors hover:text-foreground" href="#capabilities">توانمندی‌ها</Link>
          <Link className="transition-colors hover:text-foreground" href="#branches">حوزه‌های فعالیت</Link>
        </nav>
        <Link href="#contact" className="hidden items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground md:flex">شروع همکاری <ArrowLeft className="size-4" /></Link>
        <button className="rounded-full border border-border p-2 md:hidden" aria-label="باز کردن منو"><Menu className="size-5" /></button>
      </header>

      <section id="top" className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-20">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-primary/5 px-4 py-2 font-mono text-[11px] tracking-[0.12em] text-primary"><span className="size-2 rounded-full bg-accent shadow-[0_0_0_5px_color-mix(in_oklab,var(--color-accent)_15%,transparent)]" /> TECHNOLOGY / INFRASTRUCTURE</div>
          <h1 className="text-balance text-5xl font-black leading-[1.12] tracking-tight text-primary sm:text-6xl lg:text-7xl">فردا را<br /><span className="text-accent">مهندسی</span> می‌کنیم.</h1>
          <p className="mt-7 max-w-lg text-pretty text-lg leading-8 text-muted-foreground">مایتک، نقطه تلاقی ایده‌های بزرگ و فناوری‌های عمیق است. ما زیرساخت‌هایی می‌سازیم که جهان آینده روی آن‌ها حرکت می‌کند.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="#contact" className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90">با ما بسازید <ArrowLeft className="size-4" /></Link>
            <Link href="#about" className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-primary"><Play className="size-4 fill-current" /> داستان مایتک</Link>
          </div>
          <div className="mt-16 flex gap-10 border-t border-border pt-6 font-mono text-xs text-muted-foreground"><span><strong className="block text-xl text-primary">۰۵+</strong> سال تجربه</span><span><strong className="block text-xl text-primary">۲۴</strong> پروژه فعال</span><span><strong className="block text-xl text-primary">∞</strong> امکان تازه</span></div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[540px]" aria-label="نمایش گرافیکی شبکه مایتک">
          <div className="absolute inset-[11%] rounded-full border border-primary/10" /><div className="absolute inset-[22%] rounded-full border border-primary/10" /><div className="absolute inset-[34%] rounded-full border border-accent/25" />
          <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/20"><path d="M60 390 250 250 435 105M42 280 250 250 452 310M112 80l138 170 125 247M250 24v452" /><path d="M84 184 250 250l165-68M78 405l172-155 170 90" /></g><g fill="currentColor" className="text-accent"><circle cx="250" cy="250" r="7" /><circle cx="60" cy="390" r="4" /><circle cx="435" cy="105" r="4" /><circle cx="42" cy="280" r="4" /><circle cx="452" cy="310" r="4" /><circle cx="112" cy="80" r="4" /></g><circle cx="250" cy="250" r="108" fill="none" stroke="currentColor" strokeDasharray="3 9" strokeWidth="1.5" className="text-accent/50" /></svg>
          <div className="absolute right-0 top-[20%] rounded-lg border border-border bg-card/90 p-3 shadow-xl backdrop-blur"><div className="mb-2 flex items-center gap-2 font-mono text-[10px] text-muted-foreground"><Radio className="size-3 text-accent" /> SYSTEM ONLINE</div><div className="flex gap-1"><span className="h-1.5 w-14 rounded-full bg-accent" /><span className="h-1.5 w-5 rounded-full bg-primary/20" /></div></div>
          <div className="absolute bottom-[12%] left-[2%] rounded-lg bg-primary p-4 text-primary-foreground shadow-2xl"><div className="font-mono text-[10px] tracking-wider text-primary-foreground/60">CORE NODE / 01</div><div className="mt-1 flex items-center gap-2 text-sm font-bold"><CircleDot className="size-4 text-accent" /> اتصال پایدار</div></div>
        </div>
      </section>

      <section id="about" className="border-y border-border bg-secondary/40"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-20"><div><span className="font-mono text-xs text-accent">// WHY MITECH</span><h2 className="mt-4 text-3xl font-black text-primary sm:text-4xl">فناوری، وقتی معنا دارد<br />که <span className="text-accent">تغییر</span> بسازد.</h2></div><div className="flex items-end"><p className="max-w-xl text-lg leading-9 text-muted-foreground">ما فقط تکنولوژی نمی‌سازیم؛ مسئله‌های پیچیده را به راه‌حل‌های ساده، قابل اتکا و ماندگار تبدیل می‌کنیم. از اولین خط کد تا آخرین اتصال، با نگاه مهندسی و ذهنیت انسانی.</p></div></div></section>

      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="mb-12 flex flex-wrap items-end justify-between gap-5"><div><span className="font-mono text-xs text-accent">// WHAT WE DO</span><h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">توانمندی‌های ما</h2></div><p className="max-w-xs text-sm leading-7 text-muted-foreground">از ساختن یک محصول تا شکل دادن به یک اکوسیستم.</p></div><div className="grid gap-4 md:grid-cols-3">{capabilities.map(({ icon: Icon, title, text }, index) => <article key={title} className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl"><div className="mb-14 flex items-start justify-between"><div className="rounded-xl bg-primary p-3 text-accent"><Icon className="size-6" /></div><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div><h3 className="text-xl font-bold text-primary">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p><ArrowUpLeft className="mt-6 size-5 text-accent opacity-0 transition group-hover:opacity-100" /></article>)}</div></section>

      <section id="branches" className="bg-primary text-primary-foreground"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="mb-12 flex items-end justify-between"><div><span className="font-mono text-xs text-accent">// OUR FRONTIERS</span><h2 className="mt-3 text-3xl font-black sm:text-4xl">مرزهای بعدی</h2></div><Zap className="hidden size-8 text-accent sm:block" /></div><div className="grid gap-8 md:grid-cols-3">{branches.map(({ icon: Icon, title, text, tag }) => <article key={title} className="border-t border-primary-foreground/20 pt-6"><div className="flex items-center justify-between"><Icon className="size-7 text-accent" /><span className="font-mono text-[10px] tracking-wider text-primary-foreground/50">{tag}</span></div><h3 className="mt-12 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-primary-foreground/60">{text}</p><Link href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent">بیشتر بدانید <ChevronLeft className="size-4" /></Link></article>)}</div></div></section>

      <section id="contact" className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-28"><div><span className="font-mono text-xs text-accent">// LET&apos;S CONNECT</span><h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-primary sm:text-5xl">یک ایده دارید؟<br />بیایید <span className="text-accent">بسازیمش.</span></h2></div><Link href="mailto:hello@mitech.ir" className="inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition hover:bg-transparent hover:text-primary">hello@mitech.ir <ArrowLeft className="size-4" /></Link></section>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10"><span className="font-mono font-bold text-primary">MITECH<span className="text-accent">.</span></span><span>ساخته شده برای آینده، همین امروز.</span><span className="flex items-center gap-2"><ShieldCheck className="size-3" /> Tehran / Iran</span></div></footer>
    </main>
  )
}

export function MitechMenuIcon() { return <X className="size-5" /> }
export function MitechFactoryIcon() { return <Factory className="size-5" /> }
export function MitechCheckIcon() { return <Check className="size-5" /> }
export function MitechMenuIconAlt() { return <Menu className="size-5" /> }
export function MitechLayersIcon() { return <Layers className="size-5" /> }
