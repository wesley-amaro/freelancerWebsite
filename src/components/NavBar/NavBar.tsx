import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import "../../theme/theme.css";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0de7fa] text-black px-4 md:px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-black font-serif">
        <Link to="/" className="hover:bg-[black] hover:text-[#0de7fa]">
          Meu Site
        </Link>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex space-x-6 font-bold text-lg ">
        <Link to="/" className="hover:bg-[black] hover:text-[#0de7fa]">
          Home
        </Link>
        <Link to="/About" className="hover:bg-[black] hover:text-[#0de7fa]">
          Sobre Mim
        </Link>
        <Link
          to="/MyServices"
          className="hover:bg-[black] hover:text-[#0de7fa]"
        >
          Serviços
        </Link>
        <Link to="/Projects" className="hover:bg-[black] hover:text-[#0de7fa]">
          Projetos
        </Link>
        <Link
          to="/FaleComigo"
          className="hover:bg-[black] hover:text-[#0de7fa]"
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
            <XMarkIcon className="h-6 w-6 text-black" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
