import "../index.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between px-8 py-3 bg-[#5f0f40]">
        <h1 className="text-2xl text-white">
          <Link to={"/"}>Bearcin's Project</Link>
        </h1>
        <div className="flex gap-7 *:text-white *:font-semibold">
          <div className="cursor-pointer hover:text-gray-400">
            <Link to={"/html"}>HTML & CSS</Link>
          </div>
          <div className="cursor-pointer hover:text-gray-400">
            <Link to={"/bootstrap"}>BOOTSTRAP</Link>
          </div>
          <div className="cursor-pointer hover:text-gray-400">
            <Link to={"/tailwind"}>TAILWINDCSS</Link>
          </div>
          <div className="cursor-pointer hover:text-gray-400">
            <Link to={"/js"}>JAVASCRIPT</Link>
          </div>
          <div className="cursor-pointer hover:text-gray-400">
            <Link to={"/rjs"}>REACT</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
