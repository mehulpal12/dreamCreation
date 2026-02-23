"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion , Variants} from "framer-motion";

type Testimonial = {
  title: string;
  content: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    title: "Transformed My Wedding Business",
    content:
      "The Wedding Calligraphy course completely elevated my stationery business. Within three months of completing the program, I had booked my first high-end client. The techniques I learned are invaluable and the instructor feedback was incredibly detailed.",
    name: "Jennifer Walsh",
    role: "Wedding Calligraphy Graduate",
    image:
      "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20woman%20with%20warm%20smile&width=100&height=100",
  },
  {
    title: "Finally Mastered Flourishing",
    content:
      "I had tried learning Copperplate on my own for years with little success. This course broke down every technique into manageable steps. The video demonstrations are crystal clear, and the practice sheets helped me build muscle memory effectively.",
    name: "Robert Martinez",
    role: "Traditional Copperplate Graduate",
    image:
      "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20middle-aged%20man%20with%20kind%20expression&width=100&height=100",
  },
  {
    title: "From Complete Beginner to Confident",
    content:
      "I started with zero experience and was intimidated by calligraphy. The Beginner course was so welcoming and encouraging. Now I create beautiful pieces for friends and family and am considering turning it into a side business.",
    name: "Amanda Foster",
    role: "Beginner Calligraphy Graduate",
    image:
      "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20woman%20with%20curly%20hair&width=100&height=100",
  },
  {
    title: "Exceptional Quality Instruction",
    content:
      "The quality of instruction is unmatched. Every lesson is thoughtfully designed, and the community support made the journey enjoyable. I have taken three courses now and plan to take more.",
    name: "Thomas Wright",
    role: "Brush Lettering Graduate",
    image:
      "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20older%20gentleman%20with%20gray%20hair&width=100&height=100",
  },
  {
    title: "Best Investment in My Creative Journey",
    content:
      "Comprehensive curriculum and genuine care for student success. Lifetime access to materials means I can revisit lessons anytime.",
    name: "Michelle Lee",
    role: "Modern Script Graduate",
    image:
      "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20asian%20woman%20with%20long%20black%20hair&width=100&height=100",
  },
  {
    title: "Opened New Career Opportunities",
    content:
      "The Business Calligraphy course gave me confidence to launch my own studio. From pricing strategies to client management, everything was covered.",
    name: "Daniel Brooks",
    role: "Business Calligraphy Graduate",
    image:
      "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20man%20with%20beard&width=100&height=100",
  },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Smooth waterfall effect
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number], // Custom cubic-bezier for a high-end feel
    },
  },
};

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-[#FDFBF7] dark:bg-gray-900 transition-colors duration-500 overflow-hidden"
    >
      <div className="px-6 sm:px-12 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.span 
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="" 
              />
              <span className=" font-sans text-sm uppercase tracking-widest font-medium">
                Testimonials
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-4">
              What Our Students Say About Their Journey
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto font-sans">
              Real stories from calligraphers who transformed their skills with us
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group h-full"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 h-full shadow-sm hover:shadow-2xl border border-transparent hover:border-gray-100 dark:hover:border-gray-700 transition-all duration-500 flex flex-col">
                  
                  {/* Stars with subtle staggered animation */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ rotate: -15, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        viewport={{ once: false }}
                      >
                        <Star className="w-4 h-4 fill-[#BF5645] text-[#BF5645]" />
                      </motion.div>
                    ))}
                  </div>

                  <h3 className="font-serif text-xl text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-[#BF5645] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 italic flex-grow">
                    &ldquo;{item.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-700 mt-auto">
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ring-2 ring-transparent group-hover:ring-[#BF5645]/20"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-sm">
                        {item.name}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs tracking-wide uppercase">
                        {item.role}
                      </p>
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