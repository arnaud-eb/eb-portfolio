import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Cuboid from "./components/Cuboid";
import Bullets from "./components/Bullets";
import Footer from "./components/Footer";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import { selectCuboid, reset, moveUp, moveDown } from "./store/cuboidSlice";
import store from "./store";

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
      const threshold = 10;
      const { onGoing } = selectCuboid(store.getState());

      if (onGoing || Math.abs(e.deltaY) < threshold) {
        return;
      }

      if (e.deltaY < -threshold) {
        dispatch(moveUp());
      } else if (e.deltaY > threshold) {
        dispatch(moveDown());
      }
    };
    window.addEventListener("wheel", handler, { passive: true });
    return () => {
      window.removeEventListener("wheel", handler);
    };
  }, [dispatch]);

  useEffect(() => {
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const threshold = 50;
      const { onGoing } = selectCuboid(store.getState());

      if (onGoing) {
        return;
      }

      const endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;

      if (Math.abs(deltaY) < threshold) {
        return;
      }

      if (deltaY > threshold) {
        dispatch(moveDown());
      } else if (deltaY < -threshold) {
        dispatch(moveUp());
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
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
