"use client";
import { CSSProperties } from "react";
import { AiFillStar, AiOutlineCheckCircle } from "react-icons/ai";
import {
  FaChartBar,
  FaFileExcel,
  FaDatabase,
  FaChartArea,
  FaCode,
  FaUsers,
} from "react-icons/fa";
import { SiTableau } from "react-icons/si";
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
    backgroundImage: "url('/images/programs/DataAnalyst.jpg')",
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
    title: "Data Analysis",
    icon: <FaChartBar size={40} color="#29ABE2" />,
    desc: "Extract insights from raw data.",
  },
  {
    title: "SQL",
    icon: <FaDatabase size={40} color="#336791" />,
    desc: "Query and manage databases effectively.",
  },
  {
    title: "Excel",
    icon: <FaFileExcel size={40} color="#20734F" />,
    desc: "Spreadsheet software for data manipulation.",
  },
  {
    title: "Data Visualization",
    icon: <FaChartArea size={40} color="#F0AD4E" />,
    desc: "Present data through compelling visuals.",
  },
  {
    title: "Python (Pandas)",
    icon: <FaCode size={40} color="#3776AB" />,
    desc: "Powerful library for data manipulation and analysis.",
  },
  {
    title: "Tableau",
    icon: <SiTableau size={40} color="#E97627" />,
    desc: "Interactive data visualization tool.",
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
      Key Skills You Will Master
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

const InternshipDataAnalyst = () => {
  return (
    <div style={internshipStyles.container}>
      <div style={internshipStyles.overlay}>
        {/* Content Section */}
        <div style={internshipStyles.contentSection}>
          <h1 style={internshipStyles.heading}>
            Data Analyst{" "}
            <span style={{ fontWeight: "bold", color: "#003366" }}>
              Internship Program
            </span>
          </h1>
          <p style={{ ...internshipStyles.paragraph, color: "#f0f0f0" }}>
            Begin your journey to becoming a skilled Data Analyst with our
            immersive internship program. Learn to collect, clean, analyze, and
            interpret data to provide valuable insights and support
            decision-making. Gain practical experience with industry-standard
            tools and techniques.
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
              <span style={{ marginLeft: "8px" }}>380 Reviews</span>
            </span>
            <span style={internshipStyles.reviewItem}>
              <FaUsers size={20} color="green" style={{ marginRight: "8px" }} />
              2800 Interns
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
      <Framework />
      <TimerSection />
      <HiringPartner />
    </div>
  );
};

export default InternshipDataAnalyst;
