import React from "react";
import styled from "styled-components";
import Sphere from "../Sphere";
import PageHero from "../PageHero";
import Bar2D from "../Bar2D";

const Skills = ({ text, next }) => {
  return (
    <section className="section">
      <PageHero text={text} next={next} />
      <Wrapper>
        <article className="skills-bar">
          <p>
            I use HTML, CSS and JavaScript. Though constantly changing, my focus
            right now is React, Node and Express.
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

  .skills-bar section {
    /* background-color: green; */
  }

  .word-sphere {
    background-color: transparent;
    display: grid;
    place-items: center;
  }

  @media screen and (min-width: 1000px) {
    .skills-bar {
      /* display: block;
      background-color: black; */
      grid-template-rows: auto 1fr;
    }

    .skills-bar p {
      display: block;
      /* background-color: red; */
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