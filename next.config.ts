import type { NextConfig } from "next";

const legacyRedirects = [
  { source: "/portfolio", destination: "https://blog.mitech.ir/category/case-studies/", permanent: true },
  { source: "/modules", destination: "/technology/drives-and-positioning/", permanent: true },
  { source: "/specialist-repairs", destination: "/services/repairs/", permanent: true },
  { source: "/services/specialist-repairs", destination: "/services/repairs/", permanent: true },
  { source: "/driver-xpm", destination: "/fleet/wheelchair-controllers/", permanent: true },
  { source: "/expert-consultation", destination: "/contact/request-demo/", permanent: true },
  { source: "/stair-climber", destination: "/fleet/stair-climbers/", permanent: true },
  { source: "/contact-us", destination: "/contact/sales/", permanent: true },
  { source: "/product-category/product", destination: "/products/", permanent: true },
  { source: "/category/درایور-صنعتی", destination: "/technology/drives-and-positioning/", permanent: true },
  { source: "/product/ویلچر-برقی-یاماها", destination: "/blog/electric-wheelchair/buying-guide/", permanent: true },
  { source: "/blogs", destination: "/blog/", permanent: true },
  { source: "/category/electric-wheelchair/page/2", destination: "/blog/electric-wheelchair/", permanent: true },
  { source: "/product/ربات-شستشوی-پنل-خورشیدی", destination: "/technology/drives-and-positioning/", permanent: true },
  { source: "/product-category/product/industrial-_-robotics", destination: "/fleet/", permanent: true },
  { source: "/product/ویلچر-برقی-مبله-آمریکایی-imc", destination: "/blog/electric-wheelchair/buying-guide/", permanent: true },
  { source: "/shop/page/3", destination: "/products/", permanent: true },
  { source: "/product/ویلچر-برقی-تاشو-بتا-۲۵", destination: "/blog/electric-wheelchair/buying-guide/", permanent: true },
  { source: "/product/قیمت-ویلچر-برقی-دست-دوم", destination: "/blog/used-electric-wheelchair", permanent: true },
  { source: "/product-category/product/medicine-_-rehabilitation", destination: "/fleet/autonomous-wheelchairs/", permanent: true },
  { source: "/product/کاور-ضد-آب-ویلچر-برقی", destination: "/blog/electric-wheelchair/accessories/", permanent: true },
  { source: "/product/کنترلر-پله-پیما-artech-lift-300", destination: "/blog/stairlift/", permanent: true },
  { source: "/blogs/تعمیر-و-نگهداری-از-ویلچر-برقی", destination: "/blog/electric-wheelchair/maintenance/", permanent: true },
  { source: "/product-category/product/medicine-_-rehabilitation/accessories", destination: "/blog/electric-wheelchair/accessories/", permanent: true },
  { source: "/product-category/medicine-_-rehabilitation/custom-module", destination: "/contact/request-demo/", permanent: true },
  { source: "/blogs/لیست-وبلاگ-های-شرکت-فناوری-هوشمند-میکا", destination: "/blog/category/company-news", permanent: true },
  { source: "/blog/category", destination: "/blog", permanent: true },
  { source: "/blog/company-news", destination: "/blog/category/company-news", permanent: true },
  { source: "/blog/category/case-studies", destination: "/blog/case-studies", permanent: true },
  { source: "/blog/industry-insights", destination: "/blog/category/industry-insights", permanent: true },
  { source: "/blog/electric-wheelchair/used", destination: "/blog/used-electric-wheelchair", permanent: true },
  { source: "/blog/electric-wheelchair/repair", destination: "/services/repairs", permanent: true },
  { source: "/blog/robotics/motor-drives", destination: "/fleet/wheelchair-controllers", permanent: true },
  { source: "/parts", destination: "/products", permanent: true },
  { source: "/quantom", destination: "/technology", permanent: true },
  { source: "/product-category/product/medicine-_-rehabilitation/page/2", destination: "/fleet/", permanent: true },
  { source: "/product-category/product/medicine-_-rehabilitation/electric-wheelchair", destination: "/fleet/autonomous-wheelchairs/", permanent: true },
  { source: "/product-category/industrial-_-robotics/solar-panel-wash", destination: "/technology/drives-and-positioning/", permanent: true },
  { source: "/blogs/کنترلر-،-جویستیک-و-درایور-ویلچر-برقی", destination: "/fleet/wheelchair-controllers/", permanent: true },
  { source: "/blogs/انتخاب-بهترین-ویلچر-برای-افراد-ضایعه-ن", destination: "/blog/electric-wheelchair/buying-guide/", permanent: true },
  { source: "/product/درایور-و-جوی-استیک-ویلچر-برقی-میکائیل-م", destination: "/fleet/wheelchair-controllers/", permanent: true },
  { source: "/product-category/product/medicine-_-rehabilitation/stair-lift-controller", destination: "/technology/drives-and-positioning/", permanent: true },
  { source: "/portfolio/leo-uteu-ullamcorper", destination: "/blog/case-studies/", permanent: true },
  { source: "/electric-wheelchair", destination: "/fleet/autonomous-wheelchairs/", permanent: true },
  { source: "/mobile-robots", destination: "/fleet/", permanent: true },
  { source: "/custom_design", destination: "/contact/request-demo/", permanent: true },
  { source: "/life-with-michael", destination: "https://blog.mitech.ir/category/case-studies/", permanent: true },
  { source: "/about-us", destination: "/about/history-vision/", permanent: true },
  { source: "/category/news", destination: "https://blog.mitech.ir/category/company-news/", permanent: true },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return legacyRedirects.map((rule) => ({
      source: encodeURI(rule.source),
      destination: rule.destination.startsWith("http") ? rule.destination : encodeURI(rule.destination),
      permanent: rule.permanent,
    }));
  },
};

export default nextConfig;
