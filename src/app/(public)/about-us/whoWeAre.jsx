"use client";
import Image from "next/image";
import React from "react";

function WhoWeAre() {
  return (
    <section className="bg-primary py-16">
      <div className="w-[85%] max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-[44px] leading-[60px] font-bold text-white mb-4">
            Who We Are
          </h2>
          <p className="text-[20px] leading-[32px] font-normal text-white max-w-2xl mx-auto">
            At Schoolaura, we’re more than just a school — we’re a community that nurtures potential, inspires innovation, and builds future leaders.
          </p>
        </div>
      </div>

      {/* Optimized Image */}
      <div className="relative w-[85%] max-w-7xl mx-auto h-[400px]">
        <Image
          src="/images/hero.jpg"
          alt="Gallery"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default WhoWeAre;
