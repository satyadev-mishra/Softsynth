import React from 'react'

const Pagehead = ({pageName , pageDesc}) => {
  return (
    <div className='w-full h-[150px] bg-center opacity-[0.92] bg-cover bg-no-repeat bg-[url("https://img.freepik.com/free-vector/gradient-color-line-wave-background_483537-3978.jpg?w=740&t=st=1706092621~exp=1706093221~hmac=213d9a02ab279923ba055bb1139206088dbdeb16ea2d1edba9f8c6ae11ae8822")] flex justify-center items-center flex-col text-[var(--font-color)]'>
            <h1 className='text-4xl text-center'>{pageName}</h1>
            <p className='text-white'>{pageDesc}</p>
    </div>
  )
}

export default Pagehead;