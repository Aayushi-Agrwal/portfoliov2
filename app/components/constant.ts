import { IProjectDataDetails } from "./types";

export const projects = [
    "/projects/medi-sync.png",
    "/projects/portfolio-screenshot.png",
    "/projects/expense-tracker.png",
    "/projects/profSS.png",
    "/projects/neurastats.png",
    "/projects/callo.png",
    "/projects/githubexplorer.png",
    "/projects/blog.png",
    "/projects/weather.png",
    "/projects/todo.png",
    "/projects/huddleUp.png",
    "/projects/notes.png",
    "/projects/MindTasker.png",
    "/projects/OccasionOwl.png",
  ];

const next = 'Next.js';
const ts = 'Typescript';
const js = 'Javascript';
const tailwind = 'Tailwind CSS';
const figma = 'Figma';
const api = 'Api Integration';
const scss = 'SASS';
const css = 'CSS';
const html = 'HTML';
const react = 'React.js';
const f = false;
  
export const projectData: IProjectDataDetails[] = [
  {
    title: 'MediSync',
    active: f,
    description:
      'A healthcare platform that streamlines patient registration, appointment scheduling, and medical records, with implementation of complex forms and SMS notifications. Click Admin and use passkey 123456 to view the admin dashboard',
    picture: '/projects/medi-sync.png',
    url: 'https://medi-sync-sepia.vercel.app/',
    technologies: [next, ts, tailwind, figma, 'AppWrite', 'Twilio']
  },
  {
    title: 'Portfolio Website',
    active: f,
    description: 'My previous personal portfolio showcasing selected work, built with a Google-inspired UI using Next.js and MUI.',
    picture: '/projects/portfolio-screenshot.png',
    url: 'https://aayushi-portfolio.vercel.app/',
    technologies: [next, ts, 'Material UI', figma],
  },
  {
    title: 'Expense Tracker',
    active: f,
    description:
      'A user-friendly web application for tracking income and expenses, with features like persistent data storage, categorization, and a responsive design. The app includes a duplicate transaction handler, and a modal notification system for updates. Log and manage your transactions with ease.',
    picture: '/projects/expense-tracker.png',
    url: 'https://cerulean-mermaid-4c22e7.netlify.app/',
    technologies: [js, css, html, react, 'Context API', 'Local Storage']
  },
  {
    title: "Prof. Sudhakar Subudhi's Personal Website",
    active: f,
    description:
      'Developed and maintained the website to highlight key achievements, publications, and ongoing research initiatives of Prof. Sudhakar Subudhi.',
    picture: '/projects/profSS.png',
    url: 'https://main--quiet-rugelach-b8b5c0.netlify.app/',
    technologies: [js, html, css]
  },
  {
    title: 'Neurastats',
    active: f,
    description:
      'Developed a testimonial page featuring live project previews and implemented seamless transitions for enhanced user experience.',
    picture: '/projects/neurastats.png',
    url: 'https://neurastats.com/',
    technologies: [react, js, scss]
  },
  {
    title: 'Callo',
    active: f,
    description: 'Developed a frontend page component for the Callo web application.',
    picture: '/projects/callo.png',
    url: 'https://wearecallo.com/',
    technologies: [next, ts, tailwind]
  },
  {
    title: 'OccasionOwl',
    active: false,
    description: 'Event planning assistant to keep track of invites, dates, and details — everything in one place.',
    picture: '/projects/OccasionOwl.png',
    url: 'https://occasion-owl-landing-page.vercel.app/',
    technologies: [react, js, tailwind],
  },
  {
    title: 'Github Explorer',
    active: f,
    description:
      'GitHub Explorer is a streamlined web app that uses the GitHub API to fetch and display key details about GitHub profiles.',
    picture: '/projects/githubexplorer.png',
    url: 'https://github-explorer-kohl.vercel.app/',
    technologies: [js, html, css, api]
  },
  {
    title: 'Blogify',
    active: f,
    description:
      'A dynamic and engaging Blog Website using cutting-edge technologies such as Next.js, TypeScript, and the Strapi Content Management System (CMS)',
    picture: '/projects/blog.png',
    url: 'https://neurastats.com/',
    technologies: [next, ts, tailwind, 'Stapi CMS']
  },
  {
    title: 'Weather App',
    active: f,
    description:
      'Real-time weather updates, providing details such as temperature, humidity, wind speed, and current conditions.',
    picture: '/projects/weather.png',
    url: 'https://weatherly-rho.vercel.app/',
    technologies: [js, html, scss, api]
  },
  {
    title: 'ToDo',
    active: f,
    description:
      'Built an efficient ToDo app with user-friendly features for seamless task management. Developed with React and Bootstrap, ensuring a smooth and stylish user experience.',
    picture: '/projects/todo.png',
    url: '',
    technologies: [react, js, css]
  },
  {
    title: 'HuddleUp',
    active: f,
    description:
      'A Cricket Player Management System in Java with role-based dashboards for admins and users. Integrated a complex algorithm for optimal team selection based on pitch conditions.',
    picture: '/projects/huddleUp.png',
    url: '',
    technologies: ['Java', 'Netbeans', 'SQL']
  },
  {
    title: 'Notes App',
    active: f,
    description:
      'Built an efficient Notes app with user-friendly features for seamless task management. Developed with React and Bootstrap, ensuring a smooth and stylish user experience.',
    picture: '/projects/notes.png',
    url: '',
    technologies: [react, js, css]
  },
  {
    title: 'MindTasker',
    active: false,
    description: 'A productivity app focused on mindful task management, offering intuitive UI and seamless experience.',
    picture: '/projects/MindTasker.png',
    url: '', // Add URL if available
    technologies: [react, ts, tailwind],
  }
];

