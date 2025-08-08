import { CONTACT } from "../constants";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import { div } from "motion/react-client";
import { usePackage } from '../assets/context/PackageContext';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // const [selectedPackage, setSelectedPackage] = useState('');
  const { selectedPackage, setSelectedPackage } = usePackage();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedPackage = localStorage.getItem('selectedPackage');
    if (storedPackage) {
      setSelectedPackage(storedPackage);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/movlpyvk", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setSubmitted(true);
        setTimeout(() => setStatus(""), 5000);
        setForm({ name: "", email: "", message: "" });
        setSelectedPackage("selection");
      } else {
        const errorData = await response.json();
        setStatus(errorData.error || "Failed to send message.");
      }
    } catch (error) {
      setStatus("Failed to send message.");
    }
    setLoading(false);
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setStatus("");
  //   try {
  //     const res = await fetch("http://localhost:5000/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(form),
  //     });
  //     const data = await res.json();
  //     if (res.ok) {
  //       setStatus("Message sent successfully!");
  //       setTimeout(() => setStatus(""), 5000);
  //       setForm({ name: "", email: "", message: "", budget: "" });
  //       setSelectedPackage("selection");
  //     } else {
  //       setStatus(data.error || "Failed to send message.");
  //       setTimeout(() => setStatus(""), 5000);
  //       setSelectedPackage("selection");
  //     }
  //   } catch (err) {
  //     setStatus("Failed to send message.");
  //   }
  //   setLoading(false);
  // };

  return (
    <div id="contactme" className="mt-15 py-12">
      <h2 className="my-20 text-center text-balance text-4xl font-semibold lg:text-5xl">Get in Touch</h2>
      <div className="flex flex-wrap align-center justify-center md:justify-center md:items-start gap-10">
        {/* Left Side: Description & Info */}
        <div className="w-full flex items-start justify-center md:w-1/2 flex-col space-y-6 text-lg tracking-tight px-4">
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
        {/* <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-black dark:text-white bg-white dark:bg-black p-6 rounded shadow"> */}
        <div className="w-full flex items-center justify-center px-9 py-8">
          <form 
            onSubmit={handleSubmit}
            // action="https://formspree.io/f/movlpyvk"
            // method="POST" 
            // onSubmit={() => setSubmitted(true)}
            className="w-full max-w-2xl">
            <div className="flex flex-col w-full">
              <div className="flex flex-center gap-4">
              {/* Your Name */}
              <div className="flex flex-grow items-end gap-4 py-3">
                <label className="flex flex-col w-full">
                  <p className="text-white text-base font-medium pb-2">Your Name</p>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="form-input w-full rounded-xl text-white bg-[#233648] h-14 p-4 placeholder:text-[#92adc9]"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              {/* Email */}
              <div className="flex flex-grow items-end gap-4 py-3">
                <label className="flex flex-col w-full">
                  <p className="text-white text-base font-medium pb-2">Email</p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="form-input w-full rounded-xl text-white bg-[#233648] h-14 p-4 placeholder:text-[#92adc9]"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              </div>

              {/* Package */}
              <div className="flex flex-wrap items-end gap-4 py-3">
                <label className="flex flex-col w-full">
                  <p className="text-white text-base font-medium pb-2">Package</p>
                  <select
                    name="package"
                    className="form-input w-full rounded-xl text-white bg-[#233648] h-14 p-4 placeholder:text-[#92adc9]"
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                  >
                    <option value="selection">Select a package</option>
                    <option value="basic">Basic</option>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                    <option value="custom">Custom</option>
                  </select>
                </label>
              </div>

              {/* Project Description */}
              <div className="flex flex-wrap items-end gap-4 py-3">
                <label className="flex flex-col w-full">
                  <p className="text-white text-base font-medium pb-2">Project Description</p>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your project requirements"
                    className="form-input w-full rounded-xl text-white bg-[#233648] min-h-36 p-4 placeholder:text-[#92adc9]"
                  ></textarea>
                </label>
              </div>

              {/* Custom Budget */}
              {selectedPackage === 'custom' && (
                <div className="flex flex-wrap items-end gap-4 py-3">
                  <label className="flex flex-col w-full">
                    <p className="text-white text-base font-medium pb-2">Budget</p>
                    <input
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      type="number"
                      min={5000}
                      placeholder="e.g., $5,000 - $10,000"
                      className="form-input w-full rounded-xl text-white bg-[#233648] h-14 p-4 placeholder:text-[#92adc9]"
                    />
                  </label>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex w-full py-4">
                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-slate-100 text-zinc-900 font-bold"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
              </div>

              {/* Status Message */}
              {submitted && (
                <div className="text-center text-sm text-white mt-2">
                  {status}
                </div>
              )}
              {/* {status && (
                <div className="text-center text-sm text-white mt-2">
                  {status}
                </div>
              )} */}
            </div>
          </form>
        </div>

        
        {/* <div className="md:w-1/2 w-full px-4">
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
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
