import React from "react";
import "./Projects.css";
import "./projects-background.css";
// import fotoTeste from "../../../assets/imagens/wes-sorriindo-party.jpg";
import SistemaTicket from "../../../assets/imagens-projects/sistema-controle-tickets.png";
import Portfolio from "../../../assets/imagens-projects/MyPortfolio.png";
import TaskList from "../../../assets/imagens-projects/ListaDeTarefas.png";
import SistemaEstoque from "../../../assets/imagens-projects/sistema-controle-estoques.png";
import FotoGitHub from "../../../assets/imagens-projects/GitHubProfile.png";

interface Project {
  name: string;
  image: string;
  tools: string[];
  link?: string;
  status: string;
}

const projects: Project[] = [
  {
    name: "Sistema de Controle de Tickets",
    image: SistemaTicket,
    tools: [
      "React",
      "TypeScript",
      "Material UI",
      "Python",
      "Java",
      "SQL",
      "API Rest",
      "CRUD",
    ],
    link: "",
    status: "Concluido",
  },
  {
    name: "Plataforma de Portfólio Pessoal",
    image: Portfolio,
    tools: [
      "React",
      "TypeScript",
      "Material UI",
      "Vite",
      "Python (FastAPI)",
      "SQLite",
    ],
    link: "https://myportfolio-nine-taupe.vercel.app",
    status: "Concluido",
  },
  {
    name: "Portfólio Github",
    image: FotoGitHub,
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/wesley-amaro/pohawesleyp",
    status: "Concluido",
  },
  {
    name: "Projeto de Sistema de Controle de Estoque",
    image: SistemaEstoque,
    tools: ["React", "Java (Spring Boot)", "SQL", "API Rest"],
    link: "",
    status: "Concluído",
  },
  {
    name: "Plataforma de Lista de Tarefas",
    image: TaskList,
    tools: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/wesley-amaro/listaDeTarefas-react-tailwind",
    status: "Concluído",
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
