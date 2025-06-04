// Frontend: React.js, Next.js, Redux Toolkit, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5, CSS3, Material UI
// Concepts: Micro-Frontend Architecture, Responsive Design, Code Splitting, Component Reusability
// Tools: Git, GitHub, Postman, Chrome DevTools, VS Code, Figma, Jenkins, Netlify, Vercel
// Testing: Jest, React Testing Library

// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import jenkinslogo from "./assets/tech_logo/jenkins.jpg";
import jestLogo from "./assets/tech_logo/jest.png";
// import jenkinslogo from './assets/tech_logo/jenkins.jpg';
// import netlifyLogo from './assets/tech_logo/netlify.png';
// import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's

import capgeeLogo from "./assets/company_logo/capgee4.png";
import nagarroLogo from "./assets/company_logo/nagarro.jpg";
import piramalLogo from "./assets/company_logo/piramal.png";
import idfcLogo from "./assets/company_logo/idfc-bank.jpg";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";
import ssdeicLogo from "./assets/education_logo/ssdds.png";
import aithLogo from "./assets/education_logo/aith.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import netflixGptLogo from "./assets/work_logo/netflix-gpt.png";
import devTubeLogo from "./assets/work_logo/dev-tube.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "SASS", logo: sassLogo },
    ],
  },
  // {
  //   title: 'Backend',
  //   skills: [
  //     { name: 'Springboot', logo: springbootLogo },
  //     { name: 'Node JS', logo: nodejsLogo },
  //     { name: 'Express JS', logo: expressjsLogo },
  //     { name: 'MySQL', logo: mysqlLogo },
  //     { name: 'MongoDB', logo: mongodbLogo },
  //     { name: 'Firebase', logo: firebaseLogo },
  //     { name: 'PostgreSQL', logo: postgreLogo },
  //   ],
  // },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Jenkins", logo: jenkinslogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "Jest", logo: jestLogo },
      // { name: 'Compass', logo: mcLogo },
      // { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: nagarroLogo,
    role: "Frontend Engineer",
    company: "Nagarro",
    date: "Jan 2025 – Present",
    desc: "Working on building scalable UI for IDFC First Bank’s cash management platform. Responsible for developing reusable components, integrating APIs, and optimizing performance and UX.",
    projects: [
      {
        title: "IDFC First Bank",
        subTitle: "Cash Management (BFSI)",
        img: idfcLogo,
        date: "Jan 2025 – Present",
        description:
          "Building clean UIs and integrating intelligent search engine with React.js and Spring Boot. Enhanced backend data handling with REST APIs and MongoDB. Focused on EMI calculator UI and improved SEO/compliance integration.",
      },
    ],
    skills: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "JavaScript",
      "REST APIs",
      "Git",
      "MongoDB",
    ],
  },
  {
    id: 1,
    img: nagarroLogo,

    role: "Frontend Engineer",
    company: "Nagarro",
    date: "Oct 2022 – Dec 2024",
    desc: "Worked on Piramal Finance’s Sales Central platform. Focused on modular UI development, improving performance and user flow in DKYC and document validation systems.",
    projects: [
      {
        title: "Piramal Finance",
        subTitle: "Sales Central",
        img: piramalLogo,
        date: "Oct 2022 – Dec 2024",
        description:
          "Improved Login FTR by 3% via DOJ validation. Built DKYC-first approach with 20–30% adoption increase. Integrated micro-frontends, optimized app performance by 20%, and improved document analyzer accuracy.",
      },
    ],
    skills: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "JavaScript",
      "Micro-Frontends",
      "UX Optimization",
      "Agile",
    ],
  },
  {
    id: 2,
    img: nagarroLogo,
    role: "Frontend Developer Intern",
    company: "Nagarro",
    date: "Mar 2022 – Sept 2022",
    desc: "Completed full-stack training and contributed to minor frontend modules. Gained hands-on experience with React, Java, SQL, Git, and Hibernate.",
    skills: ["React.js", "Java", "SQL", "Git", "Hibernate", "JavaScript"],
  },
  {
    id: 3,
    img: capgeeLogo,
    role: "Java Trainee",
    company: "Capgemini (She Arise 2.0 via Centum Foundation)",
    date: "Oct 2021 – Dec 2021",
    desc: "Completed a Java development program under She Arise 2.0 initiative. Gained foundational experience in Java, OOPs, and debugging.",
    skills: ["Java", "OOPs", "Basic SQL"],
  },
];

