import React from 'react'

const Home = () => {
  return (
    <div className='homepage'>
       <div className='w-[100%] h-[600px] flex justify-between items-center '>
        <div className="w-[45%] h-[80%] flex flex-col gap-8 justify-center items-start ml-8 ">
            <p className='text-xl'>MAKE YOUR PASSION COME TRUE</p>
            <div>

            <h1 className='text-7xl text-[maroon]'>FIND YOUR</h1>
            <h1 className='text-7xl text-[maroon]'>IDEAL CAREER</h1>
            </div>
            <h2 className='text-xl'>Are you stuck in a job you don’t enjoy? Not sure which career direction to take? If you want to have a job you are passionate about, well, you can!</h2>
            <div>
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