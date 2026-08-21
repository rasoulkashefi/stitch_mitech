import React from 'react';
import Link from 'next/link';

export default function LeadGenFooter() {
  return (
    <section className="w-full bg-slate-100 pt-24 pb-0 flex flex-col relative">
      
      {/* Lead Gen Form Section */}
      <div className="w-full px-4 md:px-8 max-w-4xl mx-auto mb-20 relative z-10">
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-200 p-8 md:p-14 flex flex-col gap-10">
          
          <div className="text-center flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              شروع تحول در مجموعه شما
            </h2>
            <p className="text-base md:text-lg text-slate-600">
              برای دریافت مشاوره تخصصی، بررسی زیرساخت و برنامه‌ریزی دمو، فرم زیر را تکمیل کنید.
            </p>
          </div>
          
          <form className="flex flex-col gap-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700" htmlFor="orgName">نام سازمان / شرکت</label>
                <input 
                  id="orgName"
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-medium"
                  placeholder="مثال: فرودگاه بین‌المللی..."
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700" htmlFor="email">ایمیل سازمانی</label>
                <input 
                  id="email"
                  type="email" 
                  dir="ltr"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-medium text-left"
                  placeholder="contact@company.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700" htmlFor="industry">حوزه فعالیت (صنعت)</label>
              <select 
                id="industry"
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-medium appearance-none"
                defaultValue=""
              >
                <option value="" disabled>نوع صنعت خود را انتخاب کنید...</option>
                <option value="airport">فرودگاه و پایانه‌های مسافربری</option>
                <option value="hospital">بیمارستان و مراکز درمانی بزرگ</option>
                <option value="mall">مجتمع‌های تجاری و مال‌ها</option>
                <option value="exhibition">نمایشگاه و مراکز رویداد</option>
                <option value="other">سایر موارد</option>
              </select>
            </div>

            <button 
              type="button" 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-[0_8px_20px_-5px_rgba(79,70,229,0.4)] hover:shadow-[0_8px_20px_-5px_rgba(79,70,229,0.6)] hover:-translate-y-0.5 mt-2"
            >
              ثبت درخواست ارزیابی فنی و تجاری
            </button>
            <p className="text-center text-xs text-slate-400 mt-2 font-medium">
              اطلاعات شما نزد ما محفوظ است و در سریع‌ترین زمان ممکن با شما تماس خواهیم گرفت.
            </p>
          </form>

        </div>
      </div>

      {/* Corporate Footer */}
      <footer className="w-full bg-slate-900 border-t border-slate-800 text-slate-300">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-2xl text-white">میتک</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href="#" className="text-sm font-medium hover:text-indigo-400 transition-colors">درباره ما</Link>
            <Link href="#" className="text-sm font-medium hover:text-indigo-400 transition-colors">مستندات فنی (API)</Link>
            <Link href="#" className="text-sm font-medium hover:text-indigo-400 transition-colors">فرصت‌های شغلی</Link>
            <Link href="#" className="text-sm font-medium hover:text-indigo-400 transition-colors">تماس با پشتیبانی</Link>
            <Link href="#" className="text-sm font-medium hover:text-indigo-400 transition-colors">حریم خصوصی</Link>
          </nav>
          
          <div className="text-sm font-medium text-slate-500">
            © ۲۰۲۶ میتک. تمامی حقوق محفوظ است.
          </div>
        </div>
      </footer>
    </section>
  );
}
