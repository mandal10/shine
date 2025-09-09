import Image from 'next/image';
import React from 'react';

function RightSection() {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center justify-center px-0 md:px-4 py-6 ">
      {/* Left Block */}
      <div className="flex flex-col items-center space-y-5 w-full md:w-1/2">
        {/* Image container */}
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[340px]">
          <Image
            src="/images/event2.jpg"
            alt="Left Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg shadow-md"
          />

          {/* Text inside image on small screens */}
          <div className="absolute top-30 sm:top-55 left-0 w-full p-4 md:hidden">
            <div className="text-white bg-primary p-4 rounded-lg w-full">
              <h1 className="text-[16px] font-normal mb-2 leading-[100%] tracking-[0.4px]">
                Our Mission
              </h1>
               <p className="font-light text-[12px] leading-[21px]">
                Figma ipsum component variant main layer. Union selection selection
                opacity layout star slice flatten variant. Figma asset content.
               
              </p>
            </div>
          </div>
        </div>

        {/* Text below image on medium+ screens */}
        <div className="hidden md:block text-white bg-primary p-4 rounded-lg w-full">
          <h1 className="text-[16px] font-normal mb-2 leading-[100%] tracking-[0.4px]">
            Our Mission
          </h1>
           <p className="font-light text-[12px] leading-[21px]">
                Figma ipsum component variant main layer. Union selection selection
                opacity layout star slice flatten variant. Figma asset content.
                Figma ipsum component variant main layer. Union selection selection
                opacity layout star slice flatten variant. Figma asset content.
              </p>
        </div>
      </div>


      {/* Right Block */}
      <div className="flex flex-col items-center space-y-5 w-full md:w-1/2 mt-15 md:mt-0">
        {/* Text below image on medium+ screens */}
        <div className="hidden md:block bg-purple text-blue p-4 rounded-lg w-full mt-4 md:mt-0">
          <h1 className="text-[16px] font-normal mb-2 leading-[100%] tracking-[0.4px]">
            Our Mission
          </h1>
          <p className="font-light text-[12px] leading-[21px]">
            Figma ipsum component variant main layer. Union selection selection
            opacity layout star slice flatten variant. Figma asset content.
            Figma ipsum component variant main layer. Union selection selection
            opacity layout star slice flatten variant. Figma asset content.
          </p>
        </div>
        {/* Image container */}
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[340px]">
           <Image
            src="/images/event1.jpg"
            alt="Right Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg shadow-md"
          />

          {/* Text inside image on small screens */}
          <div className="absolute top-30 sm:top-55 left-0  w-full p-4 md:hidden">
            <div className="bg-purple text-blue p-4 rounded-lg w-full">
              <h1 className="text-[16px] font-normal mb-2 leading-[100%] tracking-[0.4px]">
                Our Mission
              </h1>
              <p className="font-light text-[12px] leading-[21px]">
                Figma ipsum component variant main layer. Union selection selection
                opacity layout star slice flatten variant. Figma asset content.
                
              </p>
            </div>
          </div>
         

          
        </div>

      
      </div>

    </div>
  );
}

export default RightSection;
