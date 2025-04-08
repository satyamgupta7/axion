"use client";
import {
  AiOutlineCheckCircle,
  AiFillEye,
  AiFillHeart,
  AiFillFlag,
} from "react-icons/ai";
import { CSSProperties, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Testimonials from "../Testimonials";
import HiringPartner from "../HiringPartners";

const baseStyles: Record<string, CSSProperties> = {
  container: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15vh 1vw", // Adjusted padding for better responsiveness
    flexDirection: "column",
    backgroundColor: "#f7f7f7", // Light grey background for better contrast
    overflow: "hidden", // Prevent background bleed
  },
  overlay: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "95%", // Slightly reduced width for better mobile spacing
    maxWidth: "1200px", // Adjusted max width
    borderRadius: "12px",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.65)), url('/images/hero/Placement.jpg')`, // Darker overlay
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "80vh", // Reduced min height for better initial view
    padding: "40px", // Increased padding
    position: "relative",
    zIndex: 1,
    color: "#fff",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", // Added subtle box shadow
  },
  contentSection: {
    flex: 1,
    textAlign: "left",
    maxWidth: "700px", // Adjusted max width
    marginBottom: "3rem", // Added margin below text
  },
  heading: {
    fontSize: "2.75rem", // Slightly larger heading
    fontWeight: "bold",
    marginBottom: "1.25rem",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Added text shadow
  },
  paragraph: {
    fontSize: "1.15rem",
    color: "#eee",
    lineHeight: "1.7",
    marginBottom: "1.5rem",
  },
  list: {
    listStyle: "none",
    paddingTop: "1.75rem",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "0.75rem",
    fontSize: "1.05rem",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-around", // More even spacing
    gap: "1.5rem",
    marginTop: "3rem",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly more opaque white
    padding: "2.5rem",
    borderRadius: "1rem",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    width: "calc(33% - 1rem)", // Adjusted width for better spacing
    minWidth: "300px",
    marginBottom: "1.5rem",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    borderLeft: "8px solid",
    // "&:hover": {
    //   transform: "translateY(-5px)",
    //   boxShadow: "0 12px 30px rgba(0, 0, 0, 0.18)",
    // },
  },
  cardTitle: {
    fontSize: "1.6rem",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#2c3e50", // Darker title color
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  cardText: {
    fontSize: "1.05rem",
    color: "#555",
    lineHeight: "1.7",
  },
  sectionWrapper: {
    marginTop: "4rem",
    width: "100%",
    padding: "2rem 5vw", // Consistent padding
    maxWidth: "1400px",
    margin: "4rem auto", // Center the section
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const AboutSection = () => {
  const [mounted, setMounted] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  if (!mounted) {
    return <div style={baseStyles.container}>Loading...</div>; // Basic loading state
  }

  return (
    <motion.div
      style={baseStyles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        style={baseStyles.overlay}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeUpVariants}
      >
        <div style={baseStyles.contentSection}>
          <motion.h1
            style={baseStyles.heading}
            variants={fadeUpVariants}
            custom={0}
          >
            Empowering Careers Through{" "}
            <span style={{ color: "#f39c12" }}>Internships</span>,{" "}
            <span style={{ color: "#2ecc71" }}>Certifications</span> &{" "}
            <span style={{ color: "#3498db" }}>Real-World Projects</span>
          </motion.h1>
          <motion.p
            style={baseStyles.paragraph}
            variants={fadeUpVariants}
            custom={1}
          >
            At AxionGen, we aim to bridge the gap between academic knowledge and
            real-world industry experience by providing immersive internships,
            industry-recognized certifications, and hands-on, industry-focused
            projects. We empower individuals to enhance their skills, build
            valuable portfolios, and significantly boost their career prospects
            in today competitive job market.
          </motion.p>
          <motion.ul
            style={baseStyles.list}
            variants={fadeUpVariants}
            custom={2}
          >
            <motion.li
              style={baseStyles.listItem}
              variants={fadeUpVariants}
              custom={3}
            >
              <AiOutlineCheckCircle size={22} color="#2ecc71" /> Gain practical
              experience through{" "}
              <strong style={{ color: "#fff" }}>
                Internship Opportunities
              </strong>{" "}
              with Leading Companies.
            </motion.li>
            <motion.li
              style={baseStyles.listItem}
              variants={fadeUpVariants}
              custom={4}
            >
              <AiOutlineCheckCircle size={22} color="#3498db" /> Earn{" "}
              <strong style={{ color: "#fff" }}>
                Industry-Recognized Certifications
              </strong>{" "}
              to validate your skills.
            </motion.li>
            <motion.li
              style={baseStyles.listItem}
              variants={fadeUpVariants}
              custom={5}
            >
              <AiOutlineCheckCircle size={22} color="#e67e22" /> Develop a
              strong portfolio by working on{" "}
              <strong style={{ color: "#fff" }}>
                Live, Industry-Relevant Projects
              </strong>
              .
            </motion.li>
          </motion.ul>
        </div>

        {/* Vision, Mission, Values Cards with Animation */}
        <motion.div style={baseStyles.cardContainer}>
          {[
            {
              title: "Our Vision",
              icon: <AiFillEye size={28} color="#0070f3" />,
              color: "#0070f3",
              content:
                "We aspire to transform the way individuals prepare for and embark on their careers. Our goal is to become the leading platform that bridges the gap between education and the workforce, empowering individuals with hands-on experience, relevant skills, and innovative strategies to succeed in their professional journey.",
            },
            {
              title: "Our Mission",
              icon: <AiFillFlag size={28} color="#00b894" />,
              color: "#00b894",
              content:
                "Our mission is to connect talented individuals with their ideal careers. We equip you with the essential tools, knowledge, and real-world experience needed to thrive in today fast-moving job market, ensuring you are well-prepared for the challenges ahead.",
            },
            {
              title: "Our Core Values",
              icon: <AiFillHeart size={28} color="#e84393" />,
              color: "#e84393",
              content:
                "The principles we uphold guide every action we take. Our values reflect a commitment to providing individuals with the expertise, strategies, and real-world experience necessary to excel in today’s competitive job market. We prioritize growth, innovation, and impactful learning.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              style={{ ...baseStyles.card, borderLeftColor: card.color }}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom={i + 3}
            >
              <h2 style={baseStyles.cardTitle}>
                {card.icon} {card.title}
              </h2>
              <p style={baseStyles.cardText}>{card.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div style={baseStyles.sectionWrapper}>
        <Testimonials />
      </div>

      <div style={baseStyles.sectionWrapper}>
        <HiringPartner />
      </div>
    </motion.div>
  );
};

export default AboutSection;
