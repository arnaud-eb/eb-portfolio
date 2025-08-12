import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Home, Contact, Skills, Projects } from "./pages";

export interface PageProps {
  text: string;
}

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
  "TypeScript",
  "TailwindCSS",
  "CSS",
  "Python",
  "Node.js",
  "Web3.js",
  "PostgreSQL",
  "Prisma",
  "Firebase",
  "Webpack",
  "Next.js",
  "GSAP",
  "Motion",
  "Parcel",
  "ESBuild",
  "GraphQL",
  "React",
  "Jest",
  "Vitest",
  "Playwright",
  "Git",
  "Redux",
  "Redux-Saga",
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
    percentage: 90,
  },
  {
    id: 2,
    skill: "JavaScript",
    percentage: 90,
  },
  {
    id: 3,
    skill: "React",
    percentage: 90,
  },
  {
    id: 4,
    skill: "TypeScript",
    percentage: 90,
  },
  {
    id: 5,
    skill: "GSAP",
    percentage: 60,
  },
  {
    id: 6,
    skill: "Node.js",
    percentage: 60,
  },
  {
    id: 7,
    skill: "SQL",
    percentage: 50,
  },
];

export type IProject = typeof projects[number];

export const projects = [
  {
    id: 1,
    title: "Social",
    img: "./images/social.avif",
    url: "https://www.thebond.lu/",
    source: "https://github.com/arnaud-eb/the-bon-app/tree/main",
    languages: ["Next.js", "Firebase", "Motion", "Sendgrid", "Stripe"],
  },
  {
    id: 2,
    title: "RSVP",
    img: "./images/rsvp.avif",
    url: "https://rsvp-yufk.vercel.app/",
    source: "https://github.com/arnaud-eb/rsvp",
    languages: ["React", "GSAP", "TailwindCSS", "Prisma", "Zod"],
  },
  {
    id: 3,
    title: "Dashboard",
    img: "./images/dashboard.avif",
    url: "https://arnaud-eb.github.io/dashboard/",
    source: "https://github.com/arnaud-eb/dashboard",
    languages: ["FusionCharts", "auth0", "React", "JS", "HTML", "CSS"],
  },
];
