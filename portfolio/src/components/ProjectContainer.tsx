import { BiLinkAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { textTruncate } from "../utils/textTrunc";

export default function ProjectContainer({heading, text, photo, link, projectNumb, importance="regular", status}: 
    {heading: string, link: string, text: string, photo: string, projectNumb: number, status:string[], importance?: "regular" | "major"}) {
  return (
    <div className="pro-hover shadow rounded-2xl p-8 max-[400px]:p-4 duration-500 transition-all">
        <div className={`${importance === "major" ? "text-4xl gap-8 max-[700px]:flex-col max-[690px]:text-2xl" : "text-2xl flex-col gap-4"} flex max-[400px]:text-xl pb-8 border-b border-b-neutral-500 mb-8`}>
            <div className="flex gap-4">
                <span className="">{projectNumb}.</span>
                <h4>{heading}</h4>
            </div>
            <div className={`${importance === "major" ? "text-2xl" : "text-lg"} text-blue-600 flex gap-2 items-center`}>
                <BiLinkAlt />
                <Link to={"https://" + link}>{textTruncate(link, 10)}</Link>
            </div>
        </div>
        <div className={`flex gap-6 ${importance === "major" ? "max-[750px]:flex-col" :  "max-[1200px]:flex-col"}`}>
            <img src={photo} alt="major project picture" className={`rounded-2xl ${importance === "major" ? "w-[22rem] h-[12rem]" : "w-[15rem] h-[8rem] max-[501px]:h-[12rem] max-[501px]:w-full"}`} />
            <div className="flex flex-col justify-between">
                <p>{text}</p>
                <div className="text-sm text-neutral-500 mt-4">
                    {status.map((status, i)=><p key={i}>✔ {status}</p>)}
                </div>
            </div>
        </div>
    </div>
  )
}
