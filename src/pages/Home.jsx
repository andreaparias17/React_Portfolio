import { useTypewriter } from "../hooks/useRotatingText"; 
import { useRotatingText } from "../hooks/useTypewriterLoop";


export default function Home() {
  const typed = useTypewriter("Hi, Im Andrea!", 90, 150);
  const roles = [
    "Aspiring Front-End Developer",
    "Software Engineer Student",
    "Creative Technologist"
  ];
    const role = useRotatingText(roles, 2000);


  return (
    <section id="home" className="hero-container">
      <h1>{typed}
        <span className="caret" aria-hidden="true" />
      </h1>

      <div className="subtitle">
        <p><span className="role-swap" key={role}>{role}</span></p>
      </div>

      <div className="intro-2">
        <p>
          I'm a front-end developer in training with a strong eye for design and a growing passion for UI/UX.
          With a background in graphic design and years of professional experience in sales,
          I bring a unique blend of creativity, user empathy, and business savvy to every project.
        </p>
      </div>

      <div className="cta-container">
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </section>
  );
}
