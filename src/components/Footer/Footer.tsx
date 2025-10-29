import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#004299] text-white py-8 px-4 border-t border-gray-700">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Texto principal */}
        <p className="font-sans max-w-2xl sm:text-base leading-relaxed font-bold">
          Explore minhas redes, veja meus projetos e, se quiser trocar uma
          ideia, entre em contato comigo. Até breve! 😊
        </p>

        {/* Ícones das redes */}
        <div className="flex flex-wrap justify-center gap-6 mt-2">
          <a
            href="https://wa.me/5513981726612"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition-transform transform hover:scale-110 hover:text-green-400"
          >
            <FaWhatsapp className="w-7 h-7" />
          </a>

          <a
            href="https://www.linkedin.com/in/wesley-amaro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className="transition-transform transform hover:scale-110 hover:text-blue-700"
          >
            <FaLinkedin className="w-7 h-7" />
          </a>

          <a
            href="mailto:wesley.amaro.1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="E-mail"
            className="transition-transform transform hover:scale-110 hover:text-red-800"
          >
            <MdEmail className="w-7 h-7" />
          </a>
          <a
            href="https://myportfolio-nine-taupe.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
            className="transition-transform transform hover:scale-110 hover:text-purple-950"
          >
            <FaDiagramProject className="w-7 h-7" />
          </a>

          <a
            href="https://github.com/wesley-amaro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="transition-transform transform hover:scale-110 hover:text-black"
          >
            <FaGithub className="w-7 h-7" />
          </a>
        </div>

        {/* Direitos autorais */}
        <p className="text-xs sm:text-sm mt-4 opacity-80">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Wesley Amaro</span>. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
