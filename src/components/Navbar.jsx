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
      <a href='https://usharani.vercel.app/' className='hidden font-bold lg:flex lg:ml-[20px]'><span>Usha<span className='text-[#389db6]'>Rani</span></span></a>
      <ul className='flex justify-between items-center md:mx-[20px] w-[100%] lg:w-[50%]'>
        <li className={`section ${activeSection === 'home' ? 'active' : ''}`}>
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
        <li className={`section ${activeSection === 'about' ? 'active' : ''}`}>
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
        <li className={`section ${activeSection === 'work' ? 'active' : ''}`}>
          <Link
            to='#work'
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              className='w-[20px] nav-item'
              fill='#dddddd'
              onClick={() => setItemToggle((p) => !p)}
            >
              <path d='M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z' />
            </svg>
          </Link>
        </li>
        <li className={`section ${activeSection === 'skills' ? 'active' : ''}`}>
          <Link
            to='#skills'
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-[30px] nav-item'
              fill='#dddddd'
              viewBox='0 0 24 24'
              onClick={() => setItemToggle((p) => !p)}
            >
              <path d='M9 17.38C9 16.8 8.55 16.21 8 16.21s-1 .59-1 1.17V20h6v-3.62c0-.59-.55-1.17-1-1.17zM15 2H9v2h6V2zm3 18a2 2 0 1 1-2-2 2 2 0 0 1 2 2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z' />
            </svg>
          </Link>
        </li>
        <li
          className={`section ${activeSection === 'projects' ? 'active' : ''}`}
        >
          <Link
            to='#projects'
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 576 512'
              className='w-[20px] nav-item'
              fill='#dddddd'
              onClick={() => setItemToggle((p) => !p)}
            >
              <path d='M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z' />
            </svg>
          </Link>
        </li>

        <li
          className={`section ${activeSection === 'testimonials' ? 'active' : ''}`}
        >
          <Link
            to='#testimonials'
            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='w-[20px] nav-item'
              fill='#dddddd'
              onClick={() => setItemToggle((p) => !p)}
            >
              <path d='M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.2 0 .5-.1.7-.3l3.7-3.7H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-9 11H7V8.8L8.3 6h2L8.9 9H11zm6 0h-4V8.8L14.3 6h2l-1.4 3H17z' />
            </svg>
          </Link>
        </li>

        <li
          className={`section ${activeSection === 'contact' ? 'active' : ''}`}
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
