import Image from "next/image";

interface Certificate {
  title: string;
  image: string;
  issuedBy: string;
  year: string;
}

const certificates: Certificate[] = [
  {
    title: "Certification of Professional Achievement in React JS",
    image: "/certificate.jpg",
    issuedBy: "NamasteDev.com",
    year: "2023",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold text-pink-500 mb-10">
        Certificates & Achievements
      </h2>
      <div className="flex grid gap-8 justify-center">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-4 shadow-md hover:scale-105 transition"
          >
            <Image
              src={cert.image}
              alt={cert.title}
              width={450}
              height={250}
              className="rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
            <p className="text-sm text-gray-400 mt-1">
              {cert.issuedBy} • {cert.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
