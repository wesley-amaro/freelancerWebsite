import React from "react";

const AboutServices: React.FC = () => {
  return (
    <section className="services">
      <div>
        <h2 className="font-bold text-base sm:text-lg leading-relaxed text-cyan-400">
          💻 O que eu faço?
        </h2>

        <div>
          <p className="text-base sm:text-lg leading-relaxed text-neutral-200">
            {" "}
            Crio sites e landing pages personalizadas que ajudam negócios a:{" "}
          </p>

          <br />

          <p className="font-bold font-sans text-base sm:text-lg leading-relaxed text-neutral-200">
            📈 Atrair mais clientes online <br />
            💬 Facilitar o contato com clientes via WhatsApp <br />
            🧠 Transmitir mais confiança e profissionalismo <br />
            ⚙️ Ter uma presença digital moderna e responsiva <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
