import styled, { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import { links, IProject } from "../constants";
import usePortfolio from "../store/use-portfolio";

import { IProps } from "../types";

interface ProjectProps extends IProject {
  handleNext: () => void;
  handlePrev: () => void;
}

const Project = ({
  title,
  img,
  url,
  source,
  languages,
  handleNext,
  handlePrev,
}: ProjectProps) => {
  const { next } = usePortfolio();
  return (
    <Wrapper next={next}>
      <div>
        <img src={img} alt={title} />
        <div className="link">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <h5>{title}</h5>
          </a>
        </div>
      </div>
      <footer>
        {languages.map((lang, idx) => (
          <h5 key={idx}>{lang}</h5>
        ))}
      </footer>
      <button type="button" className="prev" onClick={handlePrev}>
        <IoIosArrowBack />
      </button>
      <button type="button" className="next" onClick={handleNext}>
        <IoIosArrowForward />
      </button>
      <a
        href={source}
        className="github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.article<IProps>(
  ({ next }) => css`
    position: relative;
    grid-template-rows: auto 1fr;
    flex-direction: column;
    transition: all 0.3s linear;
    background-color: var(--clr-melon);
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);

    &:hover {
      box-shadow: var(--dark-shadow);
    }

    div {
      height: 17rem;
      position: relative;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-top-left-radius: var(--radius);
      border-top-right-radius: var(--radius);
      transition: var(--transition);
    }

    .link {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: grid;
      place-items: center;
      perspective: 240px;
      a {
        background-color: var(--clr-pale-spring-bud);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--clr-puce);
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.5s;
        transform: rotateY(90deg);
        h5 {
          font-size: 1.25rem;
        }
      }

      &:hover a {
        transform: rotateY(0deg);
      }
    }

    div:hover img {
      opacity: 0.6;
    }

    footer {
      position: relative;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      align-content: center;

      h5 {
        margin: 0.3rem;
        color: var(--clr-white);
        background-color: var(--clr-puce);
        padding: 0.2rem;
        border-radius: var(--radius);
        font-family: "Montserrat", sans-serif;
        font-size: 0.675rem;
      }
    }

    .prev,
    .next {
      position: absolute;
      top: calc(50% - 1rem);
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background-color: transparent;
      svg {
        font-size: 2rem;
        color: ${links[next - 1].colors[1]};
        opacity: 0.8;
        cursor: pointer;
        transition: var(--transition);
      }

      svg:hover {
        color: ${links[next - 1].colors[1]};
        opacity: 1;
      }
    }

    .prev {
      left: -20%;
    }

    .next {
      right: -20%;
    }

    .prev:hover svg {
      transform: translateX(-0.3rem);
    }

    .next:hover svg {
      transform: translateX(0.3rem);
    }

    .github {
      position: absolute;
      bottom: 2%;
      left: 2%;
      display: grid;
      place-items: center;
      font-size: 0.5rem;
      cursor: pointer;
      border: none;
      background-color: transparent;
      color: var(--clr-puce);
    }

    @media screen and (min-width: 850px) {
      .prev,
      .next {
        display: none;
      }

      .github {
        font-size: 1rem;
      }
    }
    @media screen and (min-width: 1000px) {
      footer {
        h5 {
          font-size: 1rem;
        }
      }
    }
  `
);

export default Project;
