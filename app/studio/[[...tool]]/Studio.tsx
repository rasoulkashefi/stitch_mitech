'use client';

import React, { useEffect, useSyncExternalStore } from 'react';
import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';

// React 19 strictly validates DOM props. Sanity Studio's DocumentInspectorPanel passes `flexGrow`
// to an `<aside>` element via styled-components, which causes a non-fatal dev console error overlay in Next.js 16.
// We safely filter this specific benign styled-components DOM prop warning while in the Studio.
if (typeof window !== 'undefined') {
  const originalError = console.error;
  console.error = (...args: any[]) => {
    const msg = typeof args[0] === 'string' ? args[0] : '';
    if (
      msg.includes('React does not recognize the `flexGrow` prop on a DOM element') ||
      (msg.includes('React does not recognize the `') && msg.includes('prop on a DOM element'))
    ) {
      return;
    }
    originalError.apply(console, args);
  };
}

const emptySubscribe = () => () => {};

export function Studio() {
  // Idiomatic React 18/19 client-side mount detection without setState cascading renders
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Suppress benign React 19 DOM prop warnings from third-party Studio components during edit & publish
  useEffect(() => {
    const currentError = console.error;
    const filterDomPropWarnings = (...args: any[]) => {
      const msg = typeof args[0] === 'string' ? args[0] : '';
      if (
        msg.includes('React does not recognize the `flexGrow` prop on a DOM element') ||
        (msg.includes('React does not recognize the `') && msg.includes('prop on a DOM element'))
      ) {
        return;
      }
      currentError.apply(console, args);
    };

    console.error = filterDomPropWarnings;

    return () => {
      console.error = currentError;
    };
  }, []);

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
        @import url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css');

        /* Sanity Studio UI Base Font & Frame Reset */
        .sanity-studio-wrapper {
          direction: ltr !important;
          text-align: left !important;
          font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Persian Typography & RTL for Editorial Content Inputs */
        .sanity-studio-wrapper input[type="text"]:not([type="search"]):not([name*="search" i]):not([id*="slug" i]):not([name*="slug" i]):not([placeholder*="Search" i]):not([aria-label*="Search" i]),
        .sanity-studio-wrapper textarea,
        .sanity-studio-wrapper [contenteditable="true"],
        .sanity-studio-wrapper [data-slate-editor="true"],
        .sanity-studio-wrapper [data-ui="TextInput__input"]:not([name*="search" i]):not([id*="slug" i]):not([name*="slug" i]):not([placeholder*="Search" i]):not([aria-label*="Search" i]),
        .sanity-studio-wrapper [data-ui="TextArea__input"],
        .sanity-studio-wrapper [data-ui="FormField"] label,
        .sanity-studio-wrapper [data-ui="FormField"] [data-ui="Text"],
        .sanity-studio-wrapper [data-testid*="field-"] label,
        [data-ui="Dialog"] textarea,
        [data-ui="Dialog"] [contenteditable="true"] {
          direction: rtl !important;
          text-align: right !important;
          font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          unicode-bidi: plaintext !important;
        }

        /* Field labels and description text RTL */
        .sanity-studio-wrapper [data-ui="FormField"] label,
        .sanity-studio-wrapper [data-testid*="field-"] label {
          font-weight: 700 !important;
          color: #1e293b !important;
          letter-spacing: 0 !important;
        }

        /* PortableText editor blocks alignment & bidirectional stability */
        .sanity-studio-wrapper [data-slate-editor="true"],
        .sanity-studio-wrapper [contenteditable="true"],
        .sanity-studio-wrapper .pt-editable {
          direction: rtl !important;
          text-align: right !important;
          font-family: 'Vazirmatn', sans-serif !important;
          line-height: 1.85 !important;
        }

        .sanity-studio-wrapper [contenteditable="true"] p,
        .sanity-studio-wrapper [contenteditable="true"] h1,
        .sanity-studio-wrapper [contenteditable="true"] h2,
        .sanity-studio-wrapper [contenteditable="true"] h3,
        .sanity-studio-wrapper [contenteditable="true"] h4,
        .sanity-studio-wrapper [contenteditable="true"] h5,
        .sanity-studio-wrapper [contenteditable="true"] h6,
        .sanity-studio-wrapper [data-slate-node="element"] {
          direction: rtl !important;
          text-align: right !important;
          font-family: 'Vazirmatn', sans-serif !important;
          line-height: 1.85 !important;
          unicode-bidi: plaintext !important;
        }

        /* Lists in Portable Text Editor (bullets on the right side) */
        .sanity-studio-wrapper [data-slate-editor="true"] ul,
        .sanity-studio-wrapper [data-slate-editor="true"] ol,
        .sanity-studio-wrapper [contenteditable="true"] ul,
        .sanity-studio-wrapper [contenteditable="true"] ol {
          direction: rtl !important;
          text-align: right !important;
          padding-right: 24px !important;
          padding-left: 0 !important;
          margin-right: 0 !important;
        }

        .sanity-studio-wrapper [data-slate-editor="true"] li,
        .sanity-studio-wrapper [contenteditable="true"] li {
          direction: rtl !important;
          text-align: right !important;
          unicode-bidi: plaintext !important;
        }

        /* Blockquotes in Portable Text Editor (right border indicator) */
        .sanity-studio-wrapper [data-slate-editor="true"] blockquote,
        .sanity-studio-wrapper [contenteditable="true"] blockquote {
          direction: rtl !important;
          text-align: right !important;
          border-right: 4px solid #10b981 !important;
          border-left: none !important;
          padding: 8px 16px 8px 0 !important;
          margin: 12px 0 !important;
          color: #475569 !important;
          background: #f8fafc !important;
          border-radius: 0 8px 8px 0 !important;
          unicode-bidi: plaintext !important;
        }

        /* Keep technical inputs (slug, search, URL, code) strictly LTR */
        .sanity-studio-wrapper input[placeholder*="Search" i],
        .sanity-studio-wrapper input[aria-label*="Search" i],
        .sanity-studio-wrapper input[name*="search" i],
        .sanity-studio-wrapper input[id*="slug" i],
        .sanity-studio-wrapper input[name*="slug" i],
        .sanity-studio-wrapper [data-ui="TextInput__input"][id*="slug"],
        .sanity-studio-wrapper [data-ui="TextInput__input"][name*="slug"],
        .sanity-studio-wrapper input[type="url"],
        .sanity-studio-wrapper input[name*="url" i],
        .sanity-studio-wrapper textarea[name*="code" i],
        .sanity-studio-wrapper [data-ui="CodeInput"],
        .sanity-studio-wrapper [data-testid*="code"] {
          direction: ltr !important;
          text-align: left !important;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
          unicode-bidi: isolate !important;
        }

        /* Tabs styling for Field Groups */
        .sanity-studio-wrapper [role="tablist"] {
          gap: 6px;
        }
        .sanity-studio-wrapper [role="tab"] {
          font-family: 'Vazirmatn', sans-serif !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          border-radius: 8px !important;
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
