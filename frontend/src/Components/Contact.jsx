import { CONTACT } from "../constants";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { div } from "motion/react-client";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setTimeout(() => setStatus(""), 5000);
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("Failed to send message.");
    }
    setLoading(false);
  };

  return (
    <div id="contact" className="mt-15 py-12">
      <h2 className="my-20 text-center text-balance text-4xl font-semibold lg:text-5xl">Get in Touch</h2>
      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-10">
        {/* Left Side: Description & Info */}
        <div className="md:w-1/2 flex flex-col items-start space-y-6 text-lg tracking-tight px-4">
          <p className="mb-4">
            Feel free to reach out for collaborations, project inquiries, or just to say hello!
          </p>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="w-4 h-4 text-neutral-700" />
            <p>{CONTACT.address}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="w-4 h-4 text-neutral-700" />
            <a href={`tel:${CONTACT.phoneNo}`} className="hover:text-blue-500 transition">
              {CONTACT.phoneNo}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="w-4 h-4 text-neutral-700" />
            <a href={`mailto:${CONTACT.email}`} className="hover:text-blue-500 border-b transition">
              {CONTACT.email}
            </a>
          </div>
        </div>
        {/* Right Side: Form */}
        <div className="md:w-1/2 w-full px-4">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-black dark:text-white bg-white dark:bg-black p-6 rounded shadow">
            <label className="font-semibold">
              Full Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full px-3 py-2 border rounded text-black focus:outline-none focus:ring-2 bg-slate-200 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </label>
            <label className="font-semibold">
              Email Address
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full px-3 py-2 border rounded text-black bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@email.com"
              />
            </label>
            <label className="font-semibold">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-1 w-full px-3 py-2 border rounded text-black bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Type your message here..."
              />
            </label>
            <button
              type="submit"
              className="mt-2 rounded bg-gray-50 from-slate-400 to-slate-600 px-4 py-2 text-black font-semibold hover:bg-gray-200 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <div className="mt-2 text-center text-sm">
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
