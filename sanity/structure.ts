import type { StructureResolver } from 'sanity/structure';
import { DocumentTextIcon } from '@sanity/icons/DocumentText';
import { CheckmarkCircleIcon } from '@sanity/icons/CheckmarkCircle';
import { EditIcon } from '@sanity/icons/Edit';
import { StarFilledIcon } from '@sanity/icons/StarFilled';
import { ArchiveIcon } from '@sanity/icons/Archive';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('پیشخوان تحریریه هوشمند میکائیل')
    .items([
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
      ...S.documentTypeListItems().filter(
        (listItem) => !['post'].includes(listItem.getId() || '')
      ),
    ]);
