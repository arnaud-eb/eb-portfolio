import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Cuboid from "./components/Cuboid";
import Bullets from "./components/Bullets";
import Footer from "./components/Footer";

import usePortfolio from "./store/use-portfolio";

function App() {
  const { dispatchedReset, dispatchedMoveUp, dispatchedMoveDown, next } =
    usePortfolio();

  useEffect(() => {
    const id = setTimeout(() => {
      dispatchedReset();
    }, 600);
    return () => {
      clearTimeout(id);
    };
  }, [next, dispatchedReset]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "ArrowUp") {
        dispatchedMoveUp();
      }
      if (e.code === "ArrowDown") {
        dispatchedMoveDown();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [dispatchedMoveUp, dispatchedMoveDown]);

  useEffect(() => {
    const handler = (e: WheelEvent) => {
      if (e.deltaY < 0) {
        dispatchedMoveUp();
      }
      if (e.deltaY > 0) {
        dispatchedMoveDown();
      }
    };
    window.addEventListener("wheel", handler);
    return () => {
      window.removeEventListener("wheel", handler);
    };
  }, [dispatchedMoveUp, dispatchedMoveDown]);

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
