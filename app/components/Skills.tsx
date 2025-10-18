import { skills } from "../metadata/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold text-pink-500 mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-800 px-5 py-2 rounded-full text-gray-300 hover:bg-pink-500 hover:text-white transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
