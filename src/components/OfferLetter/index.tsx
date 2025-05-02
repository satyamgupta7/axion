"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaProjectDiagram,
  FaUsers,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const OfferLetter = () => {
  return (
    <section
      id="features"
      className="py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: "#98F5F9" }}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 w-full max-w-4xl"
        >
          <h2 className="text-4xl font-extrabold text-primary md:text-5xl">
            Receive Your Offer Letter Today!
          </h2>
          <p className="mt-4 text-lg font-normal text-gray-800 md:text-xl">
            Join our Orientation Program to kickstart your internship journey.
            Discover our Future-Ready Framework to Fast-Track your career, gain
            skills, experience, and network for career success!
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              icon: <FaLinkedin className="text-5xl text-blue-600" />,
              text: "Learn from industry experts and enhance your LinkedIn profile.",
            },
            {
              icon: <FaProjectDiagram className="text-5xl text-green-600" />,
              text: "Apply knowledge to real projects & create an ATS-friendly resume.",
            },
            {
              icon: <FaUsers className="text-yellow-500 text-5xl" />,
              text: "Collaborate with like-minded peers and grow your professional network.",
            },
            {
              icon: <FaRocket className="text-5xl text-pink-500" />,
              text: "Elevate your career with continuous support and valuable resources.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center space-x-4 rounded-xl bg-white p-6 text-left shadow-xl ring-1 ring-gray-300 transition-all hover:scale-105 hover:bg-gray-100"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <p className="text-lg text-gray-800">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
        >
          <Link
            href="https://forms.gle/9gddAkJZyitpefzy8"
            className="flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/80"
          >
            Join for Free <FaArrowRight className="ml-3 text-xl" />
          </Link>
          <Link
            href="#internship"
            className="inline-block rounded-full border border-black bg-transparent px-8 py-4 text-lg font-semibold text-black shadow-md transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferLetter;
