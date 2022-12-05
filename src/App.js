import "./App.css";
import Home from "./components/Home";
import About from "./components/AboutUs";
import Skills from "./components/Skillset";
import Projects from "./components/Projects";
import Contact from "./components/ContactUs";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <NavBar setShow={setShow} />
      <div className="flex-item">
        <div>
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
        <div className="sidebar">
          <Sidebar show={show} setShow={setShow} />
        </div>
      </div>
    </>
  );
}

export default App;
