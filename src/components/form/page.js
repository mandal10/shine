'use client';

import { ArrowRight } from 'lucide-react';

export default function CallbackForm() {
  return (
    <section className="bg-primary rounded-[24px] sm:rounded-[32px] py-12 sm:py-16 md:py-20 px-4 text-white text-center w-[95%] max-w-7xl mx-auto my-0 lg:my-20">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-4 leading-snug md:leading-[100%]">
        Request a call back?
      </h2>

      {/* Subtext */}
      <p className="text-sm sm:text-base md:text-lg lg:text-[18px] text-white/70 mb-8 sm:mb-10">
        Please fill out the form and press the submit button.
        <br className="hidden sm:block" />
        We will get back to you within 1–2 business days.
      </p>

      {/* Form */}
      <form className="max-w-3xl sm:max-w-4xl mx-auto px-2 sm:px-6">
        <div className="flex items-center w-full bg-white/20 rounded-xl sm:rounded-2xl overflow-hidden px-4 sm:px-6 py-3 sm:py-5">
          <input
            type="text"
            placeholder="Enter Your E-mail Or Mobile Number"
            className="bg-transparent flex-1 text-white text-sm sm:text-base md:text-lg py-2 placeholder-white font-medium outline-none border-none"
          />
          <button
            type="submit"
            className="ml-3 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer shrink-0"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

      </form>
    </section>
  );
}
