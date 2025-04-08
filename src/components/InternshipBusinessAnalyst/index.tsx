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
  FaChartLine,
  FaFileAlt,
  FaProjectDiagram,
  FaUserTie,
} from "react-icons/fa";
import { SiTableau } from "react-icons/si";

import EnrollmentForm from "../EnrollmentForm";
import Framework from "../Framework";
import TimerSection from "../TimerSection";
import HiringPartner from "../HiringPartners";
import { motion } from "framer-motion";
import RoadMap from "../RoadMap";

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
    backgroundImage: "url('/images/programs/BusinessAnalyst.jpg')",
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
    title: "Business Analysis",
    icon: <FaChartLine size={40} color="#29ABE2" />,
    desc: "Analyze business processes to identify improvement opportunities.",
  },
  {
    title: "Requirement Gathering",
    icon: <FaFileAlt size={40} color="#336791" />,
    desc: "Collect and document business needs and expectations.",
  },
  {
    title: "Process Mapping",
    icon: <FaProjectDiagram size={40} color="#20734F" />,
    desc: "Visualize workflows to understand and optimize operations.",
  },
  {
    title: "Stakeholder Management",
    icon: <FaUserTie size={40} color="#F0AD4E" />,
    desc: "Engage with stakeholders to ensure project alignment.",
  },
  {
    title: "MS Office Suite",
    icon: <FaUserTie size={40} color="#D83B01" />,
    desc: "Create impactful documents, presentations, and spreadsheets.",
  },
  {
    title: "Power BI",
    icon: <FaUserTie size={40} color="#F2C811" />,
    desc: "Turn data into insights through interactive dashboards.",
  },
];

const techStack2: TechStackItem[] = [
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
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    style={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}
  >
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
    <motion.div style={internshipStyles.techCardContainer}>
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.title}
          style={internshipStyles.techCard}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {tech.icon}
          <h3 style={{ color: "#003366", fontWeight: "bold", margin: 0 }}>
            {tech.title}
          </h3>
          <p style={{ marginTop: "10px" }}>{tech.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

const InternshipBusinessAnalyst = () => {
  return (
    <motion.div
      style={internshipStyles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={internshipStyles.overlay}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
      >
        {/* Content Section */}
        <div style={internshipStyles.contentSection}>
          <motion.h1
            style={internshipStyles.heading}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Business Analyst{" "}
            <span style={{ fontWeight: "bold", color: "blue" }}>
              Internship Program
            </span>
          </motion.h1>
          <motion.p
            style={{ ...internshipStyles.paragraph, color: "#f0f0f0" }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Kickstart your career as a Business Analyst through our
            comprehensive internship program. Understand how to identify
            business needs, analyze operations, and propose effective solutions
            that drive growth. Build real-world experience using tools and
            strategies widely adopted across industries.
          </motion.p>
          <motion.ul
            style={internshipStyles.list}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
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
          </motion.ul>
          <motion.div
            style={internshipStyles.reviewInternContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.0 }}
          >
            <span style={internshipStyles.reviewItem}>
              <ReviewStars />
              <span style={{ marginLeft: "8px" }}>380 Reviews</span>
            </span>
            <span style={internshipStyles.reviewItem}>
              <FaUsers size={20} color="green" style={{ marginRight: "8px" }} />
              2800 Interns
            </span>
          </motion.div>
        </div>

        {/* Form Section */}
        <motion.div
          style={internshipStyles.formSection}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <EnrollmentForm />
        </motion.div>
      </motion.div>

      {/* Technologies Section */}
      <TechStackSection />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Framework />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <TimerSection />
      </motion.div>
      <motion.div
        style={{
          width: "100%",
          borderRadius: "16px",
          overflow: "hidden",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <RoadMap />
      </motion.div>
      <motion.div
        style={{ width: "100%", marginTop: "2rem" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <HiringPartner />
      </motion.div>
    </motion.div>
  );
};

export default InternshipBusinessAnalyst;
