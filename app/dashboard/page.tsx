'use client'

import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

const DashBoard = () => {

    const [userSearch, setUserSearch] = useState<string|any>()

  return (
    <div>
        {/* Search section */}
        <SearchSection onSearchInput={(value:string) => setUserSearch(value)}/>
        {/* Template list section */}
        <TemplateListSection userSearch={userSearch}/>
    </div>
  )
}

export default DashBoard