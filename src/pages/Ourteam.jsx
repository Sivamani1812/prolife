// Ourteam.jsx
import React, { useState, useRef, useEffect } from "react";

const Ourteam = () => {
  const trackRef = useRef(null);
   const founder = {
    img: "./images/img/d11.png",
    name: "Dr. Thamarai Ram",
    specialization: "Founder & Gynecologist",
    description:
      "Mrs. Thamarai is the founder of Prolife Hospital, Chennai, driven by a vision to deliver ethical, compassionate, and high-quality healthcare. She strongly believes in a patient-first approach, ensuring that every individual receives care with dignity and trust. With a special focus on women’s health and family wellness, her leadership has shaped Prolife Hospital into a reliable and respected healthcare provider. Her dedication continues to inspire the medical team to maintain excellence in service and commitment to the community.",
  };

  const doctorsData = [
    { img: "./images/img/d12.png", name: "DR.UMA MAHESHWARI", specialization: "Pediatrics" },
    { img: "./images/img/d19.jpeg", name: "DR.PAVITHRA", specialization: "General Medican" },
    { img: "./images/img/d20.jpg", name: "DR.HARI PRIYA", specialization: "General Medican" },
    { img: "./images/img/d7.png", name: "DR.SATHYA MOORTHY", specialization: "General Phydician" },
    { img: "./images/img/d.png", name: "DR.MOHANRAJ", specialization: "General Surgeon" },
    { img: "./images/img/d6.png", name: "DR.PAULIA DEVI", specialization: "General Surgeon" }, 
    { img: "./images/img/d.png", name: "DR.AADHAISHA", specialization: "Dermatologist" }, 
    { img: "./images/img/d.png", name: "DR.ASHOK", specialization: "Gynecology" },
    { img: "./images/img/d.png", name: "DR.SUGAPRAKASH", specialization: "Gynecology" },
    { img: "./images/img/d.png", name: "DR.VASANTH", specialization: "Urologist" },
    { img: "./images/img/d.png", name: "DR.GERALD", specialization: "Oncologist" },
    { img: "./images/img/d.png", name: "DR.SIVAKUMAR", specialization: "Oncologist" },
    { img: "./images/img/d.png", name: "DR.MEENAXI", specialization: "ENT" },

    // { img: "./images/img/d1.png", name: "DR.NELLAIYAPPAN", specialization: "Orthopedics" },
    // { img: "./images/img/d2.png", name: "DR.KUMANAN", specialization: "Oncology" },
    // { img: "./images/img/d3.png", name: "DR.HARI PRAKASH", specialization: "Anesthesiology" },
    // { img: "./images/img/d4.png", name: "DR.BALA", specialization: "Oncology" },
    // { img: "./images/img/d5.png", name: "DR.SHALINI", specialization: "Anesthesiology" },
    // { img: "./images/img/d8.png", name: "DR.NITHYA PRIYAN", specialization: "Anesthesiology" },
    // { img: "./images/img/d9.png", name: "DR.SOORIYA.S", specialization: "Dermatology" },
   
    // { img: "./images/img/d21.jpeg", name: "DR.SAMUEL", specialization: "Orthopedics" },
    // { img: "./images/img/d17.jpeg", name: "DR.PREMA PRATHICKSHA.M", specialization: "Duty Medical Officer" },

    // { img: "./images/img/d23.jpeg", name: "DR.MURUGANANDAM", specialization: "Internal Medicine" },

    // { img: "./images/img/d13.png", name: "Dr.Varshini", specialization: "Gynecology" },
    // { img: "./images/img/d14.png", name: "DR.PAVITHRA", specialization: "Duty Medical Officer" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="story-hero-banner" id="ourteam">
        <img
          src="./images/img/download (1).webp"
          alt="Our Story Banner"
          className="story-hero-image"
        />
        <div className="story-hero-overlay"></div>
      </div>
      <h1 className="story-hero-title1">Our Team</h1>

      {/* Doctors Section */}
      <section className="founder-section">
<div className="founder-card">
<div className="founder-image">
<img src={founder.img} alt={founder.name} />
<span className="glow"></span>
</div>
<div className="founder-content">
<span className="founder-tag">Founder</span>
<h2>{founder.name}</h2>
<h4>{founder.specialization}</h4>
<p>{founder.description}</p>
<div className="founder-actions">
<button className="primary-btn"> <a href="/story"> Know More</a></button>
<button className="outline-btn"> <a href="/contact"> Contact</a></button>
</div>
</div>
</div>
</section>

      {/* Doctors Grid */}
      <section className="doc-section">
        <h2>Our Dedicated Doctors</h2>
        <p>Meet our experienced professionals</p>

        <div className="doc-section-container">
          {doctorsData.map((doc, index) => (
            <div className="doc-card" key={index}>
              <img src={doc.img} alt={doc.name} />
              <div className="doc-overlay">
                <h3>{doc.name}</h3>
                <span>{doc.specialization}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default Ourteam;




