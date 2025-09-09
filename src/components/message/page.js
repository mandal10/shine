"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const messages = [
  {
    title: "Message from the Chairman",
    image: "/images/chairman.jpg",
    message:
      "Figma ipsum component variant main layer. Group undo union outline plugin object undo create. Align figma style boolean create text main. List fill thumbnail style strikethrough vector flows variant connection. Export figma selection prototype pixel line asset community group bold.Figma ipsum component variant main layer. Group undo union outline plugin object undo create. Align figma style boolean create text main. List fill thumbnail style strikethrough vector flows variant connection. Export figma selection prototype pixel line asset community group bold.",
  },
  {
    title: "Message from the Headmaster",
    image: "/images/master.jpg",
    message:
      "Figma ipsum component variant main layer. Group undo union outline plugin object undo create. Align figma style boolean create text main. List fill thumbnail style strikethrough vector flows variant connection. Export figma selection prototype pixel line asset community group bold.Figma ipsum component variant main layer. Group undo union outline plugin object undo create. Align figma style boolean create text main. List fill thumbnail style strikethrough vector flows variant connection. Export figma selection prototype pixel line asset community group bold",
  },
];

const MessageSection = () => {
  return (
    <section className="relative py-6 pb-12 w-full mt-[100px] px-4 text-white">
      {/* ✅ Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Background"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-primary/80 bg-opacity-90" />
      </div>

      {/* ✅ Content */}
      <div className="relative z-10 w-[85%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((item, index) => (
            <div key={index}>
              <h3 className="text-[15px] sm:text-xl  lg:text-[28px] leading-snug sm:leading-normal md:leading-[30px] lg:leading-[53px] font-bold mb-4 text-center">
                {item.title}
              </h3>


              <div className="bg-blue2 rounded-2xl p-3 flex flex-col md:flex-row items-center gap-5">
                {/* ✅ Message Image */}
                <div className="relative w-full md:w-1/2 h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-xl shadow-md"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1">
                  <p className="text-[12px] text-white mb-4 line-clamp-11">
                    {item.message}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary hover:text-white font-medium leading-[100%] tracking-[0.4px] text-[16px] cursor-pointer"
                  >
                    View More <ArrowRight className="ml-1" size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
