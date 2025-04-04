"use client"; // Mark this as a client component

import { useState } from "react";
import { AiFillStar, AiOutlineCheckCircle } from "react-icons/ai";
import internshipStyles from "@/styles/internshipStyles";
import {
  FaUsers,
  FaDatabase,
  FaTable,
  FaChartBar,
  FaFileAlt,
  FaProjectDiagram,
  FaComments,
} from "react-icons/fa";

const techStack = [
  {
    title: "Python",
    icon: <FaDatabase size={40} color="#3776AB" />,
    desc: "Core language for data analysis, visualization, and ML.",
  },
  {
    title: "Pandas",
    icon: <FaTable size={40} color="#150458" />,
    desc: "Data manipulation and analysis with ease.",
  },
  {
    title: "NumPy",
    icon: <FaChartBar size={40} color="#013243" />,
    desc: "Efficient numerical computations with arrays.",
  },
  {
    title: "Matplotlib",
    icon: <FaChartBar size={40} color="#ff6600" />,
    desc: "Create static, animated, and interactive visualizations.",
  },
  {
    title: "Seaborn",
    icon: <FaChartBar size={40} color="#66ccff" />,
    desc: "High-level visualization based on matplotlib.",
  },
  {
    title: "Scikit-learn",
    icon: <FaProjectDiagram size={40} color="#f7931e" />,
    desc: "Machine learning for data mining and analysis.",
  },
  {
    title: "Jupyter Notebook",
    icon: <FaFileAlt size={40} color="#f37726" />,
    desc: "Interactive environment for coding and visualization.",
  },
  {
    title: "Git & GitHub",
    icon: <FaComments size={40} color="#000" />,
    desc: "Version control and collaboration for DS projects.",
  },
];

const InternshipDataScience = () => {
  const [userType, setUserType] = useState("individual");

  return (
    <div style={internshipStyles.container}>
      <div style={internshipStyles.overlay}>
        <div style={internshipStyles.contentSection}>
          <h1 style={internshipStyles.heading}>
            Data Science{" "}
            <span style={{ fontWeight: "bold", color: "#003366" }}>
              Internship Program
            </span>
          </h1>
          <p style={{ ...internshipStyles.paragraph, color: "#f0f0f0" }}>
            Dive into the realm of data science with our all-encompassing
            internship program, crafted to establish a solid foundation in this
            ever-evolving field. Gain hands-on experience in analyzing,
            interpreting, and visualizing vast datasets using state-of-the-art
            tools and methodologies.
          </p>
          <ul style={internshipStyles.list}>
            <li style={internshipStyles.listItem}>
              <AiOutlineCheckCircle size={20} /> Work with industry experts on
              real-time projects
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
              {[...Array(5)].map((_, index) => (
                <AiFillStar key={index} size={20} color="yellow" />
              ))}
              <span style={{ marginLeft: "8px" }}>350 Reviews</span>
            </span>
            <span style={internshipStyles.reviewItem}>
              <FaUsers size={20} color="green" style={{ marginRight: "8px" }} />{" "}
              2500 Interns
            </span>
          </div>
        </div>
        {/* Form Section */}
        <div style={internshipStyles.formSection}>
          <div style={internshipStyles.formCard}>
            <div style={internshipStyles.radioContainer}>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="individual"
                  checked={userType === "individual"}
                  onChange={() => setUserType("individual")}
                />{" "}
                Individual
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="corporate"
                  checked={userType === "corporate"}
                  onChange={() => setUserType("corporate")}
                />{" "}
                Corporate
              </label>
            </div>
            <form style={internshipStyles.form}>
              <input
                type="text"
                placeholder="Name *"
                style={internshipStyles.input}
              />
              <div style={internshipStyles.phoneContainer}>
                <input
                  type="text"
                  placeholder="🇮🇳 +91"
                  style={internshipStyles.input2}
                  disabled
                />
                <input
                  type="text"
                  placeholder="Phone *"
                  style={internshipStyles.input}
                />
              </div>
              <input
                type="email"
                placeholder="Email *"
                style={internshipStyles.input}
              />
              <input
                type="text"
                placeholder="Current Location *"
                style={internshipStyles.input}
              />
              <div style={internshipStyles.checkboxContainer}>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  I agree with the <a href="#">terms and conditions</a>
                </label>
              </div>
              <button type="submit" style={internshipStyles.button}>
                ENROLL NOW
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
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
          {techStack.map((tech, index) => (
            <div key={index} style={internshipStyles.techCard}>
              {tech.icon}
              <h3 style={{ color: "#003366", fontWeight: "bold", margin: 0 }}>
                {tech.title}
              </h3>
              <p style={{ marginTop: "10px" }}>{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipDataScience;
