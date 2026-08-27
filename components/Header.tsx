"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowLeft } from 'lucide-react';

const navLinks = [
  { label: 'محصولات', href: '#products' },
  { label: 'فناوری', href: '#technology' },
  { label: 'تجربه کاربران', href: '#experience' },
  { label: 'سازمانی', href: '#enterprise' },
  { label: 'درباره ما', href: '#about' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200'
            : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/70'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <Link href="#home" className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="فناوری هوشمند میکائیل"
              width={140}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 text-sm text-slate-500 md:flex">
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href} className="transition hover:text-slate-900">
                {label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-blue-900 px-5 py-3 text-sm font-bold text-white md:flex hover:bg-blue-800 transition-colors"
            >
              درخواست مشاوره
              <ArrowLeft size={16} />
            </a>
            <button
              className="rounded-lg p-2 text-slate-800 md:hidden hover:bg-slate-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="منو"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav dir="rtl" className="flex flex-col gap-5 border-t border-slate-200 bg-white px-6 py-6 text-sm md:hidden font-[Vazirmatn,sans-serif]">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-700 hover:text-blue-900 font-medium"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-blue-900 px-5 py-3 text-sm font-bold text-white"
            >
              درخواست مشاوره
              <ArrowLeft size={16} />
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
