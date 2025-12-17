
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

const Elective = () => {

 
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
    " 2,500+ Successful Deliveries - Including hundreds of planned and emergency cesarean sections performed safely.",
"24/7 Surgical Readiness - Fully equipped operation theaters with specialists available round the clock for any situation.",
"Infection Control Excellence - Strict sterilization protocols and modular OTs minimize post-surgical infection risk.",
"Comprehensive Care Under One Roof - From pre-surgery assessment to post-discharge follow-up, everything happens here. No running between facilities.",
"Transparent Pricing - Clear cost breakdown with no hidden charges. Insurance-friendly billing with major providers.","Modern Facilities With Comfort - Air-conditioned private rooms, attendant accommodation, comfortable recovery spaces designed for new mothers.",
"Two convenient locations - Manapakkam main hospital and Mugalivakkam women's center—both equipped for elective LSCS.",
"98% Patient Satisfaction - Families consistently rate our surgical care, staff responsiveness, and overall experience highly.",
  ];

  const reviewsData = [
    {
      text: "I needed an elective cesarean because of placenta previa. Dr. Thamarai explained everything so clearly that I stopped worrying. The surgery was smooth, I held my baby within minutes, and recovery was much easier than I expected. The entire team made me feel safe.",
      name: " Divya K., IT Professional, Porur",
      avatar: "D",
      rating: 5
    },
    {
      text: "After an emergency C-section with my first child, I wanted a planned one for my second. Dr. Sujitha respected my choice, prepared me thoroughly, and the experience was completely different—calm, controlled, and positive. I actually enjoyed my delivery this time.",
      name: "  Lakshmi M., Teacher, Manapakkam",
      avatar: "L",
      rating: 5
    },
    {
      text: "My twins were breech and transverse. Elective cesarean was the only safe option. The surgical team coordinated perfectly—both babies delivered healthy within minutes of each other. The pediatrician checked them immediately while I recovered comfortably. Couldn't have asked for better care.",
      name: "  Preethi S., Marketing Manager, Ramapuram",
      avatar: "P",
      rating: 5
    }
  ];
  const [openFAQ, setOpenFAQ] = useState(null);
  const faqData = [
    {
      question: "How far in advance should I schedule my elective LSCS?",
      answer:
        " Ideally around 36-37 weeks of pregnancy. Most elective cesareans happen at 39 weeks to give your baby maximum maturity while avoiding spontaneous labor. Your doctor determines the exact timing based on your situation."
    },
    {
      question: "Is elective LSCS safer than emergency cesarean?",
      answer:
        "Generally yes. Planned surgeries happen under controlled conditions with prepared teams. Emergency cesareans during labor complications involve more urgency and risk. However, both are safe when performed by experienced surgeons."
    },
    {
      question: "Will I be awake during the surgery?",
      answer:
        " Yes. Spinal or epidural anesthesia numbs your lower body while keeping you conscious. You'll feel pressure and tugging but no pain. You'll hear your baby's first cry and can hold them almost immediately."
    },
     {
      question: "How long does the surgery take?",
      answer:
        " The actual delivery takes about 10-15 minutes. Closing the incision and ensuring everything looks perfect takes another 30-40 minutes. Total time in the operation theater is typically 45-60 minutes."
    },
    {
      question: "When can I start breastfeeding?",
      answer:
        "Usually within an hour of delivery, once you're moved to the recovery room. Our nurses help you find comfortable positions that don't pressure your incision. Cesarean birth doesn't prevent successful breastfeeding."
    },
    {
      question: "How long is the hospital stay?",
      answer:
        "Typically 3-4 days after elective LSCS. We monitor your recovery, pain management, wound healing, and ensure you're comfortable with baby care before discharge. Some women stay longer if they need additional support."
    },
    {
      question: "Can I have a normal delivery in my next pregnancy?",
      answer:
        "Possibly. VBAC (vaginal birth after cesarean) depends on several factors—why you had the first cesarean, your uterine scar healing, your next pregnancy conditions. We assess each case individually and discuss options thoroughly."
    },
    {
      question: "What if I go into labor before my scheduled date?",
      answer:
        " Call us immediately. We'll admit you and proceed with cesarean delivery. Our team is available 24/7, so you'll receive the same quality care even if your baby decides to arrive early."
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
      <h1 className="story-hero-title1">Elective Caesarean Section in Chennai</h1>

      <section className="plan-pregnancy-section">
        <div className="plan-container">

          <div className="plan-left">
            <h2 className="plan-title">
              Safe, Planned C-Section Delivery at <span>  PROLIFE HOSPITAL</span>
            </h2>

            <p className="plan-description">
              Sometimes the safest path for you and your baby is a planned cesarean. Maybe your doctor recommends it. Maybe you've thought it through and it feels right. Whatever brings you here—medical necessity or personal choice—you deserve respect, expertise, and complete clarity about what happens next.
            </p>
            <p className="plan-description">
             At Prolife Hospital, our elective caesarean section services give you control over your delivery experience. We plan every detail, answer every question, and ensure your surgery happens with precision, safety, and care that makes you feel supported—not rushed. 
            </p>
            <a href="/contact" className="plan-btn">
             Schedule Your Elective LSCS Consultation →
            </a>
          </div>

          <div className="plan-right">
            <img
              src="/images/img/elective1.jpg"
              alt="Pre Pregnancy Consultation"
            />
          </div>

        </div>
      </section>

      <section className="plan-pregnancy-section">
        <div className="plan-container">
          <div className="plan-right">
            <img
              src="/images/img/elective2.jpg"
              alt="Pre Pregnancy Consultation"
            />
          </div>
          <div className="plan-left">
            <h2 className="plan-title">
              What is Elective LSCS?
            </h2>

            <p className="plan-description">
              Elective LSCS (Lower Segment Caesarean Section) means a planned cesarean delivery scheduled before labor begins. Unlike emergency C-sections performed during complications, elective procedures happen on a date you and your doctor choose together—giving you time to prepare mentally, physically, and practically.
            </p>
            <p className="plan-description">The surgery involves a horizontal incision in your lower abdomen and uterus to safely deliver your baby. It's called "elective" because it's scheduled in advance, not because it's optional—many women need it for valid medical reasons.
            </p>
          
            <a href="/contact" className="plan-btn">
               Learn About Our Delivery Options  →
            </a>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2 className="services-title">Why Choose Prolife Hospital for Elective LSCS in Chennai?</h2>

        <div className="services-grid">
          {/* Regular Antenatal Checkups */}
          <div className="service-card">
            <h3>Surgeons Who've Performed Thousands of C-Sections</h3>
            <p>Our gynecologists bring decades of surgical experience. They've handled routine deliveries and complex cases—twins, previous complications, medical conditions that make cesarean delivery the safer choice. You're in hands that know exactly what they're doing.</p>
          </div>

          {/* Ultrasound Scans */}
          <div className="service-card">
            <h3>Proper Pre-Surgery Preparation</h3>
            <p>We don't just book a date and wish you luck. You get detailed pre-operative counseling, complete health assessment, anesthesia consultation to discuss pain management options, and clear instructions about eating, medications, and what to bring.</p>
          </div>

          {/* Complications */}
          <div className="service-card">
            <h3>Modern, Fully-Equipped Operation Theaters</h3>
            <p>Advanced surgical instruments and monitoring equipment, strict sterilization protocols preventing infections, climate-controlled modular OTs meeting international standards, immediate access to blood bank and emergency backup systems.</p>
          </div>

          {/* Childbirth Preparation */}
          <div className="service-card">
            <h3>Anesthesia Expertise That Prioritizes Your Comfort</h3>
            <p>Our anesthesiologists specialize in obstetric anesthesia. They explain your options—spinal or epidural—monitor you continuously during surgery, manage post-operative pain effectively, and ensure you're awake to hear your baby's first cry while feeling no pain.</p>
          </div>

          {/* Delivery Support */}
          <div className="service-card">
            <h3>24/7 Pediatric Support for Your Newborn</h3>
            <p>A pediatrician examines every baby immediately after delivery. If your little one needs extra attention, our neonatal care team provides it instantly—right here, no transfers needed.</p>
          </div>

          {/* Postpartum Care */}
          <div className="service-card">
            <h3>Transparent Costs Without Hidden Surprises</h3>
            <p>We quote complete package pricing upfront—surgery, hospital stay, medications, consultations. You know exactly what you're paying before you commit.</p>
          </div>
        </div>

        <div className="service-cta">
          <a href="/contact" className="cta-btn">
            Read Success Stories from Our Mothers →
          </a>
        </div>
      </section>

      <section className="timeline-section">
        <h2 className="timeline-title">What We Assist You With When You Come to Prolife</h2>

        <div className="timeline-container">

          <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Pre-Operative Assessment</span>
            </div>
            <ul>
              <li>Thorough medical history review and current health evaluation, blood tests checking hemoglobin, clotting factors, blood group, ultrasound confirming baby's position and placental location, ECG and other tests based on your health conditions.</li>
            </ul>
          </div>
          <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Anesthesia Counseling</span>
            </div>
            <ul>
              <li>Detailed explanation of spinal versus epidural anesthesia, discussion about what you'll feel (pressure but no pain), addressing concerns about numbness and recovery, partner presence arrangements during delivery.</li>
            </ul>
          </div>
           <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Surgery Day Coordination</span>
            </div>
            <ul>
              <li>Check-in assistance and pre-surgery preparations, IV line placement and prophylactic antibiotic administration, fetal heart monitoring before you enter the OT, calming environment with staff who answer last-minute questions.</li>
            </ul>
          </div>
           <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">The Elective LSCS Procedure</span>
            </div>
            <ul>
              <li>Clean surgical approach through lower abdomen, careful delivery of your baby within minutes, immediate newborn assessment while we complete your surgery, efficient closing with dissolvable internal stitches and minimal scarring focus.</li>
            </ul>
          </div>
           <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Immediate Post-Surgery Care</span>
            </div>
            <ul>
              <li>Recovery room monitoring until anesthesia wears off, pain management with safe medications compatible with breastfeeding, help with initial feeding and skin-to-skin contact, mobility assistance when you're ready to walk.</li>
            </ul>
          </div>
           <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Hospital Stay Support</span>
            </div>
            <ul>
              <li>Comfortable private rooms with attendant space, wound care and dressing changes, breastfeeding guidance from experienced nurses, newborn care basics and bathing demonstrations, discharge planning and home care instructions.</li>
            </ul>
          </div>
           <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Post-Discharge Follow-Up</span>
            </div>
            <ul>
              <li>Wound healing checks and stitch removal if needed, postpartum recovery assessment, contraception counseling, emotional wellbeing screening for postpartum depression signs, baby's health checkups and vaccination scheduling.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-cta">
          <a href="/contact" className="cta-btn">
             Not sure what to expect? Book a Pre-Surgery Consultation →
          </a>
        </div>
      </section>

      <section className="assist-section">
      <div className="assist-container">

        <div className="assist-header">
          <h2>How Our Elective Caesarean Section Service Helps You</h2>
        </div>

        <div className="assist-timeline">

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-comments"></i></div>
            <div className="assist-content">
              <h3>Control Over Your Delivery Date</h3>
              <p> Pick a date that works for your family. Arrange childcare for older kids. Plan work leave properly. Have your partner present without last-minute scrambles.</p>
            </div>
          </div>

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-heart-pulse"></i></div>
            <div className="assist-content">
              <h3>Reduced Labor Anxiety</h3>
              <p>No waiting for contractions to start. No wondering if this is "real labor" or false alarm. No rushing to the hospital in the middle of the night. You arrive calm, prepared, and on schedule.</p>
            </div>
          </div>

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-brain"></i></div>
            <div className="assist-content">
              <h3>Medical Safety When Needed</h3>
              <p> If previous cesarean, breech position, placenta previa, or certain health conditions make vaginal delivery risky—elective LSCS eliminates those dangers while keeping both of you safe.</p>
            </div>
          </div>

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-baby"></i></div>
            <div className="assist-content">
              <h3>Minimized Emergency Risk</h3>
              <p> Planned surgery means your surgeon isn't rushed. Blood is cross-matched and ready if needed. The entire team is prepared specifically for your case. Everything happens methodically, not frantically.</p>
            </div>
          </div>

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-heart"></i></div>
            <div className="assist-content">
              <h3>Faster Recovery Planning</h3>
              <p>You know your surgery date, so you arrange help at home in advance. Stock up on supplies. Set up your recovery space. Prepare siblings. Everything's organized before your baby arrives.</p>
            </div>
          </div>

            <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-heart-pulse"></i></div>
            <div className="assist-content">
              <h3>Transparent Experience</h3>
              <p> We walk you through each step beforehand. You know who your surgeon will be. You've met the anesthesiologist. You've seen the operation theater. Nothing feels shocking or unexpected.</p>
            </div>
          </div>

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-brain"></i></div>
            <div className="assist-content">
              <h3>Partner Involvement</h3>
              <p> Your partner attends pre-surgery counseling with you, stays by your side during the procedure, cuts the umbilical cord if desired, and participates in those precious first moments with your baby.</p>
            </div>
          </div>

        </div>

      </div>
      </section>

      <section className="ans-section">
      <div className="ans-container">

        <div className="ans-header">
          <h2>Who Needs Elective LSCS?</h2>
        </div>
        <div className="ans-panels">

          <div className="ans-panel">
            <span className="ans-label">Previous Cesarean Delivery</span>
            <p>
              Planning VBAC (vaginal birth after cesarean) isn't always the safest option. If your doctor recommends a repeat cesarean, we make it as smooth as possible.
            </p>
          </div>

          <div className="ans-panel">
            <span className="ans-label">Breach or Transverse Baby Position</span>
            <p>
               When your baby won't turn head-down despite attempts, planned cesarean avoids labor complications.
            </p>
          </div>

          <div className="ans-panel">
            <span className="ans-label"> Placenta Previa or Low-Lying Placenta</span>
            <p>
              If placenta blocks the birth canal, vaginal delivery becomes dangerous. Cesarean is the safe route.
            </p>
          </div>

          <div className="ans-panel">
            <span className="ans-label"> Multiple Pregnancies</span>
            <p>
               Twins or triplets, especially if not positioned optimally, often benefit from planned cesarean delivery.
            </p>
          </div>

          <div className="ans-panel">
            <span className="ans-label">Medical Conditions</span>
            <p>
                Heart disease, severe hypertension, HIV with high viral load, active herpes outbreak, certain eye conditions—these may require cesarean to protect you and baby.
            </p>
          </div>

          <div className="ans-panel">
            <span className="ans-label">Large Baby Size</span>
            <p>
              Suspected macrosomia (baby over 4kg) combined with maternal diabetes or narrow pelvis might make cesarean safer.
            </p>
          </div>


          <div className="ans-panel">
            <span className="ans-label">Previous Uterine Surgery</span>
            <p>
               Fibroid removal or other uterine surgeries can weaken the uterine wall, making labor risky.
            </p>
          </div>

          <div className="ans-panel">
            <span className="ans-label">Failed Induction in Previous Pregnancy</span>
            <p>
               If previous attempts to induce labor didn't work or led to complications, planned cesarean might be recommended.
            </p>
          </div>

          <div className="ans-panel">
            <span className="ans-label">  Maternal Choice After Counseling</span>
            <p>
               After thorough discussion of risks and benefits, some women choose elective cesarean. We respect informed decisions.
            </p>
          </div>

        </div>
         <div className="str-cta1">
          <a href="/contact" className="cta-btn">
             Not sure what to expect? Book a Pre-Surgery Consultation →
          </a>
        </div>
      </div>
      </section>

      <section className="eds-section">
      <div className="eds-container">

        <div className="eds-header">
          <h2>Meet Our Expert Obstetricians</h2>
          <p>Skilled Hands, Compassionate Hearts</p>
        </div>

        {/* Founder Highlight */}
          <div className="eds-founder-highlight">
            <div className="eds-founder-img">
              <img src="./images/img/d11.png" alt="Dr. Thamarai" />
            </div>

            <div className="eds-founder-content">
              <span className="eds-founder-tag">Founder</span>
              <h3>Dr. Thamarai</h3>
              <h4> Maternal Health & High-Risk Pregnancy Specialist</h4>
              <p>
                An expert in managing pregnancies complicated by medical conditions—diabetes, hypertension, previous surgeries. Dr. Thamarai's expertise means even complex cesarean deliveries happen safely. Her meticulous planning and surgical precision have earned trust from countless families facing challenging pregnancies.
              </p>
            </div>
          </div>

      
        <div className="eds-grid">

          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Sujitha R – Senior Gynecologist & Obstetrician</h3>
            <p>
              With extensive surgical experience spanning hundreds of cesarean deliveries, Dr. Sujitha specializes in both routine and complicated cases. Her patients appreciate her thorough explanations and calm approach that turns surgical anxiety into confidence. She ensures every woman understands her options completely before making decisions.
            </p>
          </div>

  

          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Varshini – Obstetrician</h3>
            <p>
             Dr. Varshini combines modern obstetric practices with compassionate patient care. Known for her skill in performing clean cesarean sections with minimal scarring, she pays attention to both medical outcomes and cosmetic results. First-time mothers especially value her reassuring presence and clear communication.
            </p>
          </div>

           <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Paulia Devi - General Surgeon</h3>
            <p>
              When cases require additional surgical expertise—previous abdominal surgeries, unusual anatomy, adhesions from prior procedures—Dr. Paulia Devi's general surgery background adds an extra layer of safety. Her collaboration with our obstetric team ensures comprehensive care for complex situations.
            </p>
          </div>


          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Uma Maheshwari - Pediatrician</h3>
            <p>
             Every baby delivered via elective LSCS receives immediate assessment from Dr. Uma Maheshwari. She checks vital signs, performs newborn examinations, initiates feeding, and addresses any concerns. Parents trust her gentle approach and thorough explanations about their newborn's health.
            </p>
          </div>

          
          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Anesthesiology Specialists</h3>
            <p>
             Dr. Hari Prakash, Dr. Shalini, Dr. Nithya Priyan - Our anesthesiology team specializes in obstetric anesthesia. They administer spinal and epidural blocks with precision, monitor you continuously during surgery, and manage post-operative pain effectively. Their expertise ensures you remain comfortable while staying alert enough to experience your baby's arrival.
            </p>
          </div>

        </div>
      </div>
      <div className="str-cta1">
        <a href="/ourteam" className="cta-btn"> Have Questions for Our Doctors? Book a Consultation</a></div>
    </section>

      <section className="eligibility-section">
        <div className="eligibility-container">
          <h2 className="eligibility-title">
            Why Prolife Hospital for Cesarean Delivery Services in Chennai?
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
               Learn More About Our Maternity Services   →
            </a>
          </div>
        </div>
      </section>

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

      <section className="journey-section">
        <div className="journey-container">
          <div className="journey-grid">
            <div className="journey-image">
              <div className="journey-content">
                <h2>Book Your Elective LSCS Consultation</h2>
                <p>Planning a cesarean delivery? Let's discuss your situation, answer your questions, and create a delivery plan that prioritizes your safety and comfort.</p>
                <p> <b>Consultation Hours:</b> <br />
                  Monday - Saturday: 9 AM - 8 PM <br />
                  Sunday: 9 AM - 2 PM</p>
                <p><b> Emergency Obstetric Care:</b> <br /> Available 24/7</p>
                <button className="appointment-btn"> Book Appointment Online → </button>
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
           Prolife Hospital — Best hospital for elective LSCS in Chennai. Your safety, your comfort, your choice.
         </h1>
          <button className="lab-btn">
              Plan Your Cesarean Delivery Today →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Elective;
