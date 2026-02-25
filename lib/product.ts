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


export async function getProductData(_id: string) {

 const { data: courses = []} = await sanityFetch({ query: COURSES_QUERY });
 console.log(courses);

  return courses.find((p : any) => p._id === _id);
}