import { registerUser } from '@/app/actions/register'
import { Input } from '@headlessui/react'
import React from 'react'

function Register() {
  return (
    <form action={registerUser} className=' w-full flex flex-col gap-5 h-full p-'>
      <div className='flex flex-col gap-1 '>
        <label htmlFor='name' className='px-2 font-light text-gray-500 text-sm lowercase'>
          Full Name
        </label>
        <Input
          id='name'
          name='name'
          placeholder='Full Name'
          required
          type='text'
          className='w-full h-full bg-neutral-50 text-black placeholder:text-sm placeholder:text-gray-400 rounded-lg px-4 py-3 
          outline-none font-sans font-medium font-base tracking-tight'
        />

      </div>
      <div className='flex flex-col gap-1 '>
        <label htmlFor='email' className='px-2 font-light text-gray-500 text-sm lowercase'>
          Email
        </label>
        <Input
          id='email'
          name='email'
          placeholder='Email'
          required
          type='email'
          className='w-full h-full bg-neutral-50 text-black placeholder:text-sm placeholder:text-gray-400 rounded-lg px-4 py-3 
          outline-none font-sans font-medium font-base tracking-tight'
        />
      </div>

      <div className='flex flex-col gap-1 '>
        <label htmlFor='name' className='px-2 font-light text-gray-500 text-sm lowercase'>
          Password
        </label>
        <Input
          id='password'
          name='password'
          placeholder='Password'
          required
          type='password'
          className='w-full h-full bg-neutral-50 text-black placeholder:text-sm placeholder:text-gray-400 rounded-lg px-4 py-3 
          outline-none font-sans font-medium font-base tracking-tight'
        />
        <p className='text-gray-400 mt-2 text-sm px-2'>
          Password must be at least 8 characters long.
        </p>
      </div>


      <button type="submit" className='font-medium text-base mt-4 px-6 rounded-xl py-2 w-full bg-neutral-50 border border-dashed 
       text-gray-500 shadow-sm'>
        Register
      </button>
    </form>
  )
}

export default Register