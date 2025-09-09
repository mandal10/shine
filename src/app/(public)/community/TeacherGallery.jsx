'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

const teachers = [
  { name: 'Mrs. Priya Sharma', subject: 'English', image: '/images/t1.jpg' },
  { name: 'Mr. Anil Verma', subject: 'Mathematics', image: '/images/t2.jpg' },
  { name: 'Ms. Kavita Joshi', subject: 'Science', image: '/images/t3.jpg' },
  { name: 'Mr. Rakesh Mehta', subject: 'Computer Science', image: '/images/t4.jpg' },
  { name: 'Mrs. Nisha Rao', subject: 'Social Studies', image: '/images/t5.jpg' },
  { name: 'Mr. Ajay Desai', subject: 'Hindi', image: '/images/t6.jpg' },
  { name: 'Mr. Ajay Desai', subject: 'Hindi', image: '/images/t7.jpg' },
  { name: 'Mr. Ajay Desai', subject: 'Hindi', image: '/images/t8.jpg' },
];

const TeacherGallery = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);


  const openModal = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const closeModal = () => {
    setSelectedTeacher(null);
  };
  // Toggle zoom on image click
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl w-[85%] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
  {/* Small subtitle */}
  <h2 className="text-xs sm:text-sm md:text-base leading-[20px] sm:leading-[24px] text-white uppercase tracking-[0.3em] font-normal">
    TEACHERS
  </h2>

  {/* Main heading */}
  <p className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-3">
    Meet our expert teachers
  </p>
</div>


        {/* Teacher Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(teacher)}
            >
              {/* Teacher Image */}
              <div className="relative w-full h-[300px] overflow-hidden">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>


              {/* Hidden text that slides up on hover */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">{teacher.name}</h3>
                  <p className="text-sm text-gray-200">{teacher.subject} Teacher</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedTeacher && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl shadow-xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-gray-200 cursor-pointer text-black rounded-full p-1 shadow hover:bg-gray-300 z-[999]"
              onClick={closeModal}
            >
              <X size={20} />
            </button>

            {/* Teacher Image - Zoomable */}
            <div className="relative flex items-center justify-center overflow-hidden">
              <img
                src={selectedTeacher.image}
                alt={selectedTeacher.name}
                onClick={() => setIsZoomed(!isZoomed)}
                className={`rounded-lg transform cursor-zoom-in
            ${isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'}
            transition-transform duration-700 ease-in-out`}
                style={{
                  maxHeight: '300px',
                  objectFit: 'contain',
                  willChange: 'transform',
                  zIndex: 10 // ensure image stays under the button
                }}
              />
            </div>

            {/* Teacher Info */}
            <div className="px-3 pb-3 overflow-y-auto max-h-[50vh]">
              <h3 className="text-2xl font-bold text-darkblue">{selectedTeacher.name}</h3>
              <p className="text-lg text-gray-600 mt-1">{selectedTeacher.subject} Teacher</p>
              <p className="text-gray-700 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
                nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nunc nisl eu nunc.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeacherGallery;
