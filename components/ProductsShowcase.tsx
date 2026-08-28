"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpLeft } from 'lucide-react';

const products = [
  {
    name: 'MOBI ONE',
    title: 'ویلچر هوشمند همراه شما',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80',
    category: 'شخصی',
    copy: 'حرکت روان و مستقل، برای هر روز زندگی.',
    href: '/fleet/autonomous-wheelchairs',
  },
  {
    name: 'MOBI PRO',
    title: 'قدرت بیشتر، آزادی بیشتر',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=80',
    category: 'تجاری',
    copy: 'تجربه‌ای تازه از کنترل و اطمینان.',
    href: '/fleet/autonomous-wheelchairs',
  },
  {
    name: 'FLEET',
    title: 'ناوگان خدمات خودران',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80',
    category: 'سازمانی',
    copy: 'تجربه‌ای هوشمند برای فضاهای پرتردد.',
    href: '/fleet/following-amrs',
  },
  {
    name: 'REHAB',
    title: 'کالسکه‌ها و مبلمان هوشمند',
    image: 'https://images.unsplash.com/photo-1576765608866-5b51046452be?w=700&q=80',
    category: 'شخصی',
    copy: 'سیستم‌های کنترلی دقیق برای آسایش خانواده و مراکز.',
    href: '/fleet/smart-family-carts',
  },
];


const filters = ['همه', 'شخصی', 'تجاری', 'سازمانی'];

export default function ProductsShowcase() {
  const [filter, setFilter] = useState('همه');

  const visibleProducts =
    filter === 'همه' ? products : products.filter((p) => p.category === filter);

  return (
    <section id="products" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

      {/* Section Header */}
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

        {/* Title – first in DOM = right side in RTL */}
        <div className="text-right">
          <p className="mb-2 text-sm font-bold text-emerald-600">راهکارهای mitech</p>
          <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl leading-tight">
            برای هر مسیر،
            <br />
            <span className="text-slate-400">یک راهکار بهتر.</span>
          </h2>
        </div>

        {/* Filter Buttons – second in DOM = left side in RTL */}
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-colors duration-200 ${
                filter === item
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visibleProducts.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            {/* Product Image */}
            <div className="aspect-[1.05] overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="size-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Card Body */}
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <p className="mb-1.5 text-xs font-bold tracking-widest text-emerald-600 uppercase">
                  {product.name}
                </p>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">{product.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{product.copy}</p>
              </div>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                  {product.category}
                </span>
                <span className="grid size-9 place-items-center rounded-full border border-slate-200 text-slate-400 transition-colors duration-200 group-hover:border-blue-900 group-hover:bg-blue-900 group-hover:text-white">
                  <ArrowUpLeft size={16} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
