'use client';
import Image from 'next/image';
import MediaLink from './mediaLink';

export default function Footer() {
  return (
    <footer className="bg-white py-12 mb-5 px-6 xl:px-0  text-sm text-[#032D23] w-[85%] max-w-7xl mx-auto">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo & Social */}
        <div>
          <Image
            src="/images/content.png"
            alt="Shining Star School"
            width={300}
            height={300}
            className="mb-3"
          />

          <p className="mb-4 text-graylight1 font-medium text-[16px] leading-[160%]">Your partner in social media success</p>
          <MediaLink />
          <p className="mt-6 text-[16px] font-normal leading-[160%] text-graylight1">© Copyright Socialcrea 2024</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold mb-4 text-blackvery text-[24px] leading-[32px]">Links</h4>
          <ul className="space-y-5 text-blackvery">
            <li className='hover:translate-x-1 duration-300 text-[16px] font-normal leading-[16px]'><a href="#">Homepage v1</a></li>
            <li className='hover:translate-x-1 duration-300 text-[16px] font-normal leading-[16px]'><a href="#">Homepage v2</a></li>
            <li className='hover:translate-x-1 duration-300  text-[16px] font-normal leading-[16px]'><a href="#">Homepage v3</a></li>
            <li className='hover:translate-x-1 duration-300 text-[16px] font-normal leading-[16px]'><a href="#">About</a></li>
            <li className='hover:translate-x-1 duration-300 text-[16px] font-normal leading-[16px]'><a href="#">Programs</a></li>
            <li className='hover:translate-x-1 duration-300 text-[16px] font-normal leading-[16px]'><a href="#">Community</a></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-bold mb-4 text-blackvery text-[24px] leading-[32px]">Programs</h4>
          <ul className="space-y-5 text-blackvery">
            <li className='hover:translate-x-1 duration-300 text-[16px] font-normal leading-[16px]'><a href="#">College AP Program</a></li>
            <li className='hover:translate-x-1 duration-300 text-[16px] font-normal leading-[16px]' ><a href="#">STEM Program</a></li>
            <li className='hover:translate-x-1 duration-300 text-[16px] font-normal leading-[16px]'><a href="#">Arts Program</a></li>
            <li className='hover:translate-x-1 duration-300 text-[16px] font-normal leading-[16px]' ><a href="#">Athletics Program</a></li>
            <li className='hover:translate-x-1 duration-300 text-[16px] font-normal leading-[16px]'><a href="#">Languages Program</a></li>
            <li className='hover:translate-x-1 duration-300 text-[16px] font-normal leading-[16px]'><a href="#">Humanities Program</a></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-bold mb-4 text-blackvery text-[24px] leading-[32px]">Address</h4>
          <address className="not-italic space-y-5 text-blackvery">
            <p className='text-[16px] font-normal leading-[16px]'>1234 Education Lane, Learning City, EDFG States 058789</p>
            <p className='text-[16px] font-normal leading-[16px]'>+1 (555) 123-4567</p>
            <p className='text-[16px] font-normal leading-[16px]'>info@edmunhigh.edu</p>
          </address>
        </div>
      </div>

      <div>
        <p className="text-left sm:text-center mt-15 text-[16px] sm:text-[18px] lg:text-[20px] text-darkblue ">
          &copy; 2025 All Rights Reserved. Designed By <span className='text-primary'>ERP SchoolAura</span>
        </p>
      </div>

    </footer>
  );
}
