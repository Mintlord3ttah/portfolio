import { Link } from "react-router-dom";

export default function ProjectCard({img, title, description, link} : {img: string, title: string, description: string, link?: string}) {
  return <Link to={link || "#"} >
    <div className='pro-hover bg-white/45 shrink-0 backdrop-blur-2xl z-10 shadow-lg flex flex-col gap-4 w-[16rem] group rounded-2xl p-2.5 cursor-pointer transition-all duration-500'>
    <img src={img} alt="project photo" className='w-full h-[10rem] rounded-2xl group-hover:scale-105 transition-all duration-500' />
    <p className="font-bold">{title}</p>
    <p>{description}</p>
    <p className="text-sm text-[var(--primary-color)] italic mb-4">site: {link}</p>
  </div>
    </Link>
}
