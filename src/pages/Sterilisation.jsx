
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

const Sterilisation = () => {


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
      desc: " Specialized care for pregnancies complicated by diabetes, hypertension, or previous complications.",
      icon: faBaby,
    },
    {
      title: "Pregnancy Care in Chennai",
      desc: "  Complete antenatal services with regular monitoring to catch problems early before emergencies develop.",
      icon: faPersonPregnant,
    },
    {
      title: "Normal Delivery Care",
      desc: "Comprehensive support for natural childbirth with expert monitoring and pain management options.",
      icon: faHeartPulse,
    },
    {
      title: "Post-Cesarean Care",
      desc: "Complete recovery support, wound management, and guidance for mothers after C-section delivery.",
      icon: faDna,
    },
    {
      title: "Family Planning Counseling",
      desc: "Expert guidance on all contraceptive options to help you make informed reproductive choices.",
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
    "10+ Years serving Chennai families with comprehensive maternity and surgical care",
    " 2,500+ Successful Deliveries including hundreds of combined LSCS and sterilisation procedures",
    " Expert Surgical Team trained in both obstetrics and permanent contraceptive methods",
    "Modern Infrastructure with fully-equipped operation theaters meeting international standards",
    "Transparent Counseling ensuring informed, voluntary decisions without pressure",
    "Affordable Packages with clear pricing covering surgery, hospital stay, and post-operative care",
    " 24/7 Emergency Support with specialists available round-the-clock for any complications",
    "High Success Rates with minimal complications and excellent maternal outcomes",
    "Convenient Locations in Manapakkam and Mugalivakkam for easy access",
    " Insurance Acceptance partnering with major providers for cashless treatment options",
  ];

  const reviewsData = [
    {
      text: "I was nervous about doing both procedures together, but Dr. Sujitha explained everything so clearly that I felt confident. Surgery went smoothly, recovery was faster than expected, and I'm relieved knowing my family planning is complete. Best decision I made.",
      name: " Lakshmi P., Porur",
      avatar: "L",
      rating: 5
    },
    {
      text: "After three kids, we knew we were done. Dr. Thamarai performed my C-section and sterilisation together. One surgery, one recovery, and permanent peace of mind. The hospital staff took excellent care of me and my baby throughout",
      name: " Divya K., Manapakkam",
      avatar: "D",
      rating: 5
    },
    {
      text: "I appreciated how the doctors never pressured me. They gave me time to think, answered all my husband's questions, and made sure I understood everything. The surgery itself was professional, and my baby boy is healthy and thriving.",
      name: " Priya S., Ramapuram",
      avatar: "P",
      rating: 5
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const faqData = [
    {
      question: "Is it safe to do sterilisation during cesarean delivery?",
      answer:
        "Yes, it's medically safe when performed by experienced surgeons. The procedure adds minimal time and carries no significant additional risks compared to cesarean alone."
    },
    {
      question: "Will sterilisation affect my recovery from C-section?",
      answer:
        " No. Recovery time remains essentially the same. Since the procedure happens through the same incision, healing isn't prolonged."
    },
    {
      question: "How permanent is tubal ligation?",
      answer:
        " It's considered permanent contraception. While reversal surgery exists, success rates are low and not guaranteed. Approach this as an irreversible decision."
    },
    {
      question: "Can I change my mind after signing consent forms?",
      answer:
        "Absolutely. You can withdraw consent anytime before surgery begins. We never pressure anyone to proceed if they have doubts."
    },
    {
      question: "Will sterilisation affect my hormones or periods?",
      answer:
        " No. Your ovaries continue functioning normally, producing hormones and releasing eggs. Your menstrual cycle remains unchanged—only the tubes are blocked, preventing eggs from reaching sperm."
    },
    {
      question: "What's the failure rate of tubal ligation?",
      answer:
        " Less than 1% when performed correctly. It's one of the most effective permanent contraceptive methods available."
    },
    {
      question: "How long does the sterilisation part take during surgery?",
      answer:
        "Typically 5-10 additional minutes after your baby is delivered and placenta removed."
    },
    {
      question: "Will I be able to breastfeed after surgery?",
      answer:
        " Yes, completely. Anesthesia and surgery don't affect breastfeeding. We encourage early skin-to-skin contact and nursing."
    },
    {
      question: "What if I develop complications during surgery?",
      answer:
        " Our operating rooms have emergency equipment, blood bank access, and experienced teams trained to handle any complications immediately."
    },
    {
      question: "Does insurance cover elective LSCS with sterilisation?",
      answer:
        "Many insurance plans cover maternity procedures including cesarean delivery. Coverage for sterilisation varies by policy. Contact our billing team to verify your specific coverage."
    },
    {
      question: "How much does the combined procedure cost?",
      answer:
        " We offer transparent packages covering surgery, anesthesia, hospital stay, medications, and follow-up care. Contact us for detailed pricing based on room category and specific requirements."
    },
    {
      question: "When can I resume normal activities after surgery?",
      answer:
        "Light activities within 1-2 weeks, normal daily routine by 4-6 weeks. Avoid heavy lifting and strenuous exercise for 6-8 weeks to allow complete healing."
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
      <h1 className="story-hero-title1">Elective LSCS with Sterilisation in Chennai</h1>

      {/* PLAN PREGNANCY SECTION */}
      <section className="plan-pregnancy-section">
        <div className="plan-container">

          <div className="plan-left">
            <h2 className="plan-title">
              Safe, Planned C-Section with Permanent Contraception
            </h2>

            <p className="plan-description">
              When you know your family is complete, combining your cesarean delivery with sterilisation makes practical sense. One surgery. One recovery. A decision made on your terms.
            </p>
            <p className="plan-description">
              At Prolife Hospital, our elective LSCS with sterilisation in Chennai gives you the dual benefit of a safe, planned delivery and permanent contraception—all coordinated by experienced surgeons who respect your choice and prioritize your wellbeing.
            </p>
            <a href="/contact" className="plan-btn">
              Schedule Your Consultation →
            </a>
          </div>

          <div className="plan-right">
            <img
              src="/images/img/str1.jpg"
              alt="Pre Pregnancy Consultation"
            />
          </div>

        </div>
      </section>

      <section className="plan-pregnancy-section">
        <div className="plan-container">
          <div className="plan-right">
            <img
              src="/images/img/str2.jpg"
              alt="Pre Pregnancy Consultation"
            />
          </div>
          <div className="plan-left">
            <h2 className="plan-title">
              What is Elective LSCS with Sterilisation?
            </h2>

            <p className="plan-description">
              Elective LSCS (Lower Segment Cesarean Section) means your cesarean delivery is planned in advance, not done as an emergency. When combined with sterilisation, we perform tubal ligation immediately after delivering your baby—during the same surgical procedure.
            </p>
            <p className="plan-description">
              This approach is medically safe, reduces the need for separate surgery later, and gives you complete family planning control. Many mothers choose this option when they're certain about not wanting future pregnancies.
            </p>
            <a href="/contact" className="plan-btn">
              Talk to Our Specialists  →
            </a>
          </div>
        </div>
      </section>

      <section className="choose-prolife">
        <div className="choose-content">
          <h2 className="choose-title">
            Why Choose Prolife for Elective LSCS with Sterilisation?
          </h2>

          <ul className="choose-list">
            <li>
              <strong>Experienced Surgical Team</strong>
              <p>
                Our gynecologists have performed hundreds of combined procedures with excellent outcomes. We handle both the delivery and sterilisation with precision, ensuring your safety throughout.
              </p>
            </li>

            <li>
              <strong>Single Surgery, Single Recovery</strong>
              <p>
                Why undergo two separate procedures when both can happen together? One operation means one anesthesia dose, one hospital stay, and one recovery period—saving you time, cost, and stress.
              </p>
            </li>

            <li>
              <strong>Respectful Decision-Making Process</strong>
              <p>
                We never pressure anyone into sterilisation. Our doctors provide complete information, answer every question, and ensure you've made an informed, voluntary choice. Your body, your decision—we just make it happen safely.
              </p>
            </li>

            <li>
              <strong>Transparent Pre-Operative Counseling</strong>
              <p> Before scheduling surgery, we discuss risks, benefits, permanence of sterilisation, alternative options, and what to expect during recovery. You'll sign consent forms only after understanding everything completely.
              </p>
            </li>

            <li>
              <strong>Modern Operation Theaters</strong><br />
              <p> Our best hospital for C-section with sterilisation in Chennai features fully-equipped modular theaters with advanced surgical instruments, monitoring systems, and backup facilities ensuring optimal conditions.
              </p>
            </li>
            <li>
              <strong>24/7 Post-Operative Support</strong>
              <p>
                After surgery, our nursing staff monitors you constantly. Anesthesiologists manage pain relief, and gynecologists check healing progress. Any concern gets immediate attention, day or night.
              </p>
            </li>
          </ul>

          <a href="https://www.justdial.com/Chennai/Prolife-Maternity-and-Fertility-Hospital-Near-DLF-LT-and-Chennai-Trade-Centre-Manapakkam/044PXX44-XX44-191211174423-E9K1_BZDET/reviews" className="choose-btn">
            Read Patient Reviews →
          </a>
        </div>

        {/* <div className="choose-img-wrapper">
          <img
            src="/images/img/str3.jpg"
            alt="Pregnancy Care at Prolife"
            className="choose-img"
          />
        </div> */}
      </section>

      <section className="timeline-section"> 
        <h2 className="timeline-title">What We Assist When You Come to Prolife</h2>

        <div className="timeline-container">

          <div className="timeline-card">
            <div className="timeline-header">
              <h2 className="trimester-tag">Before Surgery</h2>
            </div>
            <ul>
              <li><b>Medical Assessment</b>  Complete health evaluation including blood tests, anesthesia fitness check, and review of previous medical history to ensure you're ready for surgery.</li><li>
                <b>Surgical Planning</b>  We schedule your delivery date (typically 38-39 weeks), explain the procedure timeline, discuss anesthesia options, and answer family members' questions.</li><li>
                <b>Consent Process</b>  Detailed counseling about sterilisation's permanence, success rates, potential risks, and confirmation that this decision is voluntary and informed.</li>
              <li>
                <b>Pre-Operative Preparation</b>
                Clear instructions about fasting, medication adjustments, what to bring to hospital, and when to arrive on surgery day.</li>
            </ul>
          </div>

           <div className="timeline-card">
            <div className="timeline-header">
              <h2 className="trimester-tag">During Surgery</h2>
            </div>
            <ul>
              <li><b>Spinal/Epidural</b>  Anesthesia Our anesthesiologists administer pain relief that keeps you awake to hear your baby's first cry while feeling no surgical pain.</li>
              <li>
                <b> Baby Delivery</b> Your baby is delivered through a carefully made incision in the lower abdomen. Immediate newborn assessment by our pediatrician ensures your baby is healthy.</li>
                <li>
                <b>Tubal Ligation</b> Procedure After delivering the placenta, the surgeon identifies your fallopian tubes and performs sterilisation—either cutting and tying them or using surgical clips. This takes just 5-10 additional minutes.</li>
              <li>
                <b>Wound Closure</b> The uterine incision and abdominal layers are closed with dissolvable stitches. The entire procedure typically takes 45-60 minutes.</li>
            </ul>
          </div>

           <div className="timeline-card">
            <div className="timeline-header">
              <h2 className="trimester-tag">After Surgery</h2>
            </div>
            <ul>
              <li><b>Recovery Room</b> Monitoring You'll spend initial hours in recovery where staff monitors vital signs, checks bleeding, ensures anesthesia wears off safely, and supports early breastfeeding.</li><li>
                <b>Pain Management</b> Adequate pain relief through medications helps you move, feed your baby, and recover comfortably without unnecessary suffering.</li><li>
                <b>Breastfeeding Support</b>Our nurses assist with proper positioning, latching techniques, and troubleshooting any difficulties so you can bond with your newborn immediately.</li>
              <li>
                <b>Hospital Stay</b>
                 Most mothers stay 3-4 days for observation, wound care, and recovery support before discharge with complete post-operative instructions.</li>
                 <li>
                <b>Post-Discharge</b>
                  Follow-Up We schedule checkups to monitor healing, remove stitches if needed, address concerns, and ensure both you and baby are thriving.</li>
            </ul>
          </div>

        </div>

        <div className="timeline-cta">
          <a href="/contact" className="cta-btn">
             Book Your Pre-Surgery Consultation →
          </a>
        </div>
      </section>

      <section className="assist-section">
        <div className="assist-container">

          <div className="assist-header">
            <h2>How Our Service Helps You</h2>
          </div>

          <div className="assist-timeline">

            <div className="assist-step">
              <div className="assist-icon"><i className="fa-solid fa-comments"></i></div>
              <div className="assist-content">
                <h3> Family Planning Certainty</h3>
                <p>Permanent contraception means no more worrying about birth control methods, pills, or unplanned pregnancies.
</p>
              </div>
            </div>

            <div className="assist-step">
              <div className="assist-icon"><i className="fa-solid fa-heart-pulse"></i></div>
              <div className="assist-content">
                <h3> Convenience and Efficiency</h3>
                <p>  Combining procedures saves you from needing separate surgery, additional hospital stay, and repeated recovery time.</p>
              </div>
            </div>

            <div className="assist-step">
              <div className="assist-icon"><i className="fa-solid fa-brain"></i></div>
              <div className="assist-content">
                <h3>Cost-Effective Solution</h3>
                <p> One surgery costs significantly less than cesarean delivery followed by separate sterilisation months later.</p>
              </div>
            </div>

            <div className="assist-step">
              <div className="assist-icon"><i className="fa-solid fa-baby"></i></div>
              <div className="assist-content">
                <h3> Immediate Effectiveness</h3>
                <p> Sterilisation works immediately after surgery. No waiting period, no additional contraceptive needed.</p>
              </div>
            </div>

            <div className="assist-step">
              <div className="assist-icon"><i className="fa-solid fa-heart"></i></div>
              <div className="assist-content">
                <h3>Medical Safety</h3>
                <p>Performing tubal ligation during cesarean carries no additional major risks compared to cesarean alone when done by experienced surgeons.</p>
              </div>
            </div>

             <div className="assist-step">
              <div className="assist-icon"><i className="fa-solid fa-heart"></i></div>
              <div className="assist-content">
                <h3> Peace of Mind</h3>
                <p>Complete your family on your terms, knowing you've made a permanent, effective choice that aligns with your life plans.</p>
              </div>
            </div>
          </div>
        </div>

         <div className="str-cta">
          <a href="/contact" className="cta-btn">
              Learn More About the Procedure →
          </a>
        </div>

      </section>

       <section className="lscs-section">
      <div className="lscs-container">
        <h2 className="lscs-title">
          Who Should Consider <span>Elective LSCS with Sterilisation?</span>
        </h2>

        <div className="lscs-grid">
          {[
            "Women who are certain they don't want more children",
            "Mothers with medical conditions where future pregnancy poses health risks",
            "Those with multiple previous cesarean deliveries",
            "Women for whom pregnancy complications make future pregnancies inadvisable",
            "Couples who have completed their desired family size",
            "Anyone seeking permanent, reliable contraception without hormonal methods",
            "Women who want to avoid separate surgery for sterilisation later"
          ].map((item, index) => (
            <div className="lscs-card" key={index}>
              <div className="check-icon">✓</div>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="requirements-box">
          <h3>Important Requirements</h3>
          <ul>
            <li>Must be 21 years or older (Legal requirement in India)</li>
            <li>Decision must be voluntary without pressure or coercion</li>
            <li>Clear understanding that sterilisation is permanent & irreversible</li>
            <li>Partner's consent documented as per regulations</li>
            <li>Mental fitness to make informed medical decisions</li>
          </ul>
        </div>

        <div className="cta-box">
          <h4>Have Questions?</h4>
          <button className="cta-button"> <a href="/contact">Talk to Our Doctors</a></button>
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
              With 15+ years of experience, Dr. Sujitha has performed countless planned cesarean deliveries with sterilisation. Her patients appreciate her thorough counseling approach and surgical expertise that ensures safe outcomes.
            </p>
          </div>

          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Varshini – Obstetrician & Gynecological Surgeon</h3>
            <p>
              Known for her calm demeanor and clear communication, Dr. Varshini guides mothers through decision-making with patience. Her surgical skills ensure minimal complications and smooth recovery.
            </p>
          </div>

           <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Shalini – Senior Anesthetist</h3>
            <p>
              Expert in obstetric anesthesia, Dr. Shalini ensures your comfort during surgery with appropriate pain management. She monitors you throughout the procedure, prioritizing both safety and comfort.
            </p>
          </div>

          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Nithya Priyan - Anesthetist</h3>
            <p>
             Skilled in administering spinal and epidural anesthesia for cesarean deliveries. Dr. Nithya's careful approach minimizes discomfort while maintaining optimal anesthesia levels.
            </p>
          </div>

          <div className="eds-card">
            <span className="eds-bar"></span>
            <h3>Dr. Uma Maheshwari - Pediatrician</h3>
            <p>
             Provides immediate newborn assessment and care after delivery. She examines your baby, addresses any concerns, and guides you on infant care during your hospital stay.
            </p>
          </div>

        </div>
      </div>
      <div className="str-cta1">
        <a href="/ourteam" className="cta-btn">Schedule a Consultation with Our Team </a></div>
    </section>

      <section className="eligibility-section">
        <div className="eligibility-container">
          <h2 className="eligibility-title">
            Why Prolife Hospital for Planned C-Section with Sterilisation?
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
            <a href="/story" className="cta-button">
               Learn More About Our Hospital →
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <p className="sub-title">What Our Mothers Say</p>
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
                <h2>Book Your Consultation</h2>
                <p>Ready to plan your delivery with permanent contraception? Our specialists provide complete guidance on elective LSCS with sterilisation.</p>
                <p> <b>Consultation Hours:</b> <br />
                  Monday - Saturday : 9 AM - 8 PM <br />
                  Sunday : 9 AM - 2 PM</p>
                <p><b>Emergency Care:</b> <br /> Available 24/7</p>
                <button className="appointment-btn"> Book Appointment Online  → </button>
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
           Prolife Hospital — Best hospital for C-section with sterilisation in Chennai 
          </h1>
          <button className="lab-btn">
             Plan Your Delivery with Confidence →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sterilisation;
