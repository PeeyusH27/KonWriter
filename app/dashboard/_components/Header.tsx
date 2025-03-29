import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-5 shadow-sm border-b-2 items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md w-full md:w-[60vw] bg-gray-50'>
            <Search />
            <input type="text" placeholder='Search...' className='w-full outline-none'/>
        </div>
        <div className='bg-primary p-1 hidden md:flex rounded-md text-xs text-white px-2'>
            Get premium for $5 only.🔥
        </div>
    </div>
  )
}

export default Header