"use client"; // Mark this as a client component

import { useState } from "react";
import {
  AiFillStar,
  AiOutlineCheckCircle,
  AiOutlineStar,
} from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import internshipStyles from "@/styles/internshipStyles";

const Placement = () => {
  const [userType, setUserType] = useState("individual");

  return (
    <div style={internshipStyles.container}>
      <div style={internshipStyles.overlay}>
        <div style={internshipStyles.contentSection}>
          <h1 style={internshipStyles.heading}>Placement</h1>
          <p style={internshipStyles.paragraph}>
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
    </div>
  );
};

export default Placement;
