
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

const PretermLabor = () => {

const SERVICES = [
  {
    title: "High-Risk Pregnancy Management",
    desc:
      " Comprehensive surveillance and management for pregnancies complicated by maternal health conditions, fetal concerns, or other factors that increase risks for mother or baby.",
    icon: faUserMd,
  },
  {
    title: "Integrated Maternity Care",
    desc:
      "Complete pregnancy services from conception through postpartum recovery, supported by our team of obstetric specialists, nurses, and support staff dedicated to positive birth experiences.",
    icon: faBaby,
  },
  {
    title: "Neonatal Intensive Care",
    desc:
      "Specialized pediatric services for premature infants and newborns requiring intensive monitoring or treatment, ensuring your baby receives expert care immediately after delivery.",
    icon: faHeartbeat,
  },
  {
    title: "Antenatal Testing and Monitoring",
    desc:
      " Advanced fetal surveillance including non-stress tests, biophysical profiles, and ultrasound assessments that help us detect potential problems early and intervene appropriately.",
    icon: faMicroscope,
  },
  {
    title: "Postpartum Support Services",
    desc:
      "Continued care after delivery addressing recovery, breastfeeding support, emotional wellbeing, and newborn care education, especially important after complicated pregnancies or preterm deliveries.",
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

 


  const eligibilityList = [
    "Experiencing contractions or symptoms before 37 weeks",
     "Diagnosed with threatened preterm labor",
"Having a history of previous preterm birth",
"Carrying twins or triplets",
"Identified with short cervix or cervical incompetence",
"Experiencing preterm premature rupture of membranes (PPROM)",
"Managing medical conditions such as diabetes, thyroid disorders, or hypertension",
"Referred from other facilities for high-risk pregnancy care",
"Facing infections or triggers that may induce early labor",

  ];

  const reviewsData = [
    {
      text: "I received impeccable care from Dr. Thamarai ram and Prolife Hospital for the delivery of my twins. Dr listens to us and respects our choices and is very empathetic and respectful. Great Doctor with a great personality. We felt that we are in the safe hands.",
      name: " -Mohammed",
      avatar: "M",
      rating: 5
    },
    {
      text: "It's was a beautiful and pleasant experience and journey with Prolife Hospital and Dr.Thamarai Ram during planning for pregnancy, pregnancy, delivery and post delivery. Warmth, hospitality and helping tendency during delivery time make sour life easy and to be appreciated. Hope and trust this will be continued in years to come.",
      name:"-Sreya",
      avatar: "S",
      rating: 5
    },
    {
      text:"We had our second delivery in prolife. We had safe delivery experience by Dr. tamarai, Dr. Sujitha, Dr Iswarya . We had excellent support and care by ward staff and nurses.They take care of my wife and daughter very well. Rooms also neat and clean",
      name: "-Selva Ganesh",
      avatar: "S",
      rating: 5
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const faqData = [
    {
      question: "What exactly is preterm labor, and how is it different from normal labor?",
      answer:
        "Preterm labor occurs when regular contractions begin causing cervical changes before 37 completed weeks of pregnancy. While the labor process itself is similar to term labor, the timing creates risks because babies born prematurely may face complications related to underdeveloped organs, particularly the lungs, brain, and digestive system. Our goal is to recognize preterm labor early and intervene appropriately."
    },
    {
      question: "How do I know if I'm experiencing preterm labor or just normal pregnancy discomfort",
      answer:
        "Warning signs include more than four contractions per hour, persistent lower back pain, cramping similar to menstrual periods, increased pelvic pressure, changes in vaginal discharge, or fluid leakage. However, distinguishing preterm labor from other pregnancy symptoms can be challenging. When in doubt, contact us immediately for evaluation—it's always better to be overly cautious with potential preterm labor."
    },
    {
      question: "Can preterm labor be stopped once it starts?",
      answer:
        "This depends on several factors including how far labor has progressed, your gestational age, whether your membranes have ruptured, and the presence of any complications. In many cases, particularly when caught early and when no contraindications exist, we can successfully delay delivery using medications called tocolytics. Even delaying delivery by 48 hours allows time for corticosteroids to benefit your baby's lung development."
    },
    {
      question: "What medications are used to stop preterm labor, and are they safe?",
      answer:
        "  We use several types of tocolytic medications including calcium channel blockers, prostaglandin inhibitors, and beta-agonists, selected based on your specific situation. While all medications have potential side effects, we carefully monitor you for any adverse reactions and adjust treatment as needed. The benefits of safely prolonging pregnancy typically outweigh the risks of these medications when used appropriately."
    },
    {
      question: "Will I need to stay in the hospital if I'm diagnosed with preterm labor?",
      answer:
        " Hospitalization is often necessary initially to stabilize your condition, administer medications, perform comprehensive monitoring, and assess whether labor can be successfully halted. Depending on your response to treatment and individual circumstances, you may be able to continue management at home with activity restrictions and close outpatient monitoring, or you may require extended hospitalization."
    },
    {
      question: "What are the chances my baby will be okay if born prematurely?",
      answer:
        " Outcomes vary significantly based on gestational age at delivery. Babies born after 34 weeks generally do very well with minimal complications. Between 28-34 weeks, most babies survive and eventually thrive, though they typically require NICU care. Earlier deliveries face more challenges, but advances in neonatal care have dramatically improved survival and long-term outcomes even for very premature infants. Our team provides honest discussions about expected outcomes based on your specific situation."
    },
    {
      question: "If I've had preterm labor before, will it happen again?",
      answer:
        " Having one preterm delivery does increase your risk in subsequent pregnancies, but it's not inevitable. We implement proactive strategies for women with this history, including progesterone supplementation, frequent cervical length monitoring, and closer surveillance throughout pregnancy. These interventions significantly reduce the likelihood of recurrent preterm labor"
    },
    {
      question: "What lifestyle changes can help prevent preterm labor?",
      answer:
        " While not all preterm labor can be prevented, certain measures reduce risk: attending all prenatal appointments, avoiding smoking and substance use, maintaining good nutrition and hydration, treating any infections promptly, managing chronic health conditions carefully, reducing physical and emotional stress when possible, and recognizing warning signs early. We provide personalized guidance based on your individual risk factors."
    },
    {
      question: "Can stress cause preterm labor?",
      answer:
        " Research suggests that chronic stress and anxiety may increase preterm labor risk through various mechanisms including inflammation and hormone changes. While not all stress is preventable, we help you identify stress reduction strategies and provide support resources. Managing stress is one component of a comprehensive preterm labor prevention approach."
    },
    {
      question: "Will my insurance cover preterm labor management and hospitalization?",
      answer:
        " Most insurance plans cover medically necessary hospitalizations and treatments for pregnancy complications including preterm labor. We work with numerous insurance providers and can help you understand your coverage. Our billing team assists with insurance questions and works to minimize your financial burden during this stressful time."
    },
  ];
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const supports = [
    'Dr. Hari Prakash, Dr. Shalini, Dr. Nithya Priyan – Experienced anesthesiologists',
    ' Their expertise ensures safe pain management and support during emergency procedures and delivery.',
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
          <h1 className="story-hero-title">Preterm Labor Management Service</h1>
        </div>
      </div>

      {/* PLAN PREGNANCY SECTION */}
      <section className="plan-pregnancy-section">
        <div className="plan-container">

            <div className="plan-right">
            <img
              src="/images/img/pre-pregnancy1.jpg"
              alt="Pre Pregnancy Consultation"
            />
          </div>

          <div className="plan-left">
            <h2 className="plan-title">
              Expert Care for Early Labor at   <br />
              <span>Prolife Hospital</span>
            </h2>

            <p className="plan-description">
              Every pregnancy is a journey filled with anticipation and hope. When signs of labor appear before 37 weeks, it can bring sudden worry and uncertainty. At Prolife Hospital, our preterm labor management service provides advanced medical expertise and compassionate care to help protect both mother and baby during this critical time.
            </p>
            <p className="plan-description">
              As specialists in preterm labor treatment and care, our team focuses on stabilizing early contractions, preventing premature birth when safely possible, and creating the best outcomes even when early delivery becomes unavoidable. We use evidence-based protocols, state-of-the-art monitoring, and round-the-clock specialist support to manage even the most complex preterm labor cases.
            </p>
            <p className="plan-description">From your first evaluation to continuous monitoring and neonatal coordination, our goal is simple—to ensure your baby gets every possible advantage during these crucial final weeks of development.</p>

            {/* <a href="/contact" className="plan-btn">
              Book Your Consultation →
            </a> */}
          </div>

          

        </div>
      </section>
{/* 
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
              What is Cervical Cerclage?
            </h2>

            <p className="plan-description">
              Cervical cerclage is a surgical procedure where we stitch your cervix closed during pregnancy to prevent premature opening. Think of it as reinforcement—giving your cervix the strength to hold your baby safely until delivery time.
            </p>
            <p className="plan-description">Your cervix naturally softens and opens during labor. But if it's weak (called cervical incompetence), it might open too early—causing miscarriage or preterm birth. A cerclage prevents this.
              The procedure is simple, safe, and can make the difference between loss and bringing your baby home.
            </p>
            <a href="/contact" className="plan-btn">
              Learn More About Our Maternity Services →
            </a>
          </div>
        </div>
      </section> */}

      <section className="choose-prolife">
        <div className="choose-content">
          <h2 className="choose-title">
            Why Choose Prolife <span>Prolife</span> for Cervical Cerclage in Chennai?
          </h2>
          <p><b>When facing the threat of early delivery, you need expert guidance and immediate intervention. Here’s what makes our approach exceptional:</b></p> <br />
        
          <ul className="choose-list">
            <li>
              <strong>Immediate Response & Continuous Monitoring</strong>
              <p>
                Preterm labor can progress quickly. Our labor and delivery unit operates 24/7 with specialists ready to evaluate contractions, assess cervical changes, and initiate timely intervention—all while monitoring your baby’s wellbeing continuously.
              </p>
            </li>

            <li>
              <strong>Advanced Tocolytic Therapy</strong>
              <p>
                To safely delay delivery when beneficial, our doctors use carefully selected medications to slow or stop contractions. We tailor treatment based on gestational age, maternal health, and response to therapy, ensuring maximum safety and effectiveness.
              </p>
            </li>

            <li>
              <strong>Detailed Cervical Assessment</strong>
              <p>
                Using high-resolution ultrasound, we measure cervical length, check dilation, and identify markers of threatened preterm labor. These assessments guide our decisions on hospitalization, medications, and activity restrictions.
              </p>
            </li>

            <li>
              <strong>Corticosteroids for Fetal Lung Maturity</strong>
              <p>
                If early delivery appears likely, we administer corticosteroids to strengthen your baby’s lungs and reduce complications. Timing is crucial—and our specialists ensure optimal dosing and monitoring.
              </p>
            </li>

            <li>
              <strong>Neuroprotective Interventions</strong>
              <p>
               For early gestations, magnesium sulfate and other protocols are used to reduce neurological complications. These evidence-backed strategies improve long-term outcomes for premature newborns.
              </p>
            </li>
            <li>
              <strong>Integrated NICU Collaboration</strong>
              <p>
               If your baby needs support after birth, our pediatric team and NICU coordination ensure seamless care. This immediate transition eliminates delays and protects your newborn’s health.
              </p>
            </li>
          </ul>

          {/* <a href="/reviews" className="choose-btn">
            Read What Our Mothers Say →
          </a> */}
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
        <h2 className="services-title">What We Assist You With at Prolife Hospital</h2>

        <p className="services-p"> Our comprehensive preterm labour treatment and care covers all essential aspects of early labor management:</p> 

        <div className="services-grid">
          {/* Regular Antenatal Checkups */}
          <div className="service-card">
            <h3>Early Warning Sign Assessment</h3>
            <p> We educate and assess symptoms such as contractions, backache, pelvic pressure, fluid leakage, or increased discharge—ensuring early detection and timely medical response.</p>
          </div>

          {/* Ultrasound Scans */}
          <div className="service-card">
            <h3>Risk Factor Identification & Prevention</h3>
            <p>We evaluate all preterm labour risk factors and management needs, including:</p>
            <ul>
        <li> Previous preterm birth</li>
        <li>Multiple pregnancy</li>
        <li>Cervical insufficiency</li>
        <li>Infections</li>
        <li>Chronic medical conditions</li>
        <li>Lifestyle or anatomical contributors</li>
      </ul>
      <p>Understanding these risks allows us to design proactive preventive care.</p>
          </div>

          {/* Complications */}
          <div className="service-card">
            <h3>Bed Rest & Activity Guidelines</h3>
            <p>Depending on your condition, we may recommend activity reduction, positioning strategies, hydration plans, and lifestyle adjustments to help stabilize contractions.</p>
          </div>

          {/* Childbirth Preparation */}
          <div className="service-card">
            <h3>Infection Screening & Treatment</h3>
            <p>As infections are a major cause of early labor, we test for urinary, vaginal, and systemic infections and begin prompt treatment when needed.</p>
          </div>

          {/* Delivery Support */}
          <div className="service-card">
            <h3>Emotional & Psychological Support</h3>
            <p>Facing possible preterm labor is stressful. We provide reassurance, open communication, and support that helps you remain calm and confident throughout the process.</p>
          </div>

          {/* Postpartum Care */}
          <div className="service-card">
            <h3>Partner & Family Counseling</h3>
            <p>Your support system plays a crucial role. We educate and guide partners and families to ensure they are prepared, informed, and able to support you effectively.</p>
          </div>
        </div>

        <div className="service-cta">
          <a href="/contact" className="cta-btn">
            Schedule Your Risk Assessment  →
          </a>
        </div>
      </section>

       <section className="timeline-section">
        <h2 className="timeline-title">How Our Preterm Labor Management Helps You</h2>
        <p className="services-p">Our care is designed to protect your health and your baby’s development:</p>

        <div className="timeline-container">

          <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Safely Prolonging Pregnancy</span>
            </div>
            <p>When medically appropriate, we work to extend your pregnancy—even by days or weeks—greatly improving newborn outcomes.</p>
          </div>

          <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Preparing for a Safe Delivery</span>
            </div>
            <p>If early birth becomes necessary, we ensure ideal conditions by optimizing lung maturity, coordinating pediatric care, and planning the safest delivery approach.</p>
          </div>

           <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Reducing Complications</span>
            </div>
            <p>Through close monitoring, timely medication, and preventive strategies, we reduce risks like infection, breathing difficulties, brain bleeding, and other complications.</p>
          </div>

           <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Clear Communication at Every Step</span>
            </div>
            <p>We explain your condition, test results, treatment plans, and possible scenarios so you remain informed and in control throughout your care journey.</p>
          </div>

           <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Helping You Make Informed Decisions</span>
            </div>
            <p>We discuss all available options transparently—ensuring your preferences and comfort guide the care plan whenever possible.</p>
          </div>
        </div>

        <div className="timeline-cta">
          {/* <a href="/contact" className="cta-btn">
            Not Sure If You Need It? Consult Our Doctors →
          </a> */}
        </div>
      </section>


      <section className="eligibility-section">
        <div className="eligibility-container">
          <h2 className="eligibility-title">
            Who Benefits from Our  <span> Preterm Labor Management</span> Service?
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
            {/* <a href="/contact" className="cta-button">
              Talk to Our Cervical Cerclage Specialists →
            </a> */}
          </div>
        </div>
      </section>

      <section className="cerclage-team-section" id="team">
        <div className="container">
          <h2 className="section-title">Meet Our Expert Obstetrics Team</h2>
          <p>Your preterm labor management is handled by experienced obstetric specialists who combine compassion with advanced clinical skill.</p>


          <div className="team-grid">
            {/* Dr. Sujitha */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Sujitha R  </h3>
              <p className="designation">Gynecologist & Obstetrician</p>
              <p className="doctor-desc">
                Expert in high-risk pregnancy and preterm labor cases, she brings steady reassurance and precise clinical judgment to urgent scenarios.
              </p>
            </div>


            {/* Dr. Thamarai */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Thamarai</h3>
              <p className="designation"> Gynecologist & Obstetrician</p>
              <p className="doctor-desc">
                Known for individualized care plans, she excels in managing multiple pregnancies and complex preterm labor conditions.
              </p>
            </div>


            {/* Dr. Varshini */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Varshini</h3>
              <p className="designation"> Gynecologist & Obstetrician</p>
              <p className="doctor-desc">
                Highly skilled in obstetric emergencies, she provides clear communication and evidence-based care during early labor situations.
              </p>
            </div>

            <div className="team-card">
              <h3 className="doctor-name">Integrated Pediatric Support</h3>
              <p className="designation">
                Dr. Uma Maheshwari — Paediatrician
              </p>
              <p className="doctor-desc">
               Ensures seamless transition to newborn care if early delivery becomes necessary, offering immediate neonatal expertise.
              </p>
            </div>
          </div>
          <div className="hp-support">
              <h3>Round-the-Clock Anesthesiology Support</h3>
              
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
  <div className="wp-container">
    <h2 className="wp-title"><strong>Why Prolife Hospital Excels in the Management of Threatened Preterm Labour</strong></h2>

    <div className="wp-grid fade-up">
      <div className="wp-item slide-in-left">✓ <b>Complete Maternity Infrastructure -</b> Everything—from evaluation to delivery and neonatal care—happens seamlessly under one roof.</div>
      <div className="wp-item slide-in-right">✓ <b>Advanced Modular Operation Theatres -</b> Ready for urgent cesarean deliveries when needed, minimizing delays in critical moments.</div>
      <div className="wp-item slide-in-left">✓ Comfortable & Private Wards
Stress-free, air-conditioned rooms support healing during monitoring or extended bed rest.
</div>
      <div className="wp-item slide-in-right">✓ 24/7 Diagnostics & Pharmacy
Immediate access to tests, medications, and emergency therapies ensures no treatment delay.
</div>
      <div className="wp-item slide-in-left">✓ Family-Centered Maternity Care
We involve partners and families to create a supportive, reassuring environment.
</div>
      <div className="wp-item slide-in-right">✓ Accessible & Affordable Excellence
We offer top-tier high-risk pregnancy care at affordable costs with support for multiple insurance plans.
</div>
    </div>

    {/* <div className="wp-btn-wrapper fade-up">
      <button className="wp-cta-btn">Learn More About Our Hospital</button>
    </div> */}
  </div>
</section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <p className="sub-title">Voices of Grateful Mothers</p>
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
                <h2>Take Action Now—Early Intervention Matters</h2>
                <p>If you're experiencing any signs of preterm labor—regular contractions, pelvic pressure, unusual cramping, lower back pain, or changes in vaginal discharge—don't wait to seek evaluation. Early intervention often makes the critical difference between premature delivery and reaching full term.
Even if you're not currently in labor but have risk factors that concern you, proactive consultation can lead to monitoring and preventive strategies that reduce your chances of early delivery.
</p>
                <p>Every day your baby stays safely in the womb matters. Let us help you reach that finish line.</p>
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

      {/* <section className="lab-hero">
        <div className="lab-content">
          <h1>
            Prolife Hospital —  Cervical cerclage specialists protecting your pregnancy.

          </h1>

          <button className="lab-btn">
             Protect Your Pregnancy Today →
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default PretermLabor;
