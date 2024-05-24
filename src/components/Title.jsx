import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
function Title({ title, animation = "" }) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="bg-cover py-16 bg-norepeat bg-center bg-[url('https://img.freepik.com/premium-vector/technology-background-with-hitech-digital_29971-1126.jpg')] ">
        <h1
          className="text-6xl font-bold text-white text-center "
          data-aos={animation}
        >
          {title}
        </h1>
      </div>
    </>
  );
}
export default Title;
