import ProjectCard from "../component/ProjectCard";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Project 1",
    tech: "HTML | CSS | JavaScript",
    description: "Project summary.",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Project 2",
    tech: "React | Some library",
    description: "Project summary.",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Project 3",
    tech: "React | Firebase",
    description: "Project summary.",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Project 4",
    tech: "React | Firebase",
    description: "Another exciting one here.",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Project 5",
    tech: "React | Firebase",
    description: "Another exciting one here.",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Project 6",
    tech: "React | Firebase",
    description: "Another exciting one here.",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Project 7",
    tech: "React | Firebase",
    description: "Another exciting one here.",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Project 8",
    tech: "React | Firebase",
    description: "Another exciting one here.",
    demoLink: "#",
    githubLink: "#"
  }
  
];

function getVisibleCount() {
  const w = window.innerWidth;
  if (w <= 600) return 1;
  if (w <= 900) return 2;
  return 4; // desktop
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(() =>
    typeof window !== "undefined" ? getVisibleCount() : 4
  );

  // Update visibleCount on resize
  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Build the visible slice (wrap around)
  const visibleProjects = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleProjects.push(projects[(currentIndex + i) % projects.length]);
  }

  const showNext = () => {
    setCurrentIndex((prev) => (prev + visibleCount) % projects.length);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - visibleCount + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section">
      <div className="projects-hero">
        <h1>Projects</h1>
        <p>A curated collection of the things I've built — each one a learning step forward.</p>
      </div>

      {/* grid/flex container — your CSS already supports both */}
      <div className="projects-container">
        {visibleProjects.map((proj, i) => (
          <ProjectCard key={`${proj.title}-${i}`} {...proj} />
        ))}
      </div>

      <div className="projects-carousel-buttons">
        <button className="carousel-button" onClick={showPrev} aria-label="Previous projects">
          Prev
        </button>
        <button className="carousel-button" onClick={showNext} aria-label="Next projects">
          Next
        </button>
      </div>
    </section>
  );
}
