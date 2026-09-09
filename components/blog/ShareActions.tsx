'use client';

import React, { useState } from 'react';
import { Copy, Check, Send, Share2 } from 'lucide-react';

interface ShareActionsProps {
  title: string;
  url: string;
}

export default function ShareActions({ title, url }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur-sm shadow-xs">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 pb-2 border-b border-slate-100">
        <Share2 className="h-4 w-4 text-emerald-600" />
        <span>اشتراک‌گذاری</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleCopy}
          aria-label="کپی لینک مقاله"
          title="کپی لینک مقاله"
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-2 px-3 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              <span className="text-emerald-600">کپی شد</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-slate-500" />
              <span>کپی لینک</span>
            </>
          )}
        </button>

        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="اشتراک در تلگرام"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-blue-500 hover:border-blue-200 transition-colors"
        >
          <Send className="h-4 w-4" />
        </a>

        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="اشتراک در توییتر"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-950 hover:border-slate-400 transition-colors"
        >
          <span className="font-bold text-xs">𝕏</span>
        </a>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="اشتراک در لینکدین"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-blue-700 hover:border-blue-300 transition-colors"
        >
          <span className="font-bold text-xs">in</span>
        </a>
      </div>
    </div>
  );
}
