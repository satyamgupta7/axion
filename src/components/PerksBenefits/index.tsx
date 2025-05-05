"use client";
import {
  FaLaptopCode,
  FaAward,
  FaFileAlt,
  FaUserFriends,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Roadmap steps data
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
    <section className="bg-white py-8 md:px-12 lg:py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary">
          Perks & Benefits
        </h2>
        <p className="mx-auto mb-8 max-w-screen-sm text-lg text-gray-800 md:max-w-3xl">
          Unlock real industry value, certifications, and opportunities to power
          up your career.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative mx-auto flex w-full flex-col items-center justify-start rounded-xl border border-primary bg-primary p-4 shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-xl sm:w-[110%] md:w-[115%] lg:w-[105%] xl:w-[100%]"
            >
              <div
                className={`mb-3 rounded-full bg-gradient-to-br ${step.iconBg} p-3 text-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {step.icon}
              </div>

              <h3 className="text-lg font-semibold text-white">{step.title}</h3>

              <p className="mt-1 text-sm" style={{ color: "#CCFAFC" }}>
                {step.description}
              </p>

              <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-bl-xl rounded-br-xl bg-gradient-to-r from-blue-500 to-purple-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerksBenefits;
