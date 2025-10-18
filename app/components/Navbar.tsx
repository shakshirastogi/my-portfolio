"use client";

const navItems = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-black/30 backdrop-blur-md fixed w-full top-0 z-50">
      <h1 className="text-2xl font-bold text-pink-500">Sakshi.dev</h1>
      <ul className="hidden md:flex space-x-8 text-gray-300">
        {navItems.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-pink-400 transition">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
