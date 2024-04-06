import React from "react";
import { IoClose } from "react-icons/io5";
import { ContactInputBox } from "./pages/ContactUs";

const Demo = (props) => {
  return (
    <>
      <div className="flex items-center bg-[#000000be] justify-center fixed top-0 left-0 right-0 bottom-0 z-[999]">
        <div className="flex items-center justify-center bg-gray-300 w-[40%] h-[50vh] rounded-md border-l-4 border-[var(--font-color)] relative p-4">
          <div>
            <ContactInputBox type="text" name="name" placeholder="Your Name" />
            <ContactInputBox
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <ContactInputBox
              type="tel"
              pattern="[0-9]"
              maxLength="10"
              name="number"
              placeholder="Your Contact No."
            />
            <select
              name="course"
              id=""
              className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-[var(--font-color)] dark:border-dark-3 dark:bg-dark dark:text-dark-6"
            >
              <option value="Java" className="hover:bg-slate-500">
                React
              </option>
              <option value="Java">React</option>
              <option value="Java">HTML</option>
              <option value="Java">CSS</option>
              <option value="Java">JavaScript</option>
            </select>
          </div>
          <div>
            <IoClose 
              onClick={() => props.hideModel()}
              class="h-8 w-8 cursor-pointer text-black absolute top-1 right-4 hover:text-[var(--font-color)]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;


