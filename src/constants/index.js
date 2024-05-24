import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dish,
  imbesideyou,
  ethan,
  vhi,
  tb,
  smart,
  my
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Design",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Dish Network Technologies",
    icon: dish,
    iconBg: "#383E56",
    date: "June 2023 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Built websites for hosting data analytics solutions for ML models.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Used Nginx along with AWS EC2 for deployment configuration for frontend based on React and Redux along with a Django+Postgres backend with RESTful APIs.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "I'm Beside You",
    icon: imbesideyou,
    iconBg: "#E6DEDD",
    date: "MAY 2022 – JULY 2022",
    points: [
      "Designed and built a data-sharing platform that uses blockchain to store the data and allows sharing of data.",
      "Created and deployed Solidity smart contracts and wrote test cases for the same.",
      "Created the frontend in NextJs with Firebase and used AES encryption to secure the data in the block.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Ethan.ai",
    icon: ethan,
    iconBg: "#383E56",
    date: "MARCH 2022 – APRIL 2022",
    points: [
      "Worked with ReactJs and React Native on the frontend of the company’s web app and mobile app with Redux.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Created and integrated several react modules, charts, tables, etc. with searching and sorting features."
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Dynamic React Table like AG grid",
    name: "Rahul Singh Thakur",
    designation: "A",
    company: "Medium Story",
    image: my,
    link:""
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Smart Attendance",
    description:
      "An attendance tracking application with facial recognition using face-api.js. The system is a client-server architecture that contains several modules and each module is backed by the resolver in the server to handle GraphQL request query. It is basically designed for education institution that has 2 user roles- lecturer and student.",
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
        name: "garphQL",
        color: "pink-text-gradient",
      },
    ],
    image: smart,
    source_code_link: "https://github.com/Barrylimarti/Smart_Attendance",
  },
  {
    name: "Tuberculosis Predictor",
    description:
      "This is a computer vision program that aims to expedite the process for a pulmunology referral, while providing data for pulmonologists to learn from. Clients are able to upload a 'TBRef' and recieve immediate feedback on what our AI believes the condition is, and request a pulmunologist referral. The TBRef is also anonymized and can be used for educational puposes in medical schools or at conferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: tb,
    source_code_link: "https://github.com/Barrylimarti/TBRef",
  },
  {
    name: "Virtual Health Inventory",
    description:
      "A react-native application that stores image and documents with Login/Signup facilities. Backend is configured with Node.js and MongoDB.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: vhi,
    source_code_link: "https://github.com/Barrylimarti/VHIapp",
  },
];

export { services, technologies, experiences, testimonials, projects };
