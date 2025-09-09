"use client";
import Link from "next/link";
import React from "react";

const sections = [
  { id: "introduction", title: "Introduction" },
  {
    id: "features",
    title: "Key Features",
    subItems: [
      { id: "student-management", title: "Student Management" },
      { id: "attendance", title: "Attendance Tracking" },
      { id: "exams", title: "Exams & Reports" },
      { id: "fee-management", title: "Fee Management" },
    ],
  },
  { id: "benefits", title: "Benefits" },
  { id: "mobile-app", title: "Mobile App" },
  { id: "conclusion", title: "Conclusion" },
];

const TableOfContents = () => {
  return (
    <aside className="p-5 bg-primary border border-gray-200 rounded-xl shadow-sm ">
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-white">Table of Contents</h2>

      {/* List */}
      <ol className="list-decimal list-inside space-y-2 text-white">
        {sections.map((section, index) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className=" transition"
            >
              {index + 1}. {section.title}
            </Link>

            {/* Sub-items */}
            {section.subItems && (
              <ol className="list-[decimal] list-inside pl-6 mt-1 space-y-1 text-sm text-white">
                {section.subItems.map((sub, subIndex) => (
                  <li key={sub.id}>
                    <Link
                      href={`#${sub.id}`}
                      className="hover:text- transition"
                    >
                      {index + 1}.{subIndex + 1} {sub.title}
                    </Link>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </aside>
  );
};

export default TableOfContents;
