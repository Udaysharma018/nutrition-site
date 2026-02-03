import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-green-50 to-orange-50 py-32"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">

        {/* TEXT */}
        <div>
          <h1 className="text-5xl md:text-6xl leading-tight mb-6">
            Nourish Your Body, <br />
            <span className="text-green-600">Transform</span> Your Life
          </h1>

          <p className="text-gray-600 text-lg mb-10 max-w-xl">
            Expert nutrition guidance tailored to your unique needs.
            Achieve your health goals with personalized meal plans and
            one-on-one coaching.
          </p>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="inline-block bg-green-600 text-white px-8 py-4
                         rounded-full text-lg hover:scale-105 transition"
            >
              Book Free Consultation →
            </a>

            <a
              href="#services"
              className="inline-block border border-green-600 px-8 py-4
                         rounded-full text-lg hover:bg-green-50 transition"
            >
              View Services
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="absolute -inset-4 bg-green-100 rounded-[40%] blur-2xl" />
          <img
            src={heroImg}
            alt="Dietitian"
            className="relative rounded-[40%] shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
