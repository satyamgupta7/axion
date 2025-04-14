// components/contactStyles.ts

import { CSSProperties } from "react";

export type ContactStyles = Record<string, CSSProperties>;

export const contactStyles: ContactStyles = {
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
