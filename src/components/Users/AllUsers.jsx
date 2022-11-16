import React from "react";
import TopBar from "../TopBar/TopBar";
import "./user.css";
const AllUsers = () => {
  return (
    <div>
      <TopBar />

      <div className="container">
        <h4 className="mt-5">All District User</h4>
        <p>Filters</p>

        <div className="row">
          <div className="col-lg-8 " style={{ display: "flex" }}>
            <div class="dropdown user-filter">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another
                  </a>
                </li>
              </ul>
            </div>{" "}
            <div class="dropdown user-filter">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another
                  </a>
                </li>
              </ul>
            </div>{" "}
            <div class="dropdown user-filter">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another
                  </a>
                </li>
              </ul>
            </div>{" "}
            <div class="dropdown user-filter">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another
                  </a>
                </li>
              </ul>
            </div>{" "}
            <div class="dropdown user-filter">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another
                  </a>
                </li>
              </ul>
            </div>{" "}
          </div>
          <div className="col-lg-4">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
