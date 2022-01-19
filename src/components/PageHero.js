import React from "react";
import styled, { css } from "styled-components";
import { links } from "../constants";

const PageHero = ({ text, next }) => {
  return (
    <Wrapper next={next}>
      <h3>{text}</h3>
    </Wrapper>
  );
};

const Wrapper = styled.section(
  ({ next }) => css`
    h3 {
      transition: var(--transition);
      color: ${next > 1 && links[next - 1].colors[2]};
    }
  `
);

export default PageHero;
