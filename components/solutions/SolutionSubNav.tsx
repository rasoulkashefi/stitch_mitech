'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronRight,
  ShoppingBag,
  Plane,
  HeartPulse,
  Landmark,
  Sparkles,
  Layers,
} from 'lucide-react';
import { SolutionSlug, solutionsSubPagesData } from './solutions-data';

interface SolutionSubNavProps {
  activeSlug?: SolutionSlug;
}

const navTabs = [
  {
    slug: '' as const,
    label: 'مرکز راهکارها (Hub)',
    href: '/solutions',
    icon: Sparkles,
  },
  {
    slug: 'malls' as SolutionSlug,
    label: 'مراکز تجاری و مال‌ها',
    href: '/solutions/malls',
    icon: ShoppingBag,
  },
  {
    slug: 'airports' as SolutionSlug,
    label: 'فرودگاه‌ها و پایانه‌ها',
    href: '/solutions/airports',
    icon: Plane,
  },
  {
    slug: 'healthcare' as SolutionSlug,
    label: 'بیمارستان‌ها و درمانی',
    href: '/solutions/healthcare',
    icon: HeartPulse,
  },
  {
    slug: 'tourism' as SolutionSlug,
    label: 'گردشگری و موزه‌ها',
    href: '/solutions/tourism',
    icon: Landmark,
  },
];

export default function SolutionSubNav({ activeSlug }: SolutionSubNavProps) {
  const pathname = usePathname();

  return (
    <div className="w-full border-b border-slate-200/50 bg-white">
      
      {/* ── Top Breadcrumb Bar ── */}
      <div className="border-b border-slate-100 bg-slate-50 px-5 py-2.5 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              صفحه اصلی
            </Link>
            <ChevronRight size={13} className="rotate-180 text-slate-400" />
            <Link
              href="/solutions"
              className={!activeSlug ? 'font-bold text-blue-950' : 'hover:text-emerald-600 transition-colors'}
            >
              راهکارها
            </Link>
            {activeSlug && (
              <>
                <ChevronRight size={13} className="rotate-180 text-slate-400" />
                <span className="font-bold text-blue-950">
                  {solutionsSubPagesData[activeSlug]?.navTitle || activeSlug}
                </span>
              </>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>MITECH ENTERPRISE AMaaS</span>
          </div>
        </div>
      </div>

      {/* ── Sub Navigation Tabs ── */}
      <div className="mx-auto max-w-7xl px-4 py-2.5 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <nav
            aria-label="Solutions sub-navigation"
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
                      : 'text-slate-600 hover:bg-slate-100 hover:text-blue-950'
                  }`}
                >
                  <Icon size={15} className={isActive ? 'text-emerald-400' : 'text-slate-500'} />
                  <span>{tab.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact/request-demo"
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800 transition-all duration-300 shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              درخواست پایلوت سازمانی
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
