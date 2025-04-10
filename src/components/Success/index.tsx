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
    backgroundImage: "url('/images/hero/Success.jpg')",
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

const Success = () => {
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
    { category: "Highest", salary: 25, color: "#22c55e" },
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
              Success Stories
            </motion.h1>
            <motion.p style={styles.paragraph} variants={itemVariants}>
              At Axion Gen, success isn’t just about landing a job—it’s about
              transforming careers, unlocking potential, and building confidence
              that lasts a lifetime. Our placement success stories are
              testaments to what’s possible with the right guidance, mentorship,
              and opportunities.
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
                  Axion Gen vs Industry – Placement Performance That Sets Us
                  Apart
                </motion.h2>
                <motion.p style={styles.graphParagraph} variants={itemVariants}>
                  Axion Gen Interns earn <strong>45% more</strong> than the
                  industry average. With top offers going up to
                  <strong>₹25 LPA</strong>., our alumni are raising the bar for
                  tech careers in India.
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

      <motion.div style={styles.sectionWrapper} variants={itemVariants}>
        <Testimonials />
      </motion.div>

      <motion.div style={styles.sectionWrapper} variants={itemVariants}>
        <HiringPartner />
      </motion.div>
    </motion.div>
  );
};

export default Success;
