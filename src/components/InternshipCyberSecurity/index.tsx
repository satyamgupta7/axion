"use client";
import { CSSProperties } from "react";
import { AiFillStar, AiOutlineCheckCircle } from "react-icons/ai";
import {
  FaLock,
  FaShieldAlt,
  FaNetworkWired,
  FaKey,
  FaUserSecret,
  FaUsers,
  FaDatabase,
} from "react-icons/fa";
import EnrollmentForm from "../EnrollmentForm";
import RoadmapAnimation from "../RoadMapAnimation";

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
    backgroundImage: "url('/images/programs/CyberSecurity.jpg')",
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
    title: "Network Security",
    icon: <FaNetworkWired size={40} color="#007bff" />,
    desc: "Secure your network infrastructure.",
  },
  {
    title: "Cryptography",
    icon: <FaKey size={40} color="#ffc107" />,
    desc: "Learn the art of secure communication.",
  },
  {
    title: "Ethical Hacking",
    icon: <FaUserSecret size={40} color="#28a745" />,
    desc: "Identify vulnerabilities legally.",
  },
  {
    title: "Data Security",
    icon: <FaDatabase size={40} color="#dc3545" />,
    desc: "Protect sensitive information.",
  },
  {
    title: "Firewalls & IDS",
    icon: <FaShieldAlt size={40} color="#17a2b8" />,
    desc: "Implement defense mechanisms.",
  },
  {
    title: "Risk Assessment",
    icon: <FaLock size={40} color="#6c757d" />,
    desc: "Analyze and mitigate security risks.",
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
      Key Areas You Will Explore
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

const IntershipCyberSecurity = () => {
  return (
    <div style={internshipStyles.container}>
      <div style={internshipStyles.overlay}>
        {/* Content Section */}
        <div style={internshipStyles.contentSection}>
          <h1 style={internshipStyles.heading}>
            Cyber Security{" "}
            <span style={{ fontWeight: "bold", color: "blue" }}>
              Internship Program
            </span>
          </h1>
          <p style={{ ...internshipStyles.paragraph, color: "#f0f0f0" }}>
            Embark on a crucial journey into the world of digital defense with
            our hands-on Cyber Security Internship Program. Learn to protect
            systems and data from cyber threats using cutting-edge techniques
            and tools. Gain practical experience in identifying vulnerabilities,
            implementing security measures, and responding to incidents. Develop
            a strong foundation in the principles of information security and
            contribute to a safer digital landscape.
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
              <span style={{ marginLeft: "8px" }}>280 Reviews</span>
            </span>
            <span style={internshipStyles.reviewItem}>
              <FaUsers size={20} color="green" style={{ marginRight: "8px" }} />
              1800 Interns
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
        }}
      >
        <RoadmapAnimation />
      </div>
    </div>
  );
};

export default IntershipCyberSecurity;
