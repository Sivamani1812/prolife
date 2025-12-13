export default function FetalMedicine() {
  return (
    <>

      {/* Hero */}
      <div className="story-hero-banner">
        <img src="/images/img/g-bg.webp" alt="Our Story Banner" className="story-hero-image" />
        <div className="story-hero-overlay">
          <h1 className="story-hero-title">Fetal Medicine</h1>
        </div>
      </div>

      {/* Content Section */}
      <h2 className="fetal-section-title">What is fetal medicine?</h2>

      <section className="fetal-section">
        <div className="fetal-section-container">
          <div className="fetal-section-content">
            <p className="fetal-section-text">
              Foetal(Fetal) medicine is a specialized branch of medicine focused
            on the diagnosis and management of health issues in the developing
            fetus during pregnancy. It involves advanced diagnostic techniques,
            such as ultrasound, to assess the unborn baby’s well-being and
            detect any potential abnormalities or congenital disorders. Fetal
            medicine specialists work closely with obstetricians to provide
            comprehensive prenatal care, guiding expectant parents through
            informed decision-making regarding the health and treatment options
            for their baby. By utilizing cutting-edge technologies and
            expertise, fetal medicine aims to optimize outcomes for both the
            baby and the mother, ensuring a healthier pregnancy journey.
            </p>
          </div>

          <div className="fetal-section-image">
            <img src="/images/img/fr.webp" alt="Fetal Medicine" />
          </div>
        </div>

        <div className="fetal-section-subcontent">
          <h3 className="fetal-section-subtitle">Symptoms to take fetal medicine</h3>
          <p className="fetal-section-text">
            Symptoms that may prompt the need for fetal medicine evaluation during
          pregnancy include abnormal findings in routine prenatal screening
          tests, such as an abnormal ultrasound or abnormal blood tests.
          Additionally, if the mother has a medical condition that could
          potentially impact the baby’s health, or if there is a history of
          genetic or chromosomal disorders in the family, a fetal medicine
          specialist may be consulted. Other indications may include decreased
          fetal movements, excessive amniotic fluid, or suspected fetal growth
          abnormalities.
          </p>

          <p className="fetal-section-text">
            Prolife’s fetal medicine evaluation helps to assess the well-being of
          the baby, diagnose any potential issues, and provide appropriate
          medical management to optimize the outcome of the pregnancy.
          </p>
        </div>
      </section>
    </>
  );
}
