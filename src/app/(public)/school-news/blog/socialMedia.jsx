import React from 'react'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'


function socialMedia() {
    return (
        <div>
            {/* Share Section */}
            <div className="flex items-center justify-between border-t pt-6">
                <span className="text-darkblue cursor-pointer hover:underline">
                    Share this post
                </span>
                <div className="flex gap-3">
                    <Link href="#" className=" p-2 rounded-full text-darkblue border border-darkblue hover:bg-darkblue hover:text-white duration-300">
                        <Instagram className="w-5 h-5" />

                    </Link>
                    <Link href="#" className=" p-2 rounded-full text-darkblue border border-darkblue hover:bg-darkblue hover:text-white duration-300">
                        <Linkedin className="w-5 h-5" />

                    </Link>
                    <Link href="#" className=" p-2 rounded-full text-darkblue border border-darkblue hover:bg-darkblue hover:text-white duration-300">
                        <Facebook className="w-5 h-5" />

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default socialMedia