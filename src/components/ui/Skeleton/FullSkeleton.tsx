import React from 'react'

function FullSkeleton() {
  return (
    <div className="w-full h-full  border-l-0 border-r-0 lg:px-0 px-4">
      <div className="w-full h-full grid lg:grid-cols-3 lg:border-b-0 gap-6  mt-10">
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


      <div className="grid lg:grid-cols-2 mb-6 mt-6 grid-cols-1 gap-6 w-full">
        {
          Array(6).fill(0).map((_, index) => (
            <div className="w-full h-full rounded-lg  flex  bg-white border border-dashed  px-6  group cursor-pointer py-6 justify-between"
              key={index}
            >
              <div className="flex flex-col w-full  items-baseline gap-1">
                <div className="skeleton bg-neutral-100 rounded-lg  p-4 w-[100px] h-full "></div>
              </div>

              <div className="flex flex-col items-end justify-between h-full gap-0 ">
                <div className='w-full py-2'>
                  <div className='skeleton bg-neutral-100 rounded-lg  p-4 w-[100px] h-full '></div>
                </div>
              </div>
            </div>
          ))}

      </div>
    </div>
  )
}

export default FullSkeleton