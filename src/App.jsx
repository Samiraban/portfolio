import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import GitHubRepos from "./components/GitHubRepos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <GitHubRepos />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <Toaster position="bottom-center" />
    </>
  );
}