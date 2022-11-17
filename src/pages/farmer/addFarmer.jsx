import React from "react";
// import FarmerImg from "../../img/farmer-img.webp";
import TopBar from "../../components/TopBar/TopBar";
const AddNew = () => {
  return (
    <div>
      <TopBar heading="Users" heading2="Add new user" />
      <div className="container">
        <h3 className="mt-5 mb-5">Add New Farmer</h3>
        <form action="">
          {/* personal Details */}
          <div className="row">
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
                  Village
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
                  Tappa
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
                  Deh
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
                  Father/Husband Name
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
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="d-flex "
                style={{ gap: "20px", marginTop: "40px" }}
              >
                <div>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Gender:
                  </label>
                </div>

                <div>
                  <input type="checkbox" class="form-check-input" id />

                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Male
                  </label>
                </div>
                <div>
                  <input type="checkbox" class="form-check-input" id />

                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="d-flex "
                style={{ gap: "20px", marginTop: "40px" }}
              >
                <div>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Owner Type:
                  </label>
                </div>

                <div>
                  <input type="checkbox" class="form-check-input" id />

                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Owner
                  </label>
                </div>
                <div>
                  <input type="checkbox" class="form-check-input" id />

                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Makadedar(Contract)
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* Login Details */}
          <div className="row">
            <h4>Beneficiary Details Cash Transfers:</h4>
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
                  Father/Husband Name
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
                  Mobile No
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
                  Claim Submission Date
                </label>
                <input
                  type="date"
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
            <h4>Landholding & Cropping: </h4>
            <div className="col-lg-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Total Landholding (Acre)
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
                  Wheat
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
                  Mustard
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
                  Sunflower
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
                  Other
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
              <div
                className="d-flex "
                style={{ gap: "20px", marginTop: "40px" }}
              >
                <div>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Preferred Mode of Cash Transferred:
                  </label>
                </div>

                <div>
                  <input type="checkbox" class="form-check-input" id />

                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Mobile Payments
                  </label>
                </div>
                <div>
                  <input type="checkbox" class="form-check-input" id />

                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Bank Account
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </form>
      </div>
    </div>
  );
};

export default AddNew;