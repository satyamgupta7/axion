import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Programs",
    newTab: false,
    submenu: [
      {
        id: 12,
        title: "Full Stack Development Internship",
        path: "/internship/webdev",
        newTab: false,
      },
      {
        id: 11,
        title: "Data Science Internship",
        path: "/internship/datascience",
        newTab: false,
      },
      {
        id: 13,
        title: "Data Analyst Internship",
        path: "/internship/dataanalyst",
        newTab: false,
      },
      {
        id: 14,
        title: "Business Analyst Internship",
        path: "/internship/businessanalyst",
        newTab: false,
      },
      {
        id: 15,
        title: "Networking Internship",
        path: "/internship/networking",
        newTab: false,
      },
      {
        id: 16,
        title: "Cyber Security Internship",
        path: "/internship/cybersecurity",
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
