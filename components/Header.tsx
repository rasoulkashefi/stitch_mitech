"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight"
          >
            میتک
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          <Link
            href="#"
            className="text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 font-bold pb-1 text-sm transition-all"
          >
            راهکارها
          </Link>
          <Link
            href="#"
            className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors"
          >
            محصولات
          </Link>
          <Link
            href="#"
            className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors"
          >
            تکنولوژی
          </Link>
          <Link
            href="#"
            className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors"
          >
            درباره ما
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center bg-indigo-600 text-white text-sm font-medium px-6 py-2.5 rounded-md hover:bg-indigo-700 transition-colors shadow-sm">
            درخواست دمو
          </button>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center text-slate-800 dark:text-slate-200 p-2 rounded-md hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 flex flex-col gap-4 shadow-lg">
          <Link
            href="#"
            className="text-indigo-600 dark:text-indigo-400 font-bold text-base py-2"
          >
            راهکارها
          </Link>
          <Link
            href="#"
            className="text-slate-600 dark:text-slate-300 font-medium text-base py-2"
          >
            محصولات
          </Link>
          <Link
            href="#"
            className="text-slate-600 dark:text-slate-300 font-medium text-base py-2"
          >
            تکنولوژی
          </Link>
          <Link
            href="#"
            className="text-slate-600 dark:text-slate-300 font-medium text-base py-2"
          >
            درباره ما
          </Link>
          <button className="w-full mt-2 items-center justify-center bg-indigo-600 text-white text-base font-medium px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
            درخواست دمو
          </button>
        </div>
      )}
    </header>
  );
}
