import React from 'react'
import CourseCard from './CourseCard'
import java from "../../../images/javaimg.jpg"

const OtherCourse = () => {
    const courseDetail = [
        {   
            id:1,
            title:"Core Jave",
            description:"eldsjlsflflsdf",
            courseImg:java
        },
        {   
            id:2,
            title:"Advance Jave",
            description:"",
            courseImg:""
        },
        {   
            id:3,
            title:"React Frontend",
            description:"",
            courseImg:""
        },
    ]

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col">
                    <div class="h-1 bg-gray-200 rounded overflow-hidden">
                        <div class="w-24 h-full bg-indigo-500"></div>
                    </div>
                    <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Other Courses</h1>
                        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                    </div>
                </div>
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {courseDetail.map(course=><CourseCard key={course.id} title={course.title} courseDetail={course.description} courseImg = {course.courseImg}/>)}
                    
                </div>
            </div>
        </section>
    )
}

export default OtherCourse