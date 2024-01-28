import Navbar from "./Navbar";
import "../index.css";
import { Outlet } from "react-router";
function GuestLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
export default GuestLayout;
