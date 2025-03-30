'use client'

import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface PROPS{
    aiResponse: string
}

function OutputSection({aiResponse}:PROPS) {

    const editorRef:any = useRef(null);
    useEffect(() => {
        const editorInstanceRef = editorRef.current.getInstance();
        editorInstanceRef.setMarkdown(aiResponse)
    }, [aiResponse])


    return (
        <div className='bg-white shadow-lg border rounded-lg'>
            <div className='flex justify-between items-center p-5'>
                <h2 className='font-medium text-lg'>Generated Result</h2>
                <Button className='flex gap-2'><Copy className='w-4 h-4'/> Copy</Button>
            </div>
            <Editor
                ref={editorRef}
                initialValue="Generated result appears here..."
                initialEditType="wysiwyg"
                height='450px'
                useCommandShortcut={true}
                onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
            />
        </div>
    )
}

export default OutputSection