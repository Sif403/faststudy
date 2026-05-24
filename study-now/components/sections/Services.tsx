export default function Services() {
  return (
    <section id="services" className="px-6 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        خدماتنا
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition text-center">
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-xl font-bold mb-3">قبول جامعي</h3>
          <p className="text-gray-600">
            نساعدك في اختيار الجامعة المناسبة والتقديم للحصول على القبول.
          </p>
        </div>

        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition text-center">
          <div className="text-4xl mb-4">📄</div>
          <h3 className="text-xl font-bold mb-3">تجهيز الأوراق</h3>
          <p className="text-gray-600">
            نرشدك للوثائق المطلوبة ونساعدك في تنظيم ملفك بشكل صحيح.
          </p>
        </div>

        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition text-center">
          <div className="text-4xl mb-4">✈️</div>
          <h3 className="text-xl font-bold mb-3">دعم الطلاب</h3>
          <p className="text-gray-600">
            نقدم إرشادًا قبل السفر وبعد الوصول إلى جورجيا.
          </p>
        </div>

      </div>
    </section>
  );
}