"use client";

import React, { useState } from 'react';
import { ArrowUpLeft } from 'lucide-react';

const products = [
  {
    name: 'MOBI ONE',
    title: 'ویلچر هوشمند همراه شما',
    image: '/images/product-wheelchair.png',
    category: 'شخصی',
    copy: 'حرکت روان و مستقل، برای هر روز زندگی.',
  },
  {
    name: 'MOBI PRO',
    title: 'قدرت بیشتر، آزادی بیشتر',
    image: '/images/hero-mobility.png',
    category: 'حرفه‌ای',
    copy: 'تجربه‌ای تازه از کنترل و اطمینان.',
  },
  {
    name: 'FLEET',
    title: 'ناوگان خدمات خودران',
    image: '/images/fleet-service.png',
    category: 'سازمانی',
    copy: 'تجربه‌ای هوشمند برای فضاهای پرتردد.',
  },
];

const filters = ['همه', 'شخصی', 'حرفه‌ای', 'سازمانی'];

export default function ProductsShowcase() {
  const [filter, setFilter] = useState('همه');
  const visibleProducts =
    filter === 'همه' ? products : products.filter((p) => p.category === filter);

  return (
    <section id="products" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-sm font-bold text-emerald-600">راهکارهای mitech</p>
          <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            برای هر مسیر،
            <br />
            <span className="text-slate-500">یک راهکار بهتر.</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 rounded-full bg-slate-100 p-1">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${
                filter === item
                  ? 'bg-blue-900 text-white'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {visibleProducts.map((product, index) => (
          <article
            key={product.name}
            className={`group overflow-hidden rounded-2xl transition-shadow duration-300 hover:shadow-md ${
              index === 0
                ? 'bg-blue-900 text-white'
                : 'bg-slate-50'
            }`}
          >
            <div className="aspect-[1.15] overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="size-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="mb-2 text-xs font-bold tracking-[.2em] text-emerald-500">
                {product.name}
              </p>
              <h3 className="text-xl font-bold">{product.title}</h3>
              <p className="mt-3 text-sm leading-6 opacity-70">{product.copy}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs opacity-60">{product.category}</span>
                <span className="grid size-9 place-items-center rounded-full border border-current/20 hover:bg-current/5 transition-colors cursor-pointer">
                  <ArrowUpLeft size={17} />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
