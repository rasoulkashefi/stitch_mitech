import { defineField, defineType } from 'sanity';
import { EnvelopeIcon } from '@sanity/icons/Envelope';

export const formSubmissionType = defineType({
  name: 'formSubmission',
  title: 'پیام‌ها و فرم‌های دریافتی',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'نام و نام خانوادگی',
      type: 'string',
      validation: (rule) => rule.required().error('نام فرستنده الزامی است.'),
    }),
    defineField({
      name: 'phone',
      title: 'شماره تماس مستقیم',
      type: 'string',
      validation: (rule) => rule.required().error('شماره تماس الزامی است.'),
    }),
    defineField({
      name: 'email',
      title: 'پست الکترونیک (ایمیل)',
      type: 'string',
    }),
    defineField({
      name: 'organization',
      title: 'نام شرکت یا سازمان',
      type: 'string',
    }),
    defineField({
      name: 'formType',
      title: 'نوع فرم ارسال شده',
      type: 'string',
      options: {
        list: [
          { title: 'درخواست دمو و پایلوت (Demo)', value: 'demo' },
          { title: 'استعلام فروش و بازرگانی (Sales)', value: 'sales' },
          { title: 'تماس و مشاوره عمومی (Contact)', value: 'contact' },
          { title: 'درخواست پایلوت ناوگان (Fleet Pilot)', value: 'fleet_pilot' },
          { title: 'سایر فرم‌ها (General)', value: 'general' },
        ],
      },
      initialValue: 'general',
    }),
    defineField({
      name: 'subject',
      title: 'موضوع یا محصول مورد نظر',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'متن پیام یا توضیحات تکمیلی',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'status',
      title: 'وضعیت پیگیری در مجموعه',
      type: 'string',
      options: {
        list: [
          { title: '🔵 جدید و خوانده‌نشده (Unread)', value: 'unread' },
          { title: '🟡 در حال پیگیری و هماهنگی (In Progress)', value: 'in_progress' },
          { title: '🟢 تماس گرفته شد و تکمیل شد (Contacted)', value: 'contacted' },
          { title: '⚪ بایگانی شده (Archived)', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'unread',
    }),
    defineField({
      name: 'submittedAt',
      title: 'تاریخ و زمان ارسال',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'جدیدترین پیام‌ها',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      name: 'name',
      phone: 'phone',
      organization: 'organization',
      formType: 'formType',
      status: 'status',
      submittedAt: 'submittedAt',
    },
    prepare(selection) {
      const { name, phone, organization, formType, status, submittedAt } = selection;
      
      const typeLabels: Record<string, string> = {
        demo: 'درخواست دمو',
        sales: 'استعلام فروش',
        contact: 'فرم تماس',
        fleet_pilot: 'پایلوت ناوگان',
        general: 'پیام عمومی',
      };

      const statusIcons: Record<string, string> = {
        unread: '🔵 جدید',
        in_progress: '🟡 در حال پیگیری',
        contacted: '🟢 پاسخ داده شده',
        archived: '⚪ بایگانی',
      };

      const typeLabel = (formType && typeLabels[formType]) || formType || 'فرم';
      const statusLabel = (status && statusIcons[status]) || 'بررسی‌نشده';
      const dateStr = submittedAt ? new Date(submittedAt).toLocaleDateString('fa-IR') : '';

      return {
        title: `${name || 'بدون نام'} (${organization ? `${organization} - ` : ''}${phone || 'بدون شماره'})`,
        subtitle: `[${typeLabel}] • ${statusLabel} ${dateStr ? `• ${dateStr}` : ''}`,
      };
    },
  },
});
