import { defineField, defineType } from 'sanity';
import { RocketIcon } from '@sanity/icons/Rocket';

export const aiEngineType = defineType({
  name: 'aiMetadata',
  title: 'بهینه‌سازی برای موتورهای هوش مصنوعی (AI & GEO Engine)',
  type: 'object',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'aiSummary',
      title: 'خلاصه مستقیم برای هوش مصنوعی (AI Quick Answer / TL;DR)',
      type: 'text',
      rows: 4,
      description:
        'یک پاسخ مستقیم، فشرده و متراکم از داده (۴۰ تا ۶۰ کلمه) برای نقل‌قول در پاسخ‌های موتورهای مولد مثل SearchGPT، Perplexity، Google AI Overviews و Gemini.',
      placeholder:
        'مثال: سامانه ناوبری مستقل از GPS میکائیل با ترکیب سنسورهای LiDAR و اسلم نوری، امکان هدایت خودران ناوگان را در فضاهای سرپوشیده با دقت ۳ سانتی‌متر فراهم می‌کند...',
      validation: (rule) =>
        rule.warning('توصیه GEO: نوشتن یک خلاصه صریح و بدون مقدمه، شانس استناد در هوش مصنوعی را تا ۳۰۰٪ افزایش می‌دهد.'),
    }),
    defineField({
      name: 'searchIntent',
      title: 'نیت جستجوی مخاطب (Search Intent)',
      type: 'string',
      options: {
        list: [
          { title: '🔍 اطلاعاتی و آموزشی (Informational) — درک مباهیم و فناوری', value: 'informational' },
          { title: '💼 تجاری و مقایسه‌ای (Commercial) — ارزیابی راه‌حل‌ها و مزیت‌ها', value: 'commercial' },
          { title: '🎯 تراکنشی و اقدام (Transactional) — درخواست دمو، خرید یا همکاری', value: 'transactional' },
          { title: '🧭 ناوبری و سازمانی (Navigational) — اطلاعات شرکت یا محصول خاص', value: 'navigational' },
        ],
      },
      initialValue: 'informational',
    }),
    defineField({
      name: 'primaryKeyword',
      title: 'موجودیت یا کلیدواژه کانونی (Primary Entity / Focus Keyword)',
      type: 'string',
      description: 'مفهوم یا کلمه کلیدی اصلی که این مقاله به عنوان مرجع تخصصی آن تدوین شده است.',
      placeholder: 'مثلاً: ناوگان خودران فرودگاهی',
    }),
    defineField({
      name: 'secondaryKeywords',
      title: 'کلمات کلیدی معنایی و مفاهیم مرتبط (LSI & Semantic Entities)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'مفاهیم و کلیدواژه‌های هم‌خانواده برای گسترش گراف معنایی مقاله در الگوریتم‌های رتبه‌بندی.',
    }),
    defineField({
      name: 'targetQuestions',
      title: 'پرسش‌های هدف که این مقاله پاسخ می‌دهد (Target User Questions / RAG)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'پرامپت‌ها یا سوالات دقیقی که کاربران در گوگل یا چت‌بات‌ها مطرح می‌کنند و این مقاله پاسخی مستند برای آن دارد.',
    }),
  ],
});
