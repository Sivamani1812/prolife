
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
    "First-time mothers wanting guidance through each stage",
 "Women with chronic conditions like diabetes, thyroid disorders, or hypertension",
 "Previous pregnancy complications including miscarriage, preterm birth, or cesarean",
 "Multiple pregnancies carrying twins or triplets",
 "Women over 35 needing enhanced monitoring",
 "PCOS or hormonal imbalances affecting pregnancy",
 "History of fertility treatments requiring careful management",
  ];

  const reviewsData = [
  {
    text: "From my first prenatal visit to delivery, Dr. Sujitha was there every step. She answered my midnight panic calls without complaint and made me feel safe throughout my high-risk pregnancy. My baby girl is healthy because of her expertise",
    name: "Anjali R., First-time mother, Porur",
    avatar: "A",
    rating: 5
  },
  {
    text: "I had gestational diabetes and was terrified. The team monitored me closely, adjusted my diet, and managed everything so well that my delivery was completely normal. They turned my fear into confidence.",
    name: " Kavitha M., Manapakkam",
    avatar: "K",
    rating: 5
  },
  {
    text: "After two miscarriages, I was scared to try again. Dr. Thamarai identified the problem, treated it before conception, and monitored me weekly throughout pregnancy. I just delivered a healthy baby boy—something I thought would never happen.",
    name: "Priya S., Ramapuram",
    avatar: "P",
    rating: 5
  }
];

const [openFAQ, setOpenFAQ] = useState(null);
const faqData = [
    {
      question: "When should I schedule my first pregnancy appointment?",
      answer:
        " Book as soon as you confirm pregnancy—ideally around 6-8 weeks. Early care establishes baseline health and catches issues immediately."
    },
    {
      question: "How often will I need checkups?",
      answer:
        "Monthly until 28 weeks, bi-weekly until 36 weeks, then weekly until delivery. High-risk pregnancies may need more frequent visits."
    },
    {
      question: "What tests will I need during pregnancy?",
      answer:
        " Blood tests checking hemoglobin, blood type, glucose, thyroid function. Ultrasound scans at key stages. Gestational diabetes screening around 24-28 weeks. Additional tests depend on your health history."
    },
    {
      question: "Do you offer pain relief during delivery?",
      answer:
        " Yes. We provide epidurals, spinal blocks, and natural pain management techniques. Our anesthesiology team discusses options during pregnancy so you can decide what's right for you"
    },
    {
      question: "Can my husband be present during delivery?",
      answer:
        "Absolutely. We encourage birthing partners during both normal and cesarean deliveries (when medically appropriate."
    },
    {
      question: "What if complications arise during pregnancy?",
      answer:
        "   Our team specializes in managing pregnancy complications. We have 24/7 specialist access, emergency obstetric care, and support facilities if needed."
    },
    {
      question: "What happens if my baby needs special care after birth?",
      answer:
        " Our pediatrician assesses every newborn immediately. If additional care is needed, we have neonatal support facilities and keep parents closely involved."
    },
    {
      question: "Does insurance cover pregnancy care?",
      answer:
        "  Many insurance plans cover maternity services. Contact our billing team to verify your specific coverage. We partner with major insurance providers."
    },
    {
      question: "How much does pregnancy care cost at Prolife?",
      answer:
        " We offer transparent maternity packages covering prenatal visits, delivery, and postpartum care. Contact us for detailed pricing based on your specific needs."
    },
    {
      question: "What if I go into labor outside regular hours?",
      answer:
        "We operate 24/7 with obstetricians, anesthesiologists, and support staff always on call. You can reach us anytime day or night."
    },
  ];
