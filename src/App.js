import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [showUp, setShowUp] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 600) {
      setShowUp(true);
      console.log(showUp);
    } else {
      setShowUp(false);
      console.log(showUp);
    }
  });

  return (
    <div className={`${darkMode ? "dark bg-[#000] text-white" : ""} relative`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {showUp && (
        <div className="shadow-lg fixed bottom-[50px] right-[50px] flex items-center justify-center text-white bg-red-600 rounded-full z-50 text-3xl h-[50px] w-[50px]">
          <AiOutlineArrowUp />
        </div>
      )}
    </div>
  );
}

export default App;
