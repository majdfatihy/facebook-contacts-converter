<div dir="rtl" align="center">

# 📇 محوّل جهات اتصال فيسبوك الذكي
### Facebook Contacts Converter (vCard · Google CSV · Excel · SIM)

[![Live Tool](https://img.shields.io/badge/Live_Tool-Visit_Now-0a7a65?style=for-the-badge&logo=google-chrome&logoColor=white)](https://majdfatihy.github.io/facebook-contacts-converter/)
[![YouTube Tutorial](https://img.shields.io/badge/YouTube-Tutorial_Video-ff0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/QwlORPLlTIE)
[![YouTube Channel](https://img.shields.io/badge/YouTube-@MajdFatihy-d40000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@MajdFatihy)
[![Telegram](https://img.shields.io/badge/Telegram-@MajdEarn-0088cc?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/MajdEarn)

<p align="center">
  <a href="https://majdfatihy.github.io/facebook-contacts-converter/"><b>🌐 استخدام الأداة مباشرة</b></a> •
  <a href="https://youtu.be/QwlORPLlTIE"><b>🎬 مشاهدة فيديو شرح الأداة</b></a> •
  <a href="https://majdfatihy.github.io/online-earning-directory/"><b>💎 دليل أرباحي المعتمد</b></a> •
  <a href="https://majdfatihy.github.io/image-compressor/"><b>🖼️ أداة ضغط الصور</b></a>
</p>

**أداة ويب مجانية واحترافية لتحويل ملفات جهات الاتصال المستخرجة من فيسبوك (`HTML` أو `JSON`) إلى ملفات جاهزة للاستيراد الفوري على الهاتف (`vCard .vcf`)، أو حساب جوجل (`Google Contacts CSV`)، أو شريحة الاتصال (`SIM Card`)، أو جدول إكسل (`Excel .xlsx`) — تعمل بالكامل داخل متصفحك بنسبة 100% دون رفع بياناتك لأي خادم خارجي.**

</div>

---

<div dir="rtl">

## 📖 نبذة عن المشروع (Overview)

عند تنزيل نسخة من معلوماتك من فيسبوك، تحصل على أرقام الهواتف وجهات الاتصال في ملفات معقدة (`your_address_books.html` أو `your_imported_contacts.json`) لا تقبل الهواتف استيرادها مباشرة، وغالباً ما تكون الأسماء العربية في ملفات JSON مشوّهة بسبب خطأ ترميز من فيسبوك نفسه.

يحل **محوّل جهات اتصال فيسبوك** هذه المشكلة جذرياً؛ حيث يقرأ الملفين معاً، ويصلح ترميز الأسماء العربية تلقائياً، ويكتشف الأرقام المكررة والدولية، ويتيح لك تنظيف وتصفية الأسماء قبل تصديرها بالصيغة المناسبة لهاتفك أو كمبيوترك بضغطة زر.

---

## ✨ المميزات والخصائص التقنية (Key Features)

* 🔒 **خصوصية تامة ومعالجة محلية (100% Client-Side):** لا يتم رفع أي ملف أو جهة اتصال إلى أي سيرفر؛ كل عمليات التحليل والدمج والتصدير تتم محلياً داخل متصفح جهازك.
* 🛠️ **إصلاح الأسماء العربية المشوهة (Mojibake Fixer):** خوارزمية مدمجة لإصلاح تشوه الحروف العربية الناتج عن تصدير ملفات `JSON` من فيسبوك وإعادتها لقراءتها السليمة (`UTF-8`).
* 📂 **دعم القراءة المزدوجة:** إمكانية رفع ملف `your_address_books.html` وملف `your_imported_contacts.json` معاً في نفس الوقت ودمجهما بذكاء.
* 🔍 **فحص وتصنيف ذكي قبل التصدير:** لوحة إحصائيات تفاعلية تفرز لك الجهات حسب:
  * الإجمالي، جهات بدون رقم هاتف، جهات لديها بريد إلكتروني.
  * الأرقام الدولية مع التعرف التلقائي على الدولة ومفتاحها الدولي.
  * كشف المكررات بدقة: مكرر متطابق (نفس الاسم والرقم)، نفس الاسم برقم مختلف، أو نفس الرقم باسم مختلف.
  * كشف الأسماء التالفة من مصدر فيسبوك الأصلي.
* 🔗 **3 أوضاع للدمج الذكي:** بدون دمج، أو دمج المتطابق (نفس الاسم والرقم)، أو دمج كل ما له نفس الاسم في بطاقة واحدة متعددة الأرقام.
* 🎛️ **تحكم كامل في الجدول والأعمدة:** بحث فوري في كل الحقول مع تظليل الكلمات المطابقة، فرز تصاعدي وتنازلي، إظهار/إخفاء الأعمدة وتغيير ترتيبها، وتحديد متعدد أو كلي.
* 📦 **تقسيم تلقائي للملفات الكبيرة (Auto-Split & ZIP):** التزاماً بحدود جوجل والهواتف، يتم تقسيم القوائم الضخمة تلقائياً إلى عدة ملفات وتسليمها في ملف مضغوط واحد (`ZIP`).
* 🌍 **ثنائي اللغة ومظاهر متعددة:** دعم كامل للعربية (`RTL`) والإنجليزية (`LTR`) مع وضع ليلي ونهاري وتلقائي.

---

## 📤 صيغ التصدير المدعومة (Supported Export Formats)

| الصيغة | الاستخدام الأنسب | المميزات والحدود القياسية |
| :--- | :--- | :--- |
| **📱 vCard (`.vcf`)** | هواتف أندرويد، آيفون، وموقع Google Contacts | الصيغة الأفضل للهواتف؛ تحفظ الاسم وجميع الأرقام والإيميلات (تُقسّم تلقائياً بحد أقصى 1000 جهة لكل ملف). |
| **💻 Google CSV (`.csv`)** | موقع `contacts.google.com` من الكمبيوتر | مهيأة رسمياً للاستيراد في حساب جوجل ومزامنتها مع الهاتف (بحد أقصى 3000 جهة لكل ملف). |
| **💳 SIM vCard (`.vcf`)** | الحفظ المباشر على شريحة الاتصال (SIM) | نسخة مخففة (اسم واحد + رقم واحد لكل جهة) مع إمكانية ضبط سعة الشريحة (الافتراضي 200) وأقصى طول للاسم (12 حرفاً). |
| **📊 Excel (`.xlsx`)** | العرض، الفرز، والتعديل على الكمبيوتر | جدول إكسل منسق يدعم اتجاه اللغة العربية وتواريخ الإضافة وترتيب الأعمدة الذي اخترته. |

---

## 🚀 طريقة الاستخدام السريعة (How to Use)

1. **استخراج الملف من فيسبوك:** ادخل إلى إعدادات فيسبوك ← مركز الحسابات ← معلوماتك وأذوناتك ← **تنزيل معلوماتك**، وحدد «دفاتر العناوين» أو «جهات الاتصال المستوردة» بصيغة `HTML` أو `JSON`.
2. **رفع الملف للأداة:** افتح [صفحة الأداة](https://majdfatihy.github.io/facebook-contacts-converter/) واسحب الملف (أو الملفين معاً) إلى صندوق الرفع، أو جرب الأداة فوراً باستخدام [ملف HTML التجريبي](https://majdfatihy.github.io/facebook-contacts-converter/demo-address-books.html).
3. **المراجعة والتصفية:** اختر وضع الدمج المناسب، واستخدم الفلاتر العلوية أو شريط البحث لمراجعة أرقامك وتحديد ما تريد تصديره.
4. **التصدير والاستيراد:** اضغط على زر **تصدير** تحت الصيغة المناسبة لك واتبع خطوات الاستيراد الموضحة داخل البطاقة.

---

## 📁 هيكلية ملفات المشروع (Project Structure)

<pre dir="ltr">
facebook-contacts-converter/
├── index.html                    # التطبيق الكامل (المحرك، الواجهة، التصدير، وبيانات السيو)
├── guide.html                    # صفحة الدليل الشامل والشرح التفصيلي
├── links.js                      # وحدة إدارة روابط التواصل الاجتماعي ومشغل فيديو الشرح
├── adsterra.js                   # وحدة إدارة الإعلانات المتجاوبة
├── demo-address-books.html       # ملف بيانات وهمية تجريبي بصيغة HTML للتجربة الآمنة
├── demo-imported-contacts.json   # ملف بيانات وهمية تجريبي بصيغة JSON للتجربة الآمنة
├── favicon.svg                   # أيقونة الموقع
├── sitemap.xml                   # خريطة الموقع لمحركات البحث
├── robots.txt                    # ملف توجيه عناكب البحث
└── README.md                     # ملف توثيق المشروع
</pre>

---

## 💻 التشغيل المحلي (Run Locally)

المشروع مبني بـ **Vanilla JavaScript / HTML5 / CSS3** في صفحة ثابتة سريعة جداً بدون أي خطوات بناء معقدة:

<pre dir="ltr">
git clone https://github.com/majdfatihy/facebook-contacts-converter.git
cd facebook-contacts-converter
</pre>

ثم افتح ملف `index.html` مباشرة في متصفحك، أو شغّل خادماً محلياً بسيطاً عبر `python3 -m http.server 8000`.

---

## 🧩 مشاريع وأدوات أخرى للمطور (More Projects by Majd Fatihy)

تصفح بقية الأدوات والمشاريع مفتوحة المصدر التي قمت بتطويرها:

| المشروع | الروابط المباشرة | نبذة عن المشروع |
| :--- | :--- | :--- |
| 📇 **محوّل جهات اتصال فيسبوك** | [تصفح الأداة](https://majdfatihy.github.io/facebook-contacts-converter/) • [المستودع](https://github.com/majdfatihy/facebook-contacts-converter) | تحويل جهات اتصال فيسبوك (HTML/JSON) إلى Excel و vCard و Google CSV محلياً بالمتصفح مع إصلاح الأسماء العربية. |
| 💎 **دليل أرباحي المعتمد (Earn Directory)** | [تصفح المنصة](https://majdfatihy.github.io/online-earning-directory/) • [المستودع](https://github.com/majdfatihy/online-earning-directory) | دليل تفاعلي شامل لأفضل منصات الربح من الإنترنت، الصنابير، المهام، والأفيليت مع إثباتات الدفع الفورية. |
| 🖼️ **مصغر وضاغط الصور (Image Compressor)** | [تصفح الأداة](https://majdfatihy.github.io/image-compressor/) • [المستودع](https://github.com/majdfatihy/image-compressor) | أداة ضغط وتصغير أبعاد الصور وتحويلها إلى WebP/AVIF محلياً لتسريع مدونات بلوجر والمواقع. |
| 🔗 **نظام توليد وتوجيه الروابط الآمنة** | [المستودع على GitHub](https://github.com/majdfatihy) | نظام متكامل لتوليد الروابط المشفرة (Base64) وصفحة إعادة توجيه ذكية مزودة بعداد تنازلي وحماية أمنية. |

---

## 🌐 الروابط الرسمية وحسابات التواصل (Official Links & Socials)

تابع أحدث الأدوات والشروحات الحصرية عبر قنواتنا الرسمية:

| المنصة | الرابط المباشر | الوصف |
| :--- | :--- | :--- |
| 🌐 **أداة تحويل جهات اتصال فيسبوك** | [majdfatihy.github.io/facebook-contacts-converter](https://majdfatihy.github.io/facebook-contacts-converter/) | الرابط المباشر للأداة |
| 🎬 **فيديو شرح الأداة على يوتيوب** | [youtu.be/QwlORPLlTIE](https://youtu.be/QwlORPLlTIE) | شرح عملي خطوة بخطوة لاستخراج وتحويل الأرقام |
| 📺 **قناة اليوتيوب (YouTube)** | [قناة ماجد فتحي - Majd Fatihy](https://www.youtube.com/@MajdFatihy) | الشروحات المرئية للأدوات والربح والبرمجة |
| 📢 **قناة تيليجرام** | [قناة إثباتات الدفع - MajdEarn](https://t.me/MajdEarn) | إثباتات السحب اليومية والتحديثات |
| 💬 **حساب تيليجرام** | [التواصل المباشر - MajdFatihy](https://t.me/majdfathy) | للاستفسارات والدعم الفني |
| 📱 **واتساب (WhatsApp)** | [تواصل عبر واتساب](https://wa.me/201066732514) | مراسلة فورية للدعم والاستفسارات |
| 📸 **إنستجرام (Instagram)** | [@majdfatihy](https://www.instagram.com/majdfatihy) | متابعة التحديثات والمنشورات |
| 🎵 **تيك توك (TikTok)** | [@majdfatihy](https://www.tiktok.com/@majdfatihy) | فيديوهات قصيرة وشروحات سريعة |
| 📘 **فيسبوك (Facebook)** | [الصفحة الرسمية](https://www.facebook.com/majdfatihyfp) • [الحساب الشخصي](https://www.facebook.com/majdfatihy98) | متابعة الأخبار والمقالات |
| ✍️ **المدونة (Blogger)** | [مدونة ماجد فتحي الرسمية](https://magedfatihy.blogspot.com/) | مقالات وشروحات تقنية مفصلة |
| 🐦 **منصة إكس (X / Twitter)** | [@majdfathy](https://x.com/majdfathy) | تغريدات وتحديثات مستمرة |
| 💼 **لينكد إن (LinkedIn)** | [Majd Fatihy](https://eg.linkedin.com/in/majd-medical-procurement) | التواصل المهني والأعمال |
| 📌 **بينترست (Pinterest)** | [MajdFatihy](https://in.pinterest.com/MajdFatihy/) | تصاميم وملخصات مرئية |
| 📧 **البريد الإلكتروني** | [fthymajd3701@gmail.com](mailto:fthymajd3701@gmail.com) | للمراسلات الرسمية والإعلانات |

---

<p align="center">
  <b>صُنع بكل ❤️ بواسطة <a href="https://github.com/majdfatihy">ماجد فتحي (Majd Fatihy)</a> © 2026 جميع الحقوق محفوظة</b>
</p>

</div>
