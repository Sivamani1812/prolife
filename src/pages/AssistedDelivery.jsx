
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
      text: "I was terrified when my doctor mentioned assisted delivery, but the team at Prolife explained everything so clearly. Dr. Sujitha's skilled use of vacuum extraction brought my daughter into the world safely after hours of exhausting labor. I'm grateful we avoided emergency surgery.",
      name: "  Priya M., Manapakkam",
      avatar: "P",
      rating: 5
    },
    {
      text: "After my baby's heart rate dropped suddenly, the Prolife team acted with incredible speed. The assisted delivery was performed expertly, and my son was healthy and crying immediately. Their emergency response saved my baby.",
      name:" Anjali K., Mogappair",
      avatar: "A",
      rating: 5
    },
    {
      text:"The doctors at Prolife helped me understand when assisted delivery was necessary and why. Their honest communication and obvious expertise made a stressful situation manageable. Both my twins were delivered safely with their help",
      name: "Divya S., Porur",
      avatar: "D",
      rating: 5
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const faqData = [
    {
      question: "Is assisted delivery safe for my baby?",
      answer:
        " When performed by experienced obstetricians like our team at Prolife, assisted delivery is very safe. We use these techniques only when they offer the safest outcome compared to alternatives. Temporary marks from instruments fade quickly, and serious complications are rare with skilled practitioners."
    },
    {
      question: "How do I know if I'll need assisted delivery?",
      answer:
        " Most women don't know in advance. The decision is made during labor based on progress, fetal monitoring, and maternal condition. Our doctors continuously assess these factors and will discuss assisted delivery if it becomes the best option."
    },
    {
      question: "What's the difference between vacuum and forceps delivery?",
      answer:
        "Both are types of assisted vaginal delivery. Vacuum extraction uses gentle suction on the baby's head, while forceps are curved instruments that guide the baby through the birth canal. Your obstetrician chooses the technique based on your baby's position and specific circumstances."
    },
    {
      question: "Will I need pain medication for assisted delivery?",
      answer:
        " Most assisted deliveries are performed with epidural anesthesia already in place from labor. If not, local anesthesia or pudendal blocks can be administered quickly. Our anesthetists ensure you're comfortable throughout the procedure."
    },
    {
      question: "How long is recovery after assisted delivery?",
      answer:
        "Recovery is generally shorter than cesarean section but may take slightly longer than uncomplicated vaginal delivery. Most mothers go home within 48 hours and resume normal activities within 2-3 weeks. We provide specific guidance based on your individual situation."
    },
    {
      question: "Does assisted delivery mean something went wrong?",
      answer:
        "Not at all. Many perfectly normal labors end with assisted delivery simply because of positioning or timing factors. It's a valuable tool that allows vaginal delivery when cesarean section might otherwise be necessary."
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
          className="story-hero-image"/>
        </div>
        <div className="story-hero-overlay">
      </div>
      <h1 className="story-hero-title1">Assisted Delivery in Chennai - Prolife Hospitals</h1>

      {/* PLAN PREGNANCY SECTION */}
      <section className="plan-pregnancy-section">
        
        <div className="plan-container">
            
          <div className="plan-left">
            
            <h2 className="plan-title">
              Expert Assisted Delivery in Chennai  <br />
              <span>for Safe Childbirth</span>
            </h2>

            <p className="plan-description">
              When natural labor needs a helping hand, our experienced obstetricians at Prolife Hospitals provide compassionate, skilled assisted delivery services in Chennai. With state-of-the-art facilities and a proven track record, we ensure the safest possible birth experience for both mother and baby during complex deliveries.
            </p>
            <p className="plan-description">
              Facing unexpected complications during labor can be overwhelming. Our team specializes in assisted vaginal delivery techniques including vacuum extraction and forceps delivery, making critical decisions with precision and care when every moment counts.
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

<section className="ad-pro-section">
      <div className="ad-pro-container">

        {/* Left Art */}
        <div className="ad-pro-art">
          <div className="ad-glass-orb"></div>
          <div className="ad-glass-orb small"></div>
          <div className="ad-hero-blur"></div>
          <h1 className="ad-pro-title">Assisted Delivery Excellence</h1>
        </div>

        {/* Right Content */}
        <div className="ad-pro-content">
          <h2>Why Choose Prolife Hospital for Assisted Delivery</h2>
          <p className="tagline">Advanced Care When It Matters Most</p>

          <p className="desc">
            Choosing where to deliver your baby is one of the most important decisions you'll make.
            At Prolife Hospitals, our assisted delivery services combine decades of expertise with 
            modern technology to navigate complex birth situations safely.
          </p>

          <ul className="ad-feature-list">
            <li>
              <span>•</span> Experienced Obstetricians – hundreds of successful assisted deliveries.
            </li>

            <li>
              <span>•</span> 24/7 Emergency Readiness – doctors + OT always on standby.
            </li>

            <li>
              <span>•</span> Advanced Monitoring Systems – fetal heart & maternal assessment.
            </li>

            <li>
              <span>•</span> Minimal Intervention Philosophy – only when medically required.
            </li>

            <li>
              <span>•</span> Complete Support Team – anesthetists, pediatricians & nurses.
            </li>
          </ul>

          <div className="ad-btn-row">
            <button className="ad-btn primary">Schedule a Consultation</button>
            <button className="ad-btn">Contact Us</button>
          </div>
        </div>

      </div>
    </section>

    <section className="asclean-section">
      <div className="asclean-container">

        <header className="asclean-header">
          <h2>What We Assist You With at Prolife</h2>
          <p>
            Complete Support Throughout Your Assisted Delivery Journey
          </p>
        </header>

        <p className="asclean-intro">
          From the moment assisted delivery becomes a consideration, our team
          surrounds you with expertise and emotional support.
        </p>

        <div className="asclean-grid">

          <div className="asclean-card">
            <h3>Pre-Delivery Assessment</h3>
            <p>
              We thoroughly evaluate your labor progress, baby's position,
              and maternal health to determine if assisted delivery is the
              safest option. Our doctors explain every aspect of the procedure,
              addressing your concerns and ensuring informed consent.
            </p>
          </div>

          <div className="asclean-card">
            <h3>During the Procedure</h3>
            <p>
              Our obstetricians skillfully perform vacuum or forceps-assisted
              delivery in our modern operation theaters or delivery suites,
              with continuous monitoring of both mother and baby. Pain management
              options are discussed and implemented according to your birth plan
              and medical needs.
            </p>
          </div>

          <div className="asclean-card">
            <h3>Immediate Postpartum Care</h3>
            <p>
              After delivery, we closely monitor both you and your newborn,
              checking for any effects of the assisted delivery. Our pediatricians
              examine your baby thoroughly, while our team ensures your comfort
              and recovery.
            </p>
          </div>

          <div className="asclean-card">
            <h3>Recovery Guidance</h3>
            <p>
              We provide detailed instructions for postpartum healing, especially
              important after assisted delivery. Follow-up appointments track your
              recovery, and our lactation consultants support successful
              breastfeeding initiation.
            </p>
          </div>

        </div>
      </div>
    </section>

      <section className="assist-benefits">
      <div className="ab-container">

        <div className="ab-title-block">
          <h2>How Our Assisted Delivery Service Helps You</h2>
          <p>Turning Complex Births Into Safe Outcomes</p>
        </div>

        <p className="ab-desc">
          Assisted delivery is a bridge between natural birth and cesarean section,
          offering a middle path when labor doesn't progress as expected.
        </p>

        <div className="ab-timeline">

          <div className="ab-item">
            <div className="ab-icon">💛</div>
            <div className="ab-content">
              <h3>Medical Benefits</h3>
              <p>
                Safe assisted delivery options at Prolife help avoid emergency
                cesarean sections, especially when the baby is already in the
                birth canal. This results in faster recovery, fewer surgical risks,
                and a fulfilling vaginal birth experience whenever possible.
              </p>
            </div>
          </div>

          <div className="ab-item">
            <div className="ab-icon">💚</div>
            <div className="ab-content">
              <h3>Preventing Birth Complications</h3>
              <p>
                Our team steps in when prolonged labor exhausts the mother or the
                baby shows distress. Assisted delivery helps prevent oxygen deprivation
                and reduces complications for both mother and child through timely intervention.
              </p>
            </div>
          </div>

          <div className="ab-item">
            <div className="ab-icon">🌿</div>
            <div className="ab-content">
              <h3>Emotional and Physical Recovery</h3>
              <p>
                We help mothers understand why assistance was needed, offering emotional
                counseling and physiotherapy support to ensure a smooth recovery journey
                after assisted delivery.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="ans-section">
      <div className="ans-container">

        <div className="ans-header">
          <h2>Who Needs Assisted Delivery?</h2>
          <p>Understanding When Intervention Becomes Necessary</p>
        </div>

        <p className="ans-intro">
          Not every delivery requires assistance, but certain situations make assisted 
          vaginal delivery the safest choice for mother and baby.
        </p>

        <div className="ans-panels">

          <div className="ans-panel">
            <span className="ans-label">Medical Indications</span>
            <p>
              Assisted delivery becomes necessary when the second stage of labor is 
              prolonged beyond safe limits, when fetal heart rate patterns indicate distress, 
              or when maternal exhaustion prevents effective pushing. Mothers with certain 
              medical conditions like heart disease or high blood pressure may need assisted 
              delivery to shorten pushing time and reduce cardiovascular strain.
            </p>
          </div>

          <div className="ans-panel">
            <span className="ans-label">Fetal Positioning Challenges</span>
            <p>
              Sometimes babies are positioned in ways that make natural delivery difficult. 
              Certain presentations and rotations respond well to assisted delivery techniques, 
              avoiding the need for cesarean section in the advanced stage of labor.
            </p>
          </div>

          <div className="ans-panel">
            <span className="ans-label">Previous Birth Complications</span>
            <p>
              Women who experienced difficult deliveries previously may benefit from planned 
              assisted delivery, especially if anatomical factors remain the same. Our team 
              reviews your complete obstetric history to anticipate challenges early.
            </p>
          </div>

        </div>
      </div>
    </section>

    <section className="eds-section">
      <div className="eds-container">

        <div className="eds-header">
          <h2>Meet Our Expert Obstetricians</h2>
          <p>Skilled Hands, Compassionate Hearts</p>
        </div>

        <p className="eds-intro">
          The success of assisted delivery depends entirely on the obstetrician's
          skill and judgment. Our team brings extensive experience in managing
          complex deliveries with precision and care.
        </p>

        <div className="eds-grid">

          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Sujitha R – Gynecologist</h3>
            <p>
              With years of experience in high-risk obstetrics, Dr. Sujitha
              specializes in assisted vaginal deliveries and has helped countless
              families welcome their babies safely. Her calm demeanor and technical
              expertise make her a trusted choice for complex deliveries.
            </p>
          </div>

          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Thamarai – Gynecologist</h3>
            <p>
              Dr. Thamarai's comprehensive approach includes expertise in all
              assisted delivery techniques. Her focus on clear communication ensures
              families understand every decision, reducing anxiety during labor.
            </p>
          </div>

          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Varshini – Gynecologist</h3>
            <p>
              Known for her gentle technique and patient-centered approach,
              Dr. Varshini has extensive training in instrumental deliveries and
              works closely with mothers to prepare for various delivery scenarios.
            </p>
          </div>

        </div>

        <div className="eds-support">
          <h4>Supporting Specialists:</h4>
          <p>
            Our assisted delivery team includes anesthetists like <strong>Dr. Shalini</strong>
            and <strong>Dr. Nithya Priyan</strong> who ensure optimal pain management.
            <strong> Dr. Uma Maheshwari</strong>, our pediatrician, is always present to
            provide immediate newborn care when needed.
          </p>
        </div>

      </div>
    </section>

    <section className="pss-section">
      <div className="pss-container">

        <div className="pss-ribbon">
          <h2>Why Prolife Hospital Stands Apart</h2>
          <p>Excellence in Maternity Care Across Chennai</p>
        </div>

        <div className="pss-intro">
          <p>
            As a leading maternity and gynecology hospital in Chennai, Prolife Hospitals 
            has built its reputation on successful outcomes in complex deliveries.
          </p>
        </div>

        <div className="pss-feature-grid">

          <div className="pss-feature">
            <div className="pss-icon">
              <i className="fa-solid fa-hospital"></i>
            </div>
            <h3>Infrastructure That Inspires Confidence</h3>
            <p>
              Our well-equipped modular operation theaters meet international standards 
              for assisted delivery procedures. Advanced monitoring equipment tracks every 
              vital sign, while emergency protocols ensure immediate escalation to 
              cesarean section if needed. The NICU proximity adds extra safety.
            </p>
          </div>

          <div className="pss-feature">
            <div className="pss-icon">
              <i className="fa-solid fa-heartbeat"></i>
            </div>
            <h3>Patient-Centered Philosophy</h3>
            <p>
              We believe informed mothers make the best decisions for their babies. Our 
              doctors explain all assisted vaginal delivery options clearly and respectfully.
            </p>
          </div>

          <div className="pss-feature">
            <div className="pss-icon">
              <i className="fa-solid fa-hand-holding-medical"></i>
            </div>
            <h3>Affordable Excellence</h3>
            <p>
              Transparent pricing, insurance support, and accessible maternity care for 
              every family in Chennai.
            </p>
          </div>

          <div className="pss-feature">
            <div className="pss-icon">
              <i className="fa-solid fa-baby"></i>
            </div>
            <h3>Integrated Maternity Services</h3>
            <p>
              End-to-end maternity care from prenatal to postpartum stages, ensuring 
              continuity and safe decision-making during delivery.
            </p>
          </div>

        </div>
      </div>
    </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <p className="sub-title">What Our Families Say</p>
        <div className="google-rating">
         <span>Real Stories, Real Outcomes & 5/5 Google Rating</span>
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

            {/* Care Journey Section */}
      <section className="journey-section">
        <div className="journey-container">
          <div className="journey-grid">
            <div className="journey-image">
              <div className="journey-content">
                <h2>Schedule Your Maternity Consultation</h2>
                <h3>Expert Guidance for Every Birth Scenario</h3>
                <p>Whether you're planning your delivery or facing unexpected labor complications, Prolife Hospitals provides the expertise you need for the safest possible outcome.</p>
                <p><b>Emergency Care:</b> <br /> Available 24/7</p>
                <button className="appointment-btn">Book Appointment Online → </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="rs-section">
<div className="rs-container">
<div className="rs-header">
<h2>Related Services You Might Consider</h2>
<p>Comprehensive Maternity Care at Prolife</p>
</div>


<div className="rs-grid">
<div className="rs-card">
<h3>High-Risk Pregnancy Management</h3>
<p>Specialized care for complicated pregnancies requiring close monitoring</p>
</div>


<div className="rs-card">
<h3>Cesarean Section</h3>
<p>Safe surgical delivery when vaginal birth isn't advisable</p>
</div>


<div className="rs-card">
<h3>Normal Delivery</h3>
<p>Supporting natural childbirth with expert guidance</p>
</div>


<div className="rs-card">
<h3>Labor Induction</h3>
<p>Medically supervised labor initiation when pregnancy extends beyond due date</p>
</div>


<div className="rs-card">
<h3>Postpartum Care</h3>
<p>Comprehensive recovery support for new mothers</p>
</div>


<div className="rs-card">
<h3>Newborn Care</h3>
<p>Expert pediatric services for your baby's first days</p>
</div>
</div>


<div className="rs-cta">
<a href="#">Explore Our Complete Maternity Services →</a>
</div>
</div>
</section>


      <section className="lab-hero">
        <div className="lab-content">
          <h3>
            At Prolife Hospitals, we understand that every birth is unique. Our assisted delivery services represent decades of combined obstetric experience, modern facilities, and unwavering commitment to maternal and infant safety. When natural labor needs skilled intervention, trust Chennai's leading maternity hospital to guide you through with expertise and compassion.
          </h3>
        </div>
      </section>
    </div>
  );
};

export default PrePregnancy;
