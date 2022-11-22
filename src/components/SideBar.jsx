import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { GiWheat } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import DropDown from "./DropDown";
//routes
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "",
    name: (
      <DropDown
        Name='Users'
        drop1='All Users'
        drop2='Add New User'
        link1='/allusers'
        link2='/addnew'
      />
    ),
    icon: <FaUser />,
  },
  {
    path: "",
    name: (
      <DropDown
        Name='Farmers'
        drop1='All Farmers'
        drop2='Add New Farmer'
        link1='/allfarmers'
        link2='/addFarmer'
      />
    ),
    icon: <GiWheat />,
  },
];
const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // const inputAnimation = {
  //   hidden: {
  //     width: 0,
  //     padding: 0,
  //     opacity: 0,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   show: {
  //     width: "160px",
  //     padding: "5px 10px",
  //     opacity: 1,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div className='main-container'>
      <motion.div
        animate={{
          width: isOpen ? "200px" : "50px",
          position: isOpen ? "fixed" : "fixed",
          height: isOpen ? "100vh" : "100%",
          transition: {
            duration: 0.2,
            // type: "spring",
            // damping: 11,
          },
        }}
        className='sidebar'
      >
        <div className='top_section'>
          {/* {isOpen && (
            <motion.h1
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={showAnimation}
              className="logo"
            >
              Logo
            </motion.h1>
          )} */}
          <div className='bars' onClick={toggle}>
            {isOpen ? <ImCross /> : <FaBars />}
          </div>
        </div>
        <div className='search'>
          {/* <div className='search_icon'>
            <BiSearch />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial='hidden'
                animate='show'
                exit='hidden'
                variants={inputAnimation}
                placeholder='Search ...'
              />
            )}
          </AnimatePresence> */}
        </div>
        <section className='routes'>
          {routes.map((item) => (
            <NavLink
              activeClassName='active'
              to={item.path}
              key={item.name}
              className='link'
            >
              <div className='icon'> {item.icon} </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    variants={showAnimation}
                    className='link_text'
                  >
                    {item.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <motion.main
        animate={{
          width: isOpen ? "90%" : "100%",
          marginLeft: isOpen ? "12rem" : "0px",
        }}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default SideBar;
