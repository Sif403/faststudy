export default function Hero() {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div className="text-center md:text-right">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            ادرس في جورجيا <span className="text-blue-600">بسهولة وأمان</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-600">
            نساعد الطلاب العرب في الحصول على القبول الجامعي في جورجيا، وتجهيز الأوراق،
            والإرشاد خطوة بخطوة حتى بداية الدراسة.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://wa.me/995598980657"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-blue-700"
            >
              ابدأ الآن
            </a>

            <a
              href="#services"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold"
            >
              تعرف على خدماتنا
            </a>
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src="/hero.jpg"
            alt="Study in Georgia"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}