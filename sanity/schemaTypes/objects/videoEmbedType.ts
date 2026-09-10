import { defineField, defineType } from 'sanity';
import { PlayIcon } from '@sanity/icons/Play';

export const videoEmbedType = defineType({
  name: 'videoEmbed',
  title: 'ویدیو تعاملی (Video Embed)',
  type: 'object',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      title: 'نشانی اینترنتی ویدیو (URL)',
      type: 'url',
      placeholder: 'https://www.aparat.com/v/... یا https://www.youtube.com/watch?v=... یا لینک مستقیم MP4',
      validation: (rule) =>
        rule.required().uri({ scheme: ['http', 'https'] }).error('لطفاً یک لینک معتبر وارد کنید'),
    }),
    defineField({
      name: 'caption',
      title: 'کپشن یا توضیح ویدیو (اختیاری)',
      type: 'string',
      placeholder: 'مثلاً: تست ناوبری هوشمند در شرایط نوری ضعیف',
    }),
    defineField({
      name: 'aspectRatio',
      title: 'نسبت ابعاد ویدیو (Aspect Ratio)',
      type: 'string',
      options: {
        list: [
          { title: '۱۶:۹ عریض (استاندارد یوتیوب و آپارات)', value: '16:9' },
          { title: '۴:۳ سنتی', value: '4:3' },
          { title: '۱:۱ مربعی', value: '1:1' },
          { title: '۹:۱۶ عمودی (ریلز / استوری)', value: '9:16' },
        ],
      },
      initialValue: '16:9',
    }),
  ],
  preview: {
    select: {
      url: 'url',
      caption: 'caption',
      aspectRatio: 'aspectRatio',
    },
    prepare({ url, caption, aspectRatio }) {
      return {
        title: `🎬 ${caption || 'ویدیو ضمیمه'}`,
        subtitle: `${aspectRatio || '16:9'} — ${url || ''}`,
      };
    },
  },
});
