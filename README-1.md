# Facebook Contacts Converter · محوّل جهات اتصال فيسبوك

Convert the contacts you download from Facebook into files you can actually import: **vCard (.vcf)**, **Google Contacts CSV**, **SIM-friendly vCard**, or **Excel**. Free, private, no sign-up. Everything runs in your browser.

**🔗 Live tool: https://majdfatihy.github.io/facebook-contacts-converter/**

---

## Features

- Reads both Facebook files: `your_address_books.html` and `your_imported_contacts.json` (you can load both together)
- Fixes the garbled Arabic text that Facebook's JSON export produces
- Keeps each contact's multiple phone numbers and emails together, plus the date it was added
- Smart review before export:
  - no phone number, has email, international numbers (with country classification)
  - duplicates: same name + number, same name / different number, same number / different name
  - corrupted names (already broken in Facebook's own file)
- Merge options: none, identical contacts, or all contacts with the same name
- Search across all fields with highlighting, column sorting, show/hide and reorder columns, multi-select
- Arabic / English interface, automatic dark mode, remembers your choices locally
- Large lists are split automatically into several files (delivered as one ZIP)

## Export formats

| Format | Best for | Notes |
|---|---|---|
| **vCard (.vcf)** | Android, iPhone, Google Contacts on desktop | Name, phones, emails. Up to 1000 contacts per file |
| **Google CSV** | contacts.google.com on a computer | Not accepted by the phone Contacts app. Up to 3000 contacts per file (Google's documented limit) |
| **SIM vCard** | SIM card storage | One name + one number per contact, name is shortened. Capacity (default 200) and name length (default 12) are adjustable; SIM limits vary by card and device, so test with ~20 contacts first |
| **Excel (.xlsx)** | Viewing / editing on a computer | Follows your chosen column order. Not directly importable on phones |

Contacts without a phone number or email are skipped in vCard / Google CSV (and SIM requires a phone number).

## How to get your Facebook file

1. Facebook → Settings → Accounts Center → Your information and permissions → **Download your information** (menu names may vary).
2. Select address books / imported contacts, format **HTML** or **JSON**.
3. Upload the file(s) to the tool.

## Importing

- **Android:** Contacts → Settings (or “Fix & manage”) → Import from file → vCard → choose the `.vcf` file.
- **iPhone:** open the `.vcf` from the Files app → “Add all contacts”.
- **Google (computer):** contacts.google.com → Import → choose the `.vcf` or Google CSV.
- **SIM:** import the SIM file to the phone and pick SIM as the destination if offered, or copy to SIM from the Contacts app settings (name varies by device). Import one file at a time.

Menu names differ between devices and app versions.

## Privacy

- Your files are processed **locally in the browser**. They are never uploaded to any server.
- Only your language and theme preference are saved in `localStorage`.
- When you export Excel or ZIP, the page loads the open-source libraries [SheetJS](https://sheetjs.com/) and [JSZip](https://stuk.github.io/jszip/) from cdnjs. Only the library files are downloaded; none of your data is sent.

## Try it with fake data

Sample files with fictional contacts (Arabic + English) are included:

- `demo-address-books.html` (downloads as `your_address_books.html` from the page)
- `demo-imported-contacts.json` (downloads as `your_imported_contacts.json`)

Phone numbers in the samples are sequential or reserved-range numbers, but a few could coincide with real ones, so don't import them into your real account.

## Run locally

A single static page, no build step:

```bash
git clone https://github.com/majdfatihy/facebook-contacts-converter.git
cd facebook-contacts-converter
python3 -m http.server 8000   # then open http://localhost:8000
```

## Repository contents

| File | Purpose |
|---|---|
| `index.html` | The whole tool (HTML + CSS + JS) with SEO metadata |
| `robots.txt`, `sitemap.xml` | Search engine crawling |
| `favicon.svg`, `og-image.png` | Icon and social preview image |
| `demo-*.html / .json` | Fake sample data |

## Deploy your own copy

Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`. Then replace `majdfatihy` in `index.html`, `robots.txt` and `sitemap.xml` with your username, and set `CONTACT_EMAIL` near the top of the script in `index.html` if you want a contact link.

## Limitations

- Facebook's files contain only name, phone/email and date added. There are no companies, notes or addresses to convert.
- Names already corrupted in Facebook's own export cannot be repaired.
- The country table covers common calling codes; unknown codes are shown as `?`.
- Provided as-is, without warranty. Keep a backup of your contacts before importing.

---

<div dir="rtl" align="right">

## الوصف بالعربية

أداة مجانية وخاصة لتحويل جهات الاتصال التي تحمّلها من فيسبوك إلى ملفات يمكن استيرادها فعلاً: **vCard (.vcf)** أو **Google CSV** أو **ملف مخفّف لشريحة SIM** أو **Excel**. تعمل بالكامل داخل متصفحك دون رفع أي بيانات.

**🔗 الأداة: https://majdfatihy.github.io/facebook-contacts-converter/**

### المميزات

- قراءة ملفي فيسبوك: `your_address_books.html` و`your_imported_contacts.json` (يمكن رفعهما معاً)
- إصلاح النص العربي المشوّه في ملف JSON
- جمع أرقام وبريد كل جهة اتصال معاً مع تاريخ الإضافة
- مراجعة قبل التصدير: جهات بلا رقم، لديها بريد، أرقام دولية، مكررات بأنواعها، أسماء تالفة
- خيارات دمج، وبحث بتظليل، وفرز، وترتيب الأعمدة، وتحديد متعدد
- واجهة عربية/إنجليزية ووضع داكن تلقائي
- تقسيم الملفات الكبيرة تلقائياً (تُسلَّم في ZIP واحد)

### صيغ التصدير

| الصيغة | الاستخدام | ملاحظات |
|---|---|---|
| **vCard (.vcf)** | أندرويد وآيفون وجوجل | حتى 1000 جهة في الملف |
| **Google CSV** | contacts.google.com من الكمبيوتر | لا يقبله تطبيق جهات الاتصال في الهاتف، حتى 3000 جهة في الملف |
| **SIM** | شريحة SIM | اسم مقصوص ورقم واحد؛ السعة (200) وطول الاسم (12) قابلان للتعديل، جرّب 20 جهة أولاً |
| **Excel** | العرض والتعديل على الكمبيوتر | غير قابل للاستيراد مباشرة على الهاتف |

### الخصوصية

المعالجة محلية في المتصفح، ولا تُرفع الملفات لأي خادم. يُحفظ فقط اختيار اللغة والمظهر على جهازك. عند تصدير Excel أو ZIP تُحمَّل مكتبتا SheetJS وJSZip من cdnjs دون إرسال أي بيانات.

### قيود

- ملفات فيسبوك لا تحتوي شركات ولا ملاحظات ولا عناوين.
- الأسماء التالفة في ملف فيسبوك نفسه لا يمكن إصلاحها.
- احتفظ بنسخة احتياطية من جهات اتصالك قبل الاستيراد.

</div>
