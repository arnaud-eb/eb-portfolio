import { links } from "../constants";

import { IState } from "../types";

type CuboidPropsType = Pick<
  IState,
  "current" | "next" | "outClass" | "inClass"
>;

const Cuboid = ({ current, next, outClass, inClass }: CuboidPropsType) => {
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
            <Component text={text} />
          </div>
        );
      })}
    </div>
  );
};

export default Cuboid;
