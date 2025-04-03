"use client";
import { useState, useEffect } from "react";
import {
  FaUserCheck,
  FaChalkboardTeacher,
  FaFileAlt,
  FaProjectDiagram,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";

const roadmapSteps = [
  {
    id: "registration",
    title: "Registration",
    description: "Register for Free Internship Orientation Program",
    icon: <FaUserCheck className="text-5xl text-blue-400" />,
  },
  {
    id: "orientation",
    title: "Orientation Program",
    description: "Attend the Orientation Program and get guidance",
    icon: <FaChalkboardTeacher className="text-yellow-400 text-5xl" />,
  },
  {
    id: "offer-letter",
    title: "Offer Letter",
    description: "Receive your official Offer Letter and start your journey",
    icon: <FaFileAlt className="text-5xl text-green-400" />,
  },
  {
    id: "projects",
    title: "Projects",
    description: "Start building real-world projects with hands-on experience",
    icon: <FaProjectDiagram className="text-5xl text-purple-400" />,
  },
  {
    id: "placement",
    title: "Get Placement Opportunities",
    description:
      "Top performers will get job portal access, LOR, and CV forwarded to tie-up companies",
    icon: <FaBriefcase className="text-5xl text-red-400" />,
  },
];

const RoadMap = () => {
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const stepCount = roadmapSteps.length;

      roadmapSteps.forEach((_, index) => {
        const element = document.getElementById(`step-${index}`);
        if (element) {
          const elementPosition = element.offsetTop;
          if (scrollPosition > elementPosition) {
            setTimeout(() => {
              setVisibleSteps((prev) => Math.min(prev + 1, stepCount));
            }, index * 1200); // 1.2s delay for smooth animation
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-gray-400 px-8 py-12 md:px-16 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold text-white">
          🚀 Roadmap of Internship Journey
        </h2>

        {/* Roadmap Steps */}
        <div className="mt-16 space-y-12">
          {roadmapSteps.map((step, index) => (
            <motion.div
              id={`step-${index}`}
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              animate={index < visibleSteps ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 1.2 }} // Smooth animation delay
              className="mx-auto flex w-full max-w-5xl items-center space-x-6 rounded-xl bg-gray-800 p-6 shadow-lg md:p-8"
            >
              {/* Icon */}
              <div className="flex-shrink-0">{step.icon}</div>

              {/* Content */}
              <div>
                {/* Step Number Inside Card */}
                <span className="text-lg font-bold text-blue-400">
                  Step {index + 1}
                </span>

                <h3 className="mt-1 text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-lg text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
