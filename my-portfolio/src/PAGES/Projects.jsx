import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { CgSearch } from "react-icons/cg";
import ProjectCard from "../UI/ProjectCard";
import CardsContainer from "../UI/CardsContainer";
import SectionHeading from "../UI/SectionHeading";

export default function Projects() {
    return (
        <CardsContainer flexCol={"flex-col"}>
            <SectionHeading>see projects</SectionHeading>
            <div className="grid-con gap-12 w-full p-5">
                <ProjectCard
                    icon={<MdOutlineEmojiFoodBeverage />}
                    link={"Project not yet deployed"}
                    image={"/mapify 6.png"}
                    altText={"the map project"}
                    heading={"The Mapify Project"}
                    description={`
                This project was inspired by Jonas Schmedman but I took it to the next level by adding more features such as
                    the ultimate search which i call the heart of the project. I also added a more flexible walk around features which
                    enables the user to navigate through the entire app with ease, also suggests location when typing and gives you an
                    accurate location when you click on the map. saving your location with a description is also enabled.
            `} />
                <ProjectCard
                    icon={<MdOutlineEmojiFoodBeverage />}
                    link={"https://daily-breadfoods.netlify.app/"}
                    type="custom"
                    image={"/dailybreadfoods.png"}
                    altText={"daily bread food project"}
                    heading={"Daily bread foods"}
                    description={`
                        This project was inspired by the need to create a platform where people can order food online 
                        and have it delivered to their doorstep. The project is still in its early stages but it has
                        the potential to be a game changer in the food industry.
                    `} />
                <ProjectCard
                    icon={<CgSearch />}
                    link={"Project not deployed"}
                    type="custom"
                    image={"/chef diary.png"}
                    altText={"chef diary project"}
                    heading={"chef diary"}
                    description={`
                        Chef diary begins with a search to empowering the user to get the required information
                        about a given recipe. Users can also add their home made recipes, bookmark
                        and save favorite recipes and more...
                        `} />
                <ProjectCard
                    icon={<MdOutlineEmojiFoodBeverage />}
                    link={"https://daily-breadfoods.netlify.app/"}
                    type="custom"
                    image={"/dailybreadfoods.png"}
                    altText={"daily bread food project"}
                    heading={"Daily bread foods"}
                    description={`
                        This project was inspired by the need to create a platform where people can order food online 
                        and have it delivered to their doorstep. The project is still in its early stages but it has
                        the potential to be a game changer in the food industry.
                    `} />
            </div>
        </CardsContainer>
    )
}

function Emphasis() {
    return <em className="font-medium">Jonas Schmedman</em>
}