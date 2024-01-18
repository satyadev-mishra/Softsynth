import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="p-4 my-4 border rounded-lg shadow-sm">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="text-lg font-medium">{title}</span>
        {/* {accordionOpen ? <FaAngleDown className=" transition duration-200 ease-out"/> : <FaAngleDown className="transform rotate-180"/>} */}
        <svg
          className="fill-[var(--font-color)] shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden indent-4 mt-2 text-left text-lg font-normal">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;