import React from 'react'
import {
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';
function mediaLink() {
    return (
        <div className="flex gap-4 ">
            <a href="#" aria-label="Instagram" className='border p-[9px] rounded-full border-graylight1 hover:bg-darkblue duration-300 hover:text-white'>
                <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter (X)" className='border p-[9px] rounded-full border-graylight1 hover:bg-darkblue duration-300 hover:text-white'>
                <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube" className='border p-[9px] rounded-full border-graylight1 hover:bg-darkblue duration-300 hover:text-white'>
                <Youtube className="w-5 h-5" />
            </a>
        </div>
    )
}

export default mediaLink