"use client";

import React from "react";
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Collaborators = () => {
  const logos = [
    "/images/NUST.jpg",
    "/images/DAAD-logo.png",
    "/images/crop2x.png",
    "/images/Agha_Khan.png",
    "/images/SPCAI.png",
    "/images/Abu_Dhabi_University.png",
    "/images/Ismail_Industries_logo.png",
    "/images/SUPARCO_Pakistan_Logo.png",
    "/images/one.jpg",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-white px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          Our <span className="text-green-600">Collaborators</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We proudly work with these partners and collaborators around the world.
        </p>
      </div>

      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="px-4">
            <div className=" p-4  hover:shadow-lg transition duration-300 flex items-center justify-center h-40">
              <div className="relative w-40 h-24"> {/* uniform size box */}
                <Image
                  src={logo}
                  alt={`Collaborator ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Collaborators;
