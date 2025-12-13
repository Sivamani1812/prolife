
export default function PregnancyMaternity() {
  return (
    <div className="pregnancy-page">
      {/* Hero Banner */}
      <div className="story-hero-banner">
        <img
          src="/images/img/g-bg.webp"
          alt="Pregnancy Banner"
          className="story-hero-image"
        />
        <div className="story-hero-overlay">
          <h1 className="story-hero-title">Pregnancy / Maternity</h1>
        </div>
      </div>

      {/* Sections */}
      <section className="section-boxes">
        <div className="section-boxes-container">

          <div className="section-boxes-card">
            <img
              src="/images/img/p1 (1).webp"
              alt="Consultation"
            />
            <div className="section-boxes-overlay">
              <h3>CONSULTATION</h3>
            </div>
          </div>

          <div className="section-boxes-card">
            <img
              src="/images/img/p1 (2).webp"
              alt="Delivery"
            />
            <div className="section-boxes-overlay">
              <h3>DELIVERY</h3>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
