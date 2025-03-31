'use client'

import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import React, { useContext, useEffect, useState } from 'react'
import {HISTORY} from '../history/page'
import { eq } from 'drizzle-orm'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'

const TrackUsage = () => {

    const {user} = useUser()
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)

    useEffect(() => {
        user && GetData()
    }, [user])
    
    const GetData = async() => {
        if (!user?.primaryEmailAddress?.emailAddress) return;
        {/* @ts-ignore */}
        const result: HISTORY[] = await db.select().from(AIOutput)
                .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
        GetTotalUsage(result)
    }

    const GetTotalUsage = (result: HISTORY[]) => {
        const total = result.reduce((sum, item) => sum + item.aiResponse.length, 0);
        setTotalUsage(total);
        console.log(total);
    };

  return (
    <div className='m-5'>
        <div className='bg-rose-400 text-black rounded-lg p-3'>
            <h2 className='font-medium'>Credits</h2>
            <div className='h-2 bg-rose-600 w-full rounded-full mt-3'>
                <div className='h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-white rounded-full'
                style={{
                    width:(totalUsage/10000)*100+"%"
                }}></div>
            </div>
            <h2 className='text-sm text-white my-2'>{totalUsage}/10,000 credits used</h2>
        </div>
        <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
    </div>
  )
}

export default TrackUsage