export const experiences = [
  {
    company: "Apport Software Solutions Pvt Ltd",
    role: "Frontend Developer",
    date: "March 2025 - Present",
    description:
      "Building responsive web apps with React, Next.js, Jotai, and TypeScript. Implemented SSR, infinite scroll, i18n, and dynamic UIs.",
    cx: 150,
    cy: 750,
    midcy: 650
  },
  {
    company: "Neurastats",
    role: "Frontend Developer",
    date: "17 May, 2024 - 17 July, 2024",
    description:
      "Developed and maintained responsive, high-performance web applications using ReactJS, NextJS, and TypeScript, ensuring seamless user experiences across all devices.",
    left: 230,
    top: 470,
    cx: 250,
    cy: 600,
    midcy: 550
  },
  {
    company: "IIT Roorkee",
    role: "Web Developer Intern",
    date: "3 October, 2023 - 3 November, 2023",
    description:
      "Established and managed Prof. Sudhakar Subudhi’s personal website repository to serve as a comprehensive platform for showcasing professional accomplishments, research interests, and academic journey.",
    left: 380,
    top: 310,
    cx: 400,
    cy: 400,
    midcy: 400
  },
  {
    company: "Freelance",
    role: "Java/NetBeans Developer",
    date: "5 August, 2023 - 25 August, 2023",
    description:
      "Developed a Cricket Player Management System in Java with role-based dashboards for admins and users. Integrated a complex algorithm for optimal team selection based on pitch conditions, showcasing proficiency in Java and SQL technologies.",
    left: 590,
    top: 230,
    cx: 600,
    cy: 300,
    midcy: 330
  },
  {
    company: "Neurastats",
    role: "Web Developer Intern",
    date: "22 May, 2023 - 21 July, 2023",
    description:
      "Designed intuitive layouts for the blog and crafted interactive components for the homepage. Collaborated closely with frontend developers for seamless design integration and delivered three React/Next.js applications, elevating user experience.",
    left: 720,
    top: 130,
    cx: 750,
    cy: 200,
    midcy: 250
  },
];