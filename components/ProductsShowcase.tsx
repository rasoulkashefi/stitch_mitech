"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpLeft } from 'lucide-react';

const products = [
  {
    name: 'MOBI ONE',
    title: 'ویلچر هوشمند همراه شما',
    image: '/images/products/mobi-one.jpg',
    category: 'شخصی',
    copy: 'حرکت روان و مستقل، برای هر روز زندگی با ناوبری هوشمند.',
    href: '/fleet/autonomous-wheelchairs',
  },
  {
    name: 'MOBI PRO',
    title: 'قدرت بیشتر، آزادی بیشتر',
    image: '/images/products/mobi-pro.jpg',
    category: 'تجاری',
    copy: 'تجربه‌ای تازه از کنترل دقیق، پیمایش طولانی و ایمنی کامل.',
    href: '/fleet/autonomous-wheelchairs',
  },
  {
    name: 'FLEET AMR',
    title: 'ناوگان خدمات خودران',
    image: '/images/products/fleet.jpg',
    category: 'سازمانی',
    copy: 'جابه‌جایی هوشمند بار و مسافر در فضاهای پرتردد تجاری و فرودگاهی.',
    href: '/fleet/following-amrs',
  },
  {
    name: 'SMART REHAB',
    title: 'کالسکه‌ها و مبلمان هوشمند',
    image: '/images/products/rehab.jpg',
    category: 'شخصی',
    copy: 'سیستم‌های کنترلی دقیق و ارگونومیک برای توانبخشی و آسایش خانواده.',
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
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        {/* Title */}
        <div className="text-right">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
            محصولات و تجهیزات هوشمند
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 lg:text-5xl leading-tight tracking-tight">
            برای هر مسیر،
            <br />
            <span className="text-slate-400">یک راهکار مهندسی‌شده.</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 ${
                filter === item
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
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
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-xs hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl transition-all duration-300"
          >
            {/* Product Image */}
            <div className="aspect-[1.08] overflow-hidden bg-slate-50">
              <img
                src={product.image}
                alt={product.title}
                className="size-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Card Body */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <p className="mb-2 text-xs font-bold tracking-widest text-emerald-600 uppercase">
                  {product.name}
                </p>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {product.copy}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {product.category}
                </span>
                <span className="grid size-9 place-items-center rounded-full bg-slate-50 border border-slate-200 text-slate-700 transition-all duration-300 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
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
