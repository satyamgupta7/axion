"use client"; // Mark this as a client component

import { useState } from "react";
import { AiFillStar, AiOutlineCheckCircle } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import internshipStyles from "@/styles/internshipStyles";

const InternshipBusinessAnalyst = () => {
  const [userType, setUserType] = useState("individual");

  return (
    <div style={internshipStyles.container}>
      <div style={internshipStyles.overlay}>
        <div style={internshipStyles.contentSection}>
          <h1 style={internshipStyles.heading}>
            Business Analyst Internship Program
          </h1>
          <p style={internshipStyles.paragraph}>
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
    </div>
  );
};

export default InternshipBusinessAnalyst;
