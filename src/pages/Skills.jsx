
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import htmlIcon from '../assets/html-5.png'
import cssIcon from '../assets/css-3.png'
import jsIcon from '../assets/js.png'
import tailwindIcon from '../assets/tailwindCSS.png'
import reactIcon from '../assets/atom.png'
import reduxIcon from '../assets/redux-icon.png'
import gitIcon from '../assets/social.png'
import firebaseIcon from '../assets/firebase.png'
import responsiveDesignIcon from '../assets/responsive.png'
import { Link } from 'react-router-dom'
import reactRouter from '../assets/react-router.svg'
import '../App.css' // Ensure you have this CSS file for animations

function Skills() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  if (loading) {
    return null
  }

  return (
    <section className='mt-[30px] flex flex-col items-center' id='skills'>
      <h2 className='skills mb-[15px] text-white font-semibold md:text-[25px]'>
        Skills
      </h2>
      <ul className='w-[90%] flex gap-[40px] justify-center flex-wrap'>
        <Link to='https://developer.mozilla.org/en-US/docs/Web/HTML'>
          <li className='skill animate-skill cursor-pointer py-[20px]'>
            <img
              src={htmlIcon}
              alt='html'
              width={'30px'}
              className='md:w-[50px]'
            />
          </li>
        </Link>
        <Link to='https://developer.mozilla.org/en-US/docs/Web/CSS'>
          <li className='skill  animate-skill cursor-pointer py-[20px]'>
            <img
              src={cssIcon}
              alt='css'
              width={'30px'}
              className='md:w-[50px]'
            />
          </li>
        </Link>
        <Link to='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
          <li className='skill  animate-skill cursor-pointer py-[20px]'>
            <img
              src={jsIcon}
              alt='js'
              width={'30px'}
              className='md:w-[50px]'
            />
          </li>
        </Link>
        <Link to='https://tailwindcss.com/docs/installation'>
          <li className='skill animate-skill cursor-pointer py-[25px] md:py-[30px]'>
            <img
              src={tailwindIcon}
              alt='tailwind'
              width={'30px'}
              className='md:w-[50px]'
            />
          </li>
        </Link>
        <Link to='https://react.dev/'>
          <li className='skill  animate-skill cursor-pointer py-[20px]'>
            <img
              src={reactIcon}
              alt='react'
              width={'30px'}
              className='md:w-[50px]'
            />
          </li>
        </Link>
        <Link to='https://redux.js.org/'>
          <li className='skill  animate-skill cursor-pointer py-[20px]'>
            <img
              src={reduxIcon}
              alt='redux'
              width={'30px'}
              className='md:w-[50px]'
            />
          </li>
        </Link>
        <Link to='https://firebase.google.com/'>
          <li className='skill  animate-skill cursor-pointer py-[24px]'>
            <img
              src={firebaseIcon}
              alt='firebase'
              width={'35px'}
              className='md:w-[50px]'
            />
          </li>
        </Link>
        <Link to='https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design'>
          <li className='skill  animate-skill cursor-pointer py-[20px]'>
            <img
              src={responsiveDesignIcon}
              alt='responsive-web-design'
              width={'35px'}
              className='md:w-[50px]'
            />
          </li>
        </Link>
        <Link to='https://git-scm.com/doc'>
          <li className='skill  animate-skill cursor-pointer py-[20px]'>
            <img
              src={gitIcon}
              alt='git'
              width={'30px'}
              className='md:w-[50px]'
            />
          </li>
        </Link>
        <Link to='https://reactrouter.com/en/main'>
          <li className='skill animate-skill cursor-pointer py-[25px] md:py-[30px]'>
            <img
              src={reactRouter}
              alt='react-router'
              width={'30px'}
              className='md:w-[50px]'
            />
          </li>
        </Link>
      </ul>
    </section>
  )
}

export default Skills

