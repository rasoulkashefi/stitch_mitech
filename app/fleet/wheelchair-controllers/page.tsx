import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'سیستم‌های کنترل و جویستیک توانبخشی | میکائیل',
  description: 'جویستیک و کنترلر فرمان انواع ویلچر برقی، ماژول‌های کمکی توانبخشی و درایورهای هوشمند حرکتی.',
};

export default function WheelchairControllersPage() {
  return (
    <ComingSoonTemplate
      title="سیستم‌های کنترل و جویستیک توانبخشی"
      englishTitle="Wheelchair & Mobility Controllers"
      category="محصولات و ناوگان"
      categoryHref="/fleet"
      description="تولید تخصصی انواع جوی‌استیک‌های ارگونومیک، کنترلرهای فرمان ویلچر برقی، درایورهای میکروکنترلری پیشرفته و سیستم‌های کمکی حرکت برای توان‌یابان و مراکز درمانی."
      highlights={[
        {
          title: 'جوی‌استیک ارگونومیک ۳۶۰ درجه با فیدبک هپتیک',
          desc: 'کنترل دقیق و بدون لغزش با رزولوشن بالا، قابلیت تنظیم ناحیه مرده (Deadband) و پاسخ‌دهی خطی متناسب با توانایی دست توان‌یاب.',
        },
        {
          title: 'درایور هوشمند موتورهای DC و براشلس (BLDC)',
          desc: 'کنترل نرم شتاب‌گیری و ترمز هوشمند ضدلغزش در سراشیبی‌ها با محافظت کامل در برابر جریان اضافه و داغ شدن موتور.',
        },
        {
          title: 'قابلیت شخصی‌سازی پروفایل‌های حرکتی و اتصال ابری',
          desc: 'امکان تعریف چند پروفایل رانندگی (داخل منزل، فضای باز، سرعت آهسته) و ارسال داده‌های سلامت سیستم به اپلیکیشن همراه.',
        },
      ]}
      siblingLinks={[
        {
          label: 'ویلچرهای برقی و خودران',
          href: '/fleet/autonomous-wheelchairs',
          desc: 'ویلچرهای نسل جدید مجهز به ناوبری هوشمند',
        },
        {
          label: 'سیستم‌های کنترل و ناوبری رباتیک',
          href: '/fleet/robotic-navigation-systems',
          desc: 'کنترلرها و ماژول‌های ناوبری خودران',
        },
        {
          label: 'سیستم‌های پیشران و موقعیت‌یابی',
          href: '/technology/drives-and-positioning',
          desc: 'درایورهای صنعتی و موتورهای توان بالا',
        },
      ]}
    />
  );
}
