"use client";

interface ExperienceItem {
  status: string;
  description: string;
  date: string;
  color: string;
}

const experiences: ExperienceItem[] = [
  {
    status: "Full Stack Developer - Girikon Solutions",
    description:
      "Working on scalable SaaS solutions, integrating React, Node.js, PostgreSQL, and AWS infrastructure for enterprise applications.",
    date: "Apr 2024 - Present",
    color: "bg-pink-500",
  },
  {
    status: "Software Engineer - Simublade Technology",
    description:
      "Built and optimized full-stack applications using Next.js, Node.js, and MongoDB. Improved performance and implemented microservices architecture.",
    date: "Apr 2022 - Oct 2023",
    color: "bg-blue-500",
  },
  {
    status: "Software Engineer - ShipGig Ventures",
    description:
      "Developed and deployed multiple full-stack web applications using React.js and Express.js. Collaborated closely with product teams to deliver scalable software.",
    date: "Aug 2021 - Apr 2022",
    color: "bg-green-500",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-10">
      <h2 className="text-3xl font-bold text-pink-500 mb-4 text-center">
        Experience Timeline
      </h2>
      <div className="relative border-l border-gray-700 max-w-2xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-6">
            <span
              className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-gray-900 ${exp.color}`}
            ></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              {exp.status}
            </h3>
            <p className="mb-2 text-gray-400">{exp.description}</p>
            <time className="text-sm text-gray-500">{exp.date}</time>
          </div>
        ))}
      </div>
    </section>
  );
}
