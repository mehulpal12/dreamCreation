
import Image from "next/image";
import {
  Clock,
  Users,
  Calendar,
  CheckCircle2,
  Award,
  BookOpen,
  ArrowLeft
} from "lucide-react";
import Footer from "@/components/footer";
import { getProductData } from "@/lib/product";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";

export default async function CoursePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const course = await getProductData(id);
  const learnItems = [
    "Proper pen holding and posture techniques",
    "Basic strokes and fundamental letterforms",
    "Understanding of calligraphy tools and materials",
    "Letter spacing and composition basics",
    "Practice routines for skill development",
    "Creating your first calligraphy pieces",
  ];

  const curriculum = [
    { week: "Week 1", title: "Introduction to Calligraphy & Tools" },
    { week: "Week 2", title: "Basic Strokes & Pen Control" },
    { week: "Week 3", title: "Lowercase Letters A-M" },
    { week: "Week 4", title: "Lowercase Letters N-Z" },
    { week: "Week 5", title: "Uppercase Letters & Numbers" },
    { week: "Week 6", title: "Composition & Final Project" },
  ];

  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <Navbar/>
      <section className="relative h-96 overflow-hidden font-sans">
        <Image
          src={
            course?.image ||
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80"
          }
          alt={course?.title || "Calligraphy Course"}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
       <button  className="absolute top-4 left-4 z-10"> 
        <Link href="/" className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-black text-sm font-medium rounded-full mt-22 ms-10">
             <ArrowLeft className="w-4 h-4 inline-block me-1" />
             Back to Home
            </Link>

       </button>

        <div className="absolute inset-0 flex items-center justify-center font-sans">
          <div className="px-6 sm:px-12 lg:px-24 xl:px-32 w-full max-w-7xl mx-auto">
            <div className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-black text-sm font-medium rounded-full mb-4">
              {course?.level}
            </div>

            <h1 className=" text-4xl sm:text-5xl lg:text-6xl text-white mb-4 font-sans">
              {course?.title}
            </h1>

            <p className="text-white text-lg sm:text-xl max-w-2xl">
              {course?.tagLine}
            </p>
          </div>
        </div>
      </section>

      {/* ================= INFO BAR ================= */}
      <section className="border-b border-gray-200 dark:border-gray-800 font-sans bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="px-6 sm:px-12 lg:px-24 xl:px-32 py-6">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-8 items-center justify-between">
            <div className="flex flex-wrap gap-8">
              <InfoItem icon={<Clock />} text="6 Weeks" />
              <InfoItem icon={<Users />} text="250+ Students" />
              <InfoItem icon={<Calendar />} text="12 Live Sessions" />
            </div>

            <div className="text-3xl font-bold text-black dark:text-white font-sans">
              ₹{course?.price}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-16 lg:py-24 font-sans">
        <div className="px-6 sm:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-12 font-sans">
              {/* About */}
              <div>
                <h2 className="font-serif text-3xl text-black dark:text-white mb-6">
                  About This Course
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {course?.description}
                </p>
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="font-serif text-3xl text-black dark:text-white mb-6">
                  What You'll Learn
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {learnItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="font-serif text-3xl text-black dark:text-white mb-6">
                  Course Curriculum
                </h2>

                <div className="space-y-3">
                  {curriculum.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-black dark:bg-white text-white dark:text-black rounded-full font-bold flex-shrink-0">
                        {index + 1}
                      </div>

                      <div>
                        <p className="text-black dark:text-white font-medium">
                          {item.week}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-1 space-y-6">
              {/* Pricing Card */}
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-colors duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-black dark:text-white mb-2">
                    ₹{course?.price}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    One-time payment
                  </p>
                </div>

                <button className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-full font-medium hover:opacity-90 transition">
                  Enroll Now
                </button>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 space-y-4 text-sm">
                  <Feature icon={<Award />} text="Certificate of Completion" />
                  <Feature icon={<BookOpen />} text="Lifetime Access" />
                  <Feature icon={<Users />} text="Live Interactive Sessions" />
                </div>
              </div>

              {/* Instructor Card */}
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-colors duration-300">
                <h3 className="font-serif text-xl text-black dark:text-white mb-4">
                  Your Instructor
                </h3>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-serif text-black dark:text-white">
                      SK
                    </span>
                  </div>

                  <div>
                    <h4 className="font-medium text-black dark:text-white">
                      Shagun Khanna
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Master Calligrapher
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  First Calligrapher of Saharanpur specializing in Engraving,
                  Resin art, and Assured Handwriting Improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ================= SMALL REUSABLE COMPONENTS ================= */

function InfoItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-black dark:text-white">
      <span className="w-5 h-5">{icon}</span>
      <span className="font-medium">{text}</span>
    </div>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
      <span className="w-5 h-5">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
