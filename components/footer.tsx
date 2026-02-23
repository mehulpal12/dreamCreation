"use client";

import { motion, Variants } from "framer-motion";
import { MoveRight } from "lucide-react";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1, 
    transition: { duration: 1.5, ease: "easeInOut" } 
  },
};

export default function Footer() {
  return (
    <footer className="bg-black py-16 lg:py-20 overflow-hidden font-sans">
      <div className="px-6 sm:px-12 lg:px-24 xl:px-32">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Left Section: Branding & Newsletter */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <motion.img
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  src="https://static.readdy.ai/image/372f773fe6a0bed8962b0dcba62791f3/b1a51097efcd4ad23c6e69c066734712.jpeg"
                  alt="Dreams Creation"
                  className="w-14 h-14 rounded-full object-cover border border-white/10"
                />
                <span className="font-serif text-3xl text-[#FAF9F6]">
                  Dreams Creation
                </span>
              </div>

              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
                Empowering aspiring calligraphers worldwide with premium education,
                professional materials, and a supportive community. Join us in 
                preserving the timeless art of beautiful writing.
              </p>

              {/* Newsletter */}
              <div className="max-w-sm">
                <p className="text-[#FAF9F6] font-medium mb-4">Stay Inspired</p>
                <form className="flex flex-col gap-4">
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-[#FAF9F6] placeholder-gray-500 focus:outline-none transition-colors"
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 h-[1px] bg-[#BF5645] w-full origin-left"
                      initial={{ scaleX: 0 }}
                      whileFocus={{ scaleX: 1 }}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#BF5645", borderColor: "#BF5645" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-3 border border-[#FAF9F6] text-[#FAF9F6] rounded-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    Subscribe
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <MoveRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right Section: Link Columns */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                <FooterColumn
                  title="Courses"
                  links={[
                    "Beginner Calligraphy",
                    "Modern Script",
                    "Traditional Copperplate",
                    "Brush Lettering",
                    "Wedding Calligraphy",
                    "Business Calligraphy",
                  ]}
                />
                <FooterColumn
                  title="Resources"
                  links={[
                    "Free Tutorials",
                    "Practice Sheets",
                    "Tool Guides",
                    "Student Gallery",
                    "Blog & Tips",
                  ]}
                />
                <FooterColumn
                  title="Connect"
                  links={[
                    "About Us",
                    "Contact",
                    "Instagram",
                    "YouTube",
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            variants={lineVariants}
            className="border-t border-white/10 pt-8 origin-left"
          />
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2"
          >
            <p className="text-gray-500 text-sm">
              © 2026 Dreams Creation. Crafting beauty, one stroke at a time.
            </p>

            <motion.a
              whileHover={{ color: "#BF5645" }}
              href="#"
              className="text-gray-500 text-sm transition-colors"
            >
              Privacy Policy & Terms
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </footer>
  );
}


function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <motion.div variants={itemVariants}>
      <h4 className="text-[#FAF9F6] font-medium uppercase tracking-widest text-xs mb-6">
        {title}
      </h4>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <motion.a
              href="#"
              whileHover={{ x: 5, color: "#BF5645" }}
              className="text-gray-400 transition-colors text-sm inline-block"
            >
              {link}
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}