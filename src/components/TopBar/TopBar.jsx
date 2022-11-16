import React from "react";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BsCaretDownFill } from "react-icons/bs";
import css from "./TopBar.module.css";
const TopBar = ({ heading }) => {
  return (
    <div className={css.top}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className={css.dash_top}>
              <h2>{heading}</h2>
              <div className={css.login}>
                <span>{<MdOutlinePersonOutline />}</span>
                <span>Admin</span>
                <span> {<BsCaretDownFill />} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
