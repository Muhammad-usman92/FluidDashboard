import React from "react";
import css from "./BottomBar.module.css";
const BottomBar = () => {
  return (
    <div className={css.bottom}>
      <div className={css.bottomBg}>
        <div className={css.bottomText}>Project by Goverment of Sindh </div>
      </div>
    </div>
  );
};

export default BottomBar;
