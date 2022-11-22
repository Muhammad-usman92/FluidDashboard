import React, { useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import BottomBar from "../../components/BottomBar/BottomBar";

const AddNew = () => {
  const [farmer, setFarmer] = useState({
    name: "",
    district: "",
    taluka: "",
    village: "",
    uc: "",
    tappa: "",
    deh: "",
    fathername: "",
    cnic: "",
    mobno: "",
    gender: "",
    ownertype: "",
  });
  const {
    name,
    district,
    taluka,
    village,
    uc,
    tappa,
    deh,
    fathername,
    cnic,
    mobno,
    gender,
    ownertype,
  } = farmer;
  const onInputChange = (e) => {
    // console.log(e.target.value);
    setFarmer({ ...farmer, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <TopBar heading='Farmers' heading2='Add new Farmer' />
      <div className='container'>
        <h3 className='mt-5 mb-5'>Add New Farmer</h3>
        <form onSubmit={(e) => onSubmit(e)}>
          {/* personal Details */}
          <div className='row'>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='District' className='form-label'>
                  District
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='District'
                  aria-describedby='emailHelp'
                  onChange={(e) => onInputChange(e)}
                  value={district}
                  name='district'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='Taluka' className='form-label'>
                  Taluka
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='Taluka'
                  aria-describedby='emailHelp'
                  onChange={(e) => onInputChange(e)}
                  value={taluka}
                  name='taluka'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='Village' className='form-label'>
                  Village
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='Village'
                  aria-describedby='emailHelp'
                  onChange={(e) => onInputChange(e)}
                  value={village}
                  name='village'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='UnionCouncil' className='form-label'>
                  Union Council
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='UnionCouncil'
                  aria-describedby='emailHelp'
                  onChange={(e) => onInputChange(e)}
                  value={uc}
                  name='uc'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='Tappa' className='form-label'>
                  Tappa
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='Tappa'
                  aria-describedby='emailHelp'
                  onChange={(e) => onInputChange(e)}
                  value={tappa}
                  name='tappa'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='Deh' className='form-label'>
                  Deh
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='Deh'
                  aria-describedby='emailHelp'
                  onChange={(e) => onInputChange(e)}
                  value={deh}
                  name='deh'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='Name'
                  aria-describedby='emailHelp'
                  onChange={(e) => onInputChange(e)}
                  value={name}
                  name='name'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='Father/HusbandName' className='form-label'>
                  Father/Husband Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='Father/HusbandName'
                  aria-describedby='emailHelp'
                  onChange={(e) => onInputChange(e)}
                  value={fathername}
                  name='fathername'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='CNIC' className='form-label'>
                  CNIC
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='CNIC'
                  aria-describedby='emailHelp'
                  onChange={(e) => onInputChange(e)}
                  value={cnic}
                  name='cnic'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='MobileNo' className='form-label'>
                  Mobile No
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='MobileNo'
                  aria-describedby='emailHelp'
                  onChange={(e) => onInputChange(e)}
                  value={mobno}
                  name='mobno'
                />
              </div>
            </div>

            <div className='col-lg-4'>
              <div
                className='d-flex '
                style={{ gap: "20px", marginTop: "40px" }}
              >
                <div>
                  <label htmlFor='gender' className='form-label'>
                    Gender:
                  </label>
                </div>

                <div>
                  <input
                    class='form-check-input'
                    type='radio'
                    onChange={(e) => onInputChange(e)}
                    value={gender}
                    name='gender'
                    className='mx-2'
                  />

                  <label htmlFor='gender' className='form-label'>
                    Male
                  </label>
                </div>
                <div>
                  <input
                    class='form-check-input'
                    type='radio'
                    onChange={(e) => onInputChange(e)}
                    value={gender}
                    name='gender'
                    className='mx-2'
                  />

                  <label htmlFor='Gender' className='form-label'>
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div
                className='d-flex '
                style={{ gap: "20px", marginTop: "40px" }}
              >
                <div>
                  <label htmlFor='OwnerType' className='form-label'>
                    Owner Type:
                  </label>
                </div>

                <div>
                  <input
                    type='checkbox'
                    class='form-check-input'
                    onChange={(e) => onInputChange(e)}
                    value={ownertype}
                    name='ownertype'
                  />

                  <label htmlFor='OwnerType' className='form-label'>
                    Owner
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    class='form-check-input'
                    onChange={(e) => onInputChange(e)}
                    value={ownertype}
                    name='ownertype'
                  />

                  <label htmlFor='OwnerType' className='form-label'>
                    Makadedar(Contract)
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* Login Details */}
          {/* <div className='row'>
            <h4>Beneficiary Details Cash Transfers:</h4>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='BeneficiaryName' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='BeneficiaryName'
                  aria-describedby='emailHelp'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label
                  htmlFor='BeneficiaryFather/HusbandName'
                  className='form-label'
                >
                  Father/Husband Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='BeneficiaryFather/HusbandName'
                  aria-describedby='emailHelp'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='BeneficiaryCNIC' className='form-label'>
                  CNIC
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='BeneficiaryCNIC'
                  aria-describedby='emailHelp'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='BeneficiaryMobNo' className='form-label'>
                  Mobile No
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='BeneficiaryMobNo'
                  aria-describedby='emailHelp'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='BeneficiaryClaimDate' className='form-label'>
                  Claim Submission Date
                </label>
                <input
                  type='date'
                  className='form-control'
                  id='BeneficiaryClaimDate'
                  aria-describedby='emailHelp'
                />
              </div>
            </div>
          </div>
          <hr /> */}
          {/* Survey Details */}
          {/* <div className='row'>
            <h4>Landholding & Cropping: </h4>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='TotalLandholding' className='form-label'>
                  Total Landholding (Acre)
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='TotalLandholding'
                  aria-describedby='emailHelp'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='Wheat' className='form-label'>
                  Wheat
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='Wheat'
                  aria-describedby='emailHelp'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='Mustard' className='form-label'>
                  Mustard
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='Mustard'
                  aria-describedby='emailHelp'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='Sunflower' className='form-label'>
                  Sunflower
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='Sunflower'
                  aria-describedby='emailHelp'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='Other' className='form-label'>
                  Other
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='Other'
                  aria-describedby='emailHelp'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div
                className='d-flex '
                style={{ gap: "20px", marginTop: "30px" }}
              >
                <div>
                  <label htmlFor='PreferredMode' className='form-label'>
                    Preferred Mode of Cash Transferred:
                  </label>
                </div>

                <div>
                  <input type='checkbox' class='form-check-input' id />

                  <label htmlFor='PreferredMode' className='form-label'>
                    Mobile Payments
                  </label>
                </div>
                <div>
                  <input type='checkbox' class='form-check-input' id />

                  <label htmlFor='BankAccount' className='form-label'>
                    Bank Account
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr /> */}
          {/* Bank details */}
          {/* <div className='row'>
            <h4>Bank & Details: </h4>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='TitleOfAccount' className='form-label'>
                  Title of Account
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='TitleOfAccount'
                  aria-describedby='emailHelp'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='AccountNo' className='form-label'>
                  Account No
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='AccountNo'
                  aria-describedby='emailHelp'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='BankName' className='form-label'>
                  Bank Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='BankName'
                  aria-describedby='emailHelp'
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-3'>
                <label htmlFor='BranchCode' className='form-label'>
                  Branch Code
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='BranchCode'
                  aria-describedby='emailHelp'
                />
              </div>
            </div>
          </div>
          <hr /> */}
          {/* Document Details */}
          {/* <div className='row'>
            <h4>Documents Uploaded: </h4>
            <div className='col-lg-12 d-flex justify-content-evenly'>
              <div>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                  Documents Collected:
                </label>
              </div>
              <div className='d-flex gap-4'>
                <div>
                  <input
                    type='checkbox'
                    class='form-check-input'
                    className='mx-2'
                  />

                  <label htmlFor='exampleInputEmail1' className='form-label'>
                    CNIC
                  </label>
                </div>
                <div>
                  <input
                    type='checkbox'
                    class='form-check-input'
                    className='mx-2'
                  />

                  <label htmlFor='exampleInputEmail1' className='form-label'>
                    Forms VII/ VIII and Affidavit (Land Documents)
                  </label>
                </div>
              </div>
            </div>
            <div className='col-lg-12 d-flex justify-content-center mt-4'>
              <div class='form-group'>
                <label for='exampleFormControlFile1' className='my-2'>
                  Upload CNIC Front Side
                </label>
                <br />
                <input
                  type='file'
                  class='form-control-file'
                  id='exampleFormControlFile1'
                />
              </div>
              <div class='form-group'>
                <label for='exampleFormControlFile1' className='my-2'>
                  Upload CNIC Back Side
                </label>{" "}
                <br />
                <input
                  type='file'
                  class='form-control-file'
                  id='exampleFormControlFile1'
                />
              </div>
              <div class='form-group'>
                <label for='exampleFormControlFile1' className='my-2'>
                  Land Documents
                </label>{" "}
                <br />
                <input
                  type='file'
                  class='form-control-file'
                  id='exampleFormControlFile1'
                />
              </div>
            </div>
          </div>
          <hr /> */}
          <div className='text-center me-auto my-2'>
            <button className='btn btn-primary btn-block'>Submit</button>
          </div>
        </form>
      </div>
      <BottomBar />
    </div>
  );
};

export default AddNew;
