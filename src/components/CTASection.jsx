import ctaImg from "../assets/cta.jpg";

export default function CTASection() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url(${ctaImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-green-700/80" />

          {/* Content */}
          <div className="relative z-10 text-center px-10 py-24">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Ready to Start Your Journey?
            </h2>

            <p className="text-green-100 text-lg max-w-2xl mx-auto mb-10">
              Book a free 15-minute discovery call to discuss your goals and see
              how personalized nutrition support can help you feel your best.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500
                         text-white px-10 py-4 rounded-full text-lg font-medium
                         transition-all hover:scale-105"
            >
              Schedule Free Call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
