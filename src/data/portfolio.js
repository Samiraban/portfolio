export const profile = {
  name: "Samira Ban",
  initials: "SB",
  role: "Junior Full-Stack Developer",
  subRole: "Full-Stack Developer",
  intro:
    "Full-Stack Developer interested in building digital products that look thoughtful, work reliably, and solve practical problems — from responsive interfaces to backend functionality.",
  heroTags: ["React", "Node.js", "Express.js", "MongoDB", "MySQL"],
  email: "samiraban38@gmail.com",
  phone: "+977 9714473363",
  github: "https://github.com/Samiraban",
  githubUser: "Samiraban",
  linkedin: "", // TODO: paste your LinkedIn URL here (hidden while empty)
  resume: "/Samira_Ban_Resume.pdf",
  photo: "/samira-ban.jpg", // your photo in public/
};

export const about = {
  title: "More than just writing code.",
  text: "I’m a Full-Stack Developer interested in building digital products that look thoughtful, work reliably, and solve practical problems. My work includes business and recruitment websites such as Star Euro Group, Star Euro Armenia, and OS Group — projects that helped me explore real website requirements, responsive layouts, and the process of bringing a website online. I enjoy learning by building and exploring how frontend interfaces and backend systems work together.",
  chips: [
    "Frontend development", "Backend development", "REST API design",
    "Database design", "Responsive design", "Debugging", "Version control", "Deployment",
  ],
  profile: [
    ["Developer", "Full-Stack"],
    ["Intern", "NLCITS"],
    ["Graduate", "ISMT"],
    ["Degree", "BIT"],
  ],
  tags: ["Responsive", "Reusable", "Readable", "Practical"],
};

export const experience = [
  {
    date: "Current",
    title: "Full-Stack Developer Intern",
    company: "NLCITS — Nepal Living Connecting IT Solution Pvt. Ltd.",
    mode: "Internship",
    summary:
      "Working on modern web applications, responsive interfaces, backend integrations, and practical software development projects.",
    points: [
      "Developing responsive and interactive website interfaces",
      "Working with React, JavaScript, HTML, and CSS",
      "Building and integrating backend APIs using Node.js and Express",
      "Testing features, debugging issues, and improving user experience",
      "Collaborating on real-world website and management platform projects",
    ],
  },
  {
    date: "Ongoing",
    title: "Web Development Projects",
    company: "Practical Project Experience",
    mode: "Project-based learning",
    summary:
      "Building portfolio projects to strengthen full-stack development skills and create practical solutions for business needs.",
    points: [
      "Creating recruitment and corporate websites",
      "Developing management platform interfaces and admin dashboards",
      "Connecting frontend components with backend services",
      "Improving layouts, animations, navigation, and responsive behavior",
    ],
  },
];

export const education = {
  school: "ISMT College — Biratnagar, Nepal",
  degree: "Bachelor in Information Technology (BIT)",
  meta: "2024 – 2026",
};

// Add real achievements here, or leave the array empty to hide the section
export const achievements = [];

// cat: frontend | backend | database | tools
// icon keys are resolved in Skills.jsx; unknown keys show 2 letters
export const skills = [
  { name: "React", desc: "Component-based UI library", cat: "frontend", icon: "react" },
  { name: "JavaScript", desc: "Core web language", cat: "frontend", icon: "js" },
  { name: "HTML", desc: "Document markup", cat: "frontend", icon: "html" },
  { name: "CSS", desc: "Layout & styling", cat: "frontend", icon: "css" },
  { name: "Responsive Design", desc: "Layouts for every screen", cat: "frontend", icon: "RD" },
  { name: "Node.js", desc: "JS runtime", cat: "backend", icon: "node" },
  { name: "Express.js", desc: "Server framework", cat: "backend", icon: "express" },
  { name: "REST APIs", desc: "HTTP API design", cat: "backend", icon: "RE" },
  { name: "Authentication", desc: "Secure user access", cat: "backend", icon: "AU" },
  { name: "MongoDB", desc: "Document database", cat: "database", icon: "mongo" },
  { name: "MySQL", desc: "Relational database", cat: "database", icon: "mysql" },
  { name: "Database Design", desc: "Data modelling & CRUD", cat: "database", icon: "DB" },
  { name: "Git", desc: "Version control", cat: "tools", icon: "git" },
  { name: "GitHub", desc: "Code hosting", cat: "tools", icon: "github" },
  { name: "Vercel", desc: "Deployment platform", cat: "tools", icon: "vercel" },
  { name: "npm", desc: "Package manager", cat: "tools", icon: "npm" },
  { name: "Debugging", desc: "Finding & fixing issues", cat: "tools", icon: "DE" },
];

