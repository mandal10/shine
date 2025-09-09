"use client";
import Image from "next/image";

function CommonHero({
  heading = "Start Your Beautiful Future",
  subHeading = "Figma ipsum component variant main layer. Flatten bullet device component figjam pen mask thumbnail figma library",
}) {
  return (
    <section className="relative h-[300px] md:h-[350px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {heading}
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          {subHeading}
        </p>
      </div>
    </section>
  );
}

export default CommonHero;
