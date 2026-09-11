import type { StructureResolver } from 'sanity/structure';
import { DocumentTextIcon } from '@sanity/icons/DocumentText';
import { CheckmarkCircleIcon } from '@sanity/icons/CheckmarkCircle';
import { EditIcon } from '@sanity/icons/Edit';
import { StarFilledIcon } from '@sanity/icons/StarFilled';
import { ArchiveIcon } from '@sanity/icons/Archive';
import { EnvelopeIcon } from '@sanity/icons/Envelope';
import { BellIcon } from '@sanity/icons/Bell';
import { CommentIcon } from '@sanity/icons/Comment';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('پیشخوان مدیریت میکائیل')
    .items([
      // ── Section 1: Blog Articles ──
      S.listItem()
        .title('همه مقالات وبلاگ (All Posts)')
        .icon(DocumentTextIcon)
        .child(
          S.documentList()
            .title('تمام مقالات')
            .filter('_type == "post"')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),
      S.listItem()
        .title('مقالات لایو و منتشر شده (Published)')
        .icon(CheckmarkCircleIcon)
        .child(
          S.documentList()
            .title('مقالات منتشر شده در وب‌سایت')
            .filter('_type == "post" && status == "published"')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),
      S.listItem()
        .title('پیش‌نویس‌ها و در حال بررسی (Drafts / Review)')
        .icon(EditIcon)
        .child(
          S.documentList()
            .title('پیش‌نویس‌های نیازمند تکمیل یا بازبینی')
            .filter(
              '_type == "post" && (status == "draft" || status == "in_review" || !defined(status))'
            )
            .defaultOrdering([{ field: '_updatedAt', direction: 'desc' }])
        ),
      S.listItem()
        .title('مقالات برگزیده و شاخص (Featured Posts)')
        .icon(StarFilledIcon)
        .child(
          S.documentList()
            .title('مقالات ویژه با اولویت نمایش')
            .filter('_type == "post" && featured == true')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),
      S.listItem()
        .title('مقالات آرشیو شده (Archived)')
        .icon(ArchiveIcon)
        .child(
          S.documentList()
            .title('بایگانی')
            .filter('_type == "post" && status == "archived"')
        ),

      S.divider(),

      // ── Section 2: Form Submissions & Leads ──
      S.listItem()
        .title('پیام‌ها و فرم‌های دریافتی (Submissions)')
        .icon(EnvelopeIcon)
        .child(
          S.list()
            .title('صندوق پیام‌ها و فرم‌ها')
            .items([
              S.listItem()
                .title('همه پیام‌های دریافتی')
                .icon(EnvelopeIcon)
                .child(
                  S.documentList()
                    .title('همه پیام‌ها و فرم‌های ثبت شده')
                    .filter('_type == "formSubmission"')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('پیام‌های جدید / خوانده‌نشده (Unread)')
                .icon(BellIcon)
                .child(
                  S.documentList()
                    .title('پیام‌های نیازمند پیگیری')
                    .filter('_type == "formSubmission" && (status == "unread" || !defined(status))')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('درخواست‌های دمو و پایلوت (Demo Requests)')
                .icon(CheckmarkCircleIcon)
                .child(
                  S.documentList()
                    .title('درخواست‌های دمو و پایلوت میدانی')
                    .filter('_type == "formSubmission" && formType == "demo"')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('استعلام‌های فروش و تجاری (Sales)')
                .icon(StarFilledIcon)
                .child(
                  S.documentList()
                    .title('استعلام‌های واحد فروش')
                    .filter('_type == "formSubmission" && formType == "sales"')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('پیام‌های تماس عمومی (Contact Us)')
                .icon(CommentIcon)
                .child(
                  S.documentList()
                    .title('پیام‌های فرم تماس عمومی')
                    .filter('_type == "formSubmission" && (formType == "contact" || formType == "general")')
                    .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                ),
            ])
        ),

      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['post', 'formSubmission'].includes(listItem.getId() || '')
      ),
    ]);
