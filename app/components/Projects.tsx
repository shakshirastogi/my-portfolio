import { projects } from "../metadata/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold text-pink-500 mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.name}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition"
          >
            {/* Show iframe if it's a live demo, otherwise show image */}

            <img
              src={proj.image}
              alt={proj.name}
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />

            <h3 className="text-xl font-semibold text-white">{proj.name}</h3>
            <p className="text-gray-400 mt-2">{proj.description}</p>
            <div className="flex justify-center gap-4 mt-4">
              {proj.demo && (
                <a
                  href={proj.demo}
                  className="text-pink-500 hover:underline"
                  target="_blank"
                >
                  Live Demo
                </a>
              )}
              {proj.github && (
                <a
                  href={proj.github}
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
