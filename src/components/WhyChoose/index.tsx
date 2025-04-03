"use client";

import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTools,
  FaBriefcase,
  FaAward,
  FaUserCheck,
  FaArrowRight,
} from "react-icons/fa";

// Data for features
const contentData = [
  {
    title: "Experience by Doing",
    description:
      "Work on live projects under industry mentors. Gain practical experience rather than theoretical knowledge.",
    icon: <FaTools />,
    color: "text-blue-600",
  },
  {
    title: "Top 1% Portfolio",
    description:
      "Curate an impressive portfolio that stands out in any job interview.",
    icon: <FaBriefcase />,
    color: "text-green-600",
  },
  {
    title: "Earn Work Experience Certificate",
    description:
      "Get recognized work certificates endorsed by global organizations.",
    icon: <FaAward />,
    color: "text-purple-600",
  },
  {
    title: "Land a Job",
    description: "Our programs are designed to ensure guaranteed placement.",
    icon: <FaUserCheck />,
    color: "text-red-600",
  },
];

const WhyChoose = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotationTriggered, setRotationTriggered] = useState(false);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % contentData.length);
      setRotationTriggered(true);
      setTimeout(() => setRotationTriggered(false), 1000); // Reset rotation after animation completes
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-12 md:py-16 lg:py-20">
      <div className="container">
        {/* Centered Title */}
        <div className="mb-4 flex justify-center">
          <SectionTitle title="Why Choose AxionGen?" paragraph="" center />
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
          {/* Left Side Content List */}
          <div className="w-full space-y-3 md:w-1/2">
            {contentData.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setRotationTriggered(true);
                  setTimeout(() => setRotationTriggered(false), 1000); // Reset rotation after 1s
                }}
                className={`flex cursor-pointer items-center space-x-2 rounded-md p-3 text-xs transition-all md:text-sm lg:text-base ${
                  index === activeIndex ? "bg-gray-200" : "bg-transparent"
                }`}
              >
                <motion.div
                  animate={
                    index === activeIndex && rotationTriggered
                      ? { rotate: 360 }
                      : {}
                  }
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className={`text-3xl md:text-4xl ${item.color}`}
                >
                  {item.icon}
                </motion.div>
                <p className="font-medium">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Right Side Animated Carousel */}
          <div className="w-full md:w-1/2 md:self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full rounded-lg bg-gray-100 p-5 text-center shadow-lg md:w-full"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={rotationTriggered ? { rotate: 360 } : {}}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                    className={`text-4xl md:text-5xl ${contentData[activeIndex].color}`}
                  >
                    {contentData[activeIndex].icon}
                  </motion.div>
                  <h3 className="mt-2 text-lg font-semibold md:text-xl">
                    {contentData[activeIndex].title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-700 md:text-sm lg:text-base">
                    {contentData[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Button & Subheading */}
        <div className="mt-6 flex flex-col items-center text-center">
          <Link
            href=""
            className="flex items-center rounded-sm bg-primary px-5 py-2 text-sm font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 md:px-6 md:py-3 md:text-base"
          >
            Join our Internship Program{" "}
            <FaArrowRight className="ml-2 text-lg" />
          </Link>

          {/* Subheading */}
          <p className="mt-3 max-w-2xl text-xs text-gray-700 md:text-sm lg:text-base">
            Learn our four-step framework strategy to land internships and jobs
            in the industry, implemented by the top 1% of people in India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
