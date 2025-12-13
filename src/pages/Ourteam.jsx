
import React, { useState } from "react";

const Ourteam = () => {
  const [expanded, setExpanded] = useState(false);
  
  const doctorsData = [
      { img: "./images/img/d11.png", name: "Dr.THAMARAI", specialization: "Gynecology" },
  { img: "./images/img/d1.png", name: "DR.NELLAIYAPPAN", specialization: "Orthopedics" },
  { img: "./images/img/d2.png", name: "DR.KUMANAN", specialization: "Oncology" },
  { img: "./images/img/d3.png", name: "DR.HARI PRAKASH", specialization: "Anesthesiology" },
  { img: "./images/img/d4.png", name: "DR.BALA", specialization: "Oncology" },
  { img: "./images/img/d5.png", name: "DR.SHALINI", specialization: "Anesthesiology" },
  { img: "./images/img/d6.png", name: "DR.PAULIA DEVI", specialization: "General Surgery" },
  { img: "./images/img/d7.png", name: "DR.SATHYA MOORTHY", specialization: "Internal Medicine" },
  { img: "./images/img/d8.png", name: "DR.NITHYA PRIYAN", specialization: "Anesthesiology" },
  { img: "./images/img/d9.png", name: "DR.SOORIYA.S", specialization: "Dermatology" },
  { img: "./images/img/d10.png", name: "DR.SUJITHA.R", specialization: "Gynecology" },
  { img: "./images/img/d12.png", name: "DR.UMA MAHESHWARI", specialization: "Pediatrics" },
  { img: "./images/img/d13.png", name: "Dr.Varshini", specialization: "Gynecology" },
  { img: "./images/img/d14.png", name: "DR.PAVITHRA", specialization: "Duty Medical Officer" },
];


  return ( <>

 <div className="story-hero-banner" id="ourteam">
      <img
        src="./images/img/download (1).webp"
        alt="Our Story Banner"
        className="story-hero-image"
      />
      <div className="story-hero-overlay">
        <h1 className="story-hero-title">Our Team</h1>
      </div>
    </div>
  

    <section className="doc-section">
  <h2>Our Dedicated Doctors</h2>
  <h5>Meet our experienced professionals</h5>
  {/* <p className="doc-sub-tit">
    Prolife's strength lies in our physician roster. Each doctor combines clinical training with patient-focused practice:
  </p> */}

  <div className="doc-section-container">
    {doctorsData.map((doc, index) => (
      <div className="doc-section-card" key={index}>
        <img src={doc.img} alt={doc.name} className="doc-section-img" />
        <div className="doc-section-overlay">
          <h3>{doc.name}</h3>
          <p>{doc.specialization}</p>
        </div>
        <div className="doc-section-icons">
          <span><i className="fa-solid fa-user-doctor"></i></span>
          <span><i className="fa-solid fa-stethoscope"></i></span>
        </div>
      </div>
    ))}
  </div>
</section>
  </>
  );
}



export default Ourteam;