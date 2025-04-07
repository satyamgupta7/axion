"use client";
import { CSSProperties } from "react";
import { AiFillStar, AiOutlineCheckCircle } from "react-icons/ai";
import {
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaUsers,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import EnrollmentForm from "../EnrollmentForm";
import RoadmapAnimation from "../RoadMapAnimation";
import Framework from "../Framework";
import TimerSection from "../TimerSection";
import HiringPartner from "../HiringPartners";

const internshipStyles: Record<string, CSSProperties> = {
  container: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15vh 1vw",
    flexDirection: "column",
    backgroundColor: "white",
  },
  overlay: {
    display: "flex",
    flexWrap: "wrap",
    width: "95%",
    maxWidth: "1400px",
    borderRadius: "12px",
    padding: "5%",
    backgroundImage: "url('/images/programs/WebDev.webp')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#ffffff",
    justifyContent: "space-between",
  },
  contentSection: {
    flex: "1 1 50%",
    textAlign: "left",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginBottom: "20px",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
    fontSize: "1rem",
  },
  reviewInternContainer: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  reviewItem: {
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
  },
  formSection: {
    flex: "1 1 40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  techCardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  techCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};

interface TechStackItem {
  title: string;
  icon: React.ReactNode;
  desc: string;
}

const techStack: TechStackItem[] = [
  {
    title: "HTML",
    icon: <FaHtml5 size={40} color="#e34c26" />,
    desc: "Structure your web content.",
  },
  {
    title: "CSS",
    icon: <FaCss3Alt size={40} color="#264de4" />,
    desc: "Style and design your websites.",
  },
  {
    title: "JavaScript",
    icon: <FaJsSquare size={40} color="#f7df1e" />,
    desc: "Add interactivity and logic.",
  },
  {
    title: "React",
    icon: <FaReact size={40} color="#61DBFB" />,
    desc: "Build fast and modular UI.",
  },
  {
    title: "JSON",
    icon: <FaCode size={40} color="#888" />,
    desc: "Handle structured data formats.",
  },
  {
    title: "SQL",
    icon: <FaDatabase size={40} color="#336791" />,
    desc: "Manage relational databases.",
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap size={40} color="#7952B3" />,
    desc: "Responsive design with ease.",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb size={40} color="#47A248" />,
    desc: "Work with NoSQL databases.",
  },
];

const ReviewStars = () =>
  [...Array(5)].map((_, index) => (
    <AiFillStar key={index} size={20} color="yellow" />
  ));

const TechStackSection = () => (
  <div style={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
    <h2
      style={{
        textAlign: "center",
        marginBottom: "30px",
        color: "#003366",
        fontSize: "32px",
        fontWeight: "bold",
      }}
    >
      Key Technologies You Will Work on
    </h2>
    <div style={internshipStyles.techCardContainer}>
      {techStack.map((tech) => (
        <div key={tech.title} style={internshipStyles.techCard}>
          {tech.icon}
          <h3 style={{ color: "#003366", fontWeight: "bold", margin: 0 }}>
            {tech.title}
          </h3>
          <p style={{ marginTop: "10px" }}>{tech.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const IntershipWebDev = () => {
  return (
    <div style={internshipStyles.container}>
      <div style={internshipStyles.overlay}>
        {/* Content Section */}
        <div style={internshipStyles.contentSection}>
          <h1 style={internshipStyles.heading}>
            Web Development{" "}
            <span style={{ fontWeight: "bold", color: "black" }}>
              Internship Program
            </span>
          </h1>
          <p style={{ ...internshipStyles.paragraph, color: "#f0f0f0" }}>
            Kickstart your career in web development with our hands-on
            internship program. Learn to build responsive, dynamic websites and
            web applications using the latest technologies. Gain practical
            experience in front-end and back-end development with tools like
            HTML, CSS, JavaScript, React, and Node.js. Master coding, debugging,
            and deployment while working on real-world projects.
          </p>
          <ul style={internshipStyles.list}>
            <li style={internshipStyles.listItem}>
              <AiOutlineCheckCircle size={20} /> Work with industry expert on
              real time projects
            </li>
            <li style={internshipStyles.listItem}>
              <AiOutlineCheckCircle size={20} /> Get the internship Certificate
            </li>
            <li style={internshipStyles.listItem}>
              <AiOutlineCheckCircle size={20} /> Job Placement Assistance
            </li>
          </ul>
          <div style={internshipStyles.reviewInternContainer}>
            <span style={internshipStyles.reviewItem}>
              <ReviewStars />
              <span style={{ marginLeft: "8px" }}>300 Reviews</span>
            </span>
            <span style={internshipStyles.reviewItem}>
              <FaUsers size={20} color="green" style={{ marginRight: "8px" }} />
              2100 Interns
            </span>
          </div>
        </div>

        {/* Form Section */}
        <div style={internshipStyles.formSection}>
          <EnrollmentForm />
        </div>
      </div>

      {/* Technologies Section */}
      <TechStackSection />

      <div
        style={{
          width: "100%",
          borderRadius: "16px",
          overflow: "hidden",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <RoadmapAnimation />
      </div>
      <Framework />
      <TimerSection />
      <HiringPartner />
    </div>
  );
};

export default IntershipWebDev;
