import React from "react";
import fotoPrimaria from "../../../assets/imagens/wes-sorriindo-party.jpg";
import fotoSecundaria from "../../../assets/imagens/wes-sorriindo-party.jpg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center bg-[#0de7fa] text-black px-6 py-16"
    >
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Coluna esquerda - Imagens */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
            <img
              src={fotoPrimaria}
              alt="Foto 1 de Wesley Amaro"
              className="w-full h-full objetc-cover rounded-2xl shadow-2xl"
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
        <div></div>
      </div>
    </section>
  );
};

export default About;
