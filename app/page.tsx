import Hero from "@/components/hero";
import { Navbar } from "@/components/ui/navbar";
import CoursesSection from "@/components/CoursesSection";
import InstructorsSection from "@/components/InstructorsSection"
import ShowcaseSection from "@/components/ShowcaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturesSection from "@/components/FeaturesSection";
import StorySection from "@/components/StorySection";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <CoursesSection/>
      <InstructorsSection/>
      <ShowcaseSection/>
      <TestimonialsSection/>
      <FeaturesSection/>
      <StorySection/>
      <Contact/>
      <Footer/>
    </div>
  );
}
