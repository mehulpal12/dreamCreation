"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, Menu, X, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

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
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6",
        // Dynamic background based on theme and scroll
        isScrolled 
          ? "backdrop-blur-md py-4 shadow-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-white/10" 
          : "bg-transparent"
      )}
    >
      <div className="px-6 sm:px-12 lg:px-24 xl:px-32">
        <div className="flex items-center justify-between">
          
          {/* Animated Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center gap-3 group">
              <img
                alt="Dreams Creation"
                className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-white/20"
                src="https://static.readdy.ai/image/372f773fe6a0bed8962b0dcba62791f3/b1a51097efcd4ad23c6e69c066734712.jpeg"
              />
              <span className="font-serif text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                Dreams Creation
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
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
                    className="relative text-sm font-medium font-sans transition-colors text-black hover:text-gray-900 dark:text-white/80 dark:hover:text-white group"
                  >
                    {link.name}
                    <motion.span 
                      className="absolute -bottom-1 left-0 h-[1px] bg-gray-900 dark:bg-white w-0 group-hover:w-full transition-all duration-300" 
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20 overflow-hidden relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDark ? "moon" : "sun"}
                    initial={{ y: 20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {isDark ? (
                      <Moon className="w-5 h-5 text-white" />
                    ) : (
                      <Sun className="w-5 h-5 text-gray-900" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="px-6 py-2.5 rounded-full text-sm font-medium font-sans transition-colors bg-black text-white dark:bg-white dark:text-black"
                >
                  Enroll Now
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 text-gray-900 dark:text-white"
            >
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-gray-200 dark:border-white/10"
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
                    className="text-xl font-medium text-gray-700 dark:text-white/90"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <Link
                  href="#contact"
                  className="block w-full py-4 rounded-xl text-center text-lg font-medium bg-black text-white dark:bg-white dark:text-black"
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