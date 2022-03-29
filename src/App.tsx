import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Cuboid from "./components/Cuboid";
import Bullets from "./components/Bullets";
import Footer from "./components/Footer";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import { selectCuboid, reset, moveUp, moveDown } from "./store/cuboidSlice";

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
  const { next } = useAppSelector(selectCuboid);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(reset());
    }, 600);
    return () => {
      clearTimeout(id);
    };
  }, [next, dispatch]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "ArrowUp") {
        dispatch(moveUp());
      }
      if (e.code === "ArrowDown") {
        dispatch(moveDown());
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [dispatch]);

  useEffect(() => {
    const handler = (e: WheelEvent) => {
      if (e.deltaY < 0) {
        dispatch(moveUp());
      }
      if (e.deltaY > 0) {
        dispatch(moveDown());
      }
    };
    window.addEventListener("wheel", handler);
    return () => {
      window.removeEventListener("wheel", handler);
    };
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Cuboid />
      <Bullets />
      <Footer />
    </>
  );
}

export default App;
