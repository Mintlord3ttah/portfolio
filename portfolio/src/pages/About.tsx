import { IoIosFlash } from "react-icons/io";
import { LiaUserEditSolid } from "react-icons/lia";
import { MdMiscellaneousServices } from "react-icons/md";
import BG_Glow from "../components/BG_Glow";
import Skill from "../components/Skill";
import Navigators from "../components/Navigators";

export default function About() {
  return <section className="sec-bg flex flex-col px-24 pt-12 justify-between gap-20 max-[1200px]:px-8 max-[1000px]:flex-col max-[1000px]:items-center">
            <section className='relative flex flex-col items-center justify-center w-full gap-8 h-screen'>
                <BG_Glow size={50} color={{one: "bg-red-100",two: "bg-purple-200", three: "bg-purple-300"}} position="top-[10%] left-[25%]"/>
                <h1 className=' text-8xl max-[490px]:text-6xl flex text-amber-700 z-10 backdrop-blur-xs'>
                <IoIosFlash />
                <p className="">code</p>
                <p className="text-gray-800">split</p>
            </h1>
            <p className='text-2xl text-center text-gray-700 z-10 backdrop-blur-2xl'>Your ideas may seem complex but <strong>code-split</strong> has a way out always. code split is a name I found appealing and suitable for solving real world problems with simplicity.</p>
            <div className='flex gap-12 text-amber-700 text-2xl mt-12 '>
                <p className="hover:text-gray-800 group transition-all duration-500 cursor-pointer"><p className="group-hover:bg-gray-400 p-2.5 rounded-full bg-amber-200 w-fit "><LiaUserEditSolid /></p> About the developer</p>
                <p className="hover:text-gray-800 group transition-all duration-500 cursor-pointer"><p className="group-hover:bg-gray-400 p-2.5 rounded-full bg-amber-200 w-fit "><MdMiscellaneousServices /></p> My services</p>
            </div>
            </section>
            <section className="flex flex-col w-full gap-12">
                <div className="relative">
                    <BG_Glow size={50} color={{one: "bg-blue-100",two: "bg-blue-300", three: "bg-blue-400"}} position="-left-[5%] top-0" />
                    <h2 className='text-2xl  text-amber-700 z-10 backdrop-blur-xs'>About Me</h2>
                    <p className="text-xl mt-8 z-10 backdrop-blur-xs">Hi, I'm Confidence and my other name is Mint. I will like to introduce myself as a problem-solving and smart-working individual. I take on every little problem as a challenge and an opportunity to grow in my tech journey. </p>
                    <p className="text-xl mt-8 z-10 backdrop-blur-xs">Over the years I have honed my skills to a professional level and am proud to say this. Seeing my transformation into a whole new level backed by descipline, hardwork and grit, honestly its not always easy but its worth it. Perhaps, what makes me happy is seeing what I build solve real world problems and contributing to making life easy and the world a better place.</p>
                </div>
                <div>
                <h2 className='text-2xl  text-amber-700'>My Services</h2>
                <p className="text-gray-600 mt-4">Here are my services and what I can do for you!</p>
                <ul className="list-disc list-inside z-10 backdrop-blur-2xl mt-8 text-gray-700 flex flex-col gap-4">
                <Skill name="Web Development">
                        I create responsive and user-friendly websites using modern technologies like React, Next.js, and Tailwind 
                        CSS. My focus is on delivering high-quality, performant web applications that meet your needs.
                    </Skill>
                    <Skill name="Mobile App Development">
                        I develop cross-platform mobile applications using React Native, ensuring a seamless user experience on both iOS and Android devices.
                    </Skill>
                    <Skill name="UI/UX Design">
                        I design intuitive and visually appealing user interfaces that enhance user experience and engagement.
                    </Skill>
                    <Skill name="API Development">
                        I build robust and scalable RESTful APIs using Node.js and Express, ensuring efficient data handling and integration with front-end applications.
                    </Skill>
                    <Skill name="Database Management">
                        I manage databases using MongoDB and PostgreSQL, ensuring data integrity and efficient data retrieval.
                    </Skill>
                    <Skill name="Consultation">
                        I offer consultation services to help you identify the best technology solutions for your business needs, ensuring you make informed decisions.
                    </Skill>
                    <Skill name="Maintenance and Support">
                        I provide ongoing maintenance and support for your applications, ensuring they remain up-to-date and secure.
                    </Skill>

                </ul>
                </div>
            </section>
            <Navigators nav_back="Skills" nav_to="Contact" style="justify-between" />
        </section>
}
