import React from "react";
import { FaGithub, FaLinkedin, FaRProject, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-[#004299] text-black py-6 text-center border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="font-sans">
          {" "}
          Explore minhas redes, veja meus projetos e, se quiser trocar uma
          ideia, entre em contato comigo. Até breve! 😊
        </p>
      </div>
      <br />

      <div className="gap-4 text-center ">
        <a
          href="https://wa.me/551113981726612"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-950 text-center"
        >
          <FaWhatsapp className="w-5 h-5" />
        </a>
      </div>
      <div className="flex gap-4 text-center">
        <a
          href="https://www.linkedin.com/in/wesley-amaro"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-950 text-center"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
      <div className="flex gap-4 text-center">
        <a
          href="mailto:wesley.amaro.1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-950 text-center"
        >
          <MdEmail className="w-5 h-5" />
        </a>
        <a
          href="https://myportfolio-nine-taupe.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-950 text-center"
        >
          <FaRProject className="w-5 h-5" />
        </a>
      </div>
      <div className="flex gap-4 text-center">
        <a
          href="https://github.com/wesley-amaro"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-950 text-center"
        >
          <FaGithub className="w-5 h-5" />
        </a>
      </div>
      <p>
        © {new Date().getFullYear()} Wesley Amaro. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
