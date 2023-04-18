import {
  mobile,
  backend,
  creator,
  web,
  c,
  cpp,
  Python,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  Sql,
  Mysql,
  Bootstrap,
  Expressjs,
  Netlify,
  Github,
  Mongoose,
  vscode,
  git,
  intern,
  algoders,
  GDSC,
  TPC,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competitive Coder",
    icon: mobile,
  },
  {
    title: "ML Engineer",
    icon: creator,
  },
];

const languages = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: Python,
  },
  { name: "SQL",
   icon: Sql,
},
]; 

 const libraries= [
   {
     name: "React JS",
     icon: reactjs,
   },
  {
    name: "Express JS",
    icon: Expressjs,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Mongoose",
    icon: Mongoose,
  }
  ]

  const databases=[
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: Mysql,
  },
]
  
  const tools = [
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Git Hub",
      icon: Github,
    },

    {
      name: "VS Code",
      icon: vscode,
    },
    {
      name: "Netlify",
      icon: Netlify,
    },
  ];

const experiences = [
  {
    title: "Peer Mentor",
    company_name: "Algoders Community",
    icon: algoders,
    iconBg: "#383E56",
    date: "December 2021 - December 2022",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      "Helping peers to learn and grow in the field of Coding.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Working with them to solve their doubts and queries.",
      "Helping them to improve their coding skills.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Core Member",
    company_name: "GDSC  UIET,PU",
    icon: GDSC,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Worked on management related roles.",
      "Worked with team and made the Technical events successful.",
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Core Member",
    company_name: "TPC UIET,PU",
    icon: TPC,
    iconBg: "#383E56",
    date: "Jan 2023 - Present ",
    points: [
      "Working as Core Member in Technical and Placement Cell.",
      // "Worked on management related roles.",
      "Working for providing more better placement opportunities to students.",  

      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer(Soon)",
    company_name: "Intern at ...",
    icon: intern,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      ""
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "News App",
    description:
      "The News App is a web-based platform that provides users with access to news articles. It is built using technologies such as React and Bootstrap. The app's source code is available on GitHub.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, testimonials, projects, tools ,databases,libraries,languages };
