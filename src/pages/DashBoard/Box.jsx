import React from "react";
import css from "./DashBoard.module.css";
import { motion } from "framer-motion";

const Box = ({ heading, num, bg, box, img }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className={box}>
      <div className={`${bg} ${css.icon}`}>
        <img src={img} alt='box icons' width={35} />
      </div>
      <div className={css.box_content}>
        <div className={css.total}>{heading} </div>
        <div className={css.num}>{num}</div>
      </div>
    </motion.div>
  );
};

export default Box;
