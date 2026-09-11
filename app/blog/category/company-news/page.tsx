import React from 'react';
import type { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { postsByCategoryQuery } from '@/sanity/lib/queries';
import { PostSummary } from '@/sanity/types';
import CategoryLanding from '@/components/blog/CategoryLanding';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'اخبار و رویدادهای شرکت (Company News) | ام. آی. تک. (Mitech)',
  description:
    'آخرین اخبار، رونمایی محصولات جدید، تفاهم‌نامه‌ها و اطلاعیه‌های رسمی شرکت دانش‌بنیان فناوری هوشمند میکائیل.',
  keywords: [
    'اخبار میکائیل',
    'رویدادهای شرکت',
    'رونمایی محصولات',
    'Company News',
    'میکائیل',
    'Mitech',
  ],
  openGraph: {
    title: 'اخبار و رویدادهای شرکت (Company News) | ام. آی. تک. (Mitech)',
    description:
      'آخرین اخبار، رونمایی محصولات جدید، تفاهم‌نامه‌ها و اطلاعیه‌های رسمی شرکت دانش‌بنیان میکائیل.',
    url: 'https://mitech.ir/blog/category/company-news',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'اخبار و رویدادهای شرکت (Company News) | میکائیل',
    description: 'آخرین اخبار، رونمایی محصولات جدید، تفاهم‌نامه‌ها و اطلاعیه‌های رسمی شرکت.',
  },
  alternates: {
    canonical: 'https://mitech.ir/blog/category/company-news',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

async function getCompanyNewsPosts(): Promise<PostSummary[]> {
  try {
    const posts = await client.fetch<PostSummary[]>(postsByCategoryQuery, {
      categories: ['اخبار شرکت', 'اخبار و رویدادهای شرکت', 'اخبار و تحولات میکائیل'],
    });
    return posts || [];
  } catch (error) {
    console.error('Error fetching company news posts from Sanity:', error);
    return [];
  }
}

export default async function CompanyNewsPage() {
  const posts = await getCompanyNewsPosts();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'اخبار و رویدادهای شرکت (Company News) | ام. آی. تک. (Mitech)',
    description:
      'آخرین اخبار، رونمایی محصولات جدید، تفاهم‌نامه‌ها و اطلاعیه‌های رسمی شرکت دانش‌بنیان فناوری هوشمند میکائیل.',
    url: 'https://mitech.ir/blog/category/company-news',
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
        title="اخبار و رویدادهای شرکت"
        englishTitle="Company News & Press Releases"
        badge="اطلاعیه‌های رسمی و دستاوردها"
        description="پایگاه رسمی اطلاع‌رسانی شرکت دانش‌بنیان فناوری هوشمند میکائیل؛ دستاوردهای علمی، رونمایی محصولات نوآورانه، حضور در نمایشگاه‌ها و گزارش تفاهم‌نامه‌های همکاری استراتژیک."
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
            label: 'مطالعات موردی',
            href: '/blog/category/case-studies',
            desc: 'گزارش پروژه‌های پیاده‌سازی‌شده',
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
