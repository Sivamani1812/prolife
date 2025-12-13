import React, { useState } from "react";
import { useRef } from "react";

const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

 const [modalOpen, setModalOpen] = useState(false);
const [modalData, setModalData] = useState({ img: "", title: "", text: "" });

  const handleSeeMore = () => setExpanded(!expanded);

  const openModal = (card) => {
  setModalData({ img: card.img, title: card.label, text: card.text });
  setModalOpen(true);
  document.body.style.overflow = "hidden"; // scroll lock
};

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const cardsData = [
    { img: "/images/img/s1.jpg", label: "Pre-Pregnancy Counselling", text: "Thoughtful guidance... ifbuhbcjhdc cdicbic cns hyddscnds dcsb ch n cbiuuijkjkbfsdfsdfdfcbdusjibdcdjhdnibfzfoudbcnoidsc djcdscudcud ddjcbdsucsj cjcidjciodsdicdc jcdsiuhcojdcv cnbxijzcnduc nc xziojcdnsuubcdc nbxzcz dcnjssj ciod ndhjccbscd" },
    { img: "/images/img/s2.jpg", label: "Pregnancy Care", text: "Comprehensive antenatal check-ups..." },
    { img: "/images/img/s3.jpg", label: "High-Risk Pregnancy Management", text: "Conditions like diabetes..." },
    { img: "/images/img/s4.jpg", label: "GDM (Gestational Diabetes Mellitus)", text: "Early screening, diet planning..." },
    { img: "/images/img/s5.jpg", label: "Women's Wellness", text: "Gynecologic screening..." },
    { img: "/images/img/s6.jpg", label: "Thyroid Disorders in Pregnancy", text: "Balanced thyroid levels..." },
    { img: "/images/img/s7.jpg", label: "Hypertension in Pregnancy", text: "Gestational hypertension monitoring..." },
    { img: "/images/img/s8.jpg", label: "Preterm Labour Management", text: "Advanced assessment..." },
    { img: "/images/img/s1.jpg", label: "Normal Vaginal Delivery (NVD)", text: "Encouraging natural birth..." },
    { img: "/images/img/s2.jpg", label: "Assisted Delivery – Vacuum & Forceps", text: "Assisted procedures..." },
    { img: "/images/img/s3.jpg", label: "Caesarean Sections (LSCS)", text: "Safe surgical delivery..." },
    { img: "/images/img/s4.jpg", label: "Emergency LSCS", text: "Immediate response..." },
    { img: "/images/img/s5.jpg", label: "Elective LSCS", text: "Planned C-sections..." },
    { img: "/images/img/s6.jpg", label: "Elective LSCS + Sterilisation", text: "Combined procedure..." },
    { img: "/images/img/s7.jpg", label: "Cervical Encirclage", text: "Procedure to support pregnancies..." },
    { img: "/images/img/s8.jpg", label: "LAB Services", text: "On-site laboratory investigations..." },
  ];

  // 
  const faqData = [
    {
      question: "What makes Prolife different from other hospitals in Chennai?",
      answer:
        "We focus exclusively on women's health as our primary specialty, which means deeper expertise in maternity, fertility, and gynecology. Our doctors aren't generalists—they've built their careers around these specific areas."
    },
    {
      question: "Do you handle high-risk pregnancies?",
      answer:
        " Yes. Our maternal-fetal medicine team manages conditions like gestational diabetes, preeclampsia, multiple pregnancies, and previous cesarean deliveries with specialized monitoring protocols"
    },
    {
      question: "What are your visiting hours?",
      answer:
        " Family can visit between 4 PM and 8 PM daily. We make exceptions for new fathers and primary support persons who can stay extended hours in maternity wards."
    },
    {
      question: "Is parking available at the hospital?",
      answer:
        " We maintain a dedicated parking area for patients and visitors. Attendants are available to assist during peak hours."
    },
    {
      question: "How do I book my first appointment?",
      answer:
        " Call our reception at [phone number], use our online booking system, or visit the hospital directly. First-time patients should bring any previous medical records and current medications list."
    },
    {
      question: "Do you provide emergency services?",
      answer:
        " Our emergency department operates 24/7 for obstetric emergencies, pediatric urgent care, and general medical emergencies."
    },
    {
      question: "What documents do I need for admission?",
      answer:
        " Government-issued ID, insurance card (if applicable), doctor's referral letter for planned procedures, and any relevant medical history documents."
    },
    {
      question: "Can I choose my delivery method?",
      answer:
        " Absolutely. We support both natural childbirth and cesarean delivery based on medical indications and patient preference. Your obstetrician will discuss options during prenatal visits."
    },
    {
      question: "Do you offer payment plans?",
      answer:
        " Yes. Our billing department works with families to arrange payment schedules for larger medical expenses. Discuss options during your pre-admission consultation."
    },
    {
      question: "How experienced are your gynecologists?",
      answer:
        "  Our gynecology team averages 15+ years of clinical practice. Several doctors hold fellowship training in subspecialties like reproductive endocrinology and minimally invasive surger"
    },
  ];
  
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const doctorsData = [
  { img: "./images/img/d1.png", name: "DR.NELLAIYAPPAN", specialization: "Orthopedics" },
  { img: "./images/img/d11.png", name: "Dr.THAMARAI",  specialization: "Gynecology" },
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


const reviewsData = [
  {
    text: "I received impeccable care from Dr. Thamarai ram and Prolife Hospital for the delivery of my twins. Dr listens to us and respects our choices and is very empathetic and respectful. Great Doctor with a great personality. We felt that we are in the safe hands.",
    name: "Mohammed",
    avatar: "M",
    rating: 5
  },
  {
    text: "It's was a beautiful and pleasant experience and journey with Prolife Hospital and Dr.Thamarai Ram during planning for pregnancy, pregnancy, delivery and post delivery. Warmth, hospitality and helping tendency during delivery time makes our life easy and to be appreciated. Hope and trust this will be continued in years to come.",
    name: "Sreya",
    avatar: "S",
    rating: 5
  },
  {
    text: "We had our second delivery in prolife. We had safe delivery experience by Dr. tamarai, Dr. Sujitha, Dr Iswarya . We had excellent support and care by ward staff and nurses.They take care of my wife and daughter very well. Rooms also neat and clean",
    name: "Selva Ganesh",
    avatar: "S",
    rating: 5
  }
];

const openPharmacy = () => {
    window.open("https://theprolifepharmacy.com/", "_blank");
  };

const trackRef = useRef(null); // Track-a reference panna

const moveSlide = (direction) => {
  const track = trackRef.current;
  if (!track) return;

  const card = track.querySelector(".home-doc-card");
  if (!card) return;

  const cardWidth = card.clientWidth + 22; // margin included
  const style = window.getComputedStyle(track);
  const matrix = new WebKitCSSMatrix(style.transform); // current transform
  let currentX = matrix.m41; // current translateX value

  if (direction === "left") {
    currentX = Math.min(currentX + cardWidth, 0); // left scroll limit
  } else {
    currentX = currentX - cardWidth; // right scroll (limit optional)
  }

  track.style.transition = "0.4s ease";
  track.style.transform = `translateX(${currentX}px)`;
};

  return (
    <>
      {/* Hero Section */}
      <section className="master-section">
        <div className="master-section-container">
          <div className="master-section-content">
            <h1 className="master-section-title">
              Prolife Hospitals - Premier Maternity Hospital in Chennai
            </h1>
            <p className="master-section-desc">
              Your Family Deserves Expert Care at Every Stage
            </p>
            <a href="/contact" className="master-section-btn">
              Book your Appointment Today →
            </a>
          </div>

          <div className="master-section-image">
            <img src="/images/img/hero1.png" alt="Happy Family" />
          </div>
        </div>
      </section>

      {/* Section 1 - Specialized Healthcare */}

<section className="story-hero-section home-21">
  <div className="story-hero-content home-12">
    <div className="story-hero-text home-2">
      <h2>Specialized Healthcare for Women and Growing Families</h2>
      <p>
        Choosing where to receive medical care shapes your entire health experience.
        Prolife Hospitals stands as a reliable maternity hospital in Chennai,
        supporting families from conception planning through childbirth and well beyond.
      </p>
      <p>
        We specialize in women's health care—covering maternity, fertility treatments,
        and gynecological services. More than a medical facility, we're a partner
        in your family's health story.
      </p>
    </div>

    <div className="story-hero-image-container home-2">
      <img
        src="/images/img/Prolife-office.png"
        alt="Prolife Hospital"
        className="story-hero-sideimage"
      />
    </div>
  </div>
</section>


{/* Section 2 - About Prolife */}

<section className="section-two">
  <div className="section-two-container">
    <div className="section-two-images">
      <div className="section-two-main-img">
        <img src="/images/img/home-section2img.png" alt="Family" />
      </div>
    </div>

    <div className="section-two-content">
      <span className="section-two-subtitle">About Prolife Hospitals</span>
      <h2 className="section-two-title">Three Decades of Clinical Excellence</h2>

      <p className="section-two-desc">
        Women deserve healthcare providers who listen first and respond with precision.
        Prolife creates an environment where medical expertise meets genuine understanding.
      </p>

      <p className="section-two-desc">
        Our reputation as a leading fertility hospital in Chennai comes from blending
        proven clinical protocols with personalized attention. We don't simply
        address symptoms—we support your goals, answer your concerns, and
        share in your milestones.
      </p>

      <p className="section-two-desc">
        Planning your first pregnancy? Managing a gynecological condition? Seeking specialist
        consultation? You'll work with seasoned professionals who prioritize your wellbeing.
      </p>

      <a href="/story" className="section-two-btn">
        Learn About Our Approach →
      </a>
    </div>
  </div>
</section>


      <section className="gynaecology-section">
        <h2 className="section-title-doc">What Sets Prolife Apart</h2>
        <p className="section-subtitle">Medical Excellence Meets Patient Comfort</p>

        <div className="gynaecology-container">
          <div className="gynaecology-column left">
            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-hospital"></i>
              </div>
              <div>
                <h3>Fully Equipped Surgical Suites</h3>
                <p>
                  Our modular operation theatres handle both complex and routine procedures with strict safety protocols and surgical precision.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-user-nurse"></i>
              </div>
              <div>
                <h3>Private Recovery Rooms</h3>
                <p>
                  Spacious accommodations with climate control and contemporary furnishings provide the privacy families need during hospital stays.
                </p>
              </div>
            </div>
             <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div>
                <h3>24-Hour Pharmacy Access</h3>
                <p>
                  Always-available medication and banking services eliminate logistical stress during your hospital visit.
                </p>
              </div>
            </div>
            
          </div>

          <div className="doctor-image">
            <img src="/images/img/section3-home.png" alt="Doctor" />
          </div>

          <div className="gynaecology-column right">
            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-vials"></i>
              </div>
              <div>
                <h3>In-House Diagnostic Facilities</h3>
                <p>
                  Fast, reliable test results enable timely medical decisions—reducing wait times and uncertainty.
                </p>
              </div>
            </div>
<div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-baby"></i>
              </div>
              <div>
                <h3>Comprehensive Pregnancy Services</h3>
                <p>
                  From initial ultrasounds to postpartum follow-ups, our coordinated team approach means consistent care throughout your pregnancy.
                </p>
              </div>
            </div>
            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-hand-holding-heart"></i>
              </div>
              <div>
                <h3>Transparent Pricing</h3>
                <p>
                  Healthcare should be accessible. Our straightforward costs ensure families can plan financially without surprise bills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-three">
        <div className="section-three-container">
          <div className="section-three-header">
            <h3 className="section-three-subtitle">Health Education Resources</h3>
            <p className="section-three-desc">Evidence-Based Information for Better Decisions</p>
            <p className="section-three-desc">Knowledgeable patients participate more actively in their care. Browse our physician-authored guides:</p>
          </div>

          <div className="section-three-cards">
            <div className="section-three-card">
              <img src="/images/img/h1.jpg" alt="Preparing for labour" />
              <div className="section-three-overlay">
                <h4>Labour Preparation Guide</h4>
                <p>Practical information about delivery day—what to expect, what to pack, and how to stay calm.</p>
                <button>
                  <a style={{ color: "#fff", textDecoration: "none" }} href="./PrePregnancy.jsx">
                    View More
                  </a>
                </button>
              </div>
            </div>

            <div className="section-three-card">
              <img src="/images/img/h2.webp" alt="Laparoscopic procedure" />
              <div className="section-three-overlay">
                <h4>Laparoscopic Surgery Explained</h4>
                <p>Understanding when minimally invasive options benefit your specific condition.</p>
                <button>
                  <a style={{ color: "#fff", textDecoration: "none" }} href="./surgery-and-proceures.html">
                    View More
                  </a>
                </button>
              </div>
            </div>

            <div className="section-three-card">
              <img src="/images/img/h3.webp" alt="Menopausal" />
              <div className="section-three-overlay">
                <h4>Menopause Recognition</h4>
                <p>Identifying symptoms and managing this transition with medical support.</p>
                <button>
                  <a style={{ color: "#fff", textDecoration: "none" }} href="./lab.html">
                    View More
                  </a>
                </button>
              </div>
            </div>

            <div className="section-three-card">
              <img src="/images/img/h4.jpg" alt="Hormonal imbalance" />
              <div className="section-three-overlay">
                <h4>Hormonal Balance Strategies</h4>
                <p>Lifestyle modifications and treatment options for hormonal concerns.</p>
                <button>
                  <a style={{ color: "#fff", textDecoration: "none" }} href="./menopause-change-life.html">
                    View More
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

 <section className="specialization-section">
      <div className="specialization-container">
        <h2 className="specialization-title">Clinical Departments</h2>
        <p className="specialization-subtitle">Multi-Specialty Care Coordination</p>

        <div className="specialization-grid">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="specialization-card"
              style={{ display: expanded || index < 6 ? "block" : "none" }}
              onClick={() => openModal(card)}
            >
              <div className="card-img">
                <img src={card.img} alt={card.label} />
              </div>
              <div className="card-label">{card.label}</div>
              <p className="card-text">{card.text}</p>
              <a className="learn-more">Learn More →</a>
            </div>
          ))}
        </div>

        <button className="see-more-btn" onClick={handleSeeMore}>
          {expanded ? "Show Less" : "See More..."}
        </button>
      </div>

      {/* Modal */}

        {modalOpen && (
  <div className="specialization-modal" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <span className="close-btn" onClick={closeModal}>&times;</span>
      <img src={modalData.img} alt={modalData.title} />
      <h3>{modalData.title}</h3>
      <p>{modalData.text}</p>
    </div>
  </div>
)}
    
    </section>

 
       
