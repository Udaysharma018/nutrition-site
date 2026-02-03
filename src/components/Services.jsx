export default function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-green-600 font-semibold tracking-widest mb-4">
            SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl mb-6">
            Comprehensive Nutrition Services
          </h2>
          <p className="text-gray-600 text-lg">
            From weight management to specialized nutrition care, I offer
            evidence-based services designed to support every stage of life.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-2xl mb-6">
              ⚖️
            </div>
            <h3 className="text-2xl mb-4">Weight Management</h3>
            <p className="text-gray-600 mb-6">
              Sustainable weight loss or gain programs tailored to your body,
              lifestyle, and long-term health goals.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>✓ Personalized meal plans</li>
              <li>✓ Weekly check-ins</li>
              <li>✓ Progress tracking</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-2xl mb-6">
              🤱
            </div>
            <h3 className="text-2xl mb-4">Prenatal & Lactation Nutrition</h3>
            <p className="text-gray-600 mb-6">
              Compassionate guidance through pregnancy, postpartum recovery,
              and breastfeeding for both mother and baby.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>✓ Trimester-specific nutrition</li>
              <li>✓ Breastfeeding support</li>
              <li>✓ Supplement guidance</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-2xl mb-6">
              🏃
            </div>
            <h3 className="text-2xl mb-4">Sports & Lifestyle Nutrition</h3>
            <p className="text-gray-600 mb-6">
              Fuel your body for performance, recovery, and daily energy with
              nutrition strategies that fit your routine.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>✓ Performance optimization</li>
              <li>✓ Recovery nutrition</li>
              <li>✓ Sustainable habits</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
