import React from 'react';
import { Camera, Compass, Gauge, ShieldAlert } from 'lucide-react';

const workflowSteps = [
  {
    stepNumber: '01',
    icon: Camera,
    title: 'شناسایی بصری والدین (Visual Pairing)',
    subtitle: 'عدم نیاز به دستبند یا ریموت فیزیکی',
    description:
      'دوربین‌های بینایی ماشین و الگوریتم‌های ردیابی اسکلت بدن (Skeleton Tracking)، والدین را بدون نیاز به دستبند، تگ فیزیکی یا اتصال بلوتوثی در چند ثانیه شناسایی و دنبال می‌کنند.',
  },
  {
    stepNumber: '02',
    icon: Compass,
    title: 'حرکت ایمن در جلو (In-Sight Forward Cruising)',
    subtitle: 'حفظ فاصله استاندارد ۱ تا ۱.۵ متر',
    description:
      'کالسکه با فاصله معین و ثابت، همواره دقیقاً جلوتر از گام‌های والدین حرکت می‌کند تا فرزند در تمام طول مسیر در زاویه دید مستقیم چشم مادر و پدر باشد.',
  },
  {
    stepNumber: '03',
    icon: Gauge,
    title: 'تطبیق سرعت خودکار (Adaptive Speed)',
    subtitle: 'همگام‌سازی بی‌درنگ با ریتم راه رفتن',
    description:
      'با ایستادن والدین در برابر ویترین، کاهش سرعت قدم‌ها یا چرخش به سمت مغازه‌ها، کالسکه به نرمی سرعت و جهت خود را با حرکات والدین هماهنگ می‌سازد.',
  },
  {
    stepNumber: '04',
    icon: ShieldAlert,
    title: 'توقف خودکار اضطراری (True Obstacle Avoidance)',
    subtitle: 'ترمز الکترومغناطیسی در کمتر از ۰.۱ ثانیه',
    description:
      'در صورت تردد ناگهانی عابران، دویدن کودکان دیگر یا وجود مانع در مسیر، ترمز فعال هوشمند مانع از هرگونه برخورد شده و کالسکه در کسری از ثانیه متوقف می‌گردد.',
  },
];

export default function LeadingPacingWorkflow() {
  return (
    <section id="workflow" className="bg-white px-6 py-28 lg:py-32" dir="rtl">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20 max-w-2xl text-right">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-600">
            نحوه عملکرد و هوشمندی حرکتی • Pacing & Leading Workflow
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 lg:text-5xl leading-tight tracking-tight">
            حرکت پیشرو در دید والدین،
            <br />
            <span className="text-slate-400">در ۴ گام بدون دغدغه.</span>
          </h2>
        </div>

        {/* 4-Step Linear Columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.stepNumber}
                className="border-t-2 border-slate-900 pt-8 flex flex-col justify-between text-right group hover:border-emerald-600 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-slate-300 group-hover:text-emerald-600 transition-colors">
                      {step.stepNumber}
                    </span>
                    <div className="grid size-9 place-items-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                      <Icon size={18} />
                    </div>
                  </div>

                  <span className="text-xs font-bold text-emerald-600 block mb-2">
                    {step.subtitle}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-medium text-slate-400">
                  <span>چرخه هوشمند پیشرو</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
