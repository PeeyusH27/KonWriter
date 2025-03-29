'use client'

import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

const DashBoard = () => {

    const [userSearch, setUserSearch] = useState<string>()

  return (
    <div>
        {/* Search section */}
        <SearchSection onSearchInput={(value:string) => console.log(value)}/>
        {/* Template list section */}
        <TemplateListSection />
    </div>
  )
}

export default DashBoard