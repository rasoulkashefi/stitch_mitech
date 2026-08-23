import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function SimpleLeadGen() {
  return (
    <section className="w-full bg-slate-50 pt-24 pb-0 flex flex-col relative">
      <div className="w-full px-4 md:px-8 max-w-[1440px] mx-auto mb-20">
        
        <div className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info Side */}
          <div className="w-full lg:w-1/3 bg-blue-700 text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4">با ما در ارتباط باشید</h3>
              <p className="text-blue-100 mb-10 leading-relaxed">
                برای دریافت مشاوره خرید محصولات یا درخواست خدمات سازمانی، با کارشناسان ما تماس بگیرید.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-200" />
                  <span className="font-medium" dir="ltr">۰۲۱ - ۸۸۸۸ ۸۸۸۸</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-200" />
                  <span className="font-medium">info@mitech.ir</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-200 shrink-0" />
                  <span className="font-medium leading-relaxed">تهران، پارک فناوری پردیس، ساختمان نوآوری</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-2/3 p-10 md:p-14">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">فرم درخواست تماس</h3>
            <form className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700" htmlFor="name">نام و نام خانوادگی / نام سازمان</label>
                  <input 
                    id="name"
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700" htmlFor="phone">شماره تماس</label>
                  <input 
                    id="phone"
                    type="tel" 
                    dir="ltr"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-left"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700" htmlFor="subject">موضوع درخواست</label>
                <select 
                  id="subject"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>انتخاب کنید...</option>
                  <option value="buy">خرید محصولات (ویلچر، کالسکه و ...)</option>
                  <option value="b2b">خدمات حمل‌ونقل خودران سازمانی (فرودگاه‌ها، مجتمع‌ها)</option>
                  <option value="parts">خرید قطعات و کنترلرها</option>
                  <option value="other">سایر موارد</option>
                </select>
              </div>

              <button 
                type="button" 
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-md hover:shadow-lg mt-4"
              >
                ارسال درخواست
              </button>
              
            </form>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="w-full bg-white border-t border-slate-200 text-slate-600">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xl text-blue-700">ام. آی. تک.</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href="#" className="text-sm font-medium hover:text-blue-700 transition-colors">درباره ما</Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-700 transition-colors">محصولات</Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-700 transition-colors">خدمات خودران</Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-700 transition-colors">ارتباط با ما</Link>
          </nav>
          
          <div className="text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} ام. آی. تک. تمامی حقوق محفوظ است.
          </div>
        </div>
      </footer>
    </section>
  );
}
