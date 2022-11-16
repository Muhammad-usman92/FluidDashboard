import React from "react";
import { Link } from "react-router-dom";
const DropDown = ({ Name, drop1, drop2, link1, link2 }) => {
  return (
    <div class='dropdown'>
      <button
        class='dropdown-toggle dropp'
        type='button'
        id='dropdownMenuButton1'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        {Name}
      </button>
      <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
        <li>
          <Link class='dropdown-item' to={link1}>
            {drop1}
          </Link>
        </li>
        <li>
          <Link class='dropdown-item' to={link2}>
            {drop2}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
