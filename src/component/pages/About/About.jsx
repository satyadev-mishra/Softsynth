import React from 'react'
import Pagehead from '../../pageHeader/Pagehead'
import Aboutpage1 from './Aboutpage1';
import Aboutpage2 from './Aboutpage3';
import Aboutpage3 from './Aboutpage2';




const About = () => {
  return (
    <>
      <Pagehead
        pageName="About us"
        pageDesc="lorem5"
      />
      <Aboutpage1/>
      <Aboutpage2/>
      <Aboutpage3/>
    
      {/*********************** second about page  **********************/}
     

    </>
  )
}

export default About;