
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
import {
  faHeartPulse,
  faPersonPregnant,
  faDna,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import { FaCheckCircle } from "react-icons/fa";

const Emergency = () => {

 
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


   const relatedServices = [
      {
        title: "High-Risk Pregnancy Management",
        desc: " Specialized monitoring and care for pregnancies with complications requiring potential emergency intervention.",
        icon: faBaby,
      },
      {
        title: "Pregnancy Care in Chennai",
        desc: "  Complete antenatal services with regular monitoring to catch problems early before emergencies develop.",
        icon: faPersonPregnant,
      },
      {
        title: "Normal Delivery Services",
        desc: " Vaginal birth support with emergency LSCS backup if complications arise unexpectedly during labor.",
        icon: faHeartPulse,
      },
      {
        title: "NICU & Pediatric Care",
        desc: "Specialized newborn support for babies needing extra care after emergency delivery.",
        icon: faDna,
      },
      {
        title: "Postnatal Care",
        desc: "  Recovery support and wound care after cesarean delivery, ensuring healthy healing.",
        icon: faDroplet,
      },
      {
        title: "Pre-Pregnancy Counselling",
        desc: " Plan your pregnancy with medical guidance, especially important if previous emergencies occurred.",
        icon: faBaby,
      },
    ];

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
      img: "/images/doctors/sujitha.jpg",
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
      desc: "Newborn care specialist. Baby's first medical assessment, vaccination plan & parental support.",
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
    "  500+ Emergency LSCS Performed – Extensive experience with urgent cesarean deliveries saves lives through practiced efficiency.",
    "30-Minute Response Time – From decision to delivery, we meet critical timeframes consistently.",
    " 24/7 Specialist Availability – Obstetricians, anesthesiologists, and pediatricians always on-site, never on-call from home.",
    " Zero Equipment Delays – Operation theaters remain prepared with all necessary instruments, medications, and monitoring equipment ready immediately.",
    " In-House Blood Bank – Immediate access to blood products if transfusion becomes necessary during or after surgery.",
    "  Modern Surgical Facilities – Infection-controlled modular OTs with advanced equipment ensuring best hospital for emergency C-section in Chennai standards.",
    " Complete Pediatric Support – Newborn assessment team ready for babies needing extra care after emergency delivery.",
    "Transparent Pricing – Emergency situations shouldn't include billing surprises. We provide clear cost information upfront.",
    " Two Convenient Locations – Manapakkam and Mugalivakkam facilities both equipped for emergency obstetric surgery.",
    " Insurance Partnership – We work with major insurance providers to minimize your financial stress during medical emergencies.",
  ];

  const reviewsData = [
    {
      text: "At 3 AM, my baby's heartbeat dropped suddenly. Within 20 minutes, I was in surgery. Dr. Sujitha explained everything quickly, the anesthesia team was already there, and my daughter was delivered safely. The speed of their response saved her life. I can't thank Prolife enough",
      name: " Lakshmi V., Manapakkam",
      avatar: "L",
      rating: 5
    },
    {
      text: "I planned a normal delivery, but my blood pressure spiked dangerously during labor. The team decided on emergency LSCS immediately. Everything happened so fast but so smoothly. Dr. Thamarai kept me calm, explained each step, and my baby boy was born healthy. The pediatrician checked him right away. I felt completely safe.",
      name: " Divya K., Porur",
      avatar: "D",
      rating: 5
    },
    {
      text: "Cord prolapse at 38 weeks—terrifying words. But Prolife's team moved like a well-oiled machine. Surgery started within minutes. My husband could stay with me, and despite the emergency, I felt cared for, not rushed. My son is perfect. Dr. Varshini's quick decision-making made all the difference",
      name: " Preethi S., Ramapuram",
      avatar: "P",
      rating: 5
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const faqData = [
    {
      question: "When is an emergency LSCS needed?",
      answer:
        "When labour becomes unsafe for the mother or baby. Common reasons include fetal distress, cord problems, heavy bleeding, labour that stops progressing, or sudden health issues. Your doctor decides based on continuous monitoring."
    },
    {
      question: "How fast can you perform it?",
      answer:
        " We perform emergency C-sections within 30 minutes of the decision—often faster. Our team and operation theaters are ready 24/7, so there are no delays."
    },
    {
      question: "Will I be awake during the surgery?",
      answer:
        "Usually yes. Most emergency LSCS procedures use spinal or epidural anesthesia, so you stay awake but feel no pain. General anesthesia is used only in extreme situations."
    },
    {
      question: "Is emergency LSCS riskier?",
      answer:
        "It can carry slightly more risk because complications already exist, but it is much safer than continuing a dangerous labour. Our experienced team performs the surgery with full care and precision."
    },
    {
      question: "Can my husband be with me?",
      answer:
        "Yes, if regional anesthesia is used and the situation is stable. In very urgent cases or when general anesthesia is required, partners may need to wait outside but receive regular updates."
    },
    {
      question: "What happens to my baby after delivery?",
      answer:
        "A pediatrician checks your baby immediately. If stable, skin-to-skin contact begins right away. If extra support is needed, our neonatal team provides quick care."
    },
    {
      question: "How long will I stay in the hospital?",
      answer:
        " Usually 3–4 days, similar to planned C-sections. You may stay longer if extra monitoring is needed."
    },
    {
      question: "Will I need a blood transfusion?",
      answer:
        " Most mothers don’t need one, but our in-house blood bank is ready if needed. Your doctor will check beforehand if you are at higher risk."
    },
    {
      question: "Can I breastfeed after an emergency LSCS?",
      answer:
        " Yes. Breastfeeding usually starts within 1–2 hours after surgery. Our nurses will assist you."
    },
    {
      question: "How much does it cost?",
      answer:
        " Costs depend on the situation, medications, and hospital stay. We provide clear estimates and assist with insurance."
    },
    {
      question: "Can I have future pregnancies?",
      answer:
        " Yes. The lower-segment incision heals well, and many women have healthy future pregnancies, including the option of VBAC."
    },
    {
      question: "What if I go into labour at night or on weekends?",
      answer:
        " Our team is available 24/7. Doctors, anesthetists, pediatricians, and nurses are always in the hospital and ready for emergencies."
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
              Expert Emergency C-Section Care at <span> PROLIFE HOSPITAL</span> 
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
              src="/images/img/emergency1.jpg"
              alt="Pre Pregnancy Consultation"
            />
          </div>

        </div>
      </section>

      <section className="plan-pregnancy-section">
        <div className="plan-container">
          <div className="plan-right">
            <img
              src="/images/img/emergency2.jpg"
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
              <strong>Fast Decision to Delivery Time</strong>
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
              <strong>Advanced Operation Theaters</strong> 
              <p>  We have modern modular OTs equipped with:
           <br />   ● Advanced anesthesia machines
           <br />    ● Continuous fetal monitoring
            <br />    ● Immediate blood bank access
            <br />   ● Newborn resuscitation equipment
             <br />    ●  Infection-controlled surroundings
              </p>
            </li>

            <li>
              <strong>Complete Emergency Support</strong>
              <p> We provide full support during emergencies, including:
            <br />   ●  In-house blood bank
            <br />   ●  ICU for mothers
            <br />   ●  NICU for newborns
            <br />   ●  24/7 lab and scan facilities
              </p>
            </li>
            <li>
              <strong>Clear Communication</strong>
              <p>
                 Even in emergencies, we make sure you understand what is happening, why the surgery is needed, and what to expect before and after the procedure.
              </p>
            </li>
          </ul>

          <a href="/contact" className="choose-btn">
            Emergency ? →
          </a>
        </div>

        {/* <div className="choose-img-wrapper">
          <img
            src="/images/img/emergency3.jpg"
            alt="Pregnancy Care at Prolife"
            className="choose-img"
          />
        </div> */}
      </section>

      <section className="timeline-section">
        <h2 className="timeline-title">What We Do When You Come to Prolife for Emergency LSCS</h2>

        <div className="timeline-container">

          <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Immediate Assessment ( 5 Minutes)</span>
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
              <span className="trimester-tag">Immediate Post-Operative Care</span>
            </div>
            <ul>
              <li>Recovery room monitoring for 2-4 hours, pain management with medications, baby placed on your chest for bonding when medically stable, breastfeeding assistance as soon as you're ready, and vital signs monitoring ensuring stable recovery.</li>
            </ul>
          </div>
           <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Hospital Stay & Follow-Up</span>
            </div>
            <ul>
              <li>Typical 3-4 day hospital stay with monitoring, wound care and infection prevention, mobility encouragement within 6-8 hours, discharge planning with home care instructions, and follow-up appointment scheduled for 7-10 days.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-cta">
          <a href="/contact" className="cta-btn">
             Questions About Emergency LSCS? Consult Our Specialists →
          </a>
        </div>
      </section>

      <section className="assist-section">
      <div className="assist-container">

        <div className="assist-header">
          <h2>How Emergency LSCS Helps You</h2>
        </div>

        <div className="assist-timeline">

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-comments"></i></div>
            <div className="assist-content">
              <h3>Saves Lives in Critical Moments</h3>
              <p> When a normal delivery becomes unsafe, an emergency C-section allows doctors to deliver the baby quickly and prevent serious risks like lack of oxygen, heavy bleeding, or birth injuries.</p>
            </div>
          </div>

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-heart-pulse"></i></div>
            <div className="assist-content">
              <h3>Solves Complications Immediately</h3>
              <p> Issues like fetal distress, cord prolapse, heavy bleeding, or labour that has stopped progressing are handled within minutes to protect both mother and baby.</p>
            </div>
          </div>

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-brain"></i></div>
            <div className="assist-content">
              <h3>Supports Future Pregnancies</h3>
              <p> Modern LSCS uses a lower uterine incision that heals well and reduces risks in future pregnancies.</p>
            </div>
          </div>

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-baby"></i></div>
            <div className="assist-content">
              <h3>Safe and Expert Care</h3>
              <p>Even though it’s urgent, emergency LSCS is performed with the same skill and care as a planned surgery. Mothers receive expert anesthesia, safe surgery, and newborns get immediate pediatric attention.</p>
            </div>
          </div>

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-heart"></i></div>
            <div className="assist-content">
              <h3>Gives Peace of Mind</h3>
              <p> Knowing a skilled team is ready 24/7 helps mothers feel safe throughout labour, even if complications arise suddenly.</p>
            </div>
          </div>

        </div>

      </div>
      </section>

      <section className="services-section">
        <h2 className="services-title">Who Needs Emergency LSCS?</h2>

        <div className="services-grid">
          {/* Regular Antenatal Checkups */}
          <div className="service-card">
            <h3>Mothers Experiencing Fetal Distress</h3>
            <p>Sudden drops in the baby's heart rate, meconium-stained amniotic fluid indicating stress, and reduced oxygen supply to the baby require immediate action.</p>
          </div>

          {/* Ultrasound Scans */}
          <div className="service-card">
            <h3>Complications During Labor</h3>
            <p>Umbilical cord prolapse where the cord slips through the cervix before the baby, placental abruption causing the placenta to separate prematurely, obstructed labor when the baby can't move through the birth canal, and uterine rupture threatening both lives.</p>
          </div>

          {/* Complications */}
          <div className="service-card">
            <h3>High-Risk Pregnancy Emergencies</h3>
            <p>Severe preeclampsia or eclampsia with dangerously high blood pressure, uncontrolled gestational diabetes affecting baby's health, multiple pregnancy complications with twins or triplets, and placenta previa with bleeding episodes.</p>
          </div>

          {/* Childbirth Preparation */}
          <div className="service-card">
            <h3>Failed Labor Progression</h3>
            <p>Prolonged labor exceeding safe timeframes, cervix not dilating despite strong contractions, baby's position preventing vaginal delivery, and exhaustion preventing effective pushing.</p>
          </div>

          {/* Delivery Support */}
          <div className="service-card">
            <h3>Previous Surgical History</h3>
            <p>Previous cesarean attempting vaginal birth (VBAC) with complications, uterine surgery or fibroid removal creating rupture risk, and classical cesarean scars more prone to separation.</p>
          </div>

          {/* Postpartum Care */}
          <div className="service-card">
            <h3>Unexpected Medical Emergencies</h3>
            <p>Maternal hemorrhage during labor, sudden severe high blood pressure, maternal heart or breathing problems, and infections threatening mother or baby.</p>
          </div>
        </div>

        <div className="service-cta">
          <a href="/contact" className="cta-btn">
            Concerned About Your Delivery? Talk to Our Obstetricians  →
          </a>
        </div>
      </section>

      <section className="cerclage-team-section" id="team">
        <div className="container">
          <h2 className="section-title">Meet Our Cervical Cerclage Team</h2>


          {/* Founder Highlight */}
          <div className="eds-founder-highlight">
            <div className="eds-founder-img">
              <img src="./images/img/d11.png" alt="Dr. Thamarai" />
            </div>

            <div className="eds-founder-content">
              <span className="eds-founder-tag">Founder</span>
              <h3>Dr. Thamarai</h3>
              <h4>High-Risk Pregnancy Specialist</h4>
              <p>
                Founder of our hospital and  Expert in high-risk pregnancies, including diabetes, hypertension, and multiple pregnancies. Skilled in managing complex emergency C-sections, even in mothers with previous uterine surgeries.
              </p>
            </div>
          </div>


          <div className="team-grid">
            {/* Dr. Sujitha */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Sujitha R</h3>
              <p className="designation">Senior Gynecologist & Obstetrician</p>
              <p className="doctor-desc">
                 With 15+ years of experience, she has handled hundreds of emergency C-sections. Known for quick decision-making and keeping families informed, she is available 24/7 for obstetric emergencies.
              </p>
            </div>


            {/* Dr. Varshini */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Varshini</h3>
              <p className="designation">Obstetrician</p>
              <p className="doctor-desc">
                Recognizes early warning signs and acts quickly during emergencies. Combines modern obstetric care with kindness and strong emotional support for families.
              </p>
            </div>


            {/* Anesthesiology Team */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Shalini </h3>
              <p className="designation">Senior Anesthetist</p>
              <p className="doctor-desc">
               Provides fast and safe anesthesia for emergency C-sections. Specializes in spinal and epidural methods while closely monitoring the mother’s safety throughout surgery.
              </p>
            </div>


             <div className="team-card">
              <h3 className="doctor-name">Dr. Nithya Priyan </h3>
              <p className="designation">Anesthetist</p>
              <p className="doctor-desc">
               Experienced in high-risk obstetric anesthesia. Works smoothly with the surgical team and helps mothers stay calm during urgent procedures.
              </p>
            </div>

             <div className="team-card">
              <h3 className="doctor-name">Dr. Hari Prakash</h3>
              <p className="designation">Anesthetist</p>
              <p className="doctor-desc">
               Handles complex anesthesia needs, especially when general anesthesia is required. Ensures safe pain management and smooth surgery.
              </p>
            </div>

             <div className="team-card">
              <h3 className="doctor-name">Dr. Uma Maheshwari</h3>
              <p className="designation"> Pediatrician</p>
              <p className="doctor-desc">
               Assesses the baby immediately after birth, provides resuscitation if needed, and coordinates NICU care for newborns requiring extra support.
              </p>
            </div>

             <div className="team-card">
              <h3 className="doctor-name">Dr. Paulia Devi</h3>
              <p className="designation">General Surgeon</p>
              <p className="doctor-desc">
              Available for backup support during complicated cesarean cases or unexpected surgical challenges.
              </p>
            </div>
          </div>

          <div className="center-btn">
            <button className="cta-btn"> <a href="/ourteam">Meet Our Complete Maternity Team</a> </button>
          </div>
        </div>
      </section>

      <section className="eligibility-section">
        <div className="eligibility-container">
          <h2 className="eligibility-title">
            Why Choose Prolife Hospital for Emergency LSCS?
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
              Tour Our Emergency Facilities  →
            </a>
          </div>
        </div>
      </section>

    
      {/* Reviews Section */}
      <section className="reviews-section">
        <p className="sub-title">TESTIMONIALS</p>
        <div className="google-rating">
         <span>4.5/5 Google Rating</span>
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
          Read More Success Stories
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

      {/* Care Journey Section */}
      <section className="journey-section">
        <div className="journey-container">
          <div className="journey-grid">
            <div className="journey-image">
              <div className="journey-content">
                <h2>Book Your Emergency Consultation</h2>
                <p>Planning your delivery? Discuss emergency preparedness with our obstetricians. Understanding procedures before labor reduces fear if complications arise.</p>
                <p> <b>Consultation Hours:</b> <br />
                  Monday - Saturday: 9 AM - 8 PM <br />
                  Sunday: 9 AM - 2 PM</p>
                <p><b>Emergency Care:</b> <br /> Available 24/7</p>
                <button className="appointment-btn"> Schedule Prenatal Consultation → </button>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="related-services">
              <h2 className="related-title">Related Services You Might Need</h2>
      
              <div className="related-grid">
                {relatedServices.map((service, index) => (
                  <div className="related-card" key={index}>
                    <div className="service-icon">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
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
           Prolife Hospital — High-risk pregnancy emergency LSCS in Chennai when every second counts.
          </h1>
          <button className="lab-btn"> <a href="/contact"> Emergency? We're Ready 24/7→ </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Emergency;
