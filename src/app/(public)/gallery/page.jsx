"use client";
import React, { useState } from "react";
import CommonHero from "@/components/commonhero/page";
import { X } from "lucide-react";
import Image from "next/image";

const menuItems = ["All", "Event1", "Event2", "Event3", "Event4", "Event5"];

const gallery = [
  { image: "/images/g1.jpg", title: "images", category: "Event1" },
  { image: "/images/g2.jpg", title: "images", category: "Event1" },
  { image: "/images/g3.jpg", title: "images", category: "Event2" },
  { image: "/images/g4.jpg", title: "images", category: "Event2" },
  { image: "/images/g5.jpg", title: "images", category: "Event3" },
  { image: "/images/g6.jpg", title: "images", category: "Event3" },
  { image: "/images/g7.jpg", title: "images", category: "Event4" },
  { image: "/images/g8.jpg", title: "images", category: "Event4" },
  { image: "/images/g9.jpg", title: "images", category: "Event5" },
  { image: "/images/g10.jpg", title: "images", category: "Event5" },
  { image: "/images/g11.jpg", title: "images", category: "Event1" },
  { image: "/images/g12.jpg", title: "images", category: "Event2" },
];

export default function Page() {
  const [selectedEvent, setSelectedEvent] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);


  const filteredGallery =
    selectedEvent === "All"
      ? gallery
      : gallery.filter((item) => item.category === selectedEvent);

  // Toggle zoom on image click
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div>

      <CommonHero
        heading="Gallery"
        subheading="Figma ipsum component variant main layer. Flatten bullet device component figjam pen mask thumbnail figma library"
      />

      {/* Category Filter */}
      <div className="w-[85%] max-w-7xl mx-auto">
        <ul
          className="
                flex items-center gap-3 mt-10
                overflow-x-auto md:overflow-visible
                flex-nowrap md:justify-center
                whitespace-nowrap
                -mx-4 px-4 py-6
                no-scrollbar
              "
        >
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setSelectedEvent(item)}
              className={`px-4 py-1 cursor-pointer border rounded-md duration-300 flex-shrink-0 ${selectedEvent === item
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-primary border-primary hover:bg-primary hover:text-white'
                }`}
            >
              {item}
            </li>
          ))}
        </ul>


        {/* Gallery Grid */}
        <ul className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 my-5">
          {filteredGallery.map((item, index) => (
            <li
              key={index}
              className="list-none cursor-pointer group relative overflow-hidden rounded-lg shadow hover:shadow-lg transition"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semimedium">
                View
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-xl shadow-xl overflow-hidden max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - separate stacking layer */}
            <button
              className="absolute top-3 right-3 bg-white text-black rounded-full p-1 cursor-pointer shadow hover:bg-gray-200 z-[999]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>

            {/* Image container */}
            <div className="relative flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage}
                alt="Selected"
                onClick={toggleZoom}
                className={`rounded-lg cursor-zoom-in transform
            ${isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'}
            transition-transform duration-700 ease-in-out`}
                style={{
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  willChange: 'transform',
                  zIndex: 10 // ensures image is under the button
                }}
              />
            </div>
          </div>
        </div>
      )}
      {/* Callback Form & Footer */}



    </div>
  );
}
