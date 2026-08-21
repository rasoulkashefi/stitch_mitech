import React from 'react';
import Image from 'next/image';

export default function FleetShowcase() {
  const fleet = [
    {
      id: 'family-stroller',
      title: 'کالسکه و سبد هوشمند خانواده',
      description: 'طراحی ویژه برای خانواده‌ها در مجتمع‌های تجاری جهت حمل همزمان کودک و خریدها به صورت کاملا هوشمند.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjo7gmS7bmM3fYUQPwZI7Su-ARjM3hnxt_ExWQw_KVK3QYgoPcXwF4K_eZbU-QJ-xfv2B66EQiU9g2Nrdslw8M7ek7qll2zuMgvH4zK1tVh0tD4cgiVPt-OwxECdlLTn3WeaHQUFWH9Uh07cy87L-BAKD7RPS34TwyV5UDWACclxS-BWMtjreOheHfai0Ry_OkksNKg_l8RMjfzpUY4FdqowDep7DWpIEt7DQTEq6-8qWsNX_FLfc48w',
    },
    {
      id: 'cargo-follower',
      title: 'ربات باربر تعقیب‌کننده',
      description: 'حمل بار مسافران در فرودگاه‌ها و ایستگاه‌ها با قابلیت تعقیب دقیق فرد بدون نیاز به کنترل دستی.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCR49HO5qNS23e4aEMMoDP69MrWwchO9xqtPULhoLqdipeINSDgKRqQNeiGEt9bWO4-CQGs--zS3i41TTjq8aPVhNl3YICKT65swLEmqzJy6yU42n3EjNuGs4UA7bAtv-rz2xnFuHjhw87ZfggK9fjPfc1KmlMy1ZWU9lsgdFTBpGUrO9XHMjQm1L7DSgaTgfhsQNaj83IFg0nALfz9kQX2qajbPntPVKN4Y2PWRxjjsHIVUasyZnrZ3A',
    },
    {
      id: 'wheelchair',
      title: 'ویلچر برقی خودران',
      description: 'حمل و نقل ایمن و مستقل توان‌یابان و سالمندان در فضاهای بزرگ با سیستم پیشگیری از برخورد و مسیریابی بهینه.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOEtXj6PVwgiFT3gchTih4kpt3CPk6W3SApnI_5_CNFqntlTMRZ2rH7DvbyYpCKz2mA0O2chmzzDROueuUHPTwQSlDuX1jZUhdtVOUHmiY2H2GLFicxmVGzbjSJAlVSmuKUnmP_SNHIkG9b29rCkQKEOZ2Iq2US33wnV37BdIkBcBzrahlSRKkfiQQa-jyoGrDdJ6lDtwxhpExYRS0QE3eeZWs8YdRiTZbrebOL8LEUWu5IeJhODYgGQ',
    },
    {
      id: 'smart-sofa',
      title: 'مبل هوشمند متحرک',
      description: 'تجربه‌ای لوکس و نوین برای جابجایی مهمانان ویژه (VIP) در نمایشگاه‌ها، لانژهای فرودگاهی و فضاهای خاص.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOEtXj6PVwgiFT3gchTih4kpt3CPk6W3SApnI_5_CNFqntlTMRZ2rH7DvbyYpCKz2mA0O2chmzzDROueuUHPTwQSlDuX1jZUhdtVOUHmiY2H2GLFicxmVGzbjSJAlVSmuKUnmP_SNHIkG9b29rCkQKEOZ2Iq2US33wnV37BdIkBcBzrahlSRKkfiQQa-jyoGrDdJ6lDtwxhpExYRS0QE3eeZWs8YdRiTZbrebOL8LEUWu5IeJhODYgGQ', // Using existing image as placeholder, can be replaced
    }
  ];

  return (
    <section className="bg-slate-900 w-full py-24 text-slate-100 overflow-hidden relative">
      {/* Decorative dark mode background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full px-4 md:px-8 max-w-[1440px] mx-auto flex flex-col gap-16 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-12 items-end justify-between">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <span className="text-indigo-400 font-bold text-sm uppercase tracking-wider">
              سخت‌افزارهای توانمندساز
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              ناوگان هوشمند؛ آماده برای هر ماموریت
            </h2>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed">
              تجهیزات سخت‌افزاری متنوع میتک، یکپارچه با پلتفرم ابری، پاسخی جامع به تمامی نیازهای جابجایی خرد (Micro-mobility) در فضاهای بسته و تجاری هستند.
            </p>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fleet.map((item) => (
            <div 
              key={item.id} 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
            >
              {/* Product Image Box */}
              <div className="w-full sm:w-32 h-40 sm:h-32 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 p-2 relative overflow-hidden group">
                {/* Fallback to normal img tag for simplicity and avoiding next/image host config issues */}
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-center h-full gap-3">
                <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-3 xl:gap-0">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  
                  {/* Telemetry Status Indicator */}
                  <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md shrink-0 w-fit">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                    </span>
                    <span className="text-emerald-400 text-xs font-bold">
                      سیستم ناوبری فعال
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
