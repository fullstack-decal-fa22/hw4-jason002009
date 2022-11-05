import React, { useState } from "react";
import Color from "./Color";
import Feed from "./Feed";
/* Add any imports you think you might need here! */

const Menu = () => {
  const [state, Feed] = useState([]);

  return (
    <div className="colorOptions">
      <Color
        color="red"
        handleClick={(color) => Feed({ state: [color, ...state] })}
      ></Color>
      <Color
        color="pink"
        handleClick={(color) => Feed({ state: [color, ...state] })}
      ></Color>
      <Color
        color="blue"
        handleClick={(color) => Feed({ state: [color, ...state] })}
      ></Color>
      <Color
        color="green"
        handleClick={(color) => Feed({ state: [color, ...state] })}
      ></Color>
    </div>
  );
};

export default Menu;