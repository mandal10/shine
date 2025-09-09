"use client";

import React from "react";
import Image from "next/image";

const stats = [
  {
    image: "/images/backpack.png",
    value: "1,200+",
    label: "Enrolled Students",
  },
  {
    image: "/images/apple.png",
    value: "100+",
    label: "Expert Teachers",
  },
  {
    image: "/images/globe.png",
    value: "50+",
    label: "Extracurricular Clubs",
  },
  {
    image: "/images/file.png",
    value: "95%",
    label: "Acceptance Rate",
  },
];

const StatsSection = () => {
  return (
    <section className="w-[85%] max-w-7xl mx-auto mt-5 bg-white rounded-xl shadow-md py-4 px-4 sm:px-10">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-center justify-center gap-4 text-center sm:text-left"
          >
            {/* ✅ Optimized Image */}
            <div className="w-16 h-16 relative flex-shrink-0">
              <Image
                src={stat.image}
                alt={stat.label}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div>
              <div className="text-2xl md:text-3xl lg:text-[34px] font-bold text-darkblue">
                {stat.value}
              </div>
              <div className="text-sm md:text-base lg:text-lg font-medium text-darkblue">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
