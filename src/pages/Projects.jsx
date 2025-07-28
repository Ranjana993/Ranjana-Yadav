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
      <h1 className='projects text-4xl md:text-5xl lg:text-6xl font-bold text-center pb-14 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent '>
        My All Projects
      </h1>
      <ReactProjects />
      <JsProjects />
    </section>
  )
}

export default Projects
