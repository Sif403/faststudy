export default function FAQ() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        الأسئلة الشائعة
      </h2>

      <div className="space-y-6">
        <div className="p-6 border rounded-2xl">
          <h3 className="font-bold mb-2">هل أحتاج شهادة لغة؟</h3>
          <p className="text-gray-600 text-sm">
            في أغلب الجامعات في جورجيا لا تحتاج شهادة لغة جورجية، ويمكنك الدراسة باللغة الإنجليزية مباشرة.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h3 className="font-bold mb-2">كم تستغرق مدة القبول؟</h3>
          <p className="text-gray-600 text-sm">
            عادةً من 1 إلى 3 أسابيع حسب الجامعة والتخصص.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h3 className="font-bold mb-2">هل تساعدون في الفيزا؟</h3>
          <p className="text-gray-600 text-sm">
            نعم، نقدم إرشاد كامل لعملية الفيزا بعد الحصول على القبول.
          </p>
        </div>
      </div>
    </section>
  );
}