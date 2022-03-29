import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import PageHero from "../components/PageHero";
import Project from "../components/Project";
import { projects, IProject } from "../constants";

import { PageProps } from "../constants";

const Projects = ({ text }: PageProps) => {
  const projectRef = useRef<IProject[]>();
  const [proj, setProj] = useState(projects);
  projectRef.current = proj;

  const handlePrev = () => {
    if (!projectRef.current) return;
    const last = projectRef.current[projectRef.current.length - 1];
    const newProj = [last].concat(projectRef.current).slice(0, -1);
    setProj(newProj);
  };

  const handleNext = () => {
    if (!projectRef.current) return;
    const first = projectRef.current[0];
    const newProj = projectRef.current.slice(1).concat(first);
    setProj(newProj);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft") {
        handlePrev();
      }
      if (e.code === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);

  return (
    <section className="section">
      <PageHero text={text} />
      <Wrapper>
        {projectRef.current.map((project) => (
          <Project
            key={project.id}
            {...project}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        ))}
      </Wrapper>
    </section>
  );
};

const opening = keyframes`
  to {
    transform: translateY(0%);
  }
`;

const Wrapper = styled.div`
  height: 90%;
  display: grid;
  align-items: stretch;
  grid-column-gap: 1.5rem;
  padding: 2rem 25%;

  article:nth-child(1) {
    display: grid;
  }

  article:nth-child(2),
  article:nth-child(3) {
    transform: translateY(-10%);
    animation: ${opening} 0.3s ease-out 0.6s forwards;
    display: none;
  }

  article:nth-child(3) {
    animation-duration: 0.6s;
  }

  @media screen and (min-width: 850px) {
    article:nth-child(2),
    article:nth-child(3) {
      display: grid;
    }

    grid-template-columns: repeat(3, minmax(215px, 1fr));
    padding: 2rem 1rem;
  }
`;

export default Projects;
