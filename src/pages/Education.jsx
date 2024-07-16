import { Link } from "react-router-dom"



function Education() {
  return (
    <div id='eduation' >
      <h1 className='eduation text-3xl text-center lg:text-6xl  font-semibold md:text-[25px] font-playfair pb-14 '>Education </h1>
      <div className="mt-12">
        <div className="flex gap-8 items-center justify-center">
          <div className="bg-gray-800/90 text-gray-100 p-4 rounded-2xl transition-transform duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105">
            <div className="card-content">
              <p>
                <span>
                  <Link to="https://www.gpwfaridabad.edu.in/" target="_blank"
                    className="text-white font-playfair transition font-bold text-2xl hover:text-yellow-300" >Government Polytechnic for Women </Link></span>
              </p>
              <p className="text-gray-600 text-sm font-bold">Faridabad Haryana</p>
              <p> <b>Degree: </b>Diploma in Computer Science and Engineering
                <br />
                <b>Percentage: </b>80
              </p>
              <ul>
                <p>
                  <b>Relevant Courseworks:</b>
                  <ul>
                    <li>Database management System</li>
                    <li>C programming </li>
                    <li>Basic of Computer network </li>
                  </ul>
                </p>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800/90 text-gray-100 p-4 rounded-2xl transition-transform duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105">
            <div>
              <p>
                <span className="py-4">
                  <Link href="http://www.satyaedu.org/" target="_blank"
                    className="text-white font-playfair transition font-bold text-2xl hover:text-yellow-300">Maharishi Dayanand University</Link>
                </span>
              </p>
              <p className="text-gray-600 text-sm font-bold">Rohtak Haryana</p>
              <p>
                <b>Degree: </b>Bachelor of Technology in Computer Science and Engineering
                <br />
                <b>Percentage: </b> 80
              </p>

              <ul>
                <p>
                  <b>Relevant Courseworks:</b>
                  <ul>
                    <li>Data Structures and Algorithms</li>
                    <li>Database Management Systems</li>
                    <li>Database Management Systems</li>
                  </ul>
                </p>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Education
