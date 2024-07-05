import React, { useEffect } from "react";
import gsap from "gsap";
import bg from "../../images/bg.png";
import career from "../../images/career.png";
import assessment from "../../images/assessment.png"
import card4 from "../../images/card4.jpg"
import card5 from "../../images/card5.jpg"
import card6 from "../../images/card6.jpg"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Aboutpage1 from "./About/Aboutpage1";

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
      <div className="w-[100%] h-auto lg:flex-row   flex flex-col items-start sm:flex-row justify-between bg- ">
        <div className="sm:w-[50%] flex flex-col gap-4 justify-center items-start px-6  my-6 ">
          <p ref={pText1} className="text-xl text-[#414141] font-semibold">
            MAKE YOUR PASSION COME TRUE
          </p>
          <div ref={headText}>
            <h1 className="text-8xl  text-[var(--font-color)] font-semibold">
              FIND YOUR IDEAL CAREER
            </h1>
          </div>
          <h2 ref={pText2} className="text-xl text-[#414141]">
            Are you stuck in a job you don't enjoy? Not sure which career direction to take? If you want
            to have a job you are passionate about, well, you can!  
          </h2>
          <div
            ref={btn}
            className="flex justify-center sm:justify-start w-full mt-10"
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
       
          <img
            className="w-[80%] h-[100%] scale-x-100 overflow-hidden object-fit"
            src={bg}
            alt=""
          />
        </div>
      </div>
      <Aboutpage1/>
      {/*  second page  */}
      
      {/* second page end  */}
     
    
       {/* third page start  */}
       <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex justify-center flex-col items-center mb-20 ">
      <h1 className="text-4xl w-[50%] text-center text-[var(--font-color)]  ">Career you’re passionate</h1>
<h1 className="text-4xl  text-center mb-10 border-b-4 border-[var(--font-color)] p-4 ">about is there for you</h1>
<p className="w-[70%] text-center">Whether your focus is on determining career direction, conducting a job search or improving work performance, you will have access to one of our expert career consultants and career tools.</p>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
       
          <img className="w-1/2" src={career} alt="" />
       
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Career coaching</h2>
        <p className="leading-relaxed text-base">When it comes to your career management, having a professional career coach at your side is a key element to your support system.</p>
       
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Assesments</h2>
        <p className="leading-relaxed text-base">The right career assessment and expert interpretation will provide you with invaluable insight into who you are and your next move.</p>
        
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      
        <img className="w-1/2" src={assessment} alt="" />
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        
        <img className="w-1/2" src="https://cdn-icons-png.flaticon.com/512/10342/10342446.png" alt="" />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Interview coaching</h2>
        <p className="leading-relaxed text-base">Prepare with strategy and practice so you are ready for anything, present the best you, and stand out in the crowd.</p>
      
      </div>
    </div>
   
  </div>
</section>
{/* third page end  */}
      
      
      
    </div>
    

  );
};

export default Home;
