import React from "react";
import { links } from "./constants";

const Cuboid = ({ current, next, outClass, inClass, openIndex }) => {
  return (
    <div className="cuboid">
      {links.map(({ id, Component, colors, text }) => {
        return (
          <div
            key={id}
            className={`${
              current === id || next === id ? "visible" : "hidden"
            } ${current === id && outClass && outClass} ${
              next === id && inClass && inClass
            }`}
            style={{ backgroundColor: colors[0] }}
          >
            <Component text={text} openIndex={openIndex} next={next} />
          </div>
        );
      })}
    </div>
  );
};

export default Cuboid;
