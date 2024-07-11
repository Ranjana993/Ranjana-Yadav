import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Work() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return null
  }
  return (
    <section
      className='active px-[10px] mt-[30px] flex flex-col items-center text-[rgb(181,187,198)] md:px-[50px] lg:px-[70px] '
      id='work'
    >
      <div className='flex flex-col items-center lg:flex lg:flex-row lg:items-center  lg:gap-[20px]'>
        <div>
          <h2 className='mt-[30px] mb-[15px]  text-white font-semibold md:text-[25px] text-center lg:text-start '>
            Work Experience
          </h2>
          <p className='leading-[25px] md:leading-[35px]'>
            I've been actively involved in{' '}
            <span className='text-white font-semibold'>contributing</span> to{' '}
            <Link
              to='https://inspirationapp.org/'
              className='text-[#319bef] underline'
            >
              Inspiration App
            </Link>{' '}
            since <span className='text-white font-semibold'>January</span>. My
            contributions include{' '}
            <span className='text-white font-semibold'>leading</span> the
            development of the{' '}
            <span className='text-white font-semibold'>Resume Builder</span>{' '}
            feature, which has become an integral part of the platform. I've
            also played a significant role in enhancing the application's{' '}
            <span className='text-white font-semibold'>state management</span>{' '}
            with <span className='text-white font-semibold'>Redux Toolkit</span>. The{' '}
            <span className='text-white font-semibold'>contribution graph</span>{' '}
            below showcases my{' '}
            <span className='text-white font-semibold'>dedication</span> and{' '}
            <span className='text-white font-semibold'>commitment</span> to our
            projects.
          </p>
        </div>
        {/* <img
          src={graphImg}
          alt='Contribution Graph'
          className='mt-[20px] mb-[20px] lg:mt-0 lg:mb-0 lg:w-[450px] xl:pt-[70px]'
        /> */}
      </div>
      <p className='leading-[25px] md:leading-[35px]'>
        As the <span className='text-white font-semibold'>lead</span> , my role
        encompassed not only{' '}
        <span className='text-white font-semibold'>
          technical contributions
        </span>{' '}
        but also{' '}
        <span className='text-white font-semibold'>
          leadership, mentorship, <span className='text-white'>and</span>{' '}
          fostering a collaborative <span className='text-white'>and</span>{' '}
          productive team environment
        </span>
        .
      </p>
    </section>
  )
}

export default Work
