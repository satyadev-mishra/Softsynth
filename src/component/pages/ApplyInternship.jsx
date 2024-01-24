import React from "react";
import Demo from "../demo";
const ApplyInternship = () => {
  return (
    <>
      <div>
        <div className="text-center">
          <span className="block text-base font-semibold text-[var(--font-color)] ">
            Internship
          </span>
          <h2 className="text-[30px] font-bold capitalise text-black lg:text-[32px]">
            We are Hiring!
          </h2>
        </div>
        <div className="mx-6 my-4 flex sm:flex-row flex-col justify-center sm:justify-around gap-4 flex-wrap items-center ">
          <CourseCard
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Rajan"
            courseTitle="Fullstack-Java"
            courseDuration="6 Month"
            courseDescription="Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
          />
          <CourseCard
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Rajan"
            courseTitle="Fullstack-Java"
            courseDuration="6 Month"
            courseDescription="Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
          />
          <CourseCard
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Rajan"
            courseTitle="Fullstack-Java"
            courseDuration="6 Month"
            courseDescription="Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
          />
          <CourseCard
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Rajan"
            courseTitle="Fullstack-Java"
            courseDuration="6 Month"
            courseDescription="Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools."
          />
        </div>
        <Demo/>
      </div>
    </>
  );
};

export default ApplyInternship;

const CourseCard = ({ src, alt, courseTitle,courseDuration, courseDescription }) => {
  return (
    <>
      <div className="w-[90%] sm:w-[320px] rounded-xl border shadow-xl cursor-pointer">
        <img
          src={src}
          alt={alt}
          className="h-[45%] w-full rounded-md object-cover object-center  p-4"
        />
        <div className="p-4">
          <h1 className="text-xl font-bold">{courseTitle}</h1>
          <p className="mt-3 text-md text-gray-600">
            <span className="text-md font-bold">Duration: </span>{courseDuration}
          </p>
          <p className="mt-3 text-md text-gray-600">
            {courseDescription}
          </p>

          <button
            type="button"
            className="w-full mt-4 rounded-md bg-black py-2 text-lg font-semibold text-white shadow-sm hover:bg-[var(--font-color)]"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};