<section className="home-doc-slider">
  <h2 className="home-doc-title">Our Medical Team</h2>
  <h5 className="home-doc-subtitle">Board-Certified Specialists</h5>
  <p className="home-doc-text">
    Prolife's strength lies in our physician roster. Each doctor combines clinical training with patient-focused practice:
  </p>

  <div className="home-doc-wrapper">
     <div className="home-doc-track">
    {[...doctorsData, ...doctorsData].map((doc, index) => (
      <div className="home-doc-card" key={index}>
        <img src={doc.img} alt={doc.name} />
        <h4>{doc.name}</h4>
        <p>{doc.specialization}</p>
      </div>
    ))}
  </div>

  <button className="doc-arrow left">❮</button>
  <button className="doc-arrow right">❯</button>
  </div>
</section>

      {/* Reviews Section */}
      <section className="reviews-section">
  <p className="sub-title">TESTIMONIALS</p>
  <div className="google-rating">
    ⭐⭐⭐⭐⭐ <span>5/5 Google Rating</span>
  </div>

  <div className="reviews-container">
    {reviewsData.map((review, index) => (
      <div className="review-card" key={index}>
        <p className="review-text">{review.text}</p>
        <div className="reviewer">
          <div className="avatar">{review.avatar}</div>
          <div>
            <h4>{review.name}</h4>
            <div className="stars">{"⭐".repeat(review.rating)}</div>
          </div>
        </div>
      </div>
    ))}
  </div>

  <a
    href="https://www.justdial.com/Chennai/Prolife-Maternity-and-Fertility-Hospital-Near-DLF-LT-and-Chennai-Trade-Centre-Manapakkam/044PXX44-XX44-191211174423-E9K1_BZDET/reviews"
    target="_blank"
    rel="noreferrer"
    className="see-more-btn"
  >
    ⭐ See More Reviews
  </a>
