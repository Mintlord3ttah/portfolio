import { Link } from "react-router-dom";
import { useAppProvider } from "../themeContext/AppProvider";

export default function ProjectCard({img, title, description, link} : {img: string, title: string, description: string, link?: string}) {
  const {theme} = useAppProvider()
  return <Link to={link || "#"} >
    <div className={`pro-hover ${theme === "light" ? "bg-white/45" : "bg-gray-900/50"} shrink-0 backdrop-blur-lg z-10 shadow-lg flex flex-col gap-4 w-[17rem] max-[490px]:w-full group rounded-2xl p-2.5 cursor-pointer transition-all duration-300`}>
    <img src={img} alt="project photo" className='w-full h-[9rem] rounded-2xl group-hover:scale-105 transition-all duration-500' />
    <p className="font-bold">{title}</p>
    <p>{description}</p>
    <p className="text-sm text-[var(--primary-color)] italic mb-4">site: {link}</p>
  </div>
    </Link>
}
