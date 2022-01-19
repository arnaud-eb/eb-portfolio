import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { texts, counts, options } from "../constants";

const Sphere = () => {
  const el = useRef();

  useEffect(() => {
    let canvas = el.current;
    let requestId;

    let width = +getComputedStyle(canvas)
      .getPropertyValue("width")
      .slice(0, -2);
    let height = +getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2);

    wordSphere(canvas, texts, counts, options);

    /**
     * WordSphere
     * Written by Hyojun Kim in 2017. Licensed in MIT.
     */
    function wordSphere(canvas, texts, counts, options) {
      const π = Math.PI;
      const {
        radius = width * 0.3,
        fontSize = radius * 0.15,
        tilt = 0,
        initialVelocityX = 0,
        initialVelocityY = 0,
        initialRotationX = 0,
        initialRotationZ = 0,
      } = options;

      let vx = initialVelocityX,
        vy = initialVelocityY;
      let rx = initialRotationX,
        rz = initialRotationZ;

      // canvas setup
      let ctx = canvas.getContext("2d");
      ctx.textAlign = "center";

      // Hi-DPI support
      canvas.width = width * 2;
      canvas.height = height * 2;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(2, 2);

      // scrolling
      let clicked = false,
        lastX,
        lastY;
      canvas.addEventListener("mousedown", (event) => {
        clicked = true;
        lastX = event.screenX;
        lastY = event.screenY;
      });
      canvas.addEventListener("mousemove", (event) => {
        if (!clicked) return;
        let [dx, dy] = [event.screenX - lastX, event.screenY - lastY];
        [lastX, lastY] = [event.screenX, event.screenY];

        // rotation update
        rz += -dy * 0.01;
        rx += dx * 0.01;

        // velocity update
        vx = dx * 0.1;
        vy = dy * 0.1;

        if (!looping) startLoop();
      });
      canvas.addEventListener("mouseup", () => (clicked = false));
      canvas.addEventListener("mouseleave", () => (clicked = false));

      function rot(x, y, t) {
        return [
          x * Math.cos(t) - y * Math.sin(t),
          x * Math.sin(t) + y * Math.cos(t),
        ];
      }

      function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let ix = 0,
          iz = 0;
        for (const text of texts) {
          const degZ = (π / (counts.length - 1)) * iz;
          const degX = ((2 * π) / counts[iz]) * ix;

          let x = radius * Math.sin(degZ) * Math.cos(degX);
          let y = radius * Math.sin(degZ) * Math.sin(degX);
          let z = radius * Math.cos(degZ) + 8 * (ix % 2); /* randomness */

          // camera transform
          [y, z] = rot(y, z, tilt);
          [x, z] = rot(x, z, rz);
          [x, y] = rot(x, y, rx);

          // convert to cartesian and then draw.
          const alpha = 0.6 + 0.4 * (x / radius);
          const size = fontSize + 2 + 5 * (x / radius);
          ctx.fillStyle = `rgba(0,0,0,${alpha})`;
          ctx.font = `${size}px "Montserrat", sans-serif`;
          ctx.fillText(text, y + width / 2, -z + height / 2);

          ix--;
          if (ix < 0) {
            iz++;
            ix = counts[iz] - 1;
          }
        }
      }

      // renderer
      let looping = false;
      function rendererLoop() {
        if (looping) {
          requestId = requestAnimationFrame(rendererLoop);
        }
        render();

        // deacceleration - dirty code xD
        if (vx > 0) vx = vx - 0.01;
        if (vy > 0) vy = vy - 0.01;
        if (vx < 0) vx = vx + 0.01;
        if (vy > 0) vy = vy + 0.01;
        if (vx === 0 && vy === 0) stopLoop();

        rz += vy * 0.01;
        rx += vx * 0.01;
      }

      function startLoop() {
        looping = true;
        requestId = requestAnimationFrame(rendererLoop);
      }

      function stopLoop() {
        looping = false;
      }
      startLoop();
    }

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return <Canvas ref={el} />;
};

const Canvas = styled.canvas`
  width: 250px;
  height: 250px;
  transform: translateX(-1.5rem);

  @media screen and (min-width: 800px) {
    padding-right: 0rem;
    transform: scale(1.7);
  }
`;

export default Sphere;
