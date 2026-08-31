'use client';

import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { fleetProducts, fleetCategories, ProductItem } from '@/lib/fleet-products';
import ProductVisual from '@/components/fleet/ProductVisual';

export default function ProductsShowcase() {
  const [filter, setFilter] = useState<string>(fleetCategories[0]);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const visibleProducts = useMemo(() => {
    if (filter === fleetCategories[0]) return fleetProducts;
    return fleetProducts.filter((product) => product.category === filter);
  }, [filter]);

  const getFilterCount = (filterName: string) => {
    if (filterName === fleetCategories[0]) return fleetProducts.length;
    return fleetProducts.filter((p) => p.category === filterName).length;
  };

  // Scroll in a specific direction ('next' moves to subsequent items, 'prev' moves back)
  const scroll = useCallback((direction: 'next' | 'prev') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // In RTL, "next" cards are positioned to the left (negative offset relative to start in RTL)
    const cardWidth = 370; // approx card width + gap
    const isNext = direction === 'next';

    // Calculate max scroll extent
    const maxScroll = container.scrollWidth - container.clientWidth;
    const currentScrollAbs = Math.abs(container.scrollLeft);

    if (isNext) {
      if (currentScrollAbs + 50 >= maxScroll) {
        // Wrap around to beginning smoothly
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    } else {
      if (currentScrollAbs <= 10) {
        // Wrap around to end
        container.scrollTo({ left: -maxScroll, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  }, []);

  // Automatic scrolling timer (Auto-play every 3.5s when not hovered)
  useEffect(() => {
    if (isPaused || visibleProducts.length <= 1) return;

    const timer = setInterval(() => {
      scroll('next');
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, visibleProducts.length, scroll]);

  // Reset scroll position when filter changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [filter]);

  return (
    <section
      id="products"
      className="bg-slate-50 py-24 border-t border-slate-100 font-[Vazirmatn,sans-serif]"
      dir="rtl"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-right">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              محصولات و تجهیزات هوشمند
            </p>
            <h2 className="text-3xl font-extrabold text-blue-950 lg:text-5xl leading-tight tracking-tight">
              برای هر مسیر،
              <br />
              <span className="text-slate-400">یک راهکار مهندسی‌شده.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-4">
            {/* Link to Full Fleet Page */}
            <Link
              href="/fleet"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              مشاهده تمام محصولات ناوگان
              <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
            </Link>

            {/* Navigation Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('prev')}
                aria-label="محصول قبلی"
                className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs hover:border-slate-300 hover:bg-slate-50 hover:text-emerald-600 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
              <button
                onClick={() => scroll('next')}
                aria-label="محصول بعدی"
                className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs hover:border-slate-300 hover:bg-slate-50 hover:text-emerald-600 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Filter Buttons ── */}
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="فیلتر محصولات ناوگان">
          {fleetCategories.map((item) => {
            const isSelected = filter === item;
            const count = getFilterCount(item);

            return (
              <button
                key={item}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setFilter(item)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{item}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                    isSelected
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Carousel Container with Auto-Scroll & Hidden Scrollbar ── */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
        >
          {/* Floating Left & Right Navigation Arrows for effortless clicking */}
          <button
            onClick={() => scroll('prev')}
            aria-label="محصول قبلی"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 hidden md:grid size-11 place-items-center rounded-full border border-slate-200/50 bg-white/95 text-slate-700 shadow-md backdrop-blur-sm hover:border-slate-300 hover:bg-white hover:text-emerald-600 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>

          <button
            onClick={() => scroll('next')}
            aria-label="محصول بعدی"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 hidden md:grid size-11 place-items-center rounded-full border border-slate-200/50 bg-white/95 text-slate-700 shadow-md backdrop-blur-sm hover:border-slate-300 hover:bg-white hover:text-emerald-600 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards Track (Single row, hidden scrollbar, snap enabled) */}
          <div
            ref={scrollContainerRef}
            className="no-scrollbar flex overflow-x-auto pb-6 pt-2 gap-6 snap-x snap-mandatory scroll-smooth -mx-5 px-5 lg:-mx-8 lg:px-8"
          >
            {visibleProducts.map((product, index) => (
              <Link
                key={product.id}
                href={product.href}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="product-card group flex w-[300px] sm:w-[340px] md:w-[360px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/50 bg-white p-4 shadow-xs hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Visual Graphic */}
                  <ProductVisual icon={product.icon} tone={product.tone} />

                  {/* Card Body */}
                  <div className="p-3 pt-5">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-xs font-bold tracking-widest text-emerald-600 uppercase">
                        {product.category}
                      </p>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {product.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-blue-950 group-hover:text-emerald-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="font-mono text-xs text-slate-400 mt-0.5">
                      {product.englishTitle}
                    </p>

                    <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-slate-500">
                      {product.description}
                    </p>

                    {/* Specs Chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
                      {product.specs.map((spec) => (
                        <span
                          key={spec}
                          className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2.5 py-1 text-xs text-slate-600"
                        >
                          <CheckCircle2 size={13} className="text-emerald-600" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 p-3 pt-4">
                  <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    مشاهده جزئیات و مشخصات فنی
                  </span>
                  <span className="grid size-9 place-items-center rounded-full bg-slate-50 border border-slate-200 text-slate-700 transition-all duration-300 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpLeft size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
