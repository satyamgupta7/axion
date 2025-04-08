"use client";
import { CSSProperties } from "react";
import { AiFillStar, AiOutlineCheckCircle } from "react-icons/ai";
import {
  FaUsers,
  FaDatabase,
  FaChartLine,
  FaBrain,
  FaCodeBranch,
  FaFileExcel,
  FaCloud,
} from "react-icons/fa";
import EnrollmentForm from "../EnrollmentForm";
import Framework from "../Framework";
import TimerSection from "../TimerSection";
import HiringPartner from "../HiringPartners";
import { motion } from "framer-motion";

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
    backgroundImage: "url('/images/programs/DataScience.jpg')",
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
    icon: <FaChartLine size={40} color="#29ABE2" />,
    desc: "Extract insights from raw data.",
  },
  {
    title: "Machine Learning",
    icon: <FaBrain size={40} color="#F0AD4E" />,
    desc: "Build intelligent systems that learn from data.",
  },
  {
    title: "Python",
    icon: <FaCodeBranch size={40} color="#3776AB" />,
    desc: "Essential programming language for data science.",
  },
  {
    title: "Data Visualization",
    icon: <FaChartLine size={40} color="#27AE60" />,
    desc: "Communicate findings through compelling visuals.",
  },
  {
    title: "Statistical Analysis",
    icon: <FaDatabase size={40} color="#CB4335" />,
    desc: "Understand data patterns and probabilities.",
  },
  {
    title: "Big Data",
    icon: <FaCloud size={40} color="#9B59B6" />,
    desc: "Work with and process large datasets.",
  },
  {
    title: "Data Wrangling",
    icon: <FaFileExcel size={40} color="#2ECC71" />,
    desc: "Clean and transform data for analysis.",
  },
];

const ReviewStars = () =>
  [...Array(5)].map((_, index) => (
    <AiFillStar key={index} size={20} color="yellow" />
  ));

const TechStackSection = () => (
  <motion.div
    style={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.h2
      style={{
        textAlign: "center",
        marginBottom: "30px",
        color: "#003366",
        fontSize: "32px",
        fontWeight: "bold",
      }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      Key Skills You Will Develop
    </motion.h2>
    <motion.div
      style={internshipStyles.techCardContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, staggerChildren: 0.1 }}
    >
      {techStack.map((tech) => (
        <motion.div
          key={tech.title}
          style={internshipStyles.techCard}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
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

const InternshipDataScience = () => {
  return (
    <motion.div
      style={internshipStyles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={internshipStyles.overlay}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Content Section */}
        <div style={internshipStyles.contentSection}>
          <motion.h1
            style={internshipStyles.heading}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            Data Science{" "}
            <span style={{ fontWeight: "bold", color: "#001F33" }}>
              Internship Program
            </span>
          </motion.h1>
          <motion.p
            style={{ ...internshipStyles.paragraph, color: "#f0f0f0" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unlock the power of data with our comprehensive Data Science
            Internship Program. Learn the essential skills and tools to analyze
            complex datasets, extract meaningful insights, and drive data-driven
            decisions. Gain hands-on experience in statistical analysis, machine
            learning, data visualization, and more.
          </motion.p>
          <motion.ul
            style={internshipStyles.list}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, staggerChildren: 0.1 }}
          >
            <motion.li
              style={internshipStyles.listItem}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AiOutlineCheckCircle size={20} /> Work with industry expert on
              real time projects
            </motion.li>
            <motion.li
              style={internshipStyles.listItem}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <AiOutlineCheckCircle size={20} /> Get the internship Certificate
            </motion.li>
            <motion.li
              style={internshipStyles.listItem}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <AiOutlineCheckCircle size={20} /> Job Placement Assistance
            </motion.li>
          </motion.ul>
          <motion.div
            style={internshipStyles.reviewInternContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span style={internshipStyles.reviewItem}>
              <ReviewStars />
              <span style={{ marginLeft: "8px" }}>420 Reviews</span>
            </span>
            <span style={internshipStyles.reviewItem}>
              <FaUsers size={20} color="green" style={{ marginRight: "8px" }} />
              3000 Interns
            </span>
          </motion.div>
        </div>

        {/* Form Section */}
        <motion.div
          style={internshipStyles.formSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <EnrollmentForm />
        </motion.div>
      </motion.div>

      {/* Technologies Section */}
      <TechStackSection />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Framework />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <TimerSection />
      </motion.div>
      <motion.div
        style={{ width: "100%", marginTop: "2rem" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <HiringPartner />
      </motion.div>
    </motion.div>
  );
};

export default InternshipDataScience;
