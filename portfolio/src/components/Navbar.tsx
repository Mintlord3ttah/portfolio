import {Link, useLocation} from 'react-router-dom'
import Logo from './Logo'
import { IoMenuOutline } from "react-icons/io5";
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { useAppProvider } from '../themeContext/AppProvider';
import { BiMoon } from 'react-icons/bi';

export default function Navbar() {
  const {setTheme, theme} = useAppProvider()
  const [menu, setMenu] = useState<boolean>(false)
  const diplay_list = menu ? "max-[620px]:h-fit max-[620px]:gap-4 max-[620px]:p-6 max-[620px]:overflow-hidden" :
                      "max-[620px]:h-0 max-[620px]:gap-0 max-[620px]:p-0 max-[620px]:overflow-hidden"

  const handleRemoveMenu = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.closest(".btn")) {
      setMenu(false)
    }
  }

  function handleTheme(){
    const theme = localStorage.getItem("theme")
    const switchTheme = theme === "light" ? "dark" : "light"
    localStorage.setItem("theme", switchTheme)
    setTheme(switchTheme)
  }
  return (
    <nav onClick={handleRemoveMenu} className={`nav-${theme} transition-all duration-300 flex z-50 fixed top-0 left-0 w-full justify-between items-center py-6 px-24 max-[1200px]:px-8 max-[500px]:px-4 shadow-sm`}>
        <div className='flex items-center w-full max-[620px]:justify-between'>
        <Logo />
        <button onClick={()=>setMenu(prev=>!prev)} className='btn hidden max-[620px]:block text-2xl'>{menu ? <FaTimes /> :<IoMenuOutline />}</button>
        </div>
      <ul className={`${diplay_list} nav-menu-${theme} flex space-x-8 transition-all duration-500 font-bold text-gray-500 max-[620px] max-[620px]:flex-col max-[620px]:absolute max-[620px]:top-full max-[620px]:left-0 max-[620px]:w-full`}>
        <List label="Projects" />
        <List label="Skills" />
        <List label="About" />
        <List label="Contact" />
        <li onClick={handleTheme} className='max-[620px]:w-fit max-[620px]:px-2.5 cursor-default max-[620px]:mt-6 max-[620px]:bg-amber-700 max-[620px]:text-white font-light gap-1.5 flex items-center justify-center hover:bg-[#c46b31] hover:text-white transition-all duration-300 size-6 rounded-sm '>
          {theme === "light" ? <LuSunMoon /> : <BiMoon />}
          <span className='hidden max-[620px]:block'>{theme}</span>
        </li>
      </ul>
    </nav>
   

  )
}

function List({label, }: {label: string}){
  const pathname = useLocation().pathname
  const check = label === "Projects" && pathname === "/" ? true : pathname === `/${label.toLocaleLowerCase()}` ? true : false
  return <Link to={label === "Projects" ? "/" :`/${label.toLocaleLowerCase()}`}>
    <li className={`group hover:text-[#c46b31] ${check && "text-[#c46b31]"} transition-all w-fit duration-500 flex flex-col`}>
      {label}
      <p className={`${check && "w-2/3"} li h-1 w-0 transition-all duration-500 group-hover:w-2/3 rounded-2xl bg-amber-700 m-auto max-[620px]:m-0`}></p>
    </li>
    </Link>
}
