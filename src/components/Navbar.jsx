import { faBook, faChartLine, faSchool, faTasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState, useCallback } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Navbar() {
  const [itemToggle, setItemToggle] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const scrollToComponent = () => {
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            const offset = element.offsetTop - 50
            window.scrollTo({ top: offset, behavior: 'smooth' })
          }
        }, 100)
      } else {
        window.scrollTo(0, 0)
      }
    }

    scrollToComponent()
  }, [itemToggle])

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('section')
    let currentSection = null

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      const threshold = window.innerHeight / 3 // Adjust this value as needed

      if (rect.top <= threshold && rect.bottom >= threshold) {
        currentSection = section.id
      }
    })

    if (currentSection && activeSection !== currentSection) {
      setActiveSection(currentSection)
    }
  }, [activeSection])

  useEffect(() => {
    const debounce = (func, wait) => {
      let timeout
      return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), wait)
      }
    }

    const debouncedHandleScroll = debounce(handleScroll, 50)
    window.addEventListener('scroll', debouncedHandleScroll)

    handleScroll() // Set initial active section

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll)
    }
  }, [handleScroll])

  
  return (
    <div className='navbar flex justify-between w-full  bg-white-800 backdrop-blur-xl shadow-lg shadow-black/[0.03] p-[10px] fixed top-0 z-50'>
      <a href='#' className='hidden font-bold lg:flex lg:ml-[20px]'><span>Ranjana<span className='text-[#016958]'> Yadav</span></span></a>
      <ul className='flex justify-between items-center md:mx-[20px] w-[100%] lg:w-[50%]'>
        <li className={`section ${activeSection === 'home' ? 'active' : 'normal'}`}>
          <Link
            to='#'
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 576 512'
              className='w-[20px] nav-item'
              fill='#dddddd'
              onClick={() => setItemToggle((p) => !p)}
            >
              <path d='M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z' />
            </svg>
          </Link>
        </li>
        <li className={`section ${activeSection === 'about' ? 'active' : 'normal'}`}>
          <Link
            to='#about'
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              className='w-[20px] nav-item'
              fill='#dddddd'
              onClick={() => setItemToggle((p) => !p)}
            >
              <path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z' />
            </svg>
          </Link>
        </li>
        <li className={`section ${activeSection === 'work' ? 'active' : 'normal'}`}>
          <Link
            to='#work'
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
          >
            <FontAwesomeIcon icon={faChartLine} className="small" onClick={() => setItemToggle((p) => !p)} />
          </Link>
        </li>
        <li className={`section ${activeSection === 'skills' ? 'active' : 'normal'}`}>
          <Link
            to='#skills'
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
          >
            <FontAwesomeIcon icon={faTasks} className="small" onClick={() => setItemToggle((p) => !p)} />
          </Link>
        </li>
        <li className={`section ${activeSection === 'eduation' ? 'active' : 'normal'}`}>
          <Link
            to='#eduation'
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
          >
            <FontAwesomeIcon icon={faSchool} className="small" onClick={() => setItemToggle((p) => !p)} />
          </Link>
        </li>
        <li
          className={`section ${activeSection === 'projects' ? 'active' : 'normal'}`}
        >
          <Link
            to='#projects'
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
          >
            <FontAwesomeIcon icon={faBook} className="small" onClick={() => setItemToggle((p) => !p)} />
          </Link>
        </li>

        <li
          className={`section ${activeSection === 'contact' ? 'active' : 'normal'}`}
        >
          <Link
            to='#contact'
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              className='w-[20px] nav-item'
              fill='#dddddd'
              onClick={() => setItemToggle((p) => !p)}
            >
              <path d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z' />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
