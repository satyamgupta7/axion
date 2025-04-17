"use client";
import {
  FaLaptopCode,
  FaAward,
  FaFileAlt,
  FaUserFriends,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";

const roadmapSteps = [
  {
    id: "offer-letter",
    title: "Internship Offer Letter",
    description:
      "Receive an official internship offer letter validating your position and experience.",
    icon: <FaLaptopCode />,
    iconBg: "from-blue-400 to-blue-600",
  },
  {
    id: "lor",
    title: "Letter of Recommendation",
    description: "Get recommendations from industry experts.",
    icon: <FaAward />,
    iconBg: "from-green-400 to-green-600",
  },
  {
    id: "experience-certificate",
    title: "Experience Certificate",
    description:
      "Earn a detailed certificate documenting your practical work experience and skills.",
    icon: <FaFileAlt />,
    iconBg: "from-blue-400 to-blue-600",
  },
  {
    id: "internship-certificate",
    title: "Internship Certificate",
    description:
      "Receive an official certification upon successful completion of your internship.",
    icon: <FaAward />,
    iconBg: "from-red-400 to-red-600",
  },
  {
    id: "industry-network",
    title: "Industry Network",
    description:
      "Connect and collaborate with industry experts and like-minded peers.",
    icon: <FaUserFriends />,
    iconBg: "from-purple-400 to-purple-600",
  },
  {
    id: "career-opportunities",
    title: "Career Opportunities",
    description: "Get opportunities for paid internships and job placements.",
    icon: <FaBriefcase />,
    iconBg: "from-red-400 to-red-600",
  },
];

const PerksBenefits = () => {
  return (
    <section className="bg-white px-8 py-12 md:px-16 md:py-16 lg:py-20">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-4xl font-bold text-primary">
          Perks & Benefits
        </h2>
        <p className="mx-auto text-lg text-gray-900">
          Unlock real industry value, certifications, and opportunities to power
          up your career.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center rounded-2xl border border-primary bg-primary p-6 shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            >
              <div
                className={`mb-4 rounded-full bg-gradient-to-br ${step.iconBg} p-4 text-3xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">{step.title}</h3>

              <p className="mt-2 text-gray-700">{step.description}</p>
              <div className="absolute bottom-0 left-0 h-1 w-full rounded-bl-2xl rounded-br-2xl bg-gradient-to-r from-blue-500 to-purple-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerksBenefits;
