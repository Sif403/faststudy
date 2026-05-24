export default function Universities() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">
        الجامعات والتخصصات
      </h2>

      <p className="text-gray-600 text-center mb-10">
        نساعدك في اختيار الجامعة والتخصص المناسب حسب مؤهلاتك وميزانيتك.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-2xl">
          <h3 className="text-xl font-bold mb-3">الطب وطب الأسنان</h3>
          <p className="text-gray-600">
            خيارات مناسبة للطلاب الراغبين في التخصصات الطبية.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h3 className="text-xl font-bold mb-3">الهندسة والتكنولوجيا</h3>
          <p className="text-gray-600">
            برامج في الهندسة، الحاسوب، وتكنولوجيا المعلومات.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h3 className="text-xl font-bold mb-3">إدارة الأعمال</h3>
          <p className="text-gray-600">
            تخصصات مناسبة للراغبين في الأعمال والإدارة.
          </p>
        </div>
      </div>
    </section>
  );
}