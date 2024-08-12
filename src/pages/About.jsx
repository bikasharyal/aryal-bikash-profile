import React from 'react'

const About = () => {
  return (
    <div name="about" className='h-screen w-full bg-primary'>
        <div className='flex flex-col justify-center items-center w-full h-full text-gray-300'>
          <div className='grid w-full max-w-[1200px] md:grid-cols-2 gap-8'>
            <div className='text-center md:text-right pb-8 md:col-span-1'>
              <p className='text-600 text-4xl font-bold border-600 inline' style={{ color: '#800000', textDecoration:'underline', textDecorationColor: '#800000'}} >About</p>
            </div>
            <div className='row-start-2 text-center md:text-right md:col-span-1 px-5 md:px-0'>
              <h1 className='text-4xl font-bold'>
               Greetings! Please take a look around.
              </h1>
            </div>
            <div className='md:row-start-2 md:col-span-1 px-5 md:px-0'>
              <h2 className='text-lg font-light'>
              I am a software engineer, a computer science student at EPITA - Paris (specialization in Software Engineering), a software architecture enthusiast, a nature lover and avid mountain biker, and a passionate individual dedicated to building web applications and solving complex problems.
              </h2>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
