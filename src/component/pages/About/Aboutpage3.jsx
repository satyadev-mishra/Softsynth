import React from 'react';
import AboutCard from './aboutComp/AboutCard';
import { GoGoal } from 'react-icons/go';
import { RiQuestionAnswerLine } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { GiStairsGoal } from 'react-icons/gi'

const Aboutpage2 = () => {
    return (
       

        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="text-center mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Dedicated to your life improvement</h1>
                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Working one-on-one with a certified Life Coach can help you identify and attain your biggest goals. Our private coaching clients experience significant breakthroughs that lead them to challenge their thinking, resulting in remarkable changes in their careers, relationships and quality of life.</p>
                    <div class="flex mt-6 justify-center">
                        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
                        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                           
                                <GoGoal className='h-12 w-12' />
                            
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Identify your goals</h2>
                            <p class="leading-relaxed text-base">Continually reintermediate integrated processes through technically sound intellectual capital.</p>
                           
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
                        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                        <RiQuestionAnswerLine className='h-12 w-12' />
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Finding the answers</h2>
                            <p class="leading-relaxed text-base">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
                           
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
                        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                          <FaLaptopCode className='h-12 w-12'/>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Apply into code</h2>
                            <p class="leading-relaxed text-base">Nanotechnology immersion along the information highway will close the loop on the bottom line.</p>
                           
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
                        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                           <GiStairsGoal className='h-12 w-12'/>
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Achieve success</h2>
                            <p class="leading-relaxed text-base">Organically grow the holistic world view of disruptive innovation via workplace diversity.</p>
                            
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default Aboutpage2