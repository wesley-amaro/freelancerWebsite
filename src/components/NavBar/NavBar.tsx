import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./navBar.css";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navBar-bg-animado text-white px-4 md:px-6 py-4 flex items-end justify-between overflow-hidden font-serif">
      <div className="text-4xl font-semibold">
        <Link
          to="/"
          className="hover:bg-[#2a05a4] hover:text-[#ffffff] px-3 py-1 rounded-full transition-all duration-400 ease-out hover:scale-[5.0] hover:-translate-y-[2px]"
        >
          Home
        </Link>
      </div>

      {/* Desktop links */}
      <div className=" md:flex space-x-6 font-semibold text-2xl">
        <Link
          to="/About"
          className="hover:bg-[#2a05a4] hover:text-[#ffffff] px-3 py-1 rounded-full transition-all duration-400 ease-out"
        >
          Sobre Mim
        </Link>
        <Link
          to="/MyServices"
          className="hover:bg-[#2a05a4] hover:text-[#ffffff] px-3 py-1 rounded-full transition-all duration-400 ease-out"
        >
          Serviços
        </Link>
        <Link
          to="/Projects"
          className="hover:bg-[#2a05a4] hover:text-[#ffffff] px-3 py-1 rounded-full transition-all duration-400 ease-out"
        >
          Projetos
        </Link>
        <Link
          to="/FaleComigo"
          className="hover:bg-[#2a05a4] hover:text-[#ffffff] px-3 py-1 rounded-full transition-all duration-400 ease-out"
        >
          Fale Comigo
        </Link>
      </div>

      {/* Mobile Hamburguer*/}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
