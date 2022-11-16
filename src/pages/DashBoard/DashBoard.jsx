import React, { useState } from "react";
import css from "./DashBoard.module.css";
import BarChart from "./BarChart";
import { UserData } from "../../utils/Data";
import Box from "./Box";
import TopBar from "../../components/TopBar/TopBar";
const DashBoard = () => {
  const [userData] = useState({
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
      {/* Top Section */}
      <TopBar heading='Dashboard' heading2='Home' />
      {/* top 1 */}
      <div className='container mt-4'>
        <div className={css.boxes}>
          <Box
            heading='Total Farmers'
            num='70,000'
            icon={css.bg1}
            box={css.box}
          />
          <Box
            heading='Verified Farmers'
            num='60,000'
            icon={css.bg2}
            box={css.box}
          />
          <Box
            heading='Declined Farmers'
            num='20,000'
            icon={css.bg3}
            box={css.box}
          />
          <Box
            heading='Total Districts'
            num='20'
            icon={css.bg4}
            box={css.box}
          />
          <Box heading='Total Users' num='1,500' icon={css.bg5} box={css.box} />
        </div>
      </div>
      {/* Middle section */}
      <div className='container mt-4'>
        <div className={css.pro_users}>
          <div style={{ width: 600 }}>
            <BarChart chartData={userData} />
          </div>
          <div className={css.online}>
            <div className={css.online_users}>User Online</div>
            <div>
              <ol className={css.users_list}>
                <div>
                  <li>wahab</li>
                  <li>wahab</li>
                  <li>wahab</li>
                  <li>wahab</li>
                  <li>wahab</li>
                  <li>wahab</li>
                  <li>wahab</li>
                  <li>wahab</li>
                  <li>wahab</li>
                  <li>wahab</li>
                </div>
                <div>
                  <li>wahab</li>
                  <li>wahab</li>
                  <li>wahab</li>
                  <li>wahab</li>
                  <li>wahab</li>
                </div>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom sec */}
      <div className='container my-4'>
        <div className='row'>
          <div className='col-md-12'>
            <div className={css.boxes}>
              <Box
                heading='Total Cash'
                num='700,000'
                icon={css.bg1}
                box={css.box2}
              />
              <Box
                heading='Transfered'
                icon={css.bg2}
                num='71000,000'
                box={css.box2}
              />
              <Box
                heading='Remaining'
                num='70,000'
                icon={css.bg3}
                box={css.box2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
