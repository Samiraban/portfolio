import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import CurrentProject from "./components/sections/CurrentProject";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CurrentProject />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;