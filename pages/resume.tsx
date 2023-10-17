import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import certificate from "../public/assets/skills/scrimba.png"

function resume() {
  return (
   <>
      <Head>
        <title>Iman Kamrava | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>
      <Navbar/>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Iman Kamrava </h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/iman-kamrava'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Ikamrava'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving |
            </p>
          </div>
          <div className='block sm:hidden'>
            
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          As a Full-Stack Developer, I have experience with React, Node JS, TypeScript, Firebase, Next JS, Agile and waterfall development, Figma, and more.
I have some Python expertise, and I'm now learning C# and MySql.
I've created many applications in several languages while working in the IT sector.
Please communicate with me if I may be of help or the other way around, as I am constantly looking to learn and develop individually.
     
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span> Typescript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> RESTAPI
             <span className='px-2'>|</span> MySql
              <span className='px-2'>|</span> C#
              <span className='px-2'>|</span> Python
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>

       
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Code Your Future
            </span>
            <span className='px-2'>|</span>London, UK
          </p>
          <p className='py-1 italic'>Full-Stack Developer (Mar 2022 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Assisting students with the <span className=' font-bold'>React, Node JS, TypeScript, JavaScript, CSS, and HTML</span> assignments.

            </li>
            <li>
              Recommending improvements to students' work
            </li>
            <li>
              Providing assistance with setting up their work environments, including <span className=' font-bold'>React, VS Code, Linux and Github.</span>
            </li>
           
          </ul>
        </div>


       
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='py-5 italic font-bold '>Certificates</p>
            <Image src={certificate} alt="certificate" />
        </div>

      </div>
    </>
  );

}

export default resume
