import React from 'react';
import { defineField, defineType } from 'sanity';

// Custom blockquote component to resolve React 19 DOM nesting hydration error:
// "In HTML, <div> cannot be a descendant of <p>" caused by Sanity's default BlockQuote
const BlockQuoteComponent = (props: { children?: React.ReactNode }) =>
  React.createElement(
    'blockquote',
    {
      style: {
        borderInlineStart: '4px solid #10b981',
        paddingInlineStart: '1rem',
        margin: '1rem 0',
        fontStyle: 'italic',
        color: '#334155',
      },
    },
    props.children
  );

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }),
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'tags',
      title: 'برچسب‌ها / هشتگ‌ها (Tags & SEO Keywords)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'کلمات کلیدی و هشتگ‌های مرتبط با مقاله برای تقویت سئو و درک موتورهای هوش مصنوعی',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
            {
              title: 'Quote',
              value: 'blockquote',
              component: BlockQuoteComponent,
            },
          ],
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
    }),
  ],
});
