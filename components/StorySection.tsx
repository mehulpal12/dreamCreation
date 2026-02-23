"use client";

import { motion,Variants, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const containerRef = useRef(null);
  
  // Parallax effect for the background decorative SVGs
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Animation Variants
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const drawPath: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.2,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="story"
      className="py-24 lg:py-32 bg-[#FAF9F6] dark:bg-gray-950 relative overflow-hidden transition-colors duration-500"
    >
      {/* Decorative Top SVG with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#BF5645]">
          <motion.path
            variants={drawPath}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            d="M0,50 Q25,10 50,50 T100,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </motion.div>

      {/* Decorative Bottom SVG with Parallax */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#BF5645]">
          <motion.path
            variants={drawPath}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            d="M100,50 Q75,90 50,50 T0,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </motion.div>

      <div className="px-6 sm:px-12 lg:px-24 xl:px-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Decorative Center Divider (Animated Drawing) */}
          <div className="mb-12">
            <svg
              viewBox="0 0 120 40"
              className="w-32 h-auto mx-auto text-[#BF5645]/60"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                d="M10,30 Q30,5 60,20 T110,15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                viewport={{ once: true }}
                d="M20,35 Q40,15 70,25 T100,20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Subtitle */}
          <motion.div
            custom={0}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-[0.3em] font-semibold font-sans">
              Our Story & Mission
            </span>
          </motion.div>

          {/* Main Paragraph */}
          <motion.div
            custom={1}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <h4 className="font-serif text-xl sm:text-4xl lg:text-4xl text-gray-900 dark:text-white leading-[1.4] ">
             Dreams Creation was founded with a singular vision: to preserve the timeless art of calligraphy while making it accessible to modern learners. We believe that the meditative practice of beautiful writing has the power to transform not just your handwriting, but your entire creative perspective.
            </h4>
          </motion.div>

          {/* Secondary Paragraph */}
          <motion.div
            custom={2}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-black dark:text-gray-400 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-light font-sans">
              Every stroke tells a story, and every student who joins us becomes
              part of a tradition that spans centuries. We believe the meditative practice of
              beautiful writing transforms your entire creative perspective.
            </p>
          </motion.div>

          {/* Animated Signature Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 inline-block relative"
          >
            <span className="text-5xl filter drop-shadow-sm select-none">✒️</span>
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2] 
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute inset-0 bg-[#BF5645] blur-2xl rounded-full -z-10"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}