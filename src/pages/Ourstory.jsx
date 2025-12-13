
import React, { useState, useEffect } from "react";

const OurStory = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [storyModal, setStoryModal] = useState({
    show: false,
    img: "",
    title: "",
    text: ""
  });

useEffect(() => {
  const elements = document.querySelectorAll(
    ".services-container, .services-list li, .services-right"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
}, []);


  const faqData = [
    {
      question: "Can I transfer my pregnancy care mid-term?",
      answer:
        "Yes. Many women join us after poor experiences elsewhere. Bring your medical records, and we'll continue your prenatal care seamlessly."
    },
    {
      question: "Will my partner be present during delivery?",
      answer:
        "Absolutely. Partners can stay throughout labor and delivery, including cesarean sections."
    },
    {
      question: "Do you handle emergency deliveries?",
      answer:
        "Our obstetric team is available 24/7 for labor emergencies and pregnancy complications."
    },
    {
      question: "What's your approach to fertility treatment?",
      answer:
        "We start with simpler interventions before advancing to expensive procedures. Many couples conceive with basic treatment adjustments."
    },
    {
      question: "How long is a typical hospital stay?",
      answer:
        "Natural deliveries: 24-48 hours. Cesarean sections: 3-4 days. We're flexible based on your recovery."
    },
    {
      question: "Do you provide second opinions?",
      answer:
        "Yes. Bring your test results and recommendations from other doctors. We'll give honest feedback."
    },
    {
      question: "What age range do you treat?",
      answer:
        "From adolescence (menstrual concerns, vaccination) through menopause and beyond."
    }
  ];

  const storyCards = [
    {
      img: "./images/img/story1.webp",
      title: "Specialized Focus on Women's Health",
      text: "Unlike general hospitals where obstetrics is just another department, women's healthcare is our entire practice. Our doctors don't split attention across multiple specialties—they've dedicated their careers exclusively to gynecology, obstetrics, and fertility care. This focused expertise means better outcomes for you."
    },
    {
      img: "./images/img/story2.webp",
      title: "Complete Care in One Location",
      text: "Stop running between different clinics for consultations, scans, lab tests, and medications. At Prolife, you'll complete everything in a single visit. Your doctor orders an ultrasound? Walk down the hall. Need blood work? Our lab is ready. Prescriptions? Pick them up before you leave. This saves your time and eliminates the frustration of coordinating between providers who never speak to each other."
    },
    {
      img: "./images/img/story3.webp",
      title: "Your Doctor, Your Entire Journey",
      text: "When you select an obstetrician at Prolife, they stay with you from your first prenatal visit through delivery and postpartum care. No rotating doctors. No strangers delivering your baby. Your physician knows your medical history, understands your birth preferences, and has built trust with you over nine months. That continuity matters when you need it most."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const openStoryModal = (card) => {
    setStoryModal({
      show: true,
      img: card.img,
      title: card.title,
      text: card.text
    });
    document.body.style.overflow = "hidden";
  };

  const closeStoryModal = () => {
    setStoryModal({ ...storyModal, show: false });
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.className === "story-modal show") {
        closeStoryModal();
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [storyModal]);

  useEffect(() => {
  const items = document.querySelectorAll(
    ".approach-grid div, .approach-bullets li, .approach-descriptions p"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show-approach");
      });
    },
    { threshold: 0.2 }
  );

  items.forEach(i => observer.observe(i));
}, []);

