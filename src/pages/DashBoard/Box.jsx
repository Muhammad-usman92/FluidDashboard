import React from "react";
import css from "./DashBoard.module.css";
import Farmer from "../../img/farmer.png";

const Box = ({ heading, num, icon, box }) => {
  return (
    <div className={box}>
      <div className={`${icon} ${css.icon}`}>
        <img src={Farmer} alt='Farmer' />
      </div>
      <div className={css.box_content}>
        <div className={css.total}>{heading} </div>
        <div className={css.num}>{num}</div>
      </div>
    </div>
  );
};

export default Box;
