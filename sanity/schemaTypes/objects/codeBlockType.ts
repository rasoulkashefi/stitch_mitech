import { defineField, defineType } from 'sanity';
import { CodeBlockIcon } from '@sanity/icons/CodeBlock';

export const codeBlockType = defineType({
  name: 'codeBlock',
  title: 'قطعه کد فنی (Code Snippet)',
  type: 'object',
  icon: CodeBlockIcon,
  fields: [
    defineField({
      name: 'language',
      title: 'زبان برنامه‌نویسی (Language)',
      type: 'string',
      options: {
        list: [
          { title: 'TypeScript (.ts/.tsx)', value: 'typescript' },
          { title: 'JavaScript (.js)', value: 'javascript' },
          { title: 'Python (.py)', value: 'python' },
          { title: 'Bash / Shell (.sh)', value: 'bash' },
          { title: 'JSON', value: 'json' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS / Tailwind', value: 'css' },
          { title: 'SQL', value: 'sql' },
          { title: 'YAML', value: 'yaml' },
        ],
      },
      initialValue: 'typescript',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'filename',
      title: 'نام فایل یا برچسب (اختیاری)',
      type: 'string',
      placeholder: 'مثلاً: NavigationEngine.ts یا api/fleet/status',
    }),
    defineField({
      name: 'code',
      title: 'کد برنامه (Code)',
      type: 'text',
      rows: 7,
      validation: (rule) => rule.required().min(1).error('کد نباید خالی باشد'),
    }),
  ],
  preview: {
    select: {
      language: 'language',
      filename: 'filename',
      code: 'code',
    },
    prepare({ language, filename, code }) {
      return {
        title: filename || `کد ${language || 'اسکریپت'}`,
        subtitle: code ? code.split('\n')[0].slice(0, 50) : '',
      };
    },
  },
});
