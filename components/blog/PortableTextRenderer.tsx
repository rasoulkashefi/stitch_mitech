'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import {
  Lightbulb,
  Info,
  AlertTriangle,
  CheckCircle2,
  AlertOctagon,
  Copy,
  Check,
  ChevronDown,
  HelpCircle,
  Sparkles,
  Play,
  TrendingUp,
  BookmarkCheck,
} from 'lucide-react';
import { urlForImage } from '@/sanity/lib/image';
import { slugifyHeading } from '@/sanity/types';

function extractText(children: any): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) {
    return children.map(extractText).join('');
  }
  if (children && typeof children === 'object' && 'props' in children) {
    return extractText(children.props.children);
  }
  return '';
}

// 1. Callout Component
function CalloutComponent({ value }: { value: any }) {
  if (!value) return null;
  const { type = 'info', title, text } = value;

  const toneStyles: Record<
    string,
    {
      bg: string;
      border: string;
      text: string;
      titleColor: string;
      icon: React.ReactNode;
      label: string;
    }
  > = {
    tip: {
      bg: 'bg-emerald-50/70',
      border: 'border-emerald-300',
      text: 'text-emerald-950',
      titleColor: 'text-emerald-900',
      icon: <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />,
      label: 'نکته کاربردی',
    },
    info: {
      bg: 'bg-sky-50/70',
      border: 'border-sky-300',
      text: 'text-sky-950',
      titleColor: 'text-sky-900',
      icon: <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />,
      label: 'اطلاعات تکمیلی',
    },
    warning: {
      bg: 'bg-amber-50/80',
      border: 'border-amber-300',
      text: 'text-amber-950',
      titleColor: 'text-amber-900',
      icon: <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />,
      label: 'توجه و هشدار',
    },
    success: {
      bg: 'bg-teal-50/70',
      border: 'border-teal-300',
      text: 'text-teal-950',
      titleColor: 'text-teal-900',
      icon: <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />,
      label: 'دستاورد و نتیجه',
    },
    critical: {
      bg: 'bg-rose-50/80',
      border: 'border-rose-300',
      text: 'text-rose-950',
      titleColor: 'text-rose-900',
      icon: <AlertOctagon className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />,
      label: 'اخطار مهم',
    },
  };

  const current = toneStyles[type] || toneStyles.info;

  return (
    <div
      className={`my-8 p-5 sm:p-6 rounded-2xl border-r-4 ${current.border} ${current.bg} ${current.text} shadow-xs transition-all`}
    >
      <div className="flex items-start gap-3.5">
        {current.icon}
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className={`text-base sm:text-lg font-bold ${current.titleColor}`}>
              {title || current.label}
            </h4>
          </div>
          <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal opacity-90">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

// 2. Code Block Component with Copy
function CodeBlockComponent({ value }: { value: any }) {
  const [copied, setCopied] = useState(false);
  if (!value?.code) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="my-8 rounded-2xl overflow-hidden bg-[#0B1120] border border-slate-800 shadow-lg text-slate-200">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80 text-xs font-mono">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-slate-400 font-semibold px-2 py-0.5 rounded bg-slate-800/80 uppercase text-[10px] tracking-wider">
            {value.language || 'code'}
          </span>
          {value.filename && (
            <span className="text-slate-300 font-medium text-xs truncate max-w-[200px]">
              {value.filename}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          type="button"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
          title="کپی کردن کد"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">کپی شد!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>کپی</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body */}
      <pre
        dir="ltr"
        className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-emerald-300 selection:bg-emerald-800 selection:text-white"
      >
        <code>{value.code}</code>
      </pre>
    </div>
  );
}

// Helper function to convert English digits and symbols to Persian
function toPersianDigits(str: string | number | undefined | null): string {
  if (str === null || str === undefined) return '';
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(str)
    .replace(/[0-9]/g, (w) => persianDigits[parseInt(w, 10)])
    .replace(/%/g, '٪');
}

// 3. Stat Card Component
function StatCardComponent({ value }: { value: any }) {
  if (!value) return null;
  const { value: statValue, label, description } = value;
  const formattedValue = toPersianDigits(statValue);

  return (
    <div
      className="my-8 relative overflow-hidden rounded-2xl bg-linear-to-br from-slate-900 via-slate-900/95 to-[#0B132B] p-6 sm:p-8 text-white border border-slate-800/80 shadow-lg text-right"
      dir="rtl"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative flex flex-col md:flex-row md:items-center justify-start gap-6 sm:gap-8">
        {/* Metric Value Block - Placed on the RIGHT side in RTL */}
        <div className="shrink-0 flex flex-col items-start justify-center border-b md:border-b-0 md:border-l border-slate-800/90 pb-4 md:pb-0 md:pl-8 min-w-[180px]">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
            <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>شاخص کلیدی</span>
          </div>
          <div
            className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-l from-emerald-400 via-teal-300 to-emerald-200 tracking-normal text-right font-vazirmatn"
            dir="rtl"
          >
            {formattedValue}
          </div>
        </div>

        {/* Label & Description */}
        <div className="space-y-1.5 text-right flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
            {label}
          </h3>
          {description && (
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// 4. FAQ Accordion Component
function FaqAccordionComponent({ value }: { value: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  if (!value?.items || !Array.isArray(value.items)) return null;

  return (
    <div className="my-10 rounded-2xl border border-slate-200 bg-slate-50/50 p-5 sm:p-6 shadow-xs">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200/80">
        <HelpCircle className="w-5 h-5 text-emerald-600" />
        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
          {value.title || 'پرسش‌های متداول'}
        </h3>
      </div>

      <div className="space-y-3">
        {value.items.map((item: any, idx: number) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200/90 bg-white overflow-hidden transition-all shadow-2xs"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between gap-3 p-4 text-right hover:bg-slate-50/80 transition-colors cursor-pointer"
              >
                <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-emerald-600' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 whitespace-pre-line">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 5. Key Takeaways Component
function KeyTakeawaysComponent({ value }: { value: any }) {
  if (!value?.points || !Array.isArray(value.points)) return null;

  return (
    <div className="my-8 rounded-2xl border border-emerald-200 bg-linear-to-br from-emerald-50/80 to-teal-50/40 p-6 sm:p-7 shadow-xs">
      <div className="flex items-center gap-2.5 mb-4 text-emerald-900">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-xs">
          <BookmarkCheck className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-bold">
            {value.heading || 'نکات کلیدی در یک نگاه'}
          </h4>
          <span className="text-[11px] text-emerald-700 font-medium">
            جمع‌بندی تحلیلی برای مطالعه سریع و خلاصه مدیریتی
          </span>
        </div>
      </div>

      <ul className="space-y-2.5 text-slate-800 text-sm sm:text-base leading-relaxed pr-2">
        {value.points.map((point: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2.5 shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 6. Video Embed Component
function VideoEmbedComponent({ value }: { value: any }) {
  if (!value?.url) return null;
  const { url, caption, aspectRatio = '16:9' } = value;

  const aspectClass =
    aspectRatio === '4:3'
      ? 'aspect-[4/3]'
      : aspectRatio === '1:1'
        ? 'aspect-square'
        : aspectRatio === '9:16'
          ? 'aspect-[9/16] max-w-sm mx-auto'
          : 'aspect-video';

  // Aparat Embed URL converter
  let embedUrl = url;
  if (url.includes('aparat.com/v/')) {
    const videoId = url.split('/v/')[1]?.split('?')[0];
    if (videoId) {
      embedUrl = `https://www.aparat.com/video/video/embed/videohash/${videoId}/vt/frame`;
    }
  } else if (url.includes('youtube.com/watch?v=')) {
    const videoId = url.split('watch?v=')[1]?.split('&')[0];
    if (videoId) {
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
  } else if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0];
    if (videoId) {
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
  }

  const isDirectVideo = url.endsWith('.mp4') || url.endsWith('.webm');

  return (
    <figure className="my-10 overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
      <div className={`relative w-full ${aspectClass}`}>
        {isDirectVideo ? (
          <video
            src={url}
            controls
            className="w-full h-full object-cover"
            preload="metadata"
          />
        ) : (
          <iframe
            src={embedUrl}
            title={caption || 'ویدیو ضمیمه مقاله میکائیل'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        )}
      </div>
      {caption && (
        <figcaption className="py-2.5 px-4 text-center text-xs sm:text-sm text-slate-400 bg-slate-900/90 font-medium">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// 7. Table Component
function TableComponent({ value }: { value: any }) {
  if (!value || !value.rows || !Array.isArray(value.rows) || value.rows.length === 0) {
    return null;
  }

  const { rows } = value;
  const headerRow = rows[0];
  const bodyRows = rows.slice(1);

  return (
    <div className="my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
      <div className="overflow-x-auto w-full">
        <table className="w-full text-right border-collapse text-sm sm:text-base">
          {headerRow && headerRow.cells && (
            <thead>
              <tr className="bg-slate-900 text-white border-b border-slate-800">
                {headerRow.cells.map((cell: string, idx: number) => (
                  <th
                    key={idx}
                    className="py-3.5 px-5 font-bold text-sm sm:text-base text-slate-100 whitespace-nowrap"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          {bodyRows.length > 0 && (
            <tbody className="divide-y divide-slate-100">
              {bodyRows.map((row: any, rIdx: number) => (
                <tr
                  key={row._key || rIdx}
                  className="transition-colors even:bg-slate-50/70 hover:bg-emerald-50/40"
                >
                  {row.cells?.map((cell: string, cIdx: number) => (
                    <td
                      key={cIdx}
                      className="py-3.5 px-5 text-slate-700 leading-relaxed font-normal whitespace-normal min-w-[130px]"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value) return null;
      const imageUrl = urlForImage(value)?.width(1400)?.url();
      if (!imageUrl) return null;

      return (
        <figure className="my-10 overflow-hidden rounded-2xl bg-slate-100 shadow-xs">
          <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full">
            <Image
              src={imageUrl}
              alt={value.alt || 'تصویر مقاله میکائیل'}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 850px"
            />
          </div>
          {(value.caption || value.alt) && (
            <figcaption className="py-3 px-4 text-center text-xs sm:text-sm text-slate-500 font-medium">
              {value.caption || value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
    callout: CalloutComponent,
    codeBlock: CodeBlockComponent,
    statCard: StatCardComponent,
    faqAccordion: FaqAccordionComponent,
    keyTakeaways: KeyTakeawaysComponent,
    videoEmbed: VideoEmbedComponent,
    table: TableComponent,
  },
  block: {
    h1: ({ children }) => {
      const id = slugifyHeading(extractText(children));
      return (
        <h1
          id={id}
          className="scroll-mt-28 mt-14 mb-6 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.3]"
        >
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = slugifyHeading(extractText(children));
      return (
        <h2
          id={id}
          className="scroll-mt-28 mt-14 mb-6 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-[1.35] flex items-center gap-3 group"
        >
          <span className="w-1.5 h-7 rounded-full bg-emerald-600 shrink-0 inline-block transition-transform group-hover:scale-y-110" />
          <span>{children}</span>
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = slugifyHeading(extractText(children));
      return (
        <h3
          id={id}
          className="scroll-mt-28 mt-10 mb-4 text-xl font-semibold text-slate-900 tracking-tight leading-[1.4] flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 inline-block" />
          <span>{children}</span>
        </h3>
      );
    },
    h4: ({ children }) => (
      <h4 className="mt-7 mb-3 text-lg sm:text-xl font-bold text-slate-900 leading-snug">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 pr-6 pl-4 py-2 border-r-2 border-emerald-500 text-slate-800 text-lg sm:text-xl font-medium leading-[2.0] italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-7 text-slate-700 leading-[2.0] text-base sm:text-lg font-normal">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-7 mr-5 list-disc space-y-3 text-slate-700 text-base sm:text-lg leading-[1.9] pr-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-7 mr-5 list-decimal space-y-3 text-slate-700 text-base sm:text-lg leading-[1.9] pr-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    link: ({ value, children }) => {
      const isExternal = (value?.href || '').startsWith('http');
      const target = value?.blank || isExternal ? '_blank' : undefined;
      const relParts = [];
      if (target === '_blank') relParts.push('noopener', 'noreferrer');
      if (value?.nofollow) relParts.push('nofollow');
      const rel = relParts.length > 0 ? relParts.join(' ') : undefined;

      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-emerald-600 hover:text-emerald-700 underline underline-offset-4 decoration-emerald-300 font-semibold transition-colors"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-bold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-slate-800">{children}</em>,
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded-md bg-slate-100 text-emerald-800 font-mono text-sm border border-slate-200/80">
        {children}
      </code>
    ),
    highlight: ({ children }) => (
      <mark className="bg-amber-100/90 text-slate-900 px-1.5 py-0.5 rounded-md font-medium">
        {children}
      </mark>
    ),
  },
};

export default function PortableTextRenderer({ value }: { value: any[] }) {
  if (!value || !Array.isArray(value)) return null;
  return (
    <div className="article-content max-w-none text-slate-700">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  );
}
