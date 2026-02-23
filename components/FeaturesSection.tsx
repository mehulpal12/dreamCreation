"use client";

import { Play, Package, UsersRound, Award, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const features: Feature[] = [
  {
    title: "Expert Video Instruction",
    description:
      "Learn from professionally produced video lessons with multiple camera angles, close-ups, and detailed explanations of every technique.",
    icon: Play,
  },
  {
    title: "Premium Practice Kits",
    description:
      "Receive curated materials including high-quality paper, professional-grade inks, and carefully selected pens and brushes for each course.",
    icon: Package,
  },
  {
    title: "Community Support",
    description:
      "Join our vibrant community of calligraphy enthusiasts. Share your work, get feedback, and connect with fellow students worldwide.",
    icon: UsersRound,
  },
  {
    title: "Certification Program",
    description:
      "Earn recognized certificates upon course completion. Build your portfolio and credentials for professional calligraphy opportunities.",
    icon: Award,
  },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 lg:py-32 bg-[#FAF9F6] dark:bg-gray-900 transition-colors duration-500 overflow-hidden"
    >
      <div className="px-6 sm:px-12 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-block px-6 py-2 border  rounded-full font-sans text-sm uppercase tracking-widest font-semibold mb-6 cursor-default"
            >
              Why Choose Us
            </motion.span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
              Everything You Need to Excel
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto font-sans text-black">
              Comprehensive education, premium materials, and lifetime community support
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -12 }}
                  className="group relative"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 h-full border border-gray-100 dark:border-gray-700 shadow-sm group-hover:bg-[#BF5645] group-hover:border-[#BF5645] transition-all duration-500 ease-out flex flex-col">
                    
                    {/* Icon Container */}
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      className="w-14 h-14 bg-[#F5EFE6] dark:bg-gray-700 rounded-xl flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors duration-500"
                    >
                      <Icon className="w-7 h-7 text-[#BF5645] group-hover:text-white transition-colors duration-500" />
                    </motion.div>

                    <h3 className="font-serif text-xl text-gray-900 dark:text-white mb-4 group-hover:text-white transition-colors duration-500">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 group-hover:text-white/90 transition-colors duration-500 flex-grow">
                      {feature.description}
                    </p>

                    <motion.a
                      href="#courses"
                      className="inline-flex items-center gap-2 text-[#BF5645] text-sm font-bold group-hover:text-white transition-colors duration-500"
                    >
                      Explore Details
                      <motion.span
                        variants={{
                          hover: { x: 5 }
                        }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}