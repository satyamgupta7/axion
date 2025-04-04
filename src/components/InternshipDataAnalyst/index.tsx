"use client"; // Mark this as a client component

import { useState } from "react";
import { AiFillStar, AiOutlineCheckCircle } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import internshipStyles from "@/styles/internshipStyles";
import {
  FaDatabase,
  FaTable,
  FaChartBar,
  FaProjectDiagram,
  FaTasks,
  FaComments,
} from "react-icons/fa";

const techStack = [
  {
    title: "SQL",
    icon: <FaDatabase size={40} color="#336791" />,
    desc: "Query and manage relational databases efficiently.",
  },
  {
    title: "Excel",
    icon: <FaTable size={40} color="#217346" />,
    desc: "Manipulate, analyze and visualize structured data.",
  },
  {
    title: "Power BI",
    icon: <FaChartBar size={40} color="#F2C811" />,
    desc: "Create interactive reports and dashboards.",
  },
  {
    title: "Python",
    icon: <FaProjectDiagram size={40} color="#3776AB" />,
    desc: "Automate tasks and perform data analysis using libraries like pandas and matplotlib.",
  },
  {
    title: "Statistics",
    icon: <FaChartBar size={40} color="#17A2B8" />,
    desc: "Apply statistical methods to interpret and validate data.",
  },
  {
    title: "Data Cleaning",
    icon: <FaTasks size={40} color="#FF5733" />,
    desc: "Prepare datasets by handling missing values and inconsistencies.",
  },
  {
    title: "Google Sheets",
    icon: <FaTable size={40} color="#0F9D58" />,
    desc: "Collaborate and analyze data in real time with cloud spreadsheets.",
  },
  {
    title: "Communication",
    icon: <FaComments size={40} color="#0078D7" />,
    desc: "Present insights and findings to stakeholders effectively.",
  },
];

const InternshipDataAnalyst = () => {
  const [userType, setUserType] = useState("individual");

  return (
    <div style={internshipStyles.container}>
      <div style={internshipStyles.overlay}>
        <div style={internshipStyles.contentSection}>
          <h1 style={internshipStyles.heading}>
            Data Analyst{" "}
            <span style={{ fontWeight: "bold", color: "#003366" }}>
              Internship Program
            </span>
          </h1>
          <p style={{ ...internshipStyles.paragraph, color: "#f0f0f0" }}>
            Kickstart your career as a Data Analyst with our hands-on internship
            program. Learn to collect, clean, and analyze data to uncover
            valuable insights that drive business decisions. Gain practical
            experience with industry-leading tools like SQL, Excel, Python, and
            Power BI. Develop expertise in data visualization, reporting, and
            statistical analysis while working on real-world projects. Build the
            skills needed to thrive in the data-driven industry and make an
            impact with data-backed strategies.
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

export default InternshipDataAnalyst;
