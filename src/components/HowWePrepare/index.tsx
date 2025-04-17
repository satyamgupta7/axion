"use client";

import {
  FaLaptopCode,
  FaAward,
  FaFileAlt,
  FaLinkedin,
  FaUserFriends,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";

const roadmapSteps = [
  {
    id: "real-world-projects",
    title: "Work on Real World Projects",
    description:
      "Gain hands-on experience working with industry experts on real-world projects.",
    icon: <FaLaptopCode />,
    iconBg: "from-blue-400 to-blue-600",
  },
  {
    id: "internship-certification",
    title: "Internship Certification & LOR",
    description:
      "Receive industry-recognized certification and Letter of Recommendation upon completion.",
    icon: <FaAward />,
    iconBg: "from-green-400 to-green-600",
  },
  {
    id: "resume-building",
    title: "ATS Resume Building",
    description:
      "Create a professional resume that stands out and passes Applicant Tracking Systems.",
    icon: <FaFileAlt />,
    iconBg: "from-blue-400 to-blue-600",
  },
  {
    id: "linkedin-optimization",
    title: "LinkedIn Profile Optimization",
    description:
      "Craft a compelling LinkedIn profile to attract recruiters and showcase your expertise.",
    icon: <FaLinkedin />,
    iconBg: "from-blue-500 to-blue-700",
  },
  {
    id: "networking",
    title: "Job Application Through Networking",
    description:
      "Master effective networking strategies to uncover hidden job opportunities.",
    icon: <FaUserFriends />,
    iconBg: "from-purple-400 to-purple-600",
  },
  {
    id: "placement-training",
    title: "Placement Training",
    description:
      "Comprehensive training to prepare you for interviews and assessments.",
    icon: <FaBriefcase />,
    iconBg: "from-red-400 to-red-600",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const HowWePrepare = () => {
  return (
    <section className="bg-gray-900 px-8 py-16 text-white md:px-16 lg:py-24">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
          How We Prepare You
        </h2>
        <p className="mt-4 text-lg text-gray-300 md:text-xl">
          Our structured program ensures you gain industry-level expertise and
          career readiness.
        </p>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="group flex flex-col items-center rounded-2xl border border-primary bg-white p-6 shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div
                className={`mb-4 rounded-full bg-gradient-to-br ${step.iconBg} p-4 text-3xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-black">{step.title}</h3>
              <p className="mt-2 text-gray-700">{step.description}</p>
              <div className="absolute bottom-0 left-0 h-1 w-full rounded-bl-2xl rounded-br-2xl bg-gradient-to-r from-blue-500 to-purple-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWePrepare;
