import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Testimonials() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return null
  }
  return (
    <section className='mt-[30px] flex flex-col items-center' id='testimonials'>
      <h1 className='testimonials md:text-[25px] text-white font-bold'>
        Testimonial
      </h1>
      <div className='testimonial w-[80%] mt-[25px] flex flex-col lg:flex-row-reverse lg:items-start'>
        <p className='mb-[25px]'>
          <span className='text-white font-bold'>Ranjana </span> is an
          <span className='text-white font-bold'>exceptional professional</span>
          with unparalleled
          <span className='text-white font-bold'>R&D skills,</span> a supportive
          nature, and remarkable
          <span className='text-white font-bold'>leadership qualities.</span>
          Her <span className='text-white font-bold'>innovative approach</span>
          and
          <span className='text-white font-bold'>dedication to excellence</span>
          have consistently propelled our
          <span className='text-white font-bold'>team to new heights</span>.
          Ranjana&apos;s <span className='text-white font-bold'>guidance</span> and
          <span className='text-white font-bold'>mentorship</span> have been
          invaluable, fostering a
          <span className='text-white font-bold'>
            collaborative environment
          </span>
          where everyone feels
          <span className='text-white font-bold'>empowered to succeed.</span>
        </p>
        <div className='flex flex-col  items-center gap-[10px] sm:flex-row sm:items-center lg:flex-col'>
          <Link to={'#'}>
            <div
              style={{
                backgroundImage: `url(${""})`,
                backgroundPosition: 'center',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                border: '4px solid #389db6',
              }}
              className='w-[70px]  lg:w-[100px] lg:h-[100px] h-[50px] rounded-full'
            ></div>
          </Link>
          <div className='flex flex-col  items-center  sm:mt-[0px] lg:mt-0'>
            <h2 className='Mentor text-lg text-[#389db6] font-bold sm:mr-[130px] lg:mr-0 lg:text-xl'>
              Vikash Rahii
            </h2>
            <span className='text-[10px] text-center w-[230px] sm:text-start text-white lg:text-center'>
              Co-Founder at
              <Link
                to={'https://curiousecosystem.org/'}
                className='text-[#319bef] underline'
              >
                Grey chain Technology <br />
              </Link>
              Co-Founder at
              <Link
                to={'https://inspirationapp.org/'}
                className='text-[#319bef] underline'
              >
                Inspiration App
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
