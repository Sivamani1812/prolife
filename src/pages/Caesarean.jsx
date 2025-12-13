
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
import {
  faBaby,
  faHeartPulse,
  faPersonPregnant,
  faDna,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";


const NormalVaginal = () => {

  const features = [
    {
      title: "Comprehensive Maternity Services",
      desc: "We offer integrated maternity care from your first prenatal visit through postpartum recovery. This continuity ensures familiarity with your medical team and consistent quality of care.",
    },
    {
      title: "State-of-the-Art Facilities",
      desc: "Our modular operation theaters, advanced diagnostic labs, and well-equipped labor rooms reflect our commitment to maintaining high medical standards.",
    },
    {
      title: "Family-Centered Approach",
      desc: "We recognize that childbirth is a family event. Our policies encourage partner participation and family bonding from the moment your baby arrives.",
    },
    {
      title: "Affordable Excellence",
      desc: "Quality healthcare shouldn't strain your finances. As one of the leading maternity hospitals in Chennai, we provide best-in-class care at reasonable costs, with transparent pricing and acceptance of major insurance plans.",
    },
    {
      title: "24/7 Availability",
      desc: "Labor doesn't follow a schedule. Our round-the-clock pharmacy, diagnostic services, and medical staff ensure you receive prompt attention whenever you need it",
    },
    {
      title: "Proven Track Record",
      desc: "Families across Chennai trust us for their most precious moments. Our high success rates in normal deliveries and positive patient feedback speak to our commitment to excellence.",
    },
  ];

  const relatedServices = [
    {
      title: "Pregnancy Care",
      desc: " Comprehensive prenatal monitoring throughout your pregnancy, helping identify if cesarean delivery becomes necessary.",
      icon: faBaby,
    },
    {
      title: "High-Risk Pregnancy Management",
      desc: " Specialized care for pregnancies with medical complications that often require cesarean delivery for safety.",
      icon: faPersonPregnant,
    },
    {
      title: "Normal Delivery Support",
      desc: " Labor and vaginal delivery services for mothers who don't need cesarean section.",
      icon: faHeartPulse,
    },
    {
      title: "VBAC Counseling",
      desc: "  Guidance on vaginal birth after previous cesarean, evaluating if you're a good candidate for VBAC.",
      icon: faDna,
    },
    {
      title: "Post-Cesarean Recovery Care",
      desc: " Extended support after delivery ensuring proper wound healing and addressing any complications.",
      icon: faDroplet,
    },
    
  ];

  const assessmentData = [
    {
      title: "Pre-Operative Preparation",
      points: [
        "Detailed health assessment and surgical planning. Pre-anesthetic evaluation and medication review. Discussion of surgical procedure and recovery timeline. Addressing your concerns and anxieties. Consent process with complete transparency."
      ]
    },
    {
      title: "Anesthesia Options",
      points: [
        "We primarily use spinal or epidural anesthesia, allowing you to remain awake during delivery while feeling no pain. Our anesthesiology team monitors you continuously, ensuring comfort and safety throughout the procedure."
      ]
    },
    {
      title: "The Surgical Procedure",
      points: [
        " Lower segment cesarean section (LSCS) through a small horizontal incision. Gentle delivery of your baby with immediate assessment. Partner presence encouraged during surgery when appropriate. Complete surgical care with meticulous attention to detail."
      ]
    },
    {
      title: "Immediate Post-Surgery Care",
      points: [
        "Recovery room monitoring until anesthesia wears off. Pain management with safe, effective medications. Early mobilization assistance to prevent complications. Breastfeeding support within hours of delivery. Wound care and infection prevention protocols."
      ]
    },
    {
      title: "Extended Recovery Support",
      points: [
        " Daily monitoring by obstetricians and nursing staff. Guidance on movement, feeding, and self-care. Managing post-operative discomfort and complications. Emotional support during recovery period. Discharge planning and home care instructions."
      ]
    },
    {
      title: "Follow-Up Care",
      points: [
        "Wound check appointments to ensure proper healing. Suture removal when needed (typically 7-10 days). Six-week postpartum checkup and assessment. Future pregnancy counseling. Contraception guidance tailored to your needs."
      ]
    }
  ];


  const planItems = [
    {
      icon: faAppleWhole,
      title: "Nutritional Optimization",
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
    "Have a singleton pregnancy (carrying one baby)",
    "Are carrying a baby in the head-down position",
    "Have reached full term (37-42 weeks)",
    "Don't have medical conditions that contraindicate vaginal birth",
    "Have adequate pelvis size for the baby to pass through",
    "Don't have placenta previa or other placental complications",
  ];

  const reviewsData = [
    {
      text: "I needed an emergency cesarean after 18 hours of labor. Dr. Sujitha explained everything clearly despite the urgency, and the surgery went perfectly. My daughter is healthy, and I recovered faster than expected. The entire team made a scary situation feel manageable",
      name: "Meena K., First-time mother, Porur",
      avatar: "M",
      rating: 5
    },
    {
      text: "My second cesarean at Prolife was completely different from my first at another hospital. The surgical technique was gentler, pain management was excellent, and I was walking the same evening. Dr. Thamarai's expertise made all the difference",
      name: "Lakshmi P., Manapakkam",
      avatar: "L",
      rating: 5
    },
    {
      text: "Planned cesarean for my twins. The team coordinated perfectly—two pediatricians ready, surgical precision, and both babies delivered healthy within minutes. Dr. Varshini's confidence put me at ease throughout the procedure",
      name: "Divya S., Ramapuram",
      avatar: "D",
      rating: 5
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const faqData = [
    {
      question: "How long does a cesarean section take?",
      answer:
        " The surgery typically takes 45-60 minutes. Your baby is delivered within the first 10-15 minutes, and the remaining time is spent closing surgical layers carefully for optimal healing."
    },
    {
      question: "Will I feel pain during cesarean delivery?",
      answer:
        " No. Spinal or epidural anesthesia blocks pain completely while keeping you awake. You'll feel pressure and pulling sensations but no pain. Our anesthesiology team monitors comfort throughout."
    },
    {
      question: "When can I hold my baby after C-section?",
      answer:
        "Immediately after delivery if both you and baby are stable. We encourage skin-to-skin contact in the operating room itself, and breastfeeding can begin within 1-2 hours after surgery."
    },
    {
      question: "How long is hospital stay after cesarean?",
      answer:
        "Typically 3-4 days. We monitor your recovery, ensure proper wound healing, confirm successful breastfeeding, and provide complete discharge instructions before you go home."
    },
    {
      question: "Can I have a vaginal delivery after the previous cesarean?",
      answer:
        " Possibly. VBAC (vaginal birth after cesarean) is safe for many women with one previous cesarean. We evaluate your specific situation, previous surgical technique, and current pregnancy to determine if VBAC is appropriate."
    },
    {
      question: "What are the risks of cesarean section?",
      answer:
        " Like any surgery, cesarean carries risks including infection, bleeding, blood clots, and anesthesia complications. However, these risks are low with experienced surgical teams and proper care. We discuss specific risks during consultation."
    },
    {
      question: "How painful is cesarean recovery?",
      answer:
        " You'll have discomfort for several days, but pain medication keeps it manageable. Most mothers significantly improve by day 3-4 and feel reasonably comfortable by two weeks. Complete healing takes 6-8 weeks."
    },
    {
      question: "When can I resume normal activities?",
      answer:
        "  Light activities within days, driving after 2 weeks (if comfortable), exercise after 6 weeks with doctor approval. Avoid heavy lifting for 6-8 weeks to allow proper wound healing."
    },
       {
      question: "Does cesarean affect breastfeeding?",
      answer:
        " Not with proper support. While cesarean can delay milk production slightly, most mothers successfully establish breastfeeding. Our team provides hands-on assistance to ensure successful feeding."
    },
       {
      question: "How much does cesarean delivery cost at Prolife?",
      answer:
        "We offer transparent cesarean packages covering surgery, anesthesia, hospital stay, and post-operative care. Contact our billing team for detailed pricing based on your specific situation."
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
      <h1 className="story-hero-title1">Caesarean Section at Prolife Hospital</h1>

      {/* PLAN PREGNANCY SECTION */}
      <section className="plan-pregnancy-section">
        <div className="plan-container">

          <div className="plan-left">
            <h2 className="plan-title">
              Experience Natural Childbirth with <br />
              <span>Expert Care </span>
            </h2>

            <p className="plan-description">
              When a cesarean becomes necessary, expertise and compassion matter most. At Prolife Hospital, our experienced surgical team performs Caesarean sections (LSCS) with precision and care, ensuring both mother and baby receive the safest possible outcome.


            </p>
            <p className="plan-description">
              Whether planned or emergency, we guide you through every step with clear communication, modern surgical techniques, and complete post-operative support.
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

      <section className="choose-prolife">
        <div className="choose-content">
          <h2 className="choose-title">
            Why Choose Prolife for Your Caesarean Section?
          </h2>

          <ul className="choose-list">
            <li>
              <strong>Experienced Surgical Team You Can Trust</strong>
              <p>
                Our obstetricians have performed thousands of cesarean deliveries, handling routine cases and complex high-risk situations with equal expertise. We don't just perform surgery—we support you through the entire experience.
              </p>
            </li>

            <li>
              <strong>Safety-First Approach with Modern Techniques</strong>
              <p>
                We use advanced surgical methods that minimize blood loss, reduce infection risk, and promote faster healing. Every cesarean is performed in our fully-equipped modular operation theaters under strict sterile protocols.
              </p>
            </li>

            <li>
              <strong>Comfortable Recovery Environment</strong>
              <p>
                After surgery, you stay in personalized wards with air-conditioning, private spaces for family, and round-the-clock nursing care. We monitor your recovery closely and ensure you're comfortable throughout your hospital stay.
              </p>
            </li>

            <li>
              <strong>Clear Communication Before Surgery</strong>
              <p>
                No surprises, no medical jargon you can't understand. We explain why cesarean is recommended, what happens during surgery, recovery expectations, and answer every question you have.
              </p>
            </li>

            <li>
              <strong>24/7 Emergency C-Section Capability</strong>
              <p>
                Labor doesn't follow business hours. Our LSCS delivery hospital in Chennai operates continuously with obstetricians, anesthesiologists, and surgical teams always available for urgent cesarean deliveries.
              </p>
            </li>
          </ul>
          <a href="/testimonial" className="plan-btn">
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


      <section className="assess-section">
        <h2 className="assess-title">
          What We Assist You With at Prolife
        </h2>

        <div className="assess-card-wrapper">
          {assessmentData.map((item, index) => (
            <div className="assess-card" key={index}>
              <div className="highlighter"></div>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a href="#" className="assess-btn">
          Not sure if you need a cesarean? Schedule a Consultation →
        </a>
      </section>

      <section className="asclean-section">
        <div className="asclean-container">

          <header className="asclean-header">
            <h2>How Our Caesarean Service Helps You</h2>
            <p></p>
            <p></p>
          </header>

          <div className="asclean-grid">

            <div className="asclean-card">
              <h3>Safer Deliveries When Vaginal Birth Isn't Possible</h3>
              <p>
                Some pregnancies need cesarean delivery for medical safety. We identify these situations early, plan appropriately, and execute surgeries that protect both mother and baby from potential complications.
              </p>
            </div>

            <div className="asclean-card">
              <h3>Reduces Risk in High-Risk Pregnancies</h3>
              <p>
                Diabetes, hypertension, placenta problems, or previous cesarean—these conditions often require surgical delivery. Our high-risk pregnancy C-section in Chennai services provide specialized care that manages these complexities safely.
              </p>
            </div>

            <div className="asclean-card">
              <h3>Faster Recovery with Modern Techniques</h3>
              <p>
                Advanced surgical methods mean smaller incisions, less blood loss, reduced infection risk, and quicker healing. Most mothers walk within 12 hours and go home within 3-4 days feeling stronger.
              </p>
            </div>

            <div className="asclean-card">
              <h3>Protects Your Baby When Complications Arise</h3>
              <p>
                Fetal distress, cord prolapse, abnormal position, or labor that doesn't progress—cesarean delivery can be lifesaving. Our surgical team responds quickly when emergency situations develop during labor.
              </p>
            </div>

            <div className="asclean-card">
              <h3>Planned C-Section Reduces Delivery Anxiety</h3>
              <p>
                For scheduled cesareans, you know exactly when your baby arrives. No waiting for labor, no uncertainty about timing. This helps you prepare mentally, arrange family support, and approach delivery with confidence rather than fear.
              </p>
            </div>

            <div className="asclean-card">
              <h3>Preserves Option for Future Pregnancies</h3>
              <p>
                Proper surgical technique and wound care today affect your future pregnancies. We perform cesareans that heal well and give you the best chance for VBAC (vaginal birth after cesarean) if you want it next time.
              </p>
            </div>

          </div>
          <a href="#" className="success-btn">
            Ready to discuss your delivery options? Talk to Our Specialists  →
          </a>
        </div>
      </section>

      <section className="timeline-section">
        <h2 className="timeline-title">Who Needs a Caesarean Section?</h2>

        <div className="timeline-container">

          {/* First Trimester */}
          <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Planned Cesarean Situations</span>
            </div>
            <ul>
              <li> Baby in breech or transverse position that won't turn</li>
              <li>Placenta previa blocking the birth canal</li>
              <li>Multiple pregnancies with twins or triplets</li>
              <li>Previous cesarean delivery (though VBAC is possible)</li>
              <li>Large baby with gestational diabetes</li>
              <li>Maternal health conditions requiring controlled delivery</li>
              <li>Maternal request after thorough counseling</li>
            </ul>
          </div>

          {/* Second Trimester */}
          <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">Emergency Cesarean Situations</span>
            </div>
            <ul>
              <li>Fetal distress during labor</li>
              <li>Labor not progressing despite hours of trying</li>
              <li>Umbilical cord prolapse or compression</li>
              <li>Placental abruption threatening baby's oxygen supply</li>
              <li>Uterine rupture risk in previous cesarean scar</li>
              <li>Severe preeclampsia requiring immediate delivery</li>
              <li>Sudden maternal health complications during labor</li>
            </ul>
          </div>

          {/* Third Trimester */}
          <div className="timeline-card">
            <div className="timeline-header">
              <span className="trimester-tag">High-Risk Pregnancy Conditions</span>
            </div>
            <ul>
              <li>Uncontrolled diabetes or blood pressure</li>
              <li>Heart conditions in mother</li>
              <li>HIV or active herpes requiring cesarean to protect baby</li>
              <li>Severe growth restriction in baby</li>
              <li>Abnormal placental position or function</li>
              <li>Previous uterine surgery or fibroid removal</li>
            </ul>
          </div>

        </div>
        <a href="#" className="success-btn">
          Does this describe your situation? Book Your Appointment →
        </a>
      </section>

      <section className="cerclage-team-section" id="team">
        <div className="container">
          <h2 className="section-title">Meet Our Caesarean Section Specialists</h2>


          <div className="team-grid">
            {/* Dr. Sujitha */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Sujitha R</h3>
              <p className="designation">Senior Gynecologist & Obstetrician</p>
              <p className="doctor-desc">
                With 15+ years performing cesarean deliveries, Dr. Sujitha combines surgical precision with compassionate care. Known for her calm demeanor during emergencies and thorough explanations that help mothers understand every decision.
              </p>
            </div>


            {/* Dr. Thamarai */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Thamarai</h3>
              <p className="designation">High-Risk Pregnancy Specialist</p>
              <p className="doctor-desc">
                Expert in managing complicated pregnancies requiring cesarean delivery. Handles cases with diabetes, hypertension, multiple pregnancies, and previous surgical complications. Her clinical expertise ensures safer outcomes in challenging situations.
              </p>
            </div>


            {/* Dr. Varshini */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Varshini</h3>
              <p className="designation">Obstetrician</p>
              <p className="doctor-desc">
                Skilled in both planned and emergency cesarean sections. Takes time to counsel mothers about surgical necessity, recovery expectations, and future pregnancy options. Focuses on minimizing anxiety while maintaining highest surgical standards.
              </p>
            </div>


            {/* Anesthesiology Team */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Shalini</h3>
              <p className="designation">
                Anesthetist
              </p>
              <p className="doctor-desc">
                Provides safe, comfortable spinal and epidural anesthesia for cesarean deliveries. Monitors mothers throughout surgery, manages pain effectively, and ensures smooth recovery from anesthesia. Available 24/7 for emergency cases.
              </p>
            </div>

            <div className="team-card">
              <h3 className="doctor-name">Dr. Hari Prakash</h3>
              <p className="designation">
                Anesthetist
              </p>
              <p className="doctor-desc">
                Expert in obstetric anesthesia with extensive cesarean experience. Known for gentle technique that minimizes discomfort and comprehensive monitoring that ensures maternal safety during surgery.
              </p>
            </div>

            <div className="team-card">
              <h3 className="doctor-name">Dr. Nithya Priyan</h3>
              <p className="designation">
                Anesthetist
              </p>
              <p className="doctor-desc">
                Specializes in pain management for cesarean sections. Works closely with surgical team to provide optimal anesthesia while keeping mothers comfortable and aware during their baby's birth.
              </p>
            </div>

            <div className="team-card">
              <h3 className="doctor-name">Dr. Uma Maheshwari</h3>
              <p className="designation">
                Anesthetist
              </p>
              <p className="doctor-desc">
                Assesses every newborn immediately after cesarean delivery. Provides expert neonatal care, manages any breathing or adaptation issues, and ensures babies transition smoothly after surgical birth.
              </p>
            </div>


          </div>
          <a href="/ourteam" className="success-btn">
            View Our Complete Team →
          </a>

        </div>
      </section>

      <section className="why-prolife-section">
        <div className="wp-container">
          <h2 className="wp-title"><strong>Why Choose Prolife Hospital for Your C-Section?</strong></h2>

          <div className="wp-grid fade-up">
            <div className="wp-item slide-in-left">10+ Years serving Chennai families with surgical excellence</div>
            <div className="wp-item slide-in-right"> 2,500+ Successful Deliveries including complex cesarean cases</div>
            <div className="wp-item slide-in-left">Modular Operation Theaters with advanced surgical equipment
            </div>
            <div className="wp-item slide-in-right">24/7 Surgical Team ready for emergency cesarean deliveries
            </div>
            <div className="wp-item slide-in-left">Experienced Anesthesiologists ensuring pain-free, safe procedures
            </div>
            <div className="wp-item slide-in-right">Immediate Pediatric Care for every cesarean-born baby
            </div>
            <div className="wp-item slide-in-right">Comfortable Recovery Wards with personalized nursing attention
            </div>
            <div className="wp-item slide-in-right">Transparent Pricing with comprehensive cesarean packages
            </div>
            <div className="wp-item slide-in-right">Two Convenient Locations in Manapakkam and Mugalivakkam
            </div>
          </div>

          <div className="wp-btn-wrapper fade-up">
            <button className="wp-cta-btn">Learn More About Our Hospital</button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <p className="sub-title">What Our Families Say</p>
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
          ⭐ See More Reviews
        </a>
      </section>

      {/* Care Journey Section */}
      <section className="journey-section">
        <div className="journey-container">
          <div className="journey-grid">
            <div className="journey-image">
              <div className="journey-content">
                <h2>Book Your Caesarean Section Consultation</h2>
                <p>Whether planning a cesarean or seeking a second opinion—our Caesarean section specialists in Chennai provide expert guidance based on your specific situation.</p>
                  <p> <b>Consultation Hours:</b> <br />
                   Monday - Saturday: 9 AM - 8 PM <br />
                   Sunday: 9 AM - 2 PM</p>
                   <p><b>Emergency Obstetric Care:</b> <br /> Available 24/7</p>

                <button className="appointment-btn">Book Appointment Online </button>
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
           Prolife Hospital — Your trusted LSCS delivery hospital in Chennai for safe, compassionate cesarean care.
          </h1>
          <button className="lab-btn">
          Start Your Journey Today →
        </button>
        </div>
        
      </section>
    </div>
  );
};

export default NormalVaginal;
