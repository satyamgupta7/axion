"use client";
import { FaUserTie, FaUsers, FaGraduationCap } from "react-icons/fa";
import Testimonials from "../Testimonials";
import HiringPartner from "../HiringPartners";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  LabelList,
  Cell,
  PieChart,
  Pie,
  Tooltip,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    padding: "80px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  contentBoxWrapper: {
    width: "95%",
    maxWidth: "1400px",
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
  },
  backgroundSection: {
    backgroundImage: "url('/images/hero/Placement3.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    padding: "32px",
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "#fff",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(17, 24, 39, 0.7)",
    zIndex: 0,
  },
  textColumn: {
    minWidth: "300px",
    flex: 1,
    textAlign: "left",
    position: "relative",
    zIndex: 1,
  },
  heading: {
    marginBottom: "16px",
    fontSize: "2.25rem",
    fontWeight: "bold",
    color: "#fff",
  },
  paragraph: {
    marginBottom: "16px",
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
  },
  cardContainer: {
    marginTop: "32px",
    display: "flex",
    flexWrap: "wrap",
    gap: "32px",
  },
  statCard: {
    minWidth: "150px",
    flex: 1,
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
    color: "#1e3a8a",
  },
  statNumber: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  statTitle: {
    marginTop: "4px",
    fontSize: "1rem",
  },
  graphSection: {
    marginTop: "48px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "16px",
    padding: "24px",
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  graphTextContent: {
    flex: "1 1 45%",
    textAlign: "left",
    color: "#1e3a8a",
  },
  graphTitle: {
    fontSize: "1.75rem",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#1e3a8a",
  },
  graphParagraph: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    color: "#1f2937",
  },
  graphChart: {
    flex: "1 1 45%",
    height: "300px",
  },
  pieChartsSection: {
    marginTop: "48px",
    padding: "24px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "48px",
    width: "70rem",
  },
  pieChartsContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "32px",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "1200px",
  },
  pieChartWrapper: {
    flex: "0 0 calc(50% - 16px)",
    backgroundColor: "#f9fafb",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  pieSectionHeading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "24px",
    color: "#1e3a8a",
    textAlign: "center",
    width: "100%",
  },
  pieTitle: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#1e3a8a",
  },
  sectionWrapper: {
    marginTop: "32px",
    width: "100%",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const statCardVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const graphSectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const pieChartSectionVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
};

const pieChartWrapperVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.6 } },
};

// Define colors for the pie charts
const industryColors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8A2BE2",
  "#D2691E",
];
const roleColors = [
  "#1E90FF",
  "#20B2AA",
  "#FFD700",
  "#FFA07A",
  "#9370DB",
  "#3CB371",
];

const Placement = () => {
  const stats = [
    {
      icon: <FaUserTie size={32} />,
      title: "200+",
      subtitle: "Expert Mentors",
    },
    {
      icon: <FaUsers size={32} />,
      title: "10k+",
      subtitle: "Active Students",
    },
    {
      icon: <FaGraduationCap size={32} />,
      title: "3k+",
      subtitle: "Placed Students",
    },
  ];

  const salaryData = [
    { category: "Lowest", salary: 4, color: "#9ca3af" },
    { category: "Average", salary: 8, color: "#3b82f6" },
    { category: "Highest", salary: 25, color: "#ef4444" },
  ];

  const industryData = [
    { name: "IT Services", value: 30 },
    { name: "Finance/Banking", value: 20 },
    { name: "E-commerce", value: 15 },
    { name: "Analytics", value: 10 },
    { name: "Operations", value: 15 },
    { name: "Others", value: 10 },
  ];

  const roleData = [
    { name: "Data Analyst", value: 20 },
    { name: "Data Scientist", value: 15 },
    { name: "Full Stack Dev", value: 20 },
    { name: "Business Analyst", value: 15 },
    { name: "ML/AI Engineer", value: 20 },
    { name: "Data Engineer", value: 10 },
  ];

  return (
    <motion.div
      style={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div style={styles.contentBoxWrapper} variants={itemVariants}>
        <div style={styles.overlay} />
        <motion.div style={styles.backgroundSection} variants={itemVariants}>
          <motion.div style={styles.textColumn} variants={itemVariants}>
            <motion.h1 style={styles.heading} variants={itemVariants}>
              Placement Overview
            </motion.h1>
            <motion.p style={styles.paragraph} variants={itemVariants}>
              At Axion Gen, our interns are our top priority. Their progress and
              achievements are a reflection of our commitment to their growth.
            </motion.p>

            <motion.div style={styles.cardContainer} variants={itemVariants}>
              {stats.map((item, idx) => (
                <motion.div
                  key={idx}
                  style={styles.statCard}
                  variants={statCardVariants}
                >
                  <div style={{ marginBottom: "8px" }}>{item.icon}</div>
                  <h3 style={styles.statNumber}>{item.title}</h3>
                  <p style={styles.statTitle}>{item.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* 📊 Bar Chart Inside Background Section */}
            <motion.div
              style={styles.graphSection}
              variants={graphSectionVariants}
            >
              <motion.div
                style={styles.graphTextContent}
                variants={itemVariants}
              >
                <motion.h2 style={styles.graphTitle} variants={itemVariants}>
                  Axion Gen vs. The Industry
                </motion.h2>
                <motion.p style={styles.graphParagraph} variants={itemVariants}>
                  Our interns get placed with salaries that are, on average,{" "}
                  <strong>40% higher</strong> than the industry standard. Axion
                  Gen alums are one of the most well-placed professionals in the
                  country, with salaries as high as <strong>₹25 LPA</strong>.
                </motion.p>
              </motion.div>

              <motion.div style={styles.graphChart} variants={itemVariants}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salaryData}>
                    <XAxis dataKey="category" />
                    <Bar dataKey="salary" radius={[8, 8, 0, 0]}>
                      {salaryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                      <LabelList
                        dataKey="salary"
                        position="top"
                        formatter={(value: number) => `${value} LPA`}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 🥧 Pie Chart Section - Outside Background */}
      <motion.div
        style={styles.pieChartsSection}
        variants={pieChartSectionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 style={styles.pieSectionHeading} variants={itemVariants}>
          Industry & Role Wise Placement Distribution
        </motion.h2>
        <motion.div style={styles.pieChartsContainer}>
          <motion.div
            style={styles.pieChartWrapper}
            variants={pieChartWrapperVariants}
          >
            <h4 style={styles.pieTitle}>Industry Distribution</h4>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={industryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label
                >
                  {industryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={industryColors[index % industryColors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            style={styles.pieChartWrapper}
            variants={pieChartWrapperVariants}
          >
            <h4 style={styles.pieTitle}>Role Distribution</h4>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={roleData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label
                >
                  {roleData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={roleColors[index % roleColors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div style={styles.sectionWrapper} variants={itemVariants}>
        <Testimonials />
      </motion.div>

      <motion.div style={styles.sectionWrapper} variants={itemVariants}>
        <HiringPartner />
      </motion.div>
    </motion.div>
  );
};

export default Placement;
