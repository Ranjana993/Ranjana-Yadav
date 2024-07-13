
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Experience from './pages/Experience.jsx'
import Footer from './pages/Footer.jsx'

function App() {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const scrollToComponent = () => {
      const hash = window.location.hash
      console.log(hash)
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            let navbarHeight = 0
            const navbar = document.querySelector('.navbar')

            if (navbar) {
              navbarHeight = navbar.offsetHeight
            }
            const offset = element.offsetTop - navbarHeight
            window.scrollTo({ top: offset, behavior: 'smooth' })
          }
        }, 100)
      } else {
        window.scrollTo(0, 0)
      }
    }

    scrollToComponent()
  }, [toggle])

  function handleClick() {
    setToggle((prev) => !prev)
  }

  return (
    <div className='bg-[#2C333F] text-white overflow-x-hidden'>
      <Navbar toggle={toggle} setToggle={setToggle} handleClick={handleClick} />

      <Routes>
        <Route path='/' element={<Home toggle={toggle} setToggle={setToggle} handleClick={handleClick} />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Experience />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
