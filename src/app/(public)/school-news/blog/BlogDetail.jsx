import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar"; // the sidebar code from earlier
import React from 'react'
import CommonHero from '@/components/commonhero/page'
import BlogSection from '@/components/latestNews/page'



export default function BlogDetail() {
    return (
        <div className="">
            <CommonHero heading='Blog' subHeading='Unveiling Our New State-of-the-Art STEM Lab' />

            <div className="w-[85%] max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                <div className="lg:w-[70%]">
                    {/* Left Column - Blog Content */}
                <LeftSidebar />
                </div>

                <div className="lg:w-[30%]">
                    {/* Right Column - Sidebar */}
                <RightSidebar />
                </div>
            </div>
            <div className='my-8'>
                <BlogSection heading='Recent' />
            </div>
           
        </div>
    );
}
