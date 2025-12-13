import React from "react";
import "../index.css"; // CSS path correct-a iruka check panniko

export default function Footer() {
  return (
    <footer className="footer">
      {/* Column 1 */}
      <div className="footer-column footer-logo">
        <img src="./images/img/prolife-logo.png" alt="Prolife Hospital Logo" />
        <p>
          River View Enclave, No:1, 1st Street, IAS, IPS Colony,<br />
          Manapakkam, Chennai, Tamil Nadu 600125<br /><br />
          Prolife Women's Centre No:4, Krishnaveni Nagar,<br />
          Mugalivakkam, Chennai, Tamil Nadu 600125
        </p>
        <p><strong>Call Us:</strong> 8220305887 / 7305737051 / 9790896211</p>
        <p><strong>Mail:</strong> prolifehospitalog@gmail.com</p>

        <div className="social-icons">
          <a href="https://www.facebook.com/prolifeogclinic"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/prolifehospitalchennai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="fa-brands fa-instagram"></i></a>
          <a href="https://youtube.com/@prolifeogclinic2028?si=bfduUeWAiSfba32f"><i className="fa-brands fa-youtube"></i></a>
          <a href="https://wa.me/918220305887"><i className="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>

      {/* Column 2 */}
      <div className="footer-column">
        <h4>Quick Links</h4>
        <a href="/story">Our History</a><br />
        <a href="/pregnancy-maternity">Obstetrics</a><br />
        <a href="/abnormal-uterine-bleeding">Gynecology</a><br />
        <a href="/team">Our Doctors</a><br />
        <a href="/contact">Contact Us</a>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.668105289018!2d80.181268!3d13.014249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260c5f12c0001%3A0xb46d11c2707c2574!2sProlife%20maternity%20%26%20fertility%20hospital%20-%20Maternity%20%7C%20Infertility%20%7C%20Gynecology%20%7C%20General%20Surgeon%20in%20Chennai!5e0!3m2!1sen!2sin!4v1761895970569!5m2!1sen!2sin"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="location-map"
          ></iframe>
        </div>
      </div>

      {/* Column 3 */}
      <div className="footer-column">
        <h4>Quick Contact</h4>
        <form className="contact-form" id="footer-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Mobile Number" required />
          <input type="text" placeholder="Subject" />
          <textarea rows="4" placeholder="Your message (optional)"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <section className="footer-section">
        <div className="footer-bottom">
          Copyright © 2025.
          <a href="https://www.prolifehospitals.com/">Prolife Hospital</a>.
          All Rights Reserved. || Designed by
          <a href="https://dgrowmarketing.com/">D-Grow Marketing</a>
        </div>
      </section>
      
    </footer>


  );
}
