export default function Trust() {
  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">

        <div className="p-6 border rounded-2xl">
          <div className="text-3xl mb-2">🎓</div>
          <h3 className="font-bold text-lg">+100 طالب</h3>
          <p className="text-gray-600 text-sm">
            تم مساعدتهم للحصول على القبول الجامعي
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <div className="text-3xl mb-2">📄</div>
          <h3 className="font-bold text-lg">خبرة كاملة</h3>
          <p className="text-gray-600 text-sm">
            في التقديم وتجهيز الأوراق خطوة بخطوة
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <div className="text-3xl mb-2">✈️</div>
          <h3 className="font-bold text-lg">دعم مستمر</h3>
          <p className="text-gray-600 text-sm">
            من بداية التقديم حتى السفر والاستقرار
          </p>
        </div>

      </div>
    </section>
  );
}