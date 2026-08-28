import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'راهکار مراکز درمانی و بیمارستان‌ها | میکائیل',
  description: 'جابجایی بهداشتی، ایمن و مکانیزه بیماران و مراجعین در بیمارستان‌ها و مراکز توانبخشی.',
};

export default function HealthcareSolutionPage() {
  return (
    <ComingSoonTemplate
      title="مراکز درمانی و بیمارستان‌ها"
      englishTitle="Hospitals & Healthcare Facilities"
      category="راهکارها"
      categoryHref="/solutions"
      description="ارائه راهکارهای تردد خودران برای انتقال بیماران بین بخش‌ها، کلینیک‌ها و آزمایشگاه‌ها با رعایت بالاترین استانداردهای ایمنی پزشکی و ضدعفونی سطوح."
      highlights={[
        {
          title: 'کنترل حرکت فوق‌العاده نرم و ارگونومیک',
          desc: 'شتاب‌گیری و ترمز بسیار نرم و تطبیق‌پذیر برای بیماران پس از عمل یا توان‌یابان حرکتی.',
        },
        {
          title: 'حفظ استقلال و کرامت بیماران',
          desc: 'امکان تردد مستقل مراجعه‌کننده با جوی‌استیک هوشمند یا هدایت خودکار بدون نیاز به همراه.',
        },
        {
          title: 'جلوگیری از ازدحام کریدورها و بخش‌ها',
          desc: 'مدیریت ترافیک راهروهای بیمارستانی با سنسورهای تشخیص مانع ۳۶۰ درجه و لایدار ضدبرخورد.',
        },
      ]}
      siblingLinks={[
        {
          label: 'فرودگاه‌ها و پایانه‌ها',
          href: '/solutions/airports',
          desc: 'راهکار ترانزیت مسافران در پایانه‌ها',
        },
        {
          label: 'مجتمع‌های تجاری و مال‌ها',
          href: '/solutions/malls',
          desc: 'ناوگان تردد مراجعین در مجتمع‌های تجاری',
        },
        {
          label: 'ربات‌های باربر تعقیب‌کننده',
          href: '/fleet/following-amrs',
          desc: 'جابجایی مکانیزه پرونده‌ها و تجهیزات پزشکی',
        },
      ]}
    />
  );
}
