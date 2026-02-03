import { useState } from "react";

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (backend coming next!)");
  };

  return (
    <section
      id="consult"
      className="bg-white py-16 px-6 max-w-xl mx-auto mt-24 mb-24
                rounded-3xl shadow-lg"
    >

      <h3 className="text-2xl font-semibold mb-6 text-center">
        Request a Call
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          required
          className="w-full p-3 rounded-lg border"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full p-4 rounded-xl border border-gray-200
           focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email (optional)"
          className="w-full p-3 rounded-lg border"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your concern (optional)"
          className="w-full p-3 rounded-lg border"
          onChange={handleChange}
        />

        <select
          name="time"
          className="w-full p-3 rounded-lg border"
          onChange={handleChange}
        >
          <option value="">Preferred Call Time</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>

        <button className="w-full bg-primary text-white py-3 rounded-full">
          Request a Call
        </button>
      </form>
    </section>
  );
}
