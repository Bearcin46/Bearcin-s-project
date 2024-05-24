import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const useAnimation = (effect) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return { "data-aos": effect };
};
export default useAnimation;
