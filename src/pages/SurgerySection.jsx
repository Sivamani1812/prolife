 
export default function SurgerySection() {
    return (
   <div className="surgery-page">
      <div className="story-hero-banner">
        <img src="/images/img/g-bg.webp" alt="Our Story Banner" className="story-hero-image" />
        <div className="story-hero-overlay">
          <h1 className="story-hero-title">Surgery and Procedures</h1>
        </div>
      </div>
      
    <section className="surgery-section">
      <div className="surgery-container">
        <div className="surgery-card">
          <img src="/images/img/su1.webp" alt="Laproscopy" />
          <div className="surgery-overlay"><h3 className="surgery-title">LAPROSCOPY</h3></div>
        </div>

        <div className="surgery-card">
          <img src="/images/img/su2.webp" alt="Hysteroscopy" />
          <div className="surgery-overlay"><h3 className="surgery-title">HYSTEROSCOPY</h3></div>
        </div>

        <div className="surgery-card">
          <img src="/images/img/su3.webp" alt="Uterus Removal" />
          <div className="surgery-overlay"><h3 className="surgery-title">UTERUS REMOVAL</h3></div>
        </div>

        <div className="surgery-card">
          <img src="/images/img/su4.webp" alt="Endometrial Ablation" />
          <div className="surgery-overlay"><h3 className="surgery-title">ENDOMETRIAL ABLATION</h3></div>
        </div>

        <div className="surgery-card">
          <img src="/images/img/su5.webp" alt="Uterine Fibroids" />
          <div className="surgery-overlay"><h3 className="surgery-title">UTERINE FIBROIDS</h3></div>
        </div>

        <div className="surgery-card">
          <img src="/images/img/su6.webp" alt="Cervical Cerclage" />
          <div className="surgery-overlay"><h3 className="surgery-title">CERVICAL CERCLAGE</h3></div>
        </div>

        <div className="surgery-card">
          <img src="/images/img/su7.webp" alt="Vulvectomy" />
          <div className="surgery-overlay"><h3 className="surgery-title">VULVECTOMY</h3></div>
        </div>
      </div>
    </section>
    </div>

    );
}
