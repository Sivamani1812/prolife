// src/App.jsx
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Ourstory from "./pages/Ourstory";
import Ourteam from "./pages/Ourteam";
import Contact from "./pages/Contact";
import PregnancyMaternity from "./pages/PregnancyMaternity";
import FetalMedicine from "./pages/FetalMedicine";
import Ultrasound from "./pages/Ultrasound";
import SurgerySection from "./pages/SurgerySection";
import Lab from "./pages/Lab";
import Gallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import PrePregnancy from "./pages/PrePregnancy";
import Pregnancy from "./pages/Pregnancy";
import CervicalEncirclage from "./pages/CervicalEncirclage";
import Highrisk from "./pages/Highrisk";
import Gdm from "./pages/Gdm";
import Hypertension from "./pages/Hypertension";
import PretermLabor from "./pages/PretermLabor";
import Thyroid from "./pages/Thyroid";
import Obstetric from "./pages/Obstetric";
import NormalVaginal from "./pages/NormalVaginal";
import AssistedDelivery from "./pages/AssistedDelivery";
import Vacuum from "./pages/Vacuum";
import Forceps from "./pages/Forceps";
import Caesarean from "./pages/Caesarean";
import Emergency from "./pages/Emergency";
import Sterilisation from "./pages/Sterilisation";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Ourstory />} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pregnancy-maternity" element={<PregnancyMaternity />} />
        <Route path="/fetal-medicine" element={<FetalMedicine />} />
        <Route path="/ultrasound" element={<Ultrasound />} />
        <Route path="/surgery-and-procedures" element={<SurgerySection />} />
         <Route path="/lab" element={<Lab />} />
         <Route path="/gallery" element={<Gallery />} />
         <Route path="/videos" element={<Videos />} />
         <Route path="/pre-pregnancy" element={<PrePregnancy />} />
         <Route path="/cervical-encirclage" element={<CervicalEncirclage />} />
         <Route path="/pregnancy" element={<Pregnancy />} />
         <Route path="/highrisk" element={<Highrisk />} />
         <Route path="/gdm" element={<Gdm />} />
         <Route path="/hypertension" element={<Hypertension />} />
        <Route path="/pretermlabor" element={<PretermLabor />} />
        <Route path="/thyroid" element={<Thyroid />} />
        <Route path="/obstetric" element={<Obstetric />} />
        <Route path="/vaginal" element={<NormalVaginal />} />
        <Route path="/assisteddelivery" element={<AssistedDelivery />} />
        <Route path="/vacuum" element={<Vacuum />} />
        <Route path="/forceps" element={<Forceps />} />
        <Route path="/caesarean" element={<Caesarean />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/sterilisation" element={<Sterilisation />} />
      </Routes>
      <Footer />
    </Router>
  );
}
