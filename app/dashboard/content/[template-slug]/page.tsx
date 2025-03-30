'use client'

import React, { useState, use } from 'react'
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMP } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
// import { chatSession } from '@/utils/AiModel';
import { sendPromptToGemini } from '@/utils/AiModel';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';

interface PROPS {
    params: Promise<{
        'template-slug': string,
    }>,
}

function CreateNewContent(props: PROPS) {
    // Unwrap params using React.use()
    const { 'template-slug': templateSlug } = use(props.params);
    const [loading, setLoading] = useState(false);
    const [aiResponse, setAiResponse] = useState<string>('')

    //GET USER USING CLERK HOOK
    const {user} = useUser()

    const currentTemplate: TEMP | undefined = Templates?.find((item) => item.slug == templateSlug);

    const generateAiContent = async (formData: any) => {
        setLoading(true);
    //Set LOADING TRUE and FROM CURRENTTEMPLATE extract AiPromt
        const selectedPrompt = currentTemplate?.aiPrompt;
        // Add user text to AiPrompt to make the AIPrompt as per users request
        const FinalAiPrompt = JSON.stringify(formData) + ", " + selectedPrompt;
    //Send the FinalPrompt to sendPromptToGemini Func in AiModel.tsx to generate response
        const resultText = await sendPromptToGemini(FinalAiPrompt);
        console.log(resultText);
        setAiResponse(resultText)
        await saveInDatabase(JSON.stringify(formData), currentTemplate?.slug, resultText)
        setLoading(false);
    };

    const saveInDatabase = async(formData:any, slug:any, aiResponse:string) => {
        const result = await db.insert(AIOutput).values({
            formData: formData,
            templateSlug: slug,
            aiResponse: aiResponse,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: Date.now()
        })
        console.log(result)
    }

    return (
        <div className='p-6'>
            <Link href={'/dashboard'}>
                <Button ><ArrowLeft />Go Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-3'>
                {/* FormSection */}
                <FormSection currentTemplate={currentTemplate}
                    userFormInput={(val: any) => generateAiContent(val)}
                    loading={loading}
                />
                {/* OutputSection */}
                <div className='col-span-2'>
                    <OutputSection aiResponse={aiResponse}/>
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;