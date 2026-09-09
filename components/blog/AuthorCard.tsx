import React from 'react';
import { User, Cpu } from 'lucide-react';

interface AuthorCardProps {
  author?: string;
  variant?: 'sidebar' | 'footer';
}

export default function AuthorCard({ author = 'تیم مهندسی میکائیل', variant = 'sidebar' }: AuthorCardProps) {
  const isSidebar = variant === 'sidebar';

  if (isSidebar) {
    return (
      <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur-sm shadow-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-emerald-400 font-bold text-sm">
            <Cpu className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">{author}</div>
            <div className="text-xs text-slate-500 font-medium">پژوهش و توسعه فناوری خودران</div>
          </div>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          تولید دانش و مستندسازی نوآوری‌های هوش مصنوعی و رباتیک حمل‌ونقل در شرکت دانش‌بنیان میکائیل.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-emerald-400 shadow-sm">
        <Cpu className="h-7 w-7" />
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-base font-bold text-slate-900">{author}</span>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-full px-2.5 py-0.5">
            تحریریه تخصصی میکائیل
          </span>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          متخصصان و پژوهشگران شرکت دانش‌بنیان فناوری هوشمند میکائیل؛ متعهد به توسعه راهکارهای پیشرفته ناوبری مستقل، اتوماسیون ناوگان‌های توانبخشی و حمل‌ونقل درون‌ساختمانی خودران.
        </p>
      </div>
    </div>
  );
}
