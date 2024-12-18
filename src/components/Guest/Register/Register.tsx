import { registerUser } from '@/app/actions/register'
import { Input } from '@/components/ui/Inputs/Input'
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
        />
        <p className='text-gray-400 mt-2 text-sm px-2'>
          Password must be at least 8 characters long.
        </p>
      </div>


      <button type="submit" className='font-medium text-lg mt-4 px-6 rounded-xl py-2 w-full bg-black 
       text-white shadow-sm'>
        Register
      </button>
    </form>
  )
}

export default Register