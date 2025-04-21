import project1 from "../assets/plant_care_dash.jpg";
import project2 from "../assets/projects/water_works_sys.png";
import project3 from "../assets/projects/chat_app.png";
import project4 from "../assets/logoo.png";

export const HERO_CONTENT = `My name is Lester, and I am currently a 4th-year student pursuing a degree in Bachelor of Science in Information Technology (BSIT) at CTU-Barili. I am deeply passionate about software development, particularly in web development. Throughout my academic journey, I have developed skills in coding, project management, and app development.`;

export const ABOUT_TEXT = `I am a dedicated and passion for creating efficient and user-friendly web applications. Familiar with modern front-end web development frameworks and tools, including HTML5, CSS3, JavaScript, and React.js, for creating responsive and user-friendly interfaces. Understanding of IoT technologies and protocols, with hands-on experience integrating sensors (e.g., DHT11, NPK sensors) and microcontrollers like NodeMCU and Arduino. - Strong problem-solving and debugging skills in web and mobile application development. - Effective at designing and implementing interactive front-end solutions that improve user engagement and experience.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Smart Plant Care",
    image: project1,
    description:
      "The Smart Plant Care System is an IoT-based mobile app development project designed to automate and optimize plant maintenance. It uses a soil moisture sensor (Arduino Uno) and a water level sensor (NodeMCU) to monitor hydration, while a DHT11 sensor tracks temperature and humidity. An NPK sensor measures essential soil nutrients (Nitrogen, Phosphorous, Potassium) to support healthy growth.",
    technologies: ["Kotlin", "C", "C++", "Firebase"],
  },
  {
    title: "Water Works System",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Java", "MySQL"],
  },
  {
    title: "Chat-App",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Pyhton", "DJango", "HTML", "CSS"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Tubod, Barili, Cebu ",
  phoneNo: "+639618179619",
  email: "lesterroyals041203@gmail.com",
};