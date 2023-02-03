import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import hulu from "../public/assets/projects/hulu.png"
import news from "../public/assets/projects/news.png"
import book from "../public/assets/projects/book.png"
import quiez from "../public/assets/projects/quiez.png"
import pass from "../public/assets/projects/pass.png"




export const Projects = () => {
    
  return (
    <div className=' w-full'>
        <div className=' max-w-[1240px] mx-auto px-2 py-16'>
            <p className=' uppercase text-xl tracking-widest text-[#5E17EB]'>ProJects</p>
            <h2 className=' py-4 '>What I've Built</h2>
            <div className=' grid md:grid-cols-2 gap-8'>
                <ProjectItem imagelink={hulu} title="Raect" link="/" basedon="React"/>
                <ProjectItem imagelink={news} title="Raect" link="/" basedon="React" />
                <ProjectItem imagelink={book} title="Raect" link="https://top-seller-books.ikamdev.co.uk/" basedon="React"/>
                <ProjectItem imagelink={quiez} title="Raect" link="/" basedon="React"/>
                <ProjectItem imagelink={pass} title="Raect" link="/" basedon="Chrome Extension"/>
            </div>
        </div>

    </div>
  )
}

              