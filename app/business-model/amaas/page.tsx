import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'جابجایی خودران به عنوان سرویس (AMaaS) | میکائیل',
  description: 'مدل جامع Autonomous Mobility as a Service؛ ناوگان رباتیک، نرم‌افزار مدیریت، نگهداری و بیمه در قالب یک اشتراک منظم.',
};

export default function AmaasPage() {
  return (
    <ComingSoonTemplate
      title="جابجایی خودران به عنوان سرویس (AMaaS)"
      englishTitle="Autonomous Mobility as a Service (AMaaS)"
      category="مدل‌های کسب‌وکار"
      categoryHref="/business-model"
      description="با مدل AMaaS، نیازی به خرید قطعی ربات‌ها یا استخدام تیم مهندسی ندارید. میکائیل ناوگان، ایستگاه‌های شارژ، پلتفرم نرم‌افزاری و خدمات نگهداری دوره‌ای را در یک بسته اشتراکی ارائه می‌دهد."
      highlights={[
        {
          title: 'ناوگان همیشه آماده به کار (۹۹.۹٪ Uptime)',
          desc: 'تعویض سریع وسیله در صورت بروز نقص فنی توسط تیم خدمات مقیم یا پشتیبان.',
        },
        {
          title: 'به‌روزرسانی پیوسته نرم‌افزاری و هوش مصنوعی',
          desc: 'دریافت آخرین آپدیت‌های ناوبری، نقشه و قابلیت‌های امنیتی از طریق اینترنت (OTA).',
        },
        {
          title: 'مقیاس‌پذیری منعطف متناسب با فصل و مناسبت‌ها',
          desc: 'امکان افزایش یا کاهش تعداد ناوگان در ایام عید، جشنواره‌های خرید و رویدادهای ویژه.',
        },
      ]}
      siblingLinks={[
        {
          label: 'اشتراک درآمد و سرمایه‌گذاری مشترک',
          href: '/business-model/revenue-sharing',
          desc: 'مدل‌های مشارکتی درآمدزایی در مال‌ها و پایانه‌ها',
        },
        {
          label: 'پلتفرم دوقلوی دیجیتال',
          href: '/technology/digital-twin-platform',
          desc: 'پنل مدیریتی ابری ویژه مشترکین AMaaS',
        },
        {
          label: 'درخواست دمو و پایلوت',
          href: '/contact/request-demo',
          desc: 'سفارش پایلوت برای مجتمع یا سازمان',
        },
      ]}
    />
  );
}
