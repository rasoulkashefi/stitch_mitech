import { defineField, defineType } from 'sanity';
import { CheckmarkCircleIcon } from '@sanity/icons/CheckmarkCircle';

export const keyTakeawaysType = defineType({
  name: 'keyTakeaways',
  title: 'نکات کلیدی و جمع‌بندی مدیریتی (Key Takeaways)',
  type: 'object',
  icon: CheckmarkCircleIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'تیتر کادر جمع‌بندی',
      type: 'string',
      initialValue: 'نکات کلیدی در یک نگاه (Key Takeaways)',
    }),
    defineField({
      name: 'points',
      title: 'فهرست نکات محوری (موجز و داده‌محور)',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required().min(2).error('حداقل ۲ نکته کلیدی ثبت کنید'),
      description: 'این نکات به مخاطبان پرمشغله و مدل‌های هوش مصنوعی (LLMs) در درک سریع پیام محوری مقاله کمک می‌کند.',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      points: 'points',
    },
    prepare({ heading, points = [] }) {
      return {
        title: `📌 ${heading || 'نکات کلیدی مقاله'}`,
        subtitle: `${points.length} نکته کلیدی محوری`,
      };
    },
  },
});
