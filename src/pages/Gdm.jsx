
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

const Gdm = () => {

  const SERVICES = [
    {
      title: "High-Risk Pregnancy Care",
      desc:
        " Comprehensive management for pregnancies with complications beyond GDM, including hypertension, multiple pregnancies, and preterm labor risks.",
      icon: faUserMd,
    },
    {
      title: "Prenatal Screening & Diagnostics:",
      desc:
        "Advanced testing including anomaly scans, NIPT, and fetal echocardiography to monitor your baby's development.",
      icon: faBaby,
    },
    {
      title: "Nutritional Counseling for Pregnancy:",
      desc:
        "Personalized dietary guidance for all pregnant women, not just those with GDM, ensuring optimal nutrition for mother and baby.",
      icon: faHeartbeat,
    },
    {
      title: "Postpartum Care & Recovery:",
      desc:
        "Support after delivery, including lactation counseling, postpartum depression screening, and family planning guidance.",
      icon: faMicroscope,
    },
    {
      title: "Preconception Counseling:",
      desc:
        " If you're planning pregnancy and have diabetes or other health conditions, we help you optimize your health before conceiving.",
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
      text: "I was devastated when diagnosed with gestational diabetes at 26 weeks. The team at Prolife, especially Dr. Sujitha, made everything manageable. The dietitian helped me enjoy my favorite foods in balanced portions, and the frequent check-ups gave me peace of mind. My baby girl was born healthy at 38 weeks, and my sugar levels returned to normal after delivery",
      name: "  Priya S., Manapakkam",
      avatar: "P",
      rating: 5
    },
    {
      text: "As a working professional, I was worried about managing diabetes during pregnancy. Prolife's flexible appointment scheduling and clear instructions made it possible. Dr. Varshini was always available for my questions, even after clinic hours. I'm grateful for their support throughout my journey",
      name: "Lakshmi R., Porur",
      avatar: "L",
      rating: 5
    },
    {
      text: "After having GDM in my first pregnancy, I was anxious about my second. Dr. Thamarai's proactive approach, starting early screening and monitoring, helped me stay ahead of any issues. Her reassurance and expertise made all the difference.",
      name: "Divya M., Mogappair",
      avatar: "D",
      rating: 5
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const faqData = [
    {
      question: " What causes gestational diabetes?",
      answer:
        "  Pregnancy hormones can reduce your body’s insulin efficiency. If your pancreas can’t keep up, blood sugar rises. It’s not caused by eating sugar and not your fault."
    },
    {
      question: "Will GDM harm my baby?",
      answer:
        " With proper treatment, most babies are completely healthy. Problems occur only when sugars stay high for long periods."
    },
    {
      question: "Do I need insulin?",
      answer:
        " Many women manage GDM with diet and exercise. Insulin is recommended only when sugar levels stay above target despite lifestyle changes."
    },
    {
      question: " Can I have a normal delivery?",
      answer:
        "Yes. Most women with well-controlled GDM can have a vaginal birth. Your doctor will monitor baby’s growth and suggest the safest delivery plan."
    },
    {
      question: " Will diabetes continue after delivery?",
      answer:
        " Usually GDM goes away after birth. But it increases your risk of future Type 2 diabetes, so postpartum testing and lifestyle care are important."
    },
    {
      question: " What should my sugar levels be?",
      answer:
        "  Typical targets - Fasting: below 95 mg/dL.  1 hour after food: below 140 mg/dL.  2 hours after food: below 120 mg/dL"
    },
    {
      question: "How often should I check sugar?",
      answer:
        " Usually 4 times a day—fasting and after each meal."
    },
    {
      question: "What foods should I avoid?",
      answer:
        " Limit white rice, maida items, sugary drinks, and sweets. Focus on balanced meals and portion control. Our dietitian helps create a plan you can follow easily."
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
          <h1 className="story-hero-title">Gestational Diabetes Mellitus Treatment in Chennai</h1>
        </div>
      </div>

      {/* PLAN PREGNANCY SECTION */}
      <section className="plan-pregnancy-section">
        <div className="plan-container">

          <div className="plan-left">
            <h2 className="plan-title">
              Expert GDM Care for a Healthy <br /> <span> Pregnancy at Prolife Hospital </span>
            </h2>

            <p className="plan-description">
             Gestational diabetes can feel overwhelming, especially when you're already navigating the changes of pregnancy. At Prolife Hospital, our gestational diabetes care in Chennai ensures that you receive the right guidance, close monitoring, and expert medical support throughout your pregnancy.
            </p>
            <p className="plan-description">
              Whether you are newly diagnosed or referred to us for pregnancy diabetes treatment in Chennai, our multidisciplinary team—gynecologists, endocrinologists, dietitians, and fetal medicine specialists—works together to safeguard both mother and baby.
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
              What is Gestational Diabetes Mellitus (GDM)?
            </h2>

            <p className="plan-description">
            Gestational Diabetes Mellitus is a condition where blood sugar levels rise during pregnancy due to hormonal changes. It usually develops between 24–28 weeks and affects 7–10% of pregnant women in India.

            </p>
            <p className="plan-description">Gestational Diabetes Mellitus is a condition where blood sugar levels rise during pregnancy due to hormonal changes. It usually develops between 24–28 weeks and affects 7–10% of pregnant women in India.
            </p>
            <a href="/contact" className="plan-btn">
              Learn About GDM Care →
            </a>
          </div>
        </div>
      </section>

      <section className="choose-prolife">
        <div className="choose-content">
          <h2 className="choose-title">
            Why Choose Prolife Hospital for  <span> Gestational Diabetes Mellitus </span> Treatment in Chennai?
          </h2>
          <ul className="choose-list">
            <li>
              <strong>Doctors Who Truly Understand Motherhood + Diabetes</strong>
              <p>
                Our experienced gynecologists have years of expertise in managing high-risk pregnancies, especially those complicated by gestational diabetes. We take time to understand your lifestyle, diet, daily routines, and emotional well-being before planning treatment.
              </p>
            </li>
            <li>
              <strong>Comprehensive Monitoring & Testing</strong>
              <p>
               From screening tests to advanced fetal monitoring, every part of your health and your baby’s development is tracked closely.
              </p>
            </li>

            <li>
              <strong>Personalised Nutrition & Lifestyle Plans</strong>
              <p>
                Our dietitians prepare simple, practical meal plans tailored to South Indian eating habits—idli, dosa, rice, millet, snacks, fruits, and more—so you can enjoy your meals without compromising sugar control.
              </p>
            </li>
            <li>
              <strong>High-Risk Pregnancy Expertise</strong>
              <p>
                We specialise in all conditions associated with GDM:
High blood pressure, PCOS, Thyroid disorders, History of large babies, Obesity, Previous GDM
              </p>
            </li>

            <li>
              <strong>State-of-the-Art Facilities</strong>
              <p>
                4D ultrasound, in-house lab, fetal heart monitoring, 24/7 emergency care — everything needed for safe, accurate, and timely care.
              </p>
            </li>
          </ul>

          <a href="/reviews" className="choose-btn">
           Read What Mothers Say →
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
  <h2 className="services-title">Our Gestational Diabetes Care Services</h2>

  <div className="services-grid">
    {/* Regular Antenatal Checkups */}
    <div className="service-card">
      <h3>GDM Screening & Diagnosis (24–28 Weeks)</h3>
      <ul>
        <li>Oral Glucose Tolerance Test (OGTT)</li>
        <li>Early screening for high-risk women</li>
        <li>Clear explanation of results and next steps</li>
        <li>Guidance on sugar monitoring at home</li>
      </ul>
    </div>

    {/* Ultrasound Scans */}
    <div className="service-card">
      <h3>Blood Sugar Management</h3>
      <p>Most women can control sugar levels with:</p>
      <ul>
        <li>Individualized diet plans</li>
        <li>Low-glycemic food guidance</li>
        <li>Safe pregnancy exercises</li>
        <li>Carb-balanced meal planning</li>
      </ul>
      <p>If required, our doctors prescribe insulin safely and monitor doses regularly.</p>
    </div>

    {/* Complications */}
    <div className="service-card">
      <h3>Antenatal Checkups (More Frequent for GDM Moms)</h3>
      <ul>
        <li>Blood pressure tracking</li>
        <li>Urine tests</li>
        <li>Weight monitoring</li>
        <li>Fetal heart rate checks</li>
        <li>Sugar-log review</li>
        <li>Emotional and lifestyle support</li>
      </ul>
      <p> <b>Visit schedule: </b>
 Every 2 weeks → then weekly after 36 weeks</p>
    </div>

    {/* Childbirth Preparation */}
    <div className="service-card">
      <h3>Baby’s Growth & Wellness Monitoring</h3>
      <ul>
        <li>Growth scans</li>
        <li>Amniotic fluid assessment</li>
        <li>Doppler studies</li>
        <li>Non-stress tests</li>
        <li>Placental health checks</li>
      </ul>
      
    </div>

    {/* Delivery Support */}
    <div className="service-card">
      <h3>Delivery Planning</h3>
      <p><b>Well-controlled GDM often allows:</b> </p>
      <ul>
        <li>Full-term pregnancy</li>
        <li>Normal delivery</li>
      </ul>
      <p>If the baby is larger or complications arise, we discuss cesarean options with complete transparency.</p>
    </div>

    {/* Postpartum Care */}
    <div className="service-card">
      <h3>Postpartum Sugar Assessment</h3>
      <ul>
        <li>Monitoring blood sugar after delivery</li>
        <li>Breastfeeding guidance</li>
        <li>Postpartum OGTT (6–12 weeks)</li>
        <li>Long-term diabetes prevention plan</li>
      </ul>
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
          Who Needs Pregnancy Diabetes Treatment in Chennai?
        </h2>
        <p className="gdm-subtitle">
          You may need expert GDM care if you:
        </p>

        <ul className="gdm-list">
          {[
            "Have been diagnosed with gestational diabetes",
            "Had GDM previously",
            "Have a family history of diabetes",
            "Have PCOS",
            "Are above 30 years",
            "Delivered a baby over 4 kg earlier",
            "Are overweight (BMI > 25)",
            "Experience excessive thirst, tiredness, or frequent urination",
          ].map((item, i) => (
            <li key={i} className="gdm-item">
              <span className="gdm-check">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="gdm-note">
          Early screening = Safer pregnancy.<br />
          Speak to our specialists today.
        </div>

        <a href="#booking" className="gdm-btn">
          Book Appointment →
        </a>
      </div>
    </section>

<section className="cerclage-team-section" id="team">
        <div className="container">
          <h2 className="section-title">Meet Our Gestational Diabetes Care Team</h2>


          <div className="team-grid">
            {/* Dr. Sujitha */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Sujitha R  </h3>
              <p className="designation">Consultant Gynecologist</p>
              <p className="doctor-desc">
                Specialist in high-risk pregnancies, including gestational diabetes. Known for her clarity, compassion, and consistent guidance throughout pregnancy.
              </p>
            </div>


            {/* Dr. Thamarai */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Thamarai</h3>
              <p className="designation"> Consultant Gynecologist</p>
              <p className="doctor-desc">
                Expert in complex pregnancy management. Patients trust her reassuring approach and careful monitoring techniques.
              </p>
            </div>


            {/* Dr. Varshini */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Varshini</h3>
              <p className="designation">Consultant Gynecologist</p>
              <p className="doctor-desc">
                Works closely with endocrinology and nutrition teams to deliver complete GDM care. Calm, patient, and highly supportive.
              </p>
              <p className="doctor-desc">Our gynecologists collaborate with:
                    Endocrinologists,
                    Dietitians,
                    Pediatricians,
                …to ensure safe, coordinated maternal and newborn care.
              </p>
            </div>

          </div>
          

          <div className="center-btn">
            <button className="cta-btn"> Meet Our Specialists</button>
          </div>
        </div>
      </section>

<section className="why-prolife-section">
  <h2 className="section-title">Why Prolife Hospital Is Chennai’s Trusted GDM Care Centre
</h2>
  
  <div className="prolife-grid-pregnancy">
    {[
      "  Advanced Ultrasound & Lab Services",
      " 24/7 Emergency Support for Pregnant Mom",
      "Affordable, Transparent Pricing",
      "Tailored Nutrition + Lifestyle Support",
      " High Success Rate in Managing GDM",
      " Hundreds of Healthy Deliveries",
      
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
            Related Services You Might Be Interested In
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

      <section className="lab-hero">
        <div className="lab-content">
          <h1>
            Your journey to motherhood deserves expert care. Let Prolife Hospital be your partner in managing gestational diabetes and ensuring a healthy outcome for you and your baby.
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Gdm;
