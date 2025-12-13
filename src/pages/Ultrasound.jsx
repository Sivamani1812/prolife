export default function Ultrasound() {
  const ultrasoundData = [
    { img: "/images/img/u1.webp", title: "ABDOMEN" },
    { img: "/images/img/u2.webp", title: "FOLLICULAR STUDY" },
    { img: "/images/img/u3.webp", title: "ANOMALY" },
    { img: "/images/img/u4.webp", title: "GROWTH" },
    { img: "/images/img/u5.webp", title: "FETAL DOPPLER" },
    { img: "/images/img/u6.webp", title: "FETAL ECHO" },
    { img: "/images/img/u7.webp", title: "QUADRUPLE TEST" },
    { img: "/images/img/u8.webp", title: "PRENATAL INVASIVE TESTING" },
    { img: "/images/img/u9.webp", title: "PELVIC SCAN" },
  ];

  return (
    <div className="ultrasound-page">
      {/* Hero Banner */}
      <div className="story-hero-banner">
        <img
          src="/images/img/g-bg.webp"
          alt="Ultrasound Banner"
          className="story-hero-image"
        />
        <div className="story-hero-overlay">
          <h1 className="story-hero-title">Ultrasound</h1>
        </div>
      </div>

      {/* Cards */}
      <section className="ultrasound-section">
        <div className="ultrasound-container">
          {ultrasoundData.map((item, index) => (
            <div className="ultrasound-card" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="ultrasound-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="ultrasound-text-section">
          <h4 className="ultrasound-subtitle">Care begins in the womb...</h4>
          <p className="ultrasound-description">
            Ultrasound has become a routine part of the care of pregnant women
            enabling obstetricians and pregnant women insight into the development
            and appearance of the unborn baby. From screening for Down Syndrome
            and examining the baby for normal development, estimating the baby’s
            size and providing 3D and 4D images, modern ultrasound equipment and
            technical expertise enable women to avail themselves of a full
            pregnancy ultrasound service.
          </p>
        </div>
      </section>
    </div>
  );
}
