import React from "react";
// import { useContext } from "react"; used later
import useMousePosition from "./useMousePosition";
// import { MouseContext } from "../../context/mouse-context"; used from step6
const Cursor = () => {
  // const { cursorType } = useContext(MouseContext); used from step6
  const { x, y } = useMousePosition();
  return (
    <section>
      <span
        className="ring"
        // className={`ring ${cursorType}`} used from step6
        style={{ left: `${x}px`, top: `${y}px` }}
      ></span>
      <span
        className="dot"
        // className={`dot ${cursorType}`} used from step6
        style={{ left: `${x}px`, top: `${y}px` }}
      ></span>
    </section>
  );
};
export default Cursor;
