"use client";

import Image from "next/image";
import { Users } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function InstructorsSection() {
  // Animation Variants
  const textContainer: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const itemFade: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageContainer: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const statsCard: Variants = {
    hidden: { opacity: 0, x: -30, y: 30 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { delay: 0.8, duration: 0.8, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="instructors"
      className="py-24 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-500 overflow-hidden font-sans space-y-1.5"
    >
      <div className="px-6 sm:px-12 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="lg:col-span-5"
            >
              <motion.span 
                variants={itemFade}
                className="inline-block text-gray-600 dark:text-gray-400 text-sm uppercase tracking-widest font-medium mb-4"
              >
                Meet Your Instructor
              </motion.span>

              <motion.h2 
                variants={itemFade}
                className="font-serif text-4xl sm:text-5xl text-black dark:text-white mb-6"
              >
                Shagun Khanna
              </motion.h2>

              <motion.p 
                variants={itemFade}
                className="text-lg font-medium text-black dark:text-white mb-4 "
              >
                The First Calligrapher of Saharanpur
              </motion.p>

              <motion.p 
                variants={itemFade}
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 tracking-wide"
              >
                Shagun Khanna brings exceptional expertise in calligraphy,
                engraving, and resin art. As Saharanpur&apos;s pioneering
                calligrapher, she has dedicated her career to preserving
                traditional techniques while embracing modern innovations.
                Her specialized approach ensures assured handwriting improvement for every student, combining artistic excellence with proven teaching methodologies.
              </motion.p>

              <div className="space-y-4">
                {[
                  "First Calligrapher of Saharanpur",
                  "Expert in Engraving & Resin Art",
                  "Assured Handwriting Improvement",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemFade}
                    className="flex items-center gap-4"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.5 }}
                      className="w-2 h-2 rounded-full bg-black dark:bg-white" 
                    />
                    <span className="text-black dark:text-white font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <div className="lg:col-span-7 relative">
              <motion.div
                variants={imageContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="relative"
              >
                {/* Main Image */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl z-0"
                >
                  <Image
                    src="https://readdy.ai/api/search-image?query=Professional%20female%20calligraphy%20instructor%20Shagun%20Khanna%20in%20elegant%20studio%20workspace%20surrounded%20by%20calligraphy%20tools%20engraving%20equipment%20and%20resin%20art%20pieces%20warm%20natural%20lighting%20from%20large%20window%20organized%20creative%20desk%20with%20ink%20bottles%20pens%20and%20artistic%20materials%20cozy%20educational%20environment%20high%20quality%20portrait%20photography%20warm%20neutral%20color%20palette%20professional%20teaching%20atmosphere&width=800&height=600&seq=202&orientation=landscape"
                    alt="Shagun Khanna - Calligraphy Instructor"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </motion.div>

                {/* Decorative SVG Animation */}
                <motion.div 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 w-32 h-32 pointer-events-none"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full text-black dark:text-white">
                    <motion.path
                      d="M10,50 Q30,20 50,50 T90,50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.div>

                {/* Floating Stats Card */}
                <motion.div
                  variants={statsCard}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="absolute -bottom-8 -left-0 md:-left-8 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl z-10 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center"
                    >
                      <Users className="w-7 h-7 text-black dark:text-white" />
                    </motion.div>

                    <div>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="font-serif text-3xl text-black dark:text-white"
                      >
                        2,500+
                      </motion.p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                        Students Taught
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}