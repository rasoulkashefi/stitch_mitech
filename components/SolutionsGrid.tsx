import React from 'react';
import { PlaneTakeoff, Hospital, ShoppingBag, Landmark, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function SolutionsGrid() {
  const solutions = [
    {
      id: 'airports',
      title: 'فرودگاه‌ها',
      description: 'هدایت خودمختار مسافران توان‌یاب از گیت ورودی تا نقطه پرواز. یکپارچگی با سیستم اطلاعات پرواز (FIDS) برای مسیریابی پویا.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGDAi9Ove0q__hBKVVo38A0WdDga41XmjmJm0SVHwKJL0MpRyDaohKTDbWkLypVVUmAjYeA_Y9T2PVWRHaNLHXob_ynMhNfqy-xr79szYdIDaKV9IY4N4dpPHUg4rj1A2oRugxe5qGbAP2Yz8aVZSSptb_WYH8gmmEc67h7XtUJkxWqqt8P-cEFdZiXofjEiUHAWHZSXggDZtq3dN0gC4THyXCrddVoiwQc6VoyjLODTHBSadICSqXuA',
      icon: PlaneTakeoff,
      link: '#',
    },
    {
      id: 'hospitals',
      title: 'مراکز درمانی',
      description: 'جابجایی ایمن بیماران بین بخش‌ها. تخصیص هوشمند ناوگان بر اساس اولویت اورژانس و کاهش ترافیک در راهروهای شلوغ.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnNWrV8b1QJrdI7SYptqeRSQo27-aI6XHp12nBI6gjj-h4Gt_7i_-iSIUOakhhie34Rm-Gbtc2POD_x8hZqo6--tME1z1SMYB-30EA-KuQLeF2Si5FfjhRfKg1j2ZS1S8L2wy47iilbO9KSssOzzV6f4ijT-H5CCpVRYAjpnd4xZNAtlIf1ZSWybheTyov3bTRJbTRdFyiEvvxYsypkMF9pHDI9Jiy4VUbh0nXiJABgo_Wa4Q7bFisaA',
      icon: Hospital,
      link: '#',
    },
    {
      id: 'malls',
      title: 'مجتمع‌های تجاری',
      description: 'ارتقای تجربه مشتری برای سالمندان. قابلیت مسیریابی به فروشگاه‌های خاص و امکان ادغام با اپلیکیشن‌های وفاداری مشتریان.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhA1o2VPNGasYtEHcqnwPxrp2d51QjUHY9QVFkv5C6niGmDsWLgdLVFV9HmTIjyHgo1PPMGXVE022OIKEjj6yi3gDRlwlJYwlW_eYxTNrxslo9fk0WUQ7JaP9ojXzZOY4e3z4ywMAXpdU1LIMEoYujRqT_XS-a17JVCLQGB3YRYT7NTeVOgI9wXk8fbUlPxUVy86y1mxbzYde5RsbVLDI_rpF10hCSMAVoLDSoeMsCHwkfqWk1-JoImw',
      icon: ShoppingBag,
      link: '#',
    },
    {
      id: 'tourism',
      title: 'مراکز گردشگری',
      description: 'تورهای صوتی هدایت‌شونده به صورت خودکار برای موزه‌ها و نمایشگاه‌ها. مدیریت جریان بازدیدکنندگان در فضاهای بزرگ.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZU5SoyYqYvMqWSy-H7gkZV6LNSUQTHZouvzRc4guCF8S3BpJxHJlASyIb1p6UzGYA_dqZM2B8VRGJGbmLAeAeWwTXR76dJQYf02lAgEGKxuJjAiz-gS3A1B0_eMpWgvKtvrJ4t51arsvuFHalNQD2G4DjTz83W5hMFroghK12ILwezlYIHUIMsp5r0gJEYPIFkpaXLV2-dkiZbyJNq7nfiylpHBNutm-vOCjoDFo4suWyhDE_Coo0VQ',
      icon: Landmark,
      link: '#',
    },
  ];

  return (
    <section className="bg-white w-full py-24 border-y border-slate-200">
      <div className="w-full px-4 md:px-8 max-w-[1440px] mx-auto flex flex-col gap-12">
        
        {/* Header & Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex flex-col gap-4 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              راهکارهای تخصصی صنایع
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              معماری نرم‌افزاری میتک به گونه‌ای طراحی شده است که با نیازمندی‌های منحصر‌به‌فرد فضاهای تجاری مختلف، یکپارچه شود.
            </p>
          </div>
          <button className="bg-transparent text-indigo-600 border border-indigo-600 hover:bg-indigo-50 px-6 py-2.5 rounded-lg transition-colors text-sm font-bold whitespace-nowrap">
            مشاهده همه راهکارها
          </button>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Image & Gradient */}
                <div
                  className="h-52 bg-cover bg-center w-full relative"
                  style={{ backgroundImage: `url('${item.imageUrl}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
                  
                  {/* Category Badge/Title over image */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <Icon className="text-white w-5 h-5" />
                    <span className="text-white text-lg font-bold">{item.title}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Link with hover animation */}
                  <Link
                    href={item.link}
                    className="text-indigo-600 text-sm font-bold flex items-center gap-1 mt-auto w-fit group-hover:gap-2 transition-all"
                  >
                    جزئیات بیشتر
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
