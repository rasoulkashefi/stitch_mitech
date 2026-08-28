import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'راهکار مراکز گردشگری و هتل‌ها | میکائیل',
  description: 'تورهای خودران و وسایل نقلیه هوشمند تفریحی در هتل‌های ریزورت، موزه‌ها و جاذبه‌های گردشگری.',
};

export default function TourismSolutionPage() {
  return (
    <ComingSoonTemplate
      title="مراکز گردشگری و هتل‌ها"
      englishTitle="Tourism Destinations & Hospitality"
      category="راهکارها"
      categoryHref="/solutions"
      description="تجربه‌ای لوکس و نوآورانه برای مهمانان در موزه‌ها، باغ‌موزه‌ها، دهکده‌های گردشگری و ریزورت‌های تفریحی با راهنمای صوتی چندزبانه و ناوبری خودکار."
      highlights={[
        {
          title: 'تورهای هوشمند با محتوای چندرسانه‌ای',
          desc: 'پخش خودکار توضیحات تاریخی و گردشگری به زبان‌های مختلف هنگام رسیدن به نقاط دیدنی.',
        },
        {
          title: 'خدمات ویژه میزبانی و ترانسفر داخلی',
          desc: 'حمل بار و مسافر در محوطه‌های بزرگ اقامتی و هتل‌ها بدون آلایندگی صوتی و زیست‌محیطی.',
        },
        {
          title: 'مبل‌های متحرک برای تورهای گروهی',
          desc: 'تجربه حرکت هماهنگ گروهی در فضاهای نمایشگاهی با کنترل نرم‌افزاری متمرکز.',
        },
      ]}
      siblingLinks={[
        {
          label: 'مبل‌های هوشمند متحرک',
          href: '/fleet/smart-mobile-sofas',
          desc: 'مشاهده ناوگان مبلمان متحرک هوشمند',
        },
        {
          label: 'کالسکه‌های هوشمند خانواده',
          href: '/fleet/smart-family-carts',
          desc: 'خدمات خانواده در مجموعه‌های تفریحی',
        },
        {
          label: 'مدل اشتراک درآمد (Revenue Sharing)',
          href: '/business-model/revenue-sharing',
          desc: 'فرصت‌های سرمایه‌گذاری مشترک در سایت‌های گردشگری',
        },
      ]}
    />
  );
}
