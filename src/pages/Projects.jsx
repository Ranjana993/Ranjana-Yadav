import React, { useEffect, useState } from 'react'
import ReactProjects from '../components/ReactProjects.jsx'
import JsProjects from '../components/JsProjects.jsx'

function Projects() {
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return null
  }
  return (
    <section className='mt-[30px] flex flex-col items-center' id='projects'>
      <h1 className='projects text-white font-semibold md:text-[25px]'>
        Projects
      </h1>
      <p className='leading-[25px] md:leading-[35px] mt-[30px] px-[10px] md:px-[50px] lg:px-[70px]'>
        I've crafted 10+ mini projects in{' '}
        <span className='text-white font-semibold'>HTML, CSS</span>, and{' '}
        <span className='text-white font-semibold'>JavaScript</span>, refining
        my{' '}
        <span className='text-white font-semibold'>
          frontend & JavaScript skills
        </span>
        . Additionally, I've led development on two{' '}
        <span className='text-white font-semibold'>React</span> projects—a{' '}
        <span className='text-white font-semibold'>chat app</span> and a{' '}
        <span className='text-white font-semibold'>resume builder</span>.
      </p>
      
      <ReactProjects/>
       <JsProjects/>
    </section>
  )
}

export default Projects
