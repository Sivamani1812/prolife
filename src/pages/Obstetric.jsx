
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHeartbeat, FaUserMd, FaProcedures, FaTint, FaStethoscope, FaBed, FaPhoneAlt } from "react-icons/fa";
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

const Obstetric = () => {

    const SERVICES = [
        {
            title: "High-Risk Pregnancy Management",
            desc:
                " Specialized monitoring and care for pregnancies complicated by medical conditions, multiple gestations, or previous complications.",
            icon: faUserMd,
        },
        {
            title: "Antenatal Care",
            desc:
                "Regular pregnancy check-ups designed to detect potential problems early before they become emergencies",
            icon: faBaby,
        },
        {
            title: "Labor and Delivery Services",
            desc:
                " Comprehensive birthing services in comfortable, well-equipped labor rooms with continuous support.",
            icon: faHeartbeat,
        },
        {
            title: "Postpartum Care",
            desc:
                " Expert care during recovery after delivery, including management of postpartum complications.",
            icon: faMicroscope,
        },
        {
            title: "Fertility Services",
            desc:
                " Advanced reproductive treatments for couples facing difficulty conceiving, helping you start your pregnancy journey.",
            icon: faStethoscope,
        },
        {
            title: "Gynecology Services",
            desc:
                " Complete women's health care for conditions affecting reproductive organs outside of pregnancy.",
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
        " Heavy vaginal bleeding (soaking through a pad in an hour)",
"Severe abdominal or pelvic pain that doesn't subside",
"Sudden severe headache with vision changes or upper abdominal pain",
"Persistent vomiting preventing you from keeping down food or fluids",
"High fever (over 100.4°F) during pregnancy",
"Sudden swelling of face, hands, or feet",
"Decreased or absent fetal movement after 28 weeks",
"Leaking fluid from the vagina (possible membrane rupture)",
"Severe dizziness, fainting, or difficulty breathing",
"Contractions before 37 weeks that don't stop with rest",
,

    ];

    const reviewsData = [
        {
            text: "I experienced severe bleeding at 32 weeks and was terrified. The team at Prolife responded so quickly—within minutes I was being examined, and within an hour my baby was safely delivered. Both Dr. Sujitha and the entire staff were incredible. I'm forever grateful.",
            name: " Priya M., Manapakkam",
            avatar: "P",
            rating: 5
        },
        {
            text: "When my blood pressure spiked dangerously during labor, I didn't realize how serious it was. The doctors and nurses acted immediately, explaining everything while keeping me calm. Their quick action saved both me and my daughter.",
            name: "Lakshmi R., Mugalivakkam",
            avatar: "L",
            rating: 5
        },
        {
            text: "After complications at another hospital, I was transferred to Prolife. The difference was night and day—organized, professional, and genuinely caring. Dr. Thamarai's expertise during my emergency cesarean was outstanding.",
            name: "Anjali K., Chennai",
            avatar: "A",
            rating: 5
        }
    ];

    const [openFAQ, setOpenFAQ] = useState(null);
    const faqData = [
        {
            question: " Should I call ahead during an obstetric emergency or just come directly?",
            answer:
                " If possible, call ahead so our team can prepare for your arrival. However, if you're experiencing severe bleeding, loss of consciousness, or other life-threatening symptoms, get to the hospital immediately by the fastest means available."
        },
        {
            question: " What should I bring during an emergency visit?",
            answer:
                "If time permits, bring your pregnancy records, insurance information, and any medications you're taking. However, don't delay emergency care if you can't gather these items—we can manage without them initially."
        },
        {
            question: "Will I need surgery for every obstetric emergency?",
            answer:
                " Not necessarily. Many emergencies respond well to medications, fluids, or close monitoring. We perform emergency cesarean sections or other surgeries only when medically necessary for your safety or your baby's wellbeing."
        },
        {
            question: "Can my family stay with me during emergency treatment?",
            answer:
                "We allow one family member to stay with you in most situations. During surgery or certain procedures, they'll wait in a designated area and receive regular updates from our staff."
        },
        {
            question: " What if I need emergency care but don't have insurance?",
            answer:
                "We never turn away obstetric emergencies due to financial concerns. Our team provides necessary emergency care first, then works with you on payment arrangements afterward."
        },
        {
            question: " How quickly can you perform an emergency cesarean section?",
            answer:
                "Our team can perform a crash cesarean within 10-15 minutes of the decision when indicated for immediate fetal or maternal distress. We maintain constant readiness for such situations."
        },
        {
            question: "Do you have blood available for transfusions during emergencies?",
            answer:
                " Yes, we maintain established protocols with blood banks ensuring rapid access to blood products when hemorrhage occurs. We can arrange emergency blood typing and transfusions quickly."
        },
        {
            question: "What happens to my baby if born during an emergency at a very early gestational age?",
            answer:
                "Our pediatric team led by Dr. Uma Maheshwari provides immediate neonatal resuscitation and stabilization. For extremely premature babies, we coordinate transfer to specialized NICUs if needed while ensuring continuous care."
        },
    ];
    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const emergencies = [
    {
      title: "Severe Bleeding",
      desc: "Rapid management for antepartum or postpartum hemorrhage, including placental issues and uterine rupture.",
    },
    {
      title: "Pre-eclampsia & Eclampsia",
      desc: "Immediate treatment for severe high blood pressure to prevent seizures and organ damage.",
    },
    {
      title: "Placental Abruption",
      desc: "Quick response when the placenta separates early, protecting both mother and baby.",
    },
    {
      title: "Cord Prolapse",
      desc: "Emergency surgical intervention when the umbilical cord drops through the cervix.",
    },
    {
      title: "Obstructed Labor",
      desc: "Timely surgical delivery when labor stops progressing despite contractions.",
    },
    {
      title: "Ruptured Ectopic Pregnancy",
      desc: "Emergency surgery to prevent life-threatening internal bleeding.",
    },
    {
      title: "Severe Preterm Labor",
      desc: "Management of early contractions with medications or planned delivery.",
    },
    {
      title: "Fetal Distress",
      desc: "Continuous monitoring with rapid action when baby’s oxygen supply is compromised.",
    },
  ];

  const services1 = [
    {
      icon: <FaStethoscope />,
      title: "Immediate Triage & Assessment",
      desc: "Our team rapidly evaluates your condition and prioritizes critical cases with clear communication.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Advanced Fetal Monitoring",
      desc: "Continuous monitoring of your baby’s heartbeat and contractions for early detection of distress.",
    },
    {
      icon: <FaProcedures />,
      title: "Emergency Surgical Support",
      desc: "Fully equipped operation theatres ready for urgent cesareans and surgical interventions.",
    },
    {
      icon: <FaTint />,
      title: "Blood Transfusion Services",
      desc: "Fast blood typing, cross-matching, and transfusion procedures for effective hemorrhage control.",
    },
    {
      icon: <FaUserMd />,
      title: "Intensive Maternal Monitoring",
      desc: "Close observation in high-dependency units for vitals, fluids, and medication response.",
    },
    {
      icon: <FaBed />,
      title: "Emergency Pain Management",
      desc: "Anesthesiology team ensures safe and effective pain relief even during urgent situations.",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Family Communication",
      desc: "We keep your family informed while respecting your privacy during emergencies.",
    },
  ];

  const doctors = [
  {
    name: "Dr. Sujitha R",
    role: "Gynecologist",
    img: "/images/doctors/sujitha.jpg",
    desc: "Expert in high-risk pregnancies & obstetric emergencies. Known for her calm, compassionate approach during critical procedures.",
  },
  {
    name: "Dr. Thamarai",
    role: "Gynecologist",
    img: "/images/doctors/thamarai.jpg",
    desc: "Specialist in complex obstetric cases with quick clinical decision-making and exceptional surgical expertise.",
  },
  {
    name: "Dr. Varshini",
    role: "Gynecologist",
    img: "/images/doctors/varshini.jpg",
    desc: "Respected for her gentle approach and clear communication, ensuring patients understand emergency treatment steps.",
  },
  {
    name: "Dr. Shalini",
    role: "Anesthetist",
    img: "/images/doctors/shalini.jpg",
    desc: "Provides safe, precise obstetric anesthesia with continuous monitoring of maternal & fetal wellbeing.",
  },
  {
    name: "Dr. Nithya Priyan",
    role: "Anesthetist",
    img: "/images/doctors/nithya.jpg",
    desc: "Specialized in rapid-sequence anesthesia for emergency C-sections, ensuring smooth and safe surgical experiences.",
  },
  {
    name: "Dr. Hari Prakash",
    role: "Anesthetist",
    img: "/images/doctors/hari.jpg",
    desc: "Known for vigilant monitoring and expert anesthetic support during critical obstetric surgeries.",
  },
  {
    name: "Dr. Uma Maheshwari",
    role: "Pediatrician",
    img: "/images/doctors/uma.jpg",
    desc: "Leads neonatal emergency care, providing immediate specialized support for babies born in crisis situations.",
  },
];

  const trustPoints = [
  {
    title: "Patient-Centered Emergency Care",
    desc: "Even during urgent situations, we treat you as a person, not just a medical case. Your dignity and emotional needs always come first."
  },
  {
    title: "Transparent Communication",
    desc: "We explain what's happening, why treatment is needed, and what to expect next—even during time-critical emergencies."
  },
  {
    title: "Family Involvement",
    desc: "Whenever medically appropriate, we keep your loved ones informed and support their presence to keep you emotionally strong."
  },
  {
    title: "Comfortable Facilities",
    desc: "Air-conditioned rooms, private consulting spaces, and modern amenities support comfort and recovery after emergency care."
  },
  {
    title: "Affordable Excellence",
    desc: "Best-in-class emergency obstetric care at accessible pricing, along with support for major insurance providers."
  },
  {
    title: "Convenient Chennai Locations",
    desc: "Two easily accessible centers in Manapakkam and Mugalivakkam ensure emergency help is always close by."
  },
  {
    title: "Comprehensive On-Site Services",
    desc: "24/7 pharmacy, labs, and blood bank ensure nothing delays your treatment during emergencies."
  }
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
                    <h1 className="story-hero-title"> Obstetric Emergencies Care at Prolife Hospital, Chennai</h1>
                </div>
            </div>

            {/* PLAN PREGNANCY SECTION */}
            <section className="plan-pregnancy-section">
                <div className="plan-container">

                    <div className="plan-left">
                        <h2 className="plan-title">
                            Expert Emergency Obstetric Care When   <br />
                            <span> Every Moment Counts</span>
                        </h2>

                        <p className="plan-description">
                            When pregnancy complications arise unexpectedly, immediate specialized care can make all the difference. At Prolife Hospital, our dedicated team provides round-the-clock emergency obstetric services, combining advanced medical technology with compassionate expertise to safeguard both mother and baby during critical moments.
                        </p>
                        <p className="plan-description">
                            Located in Chennai's Manapakkam and Mugalivakkam areas, we stand ready 24/7 to handle any pregnancy-related emergency with swift, skilled intervention that prioritizes your safety and peace of mind.
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
                        Why Choose <span>Prolife Hospital</span>for Obstetric Emergency Care?
                    </h2>

                    <ul className="choose-list">
                        <li>
                            <strong>Rapid Response, Expert Hands</strong>
                            <p>
                                Obstetric emergencies demand immediate action and precise clinical judgment. Our emergency obstetric care unit operates seamlessly around the clock, staffed by experienced obstetricians, anesthetists, and nursing specialists who understand that minutes matter.
                            </p>
                        </li>

                        <li>
                            <strong>What Sets Our Emergency Care Apart:</strong>
                            <p>
                                24/7 Specialist Availability – Our senior gynecologists and anesthetists including Dr. Sujitha R, Dr. Thamarai, and Dr. Varshini remain on-call at all times, ensuring consultant-level care isn't delayed until "morning rounds."
                            </p>
                        </li>

                        <li>
                            <strong>Advanced Modular Operation Theatres</strong>
                            <p>
                               Fully equipped surgical suites ready for emergency cesarean sections, with modern monitoring systems and life-saving equipment immediately accessible.

                            </p>
                        </li>

                        <li>
                            <strong>Integrated Care Team Approach</strong>
                            <p>
                               Collaboration between obstetricians, anesthetists like Dr. Shalini and Dr. Nithya Priyan, pediatricians, and support staff ensures comprehensive management of complex emergencies.

                            </p>
                        </li>

                        <li>
                            <strong>Blood Bank Coordination</strong>
                            <p>
                                 Established protocols with blood banks guarantee rapid access to transfusion services when hemorrhage occurs.
                            </p>
                        </li>

                         <li>
                            <strong>NICU Readiness</strong>
                            <p>
                                Should your baby require immediate specialized care, our pediatric team led by Dr. Uma Maheshwari provides seamless neonatal support.
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

             <section className="ob-section">
      <div className="ob-container">
        <h2 className="ob-title">Common Obstetric Emergencies We Manage</h2>
        <p className="ob-sub">
          Understanding common obstetric emergencies in pregnancy helps expectant
          mothers recognize warning signs early. We provide expert management for:
        </p>

        <div className="ob-grid">
          {emergencies.map((item, index) => (
            <div className="ob-card" key={index}>
              <div className="ob-marker"></div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="ea-section">
      <div className="ea-container">
        <h2 className="ea-title">Our Comprehensive Emergency Assistance</h2>
        <p className="ea-sub">
          What We Provide During Critical Moments
        </p>

        <div className="ea-grid">
          {services1.map((item, index) => (
            <div className="ea-card" key={index}>
              <div className="ea-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    
            <section className="timeline-section">
                <h2 className="timeline-title">Your Emergency Care Journey at Prolife</h2>  
                <h4>From Arrival to Recovery</h4>

                <div className="timeline-container">

                    <div className="timeline-card">
                        <div className="timeline-header">
                            <span className="trimester-tag">Step 1: Emergency Admission</span>
                        </div>
                        <ul>
                            <li>Call ahead at 8220305887 / 7305737051 / 9790896211 or arrive directly. Our reception desk fast-tracks obstetric emergencies to the labor ward immediately.</li>
                        </ul>
                    </div>
                    <div className="timeline-card">
                        <div className="timeline-header">
                            <span className="trimester-tag">Step 2: Rapid Evaluation</span>
                        </div>
                        <ul>
                            <li> An experienced obstetrician examines you promptly, reviews any previous pregnancy records, and orders necessary urgent investigations like ultrasound or blood tests.</li>
                        </ul>
                    </div>
                    <div className="timeline-card">
                        <div className="timeline-header">
                            <span className="trimester-tag">Step 3: Stabilization and Treatment</span>
                        </div>
                        <ul>
                            <li> Whether you need medications to control blood pressure, fluids for dehydration, or immediate surgery, our team initiates treatment without delay.</li>
                        </ul>
                    </div>
                    <div className="timeline-card">
                        <div className="timeline-header">
                            <span className="trimester-tag">Step 4: Continuous Monitoring </span>
                        </div>
                        <ul>
                            <li>Throughout your emergency care, nursing staff maintain close observation, documenting your response to treatment and alerting doctors to any changes.</li>
                        </ul>
                    </div>
                    <div className="timeline-card">
                        <div className="timeline-header">
                            <span className="trimester-tag">Step 5: Delivery or Surgical Intervention </span>
                        </div>
                        <ul>
                            <li> When emergency delivery becomes necessary, our operation theatre team assembles within minutes. Our anesthetists ensure safe anesthesia while surgeons perform necessary procedures efficiently.</li>
                        </ul>
                    </div>
                    <div className="timeline-card">
                        <div className="timeline-header">
                            <span className="trimester-tag">Step 6: Post-Emergency Care</span>
                        </div>
                        <ul>
                            <li> After stabilization or delivery, you receive attentive postoperative or postpartum care in our comfortable, well-equipped recovery areas until you're ready for transfer to standard wards.</li>
                        </ul>
                    </div>
                    <div className="timeline-card">
                        <div className="timeline-header">
                            <span className="trimester-tag">Step 7: Follow-up Planning</span>
                        </div>
                        <ul>
                            <li> Before discharge, we schedule follow-up appointments, provide clear instructions for home care, and ensure you understand warning signs requiring return visits.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="services-section">
                <h2 className="services-title">Who Needs Emergency Obstetric Care?</h2> 

                <p className="services-p">Our emergency services support:</p>

                <div className="services-grid">
                    {/* Regular Antenatal Checkups */}
                    <div className="service-card">
                        <h3>Pregnant Women at Any Gestational Age</h3>
                        <p> From early pregnancy complications to full-term emergencies, we provide appropriate care regardless of how far along you are.</p>
                    </div>

                    {/* Ultrasound Scans */}
                    <div className="service-card">
                        <h3>High-Risk Pregnancy Patients</h3>
                        <p>Those with pre-existing conditions like diabetes, hypertension, or previous cesarean sections receive specialized emergency management.</p>
                    </div>

                    {/* Complications */}
                    <div className="service-card">
                        <h3>First-Time Mothers </h3>
                        <p>Facing unexpected complications without previous experience can feel overwhelming. Our team guides you through with clear explanations and reassurance.</p>
                    </div>

                    {/* Childbirth Preparation */}
                    <div className="service-card">
                        <h3>Women with Previous Pregnancy Losses</h3>
                        <p>We understand your heightened anxiety and provide both medical care and emotional support during emergencies.</p>
                    </div>

                    {/* Delivery Support */}
                    <div className="service-card">
                        <h3>Patients from Other Facilities </h3>
                        <p>CWe accept referrals from smaller clinics or hospitals lacking specialized obstetric emergency capabilities.</p>
                    </div>

                    {/* Postpartum Care */}
                    <div className="service-card">
                        <h3>Anyone Experiencing Warning Symptoms</h3>
                        <p>Severe abdominal pain, heavy bleeding, severe headaches with vision changes, decreased fetal movement, sudden swelling, or persistent vomiting warrant immediate evaluation.</p>
                    </div>
                </div>
            </section>


    <section className="doc-section">
            <div className="doc-container">
        
                  <h2 className="doc-title">Meet Our Emergency Obstetric Team</h2>
                  <p className="doc-sub">Experienced Specialists Ready When You Need Them</p>

                 <div className="doc-grid">
                   {doctors.map((doc, index) => (
                 <div className="doc-card" key={index}>
                 <div className="doc-img">
                     <img src={doc.img} alt={doc.name} />
                </div>

                <h3>{doc.name}</h3>
                <span className="doc-role">{doc.role}</span>
              <p className="doc-desc">{doc.desc}</p>
            </div>
          ))}
        </div>
        <p className="doc-footer">
          Our multidisciplinary team ensures seamless collaboration between obstetricians, anesthetists, pediatricians, and skilled nurses for the highest level of emergency care.
        </p>
      </div>
    </section>

    <section className="trust-section">
      <div className="trust-container">

        <h2 className="trust-title">Why Families Trust Prolife Hospital</h2>
        <p className="trust-sub">Beyond Medical Excellence</p>

        <div className="trust-flow">
          {trustPoints.map((item, index) => (
            <div className="trust-item" key={index}>
              <div className="dot-line">
                <span className="dot"></span>
                <span className="line"></span>
              </div>

              <div className="trust-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
 
{/* Reviews Section */ }
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

            <section className="eligibility-section">
                <div className="eligibility-container">
                    <h2 className="eligibility-title">
                        Recognize the Warning Signs 
                    </h2>
                    <h3 className="services-p">When to Seek Emergency Obstetric Care Immediately</h3>

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
                        <p>Remember: It's always better to have an emergency evaluated and find everything is fine than to wait and risk complications. We never consider your concerns trivial.</p>
                    </div>
                </div>
            </section>

            {/* Care Journey Section */ }
            <section className="journey-section">
                <div className="journey-container">
                    <div className="journey-grid">
                        <div className="journey-image">
                            <div className="journey-content">
                                <h2>Take Action Now </h2>
                                <h3>Don't Wait During Pregnancy Emergencies</h3>
                                <p>If you're experiencing any concerning symptoms, call us immediately:</p>
                                <p> <b>Emergency Contact Numbers:</b> <br />
                                    8220305887 | 7305737051 | 9790896211 </p>
                                <p><b>Emergency Care:</b> <br /> Available 24/7</p>
                                <button className="appointment-btn">Book an Emergency Consultation → </button>
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
                        Related Services You Might Find Helpful
                    </h2>

                    <p className="rs-sub">
                       Comprehensive Maternity Care at Prolife
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

            <section className="prepare-section">
      <div className="prepare-container">

        <h2 className="prepare-title">Preparing for the Unexpected</h2>
        <p className="prepare-sub">Prevention and Awareness</p>

        <div className="prepare-content">
          <p>
            While we stand ready for any emergency, prevention remains ideal.
            Attend all scheduled antenatal appointments, follow your doctor's
            advice regarding warning signs, maintain open communication about
            concerning symptoms, and know the fastest route to our hospital.
          </p>

          <p>
            Keep our emergency numbers saved in your phone, inform family
            members about warning signs requiring immediate medical attention,
            and trust your instincts—if something feels seriously wrong, seek
            evaluation immediately.
          </p>

          <p>
            At Prolife Hospital, your safety during pregnancy is our highest
            priority. We combine cutting-edge medical capabilities with genuine
            human compassion, ensuring that when unexpected complications arise,
            you receive both the expert clinical care and emotional support you
            need.
          </p>

          <div className="prepare-cta-box">
            <h3>Your pregnancy emergency deserves immediate expert attention.</h3>
            <p>Contact Prolife Hospital now.</p>
            <p className="prepare-numbers">
              📞 8220305887 &nbsp;|&nbsp; 7305737051 &nbsp;|&nbsp; 9790896211
            </p>
          </div>

        </div>
      </div>
    </section>
        </div >
    );
    };

export default Obstetric;
