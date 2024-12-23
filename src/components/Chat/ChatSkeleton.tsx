import React from 'react'

function ChatSkeleton() {
  return (
    <div className="w-full h-full bg-white min-h-screen p-12 flex flex-col lg:max-w-[80%] mx-auto">
      <div className="w-full h-full grid lg:grid-rows-3 lg:border-b-0 gap-6  mt-10">
        {
          Array(3).fill(0).map((_, index) => (
            <div className='w-full h-full  rounded-lg border border-dashed  px-0  bg-white  flex flex-col gap-0 relative justify-between' key={index}>
              <div className='h-full w-full tracking-tight text-black  px-6 py-8 '>
                <div className='skeleton bg-neutral-100 rounded-lg  p-4 w-[100px] h-full '></div>
              </div>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default ChatSkeleton