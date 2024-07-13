import  { useEffect, useState } from 'react'
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
    <section className='py-4 flex flex-col items-center' id='projects'>
      <h1 className='projects text-3xl lg:text-6xl  font-semibold md:text-[25px] font-playfair pb-14 '>
        Projects
      </h1>
      <ReactProjects />
      <JsProjects />
    </section>
  )
}

export default Projects
