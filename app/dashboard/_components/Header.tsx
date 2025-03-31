import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between gap-2 p-5 shadow-sm border-b-2 items-center bg-white'>
        <div className='flex gap-2 items-center p-2 border rounded-md w-full md:w-[60vw] bg-gray-50 '>
            <Search />
            <input type="text" placeholder='Search...' className='w-full outline-none'/>
        </div>
        <div className='bg-primary p-2 hidden md:flex rounded-md text-[10px] text-center lg:text-xs animate-pulse text-white font-medium px-2'>
            <h2>Get premium for $5 only.</h2>
        </div>
            <UserButton />
    </div>
  )
}

export default Header