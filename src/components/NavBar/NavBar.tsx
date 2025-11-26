import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./navBar.css";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navBar-bg-animado text-white px-4 md:px-6 py-4 flex items-center justify-between overflow-visible font-serif relative z-50">
      <div className="text-4xl font-semibold">
        <Link
          to="/"
          className="inline-block hover:bg-[#180164] hover:text-[#ffffff] px-3 py-1 rounded-full duration-500 ease-out transition-transform hover:scale-[1.12] hover:drop-shadow-xl"
        >
          Home
        </Link>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex space-x-6 font-semibold text-2xl">
        {[
          { to: "/About", label: "Sobre Mim" },
          { to: "/MyServices", label: "Serviços" },
          { to: "/Projects", label: "Projetos" },
          { to: "/FaleComigo", label: "Fale Comigo" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="inline-block hover:bg-[#180164] hover:text-[#ffffff] px-3 py-1 rounded-full duration-500 ease-out transition-transform hover:scale-[1.12] hover:drop-shadow-xl"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburguer*/}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? (
            <XMarkIcon className="h-8 w-8 text-white" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-white" />
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0d0136]/50 backdrop-blur-md flex flex-col items-center space-y-6 py-6 md:hidden text-2xl">
          {[
            { to: "/About", label: "Sobre Mim" },
            { to: "/MyServices", label: "Serviços" },
            { to: "/Projects", label: "Projetos" },
            { to: "/FaleComigo", label: "Fale Comigo" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl w-[80%] text-center
              transition-all duration-300 ease-in-out
              hover:bg-[#180164]
              hover:scale-[1.08]
              hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)]
              hover:text-white inline-block"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
