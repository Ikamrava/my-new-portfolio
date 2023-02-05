/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri';
import Image from 'next/image'
import Link from 'next/link';
import { nanoid } from 'nanoid'

type Props = {
   title: string,
    image:any,
    titletec: string,
    overview: string
    weblink:string
    gitlink:string
    tecnos:[]
}




function index({title,image,titletec,overview,weblink,gitlink,tecnos}:Props) {

 
  return (
   <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <img className='absolute z-1 object-cover h-[50vh] w-full' src={image} alt='Background Image'/>
        <div className=
        'absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>{title}</h2>
          <h3>{titletec}</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            {overview}
          </p>
          <a
            href={gitlink}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href={weblink}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>

            <div className='grid grid-cols-3 md:grid-cols-1'>

              {tecnos.map(tec=>(
                  <p className='text-gray-600 py-2 flex items-center' key= {nanoid()}>
                    <RiRadioButtonFill  className='pr-1' /> {tec}
                  </p>
              ))}
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}






export default index

export async function getStaticPaths() {
  
  const {projectsData}:any = await import('utils/projectinfo.json');
  

  const allPaths = projectsData.map((path:any) => {
    return {
      params: {
        title: path.title,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

  
export async function getStaticProps(context:any) {

  const title = context.params.title;
  const {projectsData}:any = await import('utils/projectinfo.json');
  const data = projectsData.find((ev:any) => title === ev.title);

  return {
    props:  data ,
  };
}
