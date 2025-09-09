import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";

const ContactPage = () => {
    return (
        <section className="py-20 bg-white">
            <div className="w-[85%] max-w-7xl mx-auto bg-white mt-6 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-15">

                {/* LEFT: Contact Form */}
                <div>
                    <h2 className="font-semibold leading-[60px] text-darkblue text-[44px] mb-6">
                        Send Us A Message
                    </h2>
                    <form className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Name */}
                            <div className="flex-1">
                                <label className="block text-darkblue text-[20px] font-normal leading-[32px]">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full border-b border-darkblue text-[20px] font-normal leading-[32px] focus:outline-none focus:border-primary"
                                    required
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="flex-1">
                                <label className="block text-darkblue text-[20px] font-normal leading-[32px]">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    className="w-full border-b border-darkblue text-[20px] font-normal leading-[32px] focus:outline-none focus:border-primary"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-darkblue text-[20px] font-normal leading-[32px]">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="w-full border-b border-darkblue text-[20px] font-normal leading-[32px] focus:outline-none focus:border-primary"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-darkblue text-[20px] font-normal leading-[32px]">
                                Message
                            </label>
                            <textarea

                                className="w-full border-b border-darkblue text-[20px] font-normal leading-[32px] focus:outline-none focus:border-primary"
                                required
                            ></textarea>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            {/* Checkbox */}
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-darkbule border-darkblue rounded focus:ring-primary"
                                />
                                <span className="text-darkblue text-sm leading-[24px] font-normal">
                                    Subscribe to the{" "}
                                    <span className="underline">School Newsletter</span>
                                </span>
                            </label>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="text-primary border border-primary bg-white px-[30px] hover:bg-primary hover:text-white py-[5px] rounded-lg cursor-pointer duration-300 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                {/* RIGHT: Contact Information */}
                <div>
                    <div className=" p-6 flex flex-col justify-center bg-primary">
                        <h3 className="text-[30px] leading-[40px] font-bold text-white mb-6">Our Information</h3>
                        <div className="space-y-5 text-white">
                            <div className="flex items-start gap-4 text-[20px] leading-[32px] font-normal">

                                <p className="w-[350px]">1234 Education Lane, Learning City, EDFG States 56789</p>
                            </div>

                            <div className="flex items-start gap-4 text-[20px] leading-[32px] font-normal">
                                <Mail className="text-white w-6 h-6" />
                                <p>admission@gmail.com</p>
                            </div>
                            <div className="flex items-start gap-4 text-[20px] leading-[32px] font-normal">
                                <Phone className="text-white w-6 h-6" />
                                <p>+1 ( 555 ) 123 - 4567</p>
                            </div>

                        </div>
                    </div>
                    <Image
                        src="/images/vector.png"
                        alt="Images"
                        width={800}   // adjust to real width
                        height={400}  // adjust to real height
                        className="mt-8 w-full h-auto"
                    />

                </div>


            </div>
        </section>
    );
};

export default ContactPage;
