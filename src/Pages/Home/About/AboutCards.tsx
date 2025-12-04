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
  { id: 1, title: "React", icon: <Atom size={60} /> },
  { id: 2, title: "TypeScript", icon: <Code2 size={60} /> },
  { id: 3, title: "HTML", icon: <FileCode size={60} /> },
  { id: 4, title: "CSS", icon: <Layers size={60} /> },
  { id: 5, title: "JavaScript", icon: <Terminal size={60} /> },
  { id: 6, title: "Java", icon: <Braces size={60} /> },
  { id: 7, title: "Python", icon: <Blocks size={60} /> },
  { id: 8, title: "Tailwind", icon: <Wind size={60} /> },
  { id: 9, title: "Material UI", icon: <Palette size={60} /> },
  { id: 10, title: "Sass", icon: <Palette size={60} /> },
  { id: 11, title: "SQL", icon: <Database size={60} /> },
  { id: 12, title: "GitHub", icon: <Github size={60} /> },
];

const AboutCards: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [paused] = useState(false);

  return (
    <div className="cards-bg-animado select-none">
      <div className={`slider ${paused ? "paused" : ""}`}>
        {[...tecnologias, ...tecnologias].map((card, index) => (
          <div
            key={card.id + "-" + index}
            onClick={() => setSelected(card.id)}
            className={`card ${selected === card.id ? "selected" : ""}`}
          >
            <div className="card-icon">{card.icon}</div>
            <p className="card-title">{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCards;
