import aboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">

        {/* IMAGE SIDE */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="Consultation session"
            className="rounded-3xl shadow-xl"
          />

          {/* Experience badge */}
          <div className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-lg px-6 py-4 text-center">
            <p className="text-3xl font-bold text-green-600">10+</p>
            <p className="text-sm text-gray-600 leading-tight">
              Years of <br /> Experience
            </p>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div>
          <p className="text-green-600 font-semibold tracking-widest mb-4">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl leading-tight mb-8">
            Your Partner in <br />
            Achieving Optimal Health
          </h2>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Hi, I’m <strong>Mansi Sahai</strong>, a certified Dietitian and
            Lactation Consultant dedicated to helping you and your family
            thrive through proper nutrition. My mission is to make healthy
            eating simple, enjoyable, and sustainable.
          </p>

          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Whether you’re navigating breastfeeding challenges, managing a
            health condition, or working toward long-term wellness, I provide
            compassionate, evidence-based guidance tailored to your lifestyle
            and goals.
          </p>

          {/* ICON ROW */}
          <div className="flex gap-6">
            <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-xl">
              ❤️
            </div>
            <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-xl">
              👥
            </div>
            <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-xl">
              🧠
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
