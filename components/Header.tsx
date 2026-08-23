"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          ? 'bg-white shadow-sm border-b border-slate-100 py-0'
          : 'bg-black/10 backdrop-blur-sm border-b border-white/5 py-0'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center">
          <Link
            href="/"
            className={`text-2xl md:text-3xl font-extrabold tracking-tight transition-colors ${
              isScrolled ? 'text-blue-700' : 'text-white'
            }`}
          >
            ام. آی. تک.
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          <Link
            href="#"
            className={`font-bold text-sm transition-colors ${
              isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
            }`}
          >
            محصولات
          </Link>
          <Link
            href="#"
            className={`font-medium text-sm transition-colors ${
              isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'
            }`}
          >
            خدمات خودران
          </Link>
          <Link
            href="#"
            className={`font-medium text-sm transition-colors ${
              isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'
            }`}
          >
            قطعات و کنترلرها
          </Link>
          <Link
            href="#"
            className={`font-medium text-sm transition-colors ${
              isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'
            }`}
          >
            درباره ما
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            className={`hidden md:flex items-center justify-center text-sm font-bold px-6 py-2.5 rounded-md transition-colors shadow-sm ${
              isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md'
            }`}
          >
            ارتباط با ما
          </button>
          
          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden flex items-center justify-center p-2 rounded-md transition-colors ${
              isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/20'
            }`}
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
        <div className="md:hidden absolute top-full mt-2 inset-x-4 bg-white rounded-xl border border-slate-200 p-4 flex flex-col gap-4 shadow-xl">
          <Link href="#" className="text-slate-800 font-bold text-base py-2">
            محصولات
          </Link>
          <Link href="#" className="text-slate-700 font-medium text-base py-2">
            خدمات خودران
          </Link>
          <Link href="#" className="text-slate-700 font-medium text-base py-2">
            قطعات و کنترلرها
          </Link>
          <Link href="#" className="text-slate-700 font-medium text-base py-2">
            درباره ما
          </Link>
          <button className="w-full mt-2 items-center justify-center bg-blue-600 text-white text-base font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            ارتباط با ما
          </button>
        </div>
      )}
    </header>
  );
}
