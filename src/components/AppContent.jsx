import "../index.css";
import mainImage from "./images/main.jpg";
function AppContent() {
  return (
    <>
      <div className="flex md:flex md:flex-row flex-col gap-4 justify-between">
        <div className="flex flex-col items-start justify-center flex-1 ml-3 mt-10 md:ml-8">
          <h1 className="text-5xl md:text-8xl font-cursive font-bold mt-2 text-[#5f0f40]">
            Welcome here <span className="text-4xl md:text-7xl">&#129309;</span>
          </h1>
          <p className="text-xl md:text-3xl  font-serif  mt-4">
            Specialized in Full-Stack Development. Ready to build your next
            product or join your team. Explore my journey of Full Stack
            development from beginner level to till now here.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://resume.io/r/FnWM79XIF" target="_blank">
              <button className="bg-[#5f0f40] hover:bg-[#761d54] text-white px-4 py-2 rounded font-semibold">
                About Me
              </button>
            </a>
            <a href="tel:+60-166050498">
              <button className="text-[#5f0f40] bg-white outline-2 hover:bg-slate-50 outline-double outline-[#5fof40] px-4 py-2 rounded font-semibold">
                Hire Me
              </button>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={mainImage}
            alt="main"
            className="md:w-[600px] md:h-[600px] w-[300px] h-[300px]"
          />
        </div>
      </div>
    </>
  );
}
export default AppContent;
