import { React, useState } from "react";
import PopupModel from "../PopupModel";
import Pagehead from "../pageHeader/Pagehead";
import CourseCard from "../CourseCard";
const ApplyInternship = (props) => {
  const [modelOpen, setModelOpen] = useState(false);
  const toggleModal = () => {
    setModelOpen(!modelOpen);
  };
  return (
    <>
      {modelOpen && <PopupModel hideModel={toggleModal} />}
      <Pagehead pageName="We are Hiring!" pageDesc="/internship" />
      <div className="mx-6 my-4 flex sm:flex-row flex-col justify-center sm:justify-around gap-4 flex-wrap items-center ">
        <CourseCard
          src="https://appmaster.io/api/_files/hRaLG2N4DVjRZJQzCpN2zJ/download/"
          alt="Rajan"
          courseTitle="Fullstack-Java"
          courseDuration="6 Month"
          courseDescription="Course covering both frontend and backend development using Java, including frameworks like Spring. Covers database integration and deployment."
          apply={toggleModal}
        />
        <CourseCard
          src="https://imgs.search.brave.com/YOZEA8VqtmSbbByB9x2l_1V-Ag3Q03pHQonBZknSo3o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9lMS5w/eGZ1ZWwuY29tL2Rl/c2t0b3Atd2FsbHBh/cGVyLzUyNC83OC9k/ZXNrdG9wLXdhbGxw/YXBlci1kZXZlbG9w/aW5nLWEtbWVybi1z/dGFjay1hcHBsaWNh/dGlvbi1tZXJuLXN0/YWNrLmpwZw"
          alt="Rajan"
          courseTitle="MERN Stack"
          courseDuration="6 Month"
          courseDescription="Course integrating MongoDB, Express.js, React, and Node.js for full-stack web development. Focuses on JavaScript technologies for scalable applications."
          apply={toggleModal}
        />
        <CourseCard
          src="https://miro.medium.com/v2/resize:fit:1358/1*xwAIUbfad95lsuGf2n9nnA.jpeg"
          alt="Rajan"
          courseTitle="Frontend"
          courseDuration="3 Month"
          courseDescription="Course concentrating on client-side development, involving HTML, CSS, and JavaScript. Emphasizes UI/UX design principles and responsive web development."
          apply={toggleModal}
        />
        <CourseCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaVaJ1_r6xIoM4vd0SuHIXaTMe62c78LbV8HT5HjP8cSUaW4Lb_V9Xt0-d1zSHK8J3nEw"
          alt="Rajan"
          courseTitle="React js"
          courseDuration="3 Month"
          courseDescription=" Course focusing on the React library for building interactive user interfaces. Covers state management, component lifecycle, and virtual DOM."
          apply={toggleModal}
        />
        <CourseCard
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Rajan"
          courseTitle="C/C++"
          courseDuration="3 Month"
          courseDescription="focusing on object-oriented programming, memory management, and high-performance application development, including data structures and algorithms."
          apply={toggleModal}
        />
        <CourseCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2GEuLtKEqeLZanQmEE2b1-rKvPiYTZCvtQ"
          alt="Rajan"
          courseTitle="Python"
          courseDuration="3 Month"
          courseDescription="Course teaching Python programming language fundamentals. Covers data types, control structures, functions, and object-oriented programming."
          apply={toggleModal}
        />
        <CourseCard
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240320150923/SQL-Tutorial.png"
          alt="Rajan"
          courseTitle="SQL"
          courseDuration="2 Month"
          courseDescription="Course covering Structured Query Language for managing relational databases. Includes querying, data manipulation, and database administration."
          apply={toggleModal}
        />
        <CourseCard
          src="https://miro.medium.com/v2/resize:fit:1400/0*2fBIH8UQ8qij8fE7.jpg"
          alt="Rajan"
          courseTitle="Data Analysis"
          courseDuration="6 Month"
          courseDescription="Course focusing on analyzing and interpreting data using statistical methods and software tools. Includes data cleaning, visualization, and generating insights."
          apply={toggleModal}
        />
      </div>
    </>
  );
};

export default ApplyInternship;

