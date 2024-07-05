import React from 'react'


const AboutCard = (props) => {
  return (
    <div className='w-[300px] h-[350px] pt-8     flex justify-around flex-col items-center'>
      <div className="text-8xl">
        {props.tag}
      </div>
      <h2 className='font-bold text-xl text-black'>{props.aboutTitle}</h2>
      <p className='text-center w-[80%]'>{props.aboutDesc}</p>
    </div>
  )
}

export default AboutCard