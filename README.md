<div dir="rtl">

<p align="center">
  <img src="/public/m-logo.webp" alt="MemoryHub Logo" width="120" />
</p>

<h1 align="center">MemoryHub</h1>

<p align="right">
ميموري هاب هي منصة رقمية مبتكرة تمزج بين التوثيق الشخصي والتفاعل الاجتماعي عبر الموقع الجغرافي. تتيح للمستخدمين تثبيت ذكرياتهم في الأماكن التي زاروها، وتوثيقها بنصوص، صور، ومقاطع فيديو قصيرة، كل ذلك ضمن خريطة تفاعلية تعيد إحياء اللحظات.

مع نظام خصوصية متقدم (خاص، مشترك، أو عام)، يمكن لكل مستخدم أن يختار كيف ومن يشارك معه هذه اللحظات — سواء بشكل فردي، ضمن مجموعات خاصة، أو مع مجتمع المنصة بالكامل.

تتميّز ميموري هاب ببيئة اجتماعية ديناميكية تدعم التفاعل عبر الإعجابات، التعليقات، وإنشاء مجموعات مغلقة للتجارب المشتركة. المنصة مصممة لتكون حاضنة للذكريات، ومساحة للتعبير، وبوابة للتواصل عبر الزمان والمكان.

ولضمان جودة المحتوى وسلامة التجربة، توفر المنصة أدوات إشراف ذكية تساعد في إدارة المحتوى والارتقاء بقيمته.
</p>

<hr>

<h2 align="right">🚀 فهرس المحتويات</h2>

<p align="right">
1. الميزات<br>
2. التقنيات المستخدمة<br>
3. بدء الاستخدام<br>
4. طريقة الاستخدام<br>
5. خارطة الطريق<br>
6. المساهمة<br>
7. الفريق<br>
8. المتغيرات البيئية
</p>

<hr>

<h2 align="right">✨ الميزات</h2>

<ul align="right">
  <li><strong>خريطة تفاعلية</strong><br>تثبيت ذكرياتك في المواقع بدقة مع أدوات السحب والإفلات البسيطة.</li>
  <li><strong>دعم وسائط غنية</strong><br>إضافة الصور، الفيديوهات القصيرة،.</li>
  <li><strong>ضوابط الخصوصية</strong><br>
    - <strong>خاص</strong>: أنت فقط من يمكنه المشاهدة<br>
    - <strong>مشترك</strong>: لمجموعات محددة بالدعوة فقط<br>
    - <strong>عام</strong>: كل المستخدمين على MemoryHub
  </li>
  <li><strong>المجموعات والتعاون</strong><br>إنشاء "مجموعات الذكريات" المشتركة لأحداث مثل حفلات الزفاف، اللقاءات، أو الرحلات.</li>
  <li><strong>استكشاف المجتمع</strong><br>اكتشاف علامات الذكريات العامة التي يشاركها الآخرون حول العالم.</li>
  <li><strong>إدارة المسؤول</strong><br>مراجعة المحتوى والموافقة عليه أو حذفه لضمان الجودة.</li>
</ul>

<hr>

<h2 align="right">🛠️ التقنيات المستخدمة</h2>

<h3 align="right">الخلفية (Backend)</h3>
<ul align="right">
  <li>اللغة والإطار: TypeScript + Node.js, Express.js</li>
  <li>قاعدة البيانات: MongoDB (mongoose)</li>
  <li>المصادقة والأمان: JSON Web Tokens, bcryptjs, helmet, cors</li>
  <li>الوسائط والتخزين: multer, streamifier, Cloudinary</li>
  <li>الأدوات واللوج: axios, winston, morgan, dotenv</li>
  <li>التحقق والأخطاء: express-validator, express-async-handler</li>
  <li>المعرفات والتنسيق: ulid, prettier</li>
  <li>أدوات التطوير: ts-node, nodemon, TypeScript</li>
</ul>

