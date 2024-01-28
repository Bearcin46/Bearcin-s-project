import "../index.css";
import mainImage from "./images/main.jpg";
function AppContent() {
  return (
    <>
      <div className="flex  justify-between">
        <div className="flex flex-col items-start justify-center flex-1 ml-8">
          <h1 className="text-8xl font-semibold text-[#5f0f40]">
            Welcome here <span className="text-7xl">&#129309;</span>
          </h1>
          <p className="text-3xl  font-serif  mt-4">
            Based out of Nagercoil,India. Specialized in Full-Stack Development.
            Ready to build your next product or join your team remotely.
          </p>
          <div className="flex gap-3 mt-4">
            <button className="bg-[#5f0f40] hover:bg-[#761d54] text-white px-4 py-2 rounded font-semibold">
              About Me
            </button>
            <button className="text-[#5f0f40] bg-white outline-2 hover:bg-slate-50 outline-double outline-[#5fof40] px-4 py-2 rounded font-semibold">
              Hire Me
            </button>
          </div>
        </div>
        <div className="">
          <img src={mainImage} alt="main" className="w-[700x] h-[600px]" />
        </div>
      </div>
    </>
  );
}
export default AppContent;
