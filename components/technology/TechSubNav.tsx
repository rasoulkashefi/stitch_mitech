'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronRight,
  Radar,
  Gauge,
  Boxes,
  Sparkles,
  Layers,
  CircleDot,
} from 'lucide-react';
import { TechSlug, techSubPagesData } from './tech-data';

interface TechSubNavProps {
  activeSlug?: TechSlug;
}

const navTabs = [
  {
    slug: '' as const,
    label: 'مرکز فناوری و معماری',
    href: '/technology',
    icon: Sparkles,
  },
  {
    slug: 'gps-independent-navigation' as TechSlug,
    label: 'ناوبری مستقل و SLAM',
    href: '/technology/gps-independent-navigation',
    icon: Radar,
  },
  {
    slug: 'drives-and-positioning' as TechSlug,
    label: 'درایو و کنترل حرکت',
    href: '/technology/drives-and-positioning',
    icon: Gauge,
  },
  {
    slug: 'digital-twin-platform' as TechSlug,
    label: 'دوقلوی دیجیتال و ناوگان',
    href: '/technology/digital-twin-platform',
    icon: Boxes,
  },
];

export default function TechSubNav({ activeSlug }: TechSubNavProps) {
  const pathname = usePathname();

  return (
    <div className="w-full border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-0 z-30 shadow-xs">
      
      {/* ── Top Breadcrumb Bar ── */}
      <div className="border-b border-slate-100 bg-slate-50/60 px-5 py-2.5 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              صفحه اصلی
            </Link>
            <ChevronRight size={13} className="rotate-180 text-slate-400" />
            <Link
              href="/technology"
              className={!activeSlug ? 'font-bold text-slate-900' : 'hover:text-emerald-600 transition-colors'}
            >
              فناوری
            </Link>
            {activeSlug && (
              <>
                <ChevronRight size={13} className="rotate-180 text-slate-400" />
                <span className="font-bold text-slate-900">
                  {techSubPagesData[activeSlug]?.navTitle || activeSlug}
                </span>
              </>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>MITECH AUTONOMY PLATFORM</span>
          </div>
        </div>
      </div>

      {/* ── Sub Navigation Tabs ── */}
      <div className="mx-auto max-w-7xl px-4 py-2.5 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <nav
            aria-label="Technology sub-navigation"
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1"
          >
            {navTabs.map((tab) => {
              const isActive = (!tab.slug && !activeSlug) || tab.slug === activeSlug;
              const Icon = tab.icon;

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon
                    size={15}
                    className={isActive ? 'text-emerald-400' : 'text-slate-400'}
                  />
                  <span>{tab.label}</span>
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden lg:inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50/80 px-3.5 py-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition-colors"
          >
            <CircleDot size={12} className="text-emerald-600" />
            درخواست مشاوره R&D
          </Link>
        </div>
      </div>
    </div>
  );
}
