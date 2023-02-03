import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import ContactImg from '../public/assets/contact.jpg'

function Contact() {
  return (
    <div className='w-full lg:h-screen'>
      <div className=' max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className=' uppercase text-xl tracking-wider text-[#5E17EB]'>Contact</p>
        <h2 className=' py-4 '>Get In Touch</h2>

        <div className=' grid lg:grid-col-5 gap-5'>
            <div className=' col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
             <div className=' lg:p-4 h-full'>
               <div className=''>
                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt="contact Image"></Image>
               </div>
               <div>
                <h2 className=' py-2 '>Iman Kamrava</h2>
                <p>Front-End Developer</p>
                <p className=' py-4 '>I am available for freelance or full-time positions. Contact me and let's talk</p>
               </div>
                <p className=' uppercase pt-8'>Connect with me</p>
                <div className='flex items-center justify-around my-4 w-full sm:w-[50%]' >
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
               <div></div>
        </div>


      </div>
    </div>


  )
}

export default Contact
