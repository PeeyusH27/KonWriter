import { SearchIcon } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}:any) => {
    return (
        <div className='p-10 bg-gradient-to-br from-rose-400 via-rose-600 to-rose-300 flex flex-col justify-center items-center text-white'>
            <h2 className='text-3xl font-bold'>Browse All Templates</h2>
            <p>What would you like to <span className='text-yellow-200 font-bold'>CREATE</span> today?</p>
            <div className='w-1/2'>
                <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5'>
                    <SearchIcon className='text-primary' />
                    <input 
                        type="text"
                        placeholder='Search...'
                        className='bg-transparent outline-none text-gray-800'
                        onChange={(e) => onSearchInput(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchSection