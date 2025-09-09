import React from 'react'
import CommonHero from '@/components/commonhero/page'
import BlogSection from '@/components/latestNews/page'
import SchoolNews from './schoolNews'



function page() {
  return (
    <div>

      <CommonHero heading='BLOG' subHeading='Our school in news Figma ipsum component variant main layer. Flatten bullet device component figjam pen mask thumbnail figma library' />
      <SchoolNews />
      <div className='my-8'>
        <BlogSection heading='Recent' />
      </div>

    </div>
  )
}

export default page