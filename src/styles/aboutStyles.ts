const aboutStyles = {
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
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
    marginTop: "4rem",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    width: "30%",
    minWidth: "280px",
    marginBottom: "2rem",
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "1rem",
    color: "#004080",
  },
  cardText: {
    fontSize: "1rem",
    color: "#6b6b6b",
  },
};

export default aboutStyles;
