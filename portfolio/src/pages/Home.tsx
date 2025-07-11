import BG_Glow from "../components/BG_Glow";
import Navigators from "../components/Navigators";
import ProjectCard from "../components/ProjectCard";
import Stack from "../components/Stack";
import TestimonialCard from "../components/TestimonialCard";

export default function Home() {
  return (
    <section className="px-24 max-[1200px]:px-8">
    <section className="sec-bg flex justify-between gap-24 max-[1000px]:flex-col-reverse pt-40 ">
        <div className="flex-3/4 max-[1200px]:flex-1/2 ">

        <div className=" size-60 bg-gray-200 overflow-hidden rounded-full">
          <img src="coder.jfif" alt="developer" className="size-full rounded-full" />
        </div>
        <div className="">
        <h1 className="text-4xl font-bold mt-6 text-[#c46b31]">Confidence N. Ettah</h1>
        <p className="text-lg max-[1000px]:text-2xl text-gray-600 mt-4">Hi, I'm a MERN-Stack/Mobile App developer with a passion for creating beautiful and functional user experiences.</p>
        <button className="mt-6 px-6 py-2 bg-[#c46b31] cursor-pointer text-white rounded-full hover:bg-amber-600 transition duration-300">View Projects</button>
        </div>
        <div className="mt-24 relative">
        <BG_Glow size={50} color={{one: "bg-orange-100",two: "bg-orange-200", three: "bg-orange-300"}} position="left-[10%] bottom-0" />
            <h2 className="text-2xl z-10 font-bold text-gray-700">Simple Anecdote</h2>
            <p className="text-lg text-gray-600  backdrop-blur-2xl z-10 mt-2">Once, while working on a challenging project and being new to the Next.js framework, I encountered a significant roadblock. Instead of giving up, I took a step back, re-evaluated the problem, and approached it from a different angle. This experience taught me the importance of perseverance and creative problem-solving in web development.</p>
        </div>
        </div>
        <div className="bg-glow relative  flex items-center justify-center h-full">
            
            <BG_Glow size={50} color={{one: "bg-green-300",two: "bg-green-400", three: "bg-green-500"}} position="right-1/2" />
            <div className=" backdrop-blur-xs z-10 flex  justify-end flex-col gap-4">
                    <h2 className="text-[2.5rem] font-bold text-gray-600">Hey, I'm Glad You Are Here!</h2>
                    <p className="text-lg max-[1000px]:text-2xl text-gray-500">This is a simple portfolio application built with React & TypeScript. Feel free to explore my projects and skills!</p>
                    <button className="mt-6 w-fit px-6 py-2 bg-[#c46b31] cursor-pointer text-white rounded-full hover:bg-amber-600 transition duration-300">View Projects</button>
                    
                    <div className="mt-4 text-xs flex flex-col text-blue-600" >
                    <a href="https://github.com/Mintlord3ttah">https://github.com/Mintlord3ttah</a>
                    <a href="tel:+2349025377960">+234-902-537-7960</a>
                    </div>
                <div className="backdrop-blur-sm bg-gray-400/50 p-6 rounded-lg w-[24rem] max-[500px]:w-full flex flex-col">
                    <Stack stack="HTML" level="95" />
                    <Stack stack="CSS" level="88" />
                    <Stack stack="JavaScript" level="97" />
                    <Stack stack="React" level="95" />
                    <Stack stack="React Native" level="85" />
                    <Stack stack="TypeScript" level="80" />
                    <Stack stack="Tailwind CSS" level="90" />
                    <Stack stack="Next.js" level="90" />
                    <Stack stack="Node.js" level="90" />
                    <Stack stack="Express" level="95" />
                    <Stack stack="MongoDB" level="95" />
                    <Stack stack="PostgreSQL" level="95" />
                </div>
            </div>
        </div>

        
    </section>
    <section className="mt-36 relative max-[1000px]:items-center" id="projects">
        <div className="">
            <BG_Glow size={50} color={{one: "bg-blue-300",two: "bg-blue-400", three: "bg-blue-500"}} position="right-[50%] bottom-[20%]" />
            <h2 className="text-2xl   mb-8 text-[var(--primary-color)]">Projects</h2>
            <div className="grid grid-cols-4 max-[1100px]:grid-cols-2 max-[636px]:gap-4 max-[600px]:grid-cols-1 gap-8 w-fit">
                <ProjectCard img="iREMEMBER APP-2.gif" title="Iremember - Task Management app" description="This is a simple yet indespensible web app for preparing and managing travel items." link="https://iremember-eta.vercel.app" />
                <ProjectCard img="new design insta.png" title="Instablog - Blogging Platform" description="This is a blogging platform that allows users to create and share their own blogs." link="https://instablog.vercel.app" />
                <ProjectCard img="mapify2.png" title="Mapify - Location Tracker" description="This project is a map based web app that helps users keep logs/track their location." link="https://mapify.com" />
                <ProjectCard img="fundaweb-app-new layout.png" title="Fundaweb - Collaborative investment app" description="This is a collaborative investment app that allows users to pool resources and invest in real estate projects." link="https://fundaweb.com" />
            </div>
        </div>
    </section>
    <section className="mt-36 relative max-[1000px]:items-center">
        <h2 className="text-2xl mb-4 text-[var(--primary-color)]">Testimonials</h2>
        <p className="text-gray-600 text-xl">What my clients say about me:</p>
        <div className="flex gap-8 mt-8 max-[636px]:flex-col">
            <TestimonialCard name="Ettah N. Ettah" feedback="This is the best service I've ever used!" />
            <TestimonialCard name="Jane Smith" feedback="Absolutely fantastic experience!" />
            <TestimonialCard name="Bob Johnson" feedback="I can't recommend this enough!" />
        </div>
    </section>
   <Navigators style="justify-end" nav_to="Skills" />
    </section>

  )
}
