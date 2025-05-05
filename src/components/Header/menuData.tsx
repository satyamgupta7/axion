import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "All Program",
    newTab: false,
    submenu: [
      {
        id: 12,
        title: "Full Stack Development Internship",
        path: "/web-development",
        newTab: false,
      },
      {
        id: 11,
        title: "Data Science Internship",
        path: "/data-science",
        newTab: false,
      },
      {
        id: 13,
        title: "Data Analyst Internship",
        path: "/data-analyst",
        newTab: false,
      },
      {
        id: 14,
        title: "Business Analyst Internship",
        path: "/business-analyst",
        newTab: false,
      },
      {
        id: 15,
        title: "Networking Internship",
        path: "/networking",
        newTab: false,
      },
      {
        id: 16,
        title: "Cyber Security Internship",
        path: "/cyber-security",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "Hall Of Fame",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Success Story",
        path: "/success",
        newTab: false,
      },
      {
        id: 22,
        title: "Placement Statistics",
        path: "/placement",
        newTab: false,
      },
      // {
      //   id: 25,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
  {
    id: 3,
    title: "Careers",
    path: "/careers",
    newTab: false,
  },
  {
    id: 3,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
