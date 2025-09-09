import React from 'react';
import LeftSection from './leftSection';
import RightSection from './rightSection';

function EventSection() {
    return (
        <div className='flex flex-col md:flex-row justify-between items-start gap-2  mt-[80px] w-[85%] max-w-7xl mx-auto '>
            <div className='w-full md:w-[45%]'>
                <LeftSection />

            </div>
            <div className='w-full md:w-[55%]'>
                <RightSection />

            </div>
        </div>
    )
}

export default EventSection