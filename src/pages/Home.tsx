import styled, { keyframes } from "styled-components";

import usePortfolio from "../store/use-portfolio";

const Home = () => {
  const { handleOpenIndex } = usePortfolio();
  return (
    <Wrapper>
      <div className="splash">
        <div className="splash_logo">EB</div>
        <div className="splash_svg">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>
        <div className="splash_minimize">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>
      </div>
      <div className="text">
        <h1>Hi there!</h1>
        <h1>I'm Arnaud, web developer.</h1>
        <h2>
          This portfolio is a glimpse at my experiences <br />
          as I learn new things, fail spectacularly <br />
          and make cool stuff along the way.
        </h2>
        <button type="button" data-idx={2} onClick={handleOpenIndex}>
          More
        </button>
      </div>
    </Wrapper>
  );
};

const type = keyframes`
  0% {
    width: 0;
  }
`;

const type2 = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 0;
  }
  100% {
    width: 100;
  }
`;

const on = keyframes`
  100% {
    opacity: 1;
  }
`;

const off = keyframes`
  100% {
    opacity: 0;
  }
`;

const logo = keyframes`
  100% {
    color: var(--clr-black);
  }
`;

const expand = keyframes`
  0% {}
  25% {
    clip-path: polygon(0% 0%, 55% 40%, 55% 60%, 45% 60%);
    fill: var(--clr-white);
  }
  50% {
    clip-path: polygon(0% 0%, 100% 0%, 55% 60%, 45% 60%);
    fill: var(--clr-melon);
  }
  75% {
    clip-path: polygon(0% 0%, 100% 0%, 55% 60%, 0% 100%);
    fill: var(--clr-white);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    fill: var(--clr-melon);
  }
`;

const scale = keyframes`
  100% {
    clip-path: polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%);
  }
`;

const hide = keyframes`
  100% {
    fill: transparent;
  }
`;

const Wrapper = styled.section`
  .text {
    opacity: 0;
    position: absolute;
    z-index: 7;
    text-align: left;
    margin: -50px 0 0 -150px;
    width: auto;
    height: 100px;
    top: 30%;
    left: 25%;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--clr-black);

    h1,
    h2 {
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      animation: ${type} 0.3s steps(60, end) 3.7s;
      text-transform: none;
      text-shadow: var(--light-shadow);
    }

    h1 {
      color: var(--clr-light-blue-2);
    }

    h1:nth-of-type(2),
    h2 {
      animation: ${type2} 0.5s steps(60, end) 3.7s;
    }

    h2 {
      font-family: "Montserrat", sans-serif;
      font-size: 2rem;
      padding: 0.2em 0;
      font-weight: 400;
      line-height: 1.1;
    }

    animation: ${on} 0.6s ease-in-out 3.7s forwards;

    button {
      border: 0;
      opacity: 0;
      background: var(--clr-puce);
      color: var(--clr-melon);
      border: 1px solid transparent;
      border-color: var(--clr-puce);
      border-radius: var(--radius);
      letter-spacing: 2px;
      padding: 0.5rem 2.5rem;
      box-shadow: var(--light-shadow);
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      cursor: pointer;
      transition: color 0.5s, background-color 0.5s;
      animation: ${on} 0.6s ease-in-out 4s forwards;
      transition: transform 0.3s linear;
      &:hover {
        background: var(--clr-banana-mania);
        color: var(--clr-black);
        border: none;
        transform: translateX(2px);
        box-shadow: var(--dark-shadow);
      }
    }
  }

  .splash {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    overflow: hidden;
    &_logo {
      position: absolute;
      margin: -15px 0 0 -25px;
      top: 50vh;
      z-index: 5;
      left: 50vw;
      width: 50px;
      text-align: center;
      height: 30px;
      font-size: 26px;
      font-weight: 600;
      color: var(--clr-puce);
      opacity: 1;
      will-change: opacity;
      animation: ${logo} 0.3s ease-in 1.5s forwards,
        ${off} 0.6s ease-in-out 3.2s forwards;
      &::before {
        display: block;
        position: absolute;
        left: 15px;
        bottom: -15px;
        width: 20px;
        height: 1px;
        background-color: var(--clr-black);
        content: "";
      }
      &::after {
        display: block;
        position: absolute;
        left: 15px;
        top: -5px;
        width: 20px;
        height: 1px;
        background-color: var(--clr-black);
        content: "";
        will-change: width;
      }
    }
    &_svg {
      position: relative;
      margin: auto;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      bottom: 0;
      right: 0;
      svg {
        width: 100%;
        height: 100%;
        backface-visibility: visible;
        rect {
          width: 100%;
          height: 100%;
          fill: var(--clr-melon);
          stroke: 0;
          clip-path: polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%);
          animation: ${expand} 0.7s ease-in forwards 2.7s;
        }
      }
    }
    &_minimize {
      position: absolute;
      margin: auto;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 4;
      svg {
        width: 100%;
        height: 100%;
        backface-visibility: visible;
        rect {
          width: 100%;
          height: 100%;
          fill: var(--clr-light-blue);
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          animation: ${scale} 0.2s ease-out forwards 1s,
            ${hide} 1.3s ease-out forwards 1.2s;
        }
      }
    }
  }

  @media screen and (max-width: 850px) {
    .text {
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 660px) {
    .text {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1rem;
      }
      padding-left: 3.5rem;
    }
  }
`;

export default Home;
