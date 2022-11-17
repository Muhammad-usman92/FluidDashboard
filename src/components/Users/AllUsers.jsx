import React from "react";
import TopBar from "../TopBar/TopBar";
import "./user.css";
import { Link } from "react-router-dom";
import BottomBar from "../BottomBar/BottomBar";
import { AllUsersData } from "../../utils/Data";
const AllUsers = () => {
  console.log(AllUsersData);
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
                District
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
                UC
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
                Deh
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
            </div>
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
                  <th scope='col'>Action</th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                {AllUsersData.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.Name}</td>
                    <td>{item.NIC}</td>
                    <td>{item.District}</td>
                    <td>{item.UC}</td>
                    <td>{item.Deh}</td>
                    <td>{item.MobileNo}</td>
                    <td>
                      <button type='button' class='btn btn-warning view-button'>
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        type='button'
                        class='btn btn-warning update-button'
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        type='button'
                        class='btn btn-warning delete-button'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default AllUsers;
