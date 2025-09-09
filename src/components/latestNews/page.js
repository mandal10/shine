'use client';
import Image from "next/image";

const LatestNewsCard = ({ image, date, author, title, index }) => {
  const isEven = index % 2 === 1;

  return (
    <div
      className={`${isEven ? 'bg-gray2' : 'bg-lightpurple'
        } rounded-3xl overflow-hidden shadow-sm  w-full group`}
    >
      {/* ✅ Image with hover zoom */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-t-3xl transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-5 ">
        <div className="flex justify-between mb-2">
          <span className="text-[12px] text-blackvery leading-[24px] font-normal">
            {date}
          </span>
          <span className="text-[12px] text-blackvery leading-[24px] font-normal">
            {author}
          </span>
        </div>
        <div className="border-b border-black mb-2"></div>
        <h3 className="text-base font-normal text-gray leading-[130%] tracking-[1%]">
          {title}
        </h3>
      </div>
    </div>
  );
};


const BlogSection = ({ heading = 'Blogs', subheading = 'Our latest news' }) => {
  const blogs = [
    {
      image: '/images/blog1.jpg',
      date: '14 OCTOBER 2024',
      author: 'David Harper',
      title: 'Introducing New Language Courses: Expanding Horizons',
    },
    {
      image: '/images/blog2.jpg',
      date: '14 OCTOBER 2024',
      author: 'David Harper',
      title: 'Introducing New Language Courses: Expanding Horizons',
    },
    {
      image: '/images/blog3.jpg',
      date: '14 OCTOBER 2024',
      author: 'David Harper',
      title: 'Introducing New Language Courses: Expanding Horizons',
    },
  ];

  return (
    <section className="md:px-4 px-0 xl:px-0 bg-white">
      <div className="w-[85%] max-w-7xl mx-auto">
        {/* Blog Header */}
        <div className="mb-10">
          <span className="inline-block pl-[16px] px-[5px] py-[6px] text-[14px] font-normal uppercase tracking-[8.4px] leading-[100%] text-black bg-white border border-gray-300 shadow rounded-full mb-2">
            {heading}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-snug sm:leading-[36px] md:leading-[48px] lg:leading-[60px] mt-4 font-bold text-darkblue">
            {subheading}
          </h2>

        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <LatestNewsCard
              key={index}
              index={index}
              image={blog.image}
              date={blog.date}
              author={blog.author}
              title={blog.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
