"use client";
import { useState, CSSProperties } from "react";

const internshipStyles: Record<string, CSSProperties> = {
  formCard: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "10px",
    padding: "30px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  radioContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  input2: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "80px",
    textAlign: "center",
    backgroundColor: "#f0f0f0",
  },
  phoneContainer: {
    display: "flex",
    gap: "10px",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#003366",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

const EnrollmentForm = () => {
  const [userType, setUserType] = useState("individual");

  return (
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
  );
};

export default EnrollmentForm;
