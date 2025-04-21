import { CONTACT } from "../constants";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl font-bold">Get in Touch</h2>
      <div className="flex flex-col items-center space-y-4 text-lg tracking-tight">
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
    </div>
  );
};

export default Contact;
