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
    id: "real-world-projects",
    title: "Work on Real World Projects",
    description:
      "Gain hands-on experience working with Industry experts on real-world projects.",
    icon: <FaLaptopCode className="text-5xl text-blue-500" />,
  },
  {
    id: "internship-certification",
    title: "Internship Certification & LOR",
    description:
      "Receive industry-recognized certification and Letter of Recommendation upon completion.",
    icon: <FaAward className="text-5xl text-green-500" />,
  },
  {
    id: "resume-building",
    title: "ATS Resume Building",
    description:
      "Create a professional resume that stands out and passes Applicant Tracking Systems.",
    icon: <FaFileAlt className="text-yellow-500 text-5xl" />,
  },
  {
    id: "linkedin-optimization",
    title: "LinkedIn Profile Optimization",
    description:
      "Craft a compelling LinkedIn profile to attract recruiters and showcase your expertise.",
    icon: <FaLinkedin className="text-5xl text-blue-600" />,
  },
  {
    id: "networking",
    title: "Job Application Through Networking",
    description:
      "Master effective networking strategies to uncover hidden job opportunities.",
    icon: <FaUserFriends className="text-5xl text-purple-500" />,
  },
  {
    id: "placement-training",
    title: "Placement Training",
    description:
      "Comprehensive training to prepare you for interviews and assessments.",
    icon: <FaBriefcase className="text-5xl text-red-500" />,
  },
];

const HowWePrepare = () => {
  return (
    <section className="bg-white px-6 py-20 md:px-16 lg:py-28">
      <div className="container mx-auto text-center">
        {/* Heading & Subheading */}
        <h2 className="text-4xl font-bold text-gray-900">How We Prepare You</h2>
        <p className="mt-4 text-lg text-gray-600">
          Our structured program ensures you gain industry-level expertise and
          career readiness.
        </p>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {roadmapSteps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center rounded-xl border border-transparent bg-gray-100 p-6 shadow-md transition-all duration-300 
                         hover:border-blue-500 hover:bg-white hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4">{step.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-center text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWePrepare;
