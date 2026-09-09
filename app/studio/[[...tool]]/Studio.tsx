'use client';

import React, { useEffect, useSyncExternalStore } from 'react';
import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';

const emptySubscribe = () => () => {};

export function Studio() {
  // Idiomatic React 18/19 client-side mount detection without setState cascading renders
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Ensure the document root switches to LTR while within the Studio view
  useEffect(() => {
    const prevDir = document.documentElement.getAttribute('dir');
    const prevLang = document.documentElement.getAttribute('lang');

    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');

    return () => {
      if (prevDir) {
        document.documentElement.setAttribute('dir', prevDir);
      } else {
        document.documentElement.removeAttribute('dir');
      }
      if (prevLang) {
        document.documentElement.setAttribute('lang', prevLang);
      } else {
        document.documentElement.removeAttribute('lang');
      }
    };
  }, []);

  return (
    <div
      dir="ltr"
      className="sanity-studio-wrapper fixed inset-0 z-50 h-screen w-screen overflow-hidden bg-white text-left"
      style={{ direction: 'ltr', textAlign: 'left' }}
      suppressHydrationWarning
    >
      <style>{`
        /* Sanity Studio UI LTR Reset */
        .sanity-studio-wrapper {
          direction: ltr !important;
          text-align: left !important;
        }

        /* Content Inputs: Persian & RTL-friendly */
        .sanity-studio-wrapper input[type="text"]:not([type="search"]):not([name*="search" i]):not([id*="slug" i]):not([name*="slug" i]):not([placeholder*="Search" i]):not([aria-label*="Search" i]),
        .sanity-studio-wrapper textarea,
        .sanity-studio-wrapper [contenteditable="true"],
        .sanity-studio-wrapper [data-slate-editor="true"],
        .sanity-studio-wrapper [data-ui="TextInput__input"]:not([name*="search" i]):not([id*="slug" i]):not([name*="slug" i]):not([placeholder*="Search" i]):not([aria-label*="Search" i]),
        .sanity-studio-wrapper [data-ui="TextArea__input"],
        [data-ui="Dialog"] textarea,
        [data-ui="Dialog"] [contenteditable="true"] {
          direction: rtl !important;
          text-align: right !important;
          font-family: inherit;
        }

        /* Keep technical inputs (slug, search, URL) strictly LTR */
        .sanity-studio-wrapper input[placeholder*="Search" i],
        .sanity-studio-wrapper input[aria-label*="Search" i],
        .sanity-studio-wrapper input[name*="search" i],
        .sanity-studio-wrapper input[id*="slug" i],
        .sanity-studio-wrapper input[name*="slug" i],
        .sanity-studio-wrapper [data-ui="TextInput__input"][id*="slug"],
        .sanity-studio-wrapper [data-ui="TextInput__input"][name*="slug"],
        .sanity-studio-wrapper input[type="url"],
        .sanity-studio-wrapper input[name*="url" i] {
          direction: ltr !important;
          text-align: left !important;
        }

        /* PortableText editor blocks alignment */
        .sanity-studio-wrapper [contenteditable="true"] p,
        .sanity-studio-wrapper [contenteditable="true"] h1,
        .sanity-studio-wrapper [contenteditable="true"] h2,
        .sanity-studio-wrapper [contenteditable="true"] h3,
        .sanity-studio-wrapper [contenteditable="true"] h4,
        .sanity-studio-wrapper [contenteditable="true"] blockquote,
        .sanity-studio-wrapper [contenteditable="true"] ul,
        .sanity-studio-wrapper [contenteditable="true"] ol,
        .sanity-studio-wrapper [data-slate-node="element"] {
          direction: rtl !important;
          text-align: right !important;
        }
      `}</style>
      {mounted ? (
        <NextStudio config={config} />
      ) : (
        <div className="flex h-screen w-screen items-center justify-center bg-slate-50 text-slate-500 font-sans">
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
            <span className="text-sm font-medium">در حال بارگذاری استودیو سانتی...</span>
          </div>
        </div>
      )}
    </div>
  );
}
