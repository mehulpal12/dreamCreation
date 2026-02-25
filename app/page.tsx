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
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/app/sanity/live";
const COURSES_QUERY = defineQuery(`
  *[_type == "course"]
  | order(_createdAt desc){
    _id,
    title,
    slug,
    level,
    duration,
    description,
    "imageUrl":coalesce(image.asset->url, imageUrl),
    TagLine,
    Price
  }
`);
export default async function Home() {
   const { data: courses = []} = await sanityFetch({ query: COURSES_QUERY });
  
  return (
    <div className="">

      <Navbar/>
      <Hero/>
      <CoursesSection courses={courses || []}/>
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
