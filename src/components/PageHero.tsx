import React from "react";
import styled, { css } from "styled-components";

import { links } from "../constants";

import { IProps } from "../types";

interface PageHeroProps extends IProps {
  text: string;
}

const PageHero = ({ text, next }: PageHeroProps) => {
  return (
    <Wrapper next={next}>
      <h3>{text}</h3>
    </Wrapper>
  );
};

const Wrapper = styled.section<IProps>(
  ({ next }) => css`
    h3 {
      transition: var(--transition);
      color: ${next > 1 && links[next - 1].colors[2]};
    }
  `
);

export default PageHero;
