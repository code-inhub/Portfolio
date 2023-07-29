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
  linkedin,
  twitter,
  codechef,
  leetcode,
  Mongoose,
  vscode,
  git,
  intern,
  algoders,
  GDSC,
  TPC,
  carrent,
  Mechat,
  jobit,
  tripguide,
  hackerman,
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

const socialLinks = [
  {
    id: "linkedin",
    img: linkedin,
    url: "https://www.linkedin.com/in/theanshulrana/",
  },
  {
    id: "twitter",
    img: twitter,
    url: "https://twitter.com/code_inhub",
  },
  {
    id: "github",
    img: Github,
    url: "https://github.com/code-inhub",
  },
  {
    id: "leetcode",
    img: leetcode,
    url: "https://leetcode.com/anshulrana/",
  },
  {
    id: "codechef",
    img: codechef,
    url: "https://www.codechef.com/users/ninja96",
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
   name: "MeChat",
    description:
      "A Chat application to let you talk and share whatever you want.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
    ],
    image: Mechat,
    source_code_link: "https://github.com/code-inhub/MeChat",
    link: "https://mechatapp.netlify.app/",
  },
  {
    name: "News App",
    description:
      "The News App is MERN application that provides you the latest news.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Rest API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/code-inhub/NewsApp",
    link: "https://holy-monk.netlify.app/",
  },
  {
    name: "Weather App",
    description:
      "The Weather App is a web application that allows users to check the weather for different locations. It is built using Java Script, Weather API, and CSS.",
    tags: [
      {
        name: "Java Script",
        color: "blue-text-gradient",
      },
      {
        name: "Weather API",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/code-inhub/Weather-App-Project",
    link: "https://sweaterwheather.netlify.app/",
  },
  
  {
    name: "Calculator",
    description:
      "Calculator project is a simple calculator that allows users to perform basic arithmetic operations in a fancy way. It is built using technologies such as HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/code-inhub/My-Calculator",
    link: "https://bdmas.netlify.app/",
  },
  {
    name: "HackerMan",
    description:
      " HackerMan project is a joke web application designed to scare non-tech-savvy individuals by displaying a fake hacker interface. It is something which I designed for fun during my initial stages of learning. ",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: hackerman,
    source_code_link: "https://github.com/code-inhub/HackerMan",
    link: "https://hacklol.netlify.app/",
  },
];

export { services, experiences, testimonials,socialLinks ,projects, tools ,databases,libraries,languages };
