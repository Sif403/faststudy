export default function HowItWorks() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        كيف نساعدك؟
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-blue-600 text-3xl font-bold mb-4">1</div>
          <h3 className="font-bold mb-2">تواصل معنا</h3>
          <p className="text-gray-600 text-sm">
            أرسل لنا معلوماتك وسنقوم بتقييم حالتك الدراسية.
          </p>
        </div>

        <div>
          <div className="text-blue-600 text-3xl font-bold mb-4">2</div>
          <h3 className="font-bold mb-2">التقديم للجامعة</h3>
          <p className="text-gray-600 text-sm">
            نقوم بالتقديم لك على أفضل الجامعات المناسبة لك.
          </p>
        </div>

        <div>
          <div className="text-blue-600 text-3xl font-bold mb-4">3</div>
          <h3 className="font-bold mb-2">الحصول على القبول</h3>
          <p className="text-gray-600 text-sm">
            نتابع معك حتى تحصل على قبولك وتبدأ رحلتك.
          </p>
        </div>
      </div>
    </section>
  );
}