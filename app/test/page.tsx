import Link from "next/link";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../sanity/live";
import Image from "next/image"; // Better for performance
import CoursesSection from "@/components/CoursesSection";

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
  }
`);


export default async function IndexPage() {
  // Use a fallback empty array to prevent map errors if data is null
 const { data: courses = []} = await sanityFetch({ query: COURSES_QUERY });
 console.log(courses);
 
return <CoursesSection courses={courses || []} />;
}