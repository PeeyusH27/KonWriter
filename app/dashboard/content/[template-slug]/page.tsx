'use client'

import React from 'react'
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMP } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PROPS {
    params: {
        'template-slug': string,
    },
}

function CreateNewContent(props: PROPS) {

    const currentTemplate: TEMP | undefined = Templates?.find((item) => item.slug == props.params['template-slug'])

    const generateAiContent = (formData: any) => {

    }

    return (
        <div className='p-5'>
            <Link href={'/dashboard'}>
                <Button ><ArrowLeft />Go Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
                {/* FormSection */}
                <FormSection currentTemplate={currentTemplate}
                    userFormInput={(val: any) => console.log(val)}
                />
                {/* OutputSection */}
                <div className='col-span-2'>
                    <OutputSection />
                </div>
            </div>
        </div>
    )
}

export default CreateNewContent