import "./App.css";
import githubLogo from "./assets/GitHub.png";
import linkedinlogo from "./assets/Linkedinlogo.png";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="wrapper">
      <header>
        <nav>
          <div className="nav-container">
            
            <a href="#home" className="link">Home</a>
            <a href="#about" className="link">About Me</a>
            <a href="#projects" className="link">Projects</a>
            <a href="#contact" className="link">Contact Me</a>
          </div>
        </nav>
      </header>

      <main>
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        
      </main>

      <footer>
        <div className="footer-left">
          &copy; 2025 Andrea Arias
        </div>
        <div className="footer-right">
          <a href="https://github.com/andreaparias17" target="_blank" rel="noreferrer">
            <img className="icons" src={githubLogo} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/andrea-p-arias" target="_blank" rel="noreferrer">
            <img className="icons" src={linkedinlogo} alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </div>
  );
}
