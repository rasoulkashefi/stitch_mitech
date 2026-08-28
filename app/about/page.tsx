import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'درباره شرکت دانش‌بنیان میکائیل | هوش و رباتیک خودران',
  description: 'پیشگام ایرانی در طراحی و ساخت سیستم‌های ناوبری خودران، ربات‌های هوشمند توانبخشی و راهکارهای حمل‌ونقل نوین شهری.',
};

export default function AboutPage() {
  return (
    <ComingSoonTemplate
      title="درباره فناوری هوشمند میکائیل"
      englishTitle="About Mitech Autonomous Robotics"
      category="درباره ما"
      categoryHref="/about"
      description="شرکت دانش‌بنیان فناوری هوشمند میکائیل با تیمی متشکل از نخبگان رباتیک، هوش مصنوعی و مهندسی پزشکی، مأموریت دارد آزادی حرکت، استقلال فردی و دسترسی برابر به فضاهای مدرن را برای همگان به ارمغان آورد."
      highlights={[
        {
          title: 'تحقیق و توسعه (R&D) بومی',
          desc: 'طراحی ۱۰۰٪ اختصاصی بردهای کنترلی، الگوریتم‌های ناوبری و سیستم‌های ایمنی منطبق بر استانداردهای جهانی.',
        },
        {
          title: 'مسئولیت اجتماعی و توانمندسازی',
          desc: 'تعهد عمیق به بازگرداندن کرامت و راحتی تردد به افراد دارای محدودیت‌های حرکتی و سالمندان.',
        },
        {
          title: 'نگاه به بازارهای منطقه‌ای و بین‌المللی',
          desc: 'توسعه محصولات با پتانسیل بالای صادراتی به کشورهای همسایه و حوزه خلیج فارس.',
        },
      ]}
      siblingLinks={[
        {
          label: 'تاریخچه و چشم‌انداز',
          href: '/about/history-vision',
          desc: 'مسیر شکل‌گیری میکائیل و افق‌های آینده شرکت',
        },
        {
          label: 'دیدگاه‌های صنعت در وبلاگ',
          href: '/blog/category/industry-insights',
          desc: 'مقالات تحلیلی تیم مهندسی درباره آینده رباتیک',
        },
        {
          label: 'درخواست همکاری و تماس',
          href: '/contact/sales',
          desc: 'فرصت‌های شغلی و شراکت‌های راهبردی',
        },
      ]}
    />
  );
}
