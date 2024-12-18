'use client'
import LoginForm from '@/components/Guest/Login/Login';
import { motion } from 'motion/react';
import Link from 'next/link';

function Page() {
  return (
    <div className='w-full h-full min-h-screen lg:max-w-[60%] mx-auto grid lg:border-r lg:border-l  overflow-hidden   '>
      <div className='w-full h-full relative'>
        <motion.div className='flex flex-col px-0 py-0 w-full h-full justify-between'
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
          <div className='flex flex-col gap-1 px-8 py-6'>
            <h1 className='text-black font-medium text-3xl font-serif'>
              Login
            </h1>
            <p className='text-gray-400 font-medium text-md'>
              Login to your account to continue where you left off.
            </p>
          </div>
          <div className='px-8 pb-8'>
            <LoginForm />
          </div>
          <div className='flex flex-col w-full items-center justify-center'>
            <Link className='font-medium text-base text-center px-6 py-6 w-full text-gray-400
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