---
name: mitech-content-publisher
description: >-
  Creates, SEO/GEO-optimizes, visually enriches, and publishes enterprise-grade blog articles
  for MiTech directly to Sanity Studio. Supports custom rich blocks (H2, H3, callout, stat card,
  table, FAQ accordion, key takeaways) and native image generation. Use whenever the user asks
  to write, generate, or publish a blog article for MiTech.
---

# Mitech Autonomous Mobility & Robotics Content Publisher

This skill equips the agent to write authoritative, enterprise-grade engineering articles and automatically publish them to Sanity Studio matching the exact Mitech brand standards.

## 1. Brand Identity & Voice (Strict Constraints)
- **Brand**: شرکت دانش‌بنیان فناوری هوشمند میکائیل (Mitech / ام. آی. تک.)
- **Tone**: اقتدار مهندسی، صداقت علمی، شفافیت در ارائه مشخصات، بدون لفاظی‌های کلیشه‌ای هوش مصنوعی (مانند «در دنیای پرشتاب امروز...»).
- **Target Audience**:
  1. مدیران سازمان‌ها، فرودگاه‌ها، مراکز درمانی و مال‌ها (B2B AMaaS)
  2. خانواده‌ها و توان‌یابان نیازمند تجهیزات پیشرفته موبیلیتی و خدمات تخصصی (B2C)
- **Palette Association**: Dark Slate (`#0F172A`), Emerald Green (`#059669` / `#10B981`), Titanium Grey.

---

## 2. The 8-Section Article Architecture

Every article must be structured in Markdown adhering strictly to these 8 sections:

```markdown
# ۱. عنوان اصلی مقاله (Post Title)
[عنوان جذاب، مهندسی و متناسب با سئو، بین ۴۰ تا ۷۵ کاراکتر]

# ۲. نامک پیوند یکتا (Slug / URL Segment)
[اسلاگ انگلیسی دقیق و تمیز، مثلاً electric-wheelchair/used یا stairlift]

# ۳. چکیده و لید مقاله (Excerpt / Lead)
[خلاصه ۱ تا ۲ جمله‌ای جذاب و ارزش‌آفرین، بین ۸۰ تا ۱۶۰ کاراکتر]

# ۴. تصویر شاخص و کاور مقاله
- **متن جایگزین تصویر شاخص (Alt Text):** [توضیح فارسی دقیق تصویر برای سئو و دسترسی‌پذیری]
- **کپشن یا عکاس/منبع تصویر:** تصویرسازی اختصاصی تیم توسعه و پژوهش میکائیل

# ۵. بهینه‌سازی برای موتورهای جستجو (SEO Suite)
- **عنوان سئو (Meta Title):** [عنوان کوتاه و جذاب سئو همراه با | میکائیل]
- **توضیحات متا (Meta Description):** [توضیحات غنی بین ۱۲۰ تا ۱۵۵ کاراکتر شامل کلمات کلیدی]
- **آدرس کانونیکال اختصاصی:** خالی
- **عدم ایندکس (noindex):** خیر
- **تصویر اختصاصی سوشال (OG Image Alt Text):** [متن جایگزین تصویر اشتراک‌گذاری]

# ۶. بهینه‌سازی برای هوش مصنوعی (GEO & AI Engine)
- **خلاصه مستقیم برای هوش مصنوعی (AI Quick Answer / TL;DR):** [پاسخ صریح و موجز ۲ تا ۳ خطی برای موتورهای هوش مصنوعی مانند ChatGPT و Perplexity]
- **نیت جستجوی مخاطب (Search Intent):** [اطلاعاتی، تجاری، مقایسه‌ای یا تراکنشی]
- **موجودیت یا کلیدواژه کانونی (Primary Entity / Focus Keyword):** [کلمه کلیدی اصلی]
- **کلمات کلیدی معنایی و مفاهیم مرتبط (LSI & Semantic Entities):** [لیست کلمات LSI جدا شده با کاما]
- **پرسش‌های هدف که این مقاله پاسخ می‌دهد (Target User Questions / RAG):**
  1. [پرسش اول]
  2. [پرسش دوم]
  3. [پرسش سوم]
- **توضیحات جایگزین تصاویر تولیدی (Generated Image Alt Texts):**
  1. [متن جایگزین تصویر اول]
  2. [متن جایگزین تصویر دوم]

# ۷. تنظیمات انتشار و ساختار
- **وضعیت گردش کار محتوا:** 🟢 منتشر شده و لایو در سایت (Published)
- **مقاله برگزیده (Featured):** خیر
- **دسته‌بندی تخصصی:** [یکی از گزینه‌های: مطالعات موردی | دیدگاه‌های صنعت | اخبار شرکت | دانشنامه و مقالات ویلچر برقی | فناوری رباتیک]
- **برچسب‌ها و کلمات کلیدی (Tags):** [تگ‌های جداشده با ویرگول]

# ۸. متن تفصیلی و بدنه تعاملی (Rich Article Body)
[متن غنی با نشانگرهای تعاملی زیر]
```

