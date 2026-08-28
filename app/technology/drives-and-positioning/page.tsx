import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'سیستم‌های پیشران و موقعیت‌یابی دقیق | فناوری میکائیل',
  description: 'درایورهای موتور براشلس (BLDC)، انکودرهای با رزولوشن بالا و سیستم‌های کنترل حرکت بهینه‌سازی‌شده برای رباتیک توانبخشی.',
};

export default function DrivesAndPositioningPage() {
  return (
    <ComingSoonTemplate
      title="سیستم‌های پیشران و موقعیت‌یابی دقیق"
      englishTitle="Drives, Actuators & Precision Positioning"
      category="فناوری"
      categoryHref="/technology"
      description="میکائیل طراح و تولیدکننده سخت‌افزارهای پیشران الکتریکی با گشتاور بالا، درایورهای موتور میکروپروسسوری و سنسورهای زاویه‌ای دقیق با بالاترین راندمان مصرف انرژی است."
      highlights={[
        {
          title: 'کنترل FOC (Field-Oriented Control)',
          desc: 'کنترل برداری شار مغناطیسی موتورها برای عملکرد کاملا بی‌صدا و حرکات فوق‌العاده نرم.',
        },
        {
          title: 'مدیریت هوشمند مصرف توان و بازیابی انرژی (KERS)',
          desc: 'بازیابی انرژی در هنگام ترمزگیری و افزایش پیمایش باتری تا ۱۸ درصد در هر سیکل شارژ.',
        },
        {
          title: 'طراحی مقاوم و عایق‌بندی صنعتی',
          desc: 'استاندارد مقاومت در برابر پاشش آب و گردوغبار و سازگاری با شرایط آب‌وهوایی متنوع.',
        },
      ]}
      siblingLinks={[
        {
          label: 'ناوبری مستقل از GPS',
          href: '/technology/gps-independent-navigation',
          desc: 'الگوریتم‌های موقعیت‌یابی درون‌ساختمانی',
        },
        {
          label: 'پلتفرم دوقلوی دیجیتال',
          href: '/technology/digital-twin-platform',
          desc: 'تحلیل داده‌های حرکتی و عیب‌یابی آنلاین',
        },
        {
          label: 'ویلچرهای خودران',
          href: '/fleet/autonomous-wheelchairs',
          desc: 'کاربرد پیشران‌های هوشمند در ویلچرها',
        },
      ]}
    />
  );
}
