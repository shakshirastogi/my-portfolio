interface Project {
  name: string;
  description: string;
  image: string;
  demo: string;
  github: string;
}

export const projects: Project[] = [
  {
    name: "GirikSMS",
    description:
      "SaaS-based Omnichannel Messaging Platform enabling businesses to manage SMS, WhatsApp, Facebook, and Instagram communications with real-time tracking, scheduling, and automation.",
    image: "/project1.jpg",
    demo: "#",
    github: "#",
  },
  {
    name: "Used Engines INC",
    description:
      "An e-commerce platform connecting buyers and sellers of used engines. Built with React, Next.js, and Node.js to ensure smooth buying experiences and robust backend management.",
    image: "https://www.usedengines.us/",
    demo: "https://www.usedengines.us/",
    github: "#",
  },
  {
    name: "Tavus AI Video Platform",
    description:
      "AI-powered video personalization platform that generates customized videos for each customer using advanced AI models, React.js, and Node.js.",
    image: "/project3.jpg",
    demo: "https://www.tavus.io/",
    github: "#",
  },
];
