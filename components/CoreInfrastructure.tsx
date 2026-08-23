import React from 'react';
import { Settings, Cpu, Activity } from 'lucide-react';

export default function CoreInfrastructure() {
  const infrastructure = [
    {
      id: 'wheelchair-controller',
      title: 'کنترلر ویلچر برقی',
      description: 'سیستم‌های کنترلی دقیق و قابل اطمینان برای انواع ویلچرهای برقی استاندارد با بالاترین ضریب ایمنی.',
      icon: Cpu,
    },
    {
      id: 'stair-climber',
      title: 'کنترلر پله‌پیما',
      description: 'تجهیزات هوشمند برای کنترل پله‌پیماهای مکانیزه جهت تسهیل تردد در ساختمان‌های فاقد آسانسور.',
      icon: Settings,
    },
    {
      id: 'rehab-equipment',
      title: 'تجهیزات توانبخشی',
      description: 'طراحی و تولید انواع بردهای کنترلی و سنسورهای حرکتی مخصوص تجهیزات پزشکی و توانبخشی.',
      icon: Activity,
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 flex flex-col gap-12">
        
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            زیرساخت‌ها و تجهیزات کنترلی
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            ام. آی. تک. به عنوان پیشگام در تولید زیرساخت‌های کنترلی، طیف وسیعی از تجهیزات پایه را برای تولیدکنندگان و مصرف‌کنندگان ارائه می‌دهد.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {infrastructure.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 flex flex-col gap-6 text-center items-center group"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-700 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
                <button className="mt-2 text-blue-700 font-bold hover:underline underline-offset-4">
                  اطلاعات بیشتر
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
