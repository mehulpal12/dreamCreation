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
import IndexPage from "./test/page";
import { course } from "@/sanity/schemaTypes/course";
export default function Home() {
  return (
    <div className="">

      <Navbar/>
      <Hero/>
      <CoursesSection courses={course || []}/>
      <IndexPage/>
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
