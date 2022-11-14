import React from "react";
import { Link } from "react-router-dom";
const DropDown = () => {
  return (
    <div>
      <div class='dropdown'>
        <button
          class='dropdown-toggle dropp'
          type='button'
          id='dropdownMenuButton1'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Home
        </button>
        <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
          <li>
            <Link class='dropdown-item' to='#'>
              Home 1
            </Link>
          </li>
          <li>
            <Link class='dropdown-item' to='#'>
              Home 2
            </Link>
          </li>
          <li>
            <Link class='dropdown-item' to='#'>
              Something else here
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
