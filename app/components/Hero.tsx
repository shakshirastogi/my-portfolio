"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const fullText = "Hi, I’m Sakshi Rastogi";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100; // speed of typing
    const pauseTime = 1500; // pause before deleting

    const interval = setInterval(() => {
      if (!isDeleting) {
        // typing
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // deleting
        setText(fullText.slice(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [index, isDeleting, fullText]);

  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-10 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          <span className="text-pink-500">{text}</span>
          <span className="blinking-cursor">|</span>
        </h2>

        <p className="mt-4 text-gray-400 text-lg max-w-xl">
          Full Stack Developer (MERN) with 3.8+ years of hands-on experience in designing, developing, and deploying scalable web applications using React.js, Next.js, Node.js, and PostgreSQL.
        </p>

        {/* Buttons */}
        <div className="flex mt-6 gap-4">
          <a
            href="#projects"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            View My Work
          </a>

          <a
            href="/Resume.pdf"
            download
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-500 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-10 md:mt-0 md:ml-12"
      >
        <div className="w-[300px] h-[300px] relative rounded-full overflow-hidden border-4 border-pink-500 shadow-lg">
          <Image
            src="/sakshi_rastogi.jpg"
            alt="Sakshi Rastogi"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 0.5ch;
          background-color: pink;
          margin-left: 2px;
          animation: blink 0.7s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
