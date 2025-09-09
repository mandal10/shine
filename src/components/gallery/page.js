'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

const photos = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
  '/images/gallery7.jpg',
  '/images/gallery8.jpg',
];

const GallerySection = ({
  heading = 'Our Video & Photo Gallery',
  subheading = 'Figma ipsum component variant main layer. Union selection selection opacity layout star slice flatten variant. Figma asset content team',
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);


  const openModal = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Toggle zoom on image click
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <section className="bg-white px-4">
      {/* Heading */}
      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-center text-darkblue mb-2 leading-snug sm:leading-[40px] md:leading-[50px] lg:leading-[60px] mt-5 md:mt-0">
        {heading}
      </h2>

      <p className="text-center text-blackvery text-[12px] leading-[21px] font-light max-w-[500px] mx-auto mb-8">
        {subheading}
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-[85%] max-w-7xl mx-auto">
        {photos.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow group relative cursor-pointer"
            onClick={() => openModal(src)}
          >
            <div className="relative w-full h-60 overflow-hidden group">
              <Image
                src={src}
                alt={`Gallery ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition duration-300 transform group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semimedium">
              View
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl shadow-xl overflow-hidden max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 bg-white text-black cursor-pointer rounded-full p-1 shadow hover:bg-gray-200 z-50"
              onClick={closeModal}
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
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
