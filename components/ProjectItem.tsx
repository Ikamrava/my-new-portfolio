import Image from 'next/image'
import Link from 'next/link'
import prpertyimg from "../public/assets/projects/property.jpg"

type Props = {
    imagelink: any
    title:string
    link:string
    basedon:string
}




function ProjectItem({imagelink,title,link,basedon}:Props) {
  return (
    <div className=' group relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
       <Image className=' group-hover:opacity-10 rounded-xl' src={imagelink} alt="background image"  ></Image>
        <div className=' hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] items-center justify-center'>
            <h3 className=' text-2xl text-white tracking-wider text-center'>{title}</h3>
            <p className=' pb-4 pt-2 text-white text-center'>{basedon}</p>
            <a href={link}><p className='p-2 rounded-lg bg-white text-lg cursor-pointer text-center text-black font-bold'>More Info</p></a>
        </div>
    </div>

  )
}

export default ProjectItem
