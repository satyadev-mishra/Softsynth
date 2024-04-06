import { React, useState } from "react";
import Demo from "../demo";
import Pagehead from "../pageHeader/Pagehead";
import CourseCard from "../CourseCard";
const ApplyInternship = (props) => {
  const [modelOpen, setModelOpen] = useState(false);
  const toggleModal = () => {
    setModelOpen(!modelOpen);
  };
  return (
    <>
      {modelOpen && <Demo hideModel={toggleModal} />}
      <Pagehead pageName="We are Hiring!" pageDesc="/internship" />
      <div className="mx-6 my-4 flex sm:flex-row flex-col justify-center sm:justify-around gap-4 flex-wrap items-center ">
        <CourseCard
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Rajan"
          courseTitle="Fullstack-Java"
          courseDuration="6 Month"
          courseDescription="Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
          apply={toggleModal}
        />
        <CourseCard
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Rajan"
          courseTitle="MERN Stack"
          courseDuration="6 Month"
          courseDescription="Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
          apply={toggleModal}
        />
        <CourseCard
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Rajan"
          courseTitle="Frontend"
          courseDuration="3 Month"
          courseDescription="Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
          apply={toggleModal}
        />
        <CourseCard
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Rajan"
          courseTitle="React js"
          courseDuration="3 Month"
          courseDescription="Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
          apply={toggleModal}
        />
        <CourseCard
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Rajan"
          courseTitle="C/C++"
          courseDuration="3 Month"
          courseDescription="Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
          apply={toggleModal}
        />
        <CourseCard
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Rajan"
          courseTitle="Python"
          courseDuration="3 Month"
          courseDescription="Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
          apply={toggleModal}
        />
        <CourseCard
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Rajan"
          courseTitle="SQL"
          courseDuration="2 Month"
          courseDescription="Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
          apply={toggleModal}
        />
        <CourseCard
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Rajan"
          courseTitle="Data Analysis"
          courseDuration="6 Month"
          courseDescription="Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
          apply={toggleModal}
        />
      </div>
    </>
  );
};

export default ApplyInternship;

