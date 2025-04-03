"use client";
import {
  FaLaptopCode,
  FaAward,
  FaFileAlt,
  FaLinkedin,
  FaUserFriends,
  FaBriefcase,
} from "react-icons/fa";

const roadmapSteps = [
  {
    id: "offer-letter",
    title: "Internship Offer Letter",
    description:
      "Receive an official internship offer letter validating your position and experience.",
    icon: <FaLaptopCode className="text-5xl text-blue-400" />,
  },
  {
    id: "lor",
    title: "Letter of Recommendation",
    description: "Get recommendations from industry experts.",
    icon: <FaAward className="text-5xl text-green-400" />,
  },
  {
    id: "experience-certificate",
    title: "Experience Certificate",
    description:
      "Earn a detailed certificate documenting your practical work experience and skills.",
    icon: <FaFileAlt className="text-yellow-400 text-5xl" />,
  },
  {
    id: "internship-certificate",
    title: "Internship Certificate",
    description:
      "Receive an official certification upon successful completion of your internship.",
    icon: <FaLinkedin className="text-5xl text-blue-500" />,
  },
  {
    id: "industry-network",
    title: "Industry Network",
    description:
      "Connect and collaborate with industry experts and like-minded peers.",
    icon: <FaUserFriends className="text-5xl text-purple-400" />,
  },
  {
    id: "career-opportunities",
    title: "Career Opportunities",
    description: "Get opportunities for paid internships and job placements.",
    icon: <FaBriefcase className="text-5xl text-red-400" />,
  },
];

const PerksBenefits = () => {
  return (
    <section className="bg-gray-400 px-8 py-12 md:px-16 md:py-16 lg:py-20">
      <div className="container mx-auto text-center">
        {/* Heading & Subheading */}
        <h2 className="text-4xl font-bold text-white">Perks & Benefits</h2>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {roadmapSteps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center rounded-xl border border-transparent bg-gray-800 p-6 shadow-md transition-all duration-300 
                         hover:border-blue-400 hover:bg-gray-700 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4">{step.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>

              {/* Description */}
              <p className="mt-2 text-center text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerksBenefits;
