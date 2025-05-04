"use client";

import Link from "next/link";
import { FaBriefcase, FaHandshake, FaUsers, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const VARIANTS = {
  heading: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
  underline: {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { delay: 0.7, duration: 0.5, ease: "easeOut" },
    },
  },
  subheading: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.9, duration: 0.6, ease: "easeOut" },
    },
  },
  buttonGroup: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 1.1 } },
  },
  button: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  cardsContainer: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 1.5 } },
  },
  card: {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
};

const STATS = [
  {
    icon: <FaBriefcase />,
    count: "2000+",
    label: "Working Professionals",
    color: "text-indigo-600",
  },
  {
    icon: <FaUsers />,
    count: "3000+",
    label: "People Transformed",
    color: "text-purple-600",
  },
  {
    icon: <FaHandshake />,
    count: "400+",
    label: "Hiring Partners",
    color: "text-pink-600",
  },
];

const Hero = () => {
  const scrollToInternship = (e) => {
    e.preventDefault();
    document
      .getElementById("internship")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-cover bg-center pb-12 pt-24 md:pb-16 md:pt-32 xl:pb-20 xl:pt-40 2xl:pb-24 2xl:pt-48"
      style={{ backgroundImage: "url('/images/banner/landing01.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Container */}
      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Heading */}
        <motion.h1
          className="mb-4 text-3xl font-extrabold leading-snug text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
          variants={VARIANTS.heading}
          initial="hidden"
          animate="visible"
        >
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
            Your Internship Journey Begins Here!
          </span>
        </motion.h1>

        {/* Underline */}
        <motion.div
          className="mx-auto mb-5 h-1 w-20 origin-left rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          variants={VARIANTS.underline}
          initial="hidden"
          animate="visible"
        />

        {/* Subheading */}
        <motion.p
          className="mx-auto mb-8 max-w-xl text-base font-medium leading-relaxed text-gray-800 sm:text-lg md:text-xl"
          variants={VARIANTS.subheading}
          initial="hidden"
          animate="visible"
        >
          Gain hands-on experience with real-world projects and industry-level
          mentorship.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
          variants={VARIANTS.buttonGroup}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={VARIANTS.button}>
            <Link
              href="https://forms.gle/9gddAkJZyitpefzy8"
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 sm:px-10 sm:py-4 sm:text-lg"
            >
              <motion.span
                whileHover={{ rotate: [0, -15, 15, 0], y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="text-xl sm:text-2xl"
              >
                <FaRocket />
              </motion.span>
              Get On Board Now!
            </Link>
          </motion.div>

          <motion.div variants={VARIANTS.button}>
            <a
              href="#internship"
              onClick={scrollToInternship}
              className="inline-block rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 shadow-md transition-all duration-300 hover:scale-105 hover:border-indigo-500 hover:text-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-200 sm:px-10 sm:py-4 sm:text-lg"
            >
              Explore Programs
            </a>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="mt-14 grid grid-cols-1 gap-6 px-4 sm:grid-cols-3"
          variants={VARIANTS.cardsContainer}
          initial="hidden"
          animate="visible"
        >
          {STATS.map(({ icon, count, label, color }, index) => (
            <motion.div
              key={index}
              variants={VARIANTS.card}
              className="group relative flex flex-col items-center rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
            >
              <div
                className={`mb-2 text-4xl drop-shadow-sm sm:text-5xl ${color}`}
              >
                {icon}
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {count}
              </h3>
              <p className="mt-1 text-base font-medium text-gray-600">
                {label}
              </p>

              {/* Hover glow */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  background:
                    "linear-gradient(120deg, rgba(102,126,234,0.25), rgba(153,102,255,0.25), rgba(244,114,182,0.25))",
                  boxShadow:
                    "0 0 32px 8px rgba(102,126,234,0.15), 0 0 32px 8px rgba(244,114,182,0.10)",
                  filter: "blur(8px)",
                  zIndex: 0,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