export const education = [
  {
    id: 0,
    img: aithLogo,
    school: "Dr. Ambedkar Institute of Technology for Handicapped, U.P.",
    date: "Aug 2018 - July 2022",
    grade: "8.67 CGPA",
    desc: "I have completed my Bachelor of Technology (B.Tech) in Information Technology from Dr. Ambedkar Institute of Technology for Handicapped, Kanpur. During my degree, I gained a solid foundation in key areas such as Object-Oriented Programming, Database Management Systems, Web Development, Software Engineering, Data Structures, and Algorithms. I actively participated in coding workshops and technical events that helped sharpen my practical skills. This academic journey has been essential in developing both my technical abilities and confidence to solve real-world problems.", 
    degree: "Bachelor of Technology - B.Tech",
  },
  {
  id: 1,
  img: ssdeicLogo,
  school: "Shree Sanatan Dharam Saraswati Balika Inter College, Kanpur, Uttar Pradesh",
  date: "Mar 2017 - Apr 2018",
  grade: "88.2%",
  desc: "I completed my class 12 education from Shree Sanatan Dharam Saraswati Balika Inter College, Kanpur, under the UP Board, where I studied Physics, Chemistry, and Mathematics (PCM).",
  degree: "UP Board (XII) – PCM",
},
 {
  id: 2,
  img: ssdeicLogo,
  school: "Shree Sanatan Dharam Saraswati Balika Inter College, Kanpur, Uttar Pradesh",
  date: "Apr 2015 - Mar 2016",
  grade: "91.16%",
  desc: "I completed my Class 10 education from Shree Sanatan Dharam Saraswati Balika Inter College, Kanpur, under the UP Board, with a focus on Science .",
  degree: "UP Board (X) - Science",
}
];

export const projects = [
  {
    id: 0,
    title: "NetflixGPT (Movie Recommender App)",
    description:
      "A Netflix-inspired movie recommendation app powered by GPT-3.5. Users can sign in using Firebase Authentication and receive personalized movie suggestions via GPT integration. The app supports multilingual responses and features a responsive UI built with Tailwind CSS.",
    keyFeatures: [
      "🤖 GPT-3.5 Turbo integration for movie recommendations",
      "🔐 Firebase-based authentication (Sign Up, Login, Logout)",
      "🔑 Secure API key management using .env",
      "📱 Fully responsive layout with Tailwind and reusable components",
      "🌐 Multi-language GPT response support",
    ],
    image: netflixGptLogo,
    tags: [
      "React JS",
      "Redux Toolkit",
      "JavaScript",
      "Tailwind CSS",
      "Firebase Auth",
      "OpenAI GPT-3.5",
      "CSS",
      "HTML",
      "API",
    ],
    github: "https://github.com/AnchalMish9630/netflix-gpt",
    webapp: ""
    // "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "DevTube – Live Chat Video Platform",
    description:
      "Namaste YouTube is a fully functional YouTube-inspired video platform that replicates key features like live search, nested comments, and a simulated live chat system. Built with modular architecture using Redux Toolkit, the app fetches real-time video data from the YouTube API, offering a dynamic and responsive user experience.",
    image: devTubeLogo,
    tags: [
      "React JS",
      "Redux Toolkit",
      "Tailwind CSS",
      "YouTube API",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/AnchalMish9630/dev-tube",
    webapp: "",
    // "https://csprep.netlify.app/",
    keyFeatures: [
      "🔍 Live search with autocomplete powered by YouTube API",
      "💬 Simulated live chat using state-based polling",
      "🧵 Nested comment threads mimicking YouTube discussions",
      "🎬 Dynamic video rendering from YouTube data",
      "🧱 Redux Toolkit for clean state management",
    ],
  },
  {
    id: 2,
    title: "Namaste Food – Swiggy Clone (Food Ordering UI)",
    description:
      "Namaste Food is a Swiggy-like food ordering UI that delivers a real-world, multi-page experience featuring dynamic restaurant listings, live menu integration, and cart state management using Redux. It emphasizes a scalable component-based architecture and clean UI principles.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/AnchalMish9630/React-Projects.",
    webapp:"",
    //  "https://movie-recommendation-app-jet.vercel.app/",
    keyFeatures: [
      "🧭 Multi-page routing with React Router DOM",

      "📋 Dynamic restaurant and menu data from public APIs",

      "🛒 Cart management via Redux global store",

      "📦 Reusable components for restaurant and menu cards",

      "🎨 Tailwind-powered responsive UI for mobile and desktop",
    ],
  },
 ];
