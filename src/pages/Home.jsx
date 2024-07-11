import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Work from './Work.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Testimonial from './Testimonials.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import OnboardingSteps from './WorkingJourney.jsx'
import Experience from './Experience.jsx'
function Home(props) {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <section
      className='home relative z-50 md:text-[20px] md:tracking-wider text-[rgb(181,187,198)]'
      id='home'
    >
      <Navbar {...props} />
      <ToastContainer className=' max-w-[400px]' />
      <About />
      {/* <Work /> */}
      {/* <OnboardingSteps /> */}
      <Experience/>
      <Skills />
      <Projects />
      <Testimonial />
      <Contact setShowPopup={setShowPopup} />
    </section>
  )
}

export default Home
