import profile from "@/assets/images/profile0.png";
import html from "@/assets/images/html-5.png";
import css3 from "@/assets/images/css3.png";
import js from "@/assets/images/js.png";
import react from "@/assets/images/react.png";
import github from "@/assets/images/github.png";
import git from "@/assets/images/git.png";
import bootstrap from "@/assets/images/bootstrap.png";
import node from "@/assets/images/node.png";
import nextjs from "@/assets/images/nextjs.png";
import rails from "@/assets/images/rails.png";
import redis from "@/assets/images/redis.png";
import ruby from "@/assets/images/ruby.png";
import heroku from "@/assets/images/heroku.png";
import shopify from "@/assets/images/shopify.png";
import tailwind from "@/assets/images/tailwind.png";
import chakra from "@/assets/images/chakra.jpeg";
import figma from "@/assets/images/figma.png";
import typescript from "@/assets/images/typescript.png";
import postgresql from "@/assets/images/postgresql.png";
import mysql from "@/assets/images/mysql.png";
import elasticsearch from "@/assets/images/elasticsearch.png";
import rspec from "@/assets/images/rspec.svg";
import ux from "@/assets/images/ux.png";
import frontEnd from "@/assets/images/front-end.png";
import backend from "@/assets/images/backend.png";
import fankaar from "@/assets/images/fankaar.png";
import projectsImg from "@/assets/images/userOnComputer.png";
import pricingUi from "@/assets/images/pricingUI.png";
import panaverse from "@/assets/images/panaverse.png";
import lahoreTourGuide from "@/assets/images/lahoreTourGuide.png";
import taskTracker from "@/assets/images/taskTracker.png";
import counter from "@/assets/images/counter.png";

export const personalData = {
  name: "Mubarra Naz",
  role: "Software Engineer",
  tagline: "Let's make your next big project, a reality together",
  expertise: ["Full Stack Web Development", "UI/UX Design"],
  intro:
    "A tech enthusiast flourishing expertise in software development & design. I work on multiple technologies including Ruby on Rails, React, Next.Js, Tailwind CSS, Chakra UI. Playing with tech & evolving with time is my motto for technology.",
  contactLinks: {
    email: "mailto:emailto:mubarranaz11@gmail.com",
    linkedin: "https://www.linkedin.com/in/mubarra-naz/",
    twitter: "https://twitter.com/NazMubarra",
    github: "https://github.com/Mubarra-naz",
  },
  imgLink: profile,
};

export const aboutData = {
  subTitle: "About Me",
  title: "Who I Am",
  body: [
    "A skilled software engineer with a passion for crafting innovative solutions and turning complex problems into elegant code. I thrive on designing and developing efficient software applications that meet user needs and exceed expectations. I belive in continuous evolution and like to work on challenging projects. I've honed my expertise by working on distinguishing projects implementitng best technical practices. Currently, I'm working on cutting edge technologies in Web 2.0 and my next goal is to dive into the world of Web3.0 and Metaverse. I am excited about the opportunity to collaborate with like-minded professionals and tackle challenging projects that push the boundaries of what's possible in the software engineering realm. Let's connect and create something amazing together!",
  ],
  stats: [
    {
      val: 2,
      text: "years",
      head: "experience",
    },
    {
      val: 5,
      text: "completed",
      head: "projects",
    },
    {
      val: 1,
      text: "working",
      head: "companies/clients",
    },
  ],
  education: [
    {
      title: "Bachelor of Science in Software Engineering",
      institute:
        "University of Punjab College of information & Technology, Lahore",
      duration: "2017 - 2021",
      description: null,
      extras: null,
    },
  ],
  experience: [
    {
      title: "Software Engineer",
      duration: "2021 - Present",
      description: [
        "Develop innovative, scalable, fault-tolerant software solutions for clients and work in an agile team environment.",
        "Focus on using best industrial & technical practices. Worked on both Test Driven & Behavior driven development.",
        "Appreciated for excellent R&D, Collaboration, Quick learning & problem solving skills",
        "Efficiently deployed and integrated software and updated integration/deployment scripts to improve continuous integration practices.",
      ],
      company: "Square63",
      extras: ["Ruby on Rails", "JQuery", "ReactJs", "Bootstrap"],
    },
  ],
};

