'use client';
import Slider from 'react-slick';
import TopperCard from './TopperCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const toppers = [
  { image: '/images/topper1.jpg', percentage: '95.5%', title: 'Future Ready', grade: '10th' },
  { image: '/images/topper2.jpg', percentage: '93.2%', title: 'Science Star', grade: '12th' },
  { image: '/images/topper3.jpg', percentage: '91.8%', title: 'Math Wizard', grade: '10th' },
  { image: '/images/topper4.jpg', percentage: '91.8%', title: 'Problem Solver', grade: '10th' },
  { image: '/images/topper1.jpg', percentage: '95.5%', title: 'Future Ready', grade: '10th' },
  { image: '/images/topper2.jpg', percentage: '93.2%', title: 'Science Star', grade: '12th' },
  { image: '/images/topper3.jpg', percentage: '91.8%', title: 'Math Wizard', grade: '10th' },
  { image: '/images/topper4.jpg', percentage: '91.8%', title: 'Problem Solver', grade: '10th' },
];

// Custom arrows
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-15 -bottom-10 z-10 cursor-pointer border-gray border text-gray p-[6px] rounded-full "
  >
    <ArrowLeft size={16} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 -bottom-10 z-10 cursor-pointer border-gray border text-gray p-[6px] rounded-full "
  >
    <ArrowRight size={16} />
  </button>
);

const TopperSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [

      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className=" py-0 md:mt-[80px] mt-[40px] w-[100%] max-w-7xl mx-auto bg-white relative px-4 md:px-6 lg:px-8 xl:px-0">
      <div className="relative w-[90%] mx-auto h-[70px] md:h-[160px] lg:h-[190px] ">
        <Image
          src="/images/TOPPERS.png"
          alt="Toppers Section Title"
          fill
          priority
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 60vw"
          className="object-contain"
        />
      </div>


      <div className="relative md:top-[-105px] -top-15  ">
        <Slider {...settings}>
          {toppers.map((topper, index) => (
            <div
              key={index}
              className={`px-3 transition-all duration-300 transform py-12  ${index % 2 === 0 ? 'translate-y-10 md:translate-y-12' : ''
                }`}
            >
              <TopperCard {...topper} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopperSlider;
