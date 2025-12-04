import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MyServices from "./Pages/Home/MyServices/MyServices";
import Projects from "./Pages/Home/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About/About";
import AboutCards from "./Pages/Home/About/AboutCards";

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            {/* // Hero.tsx ESTÁ RENDERIZADO DENTRO DO Home.tsx  */}
            <Route
              path="About"
              element={
                <div className="flex flex-col items-center gap w-full overflow-hidden">
                  <About />
                  <AboutCards />
                </div>
              }
            />
            <Route path="/MyServices" element={<MyServices />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
