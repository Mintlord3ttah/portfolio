
export default function ProjectCard({img, title, description} : {img: string, title: string, description: string}) {
  return <div className='pro-hover bg-white/45 shrink-0 backdrop-blur-2xl z-10 shadow-lg flex flex-col gap-4 w-[16rem] group rounded-2xl p-2.5 cursor-pointer transition-all duration-500'>
    <img src={img} alt="project photo" className='w-full h-[10rem] rounded-2xl group-hover:scale-105 transition-all duration-500' />
    <p className="font-bold">{title}</p>
    <p>{description}</p>
    <p className="text-sm text-[var(--primary-color)] italic">site: http://rener.com</p>
  </div>
}
