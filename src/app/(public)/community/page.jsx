import React from 'react';
import CommonHero from '@/components/commonhero/page';
import Testimonials from "@/components/testimonals/page";
import FAQSection from '@/components/faq/pages';
import Staff from './staff';
import TeacherGallery from './TeacherGallery';



function page({ props }) {

  return (
    <div>
      
      <CommonHero heading="Community" subheading='Figma ipsum component variant main layer. Flatten bullet device component figjam pen mask thumbnail figma library' />
      <Staff />
      <div className=''>
        <TeacherGallery />
      </div>
      <Testimonials />
      <FAQSection />
      
    </div>
  )
}

export default page