const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

   const relatedServices = [
  {
    title: "Pre-Pregnancy Counselling",
    desc: "Plan your pregnancy with expert medical guidance. Optimize your health before conceiving for safer outcomes.",
    icon: "👶",
  },
  {
    title: "Fertility Treatment ",
    desc: "Comprehensive fertility evaluation and treatment for couples facing conception challenges.",
    icon: "❤️",
  },
  {
    title: "High-Risk Pregnancy Management",
    desc: " Specialized care for pregnancies with medical complications or previous pregnancy issues",
    icon: "🦋",
  },
  {
    title: "PCOS Management",
    desc: "  Treatment for polycystic ovary syndrome affecting pregnancy and hormonal health.",
    icon: "🧬",
  },
  {
    title: "Pediatric Care",
    desc: "Continue your baby's healthcare journey with our experienced pediatricians.",
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
          <h1 className="story-hero-title">Best Pregnancy Care in Chennai</h1>
        </div>
      </div>

      {/* PLAN PREGNANCY SECTION */}
      <section className="plan-pregnancy-section">
        <div className="plan-container">

          <div className="plan-left">
            <h2 className="plan-title">
             Expert Maternity Services at  <br />
              <span>Prolife Hospital</span>
            </h2>

            <p className="plan-description">
             Pregnancy changes everything. Your body, your priorities, your entire world shifts—and you deserve medical care that understands this transformation completely.
             </p>
             <p className="plan-description">
At Prolife Hospital, our pregnancy care in Chennai supports you through every trimester with expert monitoring, personalized attention, and genuine compassion. Whether this is your first baby or your fourth, we're here to make your pregnancy safe, healthy, and as comfortable as possible
            </p>

            <a href="/contact" className="plan-btn">
              Book Your Appointment →
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
              What is Pregnancy Care?
            </h2>

            <p className="plan-description">
             Pregnancy care—also called antenatal or prenatal care—is the medical support you receive throughout your pregnancy. We monitor your health and your baby's development, catch problems early, manage complications if they arise, and prepare you for delivery.
The goal? A healthy pregnancy, a safe delivery, and a thriving baby. Regular checkups make all the difference.
            </p>
            <a href="/contact" className="plan-btn">
               Learn About Our Maternity Services →
            </a>
          </div>
        </div>
      </section>

      <section className="choose-prolife">
  <div className="choose-content">
    <h2 className="choose-title">
      Why Choose <span>Prolife</span> as Your Pregnancy Hospital in Chennai?
    </h2>

    <ul className="choose-list">
      <li>
        <strong>Doctors Who Actually Listen</strong>
        <p>
          Our gynecologists guide thousands of women through pregnancy—routine
          and high-risk. We take time to explain & truly care for your concerns.
        </p>
      </li>

      <li>
        <strong>Complete Monitoring Through Every Trimester</strong>
        <p>
          From heartbeat confirmation to labor prep — we ensure a smooth,
          well-tracked pregnancy journey.
        </p>
      </li>

      <li>
        <strong>Expert Care for High-Risk Pregnancies</strong>
        <p>
          Diabetes, BP, PCOS, thyroid disorders — our specialists handle complex
          conditions safely.
        </p>
      </li>

      <li>
        <strong>Modern Equipment for Better Outcomes</strong>
        <p>
          4D ultrasound, fetal monitors, full in-house lab & 24/7 emergency care.
        </p>
      </li>

      <li>
        <strong>Delivery Options That Respect Your Choices</strong>
        <p>
          Natural birth, epidural, or planned C-section — your preference comes first.
        </p>
      </li>
    </ul>

    <a href="/reviews" className="choose-btn">
      Read What Our Mothers Say →
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
  <h2 className="services-title">Our Pregnancy Care Services</h2>

  <div className="services-grid">
    {/* Regular Antenatal Checkups */}
    <div className="service-card">
      <h3>Regular Antenatal Checkups</h3>
      <ul>
        <li>Physical examinations and vital monitoring</li>
        <li>Baby heartbeat + growth tracking</li>
        <li>Weight & nutritional counseling</li>
        <li>Screening for diabetes & preeclampsia</li>
        <li>Blood test evaluations</li>
        <li>Documentation through pregnancy</li>
        <li><strong>Visit Schedule:</strong> Monthly → Bi-monthly → Weekly</li>
      </ul>
    </div>

    {/* Ultrasound Scans */}
    <div className="service-card">
      <h3>Ultrasound Scans & Imaging</h3>
      <ul>
        <li><strong>Dating Scan (6–10 weeks)</strong> – Viability & due date</li>
        <li><strong>NT Scan (11–14 weeks)</strong> – Genetic risk screening</li>
        <li><strong>Anomaly Scan (18–22 weeks)</strong> – Full development check</li>
        <li><strong>Growth Scans</strong> – Baby position & health tracking</li>
      </ul>
    </div>

    {/* Complications */}
    <div className="service-card">
      <h3>Managing Pregnancy Complications</h3>
      <ul>
        <li>Gestational diabetes control and monitoring</li>
        <li>High blood pressure and preeclampsia management</li>
        <li>Bleeding episodes and threatened miscarriage</li>
        <li>Multiple pregnancies (twins, triplets)</li>
        <li>Low amniotic fluid or placental problems</li>
        <li>Preterm labor prevention</li>
        <li>Pregnancy after previous cesarean</li>
        <li>Age-related pregnancy concerns (over 35)</li>
      </ul>
    </div>

    {/* Childbirth Preparation */}
    <div className="service-card">
      <h3>Childbirth Preparation</h3>
      <ul>
        <li>Labor stages and what to expect</li>
        <li>Breathing techniques and pain management</li>
        <li>Breastfeeding basics and latch techniquess</li>
        <li>Newborn care essentials</li>
        <li>Postpartum recovery guidance</li>

      </ul>
    </div>

    {/* Delivery Support */}
    <div className="service-card">
      <h3>Delivery & Labor Support</h3>
      <ul>
        <li>24/7 availability of obstetricians and anesthesiologists</li>
        <li>Modern labor rooms with continuous fetal monitoring</li>
        <li>Pain relief options including epidurals and spinal blocks</li>
        <li>Normal delivery support with experienced midwives</li>
        <li>Safe cesarean sections in equipped operation theaters</li>
        <li>Immediate newborn assessment by pediatricians</li>
        <li>Partner presence encouraged during delivery</li>
      </ul>
    </div>

    {/* Postpartum Care */}
    <div className="service-card">
      <h3>Postpartum Care</h3>
      <ul>
        <li>Recovery monitoring and wound care</li>
        <li>Breastfeeding assistance and troubleshooting</li>
        <li>Postpartum depression screening</li>
        <li>Contraception counseling</li>
        <li>Six-week postnatal checkup</li>
        <li>Baby's health assessments and vaccinations</li>
      </ul>
    </div>
  </div>

  <div className="service-cta">
    <a href="/contact" className="cta-btn">
      Not sure what you need? Schedule a Consultation →
    </a>
  </div>
</section>

    <section className="timeline-section">
  <h2 className="timeline-title">Your Pregnancy Journey Timeline</h2>

  <div className="timeline-container">

    {/* First Trimester */}
    <div className="timeline-card">
      <div className="timeline-header">
        <span className="trimester-tag">First Trimester</span>
        <span className="weeks">Weeks 1 - 12</span>
      </div>
      <ul>
        <li><strong>Initial Visit:</strong> Complete health assessment, pregnancy confirmation scan, baseline blood tests, risk evaluation</li>
        <li><strong>Follow-ups:</strong> Monthly checkups monitoring early development, managing morning sickness, addressing concerns</li>
        <li><strong>What We Monitor:</strong> Pregnancy viability, ectopic pregnancy screening, early complication signs</li>
      </ul>
    </div>

    {/* Second Trimester */}
    <div className="timeline-card">
      <div className="timeline-header">
        <span className="trimester-tag">Second Trimester</span>
        <span className="weeks">Weeks 13 - 27</span>
      </div>
      <ul>
        <li><strong>Key Milestones:</strong> Detailed anatomy scan, gender determination (optional), feeling baby's movements</li>
        <li><strong>Follow-ups:</strong> Bi-monthly appointments tracking growth and maternal health</li>
        <li><strong>What We Monitor:</strong> Gestational diabetes screening (24-28 weeks), proper weight gain, blood pressure</li>
      </ul>
    </div>

    {/* Third Trimester */}
    <div className="timeline-card">
      <div className="timeline-header">
        <span className="trimester-tag">Third Trimester</span>
        <span className="weeks">Weeks 28 - 40</span>
      </div>
      <ul>
        <li><strong>Final Preparations:</strong> Baby's position assessment, delivery planning discussions, labor signs education</li>
        <li><strong>Follow-ups:</strong> Weekly checkups from week 36 onward</li>
        <li><strong>What We Monitor:</strong> Baby's growth and position, preeclampsia signs, early labor indicators, delivery readiness</li>
      </ul>
    </div>

  </div>

  <div className="timeline-cta">
    <a href="/contact" className="cta-btn">
      Ready for expert pregnancy care? Book Your Appointment →
    </a>
  </div>
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
            Does this describe your situation? Talk to Our Specialists →
          </a>
        </div>
      </div>
    </section>

 <section className="team-section">
      <h2 className="team-title">Meet Our Pregnancy Care Team</h2>

      <div className="team-grid">
        {experts.map((doctor, i) => (
          <div className="doctor-card" key={i}>
            <div className="doctor-img">
              <img src={doctor.img} alt={doctor.name} />
            </div>

            <div className="doctor-info">
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-role">{doctor.title}</p>
              <p className="doctor-desc">{doctor.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="doctor-content">
        <h3 className="doctor-role">Anesthesiology Team</h3>
            <p>
 Expert pain management during labor and delivery. Administers epidurals, spinal blocks for cesarean sections, and monitors patient comfort throughout.</p>
          </div>

      <div className="team-btn-wrap">
        <a href="/contact" className="team-btn">Book a Consultation →</a>
      </div>
    </section>

      <section className="why-prolife-section">
  <h2 className="section-title">Why Prolife Hospital for Pregnancy Care?
</h2>
  
  <div className="prolife-grid-pregnancy">
    {[
      "10+ Years serving Chennai families",
      " 2,500+ Successful Deliveries and counting",
      "24/7 Emergency Obstetric Care always available",
      " 98% Patient Satisfaction rating",
      "Modern Facilities with latest medical equipment",
      "Affordable Maternity Packages with transparent pricing",
      "Two Convenient Locations in Manapakkam and Mugalivakkam"
    ].map((item, i) => (
      <div className="prolife-card" key={i}>
        <span className="checkmark">✓</span>
        <p>{item}</p>
      </div>
    ))}
  </div>

  <div className="prolife-cta">
    <a href="/about" className="cta-btn">Learn More About Our Hospital →</a>
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
                <h2>Book Your Pregnancy Care Consultation</h2>
                <p>Whether you just discovered you're pregnant or planning for delivery—our specialists guide you through every step.</p>
                <p> <b>Consultation Hours:</b> <br />
                  Monday - Saturday: 9 AM - 8 PM <br />
                   Sunday: 9 AM - 2 PM</p>
                   <p><b>Emergency Obstetric Care:</b> <br /> Available 24/7</p>
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
          Prolife Hospital —  Best pregnancy care in Chennai for your growing family.
        </h1>

        <button className="lab-btn">
          Start Your Pregnancy Journey Today →
        </button>
      </div>
    </section>
    </div>
  );
};

export default PrePregnancy;