</section>

      {/* Insurance Section */}
      <section className="slide-section">
        <h2>Insurance Accepted</h2>
        <p>Working With Your Coverage Provider</p>
        <p>Prolife partners with major insurance companies to facilitate billing and coverage. Contact our admissions desk to verify your specific plan.</p>

        <div className="slider-wrapper">
          <div className="slider-track" id="sliderTrack">
            <img src="/images/img/b (1).jpg" alt="" />
            <img src="/images/img/b (2).jpg" alt="" />
            <img src="/images/img/b (3).jpg" alt="" />
            <img src="/images/img/b (4).jpg" alt="" />
            <img src="/images/img/b (5).jpg" alt="" />
            <img src="/images/img/b (6).jpg" alt="" />
            <img src="/images/img/b (7).jpg" alt="" />
            <img src="/images/img/b (8).jpg" alt="" />
            <img src="/images/img/b (9).jpg" alt="" />
            <img src="/images/img/b (10).jpg" alt="" />
            <img src="/images/img/b (11).jpg" alt="" />
            <img src="/images/img/b (12).jpg" alt="" />
            <img src="/images/img/b (13).jpg" alt="" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
       <section className="faq-section">
        <h2>FAQ</h2>
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className={`faq-question ${openFAQ === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}>
              {item.question}
            </div>
            <div className={`faq-answer ${openFAQ === index ? "open" : ""}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </section>

      {/* Care Journey Section */}
      <section className="journey-section">
        <div className="journey-container">
          <div className="journey-grid">
            <div className="journey-image-home">
              <div className="journey-content">
                <h2>Begin Your Care Journey</h2>
                <p>Need expert medical attention? Prolife Hospitals provides the specialized care your family deserves.</p>
               {/* <button href="/contact" className="appointment-btn"> Book Appointment </button> */}
               <a href="/contact" className="master-section-btn">
              Book Appointment →
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}

export default Home;


   