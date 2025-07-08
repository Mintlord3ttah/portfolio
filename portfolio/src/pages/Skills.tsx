import BG_Glow from "../components/BG_Glow"
import Skill from "../components/Skill"

export default function Skills() {
  return <section className="sec-bg flex flex-col px-24 pt-12 justify-between gap-20 max-[1200px]:px-8 max-[1000px]:flex-col max-[1000px]:items-center">
    <section className='flex flex-col items-center max-[350px]:items-start justify-center w-full gap-8 h-screen'>
    <BG_Glow size={50} color={{one: "bg-blue-300",two: "bg-blue-400", three: "bg-blue-500"}} position="right-[0] bottom-0" />
        <div className='sp-border size-40 rounded-full flex '>
            <h1 className='text-amber-700 text-8xl'>Skills</h1>
        </div>
        <p className='text-2xl text-center text-gray-700'>With an unwavering natural flare I have developed for my craft in coding and software developement in general, I've got a complete arsenal which I have proven in my skills sets.</p>
        <p className='text-amber-700 text-2xl mt-12 hover:text-amber-900 transition-all duration-500 cursor-pointer'>See Skills below &darr;</p>
    </section>
    <section className='flex flex-col w-full gap-8 relative'>
        <div>
            <h2 className='text-2xl  text-amber-700'>Skills.</h2>
            <p className=' text-gray-500 mt-4'>Here are some of the skills I have acquired over the years.</p>
        </div>
        <div className="relative ">
            <BG_Glow size={50} color={{one: "bg-green-300",two: "bg-green-400", three: "bg-green-500"}} position="right-[30%] top-[10%]" />
            <h3 className="text-4xl">Front-end</h3>
            <ul className="list-disc z-10 backdrop-blur-xs list-inside mt-8 text-gray-700 flex flex-col gap-4">
                <Skill name="HTML">
                    The backbone of web content, I use HTML to structure and present information on the web.
                </Skill>
                <Skill name="CSS">
                    I style web pages with CSS, ensuring they are visually appealing and responsive.
                </Skill>
                <Skill name="JavaScript">
                    I bring interactivity to web pages with JavaScript, enhancing user experience.
                </Skill>
                <Skill name="React">
                    I build dynamic user interfaces with React, creating efficient and reusable components.
                </Skill>
                <Skill name="React Native">
                    For mobile applications I use this tool to build stuning, friendly UI that works natively on mobile phones and desktop.
                </Skill>
                <Skill name="Tailwind CSS/Styled Components">
                    I use these tools for rapid UI development, allowing for custom designs with utility-first classes.
                </Skill>
                <Skill name="Next.js">
                    I develop server-rendered React applications with Next.js, optimizing performance and SEO.
                </Skill>
                <Skill name="TypeScript">
                    I enhance JavaScript with TypeScript, adding static types for better code quality and maintainability.
                </Skill>
                <Skill name="Redux/Context API">
                   I often use these tools for state management.
                </Skill>
                <Skill name="Testing Frameworks">
                    Jest, Cypress, or React Testing Library. I use these frameworks to test my web app and projects.
                </Skill>
            </ul>
        </div>
        <div className="relative">
            <BG_Glow size={50} color={{one: "bg-red-300",two: "bg-red-400", three: "bg-red-500"}} position="left-[10%] top-[10%]" />
            <h3 className="text-4xl">Back-end</h3>
            <ul className="list-disc list-inside z-10 backdrop-blur-xs mt-8 text-gray-700 flex flex-col gap-4">
                <Skill name="Node.js">
                    I stack up my niche continuing from the JavaScript ecosytem and Node.js is not an exception for building scalable APIs.
                </Skill>
                <Skill name="Express" >
                    Express is a Node.js framework I use to create and manage backend APIs extensively and rapidly.
                </Skill>
                <Skill name="MongoDB">
                    I use MongoDB as a NoSQL database to store and manage data for my applications.
                </Skill>
                <Skill name="PostgreSQL">
                    I use PostgreSQL for relational database management, ensuring data integrity and complex queries.
                </Skill>
                <Skill name="RESTful APIs">
                    I design and implement RESTful APIs for seamless communication between front-end and back-end systems.
                </Skill>
                <Skill name="GraphQL">
                    I use GraphQL for flexible and efficient data retrieval, allowing clients to request only the data they need.
                </Skill>
                <Skill name="Authentication & Authorization">
                    I implement secure authentication and authorization mechanisms to protect user data and resources.
                </Skill>
                <Skill name="WebSockets">
                    I use WebSockets for real-time communication in applications, enabling instant updates and interactions.
                </Skill>
                <Skill name="Docker">
                    I use Docker to containerize applications, ensuring consistency across development and production environments.
                </Skill>
                <Skill name="CI/CD">
                    I implement Continuous Integration and Continuous Deployment (CI/CD) pipelines for automated testing and deployment.
                </Skill>
            </ul>
        </div>
        <div className="">
            <h3 className="text-4xl">Other Skills</h3>
            <ul className="list-disc list-inside mt-8 text-gray-700 flex flex-col gap-4">
                <Skill name="Git">
                    I use Git for version control, managing code changes and collaborating with other developers.
                </Skill>
                <Skill name="Agile Methodologies">
                    I follow Agile methodologies for project management, ensuring flexibility and iterative development.
                </Skill>
                <Skill name="Problem Solving">
                    I apply problem-solving skills to tackle complex coding challenges and optimize solutions.
                </Skill>
                <Skill name="Communication">
                    I communicate effectively with team members and stakeholders to ensure project success.
                </Skill>
                <Skill name="Time Management">
                    I manage my time efficiently to meet deadlines and deliver high-quality work.
                </Skill>
            </ul>
        </div>
    </section>
    <div className="flex justify-between relative">
    <BG_Glow size={50} color={{one: "bg-red-300",two: "bg-purple-400", three: "bg-purple-500"}} position="left-[50%] bottom-0" />

        <button className="border border-gray-300 p-3 mt-12 hover:bg-gray-200 cursor-pointer transition duration-500 rounded-2xl">Prev: Projects &larr;</button>
        <button className="border border-gray-300 p-3 mt-12 hover:bg-gray-200 cursor-pointer transition duration-500 rounded-2xl">Next: About &rarr;</button>
        </div>
    </section>
}


