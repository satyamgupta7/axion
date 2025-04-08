"use client";
import { CSSProperties, useState, useEffect } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const contactStyles: Record<string, CSSProperties> = {
  container: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15vh 1vw", // Increased top padding
    flexDirection: "column",
    backgroundColor: "#f8f9fa",
    transition: "background-color 0.5s ease-in-out",
  },
  overlay: {
    display: "flex",
    flexWrap: "wrap",
    width: "95%", // Increased width
    maxWidth: "1400px", // Increased max width
    borderRadius: "12px",
    justifyContent: "space-between",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/hero/Contact1.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "70vh",
    padding: "40px",
    position: "relative",
    zIndex: 1,
    color: "#fff",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out",
  },
  overlayHover: {
    transform: "scale(1.02)",
  },
  contentSection: {
    flex: "1 1 40%",
    textAlign: "left",
    paddingRight: "30px", // Increased right padding
  },
  formSection: {
    flex: "1 1 55%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "40px", // Increased padding
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
    opacity: 0,
    transform: "translateY(20px)",
  },
  formCard: {
    width: "100%",
    maxWidth: "500px", // Increased max width of the form card
    backgroundColor: "transparent",
    padding: "2.5rem", // Increased padding inside the form card
    borderRadius: "12px",
    color: "#333",
  },
  heading: {
    fontSize: "3rem", // Slightly larger heading
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: "#ff6b6b",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  },
  paragraph: {
    fontSize: "1.2rem", // Slightly larger paragraph
    color: "#eee",
    lineHeight: "1.8",
    marginBottom: "2rem",
  },
  list: {
    listStyle: "none",
    paddingTop: "2.5rem",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "1.2rem",
    marginBottom: "2.5rem",
  },
  input: {
    width: "100%",
    padding: "1.1rem",
    marginBottom: "1.4rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "1.1rem",
    transition: "border-color 0.3s ease-in-out",
  },
  inputFocus: {
    borderColor: "#ff6b6b",
  },
  textarea: {
    width: "100%",
    height: "140px", // Slightly taller textarea
    padding: "1.1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1.1rem",
    resize: "vertical",
    marginBottom: "1.7rem",
    transition: "border-color 0.3s ease-in-out",
  },
  textareaFocus: {
    borderColor: "#ff6b6b",
  },
  formLabel: {
    fontWeight: "bold",
    fontSize: "1.6rem",
    color: "#333",
    textAlign: "center",
    display: "block",
    marginBottom: "1.4rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    width: "100%",
    padding: "1.1rem",
    backgroundColor: "#ff6b6b",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.3rem",
    fontWeight: "bold",
    transition: "background-color 0.3s ease-in-out, transform 0.2s ease-in-out",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  buttonHover: {
    backgroundColor: "#e05252",
    transform: "scale(1.05)",
  },
  icon: {
    marginRight: "18px", // Increased icon margin
    verticalAlign: "middle",
    color: "#eee",
  },
  iconInfo: {
    color: "#ff6b6b",
  },
};

const Contact = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [subjectFocus, setSubjectFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);
  const [overlayHovered, setOverlayHovered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFormVisible(true);
    }, 500);
  }, []);

  const formVariants = {
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, translateX: -30 },
    visible: { opacity: 1, translateX: 0 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, translateY: 10 },
    visible: { opacity: 1, translateY: 0 },
  };

  return (
    <motion.div
      style={contactStyles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={{
          ...contactStyles.overlay,
          ...(overlayHovered && contactStyles.overlayHover),
        }}
        onMouseEnter={() => setOverlayHovered(true)}
        onMouseLeave={() => setOverlayHovered(false)}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.div
          style={contactStyles.contentSection}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            style={contactStyles.heading}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            style={contactStyles.paragraph}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            We are here to help! Reach out with any questions, feedback, or
            inquiries. Our team is available to assist you.
          </motion.p>
          <motion.ul style={contactStyles.list}>
            <motion.li
              style={contactStyles.listItem}
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <AiOutlinePhone size={30} style={contactStyles.iconInfo} />
              <div>
                <strong>Call Us:</strong>
                <br />
                +91 8358952017
              </div>
            </motion.li>
            <motion.li
              style={contactStyles.listItem}
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <AiOutlineMail size={30} style={contactStyles.iconInfo} />
              <div>
                <strong>Email Us:</strong>
                <br />
                Axion.intern@gmail.com
              </div>
            </motion.li>
            <motion.li
              style={contactStyles.listItem}
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <FaMapMarkerAlt size={30} style={contactStyles.iconInfo} />
              <div>
                <strong>Visit Us:</strong>
                <br />
                1st Floor, AXA Building, opposite to Nexus Mall, Tavarekere,
                Koramangala, Bengaluru, Karnataka 560029
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          style={contactStyles.formSection}
          variants={formVariants}
          initial="hidden"
          animate={isFormVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div style={contactStyles.formCard}>
            <label style={contactStyles.formLabel}>Get in touch!</label>
            <form style={contactStyles.form}>
              <input
                type="text"
                placeholder="Name *"
                style={{
                  ...contactStyles.input,
                  ...(nameFocus && contactStyles.inputFocus),
                }}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
              />
              <input
                type="text"
                placeholder="Phone *"
                style={{
                  ...contactStyles.input,
                  ...(phoneFocus && contactStyles.inputFocus),
                }}
                onFocus={() => setPhoneFocus(true)}
                onBlur={() => setPhoneFocus(false)}
              />
              <input
                type="email"
                placeholder="Email *"
                style={{
                  ...contactStyles.input,
                  ...(emailFocus && contactStyles.inputFocus),
                }}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <input
                type="text"
                placeholder="Subject *"
                style={{
                  ...contactStyles.input,
                  ...(subjectFocus && contactStyles.inputFocus),
                }}
                onFocus={() => setSubjectFocus(true)}
                onBlur={() => setSubjectFocus(false)}
              />
              <textarea
                placeholder="Message *"
                style={{
                  ...contactStyles.textarea,
                  ...(messageFocus && contactStyles.textareaFocus),
                }}
                onFocus={() => setMessageFocus(true)}
                onBlur={() => setMessageFocus(false)}
              />
              <motion.button
                type="submit"
                style={contactStyles.button}
                whileHover={{ scale: 1.05, backgroundColor: "#e05252" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
