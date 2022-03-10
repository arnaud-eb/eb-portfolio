import { useRef, useEffect } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

import SocialIcons from "./SocialIcons";
import { links } from "../constants";
import usePortfolio from "../use-portfolio";

const Sidebar = () => {
  const { next, isSidebarOpen, closeSidebar, handleOpenIndex } = usePortfolio();
  const el = useRef<HTMLElement | null>(null);

  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.key !== "Tab" || !el.current) return;

    const focusableModalElements: NodeListOf<HTMLElement> =
      el.current.querySelectorAll("a[href], button, h3");

    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <Wrapper>
      <aside className={`${isSidebarOpen ? "show-sidebar" : ""}`} ref={el}>
        <div>
          <h3
            data-idx={1}
            onClick={handleOpenIndex}
            style={next === 1 ? { cursor: "default" } : { cursor: "pointer" }}
            tabIndex={0}
          >
            eb
          </h3>
          <button onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text }) => (
            <li key={id} className={`${next === id ? "active" : ""}`}>
              <button type="button" data-idx={id} onClick={handleOpenIndex}>
                {text}
              </button>
            </li>
          ))}
        </ul>
        <SocialIcons />
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #124559;
    opacity: 0.95;
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    transition: all 0.3s ease-out;
    transform: translate(-100%);
    z-index: -1;
    color: var(--clr-pale-spring-bud);

    & > * {
      width: 95vw;
      margin: 0 auto;
    }

    & > div:first-child {
      height: 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        text-transform: uppercase;
        border-bottom: 1px solid transparent;
        border-bottom-color: var(--clr-pale-spring-bud);
      }

      button {
        background-color: transparent;
        border-color: transparent;
        transition: var(--transition);
        cursor: pointer;
        color: var(--clr-pale-spring-bud);
        opacity: 0.8;
        font-size: 1.5rem;
      }

      button:hover {
        transform: scale(1.2);
        opacity: 1;
      }
    }

    .links {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      button {
        background-color: transparent;
        border: none;
        color: var(--clr-pale-spring-bud);
        font-family: "Righteous", cursive;
        text-transform: capitalize;
        font-size: 2rem;
      }

      li {
        opacity: 0.5;
        transition: var(--transition);
      }

      li:not(.active):hover {
        opacity: 0.8;
        transform: translateX(2px);
      }

      li:not(.active):hover button {
        cursor: pointer;
      }

      li.active {
        opacity: 1;
        cursor: default;
        border-bottom: 1px solid transparent;
        border-bottom-color: var(--clr-pale-spring-bud);
      }
    }

    .social-icons {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 4rem;
      padding-right: 3%;

      svg {
        font-size: 1rem;
        color: var(--clr-pale-spring-bud);
        opacity: 0.8;
        cursor: pointer;
        transition: var(--transition);
      }
      svg:hover {
        opacity: 1;
        transform: scale(1.2);
      }

      li {
        margin-right: 1.5%;
      }
    }
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  @media screen and (min-width: 800px) {
    aside {
      display: none;
    }
  }
`;

export default Sidebar;
