import { defineField, defineType } from 'sanity';
import { InfoOutlineIcon } from '@sanity/icons/InfoOutline';

export const calloutType = defineType({
  name: 'callout',
  title: 'کادر توجه و هشدار (Callout & Alert Box)',
  type: 'object',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'type',
      title: 'نوع کادر (Alert Tone)',
      type: 'string',
      options: {
        list: [
          { title: '💡 نکته کاربردی و ترفند (Tip)', value: 'tip' },
          { title: 'ℹ️ اطلاعات تکمیلی (Info)', value: 'info' },
          { title: '⚠️ هشدار و احتیاط (Warning)', value: 'warning' },
          { title: '✅ نتیجه و دستاورد (Success)', value: 'success' },
          { title: '🚨 اخطار مهم (Critical)', value: 'critical' },
        ],
        layout: 'radio',
      },
      initialValue: 'info',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'عنوان کادر (اختیاری)',
      type: 'string',
      placeholder: 'مثلاً: نکته کلیدی در کاهش استهلاک ناوگان',
    }),
    defineField({
      name: 'text',
      title: 'متن پیام (Message Text)',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().min(5).error('متن پیام نباید خالی باشد'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      text: 'text',
    },
    prepare({ title, type, text }) {
      const icons: Record<string, string> = {
        tip: '💡 نکته',
        info: 'ℹ️ اطلاعات',
        warning: '⚠️ هشدار',
        success: '✅ دستاورد',
        critical: '🚨 اخطار',
      };
      return {
        title: title || text?.slice(0, 45) || 'کادر پیام',
        subtitle: `${icons[type] || 'پیام'} — ${text ? text.slice(0, 50) + '...' : ''}`,
      };
    },
  },
});
