import { defineField, defineType } from 'sanity';
import { BarChartIcon } from '@sanity/icons/BarChart';

export const statCardType = defineType({
  name: 'statCard',
  title: 'شاخص آماری برجسته (Stat / Metric Card)',
  type: 'object',
  icon: BarChartIcon,
  fields: [
    defineField({
      name: 'value',
      title: 'مقدار شاخص یا رقم (Stat Value)',
      type: 'string',
      placeholder: 'مثلاً: ۹۹.۸٪ یا ۲.۵ برابر یا ۲۴/۷',
      validation: (rule) => rule.required().error('مقدار شاخص الزامی است'),
    }),
    defineField({
      name: 'label',
      title: 'عنوان شاخص (Metric Label)',
      type: 'string',
      placeholder: 'مثلاً: دقت ناوبری بدون GPS در محیط‌های سرپوشیده',
      validation: (rule) => rule.required().error('عنوان شاخص الزامی است'),
    }),
    defineField({
      name: 'description',
      title: 'توضیحات تکمیلی یا منبع (اختیاری)',
      type: 'text',
      rows: 2,
      placeholder: 'مثلاً: ارزیابی شده در فرودگاه بین‌المللی مسقط طی ۳ ماه تست مستمر',
    }),
  ],
  preview: {
    select: {
      value: 'value',
      label: 'label',
      description: 'description',
    },
    prepare({ value, label, description }) {
      return {
        title: `📊 [${value || 'رقم'}] ${label || 'شاخص'}`,
        subtitle: description ? description.slice(0, 50) : 'شاخص آماری مقاله',
      };
    },
  },
});
