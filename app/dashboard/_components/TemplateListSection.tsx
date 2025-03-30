import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TempCard from './TempCard'

export interface TEMP{
    name: string,
    desc: string,
    icon: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form?:FORM[]
}

export interface FORM{
    label: string,
    field: string,
    name: string,
    required?: boolean
}

const TemplateListSection = ({userSearch}:any) => {

    const [templateList, setTemplateList] = useState(Templates)

    useEffect(() => {
        // console.log(userSearch)
        if(userSearch){
            const filteredData = Templates.filter((item) => item.name.toLocaleLowerCase().includes(userSearch.toLowerCase()))
            setTemplateList(filteredData)
        }else{
            setTemplateList(Templates)
        }
    }, [userSearch])

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10'>
        {templateList.map((item:TEMP, index:number) => (
            <TempCard {...item} key={index}/>
        ))}
    </div>
  )
}

export default TemplateListSection