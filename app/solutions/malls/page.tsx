import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'راهکار مجتمع‌های تجاری و مال‌ها | میکائیل',
  description: 'ناوگان حمل‌ونقل هوشمند و ویلچرهای خودران ویژه مراکز خرید و مجتمع‌های تجاری چندمنظوره.',
};

export default function MallsSolutionPage() {
  return (
    <ComingSoonTemplate
      title="مجتمع‌های تجاری و مال‌ها"
      englishTitle="Shopping Malls & Commercial Complexes"
      category="راهکارها"
      categoryHref="/solutions"
      description="ارائه ناوگان کالسکه‌های هوشمند خانواده، ویلچرهای برقی لوکس و مبلمان متحرک برای ایجاد یک تجربه خرید راحت، لذت‌بخش و متمایز در مجتمع‌های تجاری بزرگ."
      highlights={[
        {
          title: 'افزایش زمان ماندگاری مشتریان',
          desc: 'حذف خستگی پیاده‌روی طولانی برای خانواده‌ها و خریداران و افزایش گردش مالی فروشگاه‌ها.',
        },
        {
          title: 'رزرو آسان از طریق کیوسک و اپلیکیشن',
          desc: 'امکان اجاره ساعتی یا استفاده مبتنی بر کیف‌پول دیجیتال با برگشت خودکار ناوگان به ایستگاه شارژ.',
        },
        {
          title: 'مسیربابی هوشمند داخل مال',
          desc: 'ناوبری به سمت برندها و فروشگاه‌های دلخواه با تبلیغات تعاملی مکان‌محور بر روی مانیتور ناوگان.',
        },
      ]}
      siblingLinks={[
        {
          label: 'فرودگاه‌ها و پایانه‌ها',
          href: '/solutions/airports',
          desc: 'راهکار ترانزیت هوشمند مسافران در فرودگاه‌ها',
        },
        {
          label: 'مراکز درمانی و بیمارستان‌ها',
          href: '/solutions/healthcare',
          desc: 'جابجایی ایمن بیماران در مجتمع‌های پزشکی',
        },
        {
          label: 'مراکز گردشگری و هتل‌ها',
          href: '/solutions/tourism',
          desc: 'گشت‌های هوشمند تفریحی و اقامتی',
        },
        {
          label: 'کالسکه‌های هوشمند خانواده',
          href: '/fleet/smart-family-carts',
          desc: 'مشاهده مشخصات کالسکه‌های اختصاصی مال',
        },
      ]}
    />
  );
}
