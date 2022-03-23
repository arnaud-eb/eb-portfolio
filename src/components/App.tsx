import { useEffect } from "react";

import {
  NavbarContainer,
  SidebarContainer,
  CuboidContainer,
  BulletsContainer,
  FooterContainer,
} from "../containers";

import { IState } from "../types";

type AppPropsType = Pick<IState, "next"> & {
  reset: () => void;
  moveUp: () => void;
  moveDown: () => void;
};

function App({ reset, moveUp, moveDown, next }: AppPropsType) {
  useEffect(() => {
    const id = setTimeout(() => {
      reset();
    }, 600);
    return () => {
      clearTimeout(id);
    };
  }, [next]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "ArrowUp") {
        moveUp();
      }
      if (e.code === "ArrowDown") {
        moveDown();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);

  useEffect(() => {
    const handler = (e: WheelEvent) => {
      if (e.deltaY < 0) {
        moveUp();
      }
      if (e.deltaY > 0) {
        moveDown();
      }
    };
    window.addEventListener("wheel", handler);
    return () => {
      window.removeEventListener("wheel", handler);
    };
  }, []);

  return (
    <>
      <NavbarContainer />
      <SidebarContainer />
      <CuboidContainer />
      <BulletsContainer />
      <FooterContainer />
    </>
  );
}

export default App;
