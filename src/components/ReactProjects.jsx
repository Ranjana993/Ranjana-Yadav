import { useState } from 'react';
import tailwindIcon from '../assets/tailwindCSS.png';
import reactIcon from '../assets/atom.png';
import reduxIcon from '../assets/redux-icon.png';
import footFly from "../assets/footFly.png";
import reactRouter from '../assets/react-router.svg';
import { Link } from 'react-router-dom';

function ReactProjects() {
  const [showDetail, setShowDetail] = useState({ videoHub: false, footFly: false });

  const toggleDetail = (project) => {
    setShowDetail((prevState) => ({
      ...prevState,
      [project]: !prevState[project],
    }));
  };

  return (
    <div className='animate-skill flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center '>
      {/* Video Hub Project */}
      <div
        className='react-project w-[90%] md:w-[50%] lg:w-[40%] transition duration-300 ease-in-out transform hover:scale-95'
        onClick={() => toggleDetail('videoHub')}
      >
        {!showDetail.videoHub ? (
          <div className='p-0 cursor-pointer hover:shadow-xl '>
            <img
              src={"https://kumari-ranjana-yadav-portfolio.vercel.app/assets/img/youtube-project4.png"}
              alt='Video Hub'
              className='w-[100%] rounded-md'
            />
            <h1 className='project-name text-[#389db6] font-playfair font-bold text-3xl mt-4'>
              Video Hub
            </h1>
            <p className='text-ellipsis text-[16px] overflow-hidden mt-[10px] overflow-y-auto py-4'>
              Welcome to our cutting-edge Video hub, where the world of video content comes to life with innovation and user-friendly features.
            </p>
            <p className='flex items-center flex-wrap justify-start mt-[7px] gap-3 pb-4'>
              <span className='bg-white font-bold text-sm text-black py-1 rounded-xl px-2'>
                reactjs
              </span>
              <span className='bg-white font-bold text-sm text-black py-1 rounded-xl px-2'>
                vite
              </span>
              <span className='bg-white font-bold text-sm text-black py-1 rounded-xl px-2'>
                tailwindcss
              </span>
              <span className='bg-white font-bold text-sm text-black py-1 rounded-xl px-2'>
                voice-recognition
              </span>
            </p>
          </div>
        ) : (
          <div className='p-0 cursor-pointer '>
            <h1 className='project-name text-[#389db6] font-bold text-3xl text-center mb-4 py-2 lg:py-5'>
              Video Hub - Details
            </h1>
            <p className='text-[16px] p-4 '>
              Features:
              <ul className=''>
                <li className='text-[15px] '><b>Tools:</b>Reactjs , redux , redux-thunk , react-speech-recognition </li>
                <li className='text-[15px] '>This innovative project seamlessly integrates YouTube’s real API, ensuring an authentic user
                  experience. Leveraging
                  lazy loading boosts speed by 80%, while the inclusion of React speech recognition allows
                  effortless
                  voice-activated searches.</li>
                <li className='text-[15px] '>The meticulously optimized search functionality, coupled with a sleek UI and personalized
                  settings, ensures a smooth
                  and efficient userjourney.</li>
                <li className='text-[15px] '>Additionally, the live chat feature enhances interactivity, making the app not only functional but
                  also visually
                  captivating.</li>
              </ul>
              <div className='flex justify-end mt-[40px] gap-[20px] mb-[25px]'>
                  <Link href='https://github.com/Ranjana993/video-hub' target='_blank' rel='noopener noreferrer'>
                  <button style={{ border: 'none' }} className='bg-[#24292e] hover:bg-[#0366d6] text-white font-bold py-4 px-4 rounded-full focus:outline-none'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512' width={'20px'} fill='#ffffff'>
                      <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 .7-1.3 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
                    </svg>
                  </button>
                </Link>
                  <Link href='https://video-hub-sage.vercel.app/' target='_blank' rel='noopener noreferrer'>
                  <button style={{ border: 'none' }} className='bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-3.5 rounded-full focus:outline-none'>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>

                  </button>
                </Link>
              </div>
            </p>
          </div>
        )}
      </div>

      {/* FootFly Project */}
      <div
        className='react-project transition duration-300 ease-in-out transform hover:scale-95 hover:shadow-xl  w-[90%]  md:w-[50%] lg:w-[40%]'
        onClick={() => toggleDetail('footFly')}
      >
        {!showDetail.footFly ? (
          <div className='p-0'>
            <img src={footFly} alt='FootFly' className='w-[100%] rounded-md' />
            <h1 className='project-name text-[#389db6] font-playfair font-bold text-3xl mt-4'>  FootFly  </h1>
            <p className='text-ellipsis text-[16px] overflow-hidden mt-[10px] overflow-y-auto py-4'>
              FootFly is a stylish and user-friendly e-commerce platform dedicated to providing the best footwear collections for men, women, and kids.
            </p>
            <p className='flex items-center flex-wrap justify-start mt-[7px] gap-3 pb-4'>
              <span className='bg-white font-bold text-sm text-black py-1 rounded-xl px-2'>
                react.js
              </span>
              <span className='bg-white font-bold text-sm text-black py-1 rounded-xl px-2'>
                mongoDB
              </span>
              <span className='bg-white font-bold text-sm text-black py-1 rounded-xl px-2'>
                tailwindcss
              </span>
              <span className='bg-white font-bold text-sm text-black py-1 rounded-xl px-2'>
                nodejs
              </span>
              <span className='bg-white font-bold text-sm text-black py-1 rounded-xl px-2'>
                expressjs
              </span>
            </p>
          </div>
        ) : (
          <div className='p-0'>
            <h1 className='project-name text-[#389db6] font-bold text-3xl text-center mb-[10px] py-12'>
              FootFly - Details
            </h1>
            <p className='text-[16px] mt-[10px]'>
              FootFly is a stylish and user-friendly e-commerce platform dedicated to providing the best footwear collections for men, women, and kids. This project incorporates modern web technologies including React, Redux, Tailwind CSS, and React Router.
            </p>
            <p className='text-[16px] mt-[10px]'>
              Features:
              <ul className=' ml-[20px]'>
                <li>Product catalog with filtering and sorting options</li>
                <li>Shopping cart and checkout process</li>
                <li>User authentication and authorization</li>
                <li>Responsive design</li>
              </ul>
            </p>
              <div className='flex justify-end mt-[40px] gap-[20px] mb-[25px]'>
                <Link href='https://github.com/Ranjana993/soleSphere' target='_blank' rel='noopener noreferrer'>
                  <button style={{ border: 'none' }} className='bg-[#24292e] hover:bg-[#0366d6] text-white font-bold py-4 px-4 rounded-full focus:outline-none'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512' width={'20px'} fill='#ffffff'>
                      <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 .7-1.3 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
                    </svg>
                  </button>
                </Link>
                <Link href='https://sole-sphere-frontend.vercel.app/' target='_blank' rel='noopener noreferrer'>
                  <button style={{ border: 'none' }} className='bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-3.5 rounded-full focus:outline-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                  </button>
                </Link>
              </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReactProjects;
