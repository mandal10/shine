import React from 'react'
import CommonHero from '@/components/commonhero/page'
import FAQSection from '@/components/faq/pages'
import ContactPage from './contactPage'
import MapPage from './mapPage'

function page() {
  return (
    <div>
      
      <CommonHero heading="Contact" subheading='Figma ipsum component variant main layer. Flatten bullet device component figjam pen mask thumbnail figma library' />
     <ContactPage/>
     <MapPage/>
     <FAQSection/>
     
    </div>
  )
}

export default page