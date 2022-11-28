import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
import SideBar from "./components/SideBar";
import AddNew from "./components/Users/AddNew";
import AllUsers from "./components/Users/AllUsers";
import AddFarmer from "./pages/farmer/addFarmer";
import AllFarmers from "./pages/farmer/AllFarmers";
import UpdateFarmer from "./pages/farmer/UpdateFarmer";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <SideBar>
                <DashBoard />
              </SideBar>
            }
          />
          <Route
            path='/addnew'
            element={
              <SideBar>
                <AddNew />
              </SideBar>
            }
          />
          <Route
            path='/allusers'
            element={
              <SideBar>
                <AllUsers />
              </SideBar>
            }
          />
          <Route
            path='/addFarmer'
            element={
              <SideBar>
                <AddFarmer />
              </SideBar>
            }
          />
          <Route
            path='/allfarmers'
            element={
              <SideBar>
                <AllFarmers />
              </SideBar>
            }
          />{" "}
          <Route
            path='/updateFarmer/:id'
            element={
              <SideBar>
                <UpdateFarmer />
              </SideBar>
            }
          />
          <Route path='*' element={<>not found</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
