import React, { useEffect, useReducer } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Cuboid from "./Cuboid";
import Bullets from "./Bullets";
import Footer from "./Footer";
import reducer from "./reducer";
import {
  TRANS,
  OPEN_INDEX,
  RESET,
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
} from "./actions";
import "./App.css";

const initialState = {
  isSidebarOpen: false,
  current: 1,
  next: 1,
  outClass: false,
  inClass: false,
  onGoing: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openIndex = (e) => {
    dispatch({ type: OPEN_INDEX, payload: +e.target.dataset.idx });
  };

  const moveUp = () => {
    dispatch({
      type: TRANS,
      payload: { direction: "up" },
    });
  };

  const moveDown = () => {
    dispatch({
      type: TRANS,
      payload: { direction: "down" },
    });
  };

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch({ type: RESET });
    }, 600);
    return () => {
      clearTimeout(id);
    };
  }, [state.next]);

  useEffect(() => {
    const event = window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowUp") {
        moveUp();
      }
      if (e.code === "ArrowDown") {
        moveDown();
      }
    });
    return () => {
      window.removeEventListener("keydown", event);
    };
  }, []);

  useEffect(() => {
    const event = window.addEventListener("wheel", (e) => {
      if (e.deltaY < 0) {
        moveUp();
      }
      if (e.deltaY > 0) {
        moveDown();
      }
    });
    return () => {
      window.removeEventListener("wheel", event);
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
