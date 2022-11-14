import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Orders from "./pages/Orders";
import Saved from "./pages/Saved";
import SideBar from "./components/SideBar";
import Settings from "./pages/Settings";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <SideBar>
                <DashBoard />
              </SideBar>
            }
          />
          <Route
            path="/users"
            element={
              <SideBar>
                <Users />
              </SideBar>
            }
          />
          <Route
            path="/messages"
            element={
              <SideBar>
                <Messages />
              </SideBar>
            }
          />
          <Route
            path="/analytics"
            element={
              <SideBar>
                <Analytics />
              </SideBar>
            }
          />
          <Route
            path="/file-manager"
            element={
              <SideBar>
                <FileManager />
              </SideBar>
            }
          />
          <Route
            path="/orders"
            element={
              <SideBar>
                <Orders />
              </SideBar>
            }
          />
          <Route
            path="/saved"
            element={
              <SideBar>
                <Saved />
              </SideBar>
            }
          />
          <Route
            path="/settings"
            element={
              <SideBar>
                <Settings />
              </SideBar>
            }
          />
          <Route path="*" element={<>not found</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
