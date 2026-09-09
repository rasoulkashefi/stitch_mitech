'use client';

import React, { useEffect, useState } from 'react';
import { AlignRight } from 'lucide-react';
import { TocHeading } from '@/sanity/types';

export default function TableOfContents({ headings }: { headings: TocHeading[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0% -60% 0%',
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
      history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur-sm shadow-xs">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 mb-4 pb-2 border-b border-slate-100">
        <AlignRight className="h-4 w-4 text-emerald-600" />
        <span>فهرست محتوای مقاله</span>
      </div>

      <nav className="space-y-1">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`block text-xs sm:text-sm py-1.5 transition-colors ${
                heading.level === 3 ? 'pr-4 text-xs' : 'pr-1 font-medium'
              } ${
                isActive
                  ? 'text-emerald-700 font-bold border-r-2 border-emerald-500'
                  : 'text-slate-500 hover:text-slate-900 border-r-2 border-transparent'
              }`}
            >
              <span className="line-clamp-1">{heading.text}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
