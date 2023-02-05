
import React from 'react'
import ProjectItem from './ProjectItem'
import { DataType } from '@/utils/type'



type Props = {
  data:DataType
}




export const Projects = ({data}:Props) => {

  

  return (
    <div id='projects' className=' w-full'>
        <div className=' max-w-[1240px] mx-auto px-2 py-16'>
            <p className=' uppercase text-xl tracking-widest text-[#5E17EB]'>ProJects</p>
            <h2 className=' py-4 '>What I've Built</h2>
            <div className=' grid md:grid-cols-2 gap-8'>
             
            {data.map(pro=>(
              <ProjectItem key={pro.title} title={pro.title} image={pro.image} titletec={pro.titletec}
              overview={pro.overview}
              weblink={pro.weblink}
              gitlink={pro.gitlink}
              tecnos={pro.tecnos}
              />
            )
            )}

            </div>

       

            
        </div>

    </div>
  )


}



              