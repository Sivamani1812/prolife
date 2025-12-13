
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
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

const Thyroid = () => {

const SERVICES = [
  {
    title: "Maternity & Gynecology",
    desc:
      "Thyroid health significantly impacts fertility, pregnancy, and women's health across all life stages. Our integrated maternity care ensures your thyroid is optimally managed during these crucial times.",
    icon: faUserMd,
  },
  {
    title: "General Medicine",
    desc:
      "Our general physicians provide comprehensive health management, addressing thyroid disorders alongside other chronic conditions like diabetes and heart disease.",
    icon: faBaby,
  },
  {
    title: "Diagnostic Labs",
    desc:
      "Quick, accurate testing is essential for thyroid management. Our advanced laboratories deliver reliable results, often within the same day.",
    icon: faHeartbeat,
  },
  {
    title: "Pediatrics",
    desc:
      "Children can also develop thyroid disorders. Our pediatric team provides gentle, age-appropriate care for young patients with thyroid concerns.",
    icon: faMicroscope,
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

  const doctors = [
    {
      name: "Dr. Sathya Moorthy",
      role: "General Physician",
      img: "/images/doctors/doc1.webp",
      desc: "Expert in chronic condition management with a holistic, whole-body approach to thyroid health."
    },
    {
      name: "Dr. Sujitha R",
      role: "Gynecologist",
      img: "/images/doctors/doc2.webp",
      desc: "Specialist in thyroid issues during pregnancy, postpartum, and women’s hormonal health."
    },
    {
      name: "Dr. Thamarai",
      role: "Gynecologist",
      img: "/images/doctors/doc3.webp",
      desc: "Compassionate gynecologist focusing on symptom clarity, comfort, and personalized thyroid care."
    },
    {
      name: "Dr. Varshini",
      role: "Gynecologist",
      img: "/images/doctors/doc4.webp",
      desc: "Known for clear communication and accurate diagnosis, ensuring confident long-term thyroid management."
    }
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
    " Prevents Second-Trimester Loss — Holds cervix closed when it would otherwise open prematurely",
    "Allows Baby to Reach Full Term — Gives your pregnancy the time needed for healthy development",
    " Reduces Preterm Birth Risk — Even if delivery happens slightly early, cerclage significantly extends pregnancy duration",
    "Protects Future Pregnancies — Can be placed in subsequent pregnancies if needed",
    "Provides Peace of Mind — Knowing your cervix is reinforced reduces constant worry",
    " Improves Success Rates — Women with previous losses often carry to term successfully after cerclage",

  ];

  const reviewsData = [
    {
      text: "After months of feeling exhausted and gaining weight despite exercising, I finally found answers at Prolife. Dr. Sujitha diagnosed my hypothyroidism and started treatment immediately. Within weeks, I felt like myself again. The entire team was supportive and patient with all my questions",
      name: " Priya M., Chennai",
      avatar: "P",
      rating: 5
    },
    {
      text: "Managing my thyroid during pregnancy was stressful, but the doctors at Prolife made it seamless. They monitored my levels regularly and adjusted my medication as needed. Both my baby and I stayed healthy throughout. I'm so grateful for their expertise.",
      name:"Lakshmi R., Manapakkam",
      avatar: "L",
      rating: 5
    },
    {
      text:"I was nervous about thyroid surgery, but the surgical team at Prolife was incredible. They explained everything clearly, the operation went smoothly, and recovery was faster than expected. A year later, I'm feeling great.",
      name: "Anita K., Chennai",
      avatar: "A",
      rating: 5
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const faqData = [
    {
      question: " How do I know if I have a thyroid problem?",
      answer:
        " Look out for weight changes, tiredness, mood shifts, hair loss, or irregular periods. A blood test confirms thyroid issues."
    },
    {
      question: "Can thyroid disorders be cured?",
      answer:
        "Some temporary conditions resolve, but most need long-term management. With proper treatment, you can live a normal, healthy life."
    },
    {
      question: "How often should I do thyroid tests?",
      answer:
        "Every 6–8 weeks at first, then once levels stabilize, every 3–6 months. Pregnant women need more frequent monitoring."
    },
    {
      question: " Will hypothyroidism make me gain weight?",
      answer:
        " It can affect metabolism, but medication and proper diet help you manage weight effectively."
    },
    {
      question: "Can I get pregnant with a thyroid disorder?",
      answer:
        " Yes. With correct treatment, most women have healthy pregnancies. Monitoring before and during pregnancy is important."
    },
    {
      question: "Are thyroid medicines safe in pregnancy?",
      answer:
        "Yes, they are safe and necessary. Untreated thyroid problems carry more risks than the medication."
    },
    {
      question: "How long does medication take to work?",
      answer:
        " You may feel better in a few weeks, but full improvement may take 2–3 months."
    },
    {
      question: " Do I need to avoid certain foods?",
      answer:
        " No major restrictions, but some foods and medicines need proper timing. We’ll guide you with a personalized diet plan."
    },
  ];
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };


  const sections = [
  {
    heading: "Initial Consultation and Diagnosis",
    points: [
      "Comprehensive physical examination",
      "Detailed medical history review",
      "Initial blood work orders",
      "Thyroid palpation and assessment"
    ]
  },
  {
    heading: "Customized Treatment Options",
    intro:
      "Based on your diagnosis, we offer medical, lifestyle and surgical options tailored to your needs.",
    points: [
      "Thyroid hormone replacement therapy for hypothyroidism",
      "Anti-thyroid medications for hyperthyroidism",
      "Regular monitoring and dose adjustments",
      "Guidance on medication timing and interactions"
    ]
  },
  {
    heading: "Lifestyle & Dietary Support",
    points: [
      "Nutritional counseling for thyroid health",
      "Stress management techniques",
      "Exercise recommendations",
      "Sleep optimization strategies"
    ]
  },
  {
    heading: "Surgical Options (When Necessary)",
    points: [
      "Thyroid nodule removal",
      "Partial or complete thyroidectomy",
      "Access to modular operation theaters",
      "Expert surgical team with anesthesiology support"
    ]
  },
  {
    heading: "Ongoing Management",
    points: [
      "Regular thyroid function monitoring",
      "Medication adjustments as needed",
      "Management of related conditions",
      "Pregnancy planning and support"
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

 const benefits = [
    "Women experiencing fertility challenges - Thyroid imbalances can affect conception and pregnancy outcomes",
    "Pregnant and postpartum mothers - We ensure safe thyroid management for both mother and baby",
    "Individuals with unexplained symptoms - Finally getting answers to persistent health concerns",
    "Patients with diagnosed thyroid conditions - Better long-term management and improved quality of life",
    "Those with family history - Early detection and preventive care",
    "Anyone seeking second opinions - Fresh perspectives on existing thyroid diagnoses"
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
          <h1 className="story-hero-title">Best Thyroid Disorders Treatment in Chennai</h1>
        </div>
      </div>

      {/* PLAN PREGNANCY SECTION */}
      <section className="plan-pregnancy-section">
        <div className="plan-container">

          <div className="plan-left">
            <h2 className="plan-title">
              Comprehensive Thyroid Care That Puts <br />
              <span>Your Health First</span>
            </h2>

            <p className="plan-description">
              Living with thyroid concerns can feel overwhelming, but you're not alone. At Prolife Hospitals, we understand that thyroid disorders affect every aspect of your life—from your energy levels and weight to your mood and overall wellbeing. Our dedicated team of thyroid specialists in Chennai provides compassionate, evidence-based care tailored to your unique needs.
            </p>
            <p className="plan-description">
              Whether you're experiencing unexplained fatigue, unexpected weight changes, or have been newly diagnosed with a thyroid condition, our multi-specialty approach ensures you receive the best thyroid disorders treatment in Chennai under one roof.
            </p>

            <a href="/contact" className="plan-btn">
              Book Your Consultation Today →
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

      <section className="thyroid-section">
      <div className="thyroid-container">

        <h2 className="thyroid-title">Understanding Thyroid Disorders</h2>

        <p className="thyroid-intro">
          Your thyroid gland may be small, but it plays a mighty role in regulating your metabolism,
          energy, heart rate, and even your mood. When this butterfly-shaped gland produces too much
          or too little hormone, it can significantly impact your quality of life.
        </p>

        <h3 className="thyroid-subtitle">Common Thyroid Disorder Symptoms</h3>

        <p className="thyroid-desc">
          Many people live with thyroid issues without realizing it. Watch for these signs:
        </p>

        <div className="thyroid-grid">

          {/* Hypo */}
          <div className="thyroid-card">
            <h4>Hypothyroidism (Underactive Thyroid)</h4>
            <ul>
              <li>Persistent fatigue despite adequate rest</li>
              <li>Unexplained weight gain</li>
              <li>Sensitivity to cold temperatures</li>
              <li>Dry skin and hair loss</li>
              <li>Difficulty concentrating or “brain fog”</li>
              <li>Irregular menstrual cycles in women</li>
            </ul>
          </div>

          {/* Hyper */}
          <div className="thyroid-card">
            <h4>Hyperthyroidism (Overactive Thyroid)</h4>
            <ul>
              <li>Sudden weight loss without trying</li>
              <li>Rapid or irregular heartbeat</li>
              <li>Increased appetite</li>
              <li>Nervousness, anxiety, or irritability</li>
              <li>Trembling hands</li>
              <li>Difficulty sleeping</li>
              <li>Heat intolerance and excessive sweating</li>
            </ul>
          </div>

          {/* Others */}
          <div className="thyroid-card">
            <h4>Other Thyroid Conditions</h4>
            <ul>
              <li>Thyroid nodules or lumps</li>
              <li>Goiter (enlarged thyroid gland)</li>
              <li>Thyroid cancer</li>
              <li>Postpartum thyroiditis</li>
              <li>Hashimoto’s thyroiditis</li>
            </ul>
          </div>

        </div>

        <div className="thyroid-footer">
          If you're experiencing any of these symptoms, our thyroid care team in Chennai can help identify
          the underlying cause and create an effective treatment plan tailored to you.
        </div>

      </div>
    </section>

     <section className="why-section">
      <div className="why-container">

        <h2 className="why-title">Why Choose Prolife Hospitals for Thyroid Care?</h2>

        <div className="why-grid">

          <div className="why-card">
            <h4>1. Complete Multi-Specialty Care</h4>
            <p>
              Your thyroid care is coordinated with endocrinologists, physicians, and specialists 
              for complete holistic treatment.
            </p>
          </div>

          <div className="why-card">
            <h4>2. Advanced Thyroid Diagnostics</h4>
            <p>
              Fast TSH, T3, T4, FT4, antibody tests, thyroid scans & FNAC — accurate results delivered same day.
            </p>
          </div>

          <div className="why-card">
            <h4>3. Personalized Treatment Plans</h4>
            <p>
              Every patient receives a customized care plan based on symptoms, lifestyle & long-term needs.
            </p>
          </div>

          <div className="why-card">
            <h4>4. Specialized Women’s Thyroid Care</h4>
            <p>
              Expert care for pregnancy-related thyroid issues, postpartum changes & menopause variations.
            </p>
          </div>

          <div className="why-card">
            <h4>5. Continuous Support & Follow-Up</h4>
            <p>
              Regular monitoring, medication adjustments & lifestyle support to maintain stable thyroid levels.
            </p>
          </div>
        </div>

        <div className="why-cta">
          <a href="#" className="why-btn">Schedule Your Visit</a>
        </div>

      </div>
    </section>

     <section className="doctor-section">
      <div className="doctor-container">

        <h2 className="doctor-title">Meet Our Thyroid Specialists in Chennai</h2>
        <p className="doctor-subtitle">
          Your health deserves experienced, compassionate professionals who stay updated with 
          the latest advances in thyroid care.
        </p>

        <div className="doctor-grid">
          {doctors.map((doc, index) => (
            <div className="doctor-card" key={index}>
              <div className="doctor-img">
                <img src={doc.img} alt={doc.name} />
              </div>
              <h3 className="doctor-name">{doc.name}</h3>
              <p className="doctor-role">{doc.role}</p>
              <p className="doctor-desc">{doc.desc}</p>
            </div>
          ))}
        </div>

        <div className="doctor-cta">
          <a href="#" className="doctor-btn">Talk to Specialists</a>
        </div>

      </div>
    </section>

     <section className="tt-section" aria-labelledby="tt-heading">
      <div className="tt-inner">
        <motion.header
          className="tt-header"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="tt-heading" className="tt-title">
            Our Thyroid Treatment Approach
          </h2>
          <p className="tt-lead">
            A clear, step-by-step plan from diagnosis through long-term follow up.
          </p>
        </motion.header>

        <motion.div
          className="tt-grid"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left column: timeline area */}
          <motion.div className="tt-timeline" variants={cardVariants} aria-hidden>
            <div className="tt-tl-rail" />
            <ul className="tt-tl-list">
              {sections.map((s, i) => (
                <li key={i} className="tt-tl-item">
                  <div className="tt-tl-dot" />
                  <span className="tt-tl-label">{s.heading}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right column: detailed cards */}
          <motion.div className="tt-cards" variants={cardVariants}>
            {sections.map((sec, idx) => (
              <motion.article
                className="tt-card"
                key={idx}
                whileHover={{ translateY: -6, boxShadow: "0 18px 45px rgba(10,110,74,0.12)" }}
                role="article"
                aria-labelledby={`sec-${idx}-title`}
              >
                <div className="tt-card-head">
                  <div className="tt-accent" aria-hidden />
                  <h3 id={`sec-${idx}-title`} className="tt-card-title">
                    {sec.heading}
                  </h3>
                  {sec.intro && <p className="tt-card-intro">{sec.intro}</p>}
                </div>

                <ul className="tt-list">
                  {sec.points.map((p, pi) => (
                    <li key={pi} className="tt-list-item">
                      <span className="tt-bullet" aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="tt-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="/contact" className="tt-btn" role="button">
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  
      <section className="who-benefits-section">
      <div className="who-benefits-container">
        
        <motion.h2
          className="who-benefits-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who Benefits from Our Thyroid Care?
        </motion.h2>

        <div className="benefits-list">
          {benefits.map((item, index) => (
            <motion.div
              className="benefit-item"
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <span className="benefit-number">{index + 1}</span>
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="why-prolife-section-1">
      <div className="why-prolife-container">

        <motion.h2
          className="why-prolife-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Prolife Hospitals Stands Apart
        </motion.h2>

        <div className="why-prolife-grid">

          {/* Patient-First Philosophy */}
          <motion.div
            className="why-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Patient-First Philosophy</h3>
            <p>
              From the moment you walk through our doors, you're treated like family. 
              Our staff listens, explains clearly, and ensures you feel comfortable and informed 
              throughout your care journey.
            </p>
          </motion.div>

          {/* Comprehensive Facilities */}
          <motion.div
            className="why-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3>Comprehensive Facilities</h3>

            <div className="why-subblock">
              <h4>Modern Infrastructure:</h4>
              <ul>
                <li>Well-equipped diagnostic laboratories</li>
                <li>Advanced imaging capabilities</li>
                <li>Modular operation theaters</li>
                <li>24/7 pharmacy access</li>
              </ul>
            </div>

            <div className="why-subblock">
              <h4>Comfortable Environment:</h4>
              <ul>
                <li>Personalized AC wards</li>
                <li>Private consulting spaces</li>
                <li>Modern amenities</li>
                <li>ATM facilities</li>
              </ul>
            </div>
          </motion.div>

          {/* Affordable Excellence */}
          <motion.div
            className="why-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h3>Affordable Excellence</h3>
            <p>
              Quality thyroid care shouldn’t be financially overwhelming.  
              We offer top-tier treatment with transparent pricing and insurance support 
              for accessible healthcare.
            </p>

            <div className="insurance-box">
              <p>✔ We accept major insurance plans – Check with our team for coverage.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* Reviews Section */}
      <section className="reviews-section">
        <p className="sub-title">Real Stories, Real Results</p>
        <p>What Our Patients Say</p>
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
          Your health is interconnected, and thyroid disorders can affect or be affected by other conditions. Explore our comprehensive services:
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

   <section className="thyroid-cta">
      <div className="container">
        <h2>Take the First Step Toward Better Thyroid Health</h2>
        <p>
          You don't have to live with unexplained fatigue, weight struggles, or other symptoms that
          diminish your quality of life. Our thyroid doctor Chennai team is ready to help you
          understand what's happening in your body and develop a treatment plan that works for your
          lifestyle.
        </p>

        <div className="contact-info">
          <div className="contact-card">
            <strong>Call Us:</strong> <br />8220305887 / 7305737051 / 9790896211
          </div>
          <div className="contact-card">
            <strong>Visit Us:</strong> <br />
            Prolife Hospital: River View Enclave, No:1, 1st Street, IAS, IPS Colony, Manapakkam, Chennai - 600125
            <br />
            Prolife Women's Centre: No:4, Krishnaveni Nagar, Mugalivakkam, Chennai - 600125
          </div>
          <div className="contact-card">
            <strong>Email:</strong> <br />prolifehospitalog@gmail.com
          </div>
        </div>

        <p className="highlight">
          Early diagnosis and treatment of thyroid disorders prevent complications and improve your
          quality of life significantly. Whether you're experiencing symptoms or need better
          management of an existing condition, our team provides the expertise and compassionate
          care you deserve.
        </p>

        <a href="#appointment" className="cta-button">
          Book an Appointment
        </a>
      </div>
    </section>

    </div>
  );
};

export default Thyroid;
