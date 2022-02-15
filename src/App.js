import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Skill from "./pages/Skill";
import Portfolio from "./pages/Portfolio";
import Tistimonal from "./pages/Tistimonal";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/tistimonal" element={<Tistimonal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
