import styled from "styled-components";

import Sphere from "../components/Sphere";
import PageHero from "../components/PageHero";
import Bar2D from "../components/Bar2D";

import { PageProps } from "../constants";

const Skills = ({ text }: PageProps) => {
  return (
    <section className="section">
      <PageHero text={text} />
      <Wrapper>
        <article className="skills-bar">
          <p>
            I use HTML, CSS and JavaScript. Though constantly changing, my focus
            right now is React, TypeScript and Node.js.
          </p>
          <Bar2D />
        </article>
        <article className="word-sphere">
          <Sphere />
        </article>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  height: 90%;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;

  .skills-bar,
  .word-sphere {
    width: 100%;
    height: 100%;
  }

  .skills-bar {
    display: grid;
  }

  .skills-bar p {
    display: none;
  }

  .word-sphere {
    background-color: transparent;
    display: none;
    place-items: center;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    
    .skills-bar {
      grid-template-rows: auto 1fr;
    }

    .skills-bar p {
      display: block;
      font-size: 1rem;
      padding: 0.5rem 1rem 0.5rem 2rem;
      color: var(--clr-black);
      font-size: 1rem;
      font-family: "Montserrat", sans-serif;
      text-shadow: var(--dark-shadow);
    }

    .word-sphere {
      display: grid;
    }
  }
`;

export default Skills;
