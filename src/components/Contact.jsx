import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxkukI1NmmzKFXVO4FbZsyWkbJPvOiA-NKOLx_vHrKHcxXjZxfYxsbQvTlWGKwJlf4y/exec", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Start Your Health Journey Today
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-md">
            Fill the form and I’ll personally reach out to you.
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-3xl shadow-lg p-10">
          {success ? (
            <div className="text-green-600 text-xl text-center">
              ✅ Thank you! I’ll contact you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border"
              />

              <textarea
                name="message"
                placeholder="Your concern"
                value={form.message}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border"
              />

              <button
                disabled={loading}
                className="w-full bg-green-600 text-white py-4 rounded-full text-lg"
              >
                {loading ? "Submitting..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
