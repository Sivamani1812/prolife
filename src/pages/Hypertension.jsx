
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


const Hypertension = () => {

  const SERVICES = [
    {
      title: "General Medicine",
      desc:
        " Comprehensive health assessments and management of chronic conditions that often accompany hypertension, including diabetes, high cholesterol, and thyroid disorders.",
      icon: faUserMd,
    },
    {
      title: "Cardiology Consultations",
      desc:
        " Specialized cardiovascular evaluations for patients with complex hypertension or those who have experienced heart-related complications.",
      icon: faBaby,
    },
    {
      title: "Dietary Counseling",
      desc:
        "Nutritional guidance specifically designed to support blood pressure management through heart-healthy eating patterns like the DASH diet.",
      icon: faHeartbeat,
    },
    {
      title: "Diabetes Management",
      desc:
        " Integrated care for patients managing both diabetes and hypertension, as these conditions often occur together and require coordinated treatment.",
      icon: faMicroscope,
    },
    {
      title: "Kidney Disease Management",
      desc:
        " Specialized care for hypertension related to kidney disease or for protecting kidney function in hypertensive patients through our urology and general medicine departments.",
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

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("gdm-visible");
      },
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
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
      text: "I had been struggling with high blood pressure for years, trying different medications with limited success. The doctors at Prolife took time to understand my complete health picture and developed a treatment plan that finally worked. My blood pressure is now consistently normal, and I feel better than I have in years.",
      name: "  Rajesh M.",
      avatar: "R",
      rating: 5
    },
    {
      text: "During my pregnancy, I developed high blood pressure that worried me terribly. The team at Prolife monitored me closely, adjusted my care plan as needed, and helped me deliver a healthy baby while keeping my condition under control. Their expertise gave me peace of mind during a stressful time",
      name: " Priya S",
      avatar: "P",
      rating: 5
    },
    {
      text: "What impressed me most was how the doctors explained everything in terms I could understand. They didn't just prescribe medication—they helped me understand how my lifestyle choices affected my blood pressure and supported me in making lasting changes.",
      name: " Kumar V",
      avatar: "K",
      rating: 5
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const faqData = [
    {
      question: "What blood pressure reading is considered hypertension?",
      answer:
        " Blood pressure of 140/90 mmHg or higher on multiple readings is generally diagnosed as hypertension. However, readings of 130/80 mmHg or above may indicate hypertension in individuals with diabetes or kidney disease. Our doctors evaluate your readings in context with your overall health to determine the appropriate classification and treatment approach"
    },
    {
      question: "How long does it take to control high blood pressure?",
      answer:
        " Most patients begin seeing improvements within a few weeks of starting treatment, though achieving optimal control typically takes several months. Response time varies based on the severity of your hypertension, how well you adhere to treatment plans, and whether lifestyle modifications are implemented alongside medication. We monitor your progress closely and adjust treatments as needed."
    },
    {
      question: "Can hypertension be cured or only managed?",
      answer:
        " While primary hypertension is typically a lifelong condition requiring ongoing management, secondary hypertension caused by specific underlying conditions may be resolved by treating the root cause. Even when cure isn't possible, effective management can reduce your blood pressure to normal levels and significantly decrease your risk of complications."
    },
    {
      question: "Do I need to take medication for life?",
      answer:
        " Not necessarily. Some patients who successfully adopt comprehensive lifestyle changes—including weight loss, regular exercise, stress management, and dietary improvements—may be able to reduce or discontinue medications under medical supervision. However, many people do require long-term medication to maintain healthy blood pressure levels. Your treatment plan will be personalized based on your individual response."
    },
    {
      question: "What lifestyle changes help lower blood pressure?",
      answer:
        "The most effective changes include reducing sodium intake to less than 2,300mg daily, maintaining a healthy weight, exercising regularly for at least 150 minutes weekly, limiting alcohol consumption, quitting smoking, managing stress through relaxation techniques, and eating a diet rich in fruits, vegetables, whole grains, and lean proteins. Our team provides practical guidance tailored to your lifestyle."
    },
    {
      question: "Is it safe to exercise with high blood pressure?",
      answer:
        "  Yes, regular physical activity is actually one of the most effective ways to lower blood pressure. However, if you have very high blood pressure or complications, we'll provide specific guidelines about appropriate exercise intensity and may recommend bringing your blood pressure under better control before starting vigorous activities. Always consult with our physicians before beginning a new exercise program."
    },
    {
      question: "Can stress cause hypertension?",
      answer:
        "While short-term stress temporarily raises blood pressure, chronic stress may contribute to sustained hypertension through various mechanisms, including unhealthy coping behaviors and hormonal changes. Stress management is an important component of comprehensive hypertension treatment. We can recommend relaxation techniques, counseling resources, and other strategies to help you manage stress effectively."
    },
     {
      question: "What complications can uncontrolled hypertension cause?",
      answer:
        " Untreated high blood pressure damages blood vessels and organs over time, increasing your risk of heart attack, heart failure, stroke, kidney disease, vision loss, sexual dysfunction, and cognitive decline. This is why early detection and consistent management are so important. Regular monitoring helps us prevent these serious complications."
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
          <h1 className="story-hero-title">Hypertension Treatment in Chennai</h1>
        </div>
      </div>

      {/* PLAN PREGNANCY SECTION */}
      <section className="plan-pregnancy-section">
        <div className="plan-container">

          <div className="plan-left">
            <h2 className="plan-title">
              Expert Blood Pressure Care at <br /> <span> Prolife Hospital </span>
            </h2>

            <p className="plan-description">
             High blood pressure doesn’t always show symptoms—but it can silently affect your heart, kidneys, brain, and overall well-being. At Prolife Hospital, our <b>hypertension treatment in Chennai</b> focuses on accurate diagnosis, personalized care plans, and long-term blood pressure control for a healthier, stress-free life.
            </p>
            <p className="plan-description">
              Whether your BP is newly elevated, long-standing, or difficult to control, our specialists provide comprehensive guidance to help you manage it effectively. As one of the  <b>best hospitals for hypertension in Chennai,</b> we combine advanced diagnostic tools with evidence-based treatments to protect your heart and improve your quality of life.
            </p>

            <a href="/contact" className="plan-btn">
              Book Your Consultation →
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
              What Is Hypertension?
            </h2>
            <p className="plan-description">
           Hypertension (high blood pressure) occurs when the force of blood against artery walls remains consistently too high. Over time, uncontrolled BP can weaken blood vessels, strain the heart, and lead to serious health issues.</p>
            <p className="plan-description">At Prolife Hospital, our <b>hypertension specialists in Chennai</b> carefully evaluate your BP patterns, lifestyle factors, related medical conditions, and family history to create a treatment plan tailored specifically to you.
            </p>
            <a href="/contact" className="plan-btn">
              Learn About BP Care →
            </a>
          </div>
        </div>
      </section>

      
       <section className="services-section">
  <h2 className="services-title">Why Choose Prolife Hospital for Hypertension Management?</h2>

  <div className="services-grid">
  
    <div className="service-card">
      <h3>Comprehensive Diagnostic Excellence</h3>
      <p>Our advanced diagnostics help us understand:</p>
      <ul>
        <li>Your BP fluctuations throughout the day</li>
        <li>Organ impact (heart, kidneys, eyes, brain)</li>
        <li>Hormonal or kidney-related causes</li>
        <li>Cardiovascular and metabolic risk factors</li>
      </ul>
      <p>We perform:</p>
      <ul>
        <li>ECG & Echocardiogram</li>
        <li>Kidney function tests</li>
        <li>Hormonal assessments</li>
        <li>Lipid profile</li>
        <li>Urine tests</li>
        <li>24-hour BP monitoring (when needed)</li>
      </ul>
      <p>This ensures a complete and accurate health evaluation.</p>
    </div>

 
    <div className="service-card">
      <h3>Personalized Treatment Plans</h3>
      <p>Your body, lifestyle, stress levels, and medical conditions are unique. So is your treatment.
We tailor your plan based on:
</p>
      <ul>
        <li>Type of hypertension (primary or secondary)</li>
        <li>Age & activity level</li>
        <li>Pregnancy or postpartum needs</li>
        <li>Diabetes, thyroid, or kidney issues</li>
        <li>Medication tolerance</li>
      </ul>
      <p>Your plan may include:</p>
      <ul>
        <li>Medication optimization</li>
        <li>Dietary changes</li>
        <li>Weight management</li>
        <li>Stress-reduction strategies</li>
        <li>Home BP monitoring support</li>
      </ul>
    </div>


    <div className="service-card">
      <h3>Multi-Specialty, Integrated Care</h3>
      <p>Hypertension is often linked to other medical concerns. Our specialists work together to address every component of your health:</p>
      <ul>
        <li>General Medicine</li>
        <li>Cardiology</li>
        <li>Nephrology</li>
        <li>Endocrinology</li>
        <li>Gynecology (for pregnancy-related hypertension)</li>
      </ul>
      <p> This coordinated approach makes Prolife the best hospital for hypertension in Chennai for complete, long-term care.</p>
    </div>


    <div className="service-card">
      <h3>Advanced Monitoring & Follow-Ups</h3>
      <p>We track your improvement closely with:</p>
      <ul>
        <li> Routine clinic BP checks</li>
        <li>Symptom evaluation</li>
        <li>Medication adjustments</li>
        <li>Lifestyle guidance</li>
        <li>Risk assessments</li>
      </ul>
      <p>You’ll always know exactly where your health stands—and what steps to take next.</p>
    </div>


    <div className="service-card">
      <h3>Patient Education & Support</h3>
      <p>We explain:</p>
      <ul>
        <li> What your BP numbers mean</li>
        <li>How hypertension affects your organs</li>
        <li>How diet, exercise, sleep & stress influence BP</li>
        <li>How to monitor BP at home correctly</li>
      </ul>
      <p>You leave each visit confident, informed, and in control of your health.</p>
    </div>
  </div>

  <div className="service-cta">
    <a href="/contact" className="cta-btn">
      Not sure where to start? Schedule a Consultation →
    </a>
  </div>
</section>

     <section className="gdm-section" ref={sectionRef}>
      <div className="gdm-inner">
        <h2 className="gdm-title">
          Who Needs Our Hypertension Care Services?
        </h2>
        <p className="gdm-subtitle">
          Our BP treatment hospital in Chennai supports individuals who have:
        </p>

        <ul className="gdm-list">
          {[
            "Primary (essential) hypertension",
            "Secondary hypertension (kidney, hormonal, or endocrine causes)",
            "Hypertension during pregnancy (gestational hypertension, preeclampsia)",
            "Resistant hypertension not responding to standard treatment",
            "Early-onset BP issues in young adults",
            "Hypertensive emergencies requiring urgent care",
            "Prehypertension",
            "Multiple risk factors (diabetes, obesity, cholesterol issues, family history)",
          ].map((item, i) => (
            <li key={i} className="gdm-item">
              <span className="gdm-check">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="gdm-note">
          If you fall into any of these categories, early evaluation is crucial.
        </div>

        <a href="#booking" className="gdm-btn">
          Book Appointment →
        </a>
      </div>
    </section>

<section className="htn-team-root" aria-labelledby="htn-team-title">
  <div className="htn-team-inner">
    <h2 id="htn-team-title">Our Expert Hypertension Care Team</h2>

    <div className="htn-team-grid">

      {/* Lead Physician */}
      <div className="htn-team-card">
        <h3>Dr. Sathya Moorthy</h3>
        <p className="htn-role">General Physician</p>
        <p className="htn-desc">
          With deep expertise in chronic condition management, Dr. Sathya Moorthy
          leads hypertension care at Prolife. His approach focuses on balancing medications,
          lifestyle changes, and long-term cardiovascular risk control.
        </p>
      </div>

      {/* Pregnancy Hypertension Team */}
      <div className="htn-team-special">
        <h3>Specialized Support for Pregnancy-Related Hypertension</h3>
        <p className="htn-subtitle">Dedicated care for gestational hypertension & preeclampsia</p>

        <ul className="htn-doctors">
          <li>
            <strong>Dr. Sujitha R</strong>
            <span>Gynecologist</span>
          </li>
          <li>
            <strong>Dr. Thamarai</strong>
            <span>Gynecologist</span>
          </li>
          <li>
            <strong>Dr. Varshini</strong>
            <span>Gynecologist</span>
          </li>
        </ul>

        <p className="htn-desc">
          These specialists ensure safe monitoring for both mother and baby.
        </p>
      </div>

    </div>
  </div>
</section>


<section className="why-prolife-section">
  <h2 className="section-title">Why Prolife Hospital Stands Out as the Best Hospital for Hypertension in Chennai
</h2>
  
  <div className="prolife-grid-pregnancy">
    {[
      " 10+ Years serving Chennai families",
      " 2,500+ Successful Deliveries and counting",
      "24/7 Emergency Obstetric Care always available",
      "98% Patient Satisfaction rating",
      " Modern Facilities with latest medical equipment",
      "Affordable Maternity Packages with transparent pricing",
      "Two Convenient Locations in Manapakkam and Mugalivakkam",
      
    ].map((item, i) => (
      <div className="prolife-card" key={i}>
        <span className="checkmark">✓</span>
        <p>{item}</p>
      </div>
    ))}
  </div>

  <div className="prolife-cta">
    <a href="/about" className="cta-btn">Book Appointment Now →</a>
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
                <p>Don't let gestational diabetes overwhelm you. With proper care and support, you can have a healthy pregnancy and deliver a thriving baby. Our team at Prolife Hospitals is ready to guide you through every step.</p>
                
                <p> <b>Consultation Hours:</b> <br />
                  Monday - Saturday: 9 AM - 8 PM <br />
                  Sunday: 9 AM - 2 PM</p>
                <p><b>Emergency Care:</b> <br /> Available 24/7</p>
                <button className="appointment-btn">Book an Appointment → </button>
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
            Related Services You Might Find Helpful
          </h2>

          <div className="rs-grid" ref={containerRef}>
            {SERVICES.map((s, i) => (
              <article key={i} className={`rs-card rs-card-${i % 5}`}>
                <div className="rs-icon">
                  <FontAwesomeIcon icon={s.icon} />
                </div>

                <div className="rs-body">
                  <h3 className="rs-head">{s.title}</h3>
                   <p className="rs-desc">{s.desc}</p> 
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
    </div>
  );
};

export default Hypertension;
