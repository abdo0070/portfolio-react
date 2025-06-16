import { FaGithub, FaLinkedin, FaFacebook, FaDiscord } from "react-icons/fa6";

import projectImage1 from "../assets/p-1.png";
import projectImage2 from "../assets/p-2.png";
import projectImage3 from "../assets/p-3.png";
import projectImage4 from "../assets/p-4.png";
import projectImage5 from "../assets/p-5.png";
import projectImage6 from "../assets/p-6.png";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Abdalla Mmdouh",
  greet: "Hello there! 👋🏻",
  description: `
    I am a highly skilled Fullstack Web Developer with over 1 year of experience in HTML, CSS, JavaScript, and PHP. I possess
    expertise in popular frameworks such as Laravel, React, and Express.js, and have extensive experience with REST APIs and MVC
    architectures. Additionally, I have a strong understanding of the Software Development Life Cycle (SDLC) and Object-Oriented
    Programming (OOP) design principles. I am proficient in data structures and algorithms and am committed to writing clean
    and efficient code.
  `,
};

export const PROJECTS = [
  {
    id: 1,
    name: "CV Portal",
    description: `The CV Portal is a comprehensive platform designed to bridge the gap between job seekers and employers. Built
    using modern web technologies, the portal offers a seamless and secure experience for both job hunters and
    recruiters.`,
    image: projectImage2,
    link: "https://cvportal.netlify.app/",
  },
  {
    id: 2,
    name: "Turbo chat",
    description: `A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Mongo.`,
    image: projectImage1,
    link: "https://turbochat.netlify.app/",
  },
  {
    id: 3,
    name: "Tstore iphone",
    description: `TStore is a simple website template using HTML, CSS, and JavaScript for showcasing and selling phones. It features product listings, a clean layout, and easy customization.`,
    image: projectImage3,
    link: "https://tstore-iphone-template.netlify.app/",
  },
  {
    id: 4,
    name: "Tarboush Store",
    description: `Tarboush Store is a modern e-commerce website built with React and Tailwind CSS.
It offers a fast, responsive, and user-friendly shopping experience across all devices.
With dynamic components and clean design, it ensures smooth navigation and scalability.`,
    image: projectImage4,
    link: "https://tarboush-store.netlify.app/",
  },
  {
    id: 5,
    name: "Restaurant Reservation",
    description: `The Restaurant Reservation System is a web application built using MySQL, PHP Laravel framework, and various frontend technologies The main purpose of this system is to facilitate restaurant management, streamline reservation processes, and enhance user experience.`,
    image: projectImage5,
    link: "https://github.com/abdo0070/Reservation-Restaurant",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    link: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
  "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
  "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <FaDatabase className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "MySQL",
    experience: "1+ year",
  },

  {
    icon: <FaLaravel className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Laravel",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Backend Developer Trainee",
    company: "Orange Digital Center",
    duration: "Aug 2022 - Oct 2022",
    description: `Learned how to desgin , code and unit testing backend applications using OOP PHP, HTML, CSS, Laravel, SQL,
MVC, and Developed expertise in designing, coding, and performing unit testing for backend applications,
utilizing Object-Oriented PHP, HTML, CSS, Laravel, SQL, MVC architecture, and APIs`,
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of Ain Shams,Cairo",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
export const COLORS = {
  DARK_BLUE : "0A0C32"
}