// export default function MaternityClinicSections()
  return (
    <div className="story">

      {/* Story Section */}
      <section className="story-hero-section">
        <div className="story-hero-banner">
          <img src="./images/img/download (1).webp" alt="Our Story Banner" className="story-hero-image" />
          <div className="story-hero-overlay">
            <h1 className="story-hero-title">About Prolife Hospital</h1>
          </div>
          <p>Trusted Women's Healthcare in Chennai Since 2013</p>
        </div>

        <div className="story-hero-content">
          <div className="story-hero-text-about">
            <h2>OUR STORY:</h2>
            <p>Prolife Hospitals began in December 2013 with a focused mission: deliver specialized women's healthcare to families across West Chennai.</p>
            <p>Today, we're recognized as one of the best maternity hospitals in Chennai, serving women from Manapakkam, Mugalivakkam, Porur, Ramapuram, and nearby IT corridors.</p>
            <p>Over the past decade, we've helped thousands of women through pregnancy, fertility challenges, and gynecological concerns. Our growth comes from one simple principle: treat every patient the way we'd want our own family treated.</p>
          </div>

          <div className="story-hero-image-container">
            <img src="./images/img/Prolife-office.png" alt="Prolife Hospital" className="story-hero-sideimage" />
          </div>
        </div>

        <div className="story-title">
          <h2 style={{ textAlign: "center" }}>What Makes Us Different</h2>
        </div>

        <div className="story-container">
          {storyCards.map((card, i) => (
            <div key={i} className="story-card" onClick={() => openStoryModal(card)}>
              <img src={card.img} alt={card.title} className="story-image" />
              <h3 className="story-title">{card.title}</h3>
              <p className="story-text">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Modal */}
      {storyModal.show && (
        <div className="story-modal show">
          <div className="story-modal-content">
            <span className="story-close-btn" onClick={closeStoryModal}>&times;</span>
            <img src={storyModal.img} alt="Story Image" />
            <h3>{storyModal.title}</h3>
            <p>{storyModal.text}</p>
          </div>
        </div>
      )}

      <section className="services-section">
         <h2 className="services-title">Our Services</h2>
        <div className="services-container">
           
          <div className="services-left">
            <h3 className="services-heading">Comprehensive Gynecology Care</h3>

            <ul className="services-list">
              <li>Pre-pregnancy Counselling</li>
              <li>Pregnancy Care</li>
              <li>High-risk Pregnancy Management</li>
              <li>GDM (Gestational Diabetes Mellitus)</li>
              <li>Thyroid Disorders</li>
              <li>Hypertension</li>
              <li>Preterm Labour Management</li>
              <li>Obstetric Emergencies</li>
              <li>Normal Vaginal Delivery (NVD)</li>
              <li>Assisted Delivery — Vacuum &amp; Forceps</li>
              <li>Caesarean Sections (LSCS)</li>
              <li>Emergency &amp; Elective LSCS</li>
              <li>Elective LSCS + Sterilisation</li>
              <li>Cervical Encirclage (Cerclage)</li>
              <li>LAB Services</li>
            </ul>
          </div>

          <div className="services-right">
            <h3 className="services-heading">Personalized Maternity Care</h3>
            <p className="services-text">
              Your pregnancy should reflect your preferences—not a one-size-fits-all
              protocol. We provide flexible delivery options based on your location
              needs, budget, insurance coverage, and comfort level. Whether you want
              natural childbirth, pain management, or a planned cesarean, we support
              informed decisions.
            </p>

            <h3 className="services-heading">Fertility Treatment That Works</h3>
            <p className="services-text">
              Facing conception difficulties affects you emotionally and physically.
              We start with simple solutions and progress to advanced fertility
              treatments only when needed. Supportive, judgement-free care at every
              step.
            </p>
          </div>
        </div>
      </section>

      <section className="trust-section">
  <div className="trust-container">
    <h2 className="trust-title">Why Families Trust Us</h2>

    <div className="trust-grid">
      {/* 1 */}
      <div className="trust-card">
        <div className="trust-icon">
          <i className="fa-solid fa-baby fa-3x"></i>
        </div>
        <h3>High-Risk Pregnancy Expertise</h3>
        <p>
          Our maternal-fetal specialists manage diabetes, hypertension,
          multiple pregnancies, and complex cases with coordinated tertiary
          care access.
        </p>
      </div>

      {/* 2 */}
      <div className="trust-card">
        <div className="trust-icon">
          <i className="fa-solid fa-microscope fa-3x"></i>
        </div>
        <h3>Advanced Diagnostic Technology</h3>
        <p>
          High-clarity ultrasound and expert imaging ensures early detection
          and accurate monitoring throughout pregnancy.
        </p>
      </div>

      {/* 3 */}
      <div className="trust-card">
        <div className="trust-icon">
          <i className="fa-solid fa-award fa-3x"></i>
        </div>
        <h3>Two Decades of Experience</h3>
        <p>
          Thousands of successful deliveries and fertility cases backed by
          skilled clinical judgment for safer outcomes.
        </p>
      </div>

      {/* 4 */}
      <div className="trust-card">
        <div className="trust-icon">
          <i className="fa-solid fa-hand-holding-medical fa-3x"></i>
        </div>
        <h3>Physiotherapy & Recovery Support</h3>
        <p>
          Targeted therapy for pain relief, mobility, and postpartum recovery
          to help mothers heal the right way.
        </p>
      </div>

      {/* 5 */}
      <div className="trust-card">
        <div className="trust-icon">
          <i className="fa-solid fa-person-breastfeeding fa-3x"></i>
        </div>
        <h3>Lactation & Midwifery Services</h3>
        <p>
          Compassionate support for breastfeeding comfort, supply issues,
          and practical guidance for new mothers.
        </p>
      </div>
    </div>
  </div>
</section>


      <section className="results-section">
        <div className="results-overlay">
          <div className="results-container">
            <h2 className="results-title">Our Results Since 2013</h2>
            <div className="results-grid">
              <div className="results-card">
                <h3>10,000+</h3>
                <p>Women Treated Across All Services</p>
              </div>
              <div className="results-card">
                <h3>2,500+</h3>
                <p>Successful Deliveries</p>
              </div>
              <div className="results-card">
                <h3>Hundreds</h3>
                <p>Of Couples Achieved Pregnancy Through Fertility Care</p>
              </div>
              <div className="results-card">
                <h3>24/7</h3>
                <p>Emergency Obstetric Services</p>
              </div>
              <div className="results-card">
                <h3>98%</h3>
                <p>Patient Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="approach-container">
          <h2 className="approach-title">Our Medical Approach</h2>
          <div className="approach-grid">
            {/* Left: bullet points */}
            <div className="approach-bullets">
              <ul>
                <li>Evidence-Based Treatment</li>
                <li>Shared Decision-Making</li>
                <li>Preventive Focus</li>
                <li>Transparent Communication</li>
              </ul>
            </div>

            {/* Right: descriptions */}
            <div className="approach-descriptions">
              <p><strong>Evidence-Based Treatment</strong> — We follow proven protocols while recognizing each patient's unique situation.</p>
              <p><strong>Shared Decision-Making</strong> — We provide recommendations; you make the final choices about your care.</p>
              <p><strong>Preventive Focus</strong> — Regular screenings catch problems early, leading to simpler solutions.</p>
              <p><strong>Transparent Communication</strong> — No jargon unless explained. No surprise fees. No hidden agendas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="location-container">
          <h2 className="location-title">Convenient West Chennai Location</h2>
          <p className="location-description">
            Easily accessible from Manapakkam, Mugalivakkam, Porur, Ramapuram, Vadapalani, and surrounding areas. Close to major IT parks for working professionals.
          </p>

          <div className="location-grid">
            <div className="location-card">
              <h3>Walk-In Hours</h3>
              <p>Mon-Sat: 9 AM - 8 PM | Sun: 9 AM - 2 PM</p>
            </div>
            <div className="location-card">
              <h3>Emergency Services</h3>
              <p>24/7 obstetric emergency care</p>
            </div>
            <div className="location-card">
              <h3>Parking</h3>
              <p>Ample space available</p>
            </div>
            <div className="location-card">
              <h3>Accessibility</h3>
              <p>Wheelchair accessible facility</p>
            </div>
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

    </div>
  );
};



export default OurStory;
