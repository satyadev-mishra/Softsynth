import React, { useEffect } from "react";
import gsap from "gsap";
import bg from "../../images/bg.png";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const container = useRef(null);
  const pText1 = useRef(null);
  const pText2 = useRef(null);
  const headText = useRef(null);
  const btn = useRef(null);
  useGSAP(
    () => {
      gsap.from(
        [pText1.current, headText.current, pText2.current, btn.current],
        {
          opacity: 0,
          y: "100",
          skewY: 10,
          stagger: 0.4,
          delay: 1,
        }
      );
    },
    { scope: container }
  );
  return (
    <div className="homepage">
      {/* home page */}
      <div className="w-[100%] h-auto flex flex-col items-start sm:flex-row justify-between bg-[linear-gradient(#c5daf2,#fbdce9)] ">
        <div className="sm:w-[50%] flex flex-col gap-6 justify-center items-start px-6  my-6 ">
          <p ref={pText1} className="text-xl text-[#414141] font-semibold">
            Make your passion come true
          </p>
          <div ref={headText}>
            <h1 className="text-5xl sm:text-7xl text-[var(--font-color)] font-semibold">
              FIND YOUR <br /> IDEAL CAREER
            </h1>
          </div>
          <h2 ref={pText2} className="text-xl text-[#414141]">
            Are you stuck in a job you don’t enjoy? Not sure which career
            direction to take? If you want to have a job you are passionate
            about, well, you can!
          </h2>
          <div
            ref={btn}
            className="flex justify-center sm:justify-start w-full mt-12"
          >
            <Link to="/internship">
              <button className="bg-[var(--font-color)] text-white text-l mr-4 w-36 h-11 rounded-[30px]">
                OUR PROGRAM
              </button>
            </Link>
            <Link to="/about">
              <button className="bg-black text-white text-l mr-4 w-36 h-11 rounded-[30px]">
                ABOUT US
              </button>
            </Link>
          </div>
        </div>
        {/* left home section  */}
        <div className="w-[100%] sm:w-[50%]  flex justify-center items-center ">
          {/* <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF0066" d="M57,-58.3C70.1,-44,74.2,-22,73.2,-1.1C72.1,19.9,65.8,39.7,52.8,52.1C39.7,64.5,19.9,69.5,-0.4,69.9C-20.6,70.2,-41.2,66,-57.3,53.6C-73.4,41.2,-85,20.6,-82.7,2.3C-80.4,-16,-64.1,-31.9,-48,-46.3C-31.9,-60.6,-16,-73.3,3,-76.3C22,-79.3,44,-72.6,57,-58.3Z" transform="translate(100 100)" />
          </svg> */}
          <img
            className="w-[80%] h-auto scale-x-100 overflow-hidden mb-1 object-contain"
            src={bg}
            alt=""
          />
        </div>
      </div>
      {/*  second page  */}
    </div>
  );
};

export default Home;
