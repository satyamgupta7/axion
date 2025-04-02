const contactStyles = {
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
    width: "95%",
    maxWidth: "1400px",
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
    flex: "1 1 45%", // Adjust the width of the form section to be a bit smaller
    display: "flex",
    justifyContent: "center",
    background: "#f5f5f5",
    padding: "3%",
    borderRadius: "12px",
  },
  formCard: {
    width: "100%",
    maxWidth: "400px", // Reduced the max width of the form card
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
    marginBottom: "1.5rem",
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
  textarea: {
    width: "100%",
    height: "100px", // Adjust height for a better user experience
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    resize: "vertical", // Allows users to resize the message box
    marginBottom: "1rem",
  },
  formLabel: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#ff5733", // Use a vibrant color like orange-red
    textAlign: "center",
    display: "block",
    marginBottom: "10px",
  },
  formHeader: {
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
  icon: {
    marginRight: "10px",
    verticalAlign: "middle",
  },
};

export default contactStyles;
