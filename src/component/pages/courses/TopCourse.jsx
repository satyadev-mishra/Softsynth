import React from 'react';
import java from "../../../images/javaimg.jpg"
import mern from "../../../images/mern1.jpg"

const TopCourse = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">JAVA FULLSTACK DEVELOPMENT
      </h1>
      <p class="mb-8 leading-relaxed">Develop Dynamic Web Applications with Java. Master Java programming, Angular for responsive front-end web development, and Spring and Spring Boot for robust back-end systems, culminating in a comprehensive skillset to build, integrate, and deploy cloud-ready web applications.</p>
      <ul className='pb-4'>
      <li className='list-disc' >Core Java</li>
        <li className='list-disc'>Advance Java</li>
        <li className='list-disc'>Spring And Spring-Boot HYbernet</li>
        <li className='list-disc'>Mysql Database</li>
      </ul>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-[var(--font-color)] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</button>
       
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={java}/>
    </div>
  </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={mern}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">MERN STACK DEVELOPMENT
      </h1>
      <p class="mb-8 leading-relaxed">MERN is a pre-built technology stack based on JavaScript technologies. MERN stands for MongoDB, Express, React, and Node, after the four key technologies that make up the stack.</p>
      <ul  className='list-disc pb-4'>
        <li className='list-disc' >MongoDB — document database</li>
        <li className='list-disc'>Express(.js) — Node.js web framework</li>
        <li className='list-disc'>React(.js) — a client-side JavaScript framework</li>
        <li className='list-disc'>Node(.js) — the premier JavaScript web server (runtime)</li>
      </ul>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-[var(--font-color)] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read More</button>
        
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default TopCourse