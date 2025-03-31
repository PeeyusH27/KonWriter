import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-br from-primary via-purple-500 to-blue-600 flex flex-col items-center justify-center text-center p-6 animate-gradient'>
      <h1 className='text-white text-6xl font-extrabold drop-shadow-lg'>
        KonWriter GenAI Application
      </h1>
      <p className='text-white text-lg mt-4 max-w-2xl'>
        Experience the power of AI-driven content generation. Effortlessly create, edit, and manage your text with KonWriter's cutting-edge technology.
      </p>
      <div className='mt-8'>
        <Link href={'/dashboard'}>
          <Button className='px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-xl bg-primary text-white hover:text-white hover:bg-blue-700 transition-all cursor-pointer'>
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;