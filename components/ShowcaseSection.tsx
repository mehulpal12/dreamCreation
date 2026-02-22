"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const showcaseItems = [
  {
    name: "Sarah Mitchell",
    category: "Modern Script",
    height: "h-80",
    image: "https://images.unsplash.com/photo-1557676715-93b39337b8ee?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lisa Thompson",
    category: "Modern Script",
    height: "h-72",
    image: "https://images.unsplash.com/photo-1564630322990-4a9e93d13946?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FsbGlncmFwaHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "James Chen",
    category: "Copperplate",
    height: "h-64",
    image: "https://images.unsplash.com/photo-1597402173627-95df96e45536?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2FsbGlncmFwaHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "David Kim",
    category: "Business Calligraphy",
    height: "h-64",
    image: "https://images.unsplash.com/photo-1613289720033-c79deb7d3fca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fENhbGxpZ3JhcGh5fGVufDB8fDB8fHww",
  },
   {
    name: "Sarah Mitchell",
    category: "Modern Script",
    height: "h-80",
    image: "https://images.unsplash.com/photo-1557676715-93b39337b8ee?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lisa Thompson",
    category: "Modern Script",
    height: "h-72",
    image: "https://images.unsplash.com/photo-1564630322990-4a9e93d13946?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FsbGlncmFwaHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "James Chen",
    category: "Copperplate",
    height: "h-64",
    image: "https://images.unsplash.com/photo-1597402173627-95df96e45536?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2FsbGlncmFwaHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "David Kim",
    category: "Business Calligraphy",
    height: "h-64",
    image: "https://images.unsplash.com/photo-1613289720033-c79deb7d3fca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fENhbGxpZ3JhcGh5fGVufDB8fDB8fHww",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="px-6 sm:px-12 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.span 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 rounded-full bg-orange-700"
              />
              <span className="text-orange-700 dark:text-orange-500 text-sm uppercase tracking-widest font-medium">
                Student Showcase
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-4">
              Beautiful Work from Our Community
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              See the transformation from beginner to confident calligrapher
              through our students&apos; incredible creations
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
          >
            {showcaseItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm transition-shadow duration-500 hover:shadow-2xl">
                  
                  <div className={`${item.height} overflow-hidden relative`}>
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={item.image}
                        alt={`${item.name}'s work`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 transition-opacity duration-300"
                  >
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <p className="text-white font-serif text-lg leading-none mb-1">
                        {item.name}
                      </p>
                      <p className="text-white/70 text-sm italic">
                        {item.category}
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Category Tag (Top Right) */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-md text-[10px] uppercase tracking-tighter font-bold text-gray-900 dark:text-white rounded-md">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/gallery"
              className="inline-flex items-center gap-3 px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-all shadow-lg hover:shadow-xl"
            >
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}