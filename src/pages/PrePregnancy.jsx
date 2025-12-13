
import React, { useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import { FaCheckCircle } from "react-icons/fa";


const PrePregnancy = () => {
  
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

  const assessmentData = [
    {
      title: "Your Complete Health Picture",
      points: [
        "Chronic conditions (diabetes, thyroid, BP, asthma)",
        "Medication & pregnancy safety evaluation",
        "Weight, nutrition & metabolic health",
        "Lifestyle: smoking, alcohol, exercise & stress"
      ]
    },
    {
      title: "Reproductive Health Evaluation",
      points: [
        "Menstrual cycle pattern & symptoms",
        "PCOS or hormonal imbalance screening",
        "Ultrasound / pelvic checks for fibroids or cysts",
        "Fertility window & ovulation optimization"
      ]
    },
    {
      title: "Risk Screening & Prevention",
      points: [
        "Family history of genetic issues",
        "Previous pregnancy outcomes",
        "Required vaccinations check",
        "Infection screening if needed"
      ]
    }
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
    desc: "15+ years in obstetrics and reproductive health. Specializes in high-risk pregnancy planning and fertility optimization.",
    img: "/images/img/d10.png",
  },
  {
    name: "Dr. Thamarai",
    title: "Maternal-Fetal Medicine Specialist",
    desc: "Expert in managing complex medical conditions before and during pregnancy—diabetes, hypertension, autoimmune disorders.",
    img: "/images/img/d11.png",
  },
  {
    name: "Dr. Varshini",
    title: "Fertility Specialist",
    desc: " Advanced training in reproductive endocrinology. Helps couples facing conception challenges using evidence-based approaches.",
    img: "/images/img/d13.png",
  },
];

  const planItems = [
  {
    icon: faAppleWhole,
    title: "Nutritional Optimization",
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
    "First-time parents who want to prepare properly",
    "Couples trying for 6+ months without success",
    "Women with PCOS or irregular menstrual cycles",
    "Anyone with chronic conditions (diabetes, thyroid, hypertension)",
    "Previous pregnancy complications or miscarriage",
    "Women over 30 planning to conceive",
    "Family history of genetic conditions or pregnancy issues",
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

const [openFAQ, setOpenFAQ] = useState(null);
const faqData = [
    {
      question: "When should I schedule pre-pregnancy counseling?",
      answer:
        " Plan for 3-6 months before trying to conceive. This gives time to optimize health, update vaccines, and address any issues."
    },
    {
      question: "How long does the appointment take?",
      answer:
        " Your first visit lasts 45-60 minutes. We allocate enough time for all your questions."
    },
    {
      question: "What tests will I need?",
      answer:
        "  Most women get basic blood work checking thyroid, blood count, and vitamin levels. Additional tests depend on your health history."
    },
    {
      question: "Can this help if I'm struggling to conceive?",
      answer:
        " Yes. Many couples conceive after addressing issues found during assessment—vitamin deficiencies, cycle problems, or timing issues."
    },
    {
      question: "Should my partner attend?",
      answer:
        " Yes, especially if you've been trying for several months. Male factors contribute to 40% of fertility issues."
    },
    {
      question: "I had a miscarriage. How does this help?",
      answer:
        "  We investigate possible causes—hormonal problems, clotting disorders, uterine issues—and treat them before your next attempt."
    },
    {
      question: "What if I have diabetes or other conditions?",
      answer:
        " Pre-pregnancy counselling is especially important. We optimize control, adjust medications, and monitor closely for safe outcomes."
    },
    {
      question: "Does insurance cover this?",
      answer:
        " Many plans cover preconception counselling. Check with your provider. Our billing team can help verify coverage"
    },
    {
      question: "How is this different from a regular checkup?",
      answer:
        " Regular checkups assess current health. Pre-pregnancy counselling prepares your body specifically for conception with detailed planning."
    },
    {
      question: "What are your consultation fees?",
      answer:
        "Contact us for detailed pricing and package options. "
    },
  ];
const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

   const relatedServices = [
  {
    title: "Fertility Treatment",
    desc: "Advanced fertility care for couples facing conception challenges.",
    icon: "👶",
  },
  {
    title: "High-Risk Pregnancy Care",
    desc: "Specialized monitoring for complex medical conditions during pregnancy.",
    icon: "❤️",
  },
  {
    title: "Maternity Packages",
    desc: " Complete pregnancy care from conception to postpartum.",
    icon: "🦋",
  },
  {
    title: "PCOS Management",
    desc: " Treatment plans for polycystic ovary syndrome and hormonal balance.",
    icon: "🧬",
  },
  {
    title: "Menstrual Health",
    desc: "Diagnosis and treatment for irregular or painful periods.",
    icon: "🩺",
  }
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
          <h1 className="story-hero-title">Pre-Pregnancy Counselling in Chennai</h1>
        </div>
      </div>

      {/* PLAN PREGNANCY SECTION */}
      <section className="plan-pregnancy-section">
        <div className="plan-container">

          <div className="plan-left">
            <h2 className="plan-title">
              Plan Your Pregnancy with <br />
              <span>Expert Medical Guidance</span>
            </h2>

            <p className="plan-description">
              Deciding to have a baby deserves proper preparation. Whether this is your
              first child or your fourth, pre-pregnancy counselling at Prolife Hospitals
              helps you conceive safely and carry a healthy pregnancy. Our pregnancy care
              in Chennai identifies risks early, optimizes your health, and gives you a
              clear plan before you conceive.
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
              What is Pre-Pregnancy Counselling?
            </h2>

            <p className="plan-description">
              Pre-pregnancy counselling is a medical evaluation you get before conceiving. We assess your reproductive health, review your medical background, check for nutritional gaps, and create a personalized fertility plan.
              The goal? Get your body in the best possible condition for conception and pregnancy. Problems caught early are easier to fix.

            </p>

            <a href="/contact" className="plan-btn">
              Learn About Our Gynecology Services →
            </a>
          </div>



        </div>
      </section>

      <section className="prolife-advance">
        <h2 className="prolife-heading">
          Why Choose <span>Prolife</span> for Pre-Pregnancy Planning?
        </h2>

        <div className="prolife-feature-flow">
          {features.map((item, i) => (
            <div className="flow-line" key={i}>
              <div className="feature-dot"></div>

              <div className="feature-box">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="#" className="success-btn">
          Read Patient Success Stories →
        </a>
      </section>

      <section className="assess-section">
        <h2 className="assess-title">
          What We Assess <span>During Your Visit</span>
        </h2>

        <div className="assess-card-wrapper">
          {assessmentData.map((item, index) => (
            <div className="assess-card" key={index}>
              <div className="highlighter"></div>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a href="#" className="assess-btn">
          Schedule a Consultation →
        </a>
      </section>

      <section className="plan-section">
      <h2 className="plan-title">Your Personalized Pregnancy Preparation Plan</h2>
      <p className="plan-sub">
        Based on your assessment, we create an actionable plan that includes:
      </p>

      <div className="plan-grid">
        {planItems.map((item, i) => (
          <div className="plan-card" key={i}>
            <FontAwesomeIcon icon={item.icon} className="plan-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <button className="plan-btn">Book Your Consultation</button>
    </section>

     <section className="helps-section">
  <h2 className="helps-heading">
    How <span>Pre-Pregnancy Counselling</span> Helps
  </h2>

  <div className="helps-grid">
    {[
      {
        title: "Reduces Pregnancy Risks",
        desc: "Fewer complications like diabetes, preeclampsia, premature birth & pregnancy loss."
      },
      {
        title: "Improves Natural Fertility",
        desc: "Many couples conceive naturally with nutrition, lifestyle & tracking support."
      },
      {
        title: "Protects Baby’s Development",
        desc: "Early vitamins protect your baby during the first critical development weeks."
      },
      {
        title: "Safely Manages Health Conditions",
        desc: "Conditions like diabetes & BP are stabilized and medication is optimized."
      },
      {
        title: "Boosts Confidence",
        desc: "Planning gives peace of mind and reduces anxiety during your pregnancy journey."
      },
    ].map((item, index) => (
      <div className="helps-card" key={index}>
        <div className="helps-icon"></div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    ))}
  </div>

  <a href="/contact" className="helps-btn">
    Book Your Appointment →
  </a>
</section>

 <section className="eligibility-section">
      <div className="eligibility-container">
        <h2 className="eligibility-title">
          Who Should Get <span>Pre-Pregnancy Counselling?</span>
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
            Talk to Our Fertility Specialists →
          </a>
        </div>
      </div>
    </section>

<section className="experts-section">
      <h2 className="section-title">
        Meet Our Pre-Pregnancy Counselling Experts
      </h2>
      <div className="experts-grid">
        {experts.map((expert, i) => (
          <div className="expert-card" key={i}>
            <div className="expert-img-wrapper">
              <img src={expert.img} alt={expert.name} className="expert-img" />
            </div>
            <div className="expert-content">
              <h3 className="expert-name">{expert.name}</h3>
              <p className="expert-title">{expert.title}</p>
              <p className="expert-desc">{expert.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="consultation-cta">
        <a href="/contact" className="cta-btn">
          Have questions? Book a Consultation →
        </a>
      </div>
    </section>

    <section className="why-prolife-section">
  <h2 className="section-title">Why Prolife Hospitals?</h2>
  
  <div className="prolife-grid">
    {[
      "10+ Years serving Chennai families",
      "2,500+ Successful Deliveries",
      "Hundreds of Couples achieved pregnancy through our fertility care",
      "98% Patient Satisfaction rating",
      "Convenient Location in Manapakkam with easy parking",
      "All Services Under One Roof - No running between clinics"
    ].map((item, i) => (
      <div className="prolife-card" key={i}>
        <span className="checkmark">✓</span>
        <p>{item}</p>
      </div>
    ))}
  </div>

  <div className="prolife-cta">
    <a href="/about" className="cta-btn">Learn More About Us →</a>
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
    ⭐ See More Reviews
  </a>
</section>

  {/* Care Journey Section */}
      <section className="journey-section">
        <div className="journey-container">
          <div className="journey-grid">
            <div className="journey-image">
              <div className="journey-content">
                <h2>Book Your Pre-Pregnancy Consultation</h2>
                <p>Take the first step toward a healthy pregnancy. Our specialists are here to answer your questions and create a plan that works for you.</p>
                <p> <b>Consultation Hours:</b> <br />
                   Monday - Saturday: 9 AM - 8 PM <br />
                   Sunday: 9 AM - 2 PM</p>
                   <p><b>Emergency Obstetric Care:</b> <br /> Available 24/7</p>
                <button className="appointment-btn">Book Appointment Online</button>
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

       <section className="related-services">
      <h2 className="related-title">Related Services You Might Need</h2>

      <div className="related-grid">
        {relatedServices.map((service, index) => (
          <div className="related-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="arrow">→</div>
          </div>
        ))}
      </div>
    </section>

    <section className="lab-hero">
      <div className="lab-content">
        <h1>
          Prolife Hospital —  Expert pregnancy care in Chennai for your growing family.
        </h1>

        <button className="lab-btn">
          Start Your Journey Today →
        </button>
      </div>
    </section>
    </div>
  );
};

export default PrePregnancy;
