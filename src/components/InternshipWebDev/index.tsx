"use client"; // Mark this as a client component
import { useState } from "react";
import { AiFillStar, AiOutlineCheckCircle } from "react-icons/ai";
import {
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaUsers,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si"; // ✅ Correct MongoDB icon
import internshipStyles from "@/styles/internshipStyles";

const techStack = [
  {
    title: "HTML",
    icon: <FaHtml5 size={40} color="#e34c26" />,
    desc: "Structure your web content.",
  },
  {
    title: "CSS",
    icon: <FaCss3Alt size={40} color="#264de4" />,
    desc: "Style and design your websites.",
  },
  {
    title: "JavaScript",
    icon: <FaJsSquare size={40} color="#f7df1e" />,
    desc: "Add interactivity and logic.",
  },
  {
    title: "React",
    icon: <FaReact size={40} color="#61DBFB" />,
    desc: "Build fast and modular UI.",
  },
  {
    title: "JSON",
    icon: <FaCode size={40} color="#888" />,
    desc: "Handle structured data formats.",
  },
  {
    title: "SQL",
    icon: <FaDatabase size={40} color="#336791" />,
    desc: "Manage relational databases.",
  },
  {
    title: "Bootstrap",
    icon: <FaBootstrap size={40} color="#7952B3" />,
    desc: "Responsive design with ease.",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb size={40} color="#47A248" />,
    desc: "Work with NoSQL databases.",
  },
];

const IntershipWebDev = () => {
  const [userType, setUserType] = useState("individual");

  return (
    <div style={internshipStyles.container}>
      <div style={internshipStyles.overlay}>
        {/* Content Section */}
        <div style={internshipStyles.contentSection}>
          <h1 style={internshipStyles.heading}>
            Web Development{" "}
            <span style={{ fontWeight: "bold", color: "#003366" }}>
              Internship Program
            </span>
          </h1>
          <p style={{ ...internshipStyles.paragraph, color: "#f0f0f0" }}>
            Kickstart your career in web development with our hands-on
            internship program. Learn to build responsive, dynamic websites and
            web applications using the latest technologies. Gain practical
            experience in front-end and back-end development with tools like
            <span
              style={{
                color: "#003366",
                fontWeight: "500",
                padding: "5px",
              }}
            >
              HTML, CSS, JavaScript, React, and Node.js
            </span>
            . Master coding, debugging, and deployment while working on
            real-world projects.
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
              <FaUsers size={20} color="green" style={{ marginRight: "8px" }} />
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

export default IntershipWebDev;
