import React from 'react';

export default function ProductsShowcase() {
  const products = [
    {
      id: 'wheelchair',
      title: 'ویلچر برقی خودران',
      description: 'طراحی ارگونومیک با قابلیت مسیریابی خودکار و کنترل هوشمند از طریق اپلیکیشن موبایل.',
      image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // placeholder for wheelchair
    },
    {
      id: 'cargo-bot',
      title: 'ربات باربر تعقیب‌کننده',
      description: 'دستیار هوشمند برای حمل بارهای سنگین در محیط‌های فروشگاهی و فرودگاهی با قابلیت دنبال کردن کاربر.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // placeholder for robot
    },
    {
      id: 'smart-stroller',
      title: 'کالسکه هوشمند خانواده',
      description: 'ترکیبی از ایمنی و تکنولوژی برای حمل راحت کودکان و خریدها در مجتمع‌های تجاری بزرگ.',
      image: 'https://images.unsplash.com/photo-1544253303-34e872cffb4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // placeholder for stroller/family
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            محصولات هوشمند ام. آی. تک.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {products.map((product) => (
            <div key={product.id} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div 
                className="h-64 w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${product.image}')` }}
              ></div>
              <div className="p-8 flex flex-col flex-1 gap-4">
                <h3 className="text-2xl font-bold text-slate-800">{product.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed flex-1">
                  {product.description}
                </p>
                <button className="w-full mt-4 bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-bold py-3 rounded-xl transition-colors">
                  جزئیات و خرید
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
