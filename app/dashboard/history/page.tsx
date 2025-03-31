import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { currentUser } from '@clerk/nextjs/server'
import { desc, eq } from 'drizzle-orm';
import React from 'react'
import { TEMP } from '../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import Image from 'next/image';

export interface HISTORY {
    id: number,
    formData: string,
    templateSlug: string,
    aiResponse: string,
    createdBy: string,
    createdAt: string
}

async function History() {

    const user = await currentUser()

    {/* @ts-ignore */ }
    const HistoryList: HISTORY[] = await db.select().from(AIOutput)
        .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(AIOutput.id))

    const GetTemplateName = (slug: string) => {
        const template = Templates.find((item) => item.slug === slug);
        return template ? template.icon : "Unknown Template";
    };


    return (
        <div className='bg-zinc-200 w-full h-screen p-2'>
            <div className='m-3 p-5 bg-white h-screen rounded-lg'>
                <h1 className='text-5xl font-bold'>{user?.firstName}'s History</h1>
                <p className='my-2 text-gray-700'>Check your previously generated content here...</p>

                <div className="p-2">
                    <table className="min-w-full">
                        <thead>
                            <tr className="bg-gray-100 rounded-lg p-4 text-center">
                                <th className="p-4 w-60">Template</th>
                                <th className="p-4 w-68">AI Resp</th>
                                <th className="p-4 w-10">Date</th>
                                <th className="p-4 w-20">Words</th>
                                <th className="p-4 w-20">Copy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {HistoryList &&
                                HistoryList.map((item) => (
                                    <tr key={item?.id} className="text-center border-b border-gray-300 text-xs my-4 h-20">
                                        <td className=" px-4 py-4"><div className='flex items-center gap-2'><Image src={GetTemplateName(item.templateSlug)} alt='icon' width={40} height={40} />{item?.templateSlug}</div></td>
                                        <td className=" px-4 py-4 line-clamp-2">{item.aiResponse}</td>
                                        <td className=" px-4 py-4">{item.createdAt}</td>
                                        <td className=" px-4 py-4">{item.aiResponse.length}</td>
                                        <td className=" px-4 py-4">
                                            <button className="text-blue-600 font-medium">Copy</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default History