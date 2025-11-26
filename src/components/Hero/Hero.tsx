import React from "react";
import heroPhoto from "../../assets/imagens/wes-sorriindo-party.jpg";
import "./Hero.css"; //CSS separado para animação de fundo

const Hero: React.FC = () => {
  return (
    <>
      <div className="hero hero-bg-animado">
        <div className="hero-content">
          <img src={heroPhoto} alt="Wesley Amaro" className="hero-photo" />
          <h1 className="hero-name">Wesley Amaro</h1>
          <p className="hero-title font-bolder text-8xl">
            Desenvolvedor Full-Stack com Abordagem Front-End
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
