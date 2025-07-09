import {Link, useLocation} from 'react-router-dom'
import Logo from './Logo'
import { IoMenuOutline } from "react-icons/io5";
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";
export default function Navbar() {
  const [menu, setMenu] = useState<boolean>(false)
  const diplay_list = menu ? "max-[620px]:h-fit max-[620px]:gap-4 max-[620px]:p-6 max-[620px]:overflow-hidden" :
                      "max-[620px]:h-0 max-[620px]:gap-0 max-[620px]:p-0 max-[620px]:overflow-hidden"

  const handleRemoveMenu = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.closest(".btn")) {
      setMenu(false)
    }
  }
  return (
    <nav onClick={handleRemoveMenu} className=' flex z-50 fixed top-0 left-0 w-full bg-white justify-between items-center py-6 px-24 max-[1200px]:px-8 shadow-sm'>
        <div className='flex items-center w-full max-[620px]:justify-between'>
        <Logo />
        <button onClick={()=>setMenu(prev=>!prev)} className='btn hidden max-[620px]:block text-2xl'>{menu ? <FaTimes /> :<IoMenuOutline />}</button>
        </div>
      <ul className={`${diplay_list} flex space-x-8 transition-all duration-500 font-bold text-gray-500 max-[620px] max-[620px]:flex-col max-[620px]:absolute max-[620px]:top-full max-[620px]:left-0 max-[620px]:bg-white max-[620px]:w-full max-[620px]:border-t-gray-300 max-[620px]:border-t `}>
        <List label="Projects" />
        <List label="Skills" />
        <List label="About" />
        <List label="Contact" />
      </ul>
    </nav>
   

  )
}

function List({label, }: {label: string}){
  const pathname = useLocation().pathname
  const check = label === "Projects" && pathname === "/" ? true : pathname === `/${label.toLocaleLowerCase()}` ? true : false
  // console.log(pathname)
  return <Link to={label === "Projects" ? "/" :`/${label.toLocaleLowerCase()}`}>
    <li className={`group hover:text-[#c46b31] ${check && "text-[#c46b31]"} transition-all w-fit duration-500 flex flex-col`}>
      {label}
      <p className={`${check && "w-2/3"} li h-1 w-0 transition-all duration-500 group-hover:w-2/3 rounded-2xl bg-amber-700 m-auto max-[620px]:m-0`}></p>
    </li>
    </Link>
}
