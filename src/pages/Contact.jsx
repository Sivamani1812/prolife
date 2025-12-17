import React, { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    });
  };

  const toggleMenu = () => {
    document.getElementById("nav-links").classList.toggle("active");
    document.getElementById("hamburger").classList.toggle("active");
  };

  return (
    <>


      {/* Hero Banner */}
      <div className="story-hero-banner">
        <img src="/images/img/download (1).webp" alt="Banner" className="story-hero-image" />
        <div className="story-hero-overlay">
          
        </div>
      </div>
      <h1 className="story-hero-title1">Contact Us</h1>

      {/* Contact + Form */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-left">
            <h2>Book your Appointment now</h2>
            <p>
              Reach out to <strong>Prolife Hospitals</strong> for enquiries or appointments.
            </p>

            <form onSubmit={handleSubmit}>
              <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full Name" required />
              <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" required />
              <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone Number" required />
              <input name="location" value={formData.location} onChange={handleChange} type="text" placeholder="Location" required />
              <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Your Message..." required></textarea>

              <button type="submit" className="submit-btn">Send Now</button>
            </form>
          </div>
          
          <div className="contact-right">
            <div className="info-box">
              <span><i className="fa-solid fa-phone fa-lg"></i></span>
              <h4>Phone Number</h4>
              <p>8220305887 / 7305737051 / 9790869211</p>
            </div>

            <div className="info-box">
              <span><i className="fa-solid fa-envelope fa-lg"></i></span>
              <h4>Email Address</h4>
              <p>prolifehospitalog@gmail.com</p>
            </div>

            <div className="info-box">
              <span><i className="fa-solid fa-location-dot fa-lg"></i></span>
              <h4>Our Location</h4>
              <p>IAS Colony, Manapakkam - Chennai</p>
              <p>Mugalivakkam - Chennai</p>
            </div>
          </div>

        </div>
      </section>

      {/* Map */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.668105289018!2d80.181268!3d13.014249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260c5f12c0001%3A0xb46d11c2707c2574!2sProlife%20maternity%20%26%20fertility%20hospital%20-%20Maternity%20%7C%20Infertility%20%7C%20Gynecology%20%7C%20General%20Surgeon%20in%20Chennai!5e0!3m2!1sen!2sin!4v1761895970569!5m2!1sen!2sin"
          width="100%" height="350" style={{ border: 0 }} loading="lazy">
        </iframe>
      </div>
    </>
  );
};

export default Contact;
