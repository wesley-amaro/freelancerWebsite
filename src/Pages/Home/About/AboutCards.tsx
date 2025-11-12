import React from "react";
import "../../../index.css";

const tecnologias: string[] = [
  "React",
  "TypeScript",
  "HTML",
  "CSS",
  "Java",
  "Python",
  "Tailwind",
  "Material UI",
  "Sass",
  "SQL",
  "GitHub",
];

const AboutCards: React.FC = () => {
  return (
    <section className="overflow-hidden w-full py-10 bg-gradient-to-r from-[#08a1af] via-[#0de7fa] to-[#08a1af] relative">
      <div className="flex animate-scroll gap-8">
        {tecnologias.concat(tecnologias).map((tech, index) => (
          <div
            key={index}
            className="rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white font-semibold px-8 py-4 shadow-[0_0_15px_rgba(73, 240, 255, 0.6)] border border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
          >
            <span className="relative z-10">{tech}</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 via-transparent to-white/10 animate-rotate-glow blur-md" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCards;
