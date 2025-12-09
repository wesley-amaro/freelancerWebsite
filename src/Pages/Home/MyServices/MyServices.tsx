import React from "react";
import "./my-services.css";
import MyServicesTable from "./MyServices-Table";

const meusDados = [
  {
    id: 1,
    service: "📝 Landing Page",
    description:
      "1 página de apresentação com links, WhatsApp e redes sociais.",
    valor:
      "Olá, tenho interesse na Landing Page. Poderia me enviar um orçamento?",
  },
  {
    id: 2,
    service: "💻 Site Institucional",
    description:
      "2–4 páginas (Home, Serviços, Contato, Sobre). Design personalizado. Entre em contato comigo que te passo um orçamento",
    valor:
      "Olá, tenho interesse no Site Institucional. Poderia me enviar um orçamento?",
  },
  {
    id: 3,
    service: "⚙️ Site com Formulário/Integrações",
    description:
      "Envio de mensagens, orçamentos ou agendamentos. Entre em contato comigo que te passo um orçamento",
    valor:
      "Olá, tenho interesse em um Site com Formulário/Integrações. Poderia me enviar um orçamento?",
  },
];

const MyServices: React.FC = () => {
  return (
    <>
      <section className="w-full min-h-screen bg-white py-20 flex items-center justify-center ms-animado">
        <div className="max-w-5xl w-full px-6 bg-amber-50 bg-opacity-400 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800 py-5">
            Tabela de Serviços
          </h1>
          <p className="text-center text-gray-800 mb-10 max-w-2xl mx-auto">
            Aqui você encontra os principais serviços que ofereço, juntamente
            com uma breve descrição e informações sobre o valor.
          </p>
          <MyServicesTable dados={meusDados} />
        </div>
      </section>
    </>
  );
};

export default MyServices;
