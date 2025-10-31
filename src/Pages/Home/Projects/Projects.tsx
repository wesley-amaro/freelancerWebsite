import React from "react";
import "./Projects.css";
import fotoTeste from "../../../assets/imagens/wes-sorriindo-party.jpg";

interface Project {
  name: string;
  image: string;
  tools: string[];
  link?: string;
  status: string;
}

const projects: Project[] = [
  {
    name: "Portfólio Pessoal",
    image: fotoTeste,
    tools: ["React", "TypeScript", "Material UI", "Python", "SQL", "FastAPI"],
    link: "https://myportfolio-nine-taupe.vercel.app",
    status: "Concluido",
  },
  {
    name: "Lista de Tarefas",
    image: fotoTeste,
    tools: ["React", "TypeScript", "Material UI"],
    link: "https://github.com/wesley-amaro/listaDeTarefas-react-tailwind",
    status: "Concluido",
  },
  {
    name: "Portfólio Github",
    image: fotoTeste,
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/wesley-amaro/pohawesleyp",
    status: "Concluido",
  },
  {
    name: "Projeto Estudantil: Site HTML Puro",
    image: fotoTeste,
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/wesley-amaro/projeto-aula-google-glass",
    status: "Concluído",
  },
  {
    name: "Projeto Pessoal: Site Familiar",
    image: fotoTeste,
    tools: ["React", "TypeScript", "Sass", "Java", "SQL"],
    link: "https://github.com/wesley-amaro/my-family-app",
    status: "Em Andamento",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <h1 className="projects-title">🚀 Conheça Meus Projetos 👇🏽</h1>
      <div className="projects-slider">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-inner">
              <div className="project-front">
                <img
                  src={project.image}
                  alt={project.name}
                  className="projetc-image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
