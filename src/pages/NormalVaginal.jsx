
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
  faDroplet ,
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
    title: "High-Risk Pregnancy Management",
    desc: " Specialized care for mothers with medical conditions or pregnancy complications requiring additional monitoring",
    icon: faBaby,
  },
  {
    title: "Cesarean Section (C-Section)",
    desc: " Safe surgical delivery option when vaginal birth poses risks to mother or baby.",
    icon: faHeartPulse,
  },
  {
    title: "Prenatal Care & Monitoring",
    desc: " Regular check-ups, ultrasounds, and tests to ensure healthy pregnancy progression.",
    icon: faPersonPregnant,
  },
  {
    title: "Postpartum Care",
    desc: " Comprehensive support for mother and baby after delivery, including breastfeeding assistance and recovery monitoring.",
    icon: faDna,
  },
  {
    title: "Newborn Care & Pediatrics",
    desc: "Expert pediatric services to ensure your baby's health from birth through childhood.",
    icon: faDroplet,
  },
    {
    title: "Labor Preparation Classes",
    desc: " Educational sessions to help you prepare physically and mentally for childbirth.",
    icon: faPersonPregnant,
  }
];

  const assessmentData = [
    {
      title: "Experienced Obstetric Team",
      points: [
        "Our gynecologists and obstetricians bring years of hands-on experience in managing normal deliveries. They understand that every pregnancy is unique and provide personalized care tailored to your specific needs."
      ]
    },
    {
      title: "Labor-Friendly Environment",
      points: [
        "We've designed our labor rooms to feel warm and welcoming rather than clinical. Comfortable birthing positions, privacy, and the option to have your partner or family member present help create a supportive atmosphere during this special moment."
      ]
    },
    {
      title: "24/7 Emergency Readiness",
      points: [
        "While we encourage natural birth, we're fully prepared to handle any unexpected complications. Our well-equipped operation theaters and round-the-clock medical staff ensure immediate intervention if needed, making us a trusted choice for safe normal vaginal delivery in Chennai."
      ]
    },
     {
      title: "Evidence-Based Practices",
      points: [
        "We follow the latest guidelines in obstetric care, including delayed cord clamping, immediate skin-to-skin contact, and early breastfeeding initiation—all practices that benefit both mother and newborn."
      ]
    },
     {
      title: "Minimal Medical Intervention",
      points: [
        "Unless medically necessary, we avoid unnecessary interventions. Our approach focuses on allowing labor to progress naturally while closely monitoring the well-being of mother and baby."
      ]
    },
     {
      title: "Labor-Friendly Environment",
      points: [
        "From your first prenatal visit to postpartum care, we keep you informed about every aspect of your delivery. Understanding what's happening helps reduce anxiety and empowers you to participate actively in your birthing experience."
      ]
    }
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
    desc: "15+ years in obstetrics and reproductive health. Specializes in high-risk pregnancy planning and fertility optimization.",
    img: "/images/img/d10.png",
  },
  {
    name: "Dr. Thamarai",
    title: "Maternal-Fetal Medicine Specialist",
    desc: "Expert in managing complex medical conditions before and during pregnancy—diabetes, hypertension, autoimmune disorders.",
    img: "/images/img/d11.png",
  },
  {
    name: "Dr. Varshini",
    title: "Fertility Specialist",
    desc: " Advanced training in reproductive endocrinology. Helps couples facing conception challenges using evidence-based approaches.",
    img: "/images/img/d13.png",
  },
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
    text: "I was nervous about my first delivery, but the team at Prolife made everything so smooth. The doctors explained each step, and the nurses were incredibly supportive. I had the natural birth I wanted, and both my baby and I are healthy. Thank you, Prolife",
    name: "Priya M.",
    avatar: "P",
    rating: 5
  },
  {
    text: "After a difficult first pregnancy elsewhere, I chose Prolife for my second delivery. The difference was remarkable. Dr. Sujitha listened to all my concerns and created a birth plan that addressed my fears. The delivery went beautifully, and I'm so grateful for their care",
    name: " Lakshmi S",
    avatar: "L",
    rating: 5
  },
  {
    text: "he facilities at Prolife are excellent, but what really stood out was the personal attention. Every staff member knew my name and treated me with such kindness. They truly made my delivery day special.",
    name: "Divay R",
    avatar: "D",
    rating: 5
  }
];

