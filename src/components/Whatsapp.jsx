
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div className="float-container">
      
      {/* Call Button */}
      <a
        href="tel:+919790869211"
        className="call-float"
        title="Call Us"
      >
        <FaPhoneAlt />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919790869211"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
};

export default WhatsApp;
