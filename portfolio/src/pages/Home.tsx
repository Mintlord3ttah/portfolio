import { useRef, useState } from "react";
import BG_Glow from "../components/BG_Glow";
import CTA from "../components/CTA";
import Navigators from "../components/Navigators";
import ProjectCard from "../components/ProjectCard";
import Stack from "../components/Stack";
import TestimonialCard from "../components/TestimonialCard";
import useScrollIntoView, { type element } from "../utils/scrollIntoView";
import { useAppProvider } from "../themeContext/AppProvider";
import { Link } from "react-router-dom";

const stacks = [
    { stack: "HTML", level: 98 },
    { stack: "CSS", level: 89 },
    { stack: "JavaScript", level: 97 },
    { stack: "React", level: 99 },
    { stack: "React Native", level: 90 },
    { stack: "TypeScript", level: 100 },
    { stack: "Tailwind CSS", level: 93 },
    { stack: "Next.js", level: 95 },
    { stack: "Node.js", level: 90 },
    { stack: "Express", level: 95 },
    { stack: "MongoDB", level: 95 },
    { stack: "PostgreSQL", level: 95 },
]

export default function Home() {
    const { theme, setSpecNavigation } = useAppProvider()
    const [isScroll, setIsScroll] = useState(false)
    const projectsRef = useRef<HTMLDivElement>(null)
    useScrollIntoView({ element: projectsRef.current as element, trigger: isScroll })

    return (
        <section className="px-24 max-[1200px]:px-8">
            <section className="sec-bg flex justify-between gap-24 max-[1000px]:flex-col-reverse pt-40 ">
                <div className="flex-3/4 max-[1200px]:flex-1/2 ">

                    <div className=" size-60 bg-gray-200 overflow-hidden rounded-full">
                        <img src="coder.jfif" alt="developer" className="size-full rounded-full" />
                    </div>
                    <div className="">
                        <h1 className="text-4xl font-bold mt-6 text-[#c46b31]">Confidence N. Ettah</h1>
                        <p className=" max-[1000px]:text-2xl mt-4 font-medium">I deliver quality, user-friendly experiences like e-commerce websites, school / orginanizational websites, portfolios, dashbpoards etc.</p>
                        <CTA onClick={() => setIsScroll(prev => !prev)} />
                    </div>
                    <div className="mt-24 relative">
                        <BG_Glow size={50} color={{ one: "bg-orange-50", two: "bg-orange-200", three: "bg-orange-500" }} position="left-[10%] bottom-0" />
                        <h2 className="text-2xl z-10 font-bold text-gray-700">Simple Anecdote</h2>
                        <p className="text-lg   backdrop-blur-xs z-10 mt-2">Once, while working on a challenging project and being new to the Next.js framework, I encountered a significant roadblock. Instead of giving up, I took a step back, re-evaluated the problem, and approached it from a different angle. This experience taught me the importance of perseverance and creative problem-solving in web development.</p>
                    </div>
                </div>
                <div className="bg-glow relative  flex items-center justify-center h-full">

                    <BG_Glow size={50} color={{ one: "bg-green-300", two: "bg-green-400", three: "bg-green-500" }} position="right-1/2" />
                    <div className=" backdrop-blur-xs z-10 flex  justify-end flex-col gap-4">
                        <h2 className="text-[2.5rem] max-[330px]:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-700 text-clip bg-clip-text text-transparent">Hey, I'm Glad You Are Here!</h2>
                        <p className="text-lg max-[350px]:text-[1.1rem] text-gray-500">I can create for you a full fledged and beautiful functional user-friendly website or mobile application using mordern technologies like React, React Native, Next.js, TypeScript etc. Feel free to explore my projects and skills!</p>
                        <div className="flex gap-4 flex-wrap">
                            <CTA onClick={() => setIsScroll(prev => !prev)} />
                            <Link to={"/about"} onClick={() => setSpecNavigation(true)} className={`mt-6 w-fit px-6 py-2  border ${theme === "light" ? "border-gray-500 text-gray-700 hover:bg-gray-400" : "hover:bg-[#111] border-gray-600 text-gray-300"} cursor-pointer rounded-full transition duration-300`}>My Services</Link>
                        </div>

                        <div className="mt-4 text-xs flex flex-col text-blue-600" >
                            <a href="https://github.com/Mintlord3ttah">github.com/Mintlord3ttah/portfolio</a>
                            <a href="tel:+2349025377960">+234-902-537-7960</a>
                        </div>
                        <div className={`backdrop-blur-sm ${theme === "light" ? "bg-gray-400/50" : "bg-gray-900/50"} transition-all duration-300 p-6 rounded-lg w-[24rem] max-[500px]:w-full flex flex-col`}>
                            {stacks.map((value, i) => {
                                return <Stack key={i} stack={value.stack} level={value.level} />
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className=" relative max-[1000px]:items-center" id="projects">
                <div ref={projectsRef} className="pt-36">
                    <BG_Glow size={50} color={{ one: "bg-blue-300", two: "bg-blue-400", three: "bg-blue-500" }} position="right-[50%] bottom-[20%]" />
                    <h2 className="text-2xl  mb-8 text-[var(--primary-color)]">Projects</h2>
                    <div className="grid grid-cols-4 max-[1100px]:grid-cols-2 max-[636px]:gap-4 max-[600px]:grid-cols-1 gap-8 w-fit">
                        <ProjectCard rating="4.5" img="iREMEMBER APP-2.gif" title="Iremember - Task Management app" description="This is a simple yet indespensible web app for preparing and managing travel items." link="https://iremember-eta.vercel.app" />
                        <ProjectCard rating="4.5" img="dailybread-foods-1.png" title="Foodie - food delivery" description="This is a platform for delivering food from local restaurants." link="https://mintlord3ttah.github.io/dailybreadfood.com" />
                        <ProjectCard rating="4.2" img="chef-diary.png" title="Chef Diary - Search All Recipes" description="A platform to seemlessly grab any kind of recipe with auto completion and search filtering" link="https://chef-diary.vercel.app" />
                        <ProjectCard rating="3.5" img="new design insta.png" title="Instablog - Blogging Platform" description="This is a blogging platform that allows users to create and share their own blogs." link="https://instablog.vercel.app" />
                        <ProjectCard rating="4.0" img="mapify2.png" title="Mapify - Location Tracker" description="This project is a map based web app that helps users keep logs/track their location." link="https://mapify.com" />
                        <ProjectCard rating="4.5" img="fundaweb-best-landing-2.png" title="Fundaweb - Collaborative investment app" description="This is a collaborative investment app that allows users to pool resources and invest in real estate projects." link="https://fundaweb.com" />
                    </div>
                </div>
            </section>
            <section className="mt-36 relative max-[1000px]:items-center">
                <h2 className="text-2xl mb-4 text-[var(--primary-color)]">Testimonials</h2>
                <p className=" text-xl">What my clients say about me:</p>
                <BG_Glow size={50} color={{ one: "bg-lime-100", two: "bg-lime-200", three: "bg-lime-300" }} position="left-[10%] bottom-0" />
                <div className="flex gap-8 mt-8 max-[636px]:flex-col backdrop-blur-xs z-10">
                    <TestimonialCard name="Ettah N. Ettah" feedback="This is the best service I've ever used!" />
                    <TestimonialCard name="Jane Smith" feedback="Absolutely fantastic experience!" />
                    <TestimonialCard name="Bob Johnson" feedback="I can't recommend this enough!" />
                </div>
            </section>
            <Navigators style="justify-end" nav_to="Skills" />
        </section>
    )
}
