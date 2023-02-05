import { DataType } from '@/utils/type'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
   title: string,
    image:any,
    titletec: string,
    overview: string
    weblink:string
    gitlink:string
    tecnos:[]
}


function ProjectItem({title,image,titletec,overview,weblink,gitlink,tecnos}:Props) {
  return (
    <div className=' group relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
       <Image className=' group-hover:opacity-10 rounded-xl' src={image} alt="background image" width={500} height={500} ></Image>
        <div className=' hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] items-center justify-center'>
            <h3 className=' text-2xl text-white tracking-wider text-center'>{title}</h3>
            <p className=' pb-4 pt-2 text-white text-center'>{titletec}</p>
            <Link href={`/projects/${title}`} ><p className='p-2 rounded-lg bg-white text-lg cursor-pointer text-center text-black font-bold'>More Info</p></Link>
        </div>
    </div>

  )
}

export default ProjectItem
