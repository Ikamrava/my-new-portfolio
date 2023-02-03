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
              <p className='py-2 text-lg'>I have worked as an IT support specialist for a long time. During that time, I have created some applications for my job, and while I have always enjoyed doing so, I have never pursued it seriously. That changed in 2021 when a friend introduced me to a bootcamp. I enrolled and love it,I have been coding nonstop ever since.  </p>
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
