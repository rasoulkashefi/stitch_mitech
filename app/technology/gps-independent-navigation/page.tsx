import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'ناوبری مستقل از GPS | فناوری میکائیل',
  description: 'فناوری‌های پیشرفته Visual SLAM و LiDAR SLAM برای موقعیت‌یابی و مسیریابی دقیق در محیط‌های سرپوشیده و فاقد سیگنال ماهواره‌ای.',
};

export default function GpsIndependentNavigationPage() {
  return (
    <ComingSoonTemplate
      title="ناوبری مستقل از GPS"
      englishTitle="GPS-Independent & Indoor Navigation"
      category="فناوری"
      categoryHref="/technology"
      description="در محیط‌های بسته مانند فرودگاه‌ها، مراکز تجاری و بیمارستان‌ها، سیگنال GPS غیرقابل اتکاست. فناوری ناوبری اختصاصی میکائیل با ترکیب بینایی ماشین، لایدار و اودومتری، موقعیت‌یابی زیر ۵ سانتی‌متر را امکان‌پذیر می‌سازد."
      highlights={[
        {
          title: 'الگوریتم‌های تطبیقی SLAM سه‌بعدی',
          desc: 'ساخت نقشه دقیق از محیط در اولین تردد و به‌روزرسانی مستمر نقشه با تغییر چیدمان محیط.',
        },
        {
          title: 'تشخیص دینامیک موانع متحرک',
          desc: 'تفکیک انسان‌ها، چرخ‌دستی‌ها و موانع متحرک از موانع ثابت و پیش‌بینی مسیر حرکت آن‌ها.',
        },
        {
          title: 'قابلیت کار در شرایط نوری مختلف',
          desc: 'ترکیب دوربین‌های سنجش عمق با لایدار برای کارکرد بدون افت در تاریکی مطلق یا نور مستقیم خورشید.',
        },
      ]}
      siblingLinks={[
        {
          label: 'سیستم‌های پیشران و موقعیت‌یابی',
          href: '/technology/drives-and-positioning',
          desc: 'کنترلرهای حرکت و درایورهای موتور',
        },
        {
          label: 'پلتفرم دوقلوی دیجیتال',
          href: '/technology/digital-twin-platform',
          desc: 'نمایش سه‌بعدی موقعیت ناوگان بر بستر نقشه',
        },
        {
          label: 'فرودگاه‌ها و پایانه‌ها',
          href: '/solutions/airports',
          desc: 'پیاده‌سازی ناوبری در ابعاد بزرگ فرودگاهی',
        },
      ]}
    />
  );
}
