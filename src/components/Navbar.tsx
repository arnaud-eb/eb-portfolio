import React from "react";
import { FaBars } from "react-icons/fa";
import styled, { css } from "styled-components";

import { links } from "../constants";

import { StyledProps, IProps } from "../types";

interface NavbarProps extends IProps {
  openIndex: (e: React.MouseEvent<HTMLElement>) => void;
  openSidebar: (e: React.MouseEvent<HTMLElement>) => void;
}

const Navbar = ({ next, openIndex, openSidebar }: NavbarProps) => {
  return (
    <Wrapper next={next}>
      <div className="nav-center">
        <div className="nav-header">
          <h3 data-idx={1} onClick={openIndex} data-text="arnaud depierreux">
            eb
          </h3>
          <button className="toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map(({ id, text }) => (
            <li key={id} className={`${next === id ? "active" : ""}`}>
              <button type="button" data-idx={id} onClick={openIndex}>
                {text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav<StyledProps>(
  ({ next }) => css`
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    position: relative;
    transform: translateY(-100%);
    animation: start 0.6s linear 4s forwards;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
      height: 3.5rem;
      width: 100%;
      background-color: hsl(0, 0%, 0%, 0.1);
      box-shadow: var(--light-shadow);
      transition: all 0.3s linear 0.1s;
    }

    &:hover::before {
      transform: translateY(0%);
    }

    .nav-center {
      width: 95vw;
      max-width: var(--max-width);
    }

    .nav-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 2;
    }

    h3 {
      text-transform: uppercase;
      transition: all 0.3s linear 0.1s;
      position: relative;
      border-bottom: 1px solid transparent;
      color: ${links[next - 1].colors[1]};
      border-bottom-color: ${links[next - 1].colors[1]};
      padding-bottom: 2px;
      cursor: pointer;
    }

    h3::before {
      content: attr(data-text);
      text-transform: capitalize;
      position: absolute;
      top: 0;
      overflow: hidden;
      color: ${links[next - 1].colors[1]};
      white-space: nowrap;
      width: 0;
      transition: all 0.3s steps(17) 0.1s;
    }

    &:hover h3::before {
      width: 313.958px;
    }

    &:hover h3 {
      color: transparent;
      border-bottom-color: transparent;
    }

    .nav-links {
      display: none;
    }

    .nav-links li {
      opacity: 0.5;
      transition: var(--transition);
    }

    .nav-links button {
      text-transform: capitalize;
      font-family: "Righteous", cursive;
      font-size: 0.875rem;
      background-color: transparent;
      color: ${links[next - 1].colors[1]};
      border: none;
      cursor: pointer;
      text-shadow: var(--light-shadow);
    }

    .nav-links li:not(.active):hover {
      opacity: 0.8;
      text-shadow: var(--dark-shadow);
      transform: translateX(2px);
    }

    .nav-links li.active {
      cursor: default;
      opacity: 1;
      border-bottom: 1px solid transparent;
      border-bottom-color: ${links[next - 1].colors[1]};
      text-shadow: var(--dark-shadow);
    }

    .toggle-btn {
      background-color: transparent;
      border-color: transparent;
      color: ${links[next - 1].colors[1]};
      opacity: 0.8;
      cursor: pointer;
      z-index: 2;
      transition: var(--transition);
      font-size: 1.5rem;
    }

    .toggle-btn:hover {
      transform: scale(1.2);
      opacity: 1;
    }

    @media screen and (min-width: 800px) {
      .nav-center {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .nav-links {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        z-index: 2;
      }

      .nav-links li {
        margin-left: 3rem;
        height: 100%;
      }

      .nav-links button {
        font-size: 1rem;
        transition: var(--transition);
      }

      .toggle-btn {
        display: none;
      }
    }
  `
);

export default Navbar;
