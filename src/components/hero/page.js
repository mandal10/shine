"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
// import StatsSection from "./components/statssection/page";
import StatsSection from "../statsSection/page";


// Example slides data
const slides = [
  {
    heading: "Start Your Beautiful Future",
    subheading:
      "Figma ipsum component variant main layer. Flatten bullet device component figjam pen mask thumbnail figma library",
    image: "/images/hero.jpg",
  },
  {
    heading: "Learn With Us Today",
    subheading:
      "Master design, development, and creativity with real-world projects and hands-on experience.",
    image: "/images/s4.jpg",
  },
  {
    heading: "Your Success, Our Mission",
    subheading:
      "Get access to top-notch mentors, structured learning paths, and future-ready skills.",
    image: "/images/s5.jpg",
  },
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-5 top-1/2 -translate-y-1/2 z-20 hover:cursor-pointer bg-primary  text-white py-2 px-4 rounded-full"
  >
    ❯
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-primary  hover:cursor-pointer text-white py-2 px-4 rounded-full"
  >
    ❮
  </button>
);

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative">
      {/* Slick Slider Section */}
      <Slider {...settings} className="relative">
        {slides.map((slide, index) => (
          <section
            key={index}
            className="relative h-[300px] md:h-[500px] flex items-center justify-center text-center overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={`Hero background ${index + 1}`}
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-blackdark/40 z-0" />

            {/* Content */}
            <div className="z-10 px-4 sm:px-6 lg:px-8">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-[-2px] mb-4">
                {slide.heading}
              </h1>
              <p className="text-white text-sm sm:text-[16px] max-w-2xl leading-[21px] font-normal tracking-[-0.31px] mx-auto">
                {slide.subheading}
              </p>
            </div>
          </section>
        ))}
      </Slider>

      {/* Stats Section */}
      <div className="-mt-[90px] relative z-20">
        <StatsSection />
      </div>
    </div>
  );
};

export default Hero;
