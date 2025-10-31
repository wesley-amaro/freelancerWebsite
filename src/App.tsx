import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MyServices from "./Pages/Home/MyServices/MyServices";
import Projects from "./Pages/Home/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
// import "./theme/theme.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <main className="flex-1 px-4 md:px-6">
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            {/* // Hero.tsx ESTÁ RENDERIZADO DENTRO DO Home.tsx  */}
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
