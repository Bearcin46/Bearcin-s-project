import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function MainContent(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        className="flex gap-3 shadow-lg shadow-gray-400 hover:bg-slate-100 w-fit px-3 py-2"
      >
        <div className="flex items-center justify-center">
          <img
            src={props.image}
            alt=""
            className="w-[300px] h-[200px] object-cover"
          />
        </div>
        <div data-aos="">
          <h3>
            <strong>Title: </strong>
            {props.name}
          </h3>
          <p>
            <strong>Des: </strong> {props.des}
          </p>
          <div className="flex flex-col gap-3 mt-3 ">
            <a href={props.live} target="_blank">
              {" "}
              <button className="bg-[#5f0f40] w-full hover:bg-[#761d54] text-white px-4 py-2 rounded font-semibold">
                Live
              </button>
            </a>
            <a href={props.repo} target="_blank">
              <button className="bg-[#5f0f40] w-full hover:bg-[#761d54] text-white px-4 py-2 rounded font-semibold">
                Repo
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainContent;
