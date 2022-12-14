import react from "react";
import reactDom from "react-dom";
import * as op from "./math";

reactDom.render(
  <div>
    <ul>
      <li>{op.add(5, 6)} </li>
      <li>{op.multiply(3, 6)} </li>
      <li>{op.subtract(9, 2)} </li>
      <li>{op.devide(12, 6)} </li>
      <li> </li>
    </ul>
  </div>,
  document.getElementById("root")
);
