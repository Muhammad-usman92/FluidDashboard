import React from "react";
import TopBar from "../TopBar/TopBar";
import "./user.css";
import { Link } from "react-router-dom";
const AllUsers = () => {
  return (
    <div>
      <TopBar heading='Users' heading2='All Users' />

      <div className='container'>
        <h4 className='mt-5'>All District User</h4>
        <p>Filters</p>

        <div className='row'>
          <div className='col-lg-8 ' style={{ display: "flex" }}>
            <div class='dropdown user-filter'>
              <button
                class='btn btn-secondary dropdown-toggle'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Dropdown
              </button>
              <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                <li>
                  <Link class='dropdown-item' to='#'>
                    Action
                  </Link>
                </li>
                <li>
                  <Link class='dropdown-item' to='#'>
                    Another
                  </Link>
                </li>
                <li>
                  <Link class='dropdown-item' to='#'>
                    Another
                  </Link>
                </li>
              </ul>
            </div>{" "}
            <div class='dropdown user-filter'>
              <button
                class='btn btn-secondary dropdown-toggle'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Dropdown
              </button>
              <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                <li>
                  <Link class='dropdown-item' to='#'>
                    Action
                  </Link>
                </li>
                <li>
                  <Link class='dropdown-item' to='#'>
                    Another
                  </Link>
                </li>
                <li>
                  <Link class='dropdown-item' to='#'>
                    Another
                  </Link>
                </li>
              </ul>
            </div>{" "}
            <div class='dropdown user-filter'>
              <button
                class='btn btn-secondary dropdown-toggle'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Dropdown
              </button>
              <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                <li>
                  <Link class='dropdown-item' to='#'>
                    Action
                  </Link>
                </li>
                <li>
                  <Link class='dropdown-item' to='#'>
                    Another
                  </Link>
                </li>
                <li>
                  <Link class='dropdown-item' to='#'>
                    Another
                  </Link>
                </li>
              </ul>
            </div>{" "}
            <div class='dropdown user-filter'>
              <button
                class='btn btn-secondary dropdown-toggle'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Dropdown
              </button>
              <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                <li>
                  <Link class='dropdown-item' to='#'>
                    Action
                  </Link>
                </li>
                <li>
                  <Link class='dropdown-item' to='#'>
                    Another
                  </Link>
                </li>
                <li>
                  <Link class='dropdown-item' to='#'>
                    Another
                  </Link>
                </li>
              </ul>
            </div>{" "}
            <div class='dropdown user-filter'>
              <button
                class='btn btn-secondary dropdown-toggle'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Dropdown
              </button>
              <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                <li>
                  <Link class='dropdown-item' to='#'>
                    Action
                  </Link>
                </li>
                <li>
                  <Link class='dropdown-item' to='#'>
                    Another
                  </Link>
                </li>
                <li>
                  <Link class='dropdown-item' to='#'>
                    Another
                  </Link>
                </li>
              </ul>
            </div>{" "}
          </div>
          <div className='col-lg-4'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
          </div>
        </div>
        <div className='container'>
          <div className='row mt-5'>
            <table class='table bg-light' style={{ borderRadius: "10px" }}>
              <thead>
                <tr>
                  <th scope='col'>Sr:No</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>NIC</th>
                  <th scope='col'>District</th>
                  <th scope='col'>UC</th>
                  <th scope='col'>Deh</th>
                  <th scope='col'>Mobile No</th>
                  <th scope='col'></th>
                  <th scope='col'></th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>MUhammad usman</td>
                  <td>41303-65890095</td>
                  <td>Hyderabad</td>
                  <td>Qasimabad</td>
                  <td>Wadhu wah</td>
                  <td>0314689575</td>
                  <td>
                    <button type='button' class='btn btn-warning view-button'>
                      View
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning update-button'>
                      Update
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning delete-button'>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Abdul Wahab</td>
                  <td>41303-68798095</td>
                  <td>Larkana</td>
                  <td>Latifabad</td>
                  <td>defnece</td>
                  <td>0314615675</td>
                  <td>
                    <button type='button' class='btn btn-warning view-button'>
                      View
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning update-button'>
                      Update
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning delete-button'>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Abdul Wahab</td>
                  <td>41303-68798095</td>
                  <td>Larkana</td>
                  <td>Latifabad</td>
                  <td>defnece</td>
                  <td>0314615675</td>
                  <td>
                    <button type='button' class='btn btn-warning view-button'>
                      View
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning update-button'>
                      Update
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning delete-button'>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Abdul Wahab</td>
                  <td>41303-68798095</td>
                  <td>Larkana</td>
                  <td>Latifabad</td>
                  <td>defnece</td>
                  <td>0314615675</td>
                  <td>
                    <button type='button' class='btn btn-warning view-button'>
                      View
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning update-button'>
                      Update
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning delete-button'>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Abdul Wahab</td>
                  <td>41303-68798095</td>
                  <td>Larkana</td>
                  <td>Latifabad</td>
                  <td>defnece</td>
                  <td>0314615675</td>
                  <td>
                    <button type='button' class='btn btn-warning view-button'>
                      View
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning update-button'>
                      Update
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning delete-button'>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Abdul Wahab</td>
                  <td>41303-68798095</td>
                  <td>Larkana</td>
                  <td>Latifabad</td>
                  <td>defnece</td>
                  <td>0314615675</td>
                  <td>
                    <button type='button' class='btn btn-warning view-button'>
                      View
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning update-button'>
                      Update
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning delete-button'>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Abdul Wahab</td>
                  <td>41303-68798095</td>
                  <td>Larkana</td>
                  <td>Latifabad</td>
                  <td>defnece</td>
                  <td>0314615675</td>
                  <td>
                    <button type='button' class='btn btn-warning view-button'>
                      View
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning update-button'>
                      Update
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning delete-button'>
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Abdul Wahab</td>
                  <td>41303-68798095</td>
                  <td>Larkana</td>
                  <td>Latifabad</td>
                  <td>defnece</td>
                  <td>0314615675</td>
                  <td>
                    <button type='button' class='btn btn-warning view-button'>
                      View
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning update-button'>
                      Update
                    </button>
                  </td>
                  <td>
                    <button type='button' class='btn btn-warning delete-button'>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
