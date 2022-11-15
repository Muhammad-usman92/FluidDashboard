import React from "react";
import Img from "../../assets/JKZ_8644.JPG";
const AddNew = () => {
  return (
    <div>
      <div className="container">
        <div
          className="mt-5"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <h1>Muhammad Usman Details</h1>
          </div>
          <div>
            <img src={Img} style={{ width: "200px" }} alt="" />
          </div>
        </div>
        <h4>Personal Details</h4>
        <form action="">
          {/* personal Details */}
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Province
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  District
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Taluka
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Union Council
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  CNIC
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Mobile No
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Postal Code
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </div>
          <hr />
          {/* Login Details */}
          <div className="row">
            <h4>Login Details</h4>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Last Login
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Current Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </div>
          {/* Survey Details */}
          <hr />
          <div className="row">
            <h4>Survey Details</h4>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Total No of Cases
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Cases(District Wise)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Cases(UC wise)
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Today's Cases
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNew;
