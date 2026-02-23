"use client";

import Image from "next/image";
import { Clock, Users, ArrowRight } from "lucide-react";
import { easeOut, motion, Variants } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Beginner Calligraphy",
    level: "Beginner",
    duration: "6 Weeks",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    description: "Start your journey with foundational strokes and letterforms. Perfect for complete beginners.",
  },
  {
    id: 2,
    title: "Modern Script",
    level: "Intermediate",
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
    description: "Master contemporary calligraphy styles with fluid, expressive letterforms and compositions.",
  },
  {
    id: 3,
    title: "Traditional Copperplate",
    level: "Advanced",
    duration: "12 Weeks",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",

    description: "Learn the elegant, time-honored Copperplate script with precise oblique pen techniques.",
  },
  {
    id: 4,
    title: "Beginner Calligraphy",
    level: "Beginner",
    duration: "6 Weeks",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    description: "Start your journey with foundational strokes and letterforms. Perfect for complete beginners.",
  },
  {
    id: 5,
    title: "Modern Script",
    level: "Intermediate",
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
    description: "Master contemporary calligraphy styles with fluid, expressive letterforms and compositions.",
  },
  {
    id: 6,
    title: "Traditional Copperplate",
    level: "Advanced",
    duration: "12 Weeks",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",

    description: "Learn the elegant, time-honored Copperplate script with precise oblique pen techniques.",
  },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" }, 
  },
};

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="py-24 lg:py-32 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="px-6 sm:px-12 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="inline-block font-sans text-gray-600 dark:text-gray-400 text-sm uppercase tracking-widest font-medium mb-4">
              Our Programs
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-black dark:text-white mb-4">
              Signature Courses
            </h2>

            <p className="text-gray-600 font-sans dark:text-gray-400 text-lg max-w-xl">
              Comprehensive calligraphy education tailored to your journey,
              from first strokes to mastery
            </p>
          </motion.div>

          {/* Grid with Staggered Animation */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {courses.map((course) => (
              <motion.div
                key={course.id}
                variants={cardVariants}
                whileHover={{ y: -10 }} // Smooth lift on hover
                className="group cursor-pointer"
              >
                <div className="h-full bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors duration-500 shadow-sm hover:shadow-2xl">

                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "circOut" }}
                      className="w-full h-full"
                    >
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-black text-xs font-medium rounded-full">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-black dark:text-white mb-2">
                      {course.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Online
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="inline-flex items-center gap-2 text-black dark:text-white font-medium text-sm transition-all group-hover:gap-3">
                      Learn More
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}