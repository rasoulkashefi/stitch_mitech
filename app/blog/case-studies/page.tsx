import React from 'react';
import type { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { postsByCategoryQuery } from '@/sanity/lib/queries';
import { PostSummary } from '@/sanity/types';
import CategoryLanding from '@/components/blog/CategoryLanding';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'مطالعات موردی و پروژه‌ها (Case Studies) | ام. آی. تک. (Mitech)',
  description:
    'گزارش‌های مستند و تحلیل بازگشت سرمایه (ROI) حاصل از استقرار ناوگان میکائیل در پروژه‌های واقعی فرودگاهی، درمانی و تجاری.',
  keywords: [
    'مطالعات موردی رباتیک',
    'پروژه‌های اجرا شده',
    'موفقیت استقرار خودران',
    'Case Studies',
    'میکائیل',
    'Mitech',
  ],
  openGraph: {
    title: 'مطالعات موردی و پروژه‌ها (Case Studies) | ام. آی. تک. (Mitech)',
    description:
      'گزارش‌های مستند و تحلیل بازگشت سرمایه (ROI) حاصل از استقرار ناوگان میکائیل در پروژه‌های واقعی.',
    url: 'https://mitech.ir/blog/case-studies',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مطالعات موردی و پروژه‌ها (Case Studies) | میکائیل',
    description: 'گزارش‌های مستند و تحلیل بازگشت سرمایه (ROI) حاصل از استقرار ناوگان میکائیل.',
  },
  alternates: {
    canonical: 'https://mitech.ir/blog/case-studies',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

async function getCaseStudiesPosts(): Promise<PostSummary[]> {
  try {
    const posts = await client.fetch<PostSummary[]>(postsByCategoryQuery, {
      categories: ['مطالعات موردی', 'مطالعات موردی و پروژه‌ها'],
    });
    return posts || [];
  } catch (error) {
    console.error('Error fetching case studies posts from Sanity:', error);
    return [];
  }
}

export default async function CaseStudiesPage() {
  const posts = await getCaseStudiesPosts();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'مطالعات موردی و پروژه‌ها (Case Studies) | ام. آی. تک. (Mitech)',
    description:
      'گزارش‌های مستند و تحلیل بازگشت سرمایه (ROI) حاصل از استقرار ناوگان میکائیل در پروژه‌های واقعی.',
    url: 'https://mitech.ir/blog/case-studies',
    inLanguage: 'fa-IR',
    publisher: {
      '@type': 'Organization',
      name: 'Mitech',
      url: 'https://mitech.ir',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mitech.ir/logo/mitech-icon.png',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: post.title,
        url: `https://mitech.ir/blog/${post.slug.current}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CategoryLanding
        title="مطالعات موردی و پروژه‌ها"
        englishTitle="Case Studies & Real-World Deployments"
        badge="مستندات عملیاتی و بازگشت سرمایه"
        description="بررسی جامع چالش‌های حل‌شده، تجربه مسافرین و مراجعین و میزان بازگشت سرمایه (ROI) حاصل از استقرار پلتفرم‌ها و ناوگان خودران میکائیل در فرودگاه‌ها، مراکز درمانی و مال‌ها."
        posts={posts}
        siblingCategories={[
          {
            label: 'فناوری رباتیک',
            href: '/blog/robotics',
            desc: 'نوآوری‌های خودران و رباتیک',
          },
          {
            label: 'دیدگاه‌های صنعت',
            href: '/blog/category/industry-insights',
            desc: 'تحلیل‌های تخصصی آینده فناوری',
          },
          {
            label: 'اخبار شرکت',
            href: '/blog/category/company-news',
            desc: 'اخبار و رویدادهای رسمی',
          },
          {
            label: 'دانشنامه ویلچر برقی',
            href: '/blog/electric-wheelchair',
            desc: 'مرجع تخصصی ویلچرهای هوشمند',
          },
        ]}
      />
    </>
  );
}
