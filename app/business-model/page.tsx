import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'مدل‌های کسب‌وکار و همکاری تجاری | میکائیل',
  description: 'مدل‌های انعطاف‌پذیر همکاری تجاری، سرویس جابجایی خودران (AMaaS) و پلن‌های درآمدزایی مشترک با مالکان فضاها.',
};

export default function BusinessModelPage() {
  return (
    <ComingSoonTemplate
      title="مدل‌های کسب‌وکار و همکاری تجاری"
      englishTitle="Business Models & Partnerships"
      category="مدل‌های کسب‌وکار"
      categoryHref="/business-model"
      description="میکائیل با ارائه روش‌های همکاری مدرن، مانع سرمایه‌گذاری اولیه سنگین (CAPEX) را برطرف کرده و به مجموعه‌ها امکان پیاده‌سازی سریع ناوگان خودران بدون ریسک را می‌دهد."
      highlights={[
        {
          title: 'صفر کردن هزینه خرید اولیه (Zero CAPEX)',
          desc: 'تبدیل هزینه خرید ناوگان به اشتراک ماهانه عملیاتی (OPEX) و حذف بار سنگین مالی از سازمان.',
        },
        {
          title: 'پشتیبانی، بیمه و گارانتی کامل سخت‌افزار',
          desc: 'تعمیر، نگهداری و ارتقای نرم‌افزاری منظم ناوگان بر عهده تیم پشتیبانی اختصاصی میکائیل.',
        },
        {
          title: 'مدل‌های درآمدزایی مشارکتی',
          desc: 'تسهیم درآمد حاصل از اجاره ناوگان به مسافران و تبلیغات دیجیتال روی مانیتورها بین طرفین.',
        },
      ]}
      siblingLinks={[
        {
          label: 'جابجایی خودران به عنوان سرویس (AMaaS)',
          href: '/business-model/amaas',
          desc: 'سرویس اشتراکی جامع ناوگان، نرم‌افزار و پشتیبانی',
        },
        {
          label: 'اشتراک درآمد و سرمایه‌گذاری مشترک',
          href: '/business-model/revenue-sharing',
          desc: 'پلن‌های تسهیم سود در فضاهای پرتردد تجاری و تفریحی',
        },
        {
          label: 'درخواست دمو و پایلوت',
          href: '/contact/request-demo',
          desc: 'اجرای پایلوت آزمایشی رایگان در محل مجموعه شما',
        },
      ]}
    />
  );
}
