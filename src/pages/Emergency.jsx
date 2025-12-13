
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

const PrePregnancy = () => {

  const SERVICES = [
    {
      title: "High-Risk Pregnancy Management",
      desc:
        "Comprehensive care for pregnancies with complications, medical conditions, or previous pregnancy losses.",
      icon: faUserMd,
    },
    {
      title: "Pre-Pregnancy Counselling",
      desc:
        "Plan your pregnancy with risk assessment and health optimization before conceiving.",
      icon: faBaby,
    },
    {
      title: "Pregnancy Care",
      desc:
        "Complete antenatal care with regular monitoring, scans, and delivery support.",
      icon: faHeartbeat,
    },
    {
      title: "Fertility Treatment",
      desc:
        "If you're struggling to conceive, our fertility specialists help you start your family.",
      icon: faMicroscope,
    },
    {
      title: "PCOS Management",
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
    " Prevents Second-Trimester Loss — Holds cervix closed when it would otherwise open prematurely",
    "Allows Baby to Reach Full Term — Gives your pregnancy the time needed for healthy development",
    " Reduces Preterm Birth Risk — Even if delivery happens slightly early, cerclage significantly extends pregnancy duration",
    "Protects Future Pregnancies — Can be placed in subsequent pregnancies if needed",
    "Provides Peace of Mind — Knowing your cervix is reinforced reduces constant worry",
    " Improves Success Rates — Women with previous losses often carry to term successfully after cerclage",

  ];

  const reviewsData = [
    {
      text: "After losing my baby at 20 weeks, I was terrified to get pregnant again. Dr. Sujitha placed a cerclage at 14 weeks in my next pregnancy. I was monitored closely, followed every instruction, and delivered a healthy boy at 38 weeks. She gave it to my family.",
      name: " Lakshmi P., Porur",
      avatar: "L",
      rating: 5
    },
    {
      text: "My cervix started shortening at 18 weeks during my twin pregnancy. Emergency cerclage saved my babies. The team acted fast, explained everything, and monitored me constantly. My twins are now healthy toddlers because of Prolife.",
      name: "Deepa M., Manapakkam",
      avatar: "D",
      rating: 5
    },
    {
      text: "I'd had three cone biopsies for cervical issues and was told pregnancy would be difficult. Dr. Thamarai placed a cerclage before my cervix could weaken. Regular scans, bed rest when needed, and her expertise—I made it to 37 weeks and had a normal delivery.",
      name: "Priya k., Ramapuram",
      avatar: "P",
      rating: 5
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const faqData = [
    {
      question: "When should cervical cerclage be placed?",
      answer:
        "Typically between 12-14 weeks in planned cases. Emergency cerclage can be placed up to 24 weeks if the cervix starts opening unexpectedly. Earlier placement usually has better outcomes."
    },
    {
      question: "Does the procedure hurt?",
      answer:
        "You'll receive spinal or general anesthesia—you won't feel pain during placement. Mild cramping afterward is normal and manageable with medication."
    },
    {
      question: "How long does cerclage placement take?",
      answer:
        "Usually 20-30 minutes. You'll spend additional time in recovery for monitoring before going home the same day."
    },
    {
      question: "What restrictions will I have after cerclage?",
      answer:
        " Pelvic rest (no intercourse), avoiding heavy lifting, reducing strenuous activity. Some women need modified bed rest depending on their situation. We give you clear, specific guidelines."
    },
    {
      question: "Will I need bed rest for the entire pregnancy?",
      answer:
        "Not necessarily. Some women continue normal activities with minor modifications. Others need more rest based on cervical changes. We monitor and adjust recommendations throughout pregnancy."
    },
    {
      question: "When is the cerclage removed?",
      answer:
        "Usually around 36-37 weeks, or earlier if labor starts. Removal is quick, done in the office without anesthesia in most cases."
    },
    {
      question: "Can I have a normal delivery after cerclage?",
      answer:
        "Yes. Many women deliver vaginally after cerclage removal. Cesarean is only needed if other medical reasons require it."
    },
    {
      question: "What are the risks of cervical cerclage?",
      answer:
        "Risks are low but include bleeding, infection, premature rupture of membranes, or preterm labor. We monitor closely to catch and address issues early."
    },
    {
      question: "How much does cervical cerclage cost?",
      answer:
        "Cost varies based on procedure type and insurance coverage. Contact our billing team for specific pricing. Many insurance plans cover cerclage for documented medical need."
    },
    {
      question: "What if my cerclage fails?",
      answer:
        "While rare, if the cervix continues opening despite cerclage, we manage your situation with bed rest, medications, or early delivery if necessary. Your safety and baby's wellbeing remain our priority."
    },
    {
      question: "Can I have cerclage in future pregnancies?",
      answer:
        "Yes. If you needed cerclage once, you'll likely need it in subsequent pregnancies. We can place it early as a preventive measure."
    },
  ];
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };



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

        </div>
      </div>
      <h1 className="story-hero-title1">Emergency LSCS in Chennai - When Every Second Counts</h1>

      {/* PLAN PREGNANCY SECTION */}
      <section className="plan-pregnancy-section">
        <div className="plan-container">

          <div className="plan-left">
            <h2 className="plan-title">
              Expert Emergency C-Section Care at Prolife Hospital
            </h2>

            <p className="plan-description">
              Childbirth doesn't always go as planned. When complications arise during labor, an emergency LSCS (Lower Segment Cesarean Section) can be the difference between life and death—for both mother and baby.
            </p>
            <p className="plan-description">
              At Prolife Hospital, our emergency LSCS in Chennai operates 24/7 with skilled obstetricians, anesthesiologists, and surgical teams ready to act within minutes. We've performed hundreds of emergency cesarean deliveries, saving lives when unexpected complications threaten safe childbirth.
            </p>
            <p className="plan-description">
              Your safety is our priority. When things change suddenly, we're already prepared.
            </p>

            <a href="/contact" className="plan-btn">
              Emergency Helpline →
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
              What Is Emergency LSCS?
            </h2>

            <p className="plan-description">
              An Emergency LSCS (Emergency Caesarean Section) is a surgery done quickly and unexpectedly when the mother or baby is in danger during pregnancy or labour.Unlike planned C-sections, this procedure is performed immediately—usually within 30 minutes—to ensure safe and fast delivery
            </p>
            <p className="plan-description">During the surgery, doctors make a cut in the lower part of the uterus, which is safer, heals faster, and supports future pregnancies.

            </p>
            <p className="plan-description"> <b>Emergency LSCS is needed when waiting even a few minutes could be risky. Some common reasons include:</b>
              <ul>
                <li>Baby’s heart rate dropping (fetal distress)Umbilical cord </li>
                <li>slipping out (cord prolapse)</li>
                <li>Heavy bleeding due to placental problems</li>
                <li>
                  Labour not progressing despite efforts</li>
                <li>Uterine rupture, which can endanger both mother and baby</li>
              </ul>

              This procedure allows doctors to deliver the baby quickly and safely when complications arise.
            </p>
            <a href="/contact" className="plan-btn">
               Learn About Our Maternity Services  →
            </a>
          </div>
        </div>
      </section>

      <section className="choose-prolife">
        <div className="choose-content">
          <h2 className="choose-title">
            Why Choose Prolife Hospital for Emergency LSCS?
          </h2>

          <ul className="choose-list">
            <li>
              <strong>24/7 Immediate Care</strong>
              <p>
                 Our operation theaters are always ready. Doctors, anesthesiologists, nurses, and pediatricians are available on-site at all times. When an emergency LSCS is needed, we act immediately—no delays, no waiting.
              </p>
            </li>

            <li>
              <strong>Fast “Decision to Delivery” Time</strong>
              <p>
                Emergency C-sections must be done within 30 minutes for the safety of mother and baby. At Prolife Hospital, we consistently achieve this because our team and systems are prepared for urgent situations.
              </p>
            </li>

            <li>
              <strong>Highly Experienced Doctors</strong>
              <p>
                 Our gynecologists have performed hundreds of emergency C-sections, including cases with complications, previous surgeries, and twin pregnancies. Their experience ensures safe, quick decisions when every second counts.
              </p>
            </li>

            <li>
              <strong>Advanced Operation Theaters</strong> <br />
              <p>  We have modern modular OTs equipped with:
                <li>Advanced anesthesia machines</li>
                <li>Continuous fetal monitoring</li>
                <li>Immediate blood bank access</li>
                <li>Newborn resuscitation equipment</li>
                <li>Infection-controlled surroundings</li>
              </p>
            </li>

            <li>
              <strong>Complete Emergency Support</strong><br />
              <p> We provide full support during emergencies, including:
                <li>In-house blood bank</li>
                <li>ICU for mothers</li>
                <li>NICU for newborns</li>
                <li>24/7 lab and scan facilities</li>
              </p>
            </li>
            <li>
              <strong>Clear Communication</strong>
              <p>
                 Even in emergencies, we make sure you understand what is happening, why the surgery is needed, and what to expect before and after the procedure.
              </p>
            </li>
          </ul>

          <a href="/reviews" className="choose-btn">
            Emergency ? →
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

      <section className="timeline-section">
        <h2 className="timeline-title">What We Do When You Come to Prolife for Emergency LSCS</h2>

        <div className="timeline-container">

          <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Immediate Assessment (First 5 Minutes)</span>
            </div>
            <ul>
              <li>Your condition evaluation with vital signs and baby's heart rate monitoring through continuous fetal monitoring. Our obstetrician reviews your labor progress, examines complications, and determines if emergency LSCS is the safest option.</li>
            </ul>
          </div>
          <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Rapid Preparation (Next 10 Minutes)</span>
            </div>
            <ul>
              <li>Consent process with clear explanation of why surgery is needed, anesthesia team assessment and preparation for spinal or epidural anesthesia, IV line placement for medications and fluids, pre-operative blood work if time permits, and catheter insertion and surgical site preparation.</li>
            </ul>
          </div>
           <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Surgical Procedure (15-30 Minutes)</span>
            </div>
            <ul>
              <li>Consent process with clear explanation of why surgery is needed, anesthesia team assessment and preparation for spinal or epidural anesthesia, IV line placement for medications and fluids, pre-operative blood work if time permits, and catheter insertion and surgical site preparation.</li>
            </ul>
          </div>
           <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Rapid Preparation (Next 10 Minutes)</span>
            </div>
            <ul>
              <li>Consent process with clear explanation of why surgery is needed, anesthesia team assessment and preparation for spinal or epidural anesthesia, IV line placement for medications and fluids, pre-operative blood work if time permits, and catheter insertion and surgical site preparation.</li>
            </ul>
          </div>
           <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Rapid Preparation (Next 10 Minutes)</span>
            </div>
            <ul>
              <li>Consent process with clear explanation of why surgery is needed, anesthesia team assessment and preparation for spinal or epidural anesthesia, IV line placement for medications and fluids, pre-operative blood work if time permits, and catheter insertion and surgical site preparation.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-cta">
          <a href="/contact" className="cta-btn">
            Not Sure If You Need It? Consult Our Doctors →
          </a>
        </div>
      </section>








      <section className="services-section">
        <h2 className="services-title">What We Do When You Come to Prolife</h2>

        <div className="services-grid">
          {/* Regular Antenatal Checkups */}
          <div className="service-card">
            <h3>Initial Consultation & Risk Assessment</h3>
            <p> We review your pregnancy history in detail—previous miscarriages, preterm births, cervical procedures, or genetic factors. Ultrasound measures your cervical length and checks for early changes.</p>
          </div>

          {/* Ultrasound Scans */}
          <div className="service-card">
            <h3>Pre-Procedure Preparation</h3>
            <p>Complete health evaluation and infection screening. Discussion about procedure timing, anesthesia options, and what to expect. Answering every question until you feel confident.</p>
          </div>

          {/* Complications */}
          <div className="service-card">
            <h3>Cerclage Placement Procédure</h3>
            <p>Performed under spinal or general anesthesia in our modern operation theater. Takes 20-30 minutes on average. Strong surgical stitches reinforce the cervix opening. You rest in recovery for observation before going home.</p>
          </div>

          {/* Childbirth Preparation */}
          <div className="service-card">
            <h3>Ongoing Pregnancy Monitoring</h3>
            <p>Regular checkups tracking cervical length and cerclage position. Ultrasound scans ensuring baby's healthy growth. Addressing concerns immediately—never making you wait.</p>
          </div>

          {/* Delivery Support */}
          <div className="service-card">
            <h3>Activity & Lifestyle Guidance</h3>
            <p>Clear instructions about physical restrictions, work modifications, and warning signs to watch for. Managing your anxiety about daily activities.</p>
          </div>

          {/* Postpartum Care */}
          <div className="service-card">
            <h3>Delivery Planning</h3>
            <p>When it's time for delivery, we remove the cerclage (usually around 36-37 weeks). Labor can proceed naturally, or we schedule a cesarean if needed.</p>
          </div>
        </div>

        <div className="service-cta">
          <a href="/contact" className="cta-btn">
            Schedule Your Risk Assessment  →
          </a>
        </div>
      </section>


      <section className="eligibility-section">
        <div className="eligibility-container">
          <h2 className="eligibility-title">
            How Cervical Cerclage <span> Helps You</span>
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
              Talk to Our Cervical Cerclage Specialists →
            </a>
          </div>
        </div>
      </section>

      


      <section className="cerclage-team-section" id="team">
        <div className="container">
          <h2 className="section-title">Meet Our Cervical Cerclage Team</h2>


          <div className="team-grid">
            {/* Dr. Sujitha */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Sujitha R</h3>
              <p className="designation">Senior Gynecologist & Obstetrician</p>
              <p className="doctor-desc">
                15+ years managing high-risk pregnancies and cervical complications. Has placed cerclages in hundreds of women—many who went on to deliver healthy babies after previous losses. Known for surgical precision and genuine compassion during anxious pregnancies.
              </p>
            </div>


            {/* Dr. Thamarai */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Thamarai</h3>
              <p className="designation">High-Risk Pregnancy Specialist</p>
              <p className="doctor-desc">
                Expert in complicated obstetric cases requiring surgical intervention. Specializes in managing pregnancies with cervical insufficiency, multiple gestations, and previous pregnancy losses. Patients trust her clinical judgment and calming presence.
              </p>
            </div>


            {/* Dr. Varshini */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Varshini</h3>
              <p className="designation">Obstetrician</p>
              <p className="doctor-desc">
                Skilled in both preventive and emergency cerclage placement. Combines modern obstetric techniques with individualized patient care. Particularly attentive to first-time mothers navigating high-risk pregnancies.
              </p>
            </div>


            {/* Anesthesiology Team */}
            <div className="team-card">
              <h3 className="doctor-name">Anesthesiology Team</h3>
              <p className="designation">
                Dr. Hari Prakash | Dr. Shalini | Dr. Nithya Priyan
              </p>
              <p className="doctor-desc">
                Ensure comfortable, pain-free procedures with expert anesthesia administration. Monitor patient safety throughout surgery and recovery.
              </p>
            </div>
          </div>


          <div className="center-btn">
            <button className="cta-btn">Book Consultation With Our Specialists</button>
          </div>
        </div>
      </section>

      <section className="why-prolife-section">
        <div className="wp-container">
          <h2 className="wp-title"><strong>Why Choose Prolife Hospital for Cervical Cerclage?</strong></h2>

          <div className="wp-grid fade-up">
            <div className="wp-item slide-in-left">✓ Proven Track Record — Hundreds of successful cerclages leading to healthy deliveries</div>
            <div className="wp-item slide-in-right">✓ Complete High-Risk Pregnancy Care — Full monitoring throughout pregnancy</div>
            <div className="wp-item slide-in-left">✓ Modern Surgical Facilities — Advanced operation theaters & safety standards</div>
            <div className="wp-item slide-in-right">✓ Experienced Surgical Team — Expertise in all cervical cerclage techniques</div>
            <div className="wp-item slide-in-left">✓ 24/7 Emergency Response — Immediate care for any complications</div>
            <div className="wp-item slide-in-right">✓ Transparent Communication — Clear guidance with no confusion</div>
            <div className="wp-item slide-in-left">✓ Affordable Treatment — Quality care without financial stress</div>
            <div className="wp-item slide-in-right">✓ Two Locations — Manapakkam & Mugalivakkam for easy access</div>
          </div>

          <div className="wp-btn-wrapper fade-up">
            <button className="wp-cta-btn">Learn More About Our Hospital</button>
          </div>
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
                <p>Don't let cervical insufficiency take another pregnancy. Our specialists assess your situation and create a protection plan.</p>
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
            Prolife Hospital —  Cervical cerclage specialists protecting your pregnancy.

          </h1>

          <button className="lab-btn">
            Protect Your Pregnancy Today →
          </button>
        </div>
      </section>
    </div>
  );
};

export default PrePregnancy;