<h3 align="right">الواجهة (Frontend)</h3>
<ul align="right">
  <li>اللغة والإطار: React 19 (hooks), Vite</li>
  <li>التصميم وواجهة المستخدم: Tailwind CSS, Framer Motion, react-icons</li>
  <li>الخرائط وتحديد المواقع: react-map-gl (Mapbox GL), leaflet</li>
  <li>النماذج وإدارة الحالة: Formik, jwt-decode</li>
  <li>المخططات والتغذية الراجعة: chart.js, react-chartjs-2, react-toastify, sweetalert2</li>
</ul>

<hr>

<h2 align="right">🛠️ بدء الاستخدام</h2>

<h3 align="right">المتطلبات المسبقة:</h3>
<p align="right">
- Node.js v16+<br>
- npm أو yarn<br>
- قاعدة بيانات MongoDB (Atlas أو محلي)<br>
- مفتاح وصول Mapbox
</p>

<h3 align="right">خطوات التثبيت:</h3>
<ol align="right">
  <li>استنساخ المستودع:<br>
    <code>git clone https://github.com/AzzamAlshaye/MemoryHub-frontend(-backend).git<br>cd MemoryHub-frontend</code>
  </li>
  <li>تثبيت تبعيات الخلفية:<br>
    <code>cd MemoryHub-backend<br>npm install # أو yarn</code>
  </li>
  <li>تثبيت تبعيات الواجهة:<br>
    <code>cd MemoryHub-frontend<br>npm install # أو yarn</code>
  </li>
  <li>تشغيل الخادم في نافذتي طرفية مختلفتين:<br>
    - للخلفية: <code>npm run dev</code><br>
    - للواجهة: <code>npm run dev</code>
  </li>
</ol>

<hr>

<h2 align="right">📦 طريقة الاستخدام</h2>
<p align="right">
1. التسجيل أو تسجيل الدخول.<br>
2. النقر على الموقع على الخريطة لإنشاء علامة جديدة.<br>
3. ملء العنوان، الوصف، ومستوى الخصوصية.<br>
4. تحميل الوسائط (صور، فيديوهات).<br>
5. الحفظ والعودة لذكرياتك في أي وقت!
</p>

<hr>

<h2 align="right">🗺️ خارطة الطريق</h2>
<ul align="right">
  <li>[ ] واجهة متوافقة مع الجوال</li>
  <li>[ ] التعاون ضمن مجموعات</li>
  <li>[ ] إشعارات تحديد الموقع (Geofencing)</li>
</ul>

<hr>

<h2 align="right">👥 الفريق</h2>
<div align="right" style="width:100%; clear:both;">
<table>
  <tr>
    <th align="right">الاسم</th>
    <th align="right">البريد الإلكتروني</th>
    <th align="right">GitHub</th>
  </tr>
  <tr>
    <td align="right">أسماء القحطاني</td>
    <td align="right">asmaalqhtani123@gmail.com</td>
    <td align="right"><a href="https://github.com/AAbAlQahtani">AAbAlQahtani</a></td>
  </tr>
  <tr>
    <td align="right">عزام الشايع</td>
    <td align="right">azzamalshaye@gmail.com</td>
    <td align="right"><a href="https://github.com/AzzamAlshaye">AzzamAlshaye</a></td>
  </tr>
  <tr>
    <td align="right">خالد المطيري</td>
    <td align="right">khaledalmutairi220@hotmail.com</td>
    <td align="right"><a href="https://github.com/g39g1">g39g1</a></td>
  </tr>
  <tr>
    <td align="right">رنا الدوسري</td>
    <td align="right">ranaaldosari10@gmail.com</td>
    <td align="right"><a href="https://github.com/RanaAldosari">RanaAldosari</a></td>
  </tr>
</table>
</div>

<hr>


<h2 align="right">🔑 المتغيرات البيئية</h2>

<h3 align="right">ملفات .env للواجهة (Frontend)</h3>
<pre align="right">
VITE_PRIMARY_API_URL=
VITE_MAPBOX_TOKEN=
</pre>

<h3 align="right">ملفات .env للخلفية (Backend)</h3>
<pre align="right">
MONGODB_URI=
MONGODB_DB=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
</pre>

</div> 
