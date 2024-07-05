import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import Pagehead from "../pageHeader/Pagehead";
import TopCourse from "./courses/TopCourse";
import OtherCourse from "./courses/OtherCourse";


const Courses = () => {
  return (
    <>
      <Pagehead pageName="Courses" pageDesc="/courses" />
      <TopCourse/>
      <OtherCourse/>
      


    </>
  );
};

export default Courses;
