
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
import { FaUserDoctor, FaStethoscope, FaHospital, FaBaby, FaFileMedical, FaHeartCircleBolt } from "react-icons/fa6";
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
    " Prolonged Second Stage: You've been pushing for an extended period without adequate progress",
"Fetal Distress: Your baby's heart rate indicates they need to be born quickly",
"Maternal Exhaustion: You're too tired to push effectively after hours of labor",
"Medical Conditions: You have health issues making prolonged pushing dangerous (cardiac disease, severe hypertension)",
"Optimal Baby Position: Your baby is low in the birth canal and in the right position for safe forceps application",
"Adequate Anesthesia: You have appropriate pain relief, typically an epidural",
"Fully Dilated Cervix: Your cervix is completely dilated to 10 cm",

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
      question: "Is forceps delivery safe for my baby?",
      answer:
        "  When performed by experienced obstetricians under appropriate conditions, forceps delivery is safe. Your baby may have temporary marks on the head or face that typically fade within 48 hours. Serious complications are rare with proper technique."
    },
    {
      question: "Will I need an episiotomy with forceps?",
      answer:
        "  Not always, but often a small episiotomy helps create adequate space for safe forceps application and reduces the risk of severe tears. Your doctor will discuss this beforehand."
    },
    {
      question: "How long does the procedure take?",
      answer:
        "The actual forceps-assisted delivery usually takes just a few minutes once the instruments are properly positioned. The entire process from decision to birth is typically under 15-20 minutes."
    },
    {
      question: "Is forceps delivery more painful than normal delivery?",
      answer:
        "  With adequate epidural anesthesia, you shouldn't feel significant additional pain. You'll feel pressure and stretching, but the discomfort is manageable with proper pain relief."
    },
    {
      question: " Can I still have forceps delivery if I don't have an epidural?",
      answer:
        " Forceps delivery requires good pain control. If you don't have an epidural, your doctor may administer local anesthesia or a pudendal block before the procedure."
    },
    {
      question: "What's the difference between forceps and vacuum delivery?",
      answer:
        "Both assist vaginal delivery but use different instruments. Forceps are metal instruments that grasp the baby's head, while vacuum uses suction. Your doctor chooses based on your specific situation and their expertise."
    },
    {
      question: "Will forceps affect my future deliveries?",
      answer:
        "Forceps delivery doesn't negatively impact future pregnancies or deliveries. Many women who had forceps-assisted first births go on to have straightforward subsequent deliveries."
    },
    {
      question: "How soon can I go home after forceps delivery?",
      answer:
        " Most mothers stay 24-48 hours for monitoring, similar to normal vaginal delivery. If you and your baby are doing well, discharge can happen within a day or two."
    },
    {
      question: "What are the alternatives if forceps aren't suitable?",
      answer:
        "If forceps aren't appropriate for your situation, alternatives include vacuum-assisted delivery or proceeding with a cesarean section, depending on clinical circumstances."
    },
    {
      question: " Does Prolife Hospital accept insurance for forceps delivery?",
      answer:
        " Yes, we work with most major insurance providers. Contact our billing department to verify your specific coverage details before delivery."
    },
  ];
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

   const advantages = [
    {
      icon: "fa-hospital",
      title: "Comprehensive Maternity Ecosystem",
      text: "We're not just a delivery room—we're a complete maternity care destination. From your first prenatal visit through postpartum recovery, every service you need is under one roof."
    },
    {
      icon: "fa-user-check",
      title: "Patient-Centered Care Philosophy",
      text: "Your preferences, concerns, and comfort matter here. We practice shared decision-making, ensuring you're an active participant in your care, not just a passive recipient."
    },
    {
      icon: "fa-comments",
      title: "Transparent Communication",
      text: "No medical jargon, no surprises. Our doctors explain everything in simple terms, discuss risks and benefits honestly, and ensure you feel confident about your care plan."
    },
    {
      icon: "fa-building",
      title: "Modern Infrastructure with Warmth",
      text: "Advanced medical technology meets home-like comfort in our personalized wards. Air-conditioned rooms, private consulting spaces, and amenities that help your family feel at ease."
    },
    {
      icon: "fa-hand-holding-dollar",
      title: "Affordable Excellence",
      text: "Best-in-class obstetric care shouldn't be financially overwhelming. We offer transparent pricing and work with major insurance providers to make quality healthcare accessible."
    },
    {
      icon: "fa-clock",
      title: "24/7 Emergency Preparedness",
      text: "Labor doesn't follow office hours. Our full obstetric, anesthetic, and pediatric teams are available round-the-clock, ensuring expert care whenever you need it."
    },
    {
      icon: "fa-book",
      title: "Outstanding Safety Record",
      text: "We maintain rigorous clinical protocols, regular staff training, and comprehensive quality monitoring to ensure the highest safety standards for every delivery."
    }
  ];




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
      <h1 className="story-hero-title1">Forceps Delivery Service </h1>

      {/* PLAN PREGNANCY SECTION */}
    <section className="plan-pregnancy-section">
        
        <div className="plan-container">
            
          <div className="plan-left">
            
            <h2 className="plan-title">
              Safe and Skilled Forceps Delivery Care in Chennai
            </h2>

            <p className="plan-description">
              When labor requires gentle assistance, trust matters most. At Prolife Hospitals, our experienced obstetricians provide expert forceps delivery services with precision, care, and your safety as our priority. As a leading  <b>forceps delivery hospital in Chennai,</b> we combine decades of clinical expertise with compassionate support to ensure the best outcomes for both mother and baby.


            </p>
            <p className="plan-description">
              Whether it's a prolonged second stage of labor or fetal distress, our specialists are trained in advanced instrumental delivery techniques to help you welcome your baby safely.
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
      
    <section className="asclean-section">
      <div className="asclean-container">

        <header className="asclean-header">
          <h2>Why Choose Prolife Hospital for Forceps Delivery?</h2>
        </header>

        <p className="asclean-intro">
           Forceps delivery is a specialized skill that requires extensive training, steady hands, and sound clinical judgment. Here's why families trust Prolife as the <b>best hospital for forceps delivery in Chennai:</b> 
        </p>

        <div className="asclean-grid">

          <div className="asclean-card">
            <h3>Experienced Obstetricians</h3>
            <p>
              Our team includes some of Chennai's most skilled obstetricians with 15-20+ years of experience in instrumental deliveries. They've successfully performed hundreds of forceps-assisted births, ensuring both maternal and neonatal safety.
            </p>
          </div>

          <div className="asclean-card">
            <h3>Evidence-Based Decision Making</h3>
            <p>
              We use forceps only when medically indicated and beneficial. Our doctors thoroughly assess each situation, explaining the reasons, benefits, and alternatives to help you make informed decisions about your delivery.
            </p>
          </div>

          <div className="asclean-card">
            <h3>State-of-the-Art Labor Rooms</h3>
            <p>
              Our fully equipped labor and delivery suites feature continuous fetal monitoring systems, emergency backup, and modern surgical facilities—ensuring we're prepared for any scenario.
            </p>
          </div>

          <div className="asclean-card">
            <h3>24/7 NICU and Pediatric Support</h3>
            <p>
              Should your baby need any additional care post-delivery, our round-the-clock neonatal intensive care unit and pediatric specialists are right here, eliminating transfer delays.
            </p>
          </div>

          <div className="asclean-card">
            <h3>Personalized Birth Plans</h3>
            <p>
             We respect your birth preferences while prioritizing clinical safety. Our team discusses your delivery options during prenatal visits, so you're never surprised by the care you receive.
            </p>
          </div>

          <div className="asclean-card">
            <h3>Minimal Intervention Philosophy</h3>
            <p>
              Forceps are used judiciously—only when necessary to protect you or your baby. We exhaust natural progression options first and intervene only when evidence supports it.
            </p>
          </div>

        </div>
      </div>
    </section>

    <section className="assist-benefits">
      <div className="ab-container">

        <div className="ab-title-block">
          <h2>What We Assist You With at Prolife</h2>
        </div>
        <p className="ab-desc">
          From the moment you walk through our doors, you're surrounded by support:
        </p>

        <div className="ab-timeline">

          <div className="ab-item">
             <i className="fa-solid fa-shield-heart"></i>
            <div className="ab-content">
              <h3>Pre-Delivery Counseling </h3>
              <p>
                 Our obstetricians explain what forceps delivery involves, when it might be needed, and answer all your questions during your prenatal appointments. Knowledge reduces anxiety.
              </p>
            </div>
          </div>

          <div className="ab-item">
             <i className="fa-solid fa-syringe"></i>
            <div className="ab-content">
              <h3>Continuous Labor Monitoring</h3>
              <p>
                 Throughout labor, we track your baby's heart rate and your contractions, identifying early signs that might require assistance before situations become urgent.
              </p>
            </div>
          </div>

          <div className="ab-item">
            <i className="fa-solid fa-stethoscope"></i>
            <div className="ab-content">
              <h3>Pain Management Options</h3>
              <p>
                Adequate pain relief is essential for forceps delivery. We offer epidural anesthesia and other pain management techniques to keep you comfortable during the procedure.
              </p>
            </div>
          </div>

          <div className="ab-item">
            <i className="fa-solid fa-heart-pulse"></i>
            <div className="ab-content">
              <h3>Expert Application Technique </h3>
              <p>
                 Our forceps delivery specialists in Chennai are trained in proper instrument placement, gentle traction, and recognizing when to abandon the procedure if needed—your safety always comes first.
              </p>
            </div>
          </div>

          <div className="ab-item">
            <i className="fa-solid fa-baby"></i>
            <div className="ab-content">
              <h3>Immediate Newborn Assessment </h3>
              <p>
                 Pediatricians examine your baby right after birth, checking for any temporary marks (which typically fade within days) and ensuring your little one is healthy and stable.
              </p>
            </div>
          </div>

          <div className="ab-item">
            <i className="fa-solid fa-hospital"></i>
            <div className="ab-content">
              <h3>Postpartum Care and Recovery</h3>
              <p>
                 We monitor you closely after delivery for any complications, provide pain relief, support breastfeeding initiation, and ensure your recovery proceeds smoothly.
              </p>
            </div>
          </div>

          <div className="ab-item">
            <i className="fa-solid fa-user-doctor"></i>
            <div className="ab-content">
              <h3>Emotional Support</h3>
              <p>
                Our nurses and counselors understand that instrumental delivery can feel overwhelming. We're here to answer questions, provide reassurance, and support your emotional wellbeing.
              </p>
            </div>
          </div>



        </div>
      </div>
    </section>

    <section className="ft-section">
      <div className="ft-container">
        <h2 className="ft-title">How Our Forceps Delivery Service Helps You</h2>
        <p className="ft-intro">
          Our forceps-assisted delivery service offers targeted benefits when intervention is
          necessary during childbirth. We apply clinical judgement, safety-first protocols, and
          continuous monitoring to achieve the best outcomes for mother and baby.
        </p>

        <div className="ft-timeline">

          {/* ITEM 1 */}
          <div className="ft-item">
            <div className="ft-icon"><i className="fa-solid fa-ban"></i></div>
            <div className="ft-card">
              <h3>Avoiding Unnecessary C-Sections</h3>
              <p>
                When used appropriately, forceps can help you achieve a vaginal delivery even when
                labor isn't progressing as expected—potentially avoiding cesarean surgery and its
                associated recovery time.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="ft-item">
            <div className="ft-icon"><i className="fa-solid fa-heart-pulse"></i></div>
            <div className="ft-card">
              <h3>Protecting Your Baby During Distress</h3>
              <p>
                If your baby shows signs of distress during the second stage of labor, forceps allow
                for swift, controlled delivery—often faster than preparing for an emergency cesarean.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="ft-item">
            <div className="ft-icon"><i className="fa-solid fa-person-booth"></i></div>
            <div className="ft-card">
              <h3>Reducing Maternal Exhaustion</h3>
              <p>
                After hours of pushing, forceps provide the additional help needed to complete delivery,
                sparing you further exhaustion while maintaining a vaginal birth.
              </p>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="ft-item">
            <div className="ft-icon"><i className="fa-solid fa-stopwatch"></i></div>
            <div className="ft-card">
              <h3>Shortening Prolonged Labor</h3>
              <p>
                Sometimes babies need a gentle guide through the birth canal. Forceps assist in these
                situations, reducing the risks associated with prolonged second-stage labor for both
                mother and child.
              </p>
            </div>
          </div>

          {/* ITEM 5 */}
          <div className="ft-item">
            <div className="ft-icon"><i className="fa-solid fa-notes-medical"></i></div>
            <div className="ft-card">
              <h3>Managing Medical Complications</h3>
              <p>
                For mothers with certain heart conditions, high blood pressure, or other health concerns
                where prolonged pushing is risky, forceps offer a safer delivery alternative.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="eligibility-section">
          <div className="eligibility-container">
            <h2 className="eligibility-title">
              Who Benefits from Forceps Delivery? 
            </h2>
            <p className="eligibility-ptop">Forceps-assisted delivery may be recommended when:</p>
    
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
            <p className="eligibility-p"> <b>Important Note:</b> Not every delivery requires or suits forceps assistance. Our doctors carefully evaluate multiple factors before recommending this intervention.</p>
    
          </div>
    </section>

    <section className="eds-section">
      <div className="eds-container">

        <div className="eds-header">
          <h2>Meet Our Expert Obstetricians</h2>
          <p></p>
        </div>

        <p className="eds-intro">
          Your delivery team makes all the difference. At Prolife Hospitals, you're in capable, caring hands:
        </p>

        <div className="eds-grid">

          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Sujitha R – Consultant Gynecologist</h3>
            <p>
              With extensive experience in high-risk obstetrics and instrumental deliveries, Dr. Sujitha has helped countless mothers achieve safe vaginal births. Her calm demeanor and clinical precision make her one of Chennai's most trusted obstetricians.
            </p>
          </div>

          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Thamarai – Consultant Gynecologist</h3>
            <p>
              Dr. Thamarai specializes in complex labor management and has advanced training in operative vaginal delivery. She believes in empowering women through education and shared decision-making throughout their pregnancy journey.
            </p>
          </div>

          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Varshini – Consultant Gynecologist</h3>
            <p>
              Known for her gentle approach and excellent communication, Dr. Varshini ensures every mother understands her delivery options. Her expertise in both normal and assisted deliveries provides flexibility when labor takes unexpected turns.
            </p>
          </div>

        </div>

        <div className="eds-support">
          <h4>Supporting Specialists:</h4>
          <p>
            Our obstetricians work alongside experienced anesthesiologists including <strong>Dr. Hari Prakash,</strong> <strong>Dr. Shalini,</strong> and <strong>Dr. Nithya Priyan,</strong> who ensure your comfort throughout labor and delivery. Our pediatric team led by <strong>Dr. Uma Maheshwari</strong> is always present to welcome and assess your newborn.
          </p>
        </div>
        <a href="/ourteam" className="success-btn">
          View Our Complete Team →
        </a>

      </div>
    </section>

    <section className="pa-section">
      <div className="pa-container">
        <h2 className="pa-title">Why Prolife Hospital Stands Apart</h2>
        <p className="pa-intro">
          Discover the unique advantages that make Prolife Hospitals a trusted maternity care destination in Chennai.
        </p>

        <div className="pa-grid">
          {advantages.map((item, index) => (
            <div key={index} className="pa-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="pa-icon">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
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
                <h2>Ready to Experience Compassionate Maternity Care?</h2>
                
                <p>Whether you're planning your delivery or facing unexpected complications during labor, Prolife Hospitals is here with expertise, technology, and heart.</p>
                <p><b>Emergency Care:</b> <br /> Available 24/7</p>
                <button className="appointment-btn">Book an Appointment Now → </button>
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
<h3>Normal Delivery Services</h3>
<p>Our primary goal is always to support natural, unassisted birth. Learn about our comprehensive normal delivery care</p>
</div>


<div className="rs-card">
<h3>High-Risk Pregnancy Management</h3>
<p>Complex pregnancies require specialized monitoring and care. Our maternal-fetal medicine approach ensures the best outcomes.</p>
</div>


<div className="rs-card">
<h3>Cesarean Section</h3>
<p>Sometimes surgical delivery is the safest option. Discover our advanced C-section services with minimal recovery time.</p>
</div>


<div className="rs-card">
<h3>Labor Pain Management</h3>
<p>From epidurals to natural pain relief techniques, explore your options for comfortable labor. </p>
</div>


<div className="rs-card">
<h3>Postpartum Care</h3>
<p>Your recovery matters as much as your delivery. Learn about our comprehensive post-delivery support.</p>
</div>


<div className="rs-card">
<h3>Prenatal Care & Checkups</h3>
<p>Regular monitoring throughout pregnancy helps identify potential delivery complications early. </p>
</div>
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
