'use client'
import LoginForm from '@/components/Guest/Login/Login';
import { motion } from 'motion/react';
import Link from 'next/link';

function Page() {
  return (
    <div className='w-full h-full min-h-screen  grid md:grid-cols-2  overflow-hidden   '>

      <div className='w-full h-full  bg-black px-10 py-10 hidden lg:flex flex-col gap-4 items-center justify-center relative'>


        <motion.h1
          className="text-white font-medium  md:text-7xl italic font-serif tracking-tight"
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, -4] }}
          transition={{
            duration: 0.78,
            type: 'spring', stiffness: 50, damping: 10,
            scale: { duration: 0.44, ease: "easeInOut" },
            rotate: { delay: 0.8, duration: 0.887, ease: "easeInOut" }
          }}
        >
          Org*
        </motion.h1>

      </div>


      <div className='w-full h-full relative'>
        <motion.div className='flex flex-col px-10 py-10 w-full h-full justify-between'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: -50 }}
          transition={{
            duration: 0.78,
            type: 'spring',
            damping: 10,
            bounce: 0.4
          }}
          key={'register'}
        >
          <div className='flex flex-col gap-1'>
            <h1 className='text-black font-medium text-3xl font-serif'>
              Login
            </h1>
            <p className='text-gray-400 font-medium text-md'>
              Login to your account to continue where you left off.
            </p>
          </div>
          <div className=''>
            <LoginForm />
          </div>
          <div className='flex flex-col w-full items-center justify-center'>
            <Link className='font-medium text-base text-center px-6 py-1 w-full text-gray-400
          transition-all ease-linear duration-200 hover:text-black cursor-pointer hover:underline'
              href='/register'
            >
              Dont have an account? Register
            </Link>
          </div>
        </motion.div>

      </div>

    </div>
  )
}

export default Page