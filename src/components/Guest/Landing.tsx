import React from 'react'

function Landing() {
  return (
    <div className='w-full h-full min-h-screen bg-white p-8 flex flex-col items-center justify-center max-w-[80%] mx-auto'>

      <div className='flex flex-col w-full h-full gap-4 items-center relative'>
        <h1 className='lg:text-6xl text-4xl font-sans tracking-tighter font-normal text-gray-400 '>
          Azure, OpenAI, AWS, Google Analytics
        </h1>
        <h1 className='lg:text-6xl text-4xl italic font-serif tracking-normal font-medium text-black '>
          we organize your subscriptions
        </h1>

        <div className=' absolute -top-20 rotate-6 '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width={60} height={60} className='rot'>
            <g clipPath="url(#a)">
              <path d="M0 0h18v18H0V0Z" />
              <path fill="#fff" d="M12.615 10.597a4.92 4.92 0 0 1-.645 1.287c-.256.363-.466.614-.626.753-.25.23-.518.347-.805.353-.206 0-.455-.059-.744-.177a2.135 2.135 0 0 0-.8-.176c-.255 0-.529.058-.822.176-.294.118-.531.18-.712.186-.274.012-.55-.108-.823-.362-.175-.151-.393-.412-.655-.78a5.383 5.383 0 0 1-.693-1.37A4.991 4.991 0 0 1 5 8.857c0-.603.131-1.124.393-1.56a2.36 2.36 0 0 1 .829-.832c.338-.2.72-.306 1.107-.31.22 0 .506.068.862.2.355.133.582.2.682.2.076 0 .329-.079.758-.236.406-.145.75-.205 1.03-.182.76.062 1.332.36 1.712.898-.68.41-1.017.985-1.01 1.722.006.574.215 1.053.626 1.432.187.176.395.312.626.409v-.001ZM10.702 4c.006.06.01.12.01.18 0 .45-.166.87-.495 1.26-.397.462-.878.73-1.4.687a1.391 1.391 0 0 1-.01-.17c0-.433.19-.895.524-1.273.168-.192.381-.35.639-.478A1.93 1.93 0 0 1 10.702 4Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h18v18H0z" />
              </clipPath>
            </defs>
          </svg>

        </div>


        <div className=' absolute right-0 rotate-12 '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width={60} height={60}>
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


        <div className=' absolute right-20 top-10 rotate-6 '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width={60} height={60}>
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


        <div className='absolute right-20 top-[-4rem] rotate-[12deg]'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width={60} height={60}>
            <path fill="#fff" d="M0 0h18v18H0z" />
            <path fill="#4285F4" d="M13.8 9.114c0-.355-.032-.696-.09-1.023H9v1.936h2.69a2.306 2.306 0 0 1-1.004 1.505v1.259h1.623c.946-.873 1.491-2.155 1.491-3.677Z" />
            <path fill="#34A853" d="M9 14c1.35 0 2.482-.445 3.31-1.209l-1.624-1.26c-.445.3-1.013.483-1.686.483-1.3 0-2.405-.878-2.8-2.06H4.536v1.291A4.995 4.995 0 0 0 9 14Z" />
            <path fill="#FBBC05" d="M6.2 9.95c-.1-.3-.16-.618-.16-.95 0-.332.06-.65.16-.95V6.759H4.536a4.938 4.938 0 0 0 0 4.482l1.296-1.01.368-.281Z" />
            <path fill="#EA4335" d="M9 5.99c.736 0 1.39.255 1.914.746l1.431-1.431C11.477 4.495 10.35 4 9 4a4.991 4.991 0 0 0-4.464 2.76L6.2 8.05C6.595 6.868 7.7 5.99 9 5.99Z" />
          </svg>

        </div>
      </div>



    </div>
  )
}




export default Landing