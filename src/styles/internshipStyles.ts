import { CSSProperties } from "react";

const internshipStyles: Record<string, CSSProperties> = {
  container: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15vh 1vw",
    flexDirection: "column" as const, // Fixed flexDirection typing
    backgroundColor: "white",
  },
  overlay: {
    display: "flex",
    flexWrap: "wrap",
    width: "95%",
    maxWidth: "1400px",
    borderRadius: "12px",
    padding: "5%",
    // backgroundColor: "#004080", // Fixed `background`
    backgroundColor: "#9ca3af",
    color: "#ffffff",
    justifyContent: "space-between",
  },
  contentSection: {
    flex: "1 1 50%" as const, // Ensuring proper typing
    textAlign: "left",
  },
  formSection: {
    flex: "1 1 50%" as const, // Ensure correct flex typing
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f5f5f5", // Fixed `background`
    padding: "3%",
    borderRadius: "12px",
  },
  formCard: {
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    color: "black",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#ffffff",
  },
  paragraph: {
    fontSize: "1.1rem",
    color: "#d1d1d1",
    lineHeight: "1.6",
    marginBottom: "1rem",
  },
  list: {
    listStyle: "none",
    paddingTop: "1.5rem",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.5rem",
  },
  reviewInternContainer: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "3rem",
    marginTop: "1rem",
  },
  reviewItem: {
    display: "flex",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    marginBottom: "1rem",
    border: "1px solid #cccccc",
    borderRadius: "6px",
    fontSize: "1rem",
  },
  input2: {
    width: "25%",
    padding: "0.75rem",
    marginBottom: "1rem",
    border: "1px solid #cccccc",
    borderRadius: "6px",
    fontSize: "1rem",
  },
  radioContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  phoneContainer: {
    display: "flex",
    alignItems: "center",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#0056b3", // Fixed `background`
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: "bold",
    transition: "background-color 0.3s", // Fixed `transition`
  },
  techCardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  techCard: {
    width: "180px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};

export default internshipStyles;
