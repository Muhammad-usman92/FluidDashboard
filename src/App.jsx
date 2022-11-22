import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Orders from "./pages/Orders";
import Saved from "./pages/Saved";
import SideBar from "./components/SideBar";
import Settings from "./pages/Settings";
import AddNew from "./components/Users/AddNew";
import AllUsers from "./components/Users/AllUsers";
import AddFarmer from "./pages/farmer/addFarmer";
import AllFarmers from "./pages/farmer/AllFarmers";
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
            path='/users'
            element={
              <SideBar>
                <Users />
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
            path='/messages'
            element={
              <SideBar>
                <Messages />
              </SideBar>
            }
          />
          <Route
            path='/analytics'
            element={
              <SideBar>
                <Analytics />
              </SideBar>
            }
          />
          <Route
            path='/file-manager'
            element={
              <SideBar>
                <FileManager />
              </SideBar>
            }
          />
          <Route
            path='/orders'
            element={
              <SideBar>
                <Orders />
              </SideBar>
            }
          />
          <Route
            path='/saved'
            element={
              <SideBar>
                <Saved />
              </SideBar>
            }
          />
          <Route
            path='/settings'
            element={
              <SideBar>
                <Settings />
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
          />
          <Route path='*' element={<>not found</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
