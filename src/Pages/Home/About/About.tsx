import React from "react";
import fotoPrimaria from "../../../assets/imagens/wes-sorriindo-party.jpg";
import fotoSecundaria from "../../../assets/imagens/wes-sorriindo-party.jpg";
import AboutServices from "./AboutServices";
// import AboutCards from "./AboutCards";
import "./About.css";

const About: React.FC = () => {
  return (
    <>
      <section
        id="about"
        className="bg-animado relative w-screen min-h-screen flex items-center justify-center bg-[#131414] overflow-x-hidden"
      >
        <div className=" w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-10 py-10">
          {/* Coluna esquerda - Imagens */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <img
                src={fotoPrimaria}
                alt="Foto 1 de Wesley Amaro"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              {/* Imagens que Ficarão Sobrepostas*/}
              <img
                src={fotoSecundaria}
                alt="Foto secundária"
                className="absolute top-6 -left-6 w-32 h-32 object-cover rounded-xl shadow-lg border-4 border-white"
              />
            </div>
          </div>

          {/* Coluna direita - Texto */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-cyan-400">
              Sobre Mim
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-neutral-100">
              👋🏽Olá! Sou{" "}
              <strong>Wesley Amaro 👨🏽‍💻, Desenvolvedor Full Stack</strong> com
              foco em <strong>Front-End</strong>. Trabalho com tecnologias{" "}
              <strong>
                como React, TypeScript, HTML, CSS, Sass, Tailwind e Material UI
              </strong>{" "}
              para criar interfaces modernas e bem estruturadas.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-neutral-100">
              💫 Sou apaixonado por criar <strong>interfaces modernas,</strong>{" "}
              funcionais e responsivas. Busco constantemente unir{" "}
              <strong>
                criatividade, performance e boas práticas de código 🔏
              </strong>
              , sempre com atenção aos detalhes visuais e à experiência do{" "}
              <strong>usuário 🖥️.</strong>
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-white">
              🚀 Ajudo <strong>empresas e profissionais autônomos</strong> a
              construírem presença digital com sites{" "}
              <strong>modernos, rápidos e profissionais —</strong> que atraem
              mais clientes e passam <strong>credibilidade</strong>.
            </p>

            {/* Tecnologias Dinamicas - Array [] */}
            <div className="flex flex-wrap gap-3 pt-4">
              <AboutServices />
            </div>
          </div>
        </div>
      </section>
      {/* <AboutCards /> */}
    </>
  );
};

export default About;
