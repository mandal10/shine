// components/TopBar.tsx
import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import '../../app/style/custom.css';
import Link from 'next/link';

const TopBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white w-full">
      <div className="topbar w-[100%] px-4 max-w-[1600px] mx-auto flex flex-col md:flex-row md:justify-end md:items-center py-2  gap-3 md:gap-6 text-sm">

        {/* Phone */}
        <div className="flex items-center gap-2">
          {/* Small icon */}
          <div className="md:hidden border border-blackdark rounded-full p-[4px]">
            <Phone size={12} className="text-blackdark" />
          </div>
          {/* Larger icon */}
          <div className="hidden md:block border border-blackdark rounded-full p-[5px]">
            <Phone size={16} className="text-blackdark" />
          </div>
          <div className="text-[10px] md:text-[12px]">
            <div className="font-semibold text-blackdark">Contact Now:</div>
            <div className="font-normal leading-[14px] md:leading-[16px] text-blackdark">+91-9999 214 000</div>
          </div>
        </div>

        {/* Mail */}
        <div className="flex items-center gap-2">
          <div className="md:hidden border border-blackdark rounded-full p-[4px]">
            <Mail size={12} className="text-blackdark" />
          </div>
          <div className="hidden md:block border border-blackdark rounded-full p-[5px]">
            <Mail size={16} className="text-blackdark" />
          </div>
          <div className="text-[10px] md:text-[12px]">
            <div className="font-semibold text-blackdark">Mail</div>
            <div className="text-blackdark font-normal leading-[14px] md:leading-[16px]">tony.Ortiz@gmail.com</div>
          </div>
        </div>

        {/* Clock */}
        <div className="flex items-center gap-2 md:pr-[32px]">
          <div className="md:hidden border border-blackdark rounded-full p-[4px]">
            <Clock size={12} className="text-blackdark" />
          </div>
          <div className="hidden md:block border border-blackdark rounded-full p-[5px]">
            <Clock size={16} className="text-blackdark" />
          </div>
          <div className="text-[10px] md:text-[12px]">
            <div className="font-normal text-blackdark">07:30 - 15:00</div>
            <div className="text-blackdark font-normal leading-[14px] md:leading-[16px]">Mon to Sun</div>
          </div>
        </div>

        {/* Button */}
        <Link href="/admission-enquiry">
          <button
            className="w-fit md:w-auto border border-blackvery text-blackdark cursor-pointer rounded-md px-[8px] md:px-[12px] py-[5px] md:py-[6px] font-semibold leading-[14px] md:leading-[16px] text-[10px] md:text-[12px] hover:bg-blackvery hover:text-white transition"
          >
            Admission Enquiry
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
