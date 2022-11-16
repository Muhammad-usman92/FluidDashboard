import React, { useState } from "react";
import css from "./DashBoard.module.css";
import BarChart from "./BarChart";
import { UserData } from "../../utils/Data";
import Box from "./Box";
import TopBar from "../../components/TopBar/TopBar";
import icon1 from "../../img/icon1.svg";
import icon5 from "../../img/icon5.svg";
import icon6 from "../../img/icon6.svg";
import icon7 from "../../img/icon7.svg";
import icon8 from "../../img/icon8.svg";
import icon9 from "../../img/icon9.svg";
import icon10 from "../../img/icon10.svg";
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
            bg={css.bg1}
            box={css.box}
            img={icon5}
          />
          <Box
            heading='Verified Farmers'
            num='60,000'
            bg={css.bg2}
            box={css.box}
            img={icon6}
          />
          <Box
            heading='Declined Farmers'
            num='20,000'
            bg={css.bg3}
            box={css.box}
            img={icon7}
          />
          <Box
            heading='Total Districts'
            num='20'
            bg={css.bg4}
            box={css.box}
            img={icon9}
          />
          <Box
            heading='Total Users'
            num='1,500'
            bg={css.bg5}
            box={css.box}
            img={icon10}
          />
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
      {/* Bottom section */}
      <div className='container my-4'>
        <div className='row'>
          <div className='col-md-12'>
            <div className={css.boxes}>
              <Box
                heading='Total Cash'
                num='700,000'
                bg={css.bg1}
                box={css.box2}
                img={icon1}
              />
              <Box
                heading='Transfered'
                bg={css.bg2}
                num='71000,000'
                box={css.box2}
                img={icon8}
              />
              <Box
                heading='Remaining'
                num='70,000'
                bg={css.bg3}
                box={css.box2}
                img={icon1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