// type: enterprise | fullstack     status: Shipped | In development
export const projects = [
  {
    slug: "star-euro-group",
    title: "Star Euro Group",
    featured: true,
    type: "enterprise",
    status: "Shipped",
    url: "https://stareurogroup.com/",
    short:
      "A corporate website project focused on presenting the business, communicating its services, and creating a professional digital presence.",
    bullets: [
      "Frontend development and website improvements",
      "Responsive layout and professional presentation of services",
    ],
    tech: ["React", "Web Development", "Responsive UI"],
    caseStudy: {
      overview: "A corporate website presenting the business, its services and its professional digital presence.",
      problem: "The business needed a clear, professional website that communicates its services to visitors.",
      solution: "A responsive React website with a structured layout and clear presentation of services.",
      architecture: ["React frontend", "Responsive layout", "Deployed website"],
      features: ["Professional presentation of the business", "Clear communication of services", "Responsive design across devices"],
      challenges: "Turning real business requirements into a clean, responsive interface.",
      results: "A live corporate website at stareurogroup.com.",
      lessons: "Real client requirements teach more about layout and usability than any tutorial.",
    },
  },
  {
    slug: "star-euro-armenia",
    title: "Star Euro Armenia",
    type: "fullstack",
    status: "Shipped",
    url: "https://star-euro-armenia.vercel.app/",
    short:
      "A dedicated website for the Armenia-focused recruitment business, with accessible navigation and a clear, responsive user experience.",
    tech: ["React", "UI Development", "Deployment"],
    caseStudy: {
      overview: "A dedicated website for the Armenia-focused recruitment business.",
      problem: "Visitors needed clear information and easy navigation for a recruitment service.",
      solution: "A responsive React interface with accessible navigation and clearly presented information.",
      architecture: ["React frontend", "Deployed on Vercel"],
      features: ["Accessible navigation", "Clear presentation of information", "Responsive user experience"],
      challenges: "Keeping a lot of information clear and easy to scan on every screen size.",
      results: "A live recruitment website on Vercel.",
      lessons: "Simple navigation and good structure matter more than extra effects.",
    },
  },
  {
    slug: "os-group",
    title: "OS Group",
    type: "enterprise",
    status: "Shipped",
    url: "https://osgroup.com.np/",
    short:
      "A corporate website designed to communicate the group's identity, showcase its services, and introduce its wider business network.",
    tech: ["React", "Responsive Design", "UI/UX"],
    caseStudy: {
      overview: "A corporate website communicating the group's identity and its wider business network.",
      problem: "A group of businesses needed one structured place to explain who they are and what they offer.",
      solution: "A structured, responsive React website showcasing services and the group's network.",
      architecture: ["React frontend", "Responsive layout", "Deployed website"],
      features: ["Group identity and services", "Introduction to the wider business network", "Responsive UI/UX"],
      challenges: "Presenting several businesses clearly without overwhelming visitors.",
      results: "A live corporate website at osgroup.com.np.",
      lessons: "A clear information structure is the foundation of a good corporate site.",
    },
  },
  {
    slug: "skillbridge",
    title: "SkillBridge",
    type: "fullstack",
    status: "In development",
    short:
      "A MERN stack career platform connecting students, graduates, and employers through internships, job opportunities, and skill development resources.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    caseStudy: {
      overview: "A full-stack career platform under development for students, graduates and employers.",
      problem: "Students and graduates need one place to find internships, jobs and skill resources, and employers need a way to reach them.",
      solution: "A MERN stack web application connecting students, graduates and employers.",
      architecture: ["React Client", "Express API", "MongoDB"],
      features: ["Internships and job opportunities", "Skill development resources", "Connects students, graduates and employers"],
      challenges: "Designing flexible data models for users, opportunities and resources.",
      results: "Currently in development.",
      lessons: "Planning the data model first makes every feature easier to build.",
    },
  },
];

export const services = [
  { title: "Full-Stack Applications", text: "Modern frontend paired with practical, well-structured backend systems.", icon: "layers" },
  { title: "Business & Corporate Websites", text: "Responsive, professional websites that present a business clearly.", icon: "globe" },
  { title: "Management Platforms", text: "Admin dashboards and management interfaces shaped around real workflows.", icon: "building" },
  { title: "REST APIs & Backend", text: "Node.js and Express backends with authentication and database integration.", icon: "server" },
  { title: "Deployment", text: "Taking websites from code to live, with testing and debugging along the way.", icon: "rocket" },
];