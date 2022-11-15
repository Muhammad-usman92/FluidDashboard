import React, { useState } from "react";
import css from "./DashBoard.module.css";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BsCaretDownFill } from "react-icons/bs";
import BarChart from "./BarChart";
import { UserData } from "../../utils/Data";
import Box from "./Box";
const DashBoard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Weekly Chart",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#4ba064", "#d1ac49"],
      },
    ],
  });
  return (
    <div className='fluid'>
      <div className={css.top}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className={css.dash_top}>
                <h2>Dashboard</h2>
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
      <div className='container mt-4'>
        <div className={css.boxes}>
          <Box heading='Total Farmers' num='70,000' icon={css.bg1} />
          <Box heading='Verified Farmers' num='60,000' icon={css.bg2} />
          <Box heading='Declined Farmers' num='20,000' icon={css.bg3} />
          <Box heading='Total Districts' num='20' icon={css.bg4} />
          <Box heading='Total Users' num='1,500' icon={css.bg5} />
          {/* <div className={css.box}>
            <div className={css.icon}>
              {" "}
              <img src={Farmer} alt='Farmer' />{" "}
            </div>
            <div className={css.box_content}>
              <div className={css.total}>Total Farmers</div>
              <div className={css.num}>70,000</div>
            </div>
          </div>
          <div className={css.box}>
            <div className={css.icon}>
              <img src={Farmer} alt='Farmer' />
            </div>
            <div className={css.box_content}>
              <div className={css.total}>Total Farmers</div>
              <div className={css.num}>70,000</div>
            </div>
          </div>
          <div className={css.box}>
            <div className={css.icon}>
              {" "}
              <img src={Farmer} alt='Farmer' />{" "}
            </div>
            <div className={css.box_content}>
              <div className={css.total}>Total Farmers</div>
              <div className={css.num}>70,000</div>
            </div>
          </div>
          <div className={css.box}>
            <div className={css.icon}>
              {" "}
              <img src={Farmer} alt='Farmer' />{" "}
            </div>
            <div className={css.box_content}>
              <div className={css.total}>Total Farmers</div>
              <div className={css.num}>70,000</div>
            </div>
          </div>
          <div className={css.box}>
            <div className={css.icon}>
              {" "}
              <img src={Farmer} alt='Farmer' />{" "}
            </div>
            <div className={css.box_content}>
              <div className={css.total}>Total Farmers</div>
              <div className={css.num}>70,000</div>
            </div>
          </div> */}
        </div>
      </div>
      <div className='container mt-4'>
        <div style={{ width: 600 }}>
          <BarChart chartData={userData} />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
