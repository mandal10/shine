import AboutSection from '@/components/about/page'
import CommonHero from '@/components/commonhero/page'
import FAQSection from '@/components/faq/pages'
import AboutSchool from './aboutSchool'
import StatsSection from './components/statssection/page'
import WhoWeAre from './whoWeAre'
import React from 'react'

export default function page({ props }) {
  return (
    <div className='bg-white'>
     
      <CommonHero heading="ABOUT" subheading='Figma ipsum component variant main layer. Flatten bullet device component figjam pen mask thumbnail figma library' />
      <AboutSchool/>
      <StatsSection />
      <div className='mt-5'>
        <AboutSection heading='Hello. Welcome to Schoolaura High School.' />
      </div>
      <WhoWeAre/>
      <FAQSection />
     

    </div>

  )
}
