import { Calendar, Share2, Search, Plus } from "lucide-react";

export default function BlogSidebar() {
  return (
    <aside className=" py-12 space-y-8">
      {/* Author Info */}
      <div className="flex items-center gap-4">
        <img
          src="/images/staff1.jpg"
          alt="Author"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="text-[16px] leading-[24px] text-gray-600">Author</p>
          <h3 className=" text-[18px] sm:text-[22px]  font-bold leading-[32px] text-darkblue whitespace-nowrap">
            Elizabeth Greene
          </h3>
        </div>
      </div>

      {/* Date & Shares */}
      <div className="flex items-center justify-between gap-6 text-sm text-gray-700">
        <div className="flex items-center gap-2 text-[16px] leading-[24px] font-normal whitespace-nowrap">
          <Calendar className="w-4 h-4 text-darkblue text-[16px] leading-[24px] font-normal" />
          <span>29 July 2024</span>
        </div>
        <div className="flex items-center gap-2 text-[16px] leading-[24px] font-normal whitespace-nowrap">
          <Share2 className="w-4 h-4 text-darkblue text-[16px] leading-[24px] font-normal" />
          <span>200 Shares</span>
        </div>
      </div>

      {/* Search Bar */}
      <div>
        <h4 className=" border-l-4 border-darkblue pl-2 mb-5 text-[24px] leading-[32px] font-bold">
          Search Bar
        </h4>
        <div className="flex items-center bg-white border border-darkblue rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Enter your keywords ..."
            className="flex-1 p-2 text-sm outline-none"
          />
          <button className="p-2  text-darkblue">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h4 className=" border-l-4 border-darkblue pl-2 mb-5 text-[24px] leading-[32px] font-bold">
          Categories
        </h4>
        <div className="bg-primary p-4 space-y-2 rounded-lg text-[16px] leading-[24px] font-normal text-white">
          {[
            "Academic Achievements",
            "Events & Activities",
            "Student Life",
            "Teacher Spotlights",
            "Community Outreach",
          ].map((category, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 cursor-pointer hover:underline"
            >
              <Plus className="w-4 h-4" /> <span>{category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Articles */}
      <div>
        <h4 className=" border-l-4 border-darkblue pl-2 mb-5 text-[24px] leading-[32px] font-bold">
          Recent Articles
        </h4>
        <div className="space-y-4">
          <div className="flex  gap-3">
            <img
              src="/images/gallery3.jpg"
              alt="Study"
              className="w-25 h-25 rounded object-cover"
            />
            <div>
              <p className="font-semibold xl:text-[20px] text-[17px] lg:leading-[26px]  ">
                Top Strategies for Effective Study
              </p>
              <span className="font-normal text-[16px] leading-[24px] text-gray-500">18 DEC 2024</span>
            </div>
          </div>
          <div className="flex gap-3">
            <img
              src="/images/gallery2.jpg"
              alt="Balance Life"
              className="w-25 h-25 rounded object-cover"
            />
            <div>
              <p className="font-semibold xl:text-[20px] text-[17px] lg:leading-[26px]  ">
                How to Balance Your Academics and Life
              </p>
              <span className=" text-gray-500 font-normal text-[16px] leading-[24px]">27 MAR 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Tags */}
      <div>
        <h4 className=" border-l-4 border-darkblue pl-2 mb-5 text-[24px] leading-[32px] font-bold">
          Article Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            "#STEM",
            "#StudentSuccess",
            "#TeacherSpotlight",
            "#Events",
            "#EdmunSchoolExcellence",
          ].map((tag, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded text-[16px] leading-[24px] font-normal ${
                tag === "#Events"
                  ? "bg-darkblue text-white"
                  : "bg-white border border-darkblue"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
