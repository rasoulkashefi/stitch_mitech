'use client';

import React from 'react';
import Image from 'next/image';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';
import { slugifyHeading } from '@/sanity/types';

function extractText(children: any): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) {
    return children.map(extractText).join('');
  }
  if (children && typeof children === 'object' && 'props' in children) {
    return extractText(children.props.children);
  }
  return '';
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value) return null;
      const imageUrl = urlForImage(value)?.width(1400)?.url();
      if (!imageUrl) return null;

      return (
        <figure className="my-10 overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
          <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full">
            <Image
              src={imageUrl}
              alt={value.alt || 'تصویر مقاله میکائیل'}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 850px"
            />
          </div>
          {(value.caption || value.alt) && (
            <figcaption className="py-3 px-4 text-center text-xs sm:text-sm text-slate-500 font-medium">
              {value.caption || value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h1: ({ children }) => {
      const id = slugifyHeading(extractText(children));
      return (
        <h1 id={id} className="scroll-mt-28 mt-14 mb-6 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.3]">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = slugifyHeading(extractText(children));
      return (
        <h2 id={id} className="scroll-mt-28 mt-12 mb-5 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-[1.35]">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = slugifyHeading(extractText(children));
      return (
        <h3 id={id} className="scroll-mt-28 mt-9 mb-4 text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-[1.4]">
          {children}
        </h3>
      );
    },
    h4: ({ children }) => (
      <h4 className="mt-7 mb-3 text-lg sm:text-xl font-bold text-slate-900 leading-snug">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 pr-6 pl-4 py-2 border-r-2 border-emerald-500 text-slate-800 text-lg sm:text-xl font-medium leading-[2.0] italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-7 text-slate-700 leading-[2.0] text-base sm:text-lg font-normal">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-7 mr-5 list-disc space-y-3 text-slate-700 text-base sm:text-lg leading-[1.9] pr-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-7 mr-5 list-decimal space-y-3 text-slate-700 text-base sm:text-lg leading-[1.9] pr-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-emerald-600 hover:text-emerald-700 underline underline-offset-4 decoration-emerald-300 font-semibold transition-colors"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-bold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-slate-800">{children}</em>,
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded-md bg-slate-100 text-emerald-800 font-mono text-sm border border-slate-200/80">
        {children}
      </code>
    ),
  },
};

export default function PortableTextRenderer({ value }: { value: any[] }) {
  if (!value || !Array.isArray(value)) return null;
  return (
    <div className="article-content max-w-none text-slate-700">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  );
}
