"use client";

import { easeOut, motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";



const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export default function Contact() {
  return (
    <>
      {/* ================= CONTACT SECTION ================= */}
      <section
        id="contact"
        className="py-20 bg-white dark:bg-gray-900 transition-colors font-sans"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ready to start your calligraphy journey? Contact us today
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <ContactItem title="Location" value="Saharanpur" icon={MapPin} />
              <ContactItem title="Phone" value="+1 (415) 555-0123" icon={Phone} />
              <ContactItem title="Email" value="hello@dreamscreation.com" icon={Mail} />
              <ContactItem title="Hours" value="Mon-Fri: 9AM - 6PM PST" icon={Clock} />
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <form className="space-y-6">
                <InputField
                  id="name"
                  label="Your Name"
                  placeholder="John Doe"
                  type="text"
                />
                <InputField
                  id="email"
                  label="Email Address"
                  placeholder="john@example.com"
                  type="email"
                />
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your interest in calligraphy..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

interface ContactItemProps {
  title: string;
  value: string;
  icon: React.ElementType;
}

function ContactItem({ title, value, icon: Icon }: ContactItemProps) {
  return (
    <motion.div variants={slideUp} className="flex items-start space-x-4 group">
      <motion.div
        whileHover={{ rotate: 5, scale: 1.1 }}
        className="flex-shrink-0 w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center shadow-md"
      >
        {/* Lucide Icon Component */}
        <Icon className="w-5 h-5 text-white dark:text-black" strokeWidth={2} />
      </motion.div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-orange-800 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{value}</p>
      </div>
    </motion.div>
  );
}

function InputField({
  id,
  label,
  placeholder,
  type,
}: {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none"
      />
    </div>
  );
}