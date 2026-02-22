"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef(null);
  
  // Parallax effect for the background image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Animation variants for staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <Image
          src="/image.png"
          alt="Dreams Creation Calligraphy"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: textY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full px-6 sm:px-12 lg:px-24 xl:px-32 flex flex-col items-center justify-between min-h-screen py-24"
      >
        
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="max-w-7xl mx-auto text-center">
            
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight tracking-wide mb-8"
            >
              Master the Art
              <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
                className="italic font-light text-white/90"
              >
                of Beautiful Writing
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-white/80 text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
            >
              Premium Calligraphy Education
              <br />
              for Aspiring Artists
            </motion.p>

          </div>
        </div>

        {/* CTA Button with Hover scale */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#courses"
            className="group inline-flex items-center gap-3 bg-white hover:bg-gray-100 transition-all duration-300 rounded-full px-8 py-4 shadow-lg"
          >
            <span className="text-black font-medium text-base sm:text-lg">
              Explore Courses
            </span>
            <motion.span 
              className="w-10 h-10 flex items-center justify-center bg-black rounded-full"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </motion.span>
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}