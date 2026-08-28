import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'راهکارهای هوشمند سازمانی و شهری | میکائیل',
  description: 'راهکارهای جامع حمل‌ونقل خودران (AMaaS) برای مجتمع‌های تجاری، فرودگاه‌ها، مراکز درمانی و اماکن گردشگری.',
};

export default function SolutionsPage() {
  return (
    <ComingSoonTemplate
      title="راهکارهای هوشمند سازمانی و شهری"
      englishTitle="Enterprise & Urban Autonomous Solutions"
      category="راهکارها"
      categoryHref="/solutions"
      description="میکائیل با ارائه پلتفرم یکپارچه جابجایی خودران به عنوان سرویس (AMaaS)، زیرساخت‌های حمل‌ونقل اختصاصی درون‌ساختمانی و محوطه‌ای را برای مجموعه‌های پرتردد مدرن‌سازی می‌کند."
      highlights={[
        {
          title: 'مدیریت متمرکز و هوشمند ناوگان',
          desc: 'کنترل لحظه‌ای وضعیت شارژ، تخصیص هوشمند ناوگان به مسافران و دیسپچ خودکار در ساعات اوج شلوغی.',
        },
        {
          title: 'بهینه‌سازی تجربه مشتری (CX)',
          desc: 'ایجاد تجربه مدرن، دسترس‌پذیری آسان برای سالمندان و توانیابان، و افزایش رضایت مراجعین.',
        },
        {
          title: 'کاهش هزینه‌های عملیاتی لجستیک',
          desc: 'صرفه‌جویی چشمگیر در نیروی انسانی و نگهداری با بهره‌گیری از رباتیک خودران و تحلیل داده‌ها.',
        },
      ]}
      siblingLinks={[
        {
          label: 'مجتمع‌های تجاری و مال‌ها',
          href: '/solutions/malls',
          desc: 'ناوگان حمل مراجعین و خریداران در مراکز خرید بزرگ',
        },
        {
          label: 'فرودگاه‌ها و پایانه‌ها',
          href: '/solutions/airports',
          desc: 'ترابری مسافرین ویژه و ترانزیت در گیت‌های فرودگاهی',
        },
        {
          label: 'مراکز درمانی و بیمارستان‌ها',
          href: '/solutions/healthcare',
          desc: 'انتقال ایمن و بهداشتی بیماران و همراهان در محوطه درمانی',
        },
        {
          label: 'مراکز گردشگری و هتل‌ها',
          href: '/solutions/tourism',
          desc: 'تورهای هدایت‌شونده هوشمند و ترانسفر لوکس مهمانان',
        },
      ]}
    />
  );
}
