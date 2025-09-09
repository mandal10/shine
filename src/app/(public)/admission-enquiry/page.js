import React from 'react'
import AdmissionForm from './admissionForm'
import Image from 'next/image'

function admissionEnquiry() {
    return (
        <div>
            {/* School Header */}
            <div className="flex flex-col items-center mt-10">
                <div className='w-40  h-30 relative'>
                    <Image
                    src="/images/addmissionlogo.png"
                    alt="School Logo"
                    fill
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className=" mb-3"
                />
                </div>
                <h1 className="text-2xl text-center font-bold text-darkblue mt-4">
                    <span className="block md:text-[50px] text-[30px] font-extrabold leading-[100%] ">SHINING STAR</span>
                    <span className="block text-[20px] font-bold mt-3">SCHOOL ISLAMNAGAR</span>
                </h1>

                <p className="text-[32px] font-medium leading-[100%] text-darkblue mt-10 mb-5">
                    Admission Form
                </p>
            </div>
            <AdmissionForm />
        </div>
    )
}

export default admissionEnquiry
