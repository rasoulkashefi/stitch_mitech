import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'اشتراک درآمد و سرمایه‌گذاری مشترک | میکائیل',
  description: 'مدل همکاری برد-برد جهت راه‌اندازی ناوگان خودران در مراکز تجاری، گردشگری و رفاهی بر پایه تقسیم عواید.',
};

export default function RevenueSharingPage() {
  return (
    <ComingSoonTemplate
      title="اشتراک درآمد و سرمایه‌گذاری مشترک"
      englishTitle="Revenue Sharing & Joint Ventures"
      category="مدل‌های کسب‌وکار"
      categoryHref="/business-model"
      description="مالکان و بهره‌برداران فضاهای پرتردد تجاری و تفریحی می‌توانند بدون هزینه سرمایه‌گذاری، میزبان ناوگان میکائیل شده و از درآمدهای اجاره، تبلیغات مانیتورینگ و بسته‌های اشتراکی مسافران سود مستقیم ببرند."
      highlights={[
        {
          title: 'درآمد پایدار و مستمر از فضای موجود',
          desc: 'تبدیل راهروها و فضاهای لابی به منبع درآمد جدید بدون تغییر در کاربری معماری مجموعه.',
        },
        {
          title: 'تسهیم خودکار و شفاف تراکنش‌ها',
          desc: 'داشبورد مالی اختصاصی با گزارش‌گیری زنده از مبالغ پرداخت‌شده توسط مسافران و سهم طرفین.',
        },
        {
          title: 'تبلیغات مکان‌محور هوشمند (In-Transit Ads)',
          desc: 'نمایش آگهی برندهای مستقر در مال روی تبلت‌های ناوگان در حین تردد و کسب سود مضاعف تبلیغاتی.',
        },
      ]}
      siblingLinks={[
        {
          label: 'جابجایی خودران به عنوان سرویس (AMaaS)',
          href: '/business-model/amaas',
          desc: 'طرح‌های اشتراکی سازمانی ناوگان',
        },
        {
          label: 'مجتمع‌های تجاری و مال‌ها',
          href: '/solutions/malls',
          desc: 'بررسی پتانسیل درآمدی در مراکز خرید',
        },
        {
          label: 'تماس با واحد توسعه تجاری',
          href: '/contact/sales',
          desc: 'دریافت پروپوزال و جلسه ارزیابی مالی پروژه',
        },
      ]}
    />
  );
}
