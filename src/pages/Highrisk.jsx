
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faPills,
  faShieldHeart,
  faPersonRunning,
  faClock,
  faClipboardCheck,
  faAppleWhole,
  faCalendarDays,
  faUserMd,
  faBaby,
  faHeartbeat,
  faMicroscope,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import { FaCheckCircle } from "react-icons/fa";

const highrisk = () => {

  const SERVICES = [
    {
      title: "Maternity Care",
      desc:
        "Comprehensive care for pregnancies with complications, medical conditions, or previous pregnancy losses.",
      icon: faUserMd,
    },
    {
      title: "Fertility Treatment",
      desc:
        "Plan your pregnancy with risk assessment and health optimization before conceiving.",
      icon: faBaby,
    },
    {
      title: "Gynecology Care",
      desc:
        "Complete antenatal care with regular monitoring, scans, and delivery support.",
      icon: faHeartbeat,
    },
    {
      title: "Pediatric Care",
      desc:
        "If you're struggling to conceive, our fertility specialists help you start your family.",
      icon: faMicroscope,
    },
    {
      title: "Laparoscopic Surgery",
      desc:
        "Treatment for polycystic ovary syndrome affecting pregnancy and hormonal health.",
      icon: faStethoscope,
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.12 }
    );

    const cards = node.querySelectorAll(".rs-card");
    cards.forEach((c) => observer.observe(c));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Experienced Gynecologists",
      desc: "Our specialists provide personalized care backed by years of successful pregnancy guidance.",
    },
    {
      title: "Thorough Health Assessment",
      desc: "We evaluate medical, lifestyle, and reproductive health factors for safer conception.",
    },
    {
      title: "Evidence-Based Fertility Support",
      desc: "Advanced diagnostic testing and proven strategies to boost natural conception.",
    },
    {
      title: "Early Problem Detection",
      desc: "Conditions like PCOS, thyroid & deficiencies are treated before they cause risks.",
    },
    {
      title: "Individualized Action Plans",
      desc: "Every woman is different. Your care plan will be 100% personalized to your health.",
    },
  ];

  const items = [
    {
      icon: faLeaf,
      title: "Nutritional Optimization",
      description:
        "Boost key nutrients like iron, calcium, protein & essential vitamins for healthy conception.",
    },
    {
      icon: faPills,
      title: "Folic Acid & Supplements",
      description:
        "Right folic acid dosage reduces birth defects by 70% + Vitamin D & iron correction.",
    },
    {
      icon: faShieldHeart,
      title: "Medication Safety Review",
      description:
        "We recheck medications to ensure they're pregnancy-safe & replace if required.",
    },
    {
      icon: faPersonRunning,
      title: "Lifestyle Modifications",
      description:
        "Stress reduction, exercise planning, sleep guidance & habit transformation.",
    },
    {
      icon: faClock,
      title: "Fertility Timing Guidance",
      description:
        "Get your exact fertile window clarified to improve natural conception chances.",
    },
    {
      icon: faClipboardCheck,
      title: "Follow-Up Schedule",
      description:
        "Regular tracking + progress review + new guidance as you move forward.",
    },
  ];

  const experts = [
    {
      name: "Dr. Sujitha R",
      title: "Senior Gynecologist",
      desc: "15+ years managing normal and complicated pregnancies. Known for her patient-centered approach that ensures mothers feel heard and supported.",
      img: "/images/doctors/sujitha.jpg", // just place image in public folder
    },
    {
      name: "Dr. Thamarai",
      title: "Maternal Health Specialist",
      desc: "Expert in handling pregnancies with medical complications—diabetes, hypertension, autoimmune conditions. Clinical precision with calm demeanor.",
      img: "/images/doctors/thamarai.jpg",
    },
    {
      name: "Dr. Varshini",
      title: "Obstetrician",
      desc: "Modern obstetric practices with compassionate care. Skilled at managing first-time mothers and ensuring smooth deliveries.",
      img: "/images/doctors/varshini.jpg",
    },
    {
      name: "Dr. Uma Maheshwari",
      title: "Pediatrician",
      desc: "Newborn care specialist. Baby’s first medical assessment, vaccination plan & parental support.",
      img: "/images/doctors/uma.jpg",
    },
  ];

  const planItems = [
    {
      icon: faAppleWhole,
      title: "First Trimester (Weeks 1-12)",
      description:
        "Specific dietary changes to boost protein, calcium, iron & essential vitamins needed for conception.",
    },
    {
      icon: faPills,
      title: "Folic Acid & Supplements",
      description:
        "Right folic acid dosage (reduces birth defects up to 70%) + Vitamin D & iron correction if needed.",
    },
    {
      icon: faShieldHeart,
      title: "Medication Safety Review",
      description:
        "We ensure your current medications are pregnancy-safe or recommend safer alternatives.",
    },
    {
      icon: faPersonRunning,
      title: "Lifestyle Modifications",
      description:
        "Stress reduction, proper exercise routines & fertility-boosting habit changes.",
    },
    {
      icon: faCalendarDays,
      title: "Fertility Timing Guidance",
      description:
        "Understand your fertile window clearly — many couples simply miss this right timing!",
    },
    {
      icon: faClipboardCheck,
      title: "Follow-Up Schedule",
      description:
        "Regular check-ins to guide progress & update your plan as your body changes.",
    },
  ];

  const eligibilityList = [
    "Diabetes, hypertension, thyroid disorders",
    " Heart, kidney, or autoimmune conditions",
    "  Previous miscarriages or preterm deliveries",
    "History of C-section or pregnancy complications",
    " Multiple gestations (twins/triplets)",
    "Age under 17 or over 35",
    "Fetal growth or genetic concerns",
    "besity or lifestyle-related risks",
  ];

  const reviewsData = [
    {
      text: "I received impeccable care from Dr. Thamarai ram and Prolife Hospital for the delivery of my twins. Dr listens to us and respects our choices and is very empathetic and respectful. Great Doctor with a great personality. We felt that we are in the safe hands.",
      name: " -Mohammed",
      avatar: "M",
      rating: 5
    },
    {
      text: "It's was a beautiful and pleasant experience and journey with Prolife Hospital and Dr.Thamarai Ram during planning for pregnancy, pregnancy, delivery and post delivery. Warmth, hospitality and helping tendency during delivery time makesour life easy and to be appreciated. Hope and trust this will be continued in years to come.",
      name: "-Sreya",
      avatar: "S",
      rating: 5
    },
    {
      text: "We had our second delivery in prolife. We had safe delivery experience by Dr. tamarai, Dr. Sujitha, Dr Iswarya . We had excellent support and care by ward staff and nurses.They take care of my wife and daughter very well. Rooms also neat and clean",
      name: "-Selva Ganesh",
      avatar: "S",
      rating: 5
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const faqData = [
    {
      question: "What makes a pregnancy high risk?",
      answer:
        " Any condition that increases the chance of complications for the mother or baby."
    },
    {
      question: "How often will I need follow-ups?",
      answer:
        "Weekly, biweekly, or more frequent—depending on your condition."
    },
    {
      question: "Can I have a normal delivery?",
      answer:
        "Yes, many high-risk mothers still have vaginal births. Decisions vary based on safety."
    },
    {
      question: "Will my baby require special care?",
      answer:
        "Only if medically necessary. Our NICU team is available onsite."
    },
    {
      question: "What if complications occur suddenly?",
      answer:
        "Our obstetric emergency team operates 24/7."
    },
    {
      question: "Is treatment covered by insurance?",
      answer:
        " Coverage depends on your policy; our team helps verify details."
    },
    {
      question: "How do you monitor my baby?",
      answer:
        "Ultrasounds, Doppler, fetal heart monitoring, and growth scans."
    },
  ];
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };


  const steps = [
    {
      icon: <i className="fa-solid fa-file-medical fa-2x"></i>,
      title: "Frequent Monitoring",
      desc: "Expect closer follow-ups—weekly, biweekly, or as recommended by your specialist.",
    },
    {
      icon: <i className="fa-solid fa-user-doctor fa-2x"></i>,
      title: "Medical Condition Control",
      desc: "We adjust treatment plans for: Diabetes & hypertension, Thyroid disorders, Kidney or cardiac issues, Autoimmune conditions",
    },
    {
      icon: <i className="fa-solid fa-motorcycle fa-2x"></i>,
      title: "Safe Delivery Planning",
      desc: "Based on your risk level, we prepare for: Normal delivery when safe, Planned C-section when necessary, NICU support at birth if required",
    },
    {
      icon: <i className="fa-solid fa-capsules fa-2x"></i>,
      title: "Nutrition & Medication Guidance",
      desc: "We provide a safe diet plan, supplement guidance, and medication review to protect both mother and baby.",
    },
    {
      icon: <i className="fa-solid fa-people-group fa-2x"></i>,
      title: "Emotional & Family Support",
      desc: "High-risk pregnancies demand reassurance, clear communication, and continuous guidance—our team stays by your side at every step.",
    },
  ];


  const supports = [
    'Dr. Hari Prakash, Dr. Shalini, Dr. Nithya Priyan – Experienced anesthesiologists',
    'Dr. Uma Maheshwari – Senior pediatrician providing newborn care',
  ];

  return (
    <div className="pre-pregnancy-page">

      {/* Hero Banner */}
      <div className="story-hero-banner">
        <img
          src="/images/img/g-bg.webp"
          alt="Pre-pregnancy Banner"
          className="story-hero-image"
        />
        <div className="story-hero-overlay">
          <h1 className="story-hero-title">High-Risk Pregnancy Management</h1>
        </div>
      </div>

      {/* PLAN PREGNANCY SECTION */}
      <section className="plan-pregnancy-section">
        <div className="plan-container">

          <div className="plan-left">
            <h2 className="plan-title">
              Advanced Care for Safe, <br /> <span> Confident & Well-Monitored Pregnancies</span>
            </h2>

            <p className="plan-description">
              A high-risk pregnancy needs more than routine care—it needs close monitoring, timely decisions, and specialists who understand every detail of maternal and fetal health.
              At Prolife Hospitals, Manapakkam, we support mothers facing complex pregnancies with expert medical oversight and advanced diagnostic technology.
            </p>
            <p className="plan-description">
              Our goal is simple: <b> protect your health and guide your pregnancy safely to delivery.</b>
            </p>

            <a href="/contact" className="plan-btn">
              Book Your High-Risk Pregnancy Consultation →
            </a>
          </div>

          <div className="plan-right">
            <img
              src="/images/img/pre-pregnancy1.jpg"
              alt="Pre Pregnancy Consultation"
            />
          </div>

        </div>
      </section>

      <section className="plan-pregnancy-section">
        <div className="plan-container">
          <div className="plan-right">
            <img
              src="/images/img/pre-pregnancy2.jpg"
              alt="Pre Pregnancy Consultation"
            />
          </div>
          <div className="plan-left">
            <h2 className="plan-title">
              What Is High-Risk Pregnancy Management?
            </h2>

            <p className="plan-description">
              High-risk pregnancy management refers to specialized medical care for mothers who face increased chances of complications during pregnancy.

            </p>
            <p className="plan-description"> This may be due to medical conditions, previous pregnancy issues, or concerns that appear during routine tests.
              Your care plan includes regular monitoring, targeted treatments, advanced fetal assessments, and coordinated care across specialties when needed.
            </p>
            <a href="/contact" className="plan-btn">
              Learn More About Our Maternity Services →
            </a>
          </div>
        </div>
      </section>

      <section className="choose-prolife">
        <div className="choose-content">
          <h2 className="choose-title">
            Why Choose <span> Prolife </span> for High-Risk Pregnancy Care?
          </h2>
          <ul className="choose-list">
            <li>
              <strong>Experienced High-Risk Obstetricians</strong>
              <p>
                Our gynecologists and maternal-fetal experts routinely manage complex pregnancies—from hypertension to diabetes, thyroid issues, placenta complications, and more.
              </p>
            </li>
            <li>
              <strong>Focused Risk Assessment</strong>
              <p>
                Every mother receives a personalized evaluation based on medical history, pre-existing conditions, previous pregnancies, and current pregnancy concerns.
              </p>
            </li>

            <li>
              <strong>Advanced Fetal Monitoring</strong>
              <p>
                Our high-risk pregnancy treatment and monitoring includes:
                ● Detailed ultrasounds & 4D imaging
                ● Doppler studies
                ● Fetal heart rate monitoring
                ● Growth scans
                ● Screening for genetic or structural concerns
              </p>
            </li>
            <li>
              <strong>Multi-Specialty Support</strong>
              <p>
                When your pregnancy needs extra attention, our specialists in cardiology, endocrinology, nephrology, and neonatology work together for complete care.
              </p>
            </li>

            <li>
              <strong>24/7 Emergency Obstetric Support</strong>
              <p>
                Complications can arise without warning. Our emergency team, NICU, anesthesiologists, and OTs are always prepared.
              </p>
            </li>
          </ul>

          <a href="/reviews" className="choose-btn">
            Read Patient Stories →
          </a>
        </div>

        <div className="choose-img-wrapper">
          <img
            src="/images/img/u7.webp"
            alt="Pregnancy Care at Prolife"
            className="choose-img"
          />
        </div>
      </section>

      <section className="services-section">
        <h2 className="services-title">What We Evaluate During Your High-Risk Pregnancy Care</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Your Complete Medical Background</h3>
            <p> We review:
              <li>Diabetes, hypertension, heart or kidney disorders</li>
              <li>Autoimmune or thyroid conditions</li>
              <li>Medications and their pregnancy safety</li>
              <li>Weight, nutritional status, and metabolic health</li>
            </p>
          </div>

          <div className="service-card">
            <h3>Pregnancy-Specific Risks</h3>
            <p> We assess and manage:
              <li>Preeclampsia</li>
              <li>Gestational diabetes</li>
              <li>Placenta previa or low-lying placenta</li>
              <li>Preterm labor signs</li>
              <li>Reduced fetal growth</li>
              <li>Multiple pregnancies (twins, triplets)</li>
            </p>
          </div>

          <div className="service-card">
            <h3>Fetal Health Monitoring</h3>
            <p> Regular scans and tests allow us to track:
              <li>Baby’s growth rate</li>
              <li>Blood flow patterns</li>
              <li>Placental function</li>
              <li>Heart rate and movement</li>
              <li>Risks of congenital or chromosomal issues</li>
            </p>
          </div>
        </div>

        <div className="service-cta">
          <a href="/contact" className="cta-btn">
            Not sure if your pregnancy needs special attention? Connect with us  →
          </a>
        </div>
      </section>


      <section className="lab-section">
        <h2 className="lab-title">Your Personalized High-Risk Pregnancy Care Plan</h2>

        <div className="lab-grid">
          {steps.map((s, i) => (
            <div key={i} className="lab-card">
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="btn-wrapper">
          <button className="cta-btn">Book Your Appointment  →</button>
        </div>
      </section>

      <section className="timeline-section">
        <h2 className="timeline-title">How High-Risk Pregnancy Management Helps</h2>

        <div className="timeline-container">

          <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Prevents Complications</span>
            </div>
            <p>Early detection reduces risks of:</p>
            <ul>
              <li>Preeclampsia</li>
              <li>Preterm birth</li>
              <li>Baby’s growth restrictions</li>
              <li>Emergency C-sections</li>
            </ul>
          </div>

          <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Protects Mothers with Existing Conditions</span>
            </div>
            <p>Medical issues like diabetes or hypertension stay well-controlled with targeted monitoring.</p>
          </div>

          <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Ensures Baby’s Healthy Development</span>
            </div>
            <p>Advanced fetal assessments help us act quickly when any concern appears.</p>
          </div>

          <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Provides Safer Delivery Options</span>
            </div>
            <p>We plan your delivery with precision, keeping both mother and baby’s safety at the forefront.</p>
          </div>

          <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Gives Confidence & Clarity</span>
            </div>
            <p>You always know what to expect, what is being monitored, and why.</p>
          </div>
        </div>
        <div className="timeline-cta">
          <a href="/contact" className="cta-btn">
            Need reassurance? Talk to our high-risk pregnancy doctors near you →
          </a>
        </div>
      </section>

      <section className="eligibility-section">
        <div className="eligibility-container">
          <h2 className="eligibility-title">
            Who Should Consider <span> High-Risk Pregnancy Care?</span>
          </h2>
          <div className="eligibility-rows">
            {eligibilityList.map((item, index) => (
              <div key={index} className="eligibility-card">
                <div className="icon-wrapper">
                  <FaCheckCircle className="check-icon" />
                </div>
                <p className="eligibility-text">{item}</p>
              </div>
            ))}
          </div>

          <div className="eligibility-cta">
            <a href="/contact" className="cta-button">
              If any of these apply, consult our specialists early →
            </a>
          </div>
        </div>
      </section>

      {/* <section className="hp-section hp-section--alt" aria-labelledby="specialists-heading">
        <div className="hp-section__header">
          <h2 id="specialists-heading">Meet Our High-Risk Pregnancy Specialists</h2>
        </div>
        <div className="hp-grid hp-grid--3">
          {specialists.map((doc) => (
            <article key={doc.name} className="hp-card">
              <div className="hp-icon"><FaUserMd aria-hidden="true" /></div>
              <h3>{doc.name}</h3>
              <p className="hp-muted">{doc.title}</p>
              <p>{doc.desc}</p>
            </article>
          ))}
        </div>
        <div className="hp-support">
          <h3>Supported by:</h3>
          <ul>
            {supports.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="hp-cta-inline">
          <button className="hp-btn hp-btn--secondary" type="button">Meet Our Doctors</button>
        </div>
      </section> */}


      <section className="cerclage-team-section" id="team">
        <div className="container">
          <h2 className="section-title">Meet Our High-Risk Pregnancy Specialists</h2>


          <div className="team-grid">
            {/* Dr. Sujitha */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Sujitha R  </h3>
              <p className="designation">Senior Gynecologist & Obstetrician</p>
              <p className="doctor-desc">
                Expert in managing high-risk pregnancies, recurrent pregnancy loss, and complex maternal conditions.
              </p>
            </div>


            {/* Dr. Thamarai */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Thamarai</h3>
              <p className="designation"> Maternal-Fetal Medicine Specialist</p>
              <p className="doctor-desc">
                Known for her detailed monitoring, clear explanations, and calm, reassuring presence
              </p>
            </div>


            {/* Dr. Varshini */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Varshini</h3>
              <p className="designation">Gynecologist & High-Risk Pregnancy Specialist</p>
              <p className="doctor-desc">
                Provides structured care plans and precise management for mothers with medical complications.
              </p>
            </div>


            {/* Anesthesiology Team
            <div className="team-card">
              <h3 className="doctor-name">Anesthesiology Team</h3>
              <p className="designation">
                Dr. Hari Prakash | Dr. Shalini | Dr. Nithya Priyan
              </p>
              <p className="doctor-desc">
                Ensure comfortable, pain-free procedures with expert anesthesia administration. Monitor patient safety throughout surgery and recovery.
              </p>
            </div> */}
          </div>
          <div className="hp-support">
              <h3>Supported by:</h3>
              
                {supports.map((s) => (
                  <p key={s}>{s}</p>
                ))}
            </div>

          <div className="center-btn">
            <button className="cta-btn">Meet Our Doctors</button>
          </div>
        </div>
      </section>

      <section className="why-prolife-section">
  <h2 className="section-title">Why Prolife Hospital for Pregnancy Care?
</h2>
  
  <div className="prolife-grid-pregnancy">
    {[
      "10+ Years of maternity excellence",
      "  2,500+ Safe deliveries",
      "Trusted high-risk pregnancy management in Chennai",
      " NICU, OT & emergency care under one roof",
      "Affordable packages & insurance assistance",
      "Easy access in Manapakkam with family-friendly facilities",
      
    ].map((item, i) => (
      <div className="prolife-card" key={i}>
        <span className="checkmark">✓</span>
        <p>{item}</p>
      </div>
    ))}
  </div>

  <div className="prolife-cta">
    <a href="/about" className="cta-btn">Learn more about our maternity care →</a>
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
          href="https://g.page/r/CS9733eotKhCEBM/review"
          target="_blank"
          rel="noreferrer"
          className="see-more-btn"
        >
          ⭐ Read More Success Stories
        </a>
      </section>

      {/* Care Journey Section */}
      <section className="journey-section">
        <div className="journey-container">
          <div className="journey-grid">
            <div className="journey-image">
              <div className="journey-content">
                <h2>Book Your Cervical Cerclage Consultation</h2>
                <p>If you've been advised to seek high-risk pregnancy care—or if your pregnancy feels uncertain—our specialists are here to guide you safely.</p>
                <p> <b>Consultation Hours:</b> <br />
                  Monday - Saturday: 9 AM - 8 PM <br />
                  Sunday: 9 AM - 2 PM</p>
                <p><b>Emergency Care:</b> <br /> Available 24/7</p>
                <button className="appointment-btn">Book Appointment Online → </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="rs-section" aria-labelledby="rs-heading">
        <div className="rs-wrap">
          <h2 id="rs-heading" className="rs-title">
            Related Services You Might Need
          </h2>

          <p className="rs-sub">
            Care pathways and treatments tailored for maternal & newborn health.
          </p>

          <div className="rs-grid" ref={containerRef}>
            {SERVICES.map((s, i) => (
              <article key={i} className={`rs-card rs-card-${i % 5}`}>
                <div className="rs-icon">
                  <FontAwesomeIcon icon={s.icon} />
                </div>

                <div className="rs-body">
                  <h3 className="rs-head">{s.title}</h3>
                  {/* <p className="rs-desc">{s.desc}</p> */}
                </div>

                <button
                  className="rs-cta"
                  aria-label={`Learn more about ${s.title}`}
                >
                  Learn More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lab-hero">
        <div className="lab-content">
          <h1>
            Prolife Hospital —  Your trusted partner in maternal health and high-risk pregnancy management in Chennai.
          </h1>
        </div>
      </section>
    </div>
  );
};

export default highrisk;
