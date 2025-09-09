'use client';

import { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const faqs = [
    {
        question: 'Who can benefit from your services?',
        answer:
            'Our services cater to startups, enterprises, and businesses across various industries looking to innovate and scale.',
    },
    {
        question: 'How do I know which service is right for my business?',
        answer:
            'Our expert team will guide you through a tailored consultation to match your business needs.',
    },
    {
        question: 'How long does it take to complete a project?',
        answer: 'Timelines vary, but most projects are completed within 4-8 weeks.',
    },
    {
        question: 'Do you offer flexible payment plans?',
        answer:
            'Yes, we offer multiple payment options and schedules to suit different budgets.',
    },
    {
        question: 'Is there a free trial or demo available?',
        answer:
            'Absolutely! We provide demos and trial periods based on the service you’re interested in.',
    },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleIndex = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    return (
        <section className="py-16 mt-0  bg-white  w-[90%] max-w-7xl mx-auto ">
            <h2 className="text-4xl font-normal leading-tight text-heading mb-4 tracking-[-3%] ">
                Frequently<br />
                <span className="text-heading">asked questions</span>
            </h2>
            <div className="   grid md:grid-cols-3 gap-10 items-start">
                {/* Left: FAQs */}
                <div className="md:col-span-2 space-y-3">

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-4 transition-all duration-300 ${activeIndex === index
                                ? 'bg-lightpurple border-l-4 border-primary'
                                : 'bg-graylight'
                                }`}
                        >
                            <button
                                onClick={() => toggleIndex(index)}
                                className="w-full flex justify-between items-center duration-300 text-left text-[18px]  font-normal text-heading"
                            >
                                <span>{faq.question}</span>
                                {activeIndex === index ? (
                                    <Minus className="w-5 h-5" />
                                ) : (
                                    <Plus className="w-5 h-5" />
                                )}
                            </button>

                            {activeIndex === index && (
                                <p className="mt-1 text-heading text-[14px] font-normal  duration-300">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right: CTA Card */}
                <div className="bg-gray-100 rounded-3xl p-5 flex flex-col gap-5 items-center justify-center text-center shadow h-full">
                    <div className="bg-primary text-white p-3 rounded-full mb-4">
                        <MessageCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-[22px]  text-heading font-normal leading-[22px] mb-2">
                        Do you have more questions?
                    </h3>
                    <p className="text-[19px] text-heading font-normal leading-[31px] tracking-[-3%] mb-6">
                        We implement industry-leading security measures, encryption,
                        global data protection standards.
                    </p>
                    <button className="bg-primary text-white px-5 w-full py-3 rounded-full text-sm font-medium hover:bg-indigo-600 transition">
                        Shoot a Direct Mail
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
