import React from 'react';
import {
  Bot,
  Truck,
  Baby,
  Armchair,
  Sliders,
  Radar,
} from 'lucide-react';

export interface ProductItem {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  category: string;
  tag: 'B2C' | 'B2B' | 'B2C / B2B';
  icon: React.ComponentType<{ className?: string; strokeWidth?: number; size?: number }>;
  tone: 'mint' | 'blue' | 'peach' | 'lavender' | 'sand' | 'sky';
  specs: string[];
  href: string;
}

export const fleetCategories = [
  'همه محصولات',
  'وسایل نقلیه خودران',
  'ربات‌های لجستیک',
  'سیستم‌های کنترل و زیرساخت',
] as const;

export const fleetProducts: ProductItem[] = [
  {
    id: 'wheelchair',
    title: 'ویلچر برقی خودران و هوشمند',
    englishTitle: 'Autonomous Smart Wheelchair',
    description: 'ناوبری هوشمند در فضاهای پرتردد با سنسور ۳۶۰ درجه، هوش مصنوعی و هدایت خودکار بدون نیاز به دخالت کاربر.',
    category: 'وسایل نقلیه خودران',
    tag: 'B2C / B2B',
    icon: Bot,
    tone: 'mint',
    specs: ['سنسور ۳۶۰° LiDAR', 'سیستم ضدبرخورد ایمن', 'بازگشت خودکار به داک'],
    href: '/fleet/autonomous-wheelchairs',
  },
  {
    id: 'amr',
    title: 'ربات باربر تعقیب‌کننده (AMR)',
    englishTitle: 'Human-Following Logistics AMR',
    description: 'حمل هوشمند بار و چمدان با قابلیت بینایی ماشین، تشخیص چهره و امکان اتصال کاروانی در انبارها و فرودگاه‌ها.',
    category: 'ربات‌های لجستیک',
    tag: 'B2B',
    icon: Truck,
    tone: 'blue',
    specs: ['ظرفیت ۱۰۰+ کیلوگرم', 'فرمان ژست حرکتی دست', 'اتصال کاروانی هوشمند'],
    href: '/fleet/following-amrs',
  },
  {
    id: 'cart',
    title: 'کالسکه هوشمند خانواده',
    englishTitle: 'Smart Family Stroller Cart',
    description: 'تجربه‌ای شاد و ایمن در مجتمع‌های تجاری با رانش کمکی، نقشه تعاملی مال و سیستم ترمز ضدسقوط هوشمند.',
    category: 'وسایل نقلیه خودران',
    tag: 'B2C',
    icon: Baby,
    tone: 'peach',
    specs: ['موتور کمکی شیب‌سنج', 'تبلت ناوبری و تخفیف‌ها', 'صندلی ارگونومیک کودک'],
    href: '/fleet/smart-family-carts',
  },
  {
    id: 'sofa',
    title: 'مبل هوشمند سیار',
    englishTitle: 'Smart Mobile VIP Sofa',
    description: 'مبلمان متحرک و لوکس برای همراهی بدون خستگی سالمندان و همراهان در مال‌ها، موزه‌ها و فضاهای VIP.',
    category: 'وسایل نقلیه خودران',
    tag: 'B2B',
    icon: Armchair,
    tone: 'lavender',
    specs: ['نشیمن مخمل ارگونومیک', 'حرکت بسیار نرم و بی‌صدا', 'سنسور تشخیص مانع'],
    href: '/fleet/smart-mobile-sofas',
  },
  {
    id: 'controller',
    title: 'کنترلر و جویستیک توانبخشی',
    englishTitle: 'Rehab Mobility Controller & Joystick',
    description: 'مغز متفکر انواع ویلچر و تجهیزات کمکی با ارگونومی بی‌نقص، فیدبک هپتیک و درایورهای میکروپروسسوری پیشرفته.',
    category: 'سیستم‌های کنترل و زیرساخت',
    tag: 'B2C / B2B',
    icon: Sliders,
    tone: 'sand',
    specs: ['رزولوشن فوق‌دقیق ۳۶۰°', 'درایور پرقدرت BLDC', 'پروفایل‌های رانندگی مجزا'],
    href: '/fleet/wheelchair-controllers',
  },
  {
    id: 'nav',
    title: 'سیستم‌های ناوبری رباتیک',
    englishTitle: 'Robotic Navigation & SLAM Unit',
    description: 'زیرساخت پردازش تصویر، سنسور فیوژن و نقشه‌برداری داخلی برای تبدیل تجهیزات سنتی به پلتفرم‌های خودران.',
    category: 'سیستم‌های کنترل و زیرساخت',
    tag: 'B2B',
    icon: Radar,
    tone: 'sky',
    specs: ['دقت موقعیت‌یابی <۲cm', 'مستقل از سیگنال GPS', 'ارتباط ابری Fleet OS'],
    href: '/fleet/robotic-navigation-systems',
  },
];
