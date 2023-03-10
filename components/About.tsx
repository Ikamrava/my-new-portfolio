import Image from 'next/image'
import React from 'react'

export const About = () => {
  return (
    <div id = "about" className='md:h-screen p-2 flex items-center py-16 pt-24'>
        <div className=' max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className=' col-span-2'>
              <p className=' uppercase text-xl tracking-wider text-[#5E17EB]'>About</p>
              <h2 className=' py-4 '>Who Am I</h2>
              <p className='py-2 text-lg  '>I am crazy about coding</p>
              <p className='py-2 text-lg'>As a software engineer, I have experience with React, Node JS, TypeScript, Firebase, Next JS, Agile and waterfall development, Figma, and more.
I have some Python expertise, and I'm now learning C# and MySql.
I've created many applications in several languages while working in the IT sector.
Please communicate with me if I may be of help or the other way around, as I am constantly looking to learn and develop individually.  </p>
              <p className='py-2'>Check out some of my latest projects</p>
            </div>
            <div className=' shadow-xl shadow-gray-400 rounded-xl flex items-center 
            justify-center hover:scale-105 ease-in duration-300 p-4'>
                <Image className='rounded-xl' src="/assets/images/iman.jpg" alt="profile pic" width={350} height={300} />
            </div>
        </div>
    </div>
  )
}
