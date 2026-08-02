import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { IoMenuOutline } from "react-icons/io5";
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { useAppProvider } from '../themeContext/AppProvider';
import { BiMoon } from 'react-icons/bi';

export default function Navbar() {
  const { setTheme, theme } = useAppProvider()
  const [menu, setMenu] = useState<boolean>(false)
  const pathname = useLocation().pathname

  const diplay_list = menu ?
    "max-[700px]:h-fit max-[700px]:gap-4 max-[700px]:p-6 max-[700px]:overflow-hidden" :
    "max-[700px]:h-0 max-[700px]:gap-0 max-[700px]:p-0 max-[700px]:overflow-hidden"

  const handleRemoveMenu = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.closest(".btn")) {
      setMenu(false)
    }
  }

  function handleTheme(){
    const currentTheme = localStorage.getItem("theme")
    const switchTheme = currentTheme === "light" ? "dark" : "light"
    localStorage.setItem("theme", switchTheme)
    setTheme(switchTheme)
  }

  const isAtRoot = pathname === "/"
  const navLinks = [
    { label: "Projects", path: isAtRoot ? "/" : "/projects" },
    { label: "Skills", path: "/skills" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ]

  return (
    <nav onClick={handleRemoveMenu} className={`nav-${theme} transition-all duration-300 flex z-50 fixed top-0 left-0 w-full justify-between items-center py-6 px-24 max-[1200px]:px-8 max-[500px]:px-4 shadow-sm`}>
        <div className='flex items-center w-full max-[700px]:justify-between'>
        <Logo />
        <button onClick={()=>setMenu(prev=>!prev)} className='btn hidden max-[700px]:block text-2xl bg-transparent border-none cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300'>
          {menu ? <FaTimes /> : <IoMenuOutline />}
        </button>
        </div>
      <ul className={`${diplay_list} nav-menu-${theme} flex space-x-8 transition-all duration-500 font-bold text-gray-500 max-[700px]:flex-col max-[700px]:absolute max-[700px]:top-full max-[700px]:left-0 max-[700px]:w-full bg-opacity-90 backdrop-blur-md`}>
        {navLinks.map((link, index) => (
          <List
            key={index}
            label={link.label}
            path={link.path}
            isActive={pathname === link.path}
          />
        ))}
        <li onClick={handleTheme} className='max-[700px]:w-fit max-[700px]:px-2.5 cursor-pointer max-[700px]:mt-6 max-[620px]:bg-amber-700 max-[620px]:text-white font-light gap-1.5 flex items-center justify-center hover:bg-[#c46b31] hover:text-white transition-all duration-300 size-6 rounded-sm'>
          {theme === "light" ? <LuSunMoon /> : <BiMoon />}
          <span className='hidden max-[620px]:block'>{theme === "light" ? "dark" : "light"}</span>
        </li>
      </ul>
    </nav>
  )
}

interface ListProps {
  label: string
  path: string
  isActive: boolean
}

function List({ label, path, isActive }: ListProps) {
  return (
    <Link to={path}>
      <li className={`group hover:text-[#c46b31] transition-all w-fit duration-500 flex flex-col`}>
        {label}
        <p className={`${isActive ? "w-2/3" : ""} li h-1 w-0 transition-all duration-500 group-hover:w-2/3 rounded-2xl bg-amber-700 m-auto max-[620px]:m-0`}></p>
      </li>
    </Link>
  )
}