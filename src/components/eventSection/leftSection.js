import React from 'react'
import { ArrowUpRight } from 'lucide-react';

function leftSection() {

    const events = [
        { id: 1, date: '19-05-2025', title: 'Celebrating "National Technology Day" on May 21' },
        { id: 2, date: '19-05-2025', title: 'Celebrating "National Technology Day" on May 21' },
        { id: 3, date: '19-05-2025', title: 'Celebrating "National Technology Day" on May 21' },
        { id: 4, date: '19-05-2025', title: 'Celebrating "National Technology Day" on May 21' },
    ];
    return (
        <div className="max-w-5xl mx-auto ">

            {/* Badge */}
            <div className="inline-block text-center bg-white  border  border-gray-300 shadow pl-[12px] px-[2px] py-[6px] rounded-full leading-[100%] tracking-[8.4px] text-[14px]  text-black mb-2">
                EVENTS
            </div>

            {/* Heading */}
            <h2 className="md:text-[44px] text-[35px] font-normal text-darkblue leading-[41px] md:leading-[60px]">
                Join our next <br className="hidden md:block" />
                upcoming events
            </h2>

            {/* Description */}
            <p className=" text-blackvery max-w-2xl mx-auto text-[12px] leading-[21px] font-light mt-3 md:mt-0">
                Figma ipsum component variant main layer. Union selection selection opacity layout star slice flatten variant. Figma asset content team pen follower align duplicate...
            </p>

            <section className=" py-5  max-w-5xl mx-auto space-y-3">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-lightpurple px-3 py-[12px]  rounded-xl shadow-sm relative gap-2"
                    >
                        <span className="inline-block bg-brinjal font-normal text-[11px] leading-[100%] text-white absolute top-0  px-2 py-1 rounded-b-lg  w-max">
                            {event.date}
                        </span>
                        <p className="text-black text-[16px] leading-[100%] font-normal mt-[18px]">{event.title}</p>
                    </div>
                ))}

                <button className="inline-flex items-center mt-1  gap-2 bg-primary hover:bg-indigo-600 text-white px-4 py-[5px] rounded-full text-sm font-normal transition-all duration-300 shadow-md cursor-pointer">
                   <span>View More</span> 
                    <span className="bg-white inline-flex justify-end text-black p-[2px] rounded-full">
                        <div>
                        <ArrowUpRight size={16} />

                        </div>
                    </span>
                </button>
            </section>
        </div>
    )
}

export default leftSection