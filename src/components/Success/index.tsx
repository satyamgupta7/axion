"use client";
import { FaUserTie, FaUsers, FaGraduationCap } from "react-icons/fa";
import placementStyles from "@/styles/placementStyles";
import Brands from "../Brands";
import Testimonials from "../Testimonials";
import HiringPartner from "../HiringPartners";

const Success = () => {
  return (
    <div style={placementStyles.container}>
      <div style={placementStyles.overlay}>
        <div style={placementStyles.contentSection}>
          <h1 style={placementStyles.heading}>
            Inspiring <span style={placementStyles.highlight}>Success </span>{" "}
            Stories
          </h1>

          <p style={placementStyles.paragraph}>
            Hear inspiring stories of growth and success from those who have
            experienced our programs firsthand.
          </p>
          <ul style={placementStyles.list}></ul>

          <div style={placementStyles.statsContainer}>
            <div style={placementStyles.statCard}>
              <FaUserTie size={32} />
              <h3 style={placementStyles.statNumber}>200+</h3>
              <p style={placementStyles.statLabel}>Expert Mentors</p>
            </div>
            <div style={placementStyles.statCard}>
              <FaUsers size={32} />
              <h3 style={placementStyles.statNumber}>10k+</h3>
              <p style={placementStyles.statLabel}>Active Students</p>
            </div>
            <div style={placementStyles.statCard}>
              <FaGraduationCap size={32} />
              <h3 style={placementStyles.statNumber}>3k+</h3>
              <p style={placementStyles.statLabel}>Placed Students</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", marginTop: "2rem" }}>
        <Testimonials />
      </div>
      <div style={{ width: "100%", marginTop: "2rem" }}>
        <HiringPartner />
      </div>
    </div>
  );
};

export default Success;
