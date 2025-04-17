"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaArrowRight,
  FaChartBar,
  FaDatabase,
  FaCode,
  FaBusinessTime,
  FaNetworkWired,
  FaShieldAlt,
} from "react-icons/fa"; // Importing icons

const internshipPrograms = [
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    image: "/images/programs/WebDev.webp",
    icon: <FaCode className="mb-2 text-4xl text-white" />,
    content: {
      heading: "Full Stack Development",
      description:
        "Become a Full Stack Developer by mastering front-end and back-end technologies, building scalable web applications.",
      points: [
        "Work with React.js, Node.js, Express, and MongoDB.",
        "Build projects like e-commerce platforms and social media apps.",
      ],
    },
  },
  {
    id: "data-science",
    title: "Data Science",
    image: "/images/programs/DataScience.jpg",
    icon: <FaDatabase className="mb-2 text-4xl text-white" />,
    content: {
      heading: "Data Science",
      description:
        "Master machine learning and AI techniques to analyze large data sets and build predictive models that drive innovation.",
      points: [
        "Work with Python, TensorFlow, and Scikit-learn.",
        "Hands-on projects like fraud detection, sentiment analysis.",
      ],
    },
  },
  {
    id: "data-analytics",
    title: "Data Analyst",
    image: "/images/programs/DataAnalyst.JPG",
    icon: <FaChartBar className="mb-2 text-4xl text-white" />,
    content: {
      heading: "Data Analytics",
      description:
        "Decode Data, Deliver Insights. Use SQL, Excel, and statistics to uncover insights, communicate critical findings, and create data-driven solutions for a startup on a live project.",
      points: [
        "Work on tools like Excel, SQL, Tableau, and Python.",
        "Work on projects like market segmentation, trend analysis.",
      ],
    },
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    image: "/images/programs/BusinessAnalyst.jpg",
    icon: <FaBusinessTime className="mb-2 text-4xl text-white" />,
    content: {
      heading: "Business Analyst",
      description:
        "Analyze business processes, identify improvement opportunities, and create data-driven strategies for growth.",
      points: [
        "Work with business intelligence tools like Power BI and Tableau.",
        "Conduct market research and business process optimization.",
      ],
    },
  },
  {
    id: "networking",
    title: "Networking",
    image: "/images/programs/Networking.webp",
    icon: <FaNetworkWired className="mb-2 text-4xl text-white" />,
    content: {
      heading: "Networking",
      description:
        "Understand computer networks, protocols, and communication systems that form the backbone of the internet and enterprise infrastructures.",
      points: [
        "Learn about TCP/IP, DNS, routing, and switching.",
        "Hands-on practice with Cisco Packet Tracer and network configuration.",
      ],
    },
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    image: "/images/programs/CyberSecurity.jpg",
    icon: <FaShieldAlt className="mb-2 text-4xl text-white" />,
    content: {
      heading: "Cyber Security",
      description:
        "Learn to protect systems and networks from cyber threats by mastering ethical hacking, security tools, and real-time attack simulations.",
      points: [
        "Work with tools like Wireshark, Metasploit, and Kali Linux.",
        "Hands-on projects on penetration testing and vulnerability assessment.",
      ],
    },
  },
];

const Internship = () => {
  const [activeTab, setActiveTab] = useState("full-stack-development");

  const selectedProgram = internshipPrograms.find(
    (program) => program.id === activeTab,
  );

  return (
    <section
      id="internship"
      className="bg-white px-8 py-12 md:px-16 md:py-16 lg:py-20"
    >
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-primary dark:text-white">
          Explore Our Internship Programs
        </h2>

        {/* Tabs Section */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 border-b border-gray-300 pb-4">
          {internshipPrograms.map((program) => (
            <button
              key={program.id}
              className={`rounded-lg px-6 py-3 text-lg font-semibold transition-all ${
                activeTab === program.id
                  ? "scale-105 transform bg-blue-700 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(program.id)}
            >
              {program.title}
            </button>
          ))}
        </div>

        {/* Dynamic Content Card */}
        <div className="mt-10 flex flex-col items-center">
          <div className="w-full max-w-3xl transform overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl transition-all duration-300 hover:scale-105">
            {/* Image Section with Title & Icon */}
            <div className="relative h-60 w-full">
              <Image
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="h-full w-full object-cover"
                fill
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 p-4">
                {selectedProgram.icon}
                <h3 className="mt-4 flex items-center text-2xl font-bold text-white">
                  {selectedProgram.content.heading}
                </h3>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <p className="text-lg text-gray-700">
                {selectedProgram.content.description}
              </p>
              <ul className="mt-4 space-y-3 text-lg text-gray-700">
                {selectedProgram.content.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-blue-600">✅</span> {point}
                  </li>
                ))}
              </ul>
              <button className="mt-6 flex items-center rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700">
                Get More Details <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
