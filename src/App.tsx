import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Cuboid from "./components/Cuboid";
import Bullets from "./components/Bullets";
import Footer from "./components/Footer";

import usePortfolio from "./use-portfolio";
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
  const { reset, moveUp, moveDown, next } = usePortfolio();

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
      <Navbar />
      <Sidebar />
      <Cuboid />
      <Bullets />
      <Footer />
    </>
  );
}

export default App;
