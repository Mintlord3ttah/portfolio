import { Link } from "react-router-dom";
import { useAppProvider } from "../themeContext/AppProvider";
import { FaStar } from "react-icons/fa";

export default function ProjectCard({img, title, description, link, rating} : {rating: string, img: string, title: string, description: string, link?: string}) {
  const {theme} = useAppProvider()

  function stringTruncate(str: string) {
    return str.split("/").at(-1);
  }
  return <Link to={link || "#"} >
    <div className={`pro-hover relative ${theme === "light" ? "bg-white/45" : "bg-gray-900/50"} shrink-0 backdrop-blur-lg z-10 shadow-lg flex flex-col gap-4 w-[17rem] max-[490px]:w-full group rounded-2xl p-2.5 cursor-pointer transition-all duration-300`}>
    <img src={img} alt="project photo" className='w-full h-[9rem] rounded-2xl group-hover:scale-105 transition-all duration-500' />
    <p className="font-bold">{title}</p>
    <p>{description}</p>
    <div className="flex flex-col justify-end flex-1 py-4">
    <p className="text-sm text-[var(--primary-color)] italic mb-4">site: {stringTruncate(link || "")}</p>
      <div className={`flex items-center text-sm text-gray-500 border ${theme === "light" ? "border-gray-300 bg-gray-200" : "border-gray-700 bg-gray-800"} rounded-full w-fit px-6 py-2 cursor-pointer`}>
      <span className="mr-2.5 border-r border-r-gray-500 pr-2.5"><FaStar /> </span>
      <span className="m-">{rating}</span>
      </div>
    </div>
  </div>
    </Link>
}
