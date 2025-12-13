
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

 
 
  

 

 


  const reasons = [
  {
    icon: "fa-solid fa-hospital",
    title: "Multi-Specialty Support",
    text: "Immediate access to specialists across disciplines ensures comprehensive care under one roof."
  },
  {
    icon: "fa-solid fa-clock",
    title: "24/7 Maternity Services",
    text: "Our obstetric team, nursing staff, and support services operate round-the-clock for your care."
  },
  {
    icon: "fa-solid fa-hospital-user",
    title: "Well-Equipped Facilities",
    text: "Modular theaters, advanced monitoring, modern vacuum extraction devices, and private, comfortable wards."
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "Integrated Maternity Care",
    text: "End-to-end maternity services from preconception counseling through postpartum follow-up."
  },
  {
    icon: "fa-solid fa-money-bill-wave",
    title: "Affordable Excellence",
    text: "Best-in-class maternity care with transparent pricing and insurance support."
  },
  {
    icon: "fa-solid fa-users",
    title: "Family-Centered Approach",
    text: "Policies encourage partner involvement, with comfortable waiting areas for family support."
  }
];

  const idealCandidates = [
    "Mothers in the active second stage of labor with the baby's head engaged in the birth canal",
    "Women experiencing prolonged pushing without adequate progress",
    "Mothers with medical conditions that make prolonged bearing down efforts risky",
    "Situations where the baby shows signs of distress but vaginal delivery remains feasible",
    "Cases where the baby's position needs minor adjustment in the final stage"
  ];

  const notSuitable = [
    "The baby is premature (less than 34 weeks gestation)",
    "The baby's head has not descended adequately into the birth canal",
    "There's uncertainty about the baby's position",
    "Previous vacuum attempts have been unsuccessful",
    "Certain fetal conditions are present that contraindicate vacuum application"
  ];

  
  const benefits = [
    {
      icon: "fa-solid fa-ban",
      title: "Avoiding Cesarean Section",
      text: "Vacuum delivery provides an effective alternative to cesarean section, allowing shorter recovery and reduced surgical risks."
    },
    {
      icon: "fa-solid fa-stopwatch",
      title: "Reducing Delivery Time",
      text: "Vacuum assistance expedites the delivery process safely, preventing complications and reducing physical strain for the mother."
    },
    {
      icon: "fa-solid fa-child-reaching",
      title: "Preserving Future Birth Options",
      text: "By avoiding cesarean section, vacuum delivery keeps future pregnancy options open, giving more flexibility for subsequent births."
    },
    {
      icon: "fa-solid fa-user-md",
      title: "Expert Intervention When Needed",
      text: "Skilled obstetricians provide intervention at the right moment, balancing patience with prompt action for safe delivery outcomes."
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Comprehensive Safety Net",
      text: "Expert assistance throughout labor provides peace of mind, ensuring the mother can focus on the birth experience confidently."
    }
  ];
  
  const reviewsData = [
    {
      text: " was anxious when my doctor mentioned vacuum delivery might be needed, but the team at Prolife explained everything so clearly. Dr. Sujitha's skill and the staff's support made all the difference. My baby and I are both healthy, and I'm grateful for their expertise",
      name: " Priya M., Manapakkam",
      avatar: "P",
      rating: 5
    },
    {
      text: "After hours of pushing, I was exhausted and worried. The vacuum-assisted delivery was quick and safe. Dr. Thamarai's calm guidance helped me stay focused. The care I received at Prolife was exceptional from start to finish.",
      name:" Anjali S., Porur",
      avatar: "A",
      rating: 5
    },
    {
      text:"Prolife Hospitals provided the perfect balance of natural birth support and medical expertise. When vacuum assistance became necessary, I felt completely confident in Dr. Varshini's hands. The entire experience exceeded my expectations.",
      name: "Deepa R., Mugalivakkam",
      avatar: "D",
      rating: 5
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const faqData = [
    {
      question: "Is vacuum delivery safe for my baby?",
      answer:
        "Yes, when performed by experienced obstetricians in appropriate situations, vacuum delivery is a safe procedure. Research shows that vacuum-assisted delivery is an effective alternative to cesarean section with good outcomes. Our doctors use proper technique and careful monitoring to minimize risks. The soft cup is designed to distribute pressure evenly, and most babies experience no complications. Minor, temporary marks on the baby's scalp may occur but typically resolve within days."
    },
    {
      question: "Will vacuum delivery hurt?",
      answer:
        "Most women do not experience significant additional pain from the vacuum device itself. You'll still feel the sensations of pushing and delivery, but the vacuum helps expedite the process. If you have an epidural, you should feel minimal discomfort. Our anesthesia team ensures appropriate pain management throughout your delivery."
    },
    {
      question: "How long does vacuum-assisted delivery take?",
      answer:
        "The actual vacuum application typically lasts only a few minutes. Most successful vacuum deliveries are completed within 15-20 minutes from the time of application. Our doctors work efficiently while maintaining safety standards, carefully monitoring progress throughout the procedure."
    },
    {
      question: "What are the risks of vacuum delivery?",
      answer:
        "While generally safe, vacuum delivery does carry some risks, which our doctors discuss with you beforehand. Potential maternal risks include increased chance of perineal tears and temporary pelvic floor effects. Possible fetal risks include scalp swelling or bruising, which typically resolves quickly. Serious complications are rare when the procedure is performed by skilled obstetricians following established protocols, as we do at Prolife Hospitals."
    },
    {
      question: "Can I request vacuum delivery instead of cesarean?",
      answer:
        "Vacuum delivery is not elective but rather a medical intervention used when specific indications are present. Your obstetrician will recommend vacuum assistance only when it's medically appropriate and offers advantages over other options. We're happy to discuss your preferences during antenatal visits and explain the decision-making process during labor."
    },
    {
      question: "Will I need special recovery care after vacuum delivery?",
      answer:
        "Recovery after vacuum-assisted delivery is similar to recovery after any vaginal birth, though you may experience slightly more perineal discomfort if tears occurred. Our postnatal team provides comprehensive care instructions, pain management, and support for healing. Most women recover fully within the normal postpartum timeframe."
    },
    {
      question: "Does vacuum delivery affect breastfeeding?",
      answer:
        "Vacuum delivery does not typically impact your ability to breastfeed. In fact, because it allows for vaginal delivery rather than cesarean section, you may find early breastfeeding slightly easier. Our lactation support team is available to help you establish breastfeeding regardless of your delivery method."
    },
    {
      question: "How do I know if I might need vacuum delivery?",
      answer:
        "It's difficult to predict before labor begins whether you'll need vacuum assistance. Your obstetrician makes this determination based on real-time assessment of labor progress, maternal condition, and fetal well-being. During your antenatal visits, we can discuss risk factors and what to expect, helping you feel prepared for various scenarios."
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
      <h1 className="story-hero-title1">Best Hospital for Vacuum Delivery in Chennai</h1>

      {/* PLAN PREGNANCY SECTION */}
      <section className="plan-pregnancy-section">
        <div className="plan-container">

          <div className="plan-left">
            <h2 className="plan-title">
              Expert Vacuum-Assisted Delivery Care in Chennai 
            </h2>

            <p className="plan-description">
              Bringing new life into the world is a profound journey, and at Prolife Hospitals, we understand that every delivery needs personalized attention and expert care. As the <b>best hospital for vacuum delivery in Chennai,</b>  we combine advanced medical expertise with compassionate support to ensure safe outcomes for both mother and baby.
            </p>
            <p className="plan-description">
              Our experienced obstetricians specialize in vacuum-assisted deliveries, providing skilled intervention when needed during labor. Located in the heart of Chennai, Prolife Hospitals offers 24/7 maternity care with state-of-the-art facilities designed to handle both routine and complex deliveries with precision and care.
            </p>
            <p className="plan-description">
              <b>Ready to discuss your delivery options? </b>Our maternal care team is here to guide you every step of the way.
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
              What is Vacuum Delivery?
            </h2>

            <p className="plan-description">
              Vacuum delivery, also known as vacuum-assisted vaginal delivery or vacuum extraction, is a medical procedure used during childbirth to help guide the baby through the birth canal. During this procedure, a specially designed soft cup is gently placed on the baby's head, connected to a vacuum pump that creates controlled suction. This allows the obstetrician to assist with the baby's descent while the mother pushes during contractions.
            </p>
            <p className="plan-description">
              This technique has been safely used for decades and serves as an alternative to cesarean section in specific situations. The procedure is performed only by trained obstetricians who carefully monitor both maternal and fetal well-being throughout the process.
            </p>
          </div>
        </div>
      </section>

<section className='vd-section'>
      <div className='vd-container'>

        <div className='vd-header'>
          <h2>When is Vacuum-Assisted Delivery Needed?</h2>
          <p>Our obstetricians evaluate each case to determine the safest intervention.</p>
        </div>

        <div className='vd-grid'>

          <div className='vd-card'>
            <div className='vd-icon'><i className="fa-solid fa-clock"></i></div>
            <div className='vd-content'>
              <h3>Prolonged Second Stage of Labor</h3>
              <p>When pushing has continued for an extended period without adequate progress, both mother and baby benefit from expedited delivery.</p>
            </div>
          </div>

          <div className='vd-card'>
            <div className='vd-icon'><i className="fa-solid fa-bed"></i></div>
            <div className='vd-content'>
              <h3>Maternal Exhaustion</h3>
              <p>When the mother is too fatigued to push effectively after hours of labor, vacuum-assisted delivery helps complete birth safely.</p>
            </div>
          </div>

          <div className='vd-card'>
            <div className='vd-icon'><i className="fa-solid fa-heartbeat"></i></div>
            <div className='vd-content'>
              <h3>Fetal Distress</h3>
              <p>When the baby's heart rate pattern indicates the need for prompt delivery, vacuum assistance allows quicker safe delivery.</p>
            </div>
          </div>

          <div className='vd-card'>
            <div className='vd-icon'><i className="fa-solid fa-stethoscope"></i></div>
            <div className='vd-content'>
              <h3>Medical Conditions</h3>
              <p>Certain maternal health conditions, like heart disease or severe hypertension, make prolonged pushing inadvisable.</p>
            </div>
          </div>

          <div className='vd-card'>
            <div className='vd-icon'><i className="fa-solid fa-baby"></i></div>
            <div className='vd-content'>
              <h3>Baby's Position</h3>
              <p>When the baby's head is low in the birth canal but needs gentle guidance in the final stage, vacuum assistance is used.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

     <section className='wpv-section'>
      <div className='wpv-container'>

        <div className='wpv-header'>
          <h2>Why Choose Prolife Hospitals for Vacuum Delivery?</h2>
          <p>Choosing where to deliver your baby is one of the most important decisions you'll make. At Prolife Hospitals, we've built our reputation as a trusted center for safe vacuum delivery in Chennai through our commitment to excellence and maternal care.</p>
        </div>

        <div className='wpv-grid'>

          <div className='wpv-card wpv-tilt'>
            <div className='wpv-icon'><i className='fa-solid fa-user-doctor'></i></div>
            <div className='wpv-content'>
              <h3>Experienced Obstetric Team</h3>
              <p>Our obstetricians bring decades of combined experience in managing assisted deliveries. Dr. Sujitha R, Dr. Thamarai, and Dr. Varshini are highly skilled in vacuum-assisted techniques, ensuring precision and safety.</p>
            </div>
          </div>

          <div className='wpv-card wpv-tilt'>
            <div className='wpv-icon'><i className='fa-solid fa-hospital'></i></div>
            <div className='wpv-content'>
              <h3>Advanced Infrastructure</h3>
              <p>Our modular operation theaters are equipped with the latest vacuum extraction devices and monitoring systems. Continuous fetal monitoring ensures your baby's well-being throughout labor.</p>
            </div>
          </div>

          <div className='wpv-card wpv-tilt'>
            <div className='wpv-icon'><i className='fa-solid fa-heart-pulse'></i></div>
            <div className='wpv-content'>
              <h3>Comprehensive Monitoring</h3>
              <p>Our nursing staff provides continuous monitoring of maternal vital signs and fetal heart patterns, allowing informed decisions on when vacuum assistance is needed, ensuring safety for both mother and baby.</p>
            </div>
          </div>

          <div className='wpv-card wpv-tilt'>
            <div className='wpv-icon'><i className='fa-solid fa-hand-holding-heart'></i></div>
            <div className='wpv-content'>
              <h3>Patient-Centered Approach</h3>
              <p>Our doctors explain the procedure, answer your questions, and involve you in decision-making. We respect your birth preferences while prioritizing safety, creating a collaborative environment where your voice matters.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section className="assist-section">
      <div className="assist-container">

        <div className="assist-header">
          <h2>What We Assist You With at Prolife Hospitals</h2>
          <p>When you choose Prolife Hospitals for your delivery, you receive comprehensive support that extends beyond the procedure itself.</p>
        </div>

        <div className="assist-timeline">

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-comments"></i></div>
            <div className="assist-content">
              <h3>Pre-Delivery Counseling</h3>
              <p>During your antenatal visits, we discuss various delivery scenarios, including when vacuum assistance might become necessary. This preparation helps reduce anxiety and ensures you understand your options before labor begins.</p>
            </div>
          </div>

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-heart-pulse"></i></div>
            <div className="assist-content">
              <h3>Labor Management</h3>
              <p>Our team expertly manages your labor progression, using proven techniques to support natural delivery. We only recommend vacuum assistance when clinically indicated, always prioritizing the least invasive approach that ensures safety.</p>
            </div>
          </div>

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-brain"></i></div>
            <div className="assist-content">
              <h3>Real-Time Decision Making</h3>
              <p>Labor can be unpredictable. Our obstetricians remain with you throughout, making real-time assessments and adjusting the care plan as needed. If vacuum delivery becomes necessary, we explain the situation clearly and proceed with your informed consent.</p>
            </div>
          </div>

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-baby"></i></div>
            <div className="assist-content">
              <h3>Post-Delivery Care</h3>
              <p>After vacuum-assisted delivery, we provide enhanced monitoring for both you and your baby. Our pediatric team examines your newborn carefully, and our nursing staff ensures you receive appropriate postpartum care. We watch for any complications and address concerns promptly.</p>
            </div>
          </div>

          <div className="assist-step">
            <div className="assist-icon"><i className="fa-solid fa-heart"></i></div>
            <div className="assist-content">
              <h3>Emotional Support</h3>
              <p>We recognize that unexpected interventions during delivery can be emotionally challenging. Our compassionate staff provides reassurance and emotional support, helping you process your birth experience positively.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

     <section className="vfb-section">
      <div className="vfb-wave-bg"></div>
      <div className="vfb-container">
        <div className="vfb-header">
          <h2>How Our Vacuum Delivery Service Helps You</h2>
          <p>Our vacuum-assisted delivery service offers multiple benefits when intervention becomes necessary during childbirth.</p>
        </div>

        <div className="vfb-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className={`vfb-card ${index % 2 === 0 ? 'vfb-left' : 'vfb-right'}`}>
              <div className="vfb-icon"><i className={benefit.icon}></i></div>
              <div className="vfb-text">
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>


     <section className="ve-section">
      <div className="ve-container">
        <div className="ve-header">
          <h2>Who Can Benefit from Vacuum-Assisted Delivery?</h2>
          <p>Vacuum delivery is appropriate for specific clinical situations and maternal-fetal conditions. Our obstetricians carefully assess eligibility before proceeding.</p>
        </div>

        <div className="ve-grid">
          <div className="ve-column ve-ideal">
            <h3>Ideal Candidates</h3>
            <ul>
              {idealCandidates.map((item, index) => (
                <li key={index}><i className="fa-solid fa-circle-check"></i> {item}</li>
              ))}
            </ul>
          </div>

          <div className="ve-column ve-not-suitable">
            <h3>When Vacuum Delivery is Not Suitable</h3>
            <ul>
              {notSuitable.map((item, index) => (
                <li key={index}><i className="fa-solid fa-circle-xmark"></i> {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="ve-note">Our doctors conduct thorough evaluations to ensure vacuum delivery is safe and appropriate for your specific circumstances.</p>
      </div>
    </section>


    <section className="eds-section">
      <div className="eds-container">

        <div className="eds-header">
          <h2>Meet Our Expert Obstetricians</h2>
          <p>Skilled Hands, Compassionate Hearts</p>
        </div>

        <p className="eds-intro">
          The success of vacuum-assisted delivery depends heavily on the skill and experience of the performing obstetrician. At Prolife Hospitals, you're in capable hands.
        </p>

        <div className="eds-grid">

          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Sujitha R – Gynecologist</h3>
            <p>
             Dr. Sujitha R brings extensive experience in managing complex deliveries and obstetric interventions. Her calm demeanor and technical proficiency have earned her the trust of countless families. She specializes in both routine and high-risk obstetrics, with particular expertise in assisted vaginal deliveries. Dr. Sujitha believes in evidence-based practice combined with personalized care, ensuring each patient receives treatment tailored to their unique needs.
            </p>
          </div>

          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Thamarai – Gynecologist</h3>
            <p>
              Dr. Thamarai is known for her patient-centered approach and excellent clinical judgment. With years of experience in managing labor complications, she has successfully performed numerous vacuum-assisted deliveries with optimal outcomes. Her ability to remain composed under pressure and communicate clearly with patients makes her an invaluable member of our obstetric team. Dr. Thamarai is committed to supporting natural birth processes while intervening skillfully when necessary.
            </p>
          </div>

          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Varshini – Gynecologist</h3>
            <p>
              Dr. Varshini combines modern obstetric techniques with compassionate care. She has received specialized training in instrumental deliveries and stays current with the latest evidence in obstetric practice. Her thorough approach to labor management and her skill in vacuum-assisted delivery have contributed to excellent maternal and neonatal outcomes. Dr. Varshini takes time to explain procedures thoroughly, ensuring patients feel informed and confident.
            </p>
          </div>

        </div>

        <div className="eds-support">
          <h4>Supporting Specialists:</h4>
          <p>
           Our obstetric team is supported by skilled anesthesiologists including <strong>Dr. Hari Prakash, </strong><strong>Dr. Shalini,</strong> and  <strong>Dr. Nithya Priyan,</strong>  and  who ensure your comfort throughout labor. Our pediatric specialists, <strong>Dr. Uma Maheshwari</strong>  and team, stand ready to provide immediate newborn care when needed.
          </p>
        </div>

      </div>
    </section>

     <section className="wcp-section">
      <div className="wcp-container">
        <div className="wcp-header">
          <h2>Why Choose Prolife Hospitals?</h2>
          <p>Beyond our expertise in vacuum-assisted delivery, Prolife Hospitals offers comprehensive advantages that make us a preferred choice for maternity care in Chennai.</p>
        </div>

        <div className="wcp-grid">
          {reasons.map((item, index) => (
            <div key={index} className="wcp-hex">
              <div className="wcp-icon"><i className={item.icon}></i></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>



      {/* Reviews Section */}
      <section className="reviews-section">
        <p className="sub-title">What Our Patients Say</p>
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
                <h2>Ready to Experience Expert Maternity Care?</h2>
                <p>Choosing Prolife Hospitals means choosing expertise, compassion, and comprehensive support for your delivery journey. Whether you're planning ahead or facing an unexpected turn during labor, our team is prepared to provide the skilled care you deserve.</p>
                <p><b>Emergency Care:</b> <br /> Available 24/7</p>
                <button className="appointment-btn">Book Your Appointment Now → </button>
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

 <section className="rs-section">
<div className="rs-container">
<div className="rs-header">
<h2>Related Services You Might Consider</h2>
<p>Comprehensive Maternity Care at Prolife</p>
</div>


<div className="rs-grid">
<div className="rs-card">
<h3>Normal Delivery Services</h3>
<p>Prolife Hospitals specializes in supporting natural, unassisted vaginal birth. Our experienced midwives and obstetricians provide continuous labor support, helping you achieve your birth goals when possible.</p>
</div>


<div className="rs-card">
<h3>High-Risk Pregnancy Management</h3>
<p>Our maternal-fetal medicine expertise ensures comprehensive care for pregnancies with complications. We provide enhanced monitoring and specialized interventions to optimize outcomes for both mother and baby.</p>
</div>


<div className="rs-card">
<h3>Cesarean Section</h3>
<p>When cesarean delivery is medically necessary, our skilled surgical team performs the procedure using modern techniques in our advanced operation theaters, prioritizing safety and recovery.</p>
</div>


<div className="rs-card">
<h3>Labor Pain Management</h3>
<p>From epidurals to natural pain relief techniques, we offer comprehensive options for managing labor discomfort. Our anesthesia team provides personalized pain management tailored to your preferences and medical needs.</p>
</div>


<div className="rs-card">
<h3>Postpartum Care</h3>
<p>Our postnatal services include recovery monitoring, breastfeeding support, newborn care education, and mental health screening, ensuring comprehensive support during your transition to parenthood.</p>
</div>


<div className="rs-card">
<h3>Neonatal Care</h3>
<p>Our pediatric team provides immediate newborn assessment and specialized care if needed. Our neonatal services ensure your baby receives expert attention from the first moments of life.</p>
</div>
</div>

</div>
</section>

      <section className="lab-hero">
        <div className="lab-content">
          <h1>
            Prolife Hospitals - Your Partner in Safe, Compassionate Maternity Care.</h1>
            <h3>Where expertise meets empathy, and every birth story matters.</h3>
          
        </div>
      </section>
    </div>
  );
};

export default PrePregnancy;
