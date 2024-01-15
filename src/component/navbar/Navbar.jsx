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
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const showMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      {/*------------------- navbar start---------------------------  */}
      <div className="sticky top-0 z-50 ">
        <div className="w-full bg-black flex justify-between py-2 px-4 sm:px-12 items-center sm:items-start">
        <div>
          <img
            className="w-32 sm:w-28"
            src={softsynthlogo}
            alt="softsynth logo"
          />
        </div>

        <div className="hidden sm:flex items-start gap-2 text-white">
          <div className="flex item-center">
            <IoLocationOutline className="text-[40px] text-[var(--font-color)]" />
            <div>
              <h1 className="text-xl">Address</h1>
              <p className="text-sm">SCF-165, First Floor,</p>
              <p className="text-sm">sector-9, Faridabad</p>
            </div>
          </div>

          <div className="flex">
            <HiOutlineDevicePhoneMobile className="text-[40px] text-[var(--font-color)]" />
            <div>
              <h2 className="text-xl">Call Us Now</h2>
              <p className="text-sm">+91 9821121575</p>
              <p className="text-sm">+91 129-4154215</p>
            </div>
          </div>

          <div className="flex">
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

        <div className="w-full hidden py-2 bg-gradient-to-r from-black to-[var(--font-color)] text-white uppercase sm:flex items-center justify-between px-10 ">
        <ul className="flex items-center gap-2 py-2">
          <li>
            <NavLink
              to="/"
              className="hover:bg-[var(--font-color)] cursor-pointer py-2 px-4 transition-all rounded-full"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:bg-[var(--font-color)] cursor-pointer py-2 px-4 transition-all rounded-full"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className="hover:bg-[var(--font-color)] cursor-pointer py-2 px-4 transition-all rounded-full"
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/internship"
              className="hover:bg-[var(--font-color)] cursor-pointer py-2 px-4 transition-all rounded-full"
            >
              Apply internship
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className="hover:bg-[var(--font-color)] cursor-pointer py-2 px-4 transition-all rounded-full"
            >
              Faq's
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:bg-[var(--font-color)] cursor-pointer py-2 px-4 transition-all rounded-full"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="Social-icon hidden md:flex gap-2 md:gap-4 px-2">
          <a href="https://www.facebook.com/softsynth" target="_blank">
            <FaFacebookF className="hover:scale-150 hover:ease-in-out duration-300 text-xl" />
          </a>
          <a
            href="https://www.instagram.com/softsynthsoftwaresolutions/"
            target="_blank"
          >
            <FaInstagram className="hover:scale-150 hover:ease-in-out duration-300 text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/company/softsynth-software-solutions"
            target="_blank"
          >
            <FaLinkedin className="hover:scale-150 hover:ease-in-out duration-300 text-xl" />
          </a>
          <a href="https://wa.me/919821121575" target="_blank">
            <FaWhatsapp className="hover:scale-150 hover:ease-in-out duration-300 text-xl" />
          </a>
          <a href="mailto:info@softsynthsoftfwaresolution.com" target="_blank">
            <FaRegEnvelope className="hover:scale-150 hover:ease-in-out duration-300 text-xl" />
          </a>
        </div>
        </div>
      </div>
      {/*------------------- navbar end---------------------------  */}
      
      {/*------------------- Mobile navbar start---------------------------  */}
      <div
        className={
          isMobileNavOpen
            ? "fixed left-0 top-0 w-[75%] h-screen sm:hidden ease-in duration-500 flex flex-col items-start gap-4 text-white bg-black uppercase text-lg py-4"
            : "fixed left-[-100%] top-0 w-[75%] h-screen sm:hidden ease-in duration-500 flex flex-col items-start gap-4 text-white bg-black uppercase text-lg py-4"
        }
      >
        <img
          className="w-32 sm:w-28 ml-4"
          src={softsynthlogo}
          alt="softsynth logo"
          
        />

        <ul className="md:hidden flex flex-col px-2 gap-6">
          <li>
            <NavLink to="/" onClick={showMobileNav}   className="hover:bg-[var(--font-color)]  py-2 px-4 transition-all rounded-full">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={showMobileNav} className="hover:bg-[var(--font-color)]  py-2 px-4 transition-all rounded-full">About</NavLink>
          </li>
          <li>
            <NavLink to="/courses" onClick={showMobileNav} className="hover:bg-[var(--font-color)]  py-2 px-4 transition-all rounded-full">Courses</NavLink>
          </li>
          <li >
            <NavLink to="/internship" onClick={showMobileNav} className="hover:bg-[var(--font-color)]  py-2 px-4 transition-all rounded-full">Apply internship</NavLink>
          </li>
          <li>
            <NavLink to="/faq" onClick={showMobileNav} className="hover:bg-[var(--font-color)]  py-2 px-4 transition-all rounded-full">Faq's</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={showMobileNav} className="hover:bg-[var(--font-color)]  py-2 px-4 transition-all rounded-full">Contact Us</NavLink>
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

    </>
  );
};

export default Navbar;
