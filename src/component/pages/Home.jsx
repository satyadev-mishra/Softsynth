import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Home = () => {
  const container = useRef(null)
  const pText1 = useRef(null)
  const pText2 = useRef(null)
  const headText = useRef(null)
  const btn = useRef(null)
  useGSAP(()=>{
    gsap.from([pText1.current  , headText.current ,pText2.current, btn.current],{
      opacity:0,
      y:'100',
      skewY:10,
      stagger:.4,
      delay:1
    } )
   
    

  } , {scope:container})
  return (
    <div className='homepage'>
       <div className='w-[100%] h-[600px] flex justify-between  '>
        <div className="w-[45%] h-[70%] flex flex-col gap-8 justify-center items-start ml-8 ">
            <p ref={pText1} className='text-xl'>MAKE YOUR PASSION COME TRUE</p>
            <div ref={headText}>

            <h1 className='text-7xl text-[maroon]'>FIND YOUR</h1>
            <h1 className='text-7xl text-[maroon]'>IDEAL CAREER</h1>
            </div>
            <h2 ref={pText2} className='text-xl'>Are you stuck in a job you don’t enjoy? Not sure which career direction to take? If you want to have a job you are passionate about, well, you can!</h2>
            <div ref={btn}>
            <button className='bg-[maroon] text-white mr-4 w-36 h-11 rounded-[30px]'>OUR PROGRAM</button>
            <button className='bg-[black] text-[maroon] mr-4 w-36 h-11 rounded-[30px]'>ABOUT US</button>
            </div>

        </div>
        <div className="w-[50%] h-[100%] bg-slate-600"></div>
    </div>
    
    </div>
  )
}

export default Home;