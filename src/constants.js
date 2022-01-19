// eslint-disable-next-line
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Home, Contact, Skills, Projects } from "./pages";

export const links = [
  {
    id: 1,
    text: "home",
    Component: Home,
    colors: ["#97c0c4", "#944c63"],
  },
  {
    id: 2,
    text: "projects",
    Component: Projects,
    colors: ["#f3eec3", "#944c63", "#518a90"],
  },
  {
    id: 3,
    text: "skills",
    Component: Skills,
    colors: ["#b0d0d3", "#944c63", "#f2ecbb"],
  },
  {
    id: 4,
    text: "contact",
    Component: Contact,
    colors: ["#944c63", "#f3eec3", "#b0d0d3ff"],
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/arnaud-depierreux-1b7430217/",
    Icon: FaLinkedin,
  },
  {
    id: 2,
    url: "https://github.com/arnaud-eb",
    Icon: FaGithub,
  },
  {
    id: 3,
    url: "mailto:arnaud.depierreux@easebest.com",
    Icon: FaEnvelope,
  },
];

export const texts = [
  "HTML",
  "Javascript",
  "Ethereum",
  "TypeScript",
  "Truffle",
  "CSS",
  "Python",
  "Web3.js",
  "PostgreSQL",
  "Webpack",
  "Solidity",
  "Parcel",
  "GraphQL",
  "React",
  "Mocha",
  "ethers.js",
  "Git",
  "Redux",
  "NFTs",
  "Jest",
  "WCAG",
];

export const counts = [1, 2, 4, 5, 4, 2, 1];

export const options = {
  tilt: Math.PI / 9,
  initialVelocityX: 0.09,
  initialVelocityY: 0.09,
  initialRotationX: Math.PI * 0.14,
  initialRotationZ: 0,
};

export const skills = [
  {
    id: 1,
    skill: "HTML / CSS",
    percentage: 50,
  },
  {
    id: 2,
    skill: "JavaScript",
    percentage: 50,
  },
  {
    id: 3,
    skill: "React",
    percentage: 50,
  },
  {
    id: 4,
    skill: "TypeScript",
    percentage: 30,
  },
  {
    id: 5,
    skill: "Python",
    percentage: 15,
  },
  {
    id: 6,
    skill: "Solidity",
    percentage: 40,
  },
  {
    id: 7,
    skill: "Truffle",
    percentage: 40,
  },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce",
    img: "./images/ecommerce.avif",
    url: "https://arnaud-eb.github.io/e-commerce/",
    source: "https://github.com/arnaud-eb/e-commerce",
    languages: ["auth0", "React", "JS", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Dashboard",
    img: "./images/dashboard.avif",
    url: "https://arnaud-eb.github.io/dashboard/",
    source: "https://github.com/arnaud-eb/dashboard",
    languages: ["FusionCharts", "auth0", "React", "JS", "HTML", "CSS"],
  },
  {
    id: 3,
    title: "Blockchain",
    img: "./images/blockchain.avif",
    url: "https://blockchainpy.herokuapp.com/",
    source: "https://github.com/arnaud-eb/blockchain-project",
    languages: ["Python", "Flask", "Vue.js", "JS", "HTML", "CSS"],
  },
];
