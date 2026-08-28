import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'ربات‌های باربر تعقیب‌کننده (Following AMRs) | میکائیل',
  description: 'ربات‌های خودران هوشمند حمل بار با قابلیت دنبال‌کردن خودکار فرد و حمل بارهای سنگین.',
};

export default function FollowingAmrsPage() {
  return (
    <ComingSoonTemplate
      title="ربات‌های باربر تعقیب‌کننده"
      englishTitle="Autonomous Following Cargo AMRs"
      category="ناوگان"
      categoryHref="/fleet"
      description="دستیار هوشمند لجستیک فردی و سازمانی. این ربات‌ها با استفاده از بینایی ماشین و سنسورهای ردیابی، کاربر خود را به صورت هوشمند دنبال کرده و بارهای سنگین را جابجا می‌کنند."
      highlights={[
        {
          title: 'ردیابی بصری با هوش مصنوعی (AI Visual Tracking)',
          desc: 'قفل شدن روی کاربر بدون نیاز به فرستنده فیزیکی و با قابلیت تشخیص فرد حتی در محیط‌های شلوغ.',
        },
        {
          title: 'ظرفیت بارگیری بالا تا ۱۵۰ کیلوگرم',
          desc: 'شاسی فولادی تقویت‌شده و موتورهای قدرتمند براشلس مناسب کاربری فرودگاهی، هتل‌ها و بیمارستان‌ها.',
        },
        {
          title: 'قابلیت کار گروهی و اعزام به نقاط مشخص',
          desc: 'امکان برنامه‌ریزی برای حرکت خودکار در مسیرهای ثابت یا بازگشت به ایستگاه مرکزی تخلیه بار.',
        },
      ]}
      siblingLinks={[
        {
          label: 'ویلچرهای خودران',
          href: '/fleet/autonomous-wheelchairs',
          desc: 'ویلچرهای هوشمند با رانش خودکار',
        },
        {
          label: 'پلتفرم دوقلوی دیجیتال',
          href: '/technology/digital-twin-platform',
          desc: 'مدیریت متمرکز ناوگان ربات‌های AMR',
        },
        {
          label: 'راهکار مراکز درمانی و بیمارستان‌ها',
          href: '/solutions/healthcare',
          desc: 'لجستیک هوشمند دارو و تجهیزات پزشکی',
        },
      ]}
    />
  );
}
