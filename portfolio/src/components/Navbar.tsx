import {Link, useLocation} from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
  return (
    <nav className='flex z-50 fixed top-0 left-0 w-full bg-white justify-between items-center py-6 px-24 max-[1200px]:px-8 shadow-sm'>
        <Logo />
      <ul className='flex space-x-8 font-bold text-gray-500'>
        <List label="Projects" />
        <List label="Skills" />
        <List label="Contact" />
        <List label="About" />
      </ul>
    </nav>
  )
}

function List({label, }: {label: string}){
  const pathname = useLocation().pathname
  const check = label === "Projects" && pathname === "/" ? true : pathname === `/${label.toLocaleLowerCase()}` ? true : false
  // console.log(pathname)
  return <Link to={label === "Projects" ? "#projects" :`/${label.toLocaleLowerCase()}`}>
    <li className={`group hover:text-[#c46b31] ${check && "text-[#c46b31]"} transition-all duration-500`}>
      {label}
      <p className={`${check && "w-2/3"} li h-1 w-0 transition-all duration-500 group-hover:w-2/3 rounded-2xl bg-amber-700 m-auto`}></p>
    </li>
    </Link>
}
