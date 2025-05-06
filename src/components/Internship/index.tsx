"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import {
  FaArrowRight,
  FaChartBar,
  FaDatabase,
  FaCode,
  FaBusinessTime,
  FaNetworkWired,
  FaShieldAlt,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

const internshipPrograms = [
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    image: "/images/programs/WebDev.webp",
    icon: <FaCode className="mb-2 text-4xl text-white" />,
    description:
      "Become a Full Stack Developer by mastering front-end and back-end technologies, building scalable web applications.",
    points: [
      "Work with React.js, Node.js, Express, and MongoDB.",
      "Build projects like e-commerce platforms and social media apps.",
    ],
    route: "/internship/webdev",
  },
  {
    id: "data-science",
    title: "Data Science",
    image: "/images/programs/DataScience.jpg",
    icon: <FaDatabase className="mb-2 text-4xl text-white" />,
    description:
      "Master machine learning and AI techniques to analyze large data sets and build predictive models that drive innovation.",
    points: [
      "Work with Python, TensorFlow, and Scikit-learn.",
      "Hands-on projects like fraud detection, sentiment analysis.",
    ],
    route: "/internship/datascience",
  },
  {
    id: "data-analytics",
    title: "Data Analyst",
    image: "/images/programs/DataAnalyst.JPG",
    icon: <FaChartBar className="mb-2 text-4xl text-white" />,
    description:
      "Decode Data, Deliver Insights. Use SQL, Excel, and statistics to uncover insights, communicate critical findings, and create data-driven solutions for a startup on a live project.",
    points: [
      "Work on tools like Excel, SQL, Tableau, and Python.",
      "Work on projects like market segmentation, trend analysis.",
    ],
    route: "/internship/dataanalyst",
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    image: "/images/programs/BusinessAnalyst.jpg",
    icon: <FaBusinessTime className="mb-2 text-4xl text-white" />,
    description:
      "Analyze business processes, identify improvement opportunities, and create data-driven strategies for growth.",
    points: [
      "Work with business intelligence tools like Power BI and Tableau.",
      "Conduct market research and business process optimization.",
    ],
    route: "/internship/businessanalyst",
  },
  {
    id: "networking",
    title: "Networking",
    image: "/images/programs/Networking.webp",
    icon: <FaNetworkWired className="mb-2 text-4xl text-white" />,
    description:
      "Understand computer networks, protocols, and communication systems that form the backbone of the internet and enterprise infrastructures.",
    points: [
      "Learn about TCP/IP, DNS, routing, and switching.",
      "Hands-on practice with Cisco Packet Tracer and network configuration.",
    ],
    route: "/internship/networking",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    image: "/images/programs/CyberSecurity.jpg",
    icon: <FaShieldAlt className="mb-2 text-4xl text-white" />,
    description:
      "Learn to protect systems and networks from cyber threats by mastering ethical hacking, security tools, and real-time attack simulations.",
    points: [
      "Work with tools like Wireshark, Metasploit, and Kali Linux.",
      "Hands-on projects on penetration testing and vulnerability assessment.",
    ],
    route: "/internship/cybersecurity",
  },
];

const TabButton = ({ program, activeTab, setActiveTab }) => (
  <button
    key={program.id}
    className={`whitespace-nowrap rounded-full border-2 border-transparent px-3 py-1.5 text-xs font-semibold transition-all sm:px-4 sm:py-2 sm:text-sm ${
      activeTab === program.id
        ? "border-blue-600 bg-blue-600 text-white shadow-lg"
        : "border-gray-200/80 bg-gray-100 text-gray-700 hover:bg-blue-100/80 hover:text-blue-700"
    } text-center hover:scale-105`}
    onClick={() => setActiveTab(program.id)}
  >
    {program.title}
  </button>
);

const InternshipCard = ({ program, loading }) => (
  <div className="w-full max-w-3xl transform overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl transition-all duration-300 hover:scale-105">
    {/* Image + Heading */}
    <div className="relative h-60 w-full">
      <Image
        src={program.image}
        alt={program.title}
        className="h-full w-full object-cover"
        fill
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 p-4">
        {program.icon}
        <h3 className="mt-4 text-2xl font-bold text-white">{program.title}</h3>
      </div>
    </div>

    {/* Description + Points */}
    <div className="p-6">
      <p className="mb-4 text-sm text-gray-700 sm:text-base">
        {program.description}
      </p>
      <ul className="list-none pl-0">
        {program.points.map((point, index) => (
          <li key={index} className="flex items-center py-1">
            <FaCheckCircle className="mr-2 h-5 w-5 text-green-500" />
            <span className="text-sm text-gray-700 sm:text-base">{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-center">
        <Link href={program.route} passHref>
          <button className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-blue-600 bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700 sm:w-auto">
            Get More Details <FaArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const Internship = () => {
  const [activeTab, setActiveTab] = useState("full-stack-development");
  const [loading, setLoading] = useState(false);

  const selectedProgram = useMemo(
    () => internshipPrograms.find((program) => program.id === activeTab),
    [activeTab],
  );

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section
      id="internship"
      className="bg-white px-8 py-12 md:px-16 md:py-16 lg:py-20"
    >
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-primary dark:text-white">
          Explore Our Internship Programs
        </h2>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-3">
          {internshipPrograms.map((program) => (
            <TabButton
              key={program.id}
              program={program}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>

        {/* Content */}
        <div className="mt-10 flex flex-col items-center">
          {loading ? (
            <div className="flex items-center justify-center py-10">
              <FaSpinner className="animate-spin text-4xl text-blue-600" />
            </div>
          ) : selectedProgram ? (
            <InternshipCard program={selectedProgram} loading={loading} />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Internship;
