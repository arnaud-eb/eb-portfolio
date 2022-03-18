import { links } from "../constants";
import usePortfolio from "../store/use-portfolio";

const Cuboid = () => {
  const { current, next, outClass, inClass } = usePortfolio();
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
