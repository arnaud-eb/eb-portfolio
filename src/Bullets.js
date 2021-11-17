import React from "react";
import styled, { css } from "styled-components";
import { links } from "./constants";

const Bullets = ({ next, openIndex }) => {
  return (
    <Wrapper next={next}>
      {links.map(({ id, text }) => (
        <button
          type="button"
          data-idx={id}
          onClick={openIndex}
          key={id}
          className={`${next === id ? "active" : ""}`}
          aria-label={text}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div(
  ({ next }) => css`
    position: absolute;
    top: 40%;
    right: 2%;
    display: flex;
    flex-direction: column;
    transform: translateX(300%);
    animation: start 0.6s linear 4s forwards;

    button {
      opacity: 0.5;
      margin: 5px 0;
      width: 10px;
      height: 10px;
      border: none;
      border-radius: 50%;
      background-color: ${links[next - 1].colors[1]};
      box-shadow: var(--light-shadow);
      cursor: pointer;
      transition: var(--transition);
    }

    button:hover {
      opacity: 0.8;
      box-shadow: var(--dark-shadow);
    }

    button.active {
      cursor: default;
      opacity: 1;
      box-shadow: var(--dark-shadow);
      position: relative;
    }

    button.active::before {
      content: "";
      position: absolute;
      top: 50%;
      right: -65%;
      width: 0.2rem;
      height: 1px;
      background-color: ${links[next - 1].colors[1]};
    }

    @media screen and (min-width: 800px) {
      button {
        width: 15px;
        height: 15px;
      }

      button.active::before {
        width: 0.5rem;
        right: -100%;
      }
    }
  `
);

export default Bullets;
