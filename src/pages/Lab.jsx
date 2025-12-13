// Lab.jsx
import React, { useState } from "react";

const Lab = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const cards = [
    {
      title: "Accuracy You Can Trust",
      text: "Our laboratory uses internationally calibrated equipment and follows strict quality control protocols. Every sample gets handled with precision and verified by experienced pathologists."
    },
    {
      title: "24/7 Availability—Test Anytime",
      text: "Medical emergencies don't follow office hours. Our diagnostic centre operates round the clock. Urgent test at 2 AM? We're ready."
    },
    {
      title: "Reports Delivered Fast",
      text: "Routine tests within 6-12 hours. Specialized tests within 24-48 hours. Critical results communicated immediately to your doctor."
    },
    {
      title: "Advanced Technology Meets Expert Analysis",
      text: "Modern automated analyzers ensure consistency. Our qualified lab technicians and pathologists review every result."
    },
    {
      title: "Affordable Pricing with Transparency",
      text: "Healthcare packages for regular monitoring. Individual tests priced reasonably. No hidden charges."
    },
    {
      title: "Convenient Locations Across Chennai",
      text: "Main Laboratory at Manapakkam. Women's Centre at Mugalivakkam. Home sample collection service available."
    }
  ];

  const services = [
    {
      title: "Clinical Pathology",
      items: [
        "Complete Blood Count (Hemoglobin, WBC, Platelet count)",
        "Blood group and Rh typing",
        "ESR and bleeding/clotting time",
        "Peripheral smear examination",
        "Anemia profile and investigations"
      ]
    },
    {
      title: "Clinical Biochemistry",
      items: [
        "Liver function tests (SGOT, SGPT, Bilirubin)",
        "Kidney function tests (Creatinine, Urea, Uric acid)",
        "Lipid profile (Cholesterol, Triglycerides, HDL, LDL)",
        "Diabetic markers (Fasting glucose, HbA1c, Postprandial sugar)",
        "Electrolyte panels (Sodium, Potassium, Chloride)",
        "Thyroid function tests (T3, T4, TSH)",
        "Cardiac markers (Troponin, CPK-MB)"
      ]
    },
    {
      title: "Hormone Analysis",
      items: [
        "Fertility hormones (FSH, LH, Prolactin, AMH)",
        "Pregnancy hormones (Beta-HCG quantitative)",
        "Testosterone and DHEA-S levels",
        "Cortisol and growth hormone testing",
        "Complete hormonal panels for PCOS and thyroid disorders"
      ]
    },
    {
      title: "Infectious Disease Screening",
      items: [
        "HIV, Hepatitis B and C testing",
        "Dengue NS1 antigen and antibodies",
        "Typhoid (Widal test and blood culture)",
        "Malaria parasite detection",
        "COVID-19 RT-PCR and antibody tests",
        "STD screening panels",
        "Tuberculosis diagnostic tests"
      ]
    },
    {
      title: "Pregnancy & Prenatal Testing",
      items: [
        "Complete antenatal screening packages",
        "Double marker and triple marker tests",
        "Gestational diabetes screening (GTT)",
        "TORCH infection screening",
        "Group B Streptococcus testing",
        "Pregnancy confirmation (Urine and blood HCG)"
      ]
    },
    {
      title: "Urine & Stool Analysis",
      items: [
        "Complete urine examination (Routine and microscopy)",
        "Urine culture and sensitivity",
        "24-hour urine protein and creatinine",
        "Stool routine and occult blood testing",
        "Stool culture for infections"
      ]
    },
    {
      title: "Microbiology & Culture Tests",
      items: [
        "Blood culture and sensitivity",
        "Urine culture and antibiotic sensitivity",
        "Pus and wound culture",
        "Throat and sputum culture",
        "Body fluid analysis"
      ]
    },
    {
      title: "Histopathology & Cytology",
      items: [
        "Biopsy examination and tissue analysis",
        "Pap smear for cervical cancer screening",
        "Fine needle aspiration cytology (FNAC)",
        "Endometrial biopsy analysis"
      ]
    },
    {
      title: "Specialized Cancer Markers",
      items: [
        "CA-125 for ovarian cancer screening",
        "CEA for gastrointestinal cancers",
        "PSA for prostate health",
        "AFP and other tumor markers"
      ]
    }
  ];

  const packages = [
    {
      title: "",
      description:
        "Fertility Testing Packages\nComplete hormonal profile for women (FSH, LH, Prolactin, AMH, Thyroid)\nSemen analysis for male fertility evaluation\nAnti-Mullerian hormone testing for ovarian reserve\nComprehensive fertility workup for couples",
    },
    {
      title: "Pregnancy Monitoring Panels",
      description:
        "First trimester screening with complete blood work\nGestational diabetes testing (Glucose tolerance test)\nAnemia and iron deficiency screening\nInfection screening (TORCH panel, Hepatitis, HIV)\nThird trimester readiness tests",
    },
     {
      title: "Nutritional Deficiency Tests",
      description:
        "Vitamin D levels\nVitamin B12 and folate\nCalcium, magnesium, and iron studies",
    },
    {
      title: "Diabetes Management Tests",
      description:
        "Fasting and postprandial glucose\nHbA1c for long-term sugar control\nInsulin levels and resistance testing\nDiabetic kidney function monitoring",
    },
    {
      title: "Thyroid Disorder Evaluation",
      description:
        "Complete thyroid profile (T3, T4, TSH)\nThyroid antibody tests\nFree T3 and Free T4 for detailed assessment",
    },
    {
      title: "Heart Health Screening",
      description:
        "Complete lipid profile\nCardiac risk markers (Troponin, CPK-MB)\nHomocysteine and hs-CRP testing",
    },
    {
      title: "Liver & Kidney Health Panels",
      description:
        "Comprehensive liver function tests\nComplete kidney function assessment\nElectrolyte balance monitoring",
    },
    {
      title: "Autoimmune & Allergy Testing",
      description:
        "ANA profile for autoimmune conditions\nRheumatoid factor and CRP\nIgE levels and allergy-specific tests",
    },
   
  ];

   const steps = [
  {
    icon: <i className="fa-solid fa-file-medical fa-2x"></i>,
    title: "Step 1: Test Booking",
    desc: "Walk into any Prolife Hospital, call, book online or request home sample collection.",
  },
  {
    icon: <i className="fa-solid fa-syringe fa-2x"></i>,
    title: "Step 2: Sample Collection",
    desc: "Trained phlebotomists ensure comfortable sample collection with special pediatric care.",
  },
  {
    icon: <i className="fa-solid fa-vial fa-2x"></i>,
    title: "Step 3: Laboratory Processing",
    desc: "Advanced analyzers + strict quality control for accurate results.",
  },
  {
    icon: <i className="fa-solid fa-file-waveform fa-2x"></i>,
    title: "Step 4: Report Generation",
    desc: "Pathologists verify all results & reports are easy to interpret.",
  },
  {
    icon: <i className="fa-solid fa-paper-plane fa-2x"></i>,
    title: "Step 5: Report Delivery",
    desc: "Printed or digital reports via email/portal — shared with doctor if authorized.",
  },
];



  const imgSrc =
    "/images/img/d7.png";

    
  const faqData = [
    {
      question: "Do I need a doctor's prescription for lab tests?",
      answer:
        " Most routine tests don't require prescriptions. However, specialized tests and investigations typically need a doctor's order. Our physicians can also guide test selection if you're unsure."
    },
    {
      question: "How long do test results take?",
      answer:
        "Routine blood tests: 6-12 hours. Specialized hormone tests: 24 hours. Culture tests: 48-72 hours. Histopathology: 3-5 days. Critical results are communicated immediately."
    },
    {
      question: "Can I get tested without fasting?",
      answer:
        " Many tests don't require fasting. CBC, thyroid tests, most hormonal assays can be done anytime. Fasting is essential only for glucose tests, lipid profiles, and certain liver function tests."
    },
    {
      question: "Do you accept insurance for lab tests?",
      answer:
        "Yes, we partner with major insurance providers. Bring your insurance card and policy details. Our billing team verifies coverage before testing."
    },
    {
      question: "Is home sample collection safe and sterile?",
      answer:
        "Absolutely. Our technicians use the same sterile equipment and protocols as hospital collection. Samples are transported in temperature-controlled conditions to maintain integrity."
    },
    {
      question: "What if my results are abnormal?",
      answer:
        "Abnormal results don't always indicate serious problems. Our doctors are available to interpret reports and guide next steps. You can book a consultation to discuss findings."
    },
    {
      question: "Can I get my previous reports from Prolife?",
      answer:
        "Yes. Visit our reception with valid ID, or email us requesting previous reports. Digital copies are stored securely in our system."
    },
     {
      question: "Do you test children?",
      answer:
        "Yes. Our staff is trained in pediatric sample collection with minimal discomfort. Parents can stay with children throughout the process."
    },
     {
      question: "How accurate are your pregnancy tests?",
      answer:
        "Our blood HCG tests detect pregnancy as early as 6-8 days after conception with over 99% accuracy. Urine tests are also highly reliable but blood tests are definitive."
    },
     {
      question: "Can I walk in without an appointment?",
      answer:
        "Yes. No appointment needed for routine tests. However, booking ahead for home collection or specific time slots is recommended."
    }
  ];
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
 
 const relatedServices = [
  {
    title: "Pregnancy Care",
    desc: "Comprehensive antenatal monitoring with regular lab testing throughout your pregnancy.",
    icon: <i className="fa-solid fa-baby fa-2x"></i>,
  },
  {
    title: "Fertility Treatment",
    desc: "Complete fertility evaluation including hormonal testing and semen analysis.",
    icon: <i className="fa-solid fa-heart-pulse fa-2x"></i>,
  },
  {
    title: "PCOS Management",
    desc: "Hormonal panels and metabolic screening for PCOS treatment.",
    icon: <i className="fa-solid fa-dna fa-2x"></i>,
  },
  {
    title: "Thyroid Treatment",
    desc: "Complete thyroid workup with follow-up testing to monitor treatment effectiveness.",
    icon: <i className="fa-solid fa-ribbon fa-2x"></i>,
  },
  {
    title: "General Medicine",
    desc: "Health checkups and diagnostic support for illness and chronic conditions.",
    icon: <i className="fa-solid fa-stethoscope fa-2x"></i>,
  }
];


  return (
    <div>
      {/* Hero Section */}
      <div className="story-hero-banner">
        <img
          src="./images/img/g-bg.webp"
          alt="Our Story Banner"
          className="story-hero-image"
        />
        <div className="story-hero-overlay">
          <h1 className="story-hero-title">Best Diagnostic Lab in Chennai
          </h1>
        </div>
      </div>

      {/* Lab Section */}
    <section className="fetal-section">
        <div className="fetal-section-container">
          <div className="fetal-section-content">
            <h2 className="fetal-section-title">Comprehensive Laboratory Services at Prolife Hospital</h2>
            <p className="fetal-section-text">
              Your health decisions start with accurate answers. Whether it's a routine checkup, pregnancy monitoring, or investigating symptoms that won't go away—reliable test results change everything.
            </p>
            <p className="fetal-section-text">
              At Prolife Hospital's diagnostic lab in Chennai, we deliver precise reports fast. Our 24/7 lab services in Chennai mean you get tested when it's convenient for you, not when a lab happens to be open. From basic blood work to advanced diagnostic tests, we handle it all under one roof.
            </p>
          </div>

          <div className="fetal-section-image">
            <img src="./images/img/lab.webp" alt="Lab" />
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <h2 className="why-choose-title">Why Choose Prolife Hospital Laboratory?</h2>
        <div className="why-choose-cards">
          {cards.map((card, index) => (
            <div key={index} className="choose-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
        <div className="lab-cta">
          <button>Explore Our Lab Services</button>
        </div>
      </section>

      <section className="diagnostic-lab-section">
        <h2 className="diagnostic-title">Our Diagnostic Lab Services</h2>
        <div className="diagnostic-cards">
          {services.map((service, index) => (
            <div key={index} className="diagnostic-card fade-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="diagnostic-cta">
          <button>Not sure which test you need? Consult Our Doctors</button>
        </div>
      </section>

      <section className="gynaecology-section">
        <h2 className="section-title-lab">Specialized Tests Available</h2>

        <div className="gynaecology-container">
          <div className="gynaecology-column left">
            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-hospital"></i><i class=""></i>
              </div>
              <div>
                <h3>Fertility Testing Packages</h3>
                <p>
                  Complete hormonal profile for women (FSH, LH, Prolactin, AMH, Thyroid) Semen analysis for male fertility evaluation Anti-Mullerian hormone testing for ovarian reserve Comprehensive fertility workup for couples
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-user-nurse"></i>
              </div>
              <div>
                <h3>Heart Health Screening</h3>
                <p>Complete lipid profile Cardiac risk markers (Troponin, CPK-MB) Homocysteine and hs-CRP testing
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-baby"></i>
              </div>
              <div>
                <h3>Diabetes Management Tests</h3>
                <p>
                  Fasting and postprandial glucose HbA1c for long-term sugar control Insulin levels and resistance testing Diabetic kidney function monitoring
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-flask"></i>

              </div>
              <div>
                <h3>Autoimmune & Allergy Testing</h3>
                <p>
                  ANA profile for autoimmune conditions Rheumatoid factor and CRP IgE levels and allergy-specific tests
                </p>
              </div>
            </div>
          </div>

          <div className="doctor-image">
            <img src="/images/img/lab-2.jpg" alt="Doctor" />
          </div>

          <div className="gynaecology-column right">
            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-vials"></i>
              </div>
              <div>
                <h3>Thyroid Disorder Evaluation
                </h3>
                <p>
                  Complete thyroid profile (T3, T4, TSH) Thyroid antibody tests Free T3 and Free T4 for detailed assessment
                </p>
              </div>
            </div>


            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div>
                <h3>Pregnancy Monitoring Panels</h3>
                <p>
                  First trimester screening with complete blood work Gestational diabetes testing (Glucose tolerance test) Anemia and iron deficiency screening Infection screening (TORCH panel, Hepatitis, HIV) Third trimester readiness tests
                </p>
              </div>
            </div>



            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-hand-holding-heart"></i>
              </div>
              <div>
                <h3>Liver & Kidney Health Panels</h3>
                <p>
                  Comprehensive liver function tests Complete kidney function assessment Electrolyte balance monitoring
                </p>
              </div>
            </div>
            <div className="feature-box">
              <div className="icon-circle">
                <i className="fa-solid fa-vial-virus"></i>
              </div>
              <div>
                <h3>Nutritional Deficiency Tests</h3>
                <p>
                  Vitamin D levels Vitamin B12 and folate Calcium, magnesium, and iron studies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      
<section className="lab-section">
  <h2 className="lab-title">How Our Lab Works</h2>

  <div className="lab-grid">
    {steps.map((s, i) => (
      <div key={i} className="lab-card">
        <div className="icon">{s.icon}</div>
        <h3>{s.title}</h3>
        <p>{s.desc}</p>
      </div>
    ))}
  </div>

  <div className="btn-wrapper">
    <button className="cta-btn">Book Your Test Today →</button>
  </div>
</section>


      <section className="expert-wrapper">
        <div className="expert-container">
          {/* Content Left */}
          <div className="expert-content">
            <h2>Meet Our Lab Experts</h2>

            <h3>Dr. Sathya Moorthy</h3>
            <p className="designation">General Physician & Lab Coordinator</p>

            <p className="details">
              Oversees clinical correlation of lab results with patient symptoms.
              Ensures diagnostic accuracy and guides appropriate testing protocols.
            </p>

            <ul className="highlights">
              <li>15+ years experience</li>
              <li>Board-certified specialist</li>
              <li>Expert in quality control</li>
              <li>Advanced diagnostic knowledge</li>
            </ul>

            <button className="talk-btn">Talk to Our Team →</button>
          </div>

          {/* Image Right */}
          <div className="expert-img-box">
            <img
              src={imgSrc}
              alt="Lab Expert Doctor"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="home-collection-wrapper">
        <div className="home-collection-container">

          <div className="home-collection-content">
            <h2>Home Sample Collection</h2>
            <p className="sub-text">Can't visit the hospital? We come to you.</p>

            {/* What we collect */}
            <div className="collection-box">
              <h3>What We Collect at Home</h3>
              <ul>
                <li>Blood samples for routine & specialized tests</li>
                <li>Urine & stool tests with sterile kits</li>
                <li>Pregnancy monitoring tests</li>
                <li>Diabetic & thyroid panels</li>
              </ul>
            </div>

            {/* Coverage */}
            <div className="coverage-box">
              <h3>Coverage Areas</h3>
              <p>
                Manapakkam, Mugalivakkam, Porur, Ramapuram, Vadapalani,
                Ashok Nagar, KK Nagar, Virugambakkam & nearby Chennai areas.
              </p>
            </div>

            {/* How it Works */}
            <div className="steps-box">
              <h3>How It Works</h3>
              <ol>
                <li>Call us or book online mentioning home collection</li>
                <li>Our trained technician arrives as scheduled</li>
                <li>Hospital-grade sterile sample handling</li>
                <li>Reports delivered digital or direct to doctor</li>
              </ol>
            </div>

            {/* Charges */}
            <div className="charges-box">
              <h3>Home Collection Charges</h3>
              <p>Nominal fee based on location & test type.</p>
              <p className="highlight">👉 Free home collection on full health packages!</p>
            </div>

            {/* CTA */}
            <button className="schedule-btn">
              Schedule Home Sample Collection →
            </button>
          </div>
        </div>
      </section>

      <section className="frequent-tests-section">
        <h2 className="frequent-tests-title">Frequently Booked Tests</h2>

        <div className="tests-grid">
          {[
            "Complete Blood Count (CBC)",
            "Thyroid Profile",
            "HbA1c",
            "Lipid Profile",
            "Liver Function Test",
            "Kidney Function Test",
            "Pregnancy Confirmation (Beta-HCG)",
            "Vitamin D Levels",
            "Iron Studies",
            "Dengue Test",
          ].map((test, idx) => (
            <div key={idx} className="test-chip">
              <span className="test-icon">🧪</span> {test}
            </div>
          ))}
        </div>

        <div className="test-cta">
          <button>View Complete Test Menu</button>
        </div>
      </section>
      
<section className="patient-info-section">
  <h2 className="patient-info-title">Patient Information</h2>

  <div className="info-blocks">
    
    {/* Preparing */}
    <div className="info-card fade-info">
      <div className="info-icon">
        <i className="fa-solid fa-apple-whole fa-2x"></i>
      </div>
      <div>
        <h3>Preparing for Your Lab Test</h3>
        <ul>
          <li><strong>Fasting Tests:</strong> No food for 10–12 hours before sample collection.</li>
          <li><strong>Non-Fasting Tests:</strong> Can be done anytime.</li>
          <li><strong>Medication:</strong> Continue unless doctor advises otherwise.</li>
          <li><strong>Timing:</strong> Morning samples preferred for hormone tests.</li>
        </ul>
      </div>
    </div>

    {/* What to bring */}
    <div className="info-card fade-info">
      <div className="info-icon">
        <i className="fa-solid fa-file-lines fa-2x"></i>
      </div>
      <div>
        <h3>What to Bring</h3>
        <ul>
          <li>Doctor's prescription or lab request form</li>
          <li>Valid ID proof</li>
          <li>Previous reports (if available)</li>
        </ul>
      </div>
    </div>

    {/* Report understanding */}
    <div className="info-card fade-info">
      <div className="info-icon">
        <i className="fa-solid fa-chart-column fa-2x"></i>
      </div>
      <div>
        <h3>Understanding Your Report</h3>
        <ul>
          <li>Reference ranges help interpret medical values</li>
          <li>Values outside range don’t always mean disease</li>
          <li>Always consult your doctor for interpretation</li>
        </ul>
      </div>
    </div>

    {/* Report validity */}
    <div className="info-card fade-info">
      <div className="info-icon">
        <i className="fa-solid fa-calendar-days fa-2x"></i>
      </div>
      <div>
        <h3>Report Validity</h3>
        <ul>
          <li>Blood Group: Permanent</li>
          <li>Lipid Profile: Valid 3–6 months</li>
          <li>Infection Screening: Valid 1–3 months</li>
        </ul>
      </div>
    </div>

  </div>

  <div className="patient-cta">
    <button>Need Help Understanding Your Report? Consult Our Doctors</button>
  </div>
</section>


      <section className="patient-testimonials-section">
        <h2 className="testimonials-title">What Our Patients Say</h2>

        <div className="testimonials-wrapper">

          {[
            {
              text: `I needed urgent blood work at 11 PM during my pregnancy emergency. Prolife's 24/7 lab services saved the day. Results came within hours, and the staff was so caring.`,
              name: "Lakshmi K.",
              place: "Manapakkam"
            },
            {
              text: `After mismatched reports from other labs, Prolife gave accurate results my doctor trusted. Finally found the right treatment for my thyroid issue.`,
              name: "Rajesh M.",
              place: "Porur"
            },
            {
              text: `Home sample collection was a lifesaver! Technician was on time, highly professional, and reports came by evening.`,
              name: "Priya S.",
              place: "Ramapuram"
            }
          ].map((review, idx) => (
            <div key={idx} className="testimonial-card fade-testimonial">
              <p className="testimonial-text">“{review.text}”</p>
              <p className="testimonial-author">— {review.name}, {review.place}</p>
            </div>
          ))}

        </div>

        <div className="testimonials-cta">
          <button>Read More Patient Experiences</button>
        </div>
      </section>

      <section className="lab-section">
        <div className="lab-content">
          <h2>Why Accurate Lab Results Matter</h2>
          <p>
            Wrong test results lead to wrong treatments. Delayed reports mean delayed diagnoses. Contaminated samples waste your time and money.
          </p>
          <p>
            Our best diagnostic lab in Chennai eliminates these problems. Rigorous quality control catches errors before reports reach you. Modern equipment ensures precision. Experienced staff prevents sample mix-ups. Fast turnaround means faster treatment decisions.
          </p>
          <p>
            Whether monitoring a chronic condition, investigating new symptoms, or getting routine checkups—accuracy isn't optional. It's everything.
          </p>
          <button className="cta-button">Experience the Prolife Laboratory Difference</button>
        </div>
        <div className="lab-image">
          <img
            src="./images/img/lab-4.jpg"
            alt="Lab"
          />
        </div>
      </section>

      <section className="lab-section">
        <div className="lab-image">
          <img
            src="/images/img/lab-6.jpg"
            alt="Lab Quality"
          />
        </div>
        <div className="lab-content">
          <h2>Laboratory Accreditation & Quality Standards</h2>
          <p>
            Our laboratory maintains strict adherence to quality benchmarks. Regular equipment calibration ensures measurement accuracy. Internal quality controls run with every batch. External quality assessment programs validate our standards. Staff undergo continuous training on latest protocols.
          </p>
          <p>
            We follow biosafety guidelines for infection control. Proper waste disposal protects our community. Your samples are handled with medical-grade sterility from collection to disposal.
          </p>
          <button className="cta-button">Learn About Our Quality Practices</button>
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
            <div className="service-icon">{service.icon}</div>
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
          Prolife Hospital — <span>Best Diagnostic Lab in Chennai</span> for
          accurate, fast, and affordable testing.
        </h1>

        <button className="lab-btn">
          Book Your Lab Test Today →
        </button>
      </div>
    </section>


    </div>
  );
};

export default Lab;
