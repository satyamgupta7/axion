"use client";
import { AiOutlineCheckCircle } from "react-icons/ai";
import aboutStyles from "@/styles/aboutStyles";

const AboutSectionOne = () => {
  return (
    <div style={aboutStyles.container}>
      <div style={aboutStyles.overlay}>
        <div style={aboutStyles.contentSection}>
          <h1 style={aboutStyles.heading}>
            Empowering Careers Through Internships, Certifications & Real-World
            Projects
          </h1>
          <p style={aboutStyles.paragraph}>
            At Axion, we aim to bridge the gap between academic knowledge and
            real-world industry experience by providing internships,
            certifications, and industry-focused projects that help individuals
            enhance their skills and career prospects.
          </p>
          <ul style={aboutStyles.list}>
            <li style={aboutStyles.listItem}>
              <AiOutlineCheckCircle size={20} /> Work with industry experts on
              Internship Opportunities with Leading Companies
            </li>
            <li style={aboutStyles.listItem}>
              <AiOutlineCheckCircle size={20} /> Industry-Recognized
              Certifications
            </li>
            <li style={aboutStyles.listItem}>
              <AiOutlineCheckCircle size={20} /> Work on Live Projects
            </li>
          </ul>
        </div>
        {/* Second Content Section - Vision, Mission, Core Values */}
        <div style={aboutStyles.cardContainer}>
          <div style={aboutStyles.card}>
            <h2 style={aboutStyles.cardTitle}>Our Vision</h2>
            <p style={aboutStyles.cardText}>
              We aspire to transform the way individuals prepare for and embark
              on their careers. Our goal is to become the leading platform that
              bridges the gap between education and the workforce, empowering
              individuals with hands-on experience, relevant skills, and
              innovative strategies to succeed in their professional journey.
            </p>
          </div>

          <div style={aboutStyles.card}>
            <h2 style={aboutStyles.cardTitle}>Our Mission</h2>
            <p style={aboutStyles.cardText}>
              Our mission is to connect talented individuals with their ideal
              careers. We equip you with the essential tools, knowledge, and
              real-world experience needed to thrive in today&apos fast-moving
              job market, ensuring you are well-prepared for the challenges
              ahead.
            </p>
          </div>

          <div style={aboutStyles.card}>
            <h2 style={aboutStyles.cardTitle}>Our Core Values</h2>
            <p style={aboutStyles.cardText}>
              The principles we uphold guide every action we take. Our values
              reflect a commitment to providing individuals with the expertise,
              strategies, and real-world experience necessary to excel in
              today’s competitive job market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionOne;
