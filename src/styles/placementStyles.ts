import { CSSProperties } from "react";

const placementStyles: Record<string, CSSProperties> = {
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
    // backgroundColor: "#004080",
    backgroundColor: "#9ca3af", // gray-400
    color: "#ffffff",
    justifyContent: "space-between",
  },
  contentSection: {
    flex: "1 1 50%",
    textAlign: "left",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#ffffff",
  },
  highlight: {
    color: "#001f4d", // Dark blue color
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: "1.1rem",
    color: "white",
    lineHeight: "1.6",
    marginBottom: "0.5rem",
  },
  list: {
    listStyle: "none",
    paddingTop: "1.5rem",
  },
  statsContainer: {
    display: "flex",
    gap: "2rem",
    marginTop: "2rem",
    flexWrap: "wrap",
  },
  statCard: {
    backgroundColor: "#ffffff",
    color: "#004080",
    padding: "1.5rem",
    borderRadius: "12px",
    textAlign: "center",
    minWidth: "150px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    flex: "1 1 150px",
  },
  statNumber: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "0.5rem",
  },
  statLabel: {
    fontSize: "1rem",
    marginTop: "0.25rem",
  },
};

export default placementStyles;
