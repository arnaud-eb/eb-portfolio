import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styled, { css } from "styled-components";

import SocialIcons from "./SocialIcons";
import { links } from "../constants";
import { nextPage, prevPage } from "../utils";
import usePortfolio from "../use-portfolio";

import { IProps } from "../types";

const Footer = () => {
  const { dispatchedMoveDown, dispatchedMoveUp, next } = usePortfolio();
  return (
    <Wrapper next={next}>
      <h5>&copy; {new Date().getFullYear()} arnaud depierreux</h5>
      <div className="btn-container">
        <button
          className="up-arrow"
          onClick={dispatchedMoveUp}
          aria-label={links[prevPage(next) - 1].text}
        >
          <IoIosArrowUp />
        </button>
        <button
          className="down-arrow"
          onClick={dispatchedMoveDown}
          aria-label={links[nextPage(next) - 1].text}
        >
          <IoIosArrowDown />
        </button>
      </div>
      <SocialIcons />
    </Wrapper>
  );
};

const Wrapper = styled.footer<IProps>(
  ({ next }) => css`
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0 2rem;
    z-index: 1;
    height: 4rem;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: translateY(100%);
    animation: start 0.6s linear 4s forwards;

    h5 {
      font-size: 0.675rem;
      transition: var(--transition);
      color: ${links[next - 1].colors[1]};
      opacity: 0.8;
    }

    svg {
      font-size: 1rem;
      color: ${links[next - 1].colors[1]};
      opacity: 0.8;
      cursor: pointer;
      transition: var(--transition);
    }

    svg:hover {
      color: ${links[next - 1].colors[1]};
      opacity: 1;
    }

    .btn-container {
      display: none;
    }

    .up-arrow:hover svg {
      transform: translateY(-0.3rem);
    }

    .down-arrow:hover svg {
      transform: translateY(0.3rem);
    }

    .social-icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 10%;
    }

    .social-icons li {
      margin-right: 15%;
    }

    .social-icons li:nth-of-type(1n) svg:hover {
      transform: scale(1.2);
    }

    @media screen and (min-width: 800px) {
      justify-content: center;

      .btn-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 30%;
      }

      .down-arrow,
      .up-arrow {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
        transition: var(--transition);
      }

      svg {
        font-size: 1.5rem;
      }

      .social-icons {
        justify-content: space-evenly;
      }
    }

    @media screen and (min-width: 950px) {
      h5 {
        font-size: 0.875rem;
      }
    }
  `
);

export default Footer;
