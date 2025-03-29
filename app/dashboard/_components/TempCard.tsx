import React from 'react'
import { TEMP } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

const TempCard = (item:TEMP) => {
  return (
    <Link href={'/dashboard/content/'+item?.slug}>
    <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-2 cursor-pointer max-h-48 hover:scale-102 transition-all'>
        <Image src={item.icon} alt='icon' width={50} height={50}/>
        <h2 className='font-medium text-md'>{item.name}</h2>
        <p className='text-gray-500 text-sm line-clamp-3'>{item.desc}</p>
    </div>
    </Link>
  )
}

export default TempCard