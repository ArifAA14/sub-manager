import { ArrowRight } from 'lucide-react'
import React from 'react'
import Logos from './Logos/Logos'
import Link from 'next/link'

function Landing() {
  return (
    <div className='w-full h-full min-h-screen bg-white flex flex-col overflow-x-hidden items-center justify-center '>

      <div className='flex flex-col w-full h-full gap-2  items-center relative lg:max-w-[80%] lg:mx-auto'>
        <h1 className='lg:text-6xl text-3xl font-serif text-center tracking-tighter font-normal text-gray-400 '>
          Azure, OpenAI, Oracle, Adobe
        </h1>
        <h1 className='lg:text-6xl text-center text-3xl italic font-serif tracking-normal font-medium text-black '>
          We organize your subscriptions
        </h1>

        <Logos />

        <div className='w-full flex items-center gap-4 justify-center mt-6'>
          <Link href='/register'>
          <button className='text-white flex items-center gap-2 rounded-xl bg-black 
          hover:bg-black/80 transition-all ease-linear duration-150 font-medium  font-sans text-base  tracking-tight px-5 py-1.5'>
            Join Now <ArrowRight size={17} />
            </button>
          </Link>
          <Link href='/login'>
          <button className='text-gray-400 font-medium  font-sans text-base  tracking-tight '>
            Dashboard
            </button>
          </Link>
        </div>
      </div>



    </div>
  )
}




export default Landing