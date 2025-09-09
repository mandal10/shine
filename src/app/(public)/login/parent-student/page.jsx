'use client';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdminTeacherLogin() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            

            {/* Page Title */}
            <div className="text-center bg-primary text-white font-semibold leading-[100%] tracking-[0.1px] rounded-xl w-full md:w-[70%] max-w-7xl text-[24px] sm:text-[32px] md:text-[42px] mx-auto mt-[80px] p-4 sm:p-6">
                <h1>Login For Parent / Student</h1>
            </div>

            {/* Card Container */}
            <div className="flex items-center justify-center mt-7">
                <div className="bg-white rounded-xl shadow-lg border-2 border-primary overflow-hidden flex flex-col md:flex-row w-full md:w-[70%] max-w-7xl">

                    {/* Left Side */}
                    <div className="md:w-1/2 text-center flex flex-col p-2">
                        {/* Background with Illustration */}
                        <div className="relative h-[180px] sm:h-[220px] md:h-[255px] w-full bg-[url('/images/dashboard-illustration.png')] bg-cover bg-center rounded-t-xl">
                            <div className="absolute left-1/2 md:top-52 top-33 transform -translate-x-1/2 -translate-y-1/2 w-[350px] max-w-full">
                                <Image
                                    src="/images/login.png"
                                    alt="Dashboard Preview"
                                    width={350}   
                                    height={200}  
                                    priority
                                    className="object-contain"
                                />
                            </div>
                        </div>


                        {/* Text Section */}
                        <div className="bg-amber-400 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center flex-1 rounded-b-xl">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-darkblue text-center">
                                SchoolAura a new beginning
                            </h2>
                            <p className="text-xs sm:text-sm mt-2 text-darkblue max-w-sm text-center">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur
                            </p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="bg-white flex flex-col justify-center p-4 sm:p-6 md:w-1/2">
                        {/* Logos */}
                        <div className="mb-6">
                            <div className="flex items-center justify-center gap-4">
                                <Image
                                    src="/images/aura.png"
                                    alt="SchoolAura"
                                    width={64}   // adjust to your image ratio
                                    height={64}
                                    className="h-10 sm:h-12 md:h-16 w-auto"
                                />
                                <Image
                                    src="/images/hand.png"
                                    alt="hand"
                                    width={28}
                                    height={28}
                                    className="h-5 sm:h-6 md:h-7 w-auto"
                                />
                                <Image
                                    src="/images/shine.png"
                                    alt="School Logo"
                                    width={64}
                                    height={64}
                                    className="h-10 sm:h-12 md:h-16 w-auto"
                                />
                            </div>

                            <h1 className="text-center font-semibold mt-4 text-[14px] sm:text-[16px] leading-[120%] text-black">
                                Shining Star School Islamnagar Sign In (School ERP)
                            </h1>
                        </div>

                        {/* Form */}
                        <form className="space-y-3">
                            <input
                                type="text"
                                placeholder="Student Id Or Parent Mobile Number"
                                className="w-full px-4 py-2 rounded-md outline-none border border-primary focus:ring-1 focus:ring-primary"
                            />
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    className="w-full px-4 py-2 rounded-md outline-none border border-primary focus:ring-1 focus:ring-primary"
                                />
                                <span
                                    className="absolute right-3 top-2.5 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </span>
                            </div>

                            <div className="flex justify-end">
                                <Link href="#" className="text-xs sm:text-sm text-gray-500 hover:underline">
                                    Forgot Your Password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-2 rounded-md font-semibold cursor-pointer hover:bg-primary/90 transition"
                            >
                                Login
                            </button>
                        </form>

                        {/* Store Buttons */}
                        <div className="mt-4">
                            <h1 className="text-[10px] sm:text-[12px] font-normal leading-[100%] mb-2">
                                Download The App Now
                            </h1>
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/playstore.png"
                                    alt="Google Play Store"
                                    width={100}   // adjust to your image size
                                    height={30}
                                    className="h-4 sm:h-5 w-auto cursor-pointer hover:scale-105 transition-transform"
                                />
                                <Image
                                    src="/images/applestore.png"
                                    alt="Apple App Store"
                                    width={100}
                                    height={30}
                                    className="h-4 sm:h-5 w-auto cursor-pointer hover:scale-105 transition-transform"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

           
        </div>
    );
}
