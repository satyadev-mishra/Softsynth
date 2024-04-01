import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import Pagehead from "../pageHeader/Pagehead";

const Courses = () => {
  return (
    <>
      <Pagehead pageName="Courses" pageDesc="/courses" />
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className="max-w-md text-center">
        <h2 className="mb-6 font-extrabold text-7xl text-gray-400">
          <span className="sr-only"></span>Sorry!
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">
          We are working on this page.
        </p>
        <p className="mt-4 mb-8 text-gray-600">
          But dont worry, you can contact us.
        </p>
        <Link
          to="/contact"
          className="px-4 py-3 font-semibold rounded bg-[var(--font-color)] text-gray-50 flex gap-1 items-center justify-center text-lg w-fit mx-auto"
        >
          <IoArrowBackSharp />
          <span>Contact Us</span>
        </Link>
      </div>
      </div>
    </>
  );
};

export default Courses;