---

## 3. Interactive Block Grammar in Body (Section 8)

The body must use these exact markers for interactive components:

1. **هدینگ‌ها:**  
   `[H2] عنوان سرفصل اصلی`  
   `[H3] زیرعنوان بخش`
2. **کادر توجه / پیام (Callout):**  
   ```markdown
   [CALLOUT: tip] (یا info یا warning)
   متن پیام یا توصیه مهم فنی...
   ```
3. **کارت شاخص آماری (Stat Card):**  
   ```markdown
   [STAT CARD]
   - **عدد / شاخص:** کمتر از ۲٪ در ۴ متر
   - **عنوان شاخص:** خطای عمق اعلام‌شده
   - **توضیح کوتاه:** توضیح تکمیلی متریک
   ```
4. **جدول داده‌ها و مقایسه (Table):**  
   ```markdown
   [TABLE]
   | ستون ۱ | ستون ۲ | ستون ۳ |
   |---|---|---|
   | مقدار ۱ | مقدار ۲ | مقدار ۳ |
   ```
5. **آکاردئون سوالات متداول (FAQ Item):**  
   ```markdown
   [FAQ ITEM 1]
   - **سوال:** متن سوال...
   - **پاسخ:** متن پاسخ دقیق...
   ```
6. **نکات کلیدی در یک نگاه (Key Takeaways):**  
   ```markdown
   [KEY TAKEAWAYS]
   - نکته کلیدی اول
   - نکته کلیدی دوم
   ```
7. **نشانگر تصویر:**  
   `[IMAGE_GENERATION_PROMPT: Prompt text...]`

---

## 4. Visual Generation Protocol (Native Antigravity Image Model)

Whenever an image prompt is placed in the article:
- **Style Constraint**: `Industrial photography, slightly futuristic, professional, associated with Mikaeel logistics robotics brand. clean surfaces, no text, no fabricated logos, no gibberish branding, industrial matte finish, 8k resolution, cinematic studio lighting.`
- **Aspect Ratio**:
  - Featured Cover Image: `16:9`
  - Technical / Detail Shots: `3:2` or `16:9`
- Call the native `generate_image` tool.
- Save the resulting image in `.agents/skills/mitech-content-publisher/images/` or workspace scratch.

---

## 5. Automated Sanity Publishing Runbook

To publish the written article and its images:
```bash
node d:\stitch_mitech\.agents\skills\mitech-content-publisher\scripts\publish_to_sanity.mjs <path_to_article.md> --image <path_to_image_1> [--image <path_to_image_2>]
```

The script automatically:
1. Validates Sanity environment variables (`SANITY_API_WRITE_TOKEN`).
2. Uploads images to Sanity as assets.
3. Converts the 8 sections and rich markers to Portable Text blocks.
4. Creates or updates the document in Sanity Studio.
5. Returns the live slug URL and Document ID.
