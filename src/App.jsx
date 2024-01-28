import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";
import AppContent from "./components/AppContent";
import "./index.css";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
