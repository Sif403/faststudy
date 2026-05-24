import Trust from "@/components/sections/Trust";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Universities from "@/components/sections/Universities";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import WhyGeorgia from "@/components/sections/WhyGeorgia";
import Hero from "@/components/sections/Hero";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="FastStudy"
    className="w-16 h-16 object-contain"
  />

  <span className="text-xl font-extrabold">
    <span className="text-blue-700">Fast</span>
    <span className="text-gray-900">Study</span>
  </span>

</div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
            <a href="#services" className="hover:text-blue-700">الخدمات</a>
            <a href="https://wa.me/995598980657" className="hover:text-blue-700">تواصل معنا</a>
          </nav>

          <a
            href="https://wa.me/995598980657"
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700"
          >
            ابدأ الآن
          </a>
        </div>
      </header>

      <Hero />
      <Trust />
      <WhyGeorgia />
      <HowItWorks />
      <Services />
      <Universities />
      <FAQ />
      <Contact />

      <footer className="bg-gray-950 text-white px-6 py-10 text-center">
        <h2 className="text-xl font-bold mb-2">ادرس في جورجيا</h2>
        <p className="text-gray-400 mb-4">
          نساعد الطلاب العرب في الحصول على القبول الجامعي في جورجيا خطوة بخطوة.
        </p>
        <p className="text-gray-500 text-sm">
          © 2026 جميع الحقوق محفوظة
        </p>
      </footer>

      <a
        href="https://wa.me/YOURNUMBER"
        className="fixed bottom-6 left-6 z-50 bg-green-600 text-white px-5 py-3 rounded-full font-bold shadow-lg hover:bg-green-700"
      >
        واتساب
      </a>

    </main>
  );
}