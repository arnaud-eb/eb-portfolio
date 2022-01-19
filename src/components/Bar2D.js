import React from "react";
import styled, { css, keyframes } from "styled-components";
import { skills } from "../constants";

const Bar2D = () => {
  return (
    <Wrapper>
      {skills.map(({ id, skill, percentage }) => {
        return (
          <article key={id}>
            <h5>{skill}</h5>
            <Div percentage={percentage} />
          </article>
        );
      })}
    </Wrapper>
  );
};

export default Bar2D;

const Wrapper = styled.section`
  background-color: var(--clr-melon);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2% 5% 2%;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
`;

const grow = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const Div = styled.div(
  ({ percentage }) => css`
    position: relative;
    background: var(--clr-puce);
    height: 0.01em;
    width: 95%;

    &::before {
      content: attr(data-percentage);
      position: absolute;
      top: 0;
      left: 0;
      background: var(--clr-pale-spring-bud);
      height: 0.01em;
      max-width: ${percentage}%;
      animation: ${grow} 3s ease-in-out 0.6s forwards;
    }
  `
);
