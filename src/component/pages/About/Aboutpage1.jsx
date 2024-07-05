import React from 'react'
import card3 from "../../../images/card3.jpg"

const Aboutpage1 = () => {
  return (


    <section className="text-gray-300 body-font bg-black">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className=" lg:w-full md:w-full w-full mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={card3}/>
    </div>
    <div className="lg:flex-grow md:w-full lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <p className="title-font sm:text-lg text-lg mb-4 font-normal lg:inline-block"><b>Softsynth</b> is well known for its best software development services and has been recommended by most of the clients as we deliver custom solutions and products to the clients based on latest technologies and IT advancement that perfectly fits the needs and usability of the end users and that's what makes us the <b> best software development company in Delhi/NCR.</b></p>
      <h2 className='border-[var(--font-color)] border-b-2  text-white font-medium '>EXPERTISE</h2>
      <p className="mb-8 leading-relaxed">Our team will help you in transforming your business with the latest technologies, improvisation and innovation.</p>
      <h2 className='border-[var(--font-color)] border-b-2  text-white font-medium '>EXPERIENCE</h2>
      <p className="mb-8 leading-relaxed">We have a great team of more than 20 IT experts having vast experience in the software industry.</p>
      <h2 className='border-[var(--font-color)] border-b-2  text-white font-medium '>SUPPORT</h2>
      <p className="mb-8 leading-relaxed">We have a separate team of customer support to help our clients in solving their technical issues.</p>
      
     
    </div>
  </div>
</section>

  
  )
}

export default Aboutpage1