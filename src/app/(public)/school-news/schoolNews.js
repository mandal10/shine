"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// Categories for filtering
const menuItems = [
  "All",
  "Program",
  "Events",
  "Achievements",
  "Teachers",
  "Updates",
];

// Example School News Data
const newsList = [
  {
    image: '/images/gallery1.jpg',
    title: "Annual Cultural Program Announced",
    date: "2025-08-10",
    description: "Join us for our annual cultural program with music, dance, and drama performances.",
    category: "Program",
    url: "/blog"
  },
  {
    image: '/images/gallery2.jpg',
    title: "Mid-Term Examination Schedule",
    date: "2025-08-05",
    description: "Mid-term exams will be held from 1st to 10th September.",
    category: "Updates",
    url: "/blog"

  },
  {
    image: '/images/gallery3.jpg',
    title: "Independence Day Celebration",
    date: "2025-08-15",
    description: "Flag hoisting ceremony followed by cultural performances.",
    category: "Events",
    url: "/blog"

  },
  {
    image: '/images/gallery4.jpg',
    title: "New Teachers Joining",
    date: "2025-08-01",
    description: "We welcome new faculty members to our teaching team this semester.",
    category: "Teachers",
    url: "/blog"

  },
  {
    image: '/images/gallery5.jpg',
    title: "Science Exhibition Winners",
    date: "2025-07-28",
    description: "Congratulations to the winners of our annual science fair!",
    category: "Achievements",
    url: "/blog"

  },
  {
    image: '/images/gallery6.jpg',
    title: "School Annual Day",
    date: "2025-07-20",
    description: "Annual Day celebrations with student performances and prize distribution.",
    category: "Program",
    url: "/blog"

  },
  {
    image: '/images/gallery7.jpg',
    title: "Teachers' Workshop",
    date: "2025-07-15",
    description: "A workshop to enhance teaching techniques and student engagement.",
    category: "Teachers",
    url: "/blog"

  },
  {
    image: '/images/gallery8.jpg',
    title: "Inter-School Sports Meet",
    date: "2025-07-10",
    description: "Our school participated and won several medals in the inter-school sports meet.",
    category: "Achievements",
    url: "/blog"

  },
  {
    image: '/images/g1.jpg',
    title: "Music Club Event",
    date: "2025-07-05",
    description: "An evening of melodies performed by the school music club.",
    category: "Events",
    url: "/blog"

  },
  {
    image: '/images/g2.jpg',
    title: "Library Updates",
    date: "2025-07-01",
    description: "Over 500 new books have been added to our library collection.",
    category: "Updates",
    url: "/blog"

  },
];


function SchoolNews() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter news based on selected category
  const filteredNews = selectedCategory === "All"
    ? newsList
    : newsList.filter(item => item.category === selectedCategory);

  return (
    <div className='max-w-[85%] mx-auto py-10'>
      {/* Category Menu */}
      <ul className='flex items-center gap-3 mt-0
                overflow-x-auto md:overflow-visible
                flex-nowrap md:justify-center
                whitespace-nowrap
                -mx-4 px-4 py-6
                no-scrollbar'>
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setSelectedCategory(item)}
            className={`px-4 py-1 rounded-md cursor-pointer border duration-300 ${selectedCategory === item
              ? "bg-primary text-white border-primary"
              : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
              }`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* News List */}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-5 w-[85%] max-w-7xl mx-auto'>
        {filteredNews.map((news, index) => (
          <Link href={news.url} key={index} className='bg-white shadow-lg rounded-lg overflow-hidden'>
            <div className="relative w-full h-48">
              <Image
                src={news.image}
                alt={news.title}
                fill
                sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           33vw"
                className="object-cover rounded-md"
              />
            </div>



            <div className='p-4'>
              <h3 className='text-sm lg:text-lg font-bold text-darkblue'>{news.title}</h3>
              <p className='text-gray-500 text-sm'>{news.date}</p>
              <p className='mt-2 text-gray-700 text-sm'>{news.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SchoolNews;
