import React from 'react';
import { Link } from 'react-router-dom';


const CourseCard = ({key , title , courseDetail , courseImg}) => {
    
    function getId(id){
        console.log(id);
        console.log(key);
    }
    return (
       
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src={courseImg} />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">{title}</h2>
            <p class="text-base leading-relaxed mt-2">{courseDetail}.</p>
            <button  onClick={()=>getId(key)} class="text-indigo-500 inline-flex items-center mt-3"> <Link to={"singlepost"} >Read More  </Link>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
      
    )
}

export default CourseCard