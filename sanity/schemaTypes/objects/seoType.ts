import { defineField, defineType } from 'sanity';
import { EarthGlobeIcon } from '@sanity/icons/EarthGlobe';
import { CharCountInput } from '../../components/CharCountInput';
import { CharCountTextArea } from '../../components/CharCountTextArea';
import { SeoPreview } from '../../components/SeoPreview';

export const seoType = defineType({
  name: 'seo',
  title: 'سئو و متادیتا (SEO & Social Graph)',
  type: 'object',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'serpPreview',
      title: 'پیش‌نمایش زنده در نتایج گوگل (Google SERP Simulator)',
      type: 'string',
      components: {
        input: SeoPreview,
      },
      readOnly: true,
    }),
    defineField({
      name: 'metaTitle',
      title: 'عنوان سئو (Meta Title)',
      type: 'string',
      description: 'عنوانی که در تگ <title> و نتایج موتورهای جستجو ظاهر می‌شود. در صورت خالی بودن، عنوان اصلی مقاله استفاده می‌شود.',
      components: {
        input: CharCountInput,
      },
      options: {
        minRecommended: 40,
        maxRecommended: 60,
        absoluteMax: 70,
        recommendationNote: 'طول بهینه برای گوگل: بین ۴۰ تا ۶۰ کاراکتر (بیش از ۷۰ در سرچ کات می‌شود)',
      } as any,
      validation: (rule) =>
        rule.max(70).error('برای جلوگیری از بریده شدن عنوان در نتایج گوگل، طول نباید بیش از ۷۰ کاراکتر باشد'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'توضیحات متا (Meta Description)',
      type: 'text',
      rows: 3,
      description: 'چکیده‌ای جذاب از مقاله برای ترغیب کاربران در صفحه نتایج سرچ گوگل. در صورت خالی بودن، از گزیده مقاله استفاده می‌شود.',
      components: {
        input: CharCountTextArea,
      },
      options: {
        minRecommended: 120,
        maxRecommended: 160,
        absoluteMax: 180,
        recommendationNote: 'طول استاندارد: بین ۱۲۰ تا ۱۶۰ کاراکتر (بیش از ۱۶۰ کاراکتر در گوگل با سه‌نقطه بریده می‌شود)',
      } as any,
      validation: (rule) =>
        rule.max(180).error('توضیحات متا نباید بیش از ۱۸۰ کاراکتر باشد تا در نمایشگرهای موبایل بریده نشود'),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'آدرس کانونیکال اختصاصی (Canonical URL Override)',
      type: 'url',
      description: 'اختیاری: تنها در صورتی پر کنید که این مقاله از منبع دیگری بازنشر شده باشد و بخواهید اعتبار سئو به آن منبع منتقل شود.',
      placeholder: 'https://mitech.ir/blog/...',
    }),
    defineField({
      name: 'noIndex',
      title: 'عدم ایندکس توسط موتورهای جستجو (noindex / nofollow)',
      type: 'boolean',
      description: 'با فعال کردن این گزینه، به ربات‌های گوگل و بینگ اعلام می‌شود که این صفحه نباید در نتایج سرچ نمایش داده شود.',
      initialValue: false,
    }),
    defineField({
      name: 'favicon',
      title: 'فاوآیکون و نماد تب مرورگر (Favicon)',
      type: 'image',
      options: { hotspot: false },
      description: 'آیکون رسمی میکائیل برای متادیتای صفحه و تب مرورگر.',
    }),
    defineField({
      name: 'publisherLogo',
      title: 'لوگوی ناشر (Publisher Logo)',
      type: 'image',
      options: { hotspot: true },
      description: 'لوگوی رسمی ناشر برای داده‌های ساختاریافته و متادیتای برند.',
    }),
    defineField({
      name: 'ogImage',
      title: 'تصویر اختصاصی اشتراک‌گذاری اجتماعی (Open Graph / Twitter Card Image)',
      type: 'image',
      description: 'ابعاد پیشنهادی: ۱۲۰۰ × ۶۳۰ پیکسل (نسبت ۱.۹۱:۱). در صورت خالی بودن، از تصویر اصلی مقاله استفاده خواهد شد.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'متن جایگزین تصویر اشتراک (Alt Text)',
          type: 'string',
        }),
      ],
    }),
  ],
});
