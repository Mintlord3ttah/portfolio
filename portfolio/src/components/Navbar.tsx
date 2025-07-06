import {Link} from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
  return (
    <nav className='flex z-50 fixed top-0 left-0 w-full bg-white justify-between items-center py-6 px-24 max-[1200px]:px-8 shadow-sm'>
        <Logo />
      <ul className='flex space-x-8 font-bold text-gray-500'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}
