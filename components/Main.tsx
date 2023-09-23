import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export const Main = () => {
  return (
    <div className=' w-full h-screen text-center '>
    <div className=' max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center flex-col'>
        <div>
           <p className=' uppercase text-sm tracking-widest text-gray-600 '> Lets Do It</p>
           <h1 className=' mt-5'>Hi, I'm <span className=' text-[#5E17EB]'>Iman</span></h1>
           <h1 className=' mt-5'>A Full-Srack Web Developer</h1>
           <p className=' mt-5 text-1xl max-w-lg text-center mx-auto' >My interests are in Front End Engineering, and I love to create beautiful and performant products with delightful user experiences.</p>
        </div>
        <div className='flex items-center justify-around my-4 w-full sm:w-[50%] pt-10' >
                <Link
                  href='https://www.linkedin.com/in/iman-kamrava/'
                  target='_blank'
                  rel='noreferrer'>
                  <div className=' bg-[#5E17EB] text-white rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn size={30}  />
                  </div>
                </Link>
                <a
                  href='https://github.com/Ikamrava'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='bg-[#5E17EB] text-white rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub size={30}  />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    className=' bg-[#5E17EB] text-white rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail size={30}  />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div className='bg-[#5E17EB] text-white rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill size={30}  />
                  </div>
                </Link>
          </div>
    </div>
    </div>
  )
}
