import React from 'react';
import type { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { postsByCategoryQuery } from '@/sanity/lib/queries';
import { PostSummary } from '@/sanity/types';
import CategoryLanding from '@/components/blog/CategoryLanding';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'دیدگاه‌های صنعت (Industry Insights) | ام. آی. تک. (Mitech)',
  description:
    'تحلیل‌ها و مقالات تخصصی پیرامون آینده رباتیک خدماتی، بینایی ماشین، مدل‌های AMaaS و هوشمندسازی فضاهای عمومی.',
  keywords: [
    'مقالات تخصصی رباتیک',
    'آینده فناوری خودران',
    'Industry Insights',
    'هوشمندسازی فضاها',
    'میکائیل',
    'Mitech',
  ],
  openGraph: {
    title: 'دیدگاه‌های صنعت (Industry Insights) | ام. آی. تک. (Mitech)',
    description:
      'تحلیل‌ها و مقالات تخصصی پیرامون آینده رباتیک خدماتی و هوشمندسازی فضاهای عمومی.',
    url: 'https://mitech.ir/blog/category/industry-insights',
    siteName: 'ام. آی. تک. (Mitech)',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دیدگاه‌های صنعت (Industry Insights) | میکائیل',
    description: 'تحلیل‌ها و مقالات تخصصی پیرامون آینده رباتیک خدماتی و هوشمندسازی فضاهای عمومی.',
  },
  alternates: {
    canonical: 'https://mitech.ir/blog/category/industry-insights',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

async function getIndustryInsightsPosts(): Promise<PostSummary[]> {
  try {
    const posts = await client.fetch<PostSummary[]>(postsByCategoryQuery, {
      categories: [
        'دیدگاه‌های صنعت',
        'دیدگاه‌ها و تحلیل صنعت',
        'تحلیل صنعت',
        'تحلیل صنعت و مدل‌های تجاری AMaaS',
      ],
    });
    return posts || [];
  } catch (error) {
    console.error('Error fetching industry insights posts from Sanity:', error);
    return [];
  }
}

export default async function IndustryInsightsPage() {
  const posts = await getIndustryInsightsPosts();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'دیدگاه‌های صنعت (Industry Insights) | ام. آی. تک. (Mitech)',
    description:
      'تحلیل‌ها و مقالات تخصصی پیرامون آینده رباتیک خدماتی، بینایی ماشین، مدل‌های AMaaS و هوشمندسازی فضاهای عمومی.',
    url: 'https://mitech.ir/blog/category/industry-insights',
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
        title="دیدگاه‌های صنعت و تحلیل فناوری"
        englishTitle="Industry Insights & Future Tech"
        badge="تحلیل عمیق اکوسیستم و مرزهای دانش"
        description="یادداشت‌ها و مقالات عمیق مهندسی پیرامون مرزهای دانش رباتیک خودران، اثرات اقتصادی جابجایی خودران (AMaaS)، حسگرهای لیدار و بینایی ماشین در اتوماسیون فضاهای شهری و عمومی."
        posts={posts}
        siblingCategories={[
          {
            label: 'فناوری رباتیک',
            href: '/blog/robotics',
            desc: 'نوآوری‌های خودران و رباتیک',
          },
          {
            label: 'مطالعات موردی',
            href: '/blog/case-studies',
            desc: 'گزارش پروژه‌های پیاده‌سازی‌شده',
          },
          {
            label: 'اخبار شرکت',
            href: '/blog/category/company-news',
            desc: 'تازه‌های شرکت میکائیل',
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
