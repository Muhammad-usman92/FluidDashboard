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
import Login from "./components/login/index"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/users"
            element={
              
                <SideBar>
                  <Users/>
              </SideBar>
            }
          />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<>not found</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
