"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Courses", href: "#courses" },
  { name: "Instructors", href: "#instructors" },
  { name: "Showcase", href: "#showcase" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6",
        isScrolled ? "bg-black/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="px-6 sm:px-12 lg:px-24 xl:px-32">
        <div className="flex items-center justify-between">
          
          {/* Animated Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center gap-3 group">
              <img
                alt="Dreams Creation"
                className="w-10 h-10 rounded-full object-cover border border-white/20"
                src="https://static.readdy.ai/image/372f773fe6a0bed8962b0dcba62791f3/b1a51097efcd4ad23c6e69c066734712.jpeg"
              />
              <span className="font-serif text-xl font-medium text-white tracking-tight">
                Dreams Creation
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-sm font-medium text-white/80 transition-colors hover:text-white group"
                  >
                    {link.name}
                    <motion.span 
                      className="absolute -bottom-1 left-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300" 
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20"
              >
                <Sun className="w-5 h-5 text-white" />
              </motion.button>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="px-6 py-2.5 rounded-full text-sm font-medium bg-white text-black"
                >
                  Enroll Now
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-3">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X /> : <Menu />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xl font-medium text-white/90"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <Link
                  href="#contact"
                  className="block w-full py-4 rounded-xl text-center text-lg font-medium bg-white text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Enroll Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}