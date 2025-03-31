"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import TrackUsage from './TrackUsage'
import Link from 'next/link'

const SideNav = () => {

    const menuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/setting'
        },
    ]

    const path = usePathname()
    useEffect(() => console.log(path), [])

    return (
        <div className='h-screen p-5 shadow-sm bg-white relative'>
            <div className='flex justify-center overflow-hidden'>
                <Image src={'/logomain.png'} alt='logo' width={150} height={150} />
            </div>
            <hr className='my-5 border' />
            <div className='mt-5'>
                {menuList.map((menu, index) => (
                    <Link href={menu.path}  key={index}>
                        <div className={`flex pl-8 gap-2 mb-2 p-3 
                        hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center 
                        ${path == menu.path && 'bg-primary text-white'}`}>
                            <menu.icon className='h-7 w-7' />
                            <h2 className='text-lg'>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                <TrackUsage />
            </div>
        </div>
    )
}

export default SideNav