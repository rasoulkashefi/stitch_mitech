import React from 'react';
import { defineField, defineType } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons/DocumentText';
import { ImageIcon } from '@sanity/icons/Image';
import { EarthGlobeIcon } from '@sanity/icons/EarthGlobe';
import { SparklesIcon } from '@sanity/icons/Sparkles';
import { CogIcon } from '@sanity/icons/Cog';
import { HighlightIcon } from '@sanity/icons/Highlight';
import { LinkIcon } from '@sanity/icons/Link';
import { CharCountInput } from '../components/CharCountInput';
import { CharCountTextArea } from '../components/CharCountTextArea';

// Custom blockquote component to resolve React 19 DOM nesting hydration error
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

// Custom highlight decorator component for Portable Text
const HighlightDecorator = (props: { children?: React.ReactNode }) =>
  React.createElement(
    'span',
    {
      style: {
        backgroundColor: '#fef08a',
        padding: '0.1em 0.3em',
        borderRadius: '3px',
      },
    },
    props.children
  );

export const postType = defineType({
  name: 'post',
  title: 'مقاله (Post)',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {
      name: 'content',
      title: '📝 محتوا و نگارش',
      default: true,
      icon: DocumentTextIcon,
    },
    {
      name: 'media',
      title: '🖼️ رسانه و تصویر شاخص',
      icon: ImageIcon,
    },
    {
      name: 'seo',
      title: '🌐 سئو و متادیتا',
      icon: EarthGlobeIcon,
    },
    {
      name: 'ai',
      title: '🤖 موتور هوش مصنوعی (GEO)',
      icon: SparklesIcon,
    },
    {
      name: 'workflow',
      title: '⚙️ گردش کار و انتشار',
      icon: CogIcon,
    },
  ],
  fields: [
    // ==========================================
    // گروه ۱: محتوا و نگارش (Content & Editorial)
    // ==========================================
    defineField({
      name: 'title',
      title: 'عنوان اصلی مقاله (Post Title)',
      type: 'string',
      group: 'content',
      components: {
        input: CharCountInput,
      },
      options: {
        minRecommended: 30,
        maxRecommended: 75,
        absoluteMax: 100,
        recommendationNote: 'طول بهینه برای تیتر مقالات: بین ۳۰ تا ۷۵ کاراکتر',
      } as any,
      validation: (rule) =>
        rule
          .required()
          .min(10)
          .error('عنوان مقاله باید حداقل ۱۰ کاراکتر باشد')
          .max(100)
          .error('عنوان مقاله نباید بیشتر از ۱۰۰ کاراکتر باشد'),
    }),
    defineField({
      name: 'slug',
      title: 'نامک پیوند یکتا (Slug / URL Segment)',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('تولید نامک انگلیسی یا فارسی برای آدرس مقاله الزامی است'),
      description: 'آدرس اینترنتی صفحه را تشکیل می‌دهد: mitech.ir/blog/[slug]',
    }),
    defineField({
      name: 'excerpt',
      title: 'چکیده و لید مقاله (Excerpt / Lead)',
      type: 'text',
      rows: 3,
      group: 'content',
      components: {
        input: CharCountTextArea,
      },
      options: {
        minRecommended: 80,
        maxRecommended: 160,
        absoluteMax: 240,
        recommendationNote: 'طول استاندارد چکیده: بین ۸۰ تا ۱۶۰ کاراکتر (در کارت‌های وبلاگ و اشتراک‌گذاری نمایش می‌یابد)',
      } as any,
      validation: (rule) =>
        rule
          .required()
          .min(20)
          .error('چکیده باید حداقل ۲۰ کاراکتر باشد')
          .max(250)
          .warning('برای زیبایی کارت‌ها، چکیده بهتر است حداکثر ۲۵۰ کاراکتر باشد'),
      description: 'خلاصه‌ای جذاب از هدف و دستاورد مقاله برای نمایش در هدر و کارت‌های آرشیو وبلاگ.',
    }),
    defineField({
      name: 'body',
      title: 'متن تفصیلی و بدنه تعاملی (Rich Article Body)',
      type: 'array',
      group: 'content',
      description:
        'محیط پیشرفته نگارش با پشتیبانی از کادرهای توجه، قطعه کد، آمار برجسته، سوالات متداول (FAQ)، نکات کلیدی و ویدیو.',
      of: [
        // 1. بلوک متنی استاندارد و غنی
        {
          type: 'block',
          styles: [
            { title: 'پاراگراف عادی (Normal)', value: 'normal' },
            { title: 'تیتر بزرگ (H1 - اصلی)', value: 'h1' },
            { title: 'تیتر بخش (H2 - سرفصل)', value: 'h2' },
            { title: 'تیتر فرعی (H3 - زیربخش)', value: 'h3' },
            { title: 'تیتر کوچک (H4)', value: 'h4' },
            {
              title: 'نقل‌قول برجسته (Quote)',
              value: 'blockquote',
              component: BlockQuoteComponent,
            },
          ],
          lists: [
            { title: 'فهرست نقطه‌ای (Bullet)', value: 'bullet' },
            { title: 'فهرست شماره‌دار (Numbered)', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'پررنگ (Strong)', value: 'strong' },
              { title: 'مورب (Emphasis)', value: 'em' },
              { title: 'کد درون‌متنی (Inline Code)', value: 'code' },
              { title: 'زیرخط (Underline)', value: 'underline' },
              { title: 'خط‌خورده (Strike)', value: 'strike-through' },
              {
                title: 'هایلایت رنگی (Highlight)',
                value: 'highlight',
                icon: HighlightIcon,
                component: HighlightDecorator,
              },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'پیوند اینترنتی (Link)',
                icon: LinkIcon,
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'نشانی اینترنتی (URL)',
                    validation: (rule) =>
                      rule
                        .required()
                        .uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
                  },
                  {
                    title: 'باز شدن در تب جدید (Open in new tab)',
                    name: 'blank',
                    type: 'boolean',
                    initialValue: false,
                  },
                  {
                    title: 'عدم انتقال اعتبار سئو (rel="nofollow")',
                    name: 'nofollow',
                    type: 'boolean',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        // 2. تصویر همراه با کپشن و متن جایگزین
        {
          type: 'image',
          title: 'تصویر درون‌متنی (Image)',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'متن جایگزین (Alt Text)',
              validation: (rule) =>
                rule
                  .required()
                  .warning('ثبت متن جایگزین برای سئو تصاویر و دسترس‌پذیری نابینایان بسیار توصیه می‌شود.'),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'زیرنویس تصویر (Caption)',
            },
          ],
        },
        // 3. کادر پیام و هشدار (Callout)
        { type: 'callout' },
        // 4. قطعه کد تخصصی (Code Block)
        { type: 'codeBlock' },
        // 5. شاخص آماری و متریک برجسته (Stat Card)
        { type: 'statCard' },
        // 6. آکاردئون پرسش و پاسخ (FAQ Accordion)
        { type: 'faqAccordion' },
        // 7. نکات کلیدی و جمع‌بندی مدیریتی (Key Takeaways)
        { type: 'keyTakeaways' },
        // 8. جای‌گذاری ویدیو (Video Embed)
        { type: 'videoEmbed' },
        // 9. جدول داده‌ها و مشخصات فنی (Table)
        {
          type: 'table',
          title: 'جدول اطلاعات و مشخصات فنی (Table)',
        },
      ],
    }),

    // ==========================================
    // گروه ۲: رسانه و تصویر شاخص (Media & Assets)
    // ==========================================
    defineField({
      name: 'mainImage',
      title: 'تصویر شاخص و کاور مقاله (Featured Cover Image)',
      type: 'image',
      group: 'media',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'متن جایگزین تصویر شاخص (Alt Text)',
          validation: (rule) =>
            rule
              .required()
              .warning('افزودن متن جایگزین تصویر شاخص برای سئو الزامی و استانداردی غیرقابل چشم‌پوشی است.'),
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'کپشن یا عکاس/منبع تصویر',
        }),
      ],
    }),

    // ==========================================
    // گروه ۳: سئو و متادیتا (SEO & Social Graph)
    // ==========================================
    defineField({
      name: 'seo',
      title: 'بهینه‌سازی برای موتورهای جستجو (SEO Suite)',
      type: 'seo',
      group: 'seo',
    }),

    // ==========================================
    // گروه ۴: هوش مصنوعی (AI & GEO Engine)
    // ==========================================
    defineField({
      name: 'aiMetadata',
      title: 'بهینه‌سازی برای هوش مصنوعی (GEO & AI Engine)',
      type: 'aiMetadata',
      group: 'ai',
    }),

    // ==========================================
    // گروه ۵: گردش کار و انتشار (Workflow & Publishing)
    // ==========================================
    defineField({
      name: 'status',
      title: 'وضعیت گردش کار محتوا (Editorial Workflow Status)',
      type: 'string',
      group: 'workflow',
      options: {
        list: [
          { title: '📝 پیش‌نویس اولیه (Draft)', value: 'draft' },
          { title: '🔍 در حال بررسی و بازبینی (In Review)', value: 'in_review' },
          { title: '⏰ زمان‌بندی شده برای انتشار (Scheduled)', value: 'scheduled' },
          { title: '🟢 منتشر شده و لایو در سایت (Published)', value: 'published' },
          { title: '📦 بایگانی شده (Archived)', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (rule) => rule.required(),
      description: 'فقط مقالاتی که وضعیت آنها «منتشر شده» است در سایت عمومی نمایش داده می‌شوند.',
    }),
    defineField({
      name: 'featured',
      title: 'مقاله برگزیده و شاخص (Featured Post)',
      type: 'boolean',
      group: 'workflow',
      initialValue: false,
      description: 'با فعال کردن این گزینه، مقاله در بخش ویژه صفحه وبلاگ قرار خواهد گرفت.',
    }),
    defineField({
      name: 'publishedAt',
      title: 'تاریخ و زمان انتشار (Publish Date)',
      type: 'datetime',
      group: 'workflow',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'نویسنده یا پژوهشگر (Author)',
      type: 'string',
      group: 'workflow',
      initialValue: 'تیم پژوهش و توسعه میکائیل',
      placeholder: 'مثلاً: دکتر علیرضا رضایی، کارشناس ارشد ناوبری خودران',
    }),
    defineField({
      name: 'categories',
      title: 'دسته‌بندی‌های تخصصی (Categories)',
      type: 'array',
      group: 'workflow',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'فناوری و ناوبری خودران', value: 'فناوری و ناوبری خودران' },
          { title: 'رباتیک سازمانی و لجستیک', value: 'رباتیک سازمانی و لجستیک' },
          { title: 'هوش مصنوعی و بینایی ماشین', value: 'هوش مصنوعی و بینایی ماشین' },
          { title: 'اخبار و تحولات میکائیل', value: 'اخبار و تحولات میکائیل' },
          { title: 'تحلیل صنعت و مدل‌های تجاری AMaaS', value: 'تحلیل صنعت و مدل‌های تجاری AMaaS' },
        ],
      },
    }),
    defineField({
      name: 'tags',
      title: 'برچسب‌ها و کلمات کلیدی (Tags & SEO Keywords)',
      type: 'array',
      group: 'workflow',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'کلمات کلیدی مرتبط با مقاله برای تقویت ارتباط معنایی در جستجوها.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      publishedAt: 'publishedAt',
      status: 'status',
      media: 'mainImage',
      featured: 'featured',
    },
    prepare({ title, author, publishedAt, status = 'draft', media, featured }) {
      const statusLabels: Record<string, string> = {
        draft: '📝 پیش‌نویس',
        in_review: '🔍 در حال بازبینی',
        scheduled: '⏰ زمان‌بندی',
        published: '🟢 منتشر شده',
        archived: '📦 بایگانی',
      };

      const dateStr = publishedAt ? publishedAt.split('T')[0] : '';
      const star = featured ? '⭐ ' : '';

      return {
        title: `${star}${title || 'بدون عنوان'}`,
        subtitle: `[${statusLabels[status] || status}] • ${author || 'میکائیل'} • ${dateStr}`,
        media,
      };
    },
  },
});
