import React from 'react'
import Pagehead from '../pageHeader/Pagehead'

const About = () => {
  return (
    <>
    <Pagehead 
    pageName="About us"
    pageDesc ="lorem5"
    />
    <div className='w-full h-[500px] bg-red-600 flex' >
      <div className='w-[50%] h-full bg-green-700'>
        <img src="" alt="" />
      </div>
      <div className='w-[50%] h-full bg-blue-700'></div>
    </div>
    </>
  )
}

export default About;