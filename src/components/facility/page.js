'use client';

import React from 'react';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// Data
const facilities = [
  { name: 'CCTV Camera', image: '/images/cctv.jpg' },
  { name: 'AC Classes', image: '/images/ac.jpg' },
  { name: 'Computer Labs', image: '/images/computer-lab.jpg' },
  { name: 'Science Labs', image: '/images/science-lab.jpg' },
  { name: 'Transportation', image: '/images/transport.jpg' },
  { name: 'Wi-Fi', image: '/images/wifi.jpg' },
  { name: 'Libraries', image: '/images/library.jpg' },
  { name: 'Medical Centre', image: '/images/medical.jpg' },
];

// Custom Arrows
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-3 -top-6 transform -translate-y-1/2 z-10 cursor-pointer border-gray border text-gray p-[4px] rounded-full "
    >
      <ArrowRight size={16} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-12 -top-6 transform -translate-y-1/2 z-10 cursor-pointer border-gray border  text-gray p-[4px] rounded-full "
    >
      <ArrowLeft size={16} />
    </div>
  );
};

// Settings
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 6 } },
    { breakpoint: 1024, settings: { slidesToShow: 5 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

const FacilitySection = () => {
  return (
    <section className="bg-white text-center  xl:px-0  px-4 w-[85%] max-w-7xl mx-auto sm:mt-10 mt-20  relative ">
      {/* Heading */}
      <div className="mb-10 sm:max-w-[50%] max-w-[100%] mx-auto">
       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-normal text-darkblue mb-2 leading-snug md:leading-[60px]">
  Facility to DPGS
</h2>

        <p className="text-blackvery text-[12px] leading-[21px] font-light ">
          Figma ipsum component variant main layer. Union selection selection opacity layout star slice flatten variant. Figma asset content team pen 
        </p>
      </div>

      {/* Carousel */}
      <div className="relative top-2">
        <Slider {...sliderSettings}>
          {facilities.map((facility, idx) => (
            <div key={idx} className="px-2">
              <div className="bg-white border border-gray-300 rounded-xl flex flex-col items-center py-[13px] shadow transition duration-300 cursor-pointer">
                <div className="relative w-20 h-20 mb-3">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-blackvery font-light text-[12px] leading-[21px] tracking-[0.4px]">{facility.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      
    </section>
  );
};

export default FacilitySection;
