import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "./About/About";
import AboutCards from "./About/AboutCards";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutCards />
      <About />
    </>
  );
};

export default Home;
