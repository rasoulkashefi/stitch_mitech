import type { Metadata } from 'next';
import ComingSoonTemplate from '@/components/ComingSoonTemplate';

export const metadata: Metadata = {
  title: 'راهکار فرودگاه‌ها و پایانه‌ها | میکائیل',
  description: 'سیستم‌های ترابری خودران مسافران CIP، توان‌خواهان و سالمندان در پایانه‌های فرودگاهی و راه‌آهن.',
};

export default function AirportsSolutionPage() {
  return (
    <ComingSoonTemplate
      title="فرودگاه‌ها و پایانه‌های مسافربری"
      englishTitle="Airports & Transportation Terminals"
      category="راهکارها"
      categoryHref="/solutions"
      description="پایانه‌های فرودگاهی به دلیل مسافت‌های طولانی میان گیت‌ها نیازمند ترابری روان هستند. میکائیل راهکار ناوگان خودران هدایت مستقیم به گیت پرواز با هماهنگی اطلاعات پروازی را فراهم می‌کند."
      highlights={[
        {
          title: 'اتصال به سیستم اطلاعات پرواز (FIDS)',
          desc: 'هدایت هوشمند مسافر مستقیم به گیت خروجی با محاسبه دقیق زمان و هشدار تغییر گیت.',
        },
        {
          title: 'خدمات ویژه توان‌خواهان (PRM Service)',
          desc: 'کاهش وابستگی به پرسنل اسکورت فرودگاهی و ارتقای چشمگیر کرامت و استقلال مسافر.',
        },
        {
          title: 'بازگشت خودران به دپو (Auto-Docking)',
          desc: 'پس از پیاده‌شدن مسافر در گیت، دستگاه به طور خودکار به نزدیک‌ترین داک شارژ بازمی‌گردد.',
        },
      ]}
      siblingLinks={[
        {
          label: 'مجتمع‌های تجاری و مال‌ها',
          href: '/solutions/malls',
          desc: 'راهکار حمل مراجعین در مجتمع‌های تجاری',
        },
        {
          label: 'مراکز درمانی و بیمارستان‌ها',
          href: '/solutions/healthcare',
          desc: 'جابجایی ایمن در محوطه درمانی و بیمارستانی',
        },
        {
          label: 'ویلچرهای هوشمند خودران',
          href: '/fleet/autonomous-wheelchairs',
          desc: 'مشاهده ناوگان ویلچرهای خودران فرودگاهی',
        },
        {
          label: 'ناوبری مستقل از GPS',
          href: '/technology/gps-independent-navigation',
          desc: 'تکنولوژی نقشه‌برداری و ناوبری سالن‌های سرپوشیده',
        },
      ]}
    />
  );
}
