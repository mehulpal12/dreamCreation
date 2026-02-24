import { desc } from "framer-motion/client";

export async function getProductData(id: string) {

const courses = [
  {
    id: 1,
    title: "Beginner Calligraphy",
    level: "Beginner",
    duration: "6 Weeks",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    tagLine: "Start your journey with foundational strokes and letterforms. Perfect for complete beginners.",
    description:"Embark on your calligraphy journey with our comprehensive beginner course. This carefully structured program introduces you to the fundamental techniques and principles of beautiful handwriting. You will learn proper pen holding, basic strokes, and essential letterforms that form the foundation of all calligraphy styles.",
    price: 4999
  },
  {
    id: 2,
    title: "Modern Script",
    level: "Intermediate",
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
    description: "Dive into the world of modern calligraphy with this intermediate-level course. Learn to create fluid, expressive letterforms that blend traditional techniques with contemporary aesthetics. Perfect for those who have mastered the basics and want to develop their unique style.",
    tagLine:"Master contemporary calligraphy styles with fluid, expressive letterforms and compositions.",
    price: 7999

  },
  {
    id: 3,
    title: "Traditional Copperplate",
    level: "Advanced",
    duration: "12 Weeks",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",

    tagLine: "Learn the elegant, time-honored Copperplate script with precise oblique pen techniques.",
    description: "Master the timeless art of Copperplate calligraphy, one of the most elegant and refined scripts in the calligraphic tradition. This advanced course teaches you the precise techniques required to create the characteristic hairlines and shaded strokes that define this beautiful script.",
    price: 8999

  },
  {
    id: 4,
    title: "Brush Lettering",
    level: "Beginner",
    duration: "6 Weeks",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    description: "Explore the vibrant world of brush lettering and create bold, expressive letterforms. This beginner-friendly course teaches you how to use brush pens and watercolor techniques to create stunning hand-lettered artwork perfect for cards, posters, and social media.",
    tagLine:"Create bold, dynamic letterforms using brush pens and watercolor techniques.",
    price: 6999


  },
  {
    id: 5,
    title: "Wedding Calligraphy",
    level: "Intermediate",
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
    description: "Learn the art of creating beautiful wedding stationery that clients will treasure forever. This specialized course covers everything from invitation design to envelope addressing, teaching you the skills needed to start a wedding calligraphy business.",
    tagLine:"Master the art of wedding calligraphy for elegant, personalized stationery.",
    price: 3999

  },
  {
    id: 6,
    title: "Business Calligraphy",
    level: "Advanced",
    duration: "12 Weeks",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",

    description: "Master the art of professional calligraphy for business applications. Learn to create elegant, polished lettering for corporate branding, signage, and formal documents.",
    tagLine:"Elevate your professional presence with sophisticated business calligraphy skills.",
    price: 9999

  },
];

  return courses.find((p) => p.id === Number(id));
}