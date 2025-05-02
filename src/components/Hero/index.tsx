"use client";

import Link from "next/link";
import { FaBriefcase, FaHandshake, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToInternship = (e) => {
    e.preventDefault();
    const internshipSection = document.getElementById("internship");
    if (internshipSection) {
      internshipSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-cover bg-center pb-16 pt-20 md:pb-[120px] md:pt-32 xl:pb-[160px] xl:pt-44 2xl:pb-[200px] 2xl:pt-52"
      style={{ backgroundImage: "url('/images/banner/landing01.jpg')" }}
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[850px] text-center">
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-primary dark:text-white sm:text-5xl md:text-6xl">
                Your Internship Journey Begins Here!
              </h1>
              <p className="mb-10 text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl">
                Gain hands-on experience with real-world projects and
                industry-level mentorship.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                <Link
                  href="https://forms.gle/9gddAkJZyitpefzy8"
                  className="rounded-md bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-primary/80"
                >
                  🔥 Get On Board Now!
                </Link>
                <a
                  href="#internship"
                  onClick={scrollToInternship}
                  className="inline-block rounded-md border border-black bg-black px-8 py-4 text-lg font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-black/90 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/5"
                >
                  Explore Programs
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              icon: <FaBriefcase className="mb-2 text-3xl text-blue-600" />,
              count: "2000+",
              label: "Working Professionals",
            },
            {
              icon: <FaUsers className="mb-2 text-3xl text-green-600" />,
              count: "3000+",
              label: "People Transformed",
            },
            {
              icon: <FaHandshake className="mb-2 text-3xl text-purple-600" />,
              count: "400+",
              label: "Hiring Partners",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="flex cursor-pointer flex-col items-center rounded-xl bg-white/90 p-6 shadow-md backdrop-blur-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl dark:bg-white/10"
            >
              {card.icon}
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {card.count}
              </h3>
              <p className="mt-1 text-base font-medium text-gray-700 dark:text-gray-300">
                {card.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
