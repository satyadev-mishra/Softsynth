import React from 'react'
import Pagehead from '../pageHeader/Pagehead'

const About = () => {
  return (
    <>
    <Pagehead 
    pageName="About us"
    pageDesc ="lorem5"
    />
    <div className='w-full h-[600px] bg-red-600 flex' >
      <div className='w-[50%] h-full '>
        <img src="https://img.freepik.com/free-photo/successful-happy-business-team_53876-74892.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705968000&semt=sph" alt="" className='w-full h-full' />
      </div>
      <div className='w-[50%] h-full bg-black p-4 flex justify-between flex-col'>
        <div>
        <p className='text-white'><b>Softsynth</b> is well known for its best software development services and has been recommended by most of the clients as we deliver custom solutions and products to the clients based on latest technologies and IT advancement that perfectly fits the needs and usability of the end users and that's what makes us the <b> best software development company in Delhi/NCR.</b> </p>
        <br />
        <p className='text-white'>Our team will help you in transforming your business with the latest technologies, improvisation and innovation.</p>
        </div>
        <div className='text-white'>
          <h2 className='border-b-4 border-[#d23031] w-[80px] mb-4 font-bold '>EXPERTISE</h2>
          <p>We Deals in ERP, CRM, E-learning, Medical software,GYM software, inventory, Poultry management system, E-commerce, Real estate, news applications, quiz app, CRM, Medical software. .</p>
        </div>
        <div className='text-white'>
          <h2 className='border-b-4 border-[#d23031] w-[95px] mb-4 font-bold'>EXPERIENCE</h2>
          <p>We have a great team of more than 20 IT experts having vast experience in the software industry.</p>
        </div>
        <div className='text-white'>
          <h2 className='border-b-4 border-[#d23031] w-[110px] mb-4 font-bold'>Quick Support</h2>
          <p>We have a separate team of customer support to help our clients in solving their technical issues.</p>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default About;