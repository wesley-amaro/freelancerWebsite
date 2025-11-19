import React, { useState } from "react";
import {
  Atom,
  Code2,
  FileCode,
  Braces,
  Blocks,
  Terminal,
  Database,
  Palette,
  Github,
  Wind,
  Layers,
} from "lucide-react";
import "./about-cards.css";

const tecnologias = [
  { id: 1, title: "React", icon: <Atom size={90} /> },
  { id: 2, title: "TypeScript", icon: <Code2 size={90} /> },
  { id: 3, title: "HTML", icon: <FileCode size={90} /> },
  { id: 4, title: "CSS", icon: <Layers size={90} /> },
  { id: 5, title: "JavaScript", icon: <Terminal size={90} /> },
  { id: 6, title: "Java", icon: <Braces size={90} /> },
  { id: 7, title: "Python", icon: <Blocks size={90} /> },
  { id: 8, title: "Tailwind", icon: <Wind size={90} /> },
  { id: 9, title: "Material UI", icon: <Palette size={90} /> },
  { id: 10, title: "Sass", icon: <Palette size={90} /> },
  { id: 11, title: "SQL", icon: <Database size={90} /> },
  { id: 12, title: "GitHub", icon: <Github size={90} /> },
];

const AboutCards: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [speed] = useState(60); // segundos da animação base
  const [paused] = useState(false);

  return (
    <div className="relative w-full overflow-hidden py-6 select-none">
      {/* ESTEIRA */}
      <div
        className={`slider ${paused ? "paused" : ""}`}
        style={{
          animationDuration: `${Math.abs(speed)}s`,
          animationDirection: speed < 0 ? "reverse" : "normal",
        }}
      >
        {[...tecnologias, ...tecnologias, ...tecnologias].map((card, index) => (
          <div
            key={card.id + "-" + index}
            onClick={() => setSelected(card.id)}
            className={`w-48 h-64 rounded-xl shadow-lg cursor-none transition-all duration-300
              bg-[#131414] border border-neutral-700 flex flex-col items-center justify-center
              hover:scale-110 hover:shadow-[0_0_20px_#00eaff] hover:border-cyan-400
              ${
                selected === card.id
                  ? "scale-110 shadow-[0_0_25px_#00eaff]"
                  : ""
              }
            `}
          >
            <div className="text-cyan-400 mb-3">{card.icon}</div>
            <p className="text-white text-lg font-semibold mt-3">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCards;
