import { React, useState } from "react";
import softsynthlogo from "../../images/softsynthlogo.png";
import { IoLocationOutline, IoMenu, IoClose } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaRegEnvelope,
} from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const showMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  // **********Animation code****************//
  const container = useRef(null);
  const logo = useRef(null);
  const top_icon1 = useRef(null);
  const top_icon2 = useRef(null);
  const top_icon3 = useRef(null);
  const bottom_menu1 = useRef(null);
  const bottom_menu2 = useRef(null);
  const bottom_menu3 = useRef(null);
  const bottom_menu4 = useRef(null);
  const bottom_menu5 = useRef(null);
  const bottom_menu6 = useRef(null);
  const social_icon1 = useRef(null);
  const social_icon2 = useRef(null);
  const social_icon3 = useRef(null);
  const social_icon4 = useRef(null);
  const social_icon5 = useRef(null);

  useGSAP(
    () => {
      gsap.from(logo.current, {
        opacity: 0,
        y: "100",
        stagger: 0.1,
      });
      gsap.to(logo.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.Out",
      });
      gsap.from([top_icon1.current, top_icon2.current, top_icon3.current], {
        opacity: 0,
        y: "-200",
        duration: 1,
        // ease:"power4.out",
        stagger: 0.3,
      });
      gsap.to([top_icon1.current, top_icon2.current, top_icon3.current], {
        opacity: 1,
        y: "0",
        duration: 1,
        ease: "power4.out",
        stagger: 0.5,
      });
      // bottom navbar animation

      gsap.from(
        [
          bottom_menu1.current,
          bottom_menu2.current,
          bottom_menu3.current,
          bottom_menu4.current,
          bottom_menu5.current,
          bottom_menu6.current,
        ],
        {
          opacity: 1,
          // x:"30" ,
          duration: 1,
          stagger: 0.2,
          delay: 2,
          ease: "Power4.Out",
        }
      );
      gsap.from(
        [
          bottom_menu1.current,
          bottom_menu2.current,
          bottom_menu3.current,
          bottom_menu4.current,
          bottom_menu5.current,
          bottom_menu6.current,
        ],
        {
          opacity: 0,
          x: "0",
          duration: 1,
          stagger: 0.2,
          delay: 1,
          ease: "Power4.Out",
        }
      );

      gsap.from(
        [
          social_icon1.current,
          social_icon2.current,
          social_icon3.current,
          social_icon4.current,
          social_icon5.current,
        ],
        {
          y: "50",
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 2,
          ease: "Power4.Out",
        }
      );
    },
    { scope: container }
  );

  return (
    <>
      {/*-------------------top navbar start---------------------------  */}
     
        <div className="w-full bg-black flex justify-between py-2 px-4 sm:px-12 items-center sm:items-start">
          <div>
            <img
              ref={logo}
              className="w-32 sm:w-28"
              src={softsynthlogo}
              alt="softsynth logo"
            />
          </div>

          <div className="hidden sm:flex items-start gap-2 text-white">
            <div className="flex item-center" ref={top_icon1}>
              <IoLocationOutline className="text-[40px] text-[var(--font-color)]" />
              <div>
                <h1 className="text-xl">Address</h1>
                <p className="text-sm">SCF-165, First Floor,</p>
                <p className="text-sm">sector-9, Faridabad</p>
              </div>
            </div>

            <div ref={top_icon2} className="flex">
              <HiOutlineDevicePhoneMobile className="text-[40px] text-[var(--font-color)]" />
              <div>
                <h2 className="text-xl">Call Us Now</h2>
                <p className="text-sm">+91 9821121575</p>
                <p className="text-sm">+91 129-4154215</p>
              </div>
            </div>

            <div className="flex" ref={top_icon3}>
              <HiOutlineMail className="text-[40px] text-[var(--font-color)] mr-1" />
              <div>
                <h2 className="text-xl">Email Us</h2>
                <p className="text-sm">info@softsynthsoftware.com</p>
              </div>
            </div>
          </div>

          {isMobileNavOpen ? (
            <IoClose
              className="text-white text-[2.5rem] block sm:hidden cursor-pointer hover:text-[var(--font-color)]"
              onClick={showMobileNav}
            />
          ) : (
            <IoMenu
              className="text-white text-[2.5rem] block sm:hidden cursor-pointer hover:text-[var(--font-color)]"
              onClick={showMobileNav}
            />
          )}
        </div>
        {/*------------------- top navbar end---------------------------  */}

        {/*------------------- bottom navbar start---------------------------  */}

        <div className="sticky top-[-1px] z-50 w-full hidden py-2 bg-gradient-to-r from-black to-[var(--font-color)] text-white uppercase sm:flex items-center justify-between px-10 ">
          <ul className="flex items-center gap-2 py-2">
            <li ref={bottom_menu1}>
              <NavLink
                to="/"
                className="hover:bg-[var(--font-color)] cursor-pointer py-2 px-4 transition-all rounded-full"
              >
                Home
              </NavLink>
            </li>
            <li ref={bottom_menu2}>
              <NavLink
                to="/about"
                className="hover:bg-[var(--font-color)] cursor-pointer py-2 px-4 transition-all rounded-full"
              >
                About
              </NavLink>
            </li>
            <li ref={bottom_menu3}>
              <NavLink
                to="/courses"
                className="hover:bg-[var(--font-color)] cursor-pointer py-2 px-4 transition-all rounded-full"
              >
                Courses
              </NavLink>
            </li>
            <li ref={bottom_menu4}>
              <NavLink
                to="/internship"
                className="hover:bg-[var(--font-color)] cursor-pointer py-2 px-4 transition-all rounded-full"
              >
                internship
              </NavLink>
            </li>
            <li ref={bottom_menu5}>
              <NavLink
                to="/faq"
                className="hover:bg-[var(--font-color)] cursor-pointer py-2 px-4 transition-all rounded-full"
              >
                Faq's
              </NavLink>
            </li>
            <li ref={bottom_menu6}>
              <NavLink
                to="/contact"
                className="hover:bg-[var(--font-color)] cursor-pointer py-2 px-4 transition-all rounded-full"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="Social-icon hidden md:flex gap-2 md:gap-4 px-2">
            <a
              ref={social_icon1}
              href="https://www.facebook.com/softsynth"
              target="_blank"
            >
              <FaFacebookF className="hover:scale-150 hover:ease-in-out duration-300 text-xl" />
            </a>
            <a
              ref={social_icon2}
              href="https://www.instagram.com/softsynthsoftwaresolutions/"
              target="_blank"
            >
              <FaInstagram className="hover:scale-150 hover:ease-in-out duration-300 text-xl" />
            </a>
            <a
              ref={social_icon3}
              href="https://www.linkedin.com/company/softsynth-software-solutions"
              target="_blank"
            >
              <FaLinkedin className="hover:scale-150 hover:ease-in-out duration-300 text-xl" />
            </a>
            <a
              ref={social_icon4}
              href="https://wa.me/919821121575"
              target="_blank"
            >
              <FaWhatsapp className="hover:scale-150 hover:ease-in-out duration-300 text-xl" />
            </a>
            <a
              ref={social_icon5}
              href="mailto:info@softsynthsoftfwaresolution.com"
              target="_blank"
            >
              <FaRegEnvelope className="hover:scale-150 hover:ease-in-out duration-300 text-xl" />
            </a>
          </div>
        </div>
    
      {/*------------------- bottom navbar end---------------------------  */}

     

      {/*------------------- Mobile navbar start---------------------------  */}
      <div
        className={
          isMobileNavOpen
            ? "fixed z-[100] left-0 top-0 w-[75%] h-screen sm:hidden ease-in duration-500 flex flex-col items-start gap-4 text-white bg-black uppercase text-lg py-4"
            : "fixed z-[100] left-[-100%] top-0 w-[75%] h-screen sm:hidden ease-in duration-500 flex flex-col items-start gap-4 text-white bg-black uppercase text-lg py-4"
        }
      >
        <Link to="">
          <img
            className="w-32 sm:w-28 ml-4"
            src={softsynthlogo}
            alt="softsynth logo"
          />
        </Link>

        <ul className="md:hidden flex flex-col px-2 gap-6">
          <li>
            <NavLink
              to="/"
              onClick={showMobileNav}
              className="hover:bg-[var(--font-color)]  py-2 px-4 transition-all rounded-full"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={showMobileNav}
              className="hover:bg-[var(--font-color)]  py-2 px-4 transition-all rounded-full"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              onClick={showMobileNav}
              className="hover:bg-[var(--font-color)]  py-2 px-4 transition-all rounded-full"
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/internship"
              onClick={showMobileNav}
              className="hover:bg-[var(--font-color)]  py-2 px-4 transition-all rounded-full"
            >
              internship
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              onClick={showMobileNav}
              className="hover:bg-[var(--font-color)]  py-2 px-4 transition-all rounded-full"
            >
              Faq's
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={showMobileNav}
              className="hover:bg-[var(--font-color)]  py-2 px-4 transition-all rounded-full"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="Social-icon flex flex-wrap mt-8">
          <a href="https://www.facebook.com/softsynth" target="_blank">
            <FaFacebookF className="hover:text-[var(--font-color)] hover:ease-in-out duration-300 text-xl mx-2" />
          </a>
          <a
            href="https://www.instagram.com/softsynthsoftwaresolutions/"
            target="_blank"
          >
            <FaInstagram className="hover:text-[var(--font-color)] hover:ease-in-out duration-300 text-xl mx-2" />
          </a>
          <a
            href="https://www.linkedin.com/company/softsynth-software-solutions"
            target="_blank"
          >
            <FaLinkedin className="hover:text-[var(--font-color)] hover:ease-in-out duration-300 text-xl mx-2" />
          </a>
          <a href="https://wa.me/919821121575" target="_blank">
            <FaWhatsapp className="hover:text-[var(--font-color)] hover:ease-in-out duration-300 text-xl mx-2" />
          </a>
          <a href="mailto:info@softsynthsoftfwaresolution.com" target="_blank">
            <FaRegEnvelope className="hover:text-[var(--font-color)] hover:ease-in-out duration-300 text-xl mx-2" />
          </a>
        </div>
      </div>
      {/*------------------- Mobile navbar end---------------------------  */}
      {/* https://www.youtube.com/watch?v=dQ6RNltrXro */}
    </>
  );
};

export default Navbar;
