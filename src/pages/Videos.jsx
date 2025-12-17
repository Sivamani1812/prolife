import React from "react";

export default function VideosSection() {
  const videos = [
    "H-qxw5qCVGQ?si=mvMbbUjXunV37Gcf",
    "H-qxw5qCVGQ?si=mvMbbUjXunV37Gcf",
    "6kTV9Lj8FMw?si=F5dUg-FhyzMqcHK5",
    "j5icKHhbi54?si=XiZblkYiaWMIXqwR",
    "E7cd-8jBKGs?si=fwnzT11ZO-_EpKdA",
    "aXovFWZGE3g?si=b_dggxYr3lzRjlpc",
    "LNU8z-NDGSY?si=MfCqNpIKLWc7mgL_",
    "_tY48D-auK4?si=farKI_BIpT8xOkN4",
    "h7V1NAe58to?si=svIJPuQmp9BjAsYi",
    "apsmIBCzyJQ?si=sdOHF7uBiCFrW4-4",
    "aBdLyoMpIuo?si=rw7vHE3-onHC82eV",
    "VW9HBLzgcGU?si=RH_iRjI6Efoq3qQS",
    "qYOZPojSjYU?si=WYnSdf0681JP9Zjp",
  ];

  return (
    <div>
      <div className="story-hero-banner relative w-full h-[300px]">
        <img
          src="./images/img/g-bg.webp"
          alt="Our Story Banner"
          className="story-hero-image w-full h-full object-cover"
        />
        <div className="story-hero-overlay absolute inset-0 bg-black/50 flex items-center justify-center">
          
        </div>
      </div>
      <h1 className="story-hero-title1 text-white text-4xl font-bold uppercase">Videos</h1>

      <div className="vid-container py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((id, index) => (
            <iframe
              key={index}
              width="100%"
              height="250"
              src={`https://www.youtube.com/embed/${id}`}
              title={`YouTube video player ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
}
