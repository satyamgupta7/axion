"use client";
import { useState } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import contactStyles from "@/styles/contactStyles";

const Contact = () => {
  return (
    <div style={contactStyles.container}>
      <div style={contactStyles.overlay}>
        <div style={contactStyles.contentSection}>
          <h1 style={contactStyles.heading}>Contact Us</h1>
          <p style={contactStyles.paragraph}>
            Feel free to share your questions, feedback, or inquiries. We are
            available around the clock to assist you.
          </p>
          <ul style={contactStyles.list}>
            <li style={contactStyles.listItem}>
              <AiOutlinePhone size={30} style={contactStyles.icon} />{" "}
              <div>
                <strong>Call Us:</strong>
                <br />
                +91 8358952017
              </div>
            </li>
            <li style={contactStyles.listItem}>
              <AiOutlineMail size={30} style={contactStyles.icon} />{" "}
              <div>
                <strong>Email Us:</strong>
                <br />
                axion.intern@gmail.com
              </div>
            </li>
            <li style={contactStyles.listItem}>
              <FaMapMarkerAlt size={30} style={contactStyles.icon} />{" "}
              <div>
                <strong>Visit Us:</strong>
                <br />
                1st Floor, AXA Building, opposite to Nexus Mall, Tavarekere,
                Koramangala, Bengaluru, Karnataka 560029
              </div>
            </li>
          </ul>
        </div>
        {/* Form Section */}
        <div style={contactStyles.formSection}>
          <div style={contactStyles.formCard}>
            <div style={contactStyles.formHeader}>
              {/* <label>Get in touch with us!</label> */}
              <label style={contactStyles.formLabel}>
                Get in touch with us!
              </label>
            </div>
            <form style={contactStyles.form}>
              <input
                type="text"
                placeholder="Name *"
                style={contactStyles.input}
              />
              <div style={contactStyles.phoneContainer}>
                <input
                  type="text"
                  placeholder="🇮🇳 +91"
                  style={contactStyles.input2}
                  disabled
                />
                <input
                  type="text"
                  placeholder="Phone *"
                  style={contactStyles.input}
                />
              </div>
              <input
                type="email"
                placeholder="Email *"
                style={contactStyles.input}
              />
              <input
                type="text"
                placeholder="Subject *"
                style={contactStyles.input}
              />
              <input
                type="text"
                placeholder="Message *"
                style={contactStyles.textarea}
              />

              <button type="submit" style={contactStyles.button}>
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
