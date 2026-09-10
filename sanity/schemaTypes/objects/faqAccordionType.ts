import { defineField, defineType } from 'sanity';
import { HelpCircleIcon } from '@sanity/icons/HelpCircle';

export const faqAccordionType = defineType({
  name: 'faqAccordion',
  title: 'پرسش و پاسخ متداول (FAQ Accordion)',
  type: 'object',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'عنوان بخش سوالات (اختیاری)',
      type: 'string',
      initialValue: 'پرسش‌های متداول درباره این مبحث',
    }),
    defineField({
      name: 'items',
      title: 'لیست پرسش‌ها و پاسخ‌ها',
      type: 'array',
      of: [
        defineField({
          name: 'faqItem',
          title: 'پرسش و پاسخ',
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'سوال (Question)',
              type: 'string',
              validation: (rule) => rule.required().error('متن سوال الزامی است'),
            }),
            defineField({
              name: 'answer',
              title: 'پاسخ صریح و مستند (Answer)',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required().error('متن پاسخ الزامی است'),
            }),
          ],
          preview: {
            select: {
              question: 'question',
              answer: 'answer',
            },
            prepare({ question, answer }) {
              return {
                title: question || 'پرسش بدون عنوان',
                subtitle: answer ? answer.slice(0, 50) + '...' : '',
              };
            },
          },
        }),
      ],
      validation: (rule) => rule.min(1).error('حداقل یک پرسش و پاسخ باید اضافه شود'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare({ title, items = [] }) {
      return {
        title: `❓ ${title || 'پرسش‌های متداول'}`,
        subtitle: `${items.length} پرسش و پاسخ (آماده برای نمایش در سایت و اسکیما گوگل FAQPage)`,
      };
    },
  },
});
