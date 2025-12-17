import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/images/img/prolife-logo.png" alt="Prolife Logo" />
          </Link>
        </div>

        {/* Nav Links */}
        <nav id="nav-links" className = {menuOpen ? "active" : ""}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/story">Our Story</Link></li>
            <li><Link to="/ourteam">Our Teams</Link></li>
            <li><a href="https://prolifefertility.com/" target="_blank">Fertility</a></li>

            <li className="dropdown">
              <a href="#">Services ▾</a>
              <ul className="dropdown-menu">
                <li className="sub-dropdown">
                  <a href="#">Obstetrics ▸</a>
                  <ul className="sub-menu">
                    <li><Link to="/pre-pregnancy">Pre-pregnancy </Link></li>
                    <li><Link to="/pregnancy"> Pregnancy Care</Link></li>
                  </ul>
                </li>
                <li className="sub-dropdown">
                  <a href="#">Preterm Labour ▸</a>
                  <ul className="sub-menu">
                    <li><Link to="/highrisk"> High-risk Pregnancy Management</Link></li>
                    <li><Link to="/gdm">GDM (Gestational Diabetes Mellitus)</Link></li>
                    <li><Link to="/thyroid">Thyroid Disorders</Link></li>
                    <li><Link to="/hypertension">Hypertension</Link></li>
                    <li><Link to="/pretermlabor"> Preterm Labour Management</Link></li>
                    <li><Link to="/obstetric"> Obstetric Emergencies</Link></li>
                  </ul>
                </li>
                <li className="sub-dropdown">
                  <a href="#">Deliveries ▸</a>
                  <ul className="sub-menu">
                    <li><Link to="/vaginal"> Normal Vaginal Delivery (NVD)</Link></li>
                    <li><Link to="/assisteddelivery">Assisted Delivery</Link></li>
                    <li><Link to="/vacuum"> Vacuum</Link></li>
                    <li><Link to="/forceps"> Forceps</Link></li>
                    <li><Link to="/caesarean">Caesarean Sections (LSCS)</Link></li>
                    <li><Link to="/emergency">Emergency LSCS</Link></li>
                    <li><Link to="/elective"> Elective LSCS </Link></li>
                    <li><Link to="/sterilisation">Elective LSCS + Sterilisation</Link></li>
                  </ul>
                </li>
                <li><Link to="/cervical-encirclage"> Cervical Encirclage </Link></li>
                <li><Link to="/lab">Lab </Link></li>
              </ul>
            </li>


            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/videos">Videos</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </nav>

        {/* Pharmacy button */}
        <div className="pharmacy-btn">
          <button onClick={() => window.open("https://theprolifepharmacy.com/", "_blank")}>
            PHARMACY
          </button>
        </div>

         {/* Hamburger */}
        <div
          id="hamburger"
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}