export const skillsData = {
  heading: "What I do?",
  text: "Wroking as a full stack developer I've built a wide skillset for myself. I have worked in various programming languages and frameworks, including best practices in Ruby on Rails, advance practices in Next.Js 13, Headless CMS including Sanity and Contentful and Neon Serverless Database.",
  services: [
    {
      icon: frontEnd,
      title: "Frontend Development",
      text: "With expertise in ReactJs, Redux Toolkit, NextJs and Headless CMS I'm striving to create intuitive, interactive interfaces crafting engaging user experiences through clean and efficient code.",
    },
    {
      icon: backend,
      title: "Backend Development",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: ux,
      title: "UI/UX Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  subHeading: "Technologies I work on",
  skillsList: [
    {
      icon: html,
      text: "HTML",
    },
    {
      icon: css3,
      text: "CSS",
    },
    {
      icon: js,
      text: "JavaScript",
    },
    {
      icon: typescript,
      text: "TypeScript",
    },
    {
      icon: react,
      text: "React JS",
    },
    {
      icon: nextjs,
      text: "Next.Js",
    },
    {
      icon: tailwind,
      text: "Tailwind CSS",
    },
    {
      icon: chakra,
      text: "Chakra UI",
    },
    {
      icon: bootstrap,
      text: "Bootstrap",
    },
    {
      icon: figma,
      text: "Figma",
    },
    {
      icon: git,
      text: "Git",
    },
    {
      icon: github,
      text: "Github",
    },
    {
      icon: ruby,
      text: "Ruby",
    },
    {
      icon: rails,
      text: "Rails",
    },
    {
      icon: redis,
      text: "Redis",
    },
    {
      icon: heroku,
      text: "Heroku",
    },
    {
      icon: shopify,
      text: "Shopify",
    },
    {
      icon: postgresql,
      text: "PostgreSQL",
    },
    {
      icon: mysql,
      text: "MySQL",
    },
    {
      icon: elasticsearch,
      text: "Elasticsearch",
    },
    {
      icon: rspec,
      text: "RSpec",
    },
  ],
};

export const projectsData = {
  subtitle: "Portfolio",
  title: "What I've Built",
  tabHeads: [
    { label: "Web Development", href: "#/webProjects" },
    { label: "UI/UX Design", href: "#/uiProjects" },
  ],
  projects: [
    {
      title: "fankaar",
      category: "UI/UX Design",
      viewUrl:
        "https://www.figma.com/file/782vlyu0yojgjlQwf5C4NK/FANKAAR?node-id=0%3A1&t=kO0DeAGGxdMjHThn-1",
      codeUrl: null,
      imagePath: fankaar,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "panaverse DAO",
      category: "UI/UX Design, Web Development",
      viewUrl: "https://panaverse-dao-chakra-mubarranaz.vercel.app/",
      codeUrl: "https://github.com/Mubarra-naz/panaverse-dao",
      imagePath: panaverse,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "lahore tour guide",
      category: "UI/UX Design",
      viewUrl:
        "https://www.figma.com/file/CrVwl0OMxCQ3Ld3RfHBkFy/Lahore-tour-guide?node-id=0%3A1&t=tWJVy7IjHhrutJj4-1",
      codeUrl: null,
      imagePath: lahoreTourGuide,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "pricing UI",
      category: "UI/UX Design, Web Development",
      viewUrl:
        "https://www.figma.com/file/xLcT0vxhe4rZc4epOOlcUT/Pricing-UI?node-id=0%3A1&t=b97parsPJNGhQVQv-1",
      codeUrl: "https://github.com/Mubarra-naz/pricing-ui",
      imagePath: pricingUi,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "ecommerce hub",
      category: "Web development",
      codeUrl: "https://github.com/Mubarra-naz/e-commerce-demo-project",
      viewUrl: null,
      imagePath: projectsImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "task tracker",
      category: "Web development",
      codeUrl: null,
      viewUrl: null,
      imagePath: taskTracker,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Redux Counter",
      category: "Web development",
      codeUrl: null,
      viewUrl: null,
      imagePath: counter,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Audiosocket clone",
      category: "Web development",
      codeUrl: "https://github.com/Mubarra-naz/musical-demo-app-backend",
      viewUrl: null,
      imagePath: projectsImg,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

export const contactData = {
  subtitle: "Get in Touch",
  title: "Let's Work Together!",
};
