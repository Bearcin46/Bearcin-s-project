import { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleHamburgerMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex flex-col gap-4 md:gap-0 md:flex md:flex-row items-center justify-between px-6 py-5 md:px-8 md:py-3 bg-[#5f0f40] relative">
        <div className="flex  items-center justify-between w-full">
          <h1 className="text-3xl  md:text-4xl text-white font-cursive text-nowrap">
            <Link to={"/"}>Bearcin's Project</Link>
          </h1>
          {/* hamburger menu */}
          <div
            className="cursor-pointer md:hidden w-full flex justify-end"
            id="hamburger"
            onClick={handleHamburgerMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.25em"
              height="2.25em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
              ></path>
            </svg>
          </div>
        </div>
        {/* menu items */}
        <div
          menuOpen={!menuOpen}
          className={`${
            menuOpen ? "flex flex-col" : "hidden"
          } md:flex-row md:flex w-full justify-between *:text-white *:font-semibold`}
        >
          <div className="cursor-pointer hover:bg-white hover:text-[#5f0f40] md:hover:bg-[#5f0f40] w-full text-center md:w-fit md:hover:text-gray-400">
            <Link to={"/html"}>HTML & CSS</Link>
          </div>
          <div className="cursor-pointer hover:bg-white hover:text-[#5f0f40] md:hover:bg-[#5f0f40] w-full text-center md:w-fit md:hover:text-gray-400">
            <Link to={"/bootstrap"}>BOOTSTRAP</Link>
          </div>
          <div className="cursor-pointer hover:bg-white hover:text-[#5f0f40] md:hover:bg-[#5f0f40] w-full text-center md:w-fit md:hover:text-gray-400">
            <Link to={"/tailwind"}>TAILWINDCSS</Link>
          </div>
          <div className="cursor-pointer hover:bg-white hover:text-[#5f0f40] md:hover:bg-[#5f0f40] w-full text-center md:w-fit md:hover:text-gray-400">
            <Link to={"/js"}>JAVASCRIPT</Link>
          </div>
          <div className="cursor-pointer hover:bg-white hover:text-[#5f0f40] md:hover:bg-[#5f0f40] w-full text-center md:w-fit md:hover:text-gray-400">
            <Link to={"/rjs"}>REACT</Link>
          </div>
          <div className="cursor-pointer hover:bg-white hover:text-[#5f0f40] md:hover:bg-[#5f0f40] w-full text-center md:w-fit md:hover:text-gray-400">
            <Link to={"/blogs"}>BLOGS</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