const [openFAQ, setOpenFAQ] = useState(null);
const faqData = [
    {
      question: "How long does a normal vaginal delivery typically take?",
      answer:
        " Labor duration varies significantly between individuals. First-time mothers typically experience labor lasting 12-18 hours, while subsequent deliveries often progress faster, averaging 6-8 hours. However, every labor is unique—some progress quickly while others take longer. Our team supports you throughout, regardless of how long your labor takes."
    },
    {
      question: "What pain relief options are available during normal delivery?",
      answer:
        " We offer several options including breathing techniques, warm water therapy, massage, position changes, and medical interventions like epidurals. During your prenatal visits, we'll discuss these options so you can make informed decisions about what feels right for you."
    },
    {
      question: "Can my partner stay with me during delivery?",
      answer:
        "  Absolutely! We encourage partner participation during labor and delivery. Having your loved one present provides emotional support and makes the experience more meaningful for your family."
    },
    {
      question: "What happens if complications arise during labor?",
      answer:
        "Our experienced team continuously monitors you and your baby. If any concerns develop, we're prepared to intervene quickly. Our operation theaters are equipped for emergency cesarean sections if needed, and our multidisciplinary team can handle various complications safely."
    },
    {
      question: "When can I go home after a normal delivery?",
      answer:
        "Most mothers and babies are ready for discharge 24-48 hours after an uncomplicated normal delivery. However, we assess each case individually. If you or your baby needs additional monitoring or care, we'll extend your stay as necessary."
    },
    {
      question: "How soon can I start breastfeeding?",
      answer:
        "We encourage immediate skin-to-skin contact and breastfeeding initiation within the first hour after delivery—the golden hour. This early start benefits both you and your baby, promoting bonding and establishing successful breastfeeding."
    },
    {
      question: "What should I bring to the hospital for delivery?",
      answer:
        " Essential items include your pregnancy medical records, insurance documents, comfortable clothing for after delivery, nursing bras, basic toiletries, baby clothes, and any comfort items that help you relax. We'll provide a detailed list during your prenatal appointments."
    },
    {
      question: "Does Prolife accept health insurance for delivery?",
      answer:
        " Yes, we partner with most major insurance providers. Our administrative team can help verify your coverage and assist with claim procedures to minimize your out-of-pocket expenses."
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
          <h1 className="story-hero-title">Normal Vaginal Delivery (NVD) at Prolife Hospital, Chennai</h1>
        </div>
      </div>

      {/* PLAN PREGNANCY SECTION */}
      <section className="plan-pregnancy-section">
        <div className="plan-container">

          <div className="plan-left">
            <h2 className="plan-title">
              Experience Natural Childbirth with <br />
              <span>Expert Care </span>
            </h2>

            <p className="plan-description">
              Bringing a new life into the world through normal vaginal delivery is one of nature's most profound experiences. At Prolife Hospital, we believe in supporting this natural process while ensuring the safety and comfort of both mother and baby. As the best maternity hospital for normal delivery in Chennai, we combine compassionate care with medical expertise to make your birthing journey memorable and safe.
            </p>
            <p className="plan-description">
              Normal vaginal delivery, often called NVD, is the natural process of childbirth where your baby is born through the birth canal. Our dedicated team of obstetricians, midwives, and support staff work together to create a positive birthing environment that respects your birth plan while maintaining the highest safety standards.
            </p>
            {/* <a href="/contact" className="plan-btn">
              Book Your Consultation →
            </a> */}
          </div>

          <div className="plan-right">
            <img
              src="/images/img/pre-pregnancy1.jpg"
              alt="Pre Pregnancy Consultation"
            />
          </div>

        </div>
      </section>

      <section className="assess-section">
        <h2 className="assess-title">
          Why Choose Prolife Hospital for <span>Normal Vaginal Delivery?</span>
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
          Schedule a Consultation →
        </a>
      </section>

      <section className="timeline-section">
  <h2 className="timeline-title">How We Assist You Through Your Delivery Journey</h2>

  <div className="timeline-container">

    {/* First Trimester */}
    <div className="timeline-card">
      <div className="timeline-header">
        <span className="trimester-tag">Pre-Delivery Support</span>
      </div>
      <ul>
        <li><strong>Prenatal Consultations:</strong> Regular check-ups to monitor your pregnancy progress and identify any potential concerns early.</li>

        <li><strong>Birth Plan Discussion:</strong>  We sit with you to understand your preferences regarding pain management, birthing positions, and who you'd like present during delivery.</li>

        <li><strong>Antenatal Classes:</strong>  Educational sessions covering breathing techniques, labor stages, pain management options, and newborn care basics.</li>

        <li><strong>Nutritional Guidance:</strong>
 Our experts help you maintain optimal nutrition throughout pregnancy to support a healthy delivery.</li>
      </ul>
    </div>

    {/* Second Trimester */}
    <div className="timeline-card">
      <div className="timeline-header">
        <span className="trimester-tag">During Labor and Delivery</span>
      </div>
      <ul>
        <li><strong>Continuous Monitoring:</strong>  We track your baby's heartbeat and your contractions to ensure everything progresses smoothly.</li>
        <li><strong>Pain Management Options:</strong>  From natural techniques like breathing exercises and warm water therapy to medical options like epidurals—you decide what works best for you.</li>
        <li><strong>Emotional Support:</strong> 
 Our compassionate nursing staff stays by your side, offering encouragement and guidance through each contraction.</li>
 <li><strong>Freedom of Movement:</strong> We encourage walking and changing positions during early labor, which often helps labor progress more comfortably.</li>
 <li><strong>Partner Involvement:</strong> Your birth partner can actively participate, providing emotional support and helping with comfort measures.</li>
      </ul>
    </div>

    {/* Third Trimester */}
    <div className="timeline-card">
      <div className="timeline-header">
        <span className="trimester-tag">Immediate Postpartum Care</span>
      </div>
      <ul>
        <li><strong>Newborn Assessment: </strong> Our pediatricians conduct thorough health checks while keeping your baby close to you.</li>
        <li><strong>Breastfeeding Initiation:</strong>  We assist with the first latch within the golden hour after birth, setting the foundation for successful breastfeeding.</li>
        <li><strong>Recovery Monitoring:</strong> Our team watches for any signs of complications and ensures you're comfortable as your body begins its natural healing process</li>
      </ul>
    </div>
  </div>
      </section>

      <section className="choose-prolife">
  <div className="choose-content">
    <h2 className="choose-title">
       What to Expect When You Choose Prolife for Your Delivery
    </h2>

    <ul className="choose-list">
      <li>
        <strong>Admission Process</strong>
        <p>
          When you arrive in labor, our trained staff quickly assesses your condition and settles you into a comfortable labor room. We handle all paperwork efficiently so you can focus on your delivery.
        </p>
      </li>

      <li>
        <strong>Labor Progress</strong>
        <p>
          Your assigned obstetrician regularly checks your cervical dilation and your baby's position. We explain each stage clearly, so you know what's happening and what to expect next.
        </p>
      </li>

      <li>
        <strong>The Delivery Room Experience</strong>
        <p>
          Our delivery rooms combine functionality with comfort. Adequate lighting, climate control, and privacy ensure you feel secure. Essential medical equipment remains discreetly available while the atmosphere stays calm and supportive.
        </p>
      </li>

      <li>
        <strong>Postpartum Stay</strong>
        <p>
          After delivery, you'll move to our comfortable recovery rooms where you and your baby can bond. Our normal delivery hospital in Chennai offers personalized wards with modern amenities, allowing family members to stay with you.
        </p>
      </li>

      <li>
        <strong>Discharge and Follow-up</strong>
        <p>
          Before you head home, we provide detailed guidance on newborn care, breastfeeding, and maternal recovery. Follow-up appointments ensure both you and your baby continue thriving.
        </p>
      </li>
    </ul>
  </div>

  <div className="choose-img-wrapper">
    <img
      src="/images/img/u7.webp"
      alt="Pregnancy Care at Prolife"
      className="choose-img"
    />
  </div>
      </section>

      <section className="eligibility-section">
      <div className="eligibility-container">
        <h2 className="eligibility-title">
          Who Is <span>Normal Vaginal Delivery</span>  Suitable For? 
        </h2>
        <p className="eligibility-ptop">Normal vaginal delivery is typically appropriate for expectant mothers who:</p>

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
        <p className="eligibility-p">However, each pregnancy is different. During your prenatal visits, our doctors conduct thorough assessments including ultrasounds, pelvic examinations, and review of your medical history to determine if normal delivery is safe for you.</p> 
        <p className="eligibility-p">Even if you're planning a normal delivery, certain situations during labor might require a shift to cesarean section for safety. Our team remains prepared for all scenarios while always striving to honor your birth preferences whenever medically possible.</p>

      </div>
      </section>

      <section className="cerclage-team-section" id="team">
        <div className="container">
          <h2 className="section-title">Meet Our Expert Obstetricians</h2>


          <div className="team-grid">
            {/* Dr. Sujitha */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Sujitha R</h3>
              <p className="designation">Gynecologist</p>
              <p className="doctor-desc">
                With extensive experience in managing both routine and complex deliveries, Dr. Sujitha brings a patient-centered approach to obstetric care. Her calm demeanor and clinical expertise help mothers feel confident throughout their birthing journey.
              </p>
            </div>


            {/* Dr. Thamarai */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Thamarai</h3>
              <p className="designation">Gynecologist</p>
              <p className="doctor-desc">
                Dr. Thamarai specializes in natural childbirth and believes in empowering women through education and support. Her dedication to minimizing unnecessary interventions has helped countless mothers achieve their desired birth experiences.
              </p>
            </div>


            {/* Dr. Varshini */}
            <div className="team-card">
              <h3 className="doctor-name">Dr. Varshini</h3>
              <p className="designation">Gynecologist</p>
              <p className="doctor-desc">
               Known for her compassionate care, Dr. Varshini takes time to address each mother's concerns and questions. Her expertise in managing labor complications ensures safe outcomes even in challenging situations.
              </p>
            </div>


            {/* Anesthesiology Team */}
            <div className="team-card">
              <h3 className="doctor-name">Anesthesiology Team</h3>
              <p className="designation">
                Dr. Hari Prakash | Dr. Shalini | Dr. Nithya Priyan | Dr. Uma Maheshwari
              </p>
              <p className="doctor-desc">
               offers expert pain management to ensure safe, comfortable deliveries. Our pediatric department, led by Dr. Uma Maheshwari, is ready to assess your newborn immediately, giving your baby the best start in life.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="prolife-advance">
        <h2 className="prolife-heading">
          Why <span> Prolife Hospital</span> Stands Out
        </h2>

        <div className="prolife-feature-flow">
          {features.map((item, i) => (
            <div className="flow-line" key={i}>
              <div className="feature-dot"></div>

              <div className="feature-box">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
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
    ⭐ See More Reviews
  </a>
</section>

  {/* Care Journey Section */}
      <section className="journey-section">
        <div className="journey-container">
          <div className="journey-grid">
            <div className="journey-image">
              <div className="journey-content">
                <h2>Take the First Step Toward Your Natural Birth</h2>
                <p>Your journey to motherhood deserves expert support and compassionate care. At Prolife Hospital, we're committed to making your normal vaginal delivery a safe, comfortable, and empowering experience.</p>
                
                <button className="appointment-btn">Book Your Consultation Today</button>
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
          At Prolife Hospital, we don't just deliver babies—we support families through one of life's most transformative experiences. Let us be part of your beautiful birth story.
        </h1>
      </div>
    </section>
    </div>
  );
};

export default NormalVaginal;
