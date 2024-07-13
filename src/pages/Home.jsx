/* eslint-disable no-unused-vars */
import  { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import Experience from './Experience.jsx'
function Home(props) {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <section
      className=' relative z-50 md:text-[20px] md:tracking-wider text-[rgb(181,187,198)]'
      id='home'
    >
      <Navbar {...props} />
      <ToastContainer className=' max-w-[400px]' />
      <About />
      <Experience/>
      <Skills />
      <Projects />
      <Contact setShowPopup={setShowPopup} />
    </section>
  )
}

export default Home
