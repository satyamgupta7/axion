"use client"; // Mark this as a client component

import { useState } from "react";
import { AiFillStar, AiOutlineCheckCircle } from "react-icons/ai";
import internshipStyles from "@/styles/internshipStyles";
import {
  FaUsers,
  FaDatabase,
  FaTable,
  FaChartBar,
  FaTasks,
  FaFileAlt,
  FaProjectDiagram,
  FaSitemap,
  FaComments,
} from "react-icons/fa";

const techStack = [
  {
    title: "SQL",
    icon: <FaDatabase size={40} color="#336791" />,
    desc: "Query and manage relational databases.",
  },
  {
    title: "Excel",
    icon: <FaTable size={40} color="#217346" />,
    desc: "Perform data analysis and reporting.",
  },
  {
    title: "Power BI",
    icon: <FaChartBar size={40} color="#F2C811" />,
    desc: "Visualize data and gain insights.",
  },
  {
    title: "JIRA",
    icon: <FaTasks size={40} color="#0052CC" />,
    desc: "Track requirements and user stories.",
  },
  {
    title: "Confluence",
    icon: <FaFileAlt size={40} color="#172B4D" />,
    desc: "Collaborate on documentation and analysis.",
  },
  {
    title: "Agile Methodology",
    icon: <FaProjectDiagram size={40} color="#28a745" />,
    desc: "Deliver solutions iteratively and quickly.",
  },
  {
    title: "Business Process Modeling",
    icon: <FaSitemap size={40} color="#6f42c1" />,
    desc: "Understand and improve workflows.",
  },
  {
    title: "Communication Tools",
    icon: <FaComments size={40} color="#0078D7" />,
    desc: "Collaborate with stakeholders effectively.",
  },
];

const InternshipBusinessAnalyst = () => {
  const [userType, setUserType] = useState("individual");

  return (
    <div style={internshipStyles.container}>
      <div style={internshipStyles.overlay}>
        <div style={internshipStyles.contentSection}>
          <h1 style={internshipStyles.heading}>
            Business Analyst{" "}
            <span style={{ fontWeight: "bold", color: "#003366" }}>
              Internship Program
            </span>
          </h1>
          <p style={{ ...internshipStyles.paragraph, color: "#f0f0f0" }}>
            Kickstart your career as a Business Analyst with our hands-on
            internship program. Learn how to bridge the gap between business
            needs and technology by mastering data analysis, requirement
            gathering, and process optimization. Gain real-world experience in
            creating data-driven insights, crafting reports, and collaborating
            with stakeholders to drive strategic decisions. Develop expertise in
            industry-standard tools like SQL, Excel, Power BI, and JIRA. Enhance
            your problem-solving skills and become a key player in business
            growth and transformation.
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

export default InternshipBusinessAnalyst;
