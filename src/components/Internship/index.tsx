"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaArrowRight,
  FaChartBar,
  FaDatabase,
  FaCode,
  FaBusinessTime,
} from "react-icons/fa"; // Importing icons

const internshipPrograms = [
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    image: "/images/programs/Full-Stack-Developer.webp",
    icon: <FaCode className="mb-2 text-4xl text-white" />,
    content: {
      heading: "Full Stack Development",
      description:
        "Become a Full Stack Developer by mastering front-end and back-end technologies, building scalable web applications.",
      points: [
        "✅ Work with React.js, Node.js, Express, and MongoDB.",
        "✅ Build projects like e-commerce platforms and social media apps.",
      ],
    },
  },
  {
    id: "data-science",
    title: "Data Science",
    image: "/images/programs/Data-Science.jpg",
    icon: <FaDatabase className="mb-2 text-4xl text-white" />,

    content: {
      heading: "Data Science",
      description:
        "Master machine learning and AI techniques to analyze large data sets and build predictive models that drive innovation.",
      points: [
        "✅ Work with Python, TensorFlow, and Scikit-learn.",
        "✅ Hands-on projects like fraud detection, sentiment analysis.",
      ],
    },
  },
  {
    id: "data-analytics",
    title: "Data Analyst",
    image: "/images/programs/Data-Analytics.jpeg",
    icon: <FaChartBar className="mb-2 text-4xl text-white" />,

    content: {
      heading: "Data Analytics",
      description:
        "Decode Data, Deliver Insights. Use SQL, Excel, and statistics to uncover insights, communicate critical findings, and create data-driven solutions for a startup on a live project.",
      points: [
        "✅ Work on tools like Excel, SQL, Tableau, and Python.",
        "✅ Work on projects like market segmentation, trend analysis.",
      ],
    },
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    image: "/images/programs/Business-Analyst.jpeg",
    icon: <FaBusinessTime className="mb-2 text-4xl text-white" />,
    content: {
      heading: "Business Analyst",
      description:
        "Analyze business processes, identify improvement opportunities, and create data-driven strategies for growth.",
      points: [
        "✅ Work with business intelligence tools like Power BI and Tableau.",
        "✅ Conduct market research and business process optimization.",
      ],
    },
  },
];

const Internship = () => {
  const [activeTab, setActiveTab] = useState("data-analytics");

  const selectedProgram = internshipPrograms.find(
    (program) => program.id === activeTab,
  );

  return (
    <section id="internship" className="px-8 py-16 md:px-16 md:py-20 lg:py-28">
      <div className="container">
        <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white">
          Explore Our Internship Programs
        </h2>

        {/* Tabs Section */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 border-b border-gray-300 pb-4">
          {internshipPrograms.map((program) => (
            <button
              key={program.id}
              className={`rounded-md px-6 py-3 text-lg font-semibold transition-all ${
                activeTab === program.id
                  ? "bg-blue-600 text-white shadow-lg"
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
          <div className="w-full max-w-3xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
            {/* Image Section with Title & Icon */}
            <div className="relative h-60 w-full">
              <Image
                src={selectedProgram.image}
                alt={selectedProgram.title}
                width={100}
                height={100}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                {selectedProgram.icon} {/* Dynamically Render Icon */}
                <h3 className="flex items-center text-2xl font-bold text-white">
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
                  <li key={index}>{point}</li>
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
