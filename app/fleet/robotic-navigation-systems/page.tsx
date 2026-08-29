import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'سیستم‌های کنترل و ناوبری رباتیک | میکائیل',
  description: 'واحدهای مرکزی ناوبری خودران، بردهای سنسور فیوژن، کنترلرهای حرکت و پلتفرم‌های هوش مصنوعی رباتیک.',
};

export default function RoboticNavigationSystemsPage() {
  return (
    <ComingSoonTemplate
      title="سیستم‌های کنترل و ناوبری رباتیک"
      englishTitle="Robotic Navigation & Control Systems"
      category="محصولات و ناوگان"
      categoryHref="/fleet"
      description="پکیج جامع سخت‌افزاری و نرم‌افزاری ناوبری خودران جهت تجهیز ربات‌های AMR، AGV، چرخ‌دستی‌های صنعتی و پلتفرم‌های حمل بار به قابلیت‌های خودران پیشرفته و مستقل از GPS."
      highlights={[
        {
          title: 'کامپیوتر ناوبری لبه (Edge Navigation Unit) با پشتیبانی بومی ROS2',
          desc: 'پردازش همزمان نقشه‌برداری SLAM سه‌بعدی، تخمین موقعیت و برنامه‌ریزی بهینه مسیر با حداقل تأخیر در محیط‌های صنعتی و پرتردد.',
        },
        {
          title: 'سنسور فیوژن چندگانه و ایمنی فعال ۳۶۰ درجه',
          desc: 'ترکیب داده‌های لیدار، دوربین‌های تشخیص عمق، رادارهای اولتراسونیک و سنسورهای IMU جهت تشخیص دقیق موانع داینامیک و اشخاص.',
        },
        {
          title: 'کنترل حرکت چندمحوره و الگوریتم‌های ترمز اضطراری',
          desc: 'مدیریت دقیق فرمان‌پذیری (Differential / Omni-directional / Ackermann) همراه با استاندارد سطوح ایمنی صنعتی (SIL2/PLd).',
        },
      ]}
      siblingLinks={[
        {
          label: 'ربات‌های باربر تعقیب‌کننده (AMR)',
          href: '/fleet/following-amrs',
          desc: 'ربات‌های خودران حمل بار مبتنی بر ناوبری میکائیل',
        },
        {
          label: 'سیستم‌های کنترل و جویستیک توانبخشی',
          href: '/fleet/wheelchair-controllers',
          desc: 'کنترلرها و ماژول‌های فرمان توانبخشی',
        },
        {
          label: 'ناوبری مستقل از GPS',
          href: '/technology/gps-independent-navigation',
          desc: 'فناوری‌های نقشه‌برداری درون‌ساختمانی و SLAM',
        },
      ]}
    />
  );
}
