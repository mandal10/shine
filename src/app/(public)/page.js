import Hero from "@/components/hero/page";
import About from "@/components/about/page"
import MissionSection from "@/components/missionSection/page";
import EventSection from "@/components/eventSection/page";
import FacilitySection from "@/components/facility/page";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MessageSection from "@/components/message/page";
import TopperList from "@/components/topper/page";
import GallerySection from "@/components/gallery/page";
import FAQSection from "@/components/faq/pages";
import BlogSection from "@/components/latestNews/page";
import Testimonials from "@/components/testimonals/page";



export default function Home() {
  return (
  <div > 
    <Hero />
   <About/>
   <MissionSection/>
   <EventSection/>
   <FacilitySection/>
   <MessageSection/>
   <TopperList/>
   <GallerySection/>
   <FAQSection/>
   <BlogSection/>
   <Testimonials/>
  </div>
  );
}
