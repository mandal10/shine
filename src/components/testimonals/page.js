'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Slider from 'react-slick';

const testimonials = [
  {
    name: 'Jacob Austin Brandy',
    role: 'Student of SOPA High School',
    text:
      'Lorem ipsum dolor sit amet consectetur. Non amet hac sed placerat. Duis placerat in amet aliquam et volutpat. Adipiscing morbi tincidunt sit turpis. Lacinia ut ultricies lorem cursus faucibus tempus.',
    avatar: '/images/topper1.jpg',
  },
  {
    name: 'Emily Carter',
    role: 'Graduate of SOPA 2023',
    text:
      'Lorem ipsum dolor sit amet consectetur. Non amet hac sed placerat. Duis placerat in amet aliquam et volutpat. Adipiscing morbi tincidunt sit turpis. Lacinia ut ultricies lorem cursus faucibus tempus.',
    avatar: '/images/topper2.jpg',
  },
];

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-3 -top-6 transform -translate-y-1/2 z-10 cursor-pointer border-gray border text-gray p-[4px] rounded-full"
  >
    <ChevronRight className="w-5 h-5" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-15 -top-6 transform -translate-y-1/2 z-10 cursor-pointer border-gray border  text-gray p-[4px] rounded-full"
  >
    <ChevronLeft className="w-5 h-5" />
  </button>
);

const TestimonialCard = ({ name, role, text, avatar }) => {
  return (
    <div className="relative bg-white rounded-xl border-l-4 border  border-primary shadow-lg mt-20 p-4 sm:p-6 mb-10 pt-12 mx-4">
      {/* Avatar */}
      <div className="absolute -top-15 -right-5 transform -translate-x-1/2">
        {/* ✅ Container controls size */}
        <div className="relative w-[120px] h-[120px]">
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>
      </div>


      {/* Stars */}
      <div className="flex mb-6 mt-6 gap-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            fill="gold"
            stroke="gold"
            className="w-[23px] h-[23px] mx-0.5 text-yellow"
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-black1 text-[16px] font-normal leading-[160%] text-left mb-6">{text}</p>

      {/* Name & Role */}
      <div className="text-left">
        <p className="font-black text-[26px] text-black1 leading-[160%] mb-1">- {name}</p>
        <p className="text-[16px] font-medium italic leading-[160%] text-black1">{role}</p>
      </div>
    </div>
  );
};

export default function TestimonialsPage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablet & smaller
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-5 md:mt-10 mt-15  xl:mt-25 w-[95%] sm:w-[85%] max-w-7xl mx-auto px-0  sm:px-4 xl:p-0 relative">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-center text-darkblue leading-snug sm:leading-[36px] md:leading-[48px] lg:leading-[60px]">
        Our Testimonials
      </h2>


      <p className="mb-15 text-center font-light leading-[21px] text-[12px] max-w-[400px] mx-auto">
        Figma ipsum component variant main layer. Union selection selection opacity layout star slice flatten variant. Figma asset content team pen
      </p>

      {/* Slider */}
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={i}
            name={t.name}
            role={t.role}
            text={t.text}
            avatar={t.avatar}
          />
        ))}
      </Slider>
    </section>
  );
}
