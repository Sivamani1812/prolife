import React, { useState } from "react";

export default function GallerySection() {
  const happyParents = [
    "./images/img/galary/g (53).webp",
    "./images/img/galary/g (54).webp",
    "./images/img/galary/g (58).webp",
    "./images/img/galary/g (23).webp",
  ];

  const inaugurationImages = [
    // "/images/img/galary/g (10).webp",
    "/images/img/galary/g (1).webp",
    "./images/img/galary/g (3).webp",
    "./images/img/galary/g (7).webp",
    "./images/img/galary/g (9).webp",
    // "./images/img/galary/g (11).webp",
    // "./images/img/galary/g (12).webp",
    "./images/img/galary/g (13).webp",
    // "./images/img/galary/g (14).webp",
    "./images/img/galary/g (15).webp",
    "./images/img/galary/g (16).webp",
    // "./images/img/galary/g (17).webp",
    "./images/img/galary/g (18).webp",
    // "./images/img/galary/g (19).webp",
    "./images/img/galary/g (20).webp",
    // "./images/img/galary/g (21).webp",
    "./images/img/galary/g (22).webp",
    // "./images/img/galary/g (23).webp",
    "./images/img/galary/g (24).webp",
    "./images/img/galary/g (25).webp",
    // "./images/img/galary/g (26).webp",
    // "./images/img/galary/g (27).webp",
    "./images/img/galary/g (28).webp",
    // "./images/img/galary/g (29).webp",
    // "./images/img/galary/g (30).webp",
    "./images/img/galary/g (31).webp",
    // "./images/img/galary/g (32).webp",
    "./images/img/galary/g (33).webp",
    "./images/img/galary/g (34).webp",
    // "./images/img/galary/g (35).webp",
    // "./images/img/galary/g (36).webp",
    "./images/img/galary/g (37).webp",
    // "./images/img/galary/g (38).webp",
    "./images/img/galary/g (39).webp",
    // "./images/img/galary/g (40).webp",
    // "./images/img/galary/g (41).webp",
    "./images/img/galary/g (42).webp",
    // "./images/img/galary/g (43).webp",
    "./images/img/galary/g (44).webp",
    "./images/img/galary/g (45).webp",
    // "./images/img/galary/g (46).webp",
    // "./images/img/galary/g (47).webp",
    "./images/img/galary/g (48).webp",
    // "./images/img/galary/g (49).webp",
    "./images/img/galary/g (50).webp",
    // "./images/img/galary/g (51).webp",
    // "./images/img/galary/g (52).webp",
    // "./images/img/galary/g (53).webp",
    // "./images/img/galary/g (54).webp",
    // "./images/img/galary/g (55).webp",
    "./images/img/galary/g (56).webp",
    // "./images/img/galary/g (57).webp",
    // "./images/img/galary/g (58).webp",
    // "./images/img/galary/g (59).webp",
    // "./images/img/galary/g (60).webp",
    "./images/img/galary/g (61).webp",
    // "./images/img/galary/g (62).webp",
    // "./images/img/galary/g (63).webp",
    "./images/img/galary/g (64).webp",
    "./images/img/galary/g (65).webp",
    // "./images/img/galary/g (66).webp",
    // "./images/img/galary/g (67).webp",
    "./images/img/galary/g (68).webp",
    "./images/img/galary/g (69).webp",    //30
    "./images/img/galary/g (70).webp",
    // "./images/img/galary/g (71).webp",
    "./images/img/galary/g (72).webp",
    "./images/img/galary/g (73).webp",
    // "./images/img/galary/g (74).webp",
    // "./images/img/galary/g (75).webp",
    "./images/img/galary/g (76).webp",
    // "./images/img/galary/g (77).webp",
    // "./images/img/galary/g (78).webp",
    // "./images/img/galary/g (79).webp",
    "./images/img/galary/g (80).webp",
    // "./images/img/galary/g (81).webp",
    "./images/img/galary/g (82).webp",
    // "./images/img/galary/g (83).webp",
    "./images/img/galary/g (84).webp",
    // "./images/img/galary/g (85).webp",
    "./images/img/galary/g (86).webp",
    // "./images/img/galary/g (87).webp",
    "./images/img/galary/g (88).webp",
    "./images/img/galary/g (89).webp",
    // "./images/img/galary/g (90).webp",
    "./images/img/galary/g (91).webp",
    "./images/img/galary/g (92).webp",
    "./images/img/galary/g (93).webp",
    "./images/img/galary/g (94).webp",
    // "./images/img/galary/g (95).webp",
    "./images/img/galary/g (96).webp",
  ];

 const [activeTab, setActiveTab] = useState("happy");
  const [lightbox, setLightbox] = useState({ open: false, img: "" });

  const images = activeTab === "happy" ? happyParents : inaugurationImages;

  /** 🔥 OPEN */
  const openLightbox = (img) => {
    setLightbox({ open: true, img });
    document.body.style.overflow = "hidden";
  };

  /** 🔥 CLOSE (UNZOOM) */
  const closeLightbox = () => {
    setLightbox({ open: false, img: "" });
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      {/* Banner */}
      <div className="story-hero-banner">
        <img src="./images/img/g-bg.webp" alt="Gallery" />
      </div>

      <h1 className="story-hero-title1">Gallery</h1>

      {/* Tabs */}
      <div className="gallery-tabs">
        <button
          className={activeTab === "happy" ? "active" : ""}
          onClick={() => setActiveTab("happy")}
        >
          Happy Parents
        </button>

        <button
          className={activeTab === "function" ? "active" : ""}
          onClick={() => setActiveTab("function")}
        >
          Inauguration Function
        </button>
      </div>

      {/* Grid */}
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => openLightbox(img)}
          >
            <img src={img} alt="gallery" />
            <div className="overlay">🔍</div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close" onClick={closeLightbox}>
            &times;
          </span>

          <img
            src={lightbox.img}
            alt="zoomed"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}