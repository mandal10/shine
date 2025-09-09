'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight, } from 'lucide-react';
import Image from 'next/image';


// Staff data
const staffMembers = [
    {
        name: 'Mrs. Priya Sharma',
        role: 'Principal',
        image: '/images/staff1.jpg',
    },
    {
        name: 'Mr. Anil Verma',
        role: 'Math Teacher',
        image: '/images/staff2.jpg',
    },
    {
        name: 'Ms. Kavita Joshi',
        role: 'Science Teacher',
        image: '/images/staff3.jpg',
    },
    {
        name: 'Mr. Rakesh Mehta',
        role: 'Computer Instructor',
        image: '/images/staff1.jpg',
    },
];

// Custom Arrows
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="absolute right-5 -top-6 transform -translate-y-1/2 z-10 cursor-pointer border-gray border text-gray p-[4px] rounded-full "
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
            className="absolute right-15 -top-6 transform -translate-y-1/2 z-10 cursor-pointer border-gray border  text-gray p-[4px] rounded-full "
        >
            <ArrowLeft size={16} />
        </div>
    );
};

// Main Component
const StaffSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl w-[85%] mx-auto px-4 xl:px-0 relative">
                <div className="text-left mb-13 sm:mb-15 ">
                    {/* Small subtitle */}
                    <h2 className="text-xs sm:text-sm md:text-base font-medium tracking-[0.3em] uppercase text-darkblue mb-2 sm:mb-3">
                        Staff
                    </h2>

                    {/* Main heading */}
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug sm:leading-tight md:leading-[60px] tracking-wide text-darkblue max-w-2xl">
                        Our School Staffs
                    </p>
                </div>


                <Slider {...settings}>
                    {staffMembers.map((staff, index) => (
                        <div key={index} className=" px-2">
                            <div className="group bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 p-6 sm:p-8 text-center">

                                {/* Image */}
                                <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] mx-auto mb-4 relative">
                                    <div className="absolute inset-0 rounded-full border-4 border-indigo-100 group-hover:border-indigo-300 transition duration-300"></div>
                                    <Image
                                        src={staff.image}
                                        alt={staff.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="rounded-full object-cover z-10"
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="text-lg sm:text-lg md:text-xl font-bold text-darkblue group-hover:text-primary transition">
                                    {staff.name}
                                </h3>

                                {/* Role */}
                                <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-1">
                                    {staff.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    );
};

export default StaffSlider;
