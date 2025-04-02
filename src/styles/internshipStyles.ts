const internshipStyles = {
  container: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15vh 1vw",
    flexDirection: "column",
    backgroundColor: "white",
  },
  overlay: {
    display: "flex",
    flexWrap: "wrap",
    width: "95%", // Increased width
    maxWidth: "1400px", // Wider max-width
    borderRadius: "12px",
    padding: "5%",
    background: "#004080",
    color: "#ffffff",
    justifyContent: "space-between",
  },
  contentSection: {
    flex: "1 1 50%", // Left side occupies 50%
    textAlign: "left", // Align content left
  },
  formSection: {
    flex: "1 1 50%", // Right side (form) occupies 50%
    display: "flex",
    justifyContent: "center",
    background: "#f5f5f5",
    padding: "3%",
    borderRadius: "12px",
  },
  formCard: {
    width: "100%",
    maxWidth: "500px",
    background: "#ffffff",
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
    background: "#0056b3",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: "bold",
    transition: "background 0.3s",
  },
};

export default internshipStyles;
