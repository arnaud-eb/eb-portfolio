import React, { useEffect, useReducer } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Cuboid from "./components/Cuboid";
import Bullets from "./components/Bullets";
import Footer from "./components/Footer";
import reducer from "./reducer";

import "./App.css";

export const initialState = {
  isSidebarOpen: false,
  current: 1,
  next: 1,
  outClass: "",
  inClass: "",
  onGoing: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openIndex = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    if (e.target.dataset.idx) {
      dispatch({ type: "OPEN_INDEX", payload: +e.target.dataset.idx });
    }
  };

  const moveUp = () => {
    dispatch({
      type: "TRANS",
      payload: { direction: "up" },
    });
  };

  const moveDown = () => {
    dispatch({
      type: "TRANS",
      payload: { direction: "down" },
    });
  };

  const openSidebar = () => {
    dispatch({ type: "SIDEBAR_OPEN" });
  };

  const closeSidebar = () => {
    dispatch({ type: "SIDEBAR_CLOSE" });
  };

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch({ type: "RESET" });
    }, 600);
    return () => {
      clearTimeout(id);
    };
  }, [state.next]);

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

  const value = {
    ...state,
    openIndex,
    moveUp,
    moveDown,
    openSidebar,
    closeSidebar,
  };

  return (
    <>
      <Navbar {...value} />
      <Sidebar {...value} />
      <Cuboid {...value} />
      <Bullets {...value} />
      <Footer {...value} />
    </>
  );
}

export default App;
