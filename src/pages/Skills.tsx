import React from "react";
import styled from "styled-components";

import Sphere from "../components/Sphere";
import PageHero from "../components/PageHero";
import Bar2D from "../components/Bar2D";

import { PageProps } from "../types";

const Skills = ({ text, next }: PageProps) => {
  return (
    <section className="section">
      <PageHero text={text} next={next} />
      <Wrapper>
        <article className="skills-bar">
          <p>
            I use HTML, CSS and JavaScript. Though constantly changing, my focus
            right now is React, TypeScript and GraphQL.
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
  grid-template-columns: 1fr 1fr;
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
    display: grid;
    place-items: center;
  }

  @media screen and (min-width: 1000px) {
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
  }
`;

export default Skills;
