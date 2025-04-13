"use client";
import { CSSProperties, useState, useEffect, FocusEventHandler } from "react";
import { motion } from "framer-motion";

type ContactStyles = Record<string, CSSProperties>;

const contactStyles: ContactStyles = {
  container: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15vh 1vw",
    flexDirection: "column",
    backgroundColor: "#f8f9fa",
    transition: "background-color 0.5s ease-in-out",
  },
  overlay: {
    display: "flex",
    flexWrap: "wrap",
    width: "95%",
    maxWidth: "1400px",
    borderRadius: "12px",
    justifyContent: "space-between",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/banner/Carrier.webp')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "55vh",
    padding: "25px",
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
    paddingRight: "15px",
  },
  formSection: {
    flex: "1 1 40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
    opacity: 0,
    transform: "translateY(20px)",
  },
  formCard: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "transparent",
    padding: "1.5rem",
    borderRadius: "12px",
    color: "#333",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.8rem",
    color: "#ff6b6b",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  },
  paragraph: {
    fontSize: "0.9rem",
    color: "#eee",
    lineHeight: "1.4",
    marginBottom: "1.2rem",
  },
  list: {
    listStyle: "none",
    paddingTop: "1.5rem",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    marginBottom: "1.5rem",
  },
  input: {
    width: "100%",
    padding: "0.6rem",
    marginBottom: "0.8rem",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#ddd",
    borderRadius: "8px",
    fontSize: "0.8rem",
    transition: "border-color 0.3s ease-in-out",
  },
  inputFocus: {
    borderColor: "#ff6b6b",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "0.6rem",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#ccc",
    borderRadius: "8px",
    fontSize: "0.8rem",
    resize: "vertical",
    marginBottom: "1rem",
    transition: "border-color 0.3s ease-in-out",
  },
  textareaFocus: {
    borderColor: "#ff6b6b",
  },
  formLabel: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "#333",
    textAlign: "center",
    display: "block",
    marginBottom: "0.8rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    width: "100%",
    padding: "0.6rem",
    backgroundColor: "#ff6b6b",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "background-color 0.3s ease-in-out, transform 0.2s ease-in-out",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  buttonHover: {
    backgroundColor: "#e05252",
    transform: "scale(1.05)",
  },
  icon: {
    marginRight: "10px",
    verticalAlign: "middle",
    color: "#eee",
  },
  iconInfo: {
    color: "#ff6b6b",
  },
  select: {
    width: "100%",
    padding: "0.6rem",
    marginBottom: "0.8rem",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#ddd",
    borderRadius: "8px",
    fontSize: "0.8rem",
    transition: "border-color 0.3s ease-in-out",
    backgroundColor: "#fff",
  },
  selectFocus: {
    borderColor: "#ff6b6b",
  },
  selectLabel: {
    fontWeight: "bold",
    fontSize: "0.8rem",
    color: "#333",
    display: "block",
    marginBottom: "0.4rem",
    textAlign: "left",
  },
};

const internshipRoles = [
  "Full Stack Developer Intern",
  "Data Science Intern",
  "Data Analyst Intern",
  "Business Analyst Intern",
  "Networking Intern",
  "Cyber Security Intern",
];

const Carriers = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);
  const [overlayHovered, setOverlayHovered] = useState(false);
  const [selectFocus, setSelectFocus] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormVisible(true);
    }, 500);

    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, []);

  // Define focus event handlers to reduce repetition
  const handleInputFocus: (
    setState: (value: boolean) => void,
  ) => FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (setState) => () => {
    setState(true);
  };

  const handleInputBlur: (
    setState: (value: boolean) => void,
  ) => FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (setState) => () => {
    setState(false);
  };

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
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <h2 style={contactStyles.heading}>
            💼 Internship Opportunities <br /> Apply Now!
          </h2>
          <p style={contactStyles.paragraph}>
            We are hiring interns across multiple domains. Work on real-world
            projects, boost your skills, and grow your career. Check out the
            open roles below!
          </p>
          <ul
            style={{ ...contactStyles.list, padding: 0, marginTop: "0.5rem" }}
          >
            {internshipRoles.map((role, index) => (
              <motion.li
                key={index}
                style={{
                  ...contactStyles.listItem,
                  marginBottom: "0.4rem",
                  paddingTop: "0.2rem",
                  paddingBottom: "0.2rem",
                }}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 * index }}
              >
                <span style={contactStyles.iconInfo}>🔥</span> {role}
              </motion.li>
            ))}
          </ul>
          <p
            style={{
              ...contactStyles.paragraph,
              marginTop: "1rem",
              fontWeight: "bold",
            }}
          >
            Fill out the form to submit your details. Shortlisted candidates
            will be contacted via email.
          </p>
        </motion.div>

        <motion.div
          style={contactStyles.formSection}
          variants={formVariants}
          initial="hidden"
          animate={isFormVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div style={contactStyles.formCard}>
            <label style={contactStyles.formLabel}>Apply Now!</label>
            <form style={contactStyles.form}>
              <input
                type="text"
                placeholder="Name *"
                style={{
                  ...contactStyles.input,
                  ...(nameFocus && contactStyles.inputFocus),
                }}
                onFocus={handleInputFocus(setNameFocus)}
                onBlur={handleInputBlur(setNameFocus)}
              />
              <input
                type="text"
                placeholder="Phone *"
                style={{
                  ...contactStyles.input,
                  ...(phoneFocus && contactStyles.inputFocus),
                }}
                onFocus={handleInputFocus(setPhoneFocus)}
                onBlur={handleInputBlur(setPhoneFocus)}
              />
              <input
                type="text"
                placeholder="WhatsApp No*"
                style={{
                  ...contactStyles.input,
                  ...(phoneFocus && contactStyles.inputFocus),
                }}
                onFocus={handleInputFocus(setPhoneFocus)}
                onBlur={handleInputBlur(setPhoneFocus)}
              />
              <input
                type="email"
                placeholder="Email *"
                style={{
                  ...contactStyles.input,
                  ...(emailFocus && contactStyles.inputFocus),
                }}
                onFocus={handleInputFocus(setEmailFocus)}
                onBlur={handleInputBlur(setEmailFocus)}
              />
              <div className="mb-2">
                <select
                  id="interestedRole"
                  required
                  className="w-full rounded-md border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    ...contactStyles.select,
                    ...(selectFocus && contactStyles.selectFocus),
                  }}
                  onFocus={handleInputFocus(setSelectFocus)}
                  onBlur={handleInputBlur(setSelectFocus)}
                >
                  <option value="">Choose your Internship Role *</option>
                  {internshipRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                placeholder="Your Message"
                style={{
                  ...contactStyles.textarea,
                  ...(messageFocus && contactStyles.textareaFocus),
                }}
                onFocus={handleInputFocus(setMessageFocus)}
                onBlur={handleInputBlur(setMessageFocus)}
              />
              <motion.button
                type="submit"
                style={contactStyles.button}
                // whileHover={contactStyles.buttonHover}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                SUBMIT
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Carriers;
