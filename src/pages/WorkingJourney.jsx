
const OnboardingSteps = () => {
  return (
    <div>
      <div className='p-4'>
        <h2 className='text-3xl text-white font-bold  mt-8 text-center mb-12'>Work Experience </h2>
        <div className='flex flex-col grid-cols-9 p-2 mx-auto md:grid font-poppins'>
          {/* first box*/}
 dev
          <div className='flex md:contents flex-row-reverse'>
            {/* box one child div */}
            <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 md:ml-auto mr-0 w-[300px] shadow-xl hover:shadow-lg hover:shadow-black'>
              <h3 className='text-lg font-semibold lg:text-xl'>Curious Connect </h3>
              <p className="text-sm">FullStack developer </p>
              <p className='mt-2 leading-6'>
                Select the category and find the mentor based on required field
              </p>
              {/* <span className='absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap  mb-5'>
                Step 1
              </span> */}
            </div>

            {/* dots and lins */}
            <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
              <div className='flex items-center justify-center w-6 h-full'>
                <div className='w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300'></div>
              </div>
              <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2'></div>
            </div>
          </div>

          {/* second box */}
          <div className='flex md:contents'>
            <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
              <div className='flex items-center justify-center w-6 h-full'>
                <div className='w-1 h-full bg-indigo-300'></div>
              </div>
              <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2'></div>
            </div>

            {/* content of box */}
            <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto w-[300px] shadow-xl hover:shadow-lg hover:shadow-black'>
              <h3 className='text-lg font-semibold lg:text-xl'>Experiencing</h3>
              <p className='mt-2 leading-6'>
                Book a free trail session and start inspiring from us
              </p>
              {/* <span className='absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap mb-5'>
                Step 2
              </span> */}
            </div>
          </div>

          {/* box three */}
          <div className='flex md:contents flex-row-reverse'>
            {/* content box */}
            <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto w-[300px] shadow-xl hover:shadow-lg hover:shadow-black'>
              <h3 className='text-lg font-semibold lg:text-xl'>Onboarding</h3>
              <p className='mt-2 leading-6'>
                Join the Subscription model and get on-boarded to dedicated
                community for priority mentorship on regularly basis with the
                price less then a burger
              </p>
              {/* <span className='absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap'>
                Step 3
              </span> */}
            </div>
            <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
              <div className='flex items-center justify-center w-6 h-full'>
                <div className='w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300'></div>
              </div>
              <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2'></div>
            </div>
          </div>

          {/* box four */}
          <div className='flex md:contents'>
            <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
              <div className='flex items-center justify-center w-6 h-full'>
                <div className='w-1 h-full bg-indigo-300'></div>
              </div>
              <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2'></div>
            </div>

            {/* content */}
            <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto w-[300px] shadow-xl hover:shadow-lg hover:shadow-black'>
              <h3 className='text-lg font-semibold lg:text-xl'>Implementing</h3>
              <p className='mt-2 leading-6'>
                Learn, Share And Implement your Knowledge with industry level
                projects based on your category for real world experience
              </p>
              {/* <span className='absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap'>
                Step 4
              </span> */}
            </div>
          </div>

          {/* box five */}
          <div className='flex md:contents flex-row-reverse'>
            {/* content box */}
            <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto w-[300px] shadow-xl hover:shadow-lg hover:shadow-black'>
              <h3 className='text-lg font-semibold lg:text-xl'>
                Ranking & Earning
              </h3>
              <p className='mt-2 leading-6'>
                Regularly upgrade yourself & clear the "#IAP-Levels"
                certifications become mentor & start earning with us by guiding
              </p>
              {/* <span className='absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap'>
                Step 3
              </span> */}
            </div>
            <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
              <div className='flex items-center justify-center w-6 h-full'>
                <div className='w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300'></div>
              </div>
              <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2'></div>
            </div>
          </div>

          {/* box six */}
          <div className='flex md:contents'>
            <div className='relative col-start-5 col-end-6 mr-7 md:mx-auto'>
              <div className='flex items-center justify-center w-6 h-full'>
                <div className='w-1 h-full bg-indigo-300'></div>
              </div>
              <div className='absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2'></div>
            </div>

            {/* content */}
            <div className='relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto w-[300px] shadow-xl hover:shadow-lg hover:shadow-black'>
              <h3 className='text-lg font-semibold lg:text-xl'>Inspiring</h3>
              <p className='mt-2 leading-6'>
                Inspire and motivate to community with your success with
                Inspiration APP
              </p>
              {/* <span className='absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap'>
                Step 4
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnboardingSteps
