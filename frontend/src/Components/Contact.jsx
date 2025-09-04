import { CONTACT } from "../constants";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePackage } from '../assets/context/PackageContext';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
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
  return (
    <div id="contactme" className="mt-8 lg:mt-15 py-8 lg:py-12">
      <h2 className="my-8 lg:my-20 text-center text-balance text-3xl sm:text-4xl font-semibold lg:text-5xl">Get in Touch</h2>
      <div className="flex flex-wrap items-center justify-center md:justify-center md:items-start gap-6 lg:gap-10">
        {/* Left Side: Description & Info */}
        <div className="w-full flex items-start justify-center md:w-1/2 flex-col space-y-4 lg:space-y-6 text-base sm:text-lg tracking-tight px-2 sm:px-4">
          <p className="mb-4 text-sm sm:text-base">
            Feel free to reach out for collaborations, project inquiries, or just to say hello!
          </p>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-700" />
            <p className="text-sm sm:text-base">{CONTACT.address}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-700" />
            <a href={`tel:${CONTACT.phoneNo}`} className="hover:text-blue-500 transition text-sm sm:text-base">
              {CONTACT.phoneNo}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-700" />
            <a href={`mailto:${CONTACT.email}`} className="hover:text-blue-500 border-b transition text-sm sm:text-base">
              {CONTACT.email}
            </a>
          </div>
        </div>
        {/* Right Side: Form */}
        {/* <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-black dark:text-white bg-white dark:bg-black p-6 rounded shadow"> */}
        <div className="w-full flex items-center justify-center px-4 sm:px-9 py-4 sm:py-8">
          <form
            onSubmit={handleSubmit}
            // action="https://formspree.io/f/movlpyvk"
            // method="POST"
            // onSubmit={() => setSubmitted(true)}
            className="w-full max-w-2xl">
            <div className="flex flex-col w-full">
              <div className="flex justify-center gap-4">
              {/* Your Name */}
              <div className="flex flex-grow items-end gap-4 py-2 sm:py-3">
                <label className="flex flex-col w-full">
                  <p className="text-white text-sm sm:text-base font-medium pb-2">Your Name</p>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="form-input w-full rounded-xl text-white bg-[#233648] h-12 sm:h-14 p-3 sm:p-4 placeholder:text-[#92adc9] text-sm sm:text-base"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              {/* Email */}
              <div className="flex flex-grow items-end gap-4 py-2 sm:py-3">
                <label className="flex flex-col w-full">
                  <p className="text-white text-sm sm:text-base font-medium pb-2">Email</p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="form-input w-full rounded-xl text-white bg-[#233648] h-12 sm:h-14 p-3 sm:p-4 placeholder:text-[#92adc9] text-sm sm:text-base"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              </div>

              {/* Package */}
              <div className="flex flex-wrap items-end gap-4 py-2 sm:py-3">
                <label className="flex flex-col w-full">
                  <p className="text-white text-sm sm:text-base font-medium pb-2">Package</p>
                  <select
                    name="package"
                    className="form-input w-full rounded-xl text-white bg-[#233648] h-12 sm:h-14 p-3 sm:p-4 placeholder:text-[#92adc9] text-sm sm:text-base"
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
              <div className="flex flex-wrap items-end gap-4 py-2 sm:py-3">
                <label className="flex flex-col w-full">
                  <p className="text-white text-sm sm:text-base font-medium pb-2">Project Description</p>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your project requirements"
                    className="form-input w-full rounded-xl text-white bg-[#233648] min-h-24 sm:min-h-36 p-3 sm:p-4 placeholder:text-[#92adc9] text-sm sm:text-base"
                  ></textarea>
                </label>
              </div>

              {/* Custom Budget */}
              {selectedPackage === 'custom' && (
                <div className="flex flex-wrap items-end gap-4 py-2 sm:py-3">
                  <label className="flex flex-col w-full">
                    <p className="text-white text-sm sm:text-base font-medium pb-2">Budget</p>
                    <input
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      type="number"
                      min={5000}
                      placeholder="e.g., $5,000 - $10,000"
                      className="form-input w-full rounded-xl text-white bg-[#233648] h-12 sm:h-14 p-3 sm:p-4 placeholder:text-[#92adc9] text-sm sm:text-base"
                    />
                  </label>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex w-full py-3 sm:py-4">
                <button
                  type="submit"
                  className="w-full h-10 sm:h-12 rounded-xl bg-slate-100 text-zinc-900 font-bold text-sm sm:text-base"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
              </div>

              {/* Status Message */}
              {submitted && (
                <div className="text-center text-xs sm:text-sm text-white mt-2">
                  {status}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
