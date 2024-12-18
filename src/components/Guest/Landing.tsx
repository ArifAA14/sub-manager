import React from 'react'

function Landing() {
  return (
    <div className='w-full h-full min-h-screen bg-white flex flex-col overflow-x-hidden items-center justify-center '>

      <div className='flex flex-col w-full h-full gap-2  items-center relative lg:max-w-[80%] mx-auto'>
        <h1 className='lg:text-6xl text-3xl font-serif tracking-tighter font-normal text-gray-400 '>
          Azure, OpenAI, Oracle, Adobe..
        </h1>
        <h1 className='lg:text-6xl text-3xl italic font-serif tracking-normal font-medium text-black '>
          We organize your subscriptions
        </h1>

        <div className=' absolute -top-20 rotate-6 left-20'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='lg:w-[60] lg:h-[60] w-[40] h-[40]'>
            <g clipPath="url(#a)">
              <path fill="#FA0C00" d="M0 0h18v18H0V0Z" />
              <path fill="#fff" d="M7.7 4.5H4v8.85L7.7 4.5Zm2.604 0H14v8.85L10.304 4.5ZM9.002 7.762l2.356 5.588H9.812l-.704-1.78H7.385l1.617-3.808Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h18v18H0z" />
              </clipPath>
            </defs>
          </svg>

        </div>


        <div className=' absolute top-[0rem] rotate-[-4deg] left-0 lg:left-4'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='lg:w-[60] lg:h-[60] w-[40] h-[40]'>
            <g clipPath="url(#a)">
              <path d="M0 0h18v18H0V0Z" />
              <path fill="#fff" d="M12.237 10.734c-.259-.327-.458-.56-.458-1.189V7.46c0-.88-.06-1.703-.708-2.306-.519-.478-1.373-.654-2.047-.654-1.425 0-2.698.58-3.01 2.137-.026.177.104.252.207.278l1.351.123c.13 0 .208-.125.234-.25.104-.529.572-.972 1.09-.972.285 0 .848.287.848.89v.754c-.83 0-1.757.056-2.483.357-.855.353-1.586 1.028-1.586 2.11 0 1.382 1.064 2.137 2.204 2.137.96 0 1.482-.25 2.232-.979.235.352.38.603.82.979.105.051.234.051.31-.024.26-.228.712-.703.996-.929.13-.102.104-.252 0-.377ZM9.744 8.775c0 .502-.098 1.756-1.368 1.756-.653 0-.666-.769-.666-.769 0-.988 1.049-1.317 2.034-1.317v.33Z" />
              <path fill="#FFB300" d="M12.917 12.952C11.862 13.601 10.284 14 9.005 14a7.818 7.818 0 0 1-4.713-1.551c-.101-.084 0-.168.1-.126 1.432.685 3 1.036 4.587 1.026 1.154 0 2.609-.209 3.787-.628.174-.042.325.126.15.231Zm.376-.44c-.125-.147-.878-.063-1.204-.043-.101 0-.125-.062-.025-.125.576-.357 1.554-.252 1.655-.126.1.126-.026.943-.577 1.32-.076.064-.176.021-.126-.04.126-.253.402-.84.276-.987Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h18v18H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>


        <div className=' absolute top-[6rem] rotate-[14deg] left-20'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='lg:w-[60] lg:h-[60] w-[40] h-[40]'>
            <g clipPath="url(#a)">
              <path fill="#2660F5" d="M0 0h18v18H0V0Z" />
              <g clipPath="url(#b)">
                <path fill="#F7F5F2" d="M6.08 4.128 3.191 5.965l2.89 1.837L8.97 5.965l2.889 1.837 2.889-1.837-2.89-1.837L8.97 5.965 6.08 4.128Zm0 7.349L3.191 9.64l2.89-1.837L8.97 9.64l-2.89 1.837ZM8.97 9.64l2.889-1.837 2.889 1.837-2.89 1.837L8.97 9.64Zm0 4.286L6.08 12.09l2.89-1.837 2.889 1.837-2.89 1.837Z" />
              </g>
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h18v18H0z" />
              </clipPath>
              <clipPath id="b">
                <path fill="#fff" d="M3 4h12v10H3z" />
              </clipPath>
            </defs>
          </svg>

        </div>


        <div className=' absolute right-0 rotate-12 '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='lg:w-[60] lg:h-[60] w-[40] h-[40]'>
            <g clipPath="url(#a)">
              <path fill="#040404" d="M0 0h18v18H0V0Z" />
              <path fill="#F35325" d="M4.5 4.5h4.286v4.286H4.5V4.5Z" />
              <path fill="#81BC06" d="M9.214 4.5H13.5v4.286H9.214V4.5Z" />
              <path fill="#05A6F0" d="M4.5 9.214h4.286V13.5H4.5V9.214Z" />
              <path fill="#FFBA08" d="M9.214 9.214H13.5V13.5H9.214V9.214Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h18v18H0z" />
              </clipPath>
            </defs>
          </svg>

        </div>


        <div className=' absolute right-20 top-[6rem] lg:top-[4rem] rotate-6 '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='lg:w-[60] lg:h-[60] w-[40] h-[40]'>
            <g clipPath="url(#a)">
              <path fill="#B9503C" d="M0 0h18v18H0V0Z" />
              <path fill="#fff" fillRule="evenodd" d="M7 6.75a2.25 2.25 0 0 0 0 4.5h4a2.25 2.25 0 0 0 0-4.5H7ZM3.25 
              9A3.75 3.75 0 0 1 7 5.25h4a3.75 3.75 0 1 1 0 7.5H7A3.75 3.75 0 0 1 3.25 9Z" clipRule="evenodd" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h18v18H0z" />
              </clipPath>
            </defs>
          </svg>


        </div>


        <div className='absolute right-20 top-[-4rem] rotate-[-4deg] '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='lg:w-[60] lg:h-[60] w-[40] h-[40]'>
            <g clipPath="url(#a)">
              <path fill="#F06A69" d="M0 0h18v18H0V0Z" />
              <path fill="#fff" d="M11.548 8.851a1.951 1.951 0 1 0 0 3.903 1.951 1.951 0 0 0 0-3.903Zm-5.07 0a1.951 1.951 0 1 0-.054 3.903 1.951 1.951 0 0 0 .055-3.902Zm4.487-2.439a1.951 1.951 0 1 1-3.903 0 1.951 1.951 0 0 1 3.903 0Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h18v18H0z" />
              </clipPath>
            </defs>
          </svg>


        </div>

        <div className='w-full flex items-center gap-4 justify-center mt-6'>
          <button className='text-gray-400 font-medium italic font-serif text-2xl underline tracking-tight px-4 py-1.5'>
            Get Started
          </button>
        </div>
      </div>



    </div>
  )
}




export default Landing