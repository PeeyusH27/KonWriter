'use client';

import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;

if (!API_KEY) {
    throw new Error('Google Gemini API key is missing. Add NEXT_PUBLIC_GEMINI_API_KEY to .env.local');
}
//CONVERT THE HTML TO STRING FOR TEXT EDITOR
const stripHtml = (html: string) => html.replace(/<\/?[^>]+(>|$)/g, ""); 

const genAI = new GoogleGenerativeAI(API_KEY);

export const sendPromptToGemini = async (prompt: string) => {
    try {
        const model = genAI.getGenerativeModel({ 
            model: 'gemini-1.5-flash', 
            generationConfig: { 
                temperature: 0.8,
                topP:0.95,
                topK: 40,
                maxOutputTokens: 1000,
                responseMimeType: 'text/plain' } });
        const result = (await model.generateContent(prompt));
        const stringText = result.response.text();
        if(prompt.includes('plain text format')){
            return stripHtml(stringText)
        }
        return stringText
    } catch (error) {
        console.error('Error generating AI response:', error);
        return 'Error generating content. Please try again later.';
    }
};
