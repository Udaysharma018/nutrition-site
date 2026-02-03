import { useState } from "react";

const testimonials = [
  {
    name: "Jessica Thompson",
    result: "Lost 30 lbs in 4 months",
    quote:
      "Working with Mansi completely changed my relationship with food. For the first time, I don’t feel like I’m on a diet — I’m just eating in a way that makes me feel amazing.",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Priya Sharma",
    result: "Improved postpartum recovery",
    quote:
      "The lactation support I received was compassionate, practical, and life-changing. I felt supported every step of the way during my postpartum journey.",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Aditi Verma",
    result: "Better energy & digestion",
    quote:
      "Simple, realistic guidance that actually fits my lifestyle. I feel lighter, more energetic, and confident in my food choices now.",
    image: "https://i.pravatar.cc/150?img=12",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  return (
    <section
      id="testimonials"
      className="py-32 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-8 text-center">

        {/* Header */}
        <p className="text-green-600 font-semibold tracking-widest mb-4">
          TESTIMONIALS
        </p>

        <h2 className="text-4xl md:text-5xl mb-6">
          Real Stories, Real Results
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
          Don’t just take my word for it — hear from clients who have transformed
          their health and confidence.
        </p>

        {/* Card */}
        <div className="relative bg-white rounded-3xl shadow-lg px-10 py-16 max-w-4xl mx-auto">

          {/* Stars */}
          <div className="flex justify-center mb-6 text-orange-400 text-xl">
            ★★★★★
          </div>

          {/* Quote */}
          <p className="text-xl md:text-2xl font-serif text-gray-700 mb-10 leading-relaxed">
            “{testimonial.quote}”
          </p>

          {/* User */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-green-600 text-sm">{testimonial.result}</p>
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={() =>
              setIndex((index - 1 + testimonials.length) % testimonials.length)
            }
            className="absolute left-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-green-100 text-green-600 hover:bg-green-200"
          >
            ‹
          </button>

          <button
            onClick={() => setIndex((index + 1) % testimonials.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-green-100 text-green-600 hover:bg-green-200"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full ${
                i === index ? "bg-green-600" : "bg-green-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
