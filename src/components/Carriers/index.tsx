"use client";
import { useState, useEffect, FocusEventHandler } from "react";
import { motion } from "framer-motion";
import { contactStyles } from "./contactStyles";
import toast from "react-hot-toast";

const internshipRoles = [
  "Full Stack Developer Intern",
  "Data Science Intern",
  "Data Analyst Intern",
  "Business Analyst Intern",
  "Networking Intern",
  "Cyber Security Intern",
];

interface FormData {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  interestedRole: string;
  message: string;
}

const Carriers = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [whatsappFocus, setWhatsappFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);
  const [overlayHovered, setOverlayHovered] = useState(false);
  const [selectFocus, setSelectFocus] = useState(false);
  const [submissionLoading, setSubmissionLoading] = useState(false);

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

  // useEffect(() => {
  //   toast.success("Internship application form loaded!");
  // }, []);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    interestedRole: "",
    message: "",
  });

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbx8upVfxPvv6EWjPVgGr5FqEbADTmEyxW9XlilyOjMUnfHUs6Ob1Y587LqiIglpRZzZ/exec";

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionLoading(true);
    toast.loading("Submitting your application...", { id: "submit-loading" });

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("phone", formData.phone);
    formPayload.append("whatsapp", formData.whatsapp);
    formPayload.append("email", formData.email);
    formPayload.append("interestedRole", formData.interestedRole);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) {
        const text = await response.text();
        toast.error("Submission failed. Please try again.", {
          id: "submit-loading",
        });
        return;
      }

      const result = await response.json();
      toast.success("Application submitted successfully!", {
        id: "submit-loading",
      });
      setFormData({
        name: "",
        phone: "",
        whatsapp: "",
        email: "",
        interestedRole: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        "Error submitting application. Please check your connection.",
        { id: "submit-loading" },
      );
    } finally {
      setSubmissionLoading(false);
    }
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
            <form style={contactStyles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name *"
                style={{
                  ...contactStyles.input,
                  ...(nameFocus && contactStyles.inputFocus),
                }}
                onFocus={handleInputFocus(setNameFocus)}
                onBlur={handleInputBlur(setNameFocus)}
                onChange={handleInputChange}
                value={formData.name}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                style={{
                  ...contactStyles.input,
                  ...(phoneFocus && contactStyles.inputFocus),
                }}
                onFocus={handleInputFocus(setPhoneFocus)}
                onBlur={handleInputBlur(setPhoneFocus)}
                onChange={handleInputChange}
                value={formData.phone}
                required
              />
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp No *"
                style={{
                  ...contactStyles.input,
                  ...(whatsappFocus && contactStyles.inputFocus),
                }}
                onFocus={handleInputFocus(setWhatsappFocus)}
                onBlur={handleInputBlur(setWhatsappFocus)}
                onChange={handleInputChange}
                value={formData.whatsapp}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                style={{
                  ...contactStyles.input,
                  ...(emailFocus && contactStyles.inputFocus),
                }}
                onFocus={handleInputFocus(setEmailFocus)}
                onBlur={handleInputBlur(setEmailFocus)}
                onChange={handleInputChange}
                value={formData.email}
                required
              />
              <div className="mb-2">
                <select
                  id="interestedRole"
                  name="interestedRole"
                  required
                  className="w-full rounded-md border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    ...contactStyles.select,
                    ...(selectFocus && contactStyles.selectFocus),
                  }}
                  onFocus={handleInputFocus(setSelectFocus)}
                  onBlur={handleInputBlur(setSelectFocus)}
                  onChange={handleInputChange}
                  value={formData.interestedRole}
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
                name="message"
                placeholder="Your Message"
                style={{
                  ...contactStyles.textarea,
                  ...(messageFocus && contactStyles.textareaFocus),
                }}
                onFocus={handleInputFocus(setMessageFocus)}
                onBlur={handleInputBlur(setMessageFocus)}
                onChange={handleInputChange}
                value={formData.message}
              />
              <motion.button
                type="submit"
                style={contactStyles.button}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                disabled={submissionLoading}
              >
                {submissionLoading ? "Submitting..." : "SUBMIT"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Carriers;
