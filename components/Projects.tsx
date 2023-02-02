import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import prpertyimg from "../public/assets/projects/property.jpg"



export const Projects = () => {
    
  return (
    <div className=' w-full'>
        <div className=' max0w-[1240px] mx-auto px-2 py-16'>
            <p className=' uppercase text-xl tracking-widest text-[#5E17EB]'>ProJects</p>
            <h2 className=' py-4 '>What I've Built</h2>
            <div className=' grid md:grid-cols-2 gap-8'>
                <ProjectItem imagelink={prpertyimg} title="Raect" link="/" basedon="React"/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>


            </div>
        </div>

    </div>
  )
}

              