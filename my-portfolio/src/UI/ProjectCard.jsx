import { FaLink } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";
import Button from "./Button"
export default function ProjectCard({ heading, description, icon, image, altText = "",
    link, type = "basic" }) {

    if (type === "custom") return (<div className="pro-card grid-span-bit w-full shadow-md">
        <img src={image} alt={altText} className="w-full" />

        <div className="texts-con flex flex-col gap-6 p-6">
            <p className="font-medium capitalize flex justify-between">{heading} <span className="text-red-400">{icon}</span> </p>

            <p className="">{description}</p>
            {/* <p>link: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p> */}
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Button><span>visit site</span> <span><ion-icon name="link-outline"></ion-icon></span></Button>
            </a>
        </div>

    </div>)

    return (
        <div className="pro-card grid-span-full shadow-md">
            <img src={image} alt={altText} />

            <div className="texts-con flex flex-col gap-6 p-6">
                <p className="font-medium capitalize flex justify-between ">{heading}  <span className="text-red-400">{<FaSearchLocation />}</span></p>

                <p className="">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Button><span>visit site</span> <span><ion-icon name="link-outline"></ion-icon></span></Button>
                </a>
            </div>

        </div>
    )
}
