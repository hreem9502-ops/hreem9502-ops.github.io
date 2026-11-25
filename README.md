# 🌱 PlantCare AI — Smart Plant Identification, Disease Detection & Care Assistant

<div dir="rtl">

## نظرة عامة (عربي)

تطبيق ويب ذكي يكتشف النباتات من الصور باستخدام الذكاء الاصطناعي: يُعرّف نوع النبات،
يفحص صحة الأوراق ويكشف أعراض الأمراض الظاهرة، ثم يقدم دليلاً كاملاً للعناية
(الري، الضوء، التربة، الحرارة، التسميد والتقليم) — بواجهة عربية/إنجليزية كاملة
وتجربة تشبه تطبيقات الأندرويد على الهواتف (PWA قابلة للتثبيت على الشاشة الرئيسية).

### روابط جاهزة
| الوصف | الرابط |
|---|---|
| **الموقع المنشور (مجاني — يعمل على الجوال كتطبيق)** | https://hreem9502-ops.github.io/ |
| النسخة الكاملة مع تحليل AI حي | https://a1jzb97avvx1-d.space-z.ai |

### طريقة التثبيت على الجوال (أندرويد / آيفون)
1. افتح الرابط https://hreem9502-ops.github.io/ من متصفح الجوال (Chrome / Samsung Internet / Safari)
2. اختر **"إضافة إلى الشاشة الرئيسية" (Add to Home Screen)** من قائمة المتصفح
3. سيظهر التطبيق بأيقونة نباتية ويعمل بنافذة مستقلة كتطبيق أندرويد حقيقي

> ملاحظة: النسخة المنشورة على GitHub Pages تعمل بوضع **Demo Mode**
> (نتائج تحليل نموذجية واضحة التسمية + حفظ السجل داخل المتصفح).
> لتشغيل التحليل الحي بالذكاء الاصطناعي، انشر مجلد `application` على
> [Vercel](https://vercel.com) مجاناً وأضف مفتاح `GEMINI_API_KEY` (مجاني من
> [Google AI Studio](https://aistudio.google.com/apikey)).

### فريق المشروع
جوري محي الدين • ديما سامي • رونا شريف • سديم الثقفي • وردة البرقي

### محتويات المستودع
```
application/     → التطبيق الكامل (Next.js 16 + TypeScript + Tailwind + Prisma/SQLite)
presentation/    → العرض التقديمي EN + AR (PowerPoint + PDF)
documentation/   → 4 ملفات Word (التقرير، دليل التثبيت، توزيع المهام، ملاحظات العرض)
screenshots/     → 16 لقطة شاشة حقيقية من التطبيق
START_HERE.txt   → نقطة البداية السريعة
```

### تشغيل التطبيق محلياً
```bash
cd application
npm install          # أو: bun install
cp .env.example .env
npx prisma db push   # إنشاء قاعدة بيانات SQLite
npm run dev          # http://localhost:3000
```

</div>

## Overview (English)

A smart web app that identifies plants from photos with AI: detects the species,
inspects leaf health for visible disease symptoms, and returns a complete care
guide (watering, sunlight, soil, temperature, fertilizing, pruning) — with a full
bilingual English/Arabic interface and a native-app feel on phones (installable PWA).

### Ready links
| What | URL |
|---|---|
| **Published site (free — works like an app on mobile)** | https://hreem9502-ops.github.io/ |
| Full version with live AI analysis | https://a1jzb97avvx1-d.space-z.ai |

### Install on your phone (Android / iOS)
1. Open https://hreem9502-ops.github.io/ in your mobile browser
2. Choose **"Add to Home Screen"**
3. The app installs with its own icon and runs standalone like a native app

### Repository layout
```
application/     → Full app (Next.js 16 + TypeScript + Tailwind + Prisma/SQLite)
presentation/    → Slide deck EN + AR (PowerPoint + PDF)
documentation/   → 4 Word documents (report, install guide, task distribution, speaker notes)
screenshots/     → 16 real screenshots from the app
```

### Run locally
```bash
cd application
npm install          # or: bun install
cp .env.example .env
npx prisma db push   # creates the SQLite database
npm run dev          # http://localhost:3000
```

### Tech stack
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui ·
Prisma + SQLite · Gemini Vision API / built-in Vision model / Demo Mode fallback ·
PWA (manifest + service worker + install prompt)

---

Academic project — CIS. All analysis results are advisory and never replace a
professional agricultural inspection.
