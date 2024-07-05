import React from 'react'
import card4 from "../../../images/card4.jpg"
import card5 from "../../../images/card5.jpg"
import card6 from "../../../images/card6.jpg"

const  Aboutpage3= () => {
  return (
    <div className="w-[100%] h-[100%] flex gap-1 justify-center items-center box-border flex-wrap bg-[var(--bg-color)]  ">
        {/* Card design  */}
        <div className="max-w-md m-10 lg:max-w-xs  rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
         <div className="overflow-hidden">
         <img src={card4} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 hover:scale-125 ease-in-out duration-300" />
         </div>
          <div className="flex flex-col justify-between items-center p-6 space-y-8 bg-white">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-wide">Career transition</h2>
              <p className="dark:text-gray-800">Discovering the right career starts with understanding what drives you. Establish your brand and your strategy for completing career transition</p>
            </div>
            <button type="button" className="flex items-center justify-center w-40 p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 bg-white border-2 
            hover:bg-[var(--font-color)] ease-in-out duration-300">Read more</button>
          </div>
        </div>
        <div className="max-w-md m-10 lg:max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="overflow-hidden">
        <img src={card5} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 hover:scale-125 ease-in-out duration-300" />
        </div>
          <div className="flex flex-col justify-between items-center p-6 space-y-8 bg-white">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-wide">Career development</h2>
              <p className="dark:text-gray-800">It’s time to maximize your personal and professional potential. This means being in charge of your career’s direction today.</p>
            </div>
            <button type="button" className="flex items-center justify-center w-40 p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 border-2 bg-white
            hover:bg-[var(--font-color)] ease-in-out duration-300">Read more</button>
          </div>
        </div>
        <div className="max-w-md m-10 lg:max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 ">
          <div className="overflow-hidden">
          <img src={card6} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 hover:scale-125 ease-in-out duration-300" />
          </div>
          <div className="flex flex-col justify-between items-center p-6 space-y-8 bg-white">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-wide">Counseling</h2>
              <p className="dark:text-gray-800">Your career counselor provides a supportive working relationship to help you understand and embrace your abilities, interests and potential.</p>
            </div>
            <button type="button" className="flex items-center justify-center w-40 p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 bg-white border-2
            hover:bg-[var(--font-color)] ease-in-out duration-300">Read more</button>
          </div>
        </div>
      </div>

  )
}

export default Aboutpage3;