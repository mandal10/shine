'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const menuItems = [
  "HOME",
  "ABOUT US",
  "COMMUNITY",
  "ACADEMIC",
  "SCHOOL NEWS",
  "GALLERY",
  "LOGIN",
  "CONTACT",
];

const loginSubMenu = [
  { name: "Admin / Teacher", link: "/login/admin-teacher" },
  { name: "Parent / Student", link: "/login/parent-student" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [mobileLoginOpen, setMobileLoginOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-primary text-white sticky top-[90px] md:top-[48px] z-40 py-2 lg:py-0">
      <div className="w-[100%] max-w-[1600px] mx-auto px-4 flex items-center justify-between relative">

        {/* ✅ Logo links to home */}
        <Link
          href="/"
          className="text-lg font-bold bg-white rounded-b-2xl absolute -top-10 left-6 py-[15px] px-[20px] z-10 "
          style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)' }}
        >
          <div className="relative h-10 w-35 mt-6  sm:mt-8">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center justify-end gap-1 text-[12px] font-medium uppercase tracking-wide w-full">
          {menuItems.map((item) => {
            const link = item === "HOME" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
            const isActive = pathname === link || (item === "HOME" && pathname === "/");

            if (item === "LOGIN") {
              return (
                <li
                  key={item}
                  className="relative group"
                  onMouseEnter={() => setIsLoginOpen(true)}
                  onMouseLeave={() => setIsLoginOpen(false)}
                >
                  <div
                    className={`px-[10px] py-[9px] cursor-pointer transition-colors duration-200 hover:bg-blue ${isActive ? 'bg-blue text-white' : ''
                      }`}
                  >
                    {item}
                  </div>

                  {/* Dropdown */}
                  {isLoginOpen && (
                    <ul
                      className="absolute top-full -left-10 bg-primary text-white shadow-lg rounded-sm min-w-[180px] z-20"
                      onMouseEnter={() => setIsLoginOpen(true)}
                      onMouseLeave={() => setIsLoginOpen(false)}
                    >
                      {loginSubMenu.map((sub) => (
                        <li key={sub.name} className="border-b border-white/20">
                          <Link
                            href={sub.link}
                            className="block px-4 py-2 hover:bg-blue"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li
                key={item}
                className={`px-[10px] py-[10px] cursor-pointer transition-colors duration-200 hover:bg-blue ${isActive ? 'bg-blue text-white' : ''
                  }`}
              >
                <Link href={link} className="py-[9px] ">
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='relative'>
          <ul className="flex flex-col lg:hidden absolute w-full pt-10 sm:pt-14 bg-primary px-4 py-2 text-sm font-semibold uppercase space-y-2">
            {menuItems.map((item) => {
              const link = item === "HOME" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
              const isActive = pathname === link || (item === "HOME" && pathname === "/");

              if (item === "LOGIN") {
                return (
                  <li key={item}>
                    <button
                      onClick={() => setMobileLoginOpen(!mobileLoginOpen)}
                      className={`flex justify-between w-full px-3 py-2 rounded-sm hover:bg-blue ${isActive ? 'bg-blue text-white' : ''
                        }`}
                    >
                      {item}
                    </button>
                    {mobileLoginOpen && (
                      <ul className="pl-6 mt-1 space-y-1">
                        {loginSubMenu.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.link}
                              className="block px-3 py-1 hover:bg-blue/50"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item}>
                  <Link
                    href={link}
                    className={`block w-full px-3 py-2 rounded-sm hover:bg-blue ${isActive ? 'bg-blue text-white' : ''
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
