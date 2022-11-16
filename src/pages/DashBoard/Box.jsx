import React from "react";
import css from "./DashBoard.module.css";
const Box = ({ heading, num, bg, box, img }) => {
  return (
    <div className={box}>
      <div className={`${bg} ${css.icon}`}>
        <img src={img} alt='box icons' width={35} />
      </div>
      <div className={css.box_content}>
        <div className={css.total}>{heading} </div>
        <div className={css.num}>{num}</div>
      </div>
    </div>
  );
};

export default Box;
