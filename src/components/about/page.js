"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const AboutSection = ({ heading = "Welcome to DPGS School Delhi" }) => {
  return (
    <section className="py-6 w-[85%] max-w-7xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-[35%_65%] items-center gap-5">
      {/* Left Image */}
      <div className="relative w-full h-[250px] md:h-[300px] rounded-2xl overflow-hidden">
        <Image
          src="/images/graduates.jpg"
          alt="Graduates"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-2xl"
          
        />
      </div>

      {/* Right Content */}
      <div className="text-left space-y-3">
        <h2 className="text-2xl md:text-[32px] font-bold text-black leading-[41px] tracking-[0.4px]">
          {heading}
        </h2>
        <p className="text-black text-[14px] font-light leading-[22px] pr-10 tracking-[0.4px]">
          Figma ipsum component variant main layer Text device selection flatten
          font device scrolling connection subtract layer. Content distribute
          subtract bold clip image. Fill scale flows background effect vector
          invite team flatten connection. Inspect vertical bold rotate arrange
          bold editor content link. Strikethrough rotate blur polygon inspect
          stroke. Edit layer align export pen library vector content device.
        </p>
        <button className="inline-flex items-center gap-2 cursor-pointer bg-primary hover:bg-violet-700 text-white text-sm font-medium py-1 px-4 rounded-full transition duration-200">
          Read More About
          <div className="p-1 rounded-full text-black bg-white">
            <ArrowUpRight size={16} />
          </div>
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
