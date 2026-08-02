import { useRef, useState } from "react";
import BG_Glow from "../components/BG_Glow";
import CTA from "../components/CTA";
import Stack from "../components/Stack";
import useScrollIntoView, { type element } from "../utils/scrollIntoView";
import { useAppProvider } from "../themeContext/AppProvider";
import { Link } from "react-router-dom";
import ProjectContainer from "../components/ProjectContainer";
import Contact from "../components/Contact";
import Navigators from "../components/Navigators";

const projects = [
    {
        name: "DEVARS - Developer Tool",
        description: "Devars unifies workflows with a plugin-first CLI, SDKs for JavaScript and Python, and an open core model that keeps the developer in control.",
        link: "devars-web.vercel.app",
        photo: "/devars-web-dashboard.png",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Express", "Commander.js"],
        status: ["Paused", "Deployed", "Team Work"]
    },
    {
        name: "Prohub - Micro SaaS Developer Ecosystem",
        description: "ProHub is a professional developer ecosystem that helps businesses find trusted software developers, while giving developers the tools, reputation, and opportunities they need to build successful careers.",
        link: "prohub-platform.vercel.app",
        photo: "/prohub-dashboard.png",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase", "Stripe API", "OAuth"],
        status: ["Refining", "Deployed", "Team Work", "future open source"]
    },
    {
        name: "Ellara - E-commerce Platform",
        description: "Ellara is a modern e-commerce platform that offers a seamless shopping experience, secure payment options, and a dashboard for sellers.",
        link: "fashion-hub-rosy.vercel.app/",
        photo: "/ellara-dashboard.png",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Express", "MongoDB", "Stripe API", "Supabase"],
        status: ["Under Development", "Deployed", "Solo"]
    },
    {
        name: "Iremember - Task Management app",
        description: "This is a simple yet indespensible web app for preparing and managing travel items.",
        link: "iremember-eta.vercel.app",
        photo: "/iREMEMBER APP-2.gif",
        technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Express", "MongoDB"],
        status: ["Deployed", "Solo"]
    },
    {
        name: "Foodie - food delivery",
        description: "This is a platform for delivering food from local restaurants.",
        link: "mintlord3ttah.github.io/dailybreadfood.com",
        photo: "/dailybread-foods-1.png",
        technologies: ["HTML",  "CSS", "JavaScript"],
        status: ["Deployed", "Solo"]
    },
    {
        name: "Chef Diary - Search All Recipes",
        description: "A platform to seemlessly grab any kind of recipe with auto completion and search filtering",
        link: "chef-diary.vercel.app",
        photo: "/chef-diary.png",
        technologies: ["React", "Tailwind CSS", "JavaScript", "JWT Authentication"],
        status: ["Deployed", "Solo"]
    },
    {
        name: "Instablog - Blogging Platform",
        description: "This is a blogging platform that allows users to create and share their own blogs.",
        link: "instablog.vercel.app",
        photo: "/new design insta.png",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase", "OAuth"],
        status: ["Unfinished", "Deployed", "Solo"]
    },
    {
        name: "Mapify - Location Tracker",
        description: "This project is a map based web app that helps users keep logs/track their location.",
        link: "mapify.vercel.app",
        photo: "/mapify2.png",
        technologies: ["React", "Tailwind CSS", "Leaflet.js", "Supabase"],
        status: ["Completed", "Deployed", "Solo"]
    },
    {
        name: "Fundaweb - Collaborative investment app",
        description: "This is a collaborative investment app that allows users to pool resources and invest in real estate projects.",
        link: "fundaweb.vercel.app",
        photo: "/fundaweb-best-landing-2.png",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
        status: ["Under Development", "Deployed", "Team Work"]
    },
]

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

// Circular meter component
function CircularMeter({ label, level, color }: { label: string; level: number; color: string }) {
    const circumference = 2 * Math.PI * 40;
    const offset = circumference - (level / 100) * circumference;
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-20 h-20">
                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                    <circle
                        cx="50" cy="50" r="40"
                        fill="none"
                        stroke={color}
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-800">{level}%</span>
                </div>
            </div>
            <span className="mt-2 text-sm font-medium text-gray-600">{label}</span>
        </div>
    );
}

export default function Home() {
    const { theme, setSpecNavigation } = useAppProvider()
    const [isScroll, setIsScroll] = useState(false)
    const projectsRef = useRef<HTMLDivElement>(null)
    useScrollIntoView({ element: projectsRef.current as element, trigger: isScroll })

    return (
        <div className="w-full">
            {/* Hero Section - Static First Content */}
            <section className="relative pb-8 pt-20 min-h-screen flex items-center justify-center overflow-hidden ">
                {/* Background gradient with vector design */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 ">
                    {/* Vector pattern overlay */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c46b31' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                </div>

                {/* Decorative glow orbs */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{ animationDelay: '4s' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Profile + Intro */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="relative mb-8">
                                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                    <img src="coder.jfif" alt="developer" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#c46b31] rounded-full border-4 border-white flex items-center justify-center">
                                    <span className="text-white text-xl">🚀</span>
                                </div>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#c46b31] mb-4">
                                Confidence N. Ettah
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 font-medium mb-8 max-w-lg">
                                I build developer tools and scalable software, focusing on CLI tools, automation, and modern web apps that help teams/firms move faster and ship better products.
                            </p>
                            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                                <CTA onClick={() => setIsScroll(prev => !prev)} />
                                <Link
                                    to="/projects"
                                    onClick={() => setSpecNavigation(true)}
                                    className="px-8 py-3 border-2 border-[#c46b31] text-[#c46b31] font-bold rounded-full hover:bg-[#c46b31] hover:text-white transition-all duration-300 cursor-pointer"
                                >
                                    View Projects
                                </Link>
                            </div>
                        </div>

                        {/* Right: Skills + Quote */}
                        <div className="flex flex-col gap-8">
                            {/* Skills Circular Meters */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                                <h2 className="text-2xl font-bold text-[#c46b31] mb-6 text-center">Technical Skills</h2>
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                                    <CircularMeter label="React" level={99} color="#61dafb" />
                                    <CircularMeter label="TypeScript" level={100} color="#3178c6" />
                                    <CircularMeter label="Next.js" level={95} color="#000000" />
                                    <CircularMeter label="Tailwind" level={93} color="#06b6d4" />
                                    <CircularMeter label="Node.js" level={90} color="#68a063" />
                                    <CircularMeter label="Express" level={95} color="#f5f5f5" />
                                    <CircularMeter label="MongoDB" level={95} color="#47a248" />
                                    <CircularMeter label="PostgreSQL" level={95} color="#336791" />
                                </div>
                            </div>

                            {/* Quote Card */}
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 relative">
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#c46b31] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                    "
                                </div>
                                <p className="text-gray-600 italic leading-relaxed pt-4">
                                    Once, while working on a challenging project and being new to the Next.js framework, I encountered a significant roadblock. Instead of giving up, I took a step back, re-evaluated the problem, and approached it from a different angle. This experience taught me the importance of perseverance and creative problem-solving in web development.
                                </p>
                                <p className="mt-4 font-bold text-[#c46b31]">— Simple Anecdote</p>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { number: "8+", label: "Projects" },
                                    { number: "100%", label: "TypeScript" },
                                    { number: "Solo", label: "Most Work" },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center shadow-md border border-white/50">
                                        <p className="text-2xl sm:text-3xl font-extrabold text-[#c46b31]">{stat.number}</p>
                                        <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-sm text-gray-400 font-medium">Scroll to explore</span>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Projects Section */}
            <section className="relative z-20 py-16 bg-white" id="projects">
                <BG_Glow size={50} color={{ one: "bg-blue-300", two: "bg-blue-400", three: "bg-blue-500" }} position="right-[50%] bottom-[20%]" />
                <div ref={projectsRef} className="pt-36">
                    <h2 className="text-4xl sm:text-5xl mb-4 text-center text-[var(--primary-color)] font-bold">Projects</h2>
                    <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">Explore my latest work and projects that showcase my skills and creativity.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                        {projects.map((v, i) => (
                            <ProjectContainer
                                key={i}
                                status={v.status}
                                projectNumb={i + 1}
                                heading={v.name}
                                photo={v.photo}
                                link={v.link}
                                text={v.description}
                                technologies={v.technologies}
                                importance={i === 0 ? "major" : "regular"}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative z-10 py-32 bg-gradient-to-b from-gray-50 to-white" id="testimonials">
                <BG_Glow size={50} color={{ one: "bg-lime-100", two: "bg-lime-200", three: "bg-lime-300" }} position="left-[10%] bottom-0" />
                <h2 className="text-4xl sm:text-5xl mb-4 text-center text-[var(--primary-color)] font-bold">Testimonials</h2>
                <p className="text-center text-gray-500 mb-12 text-xl">What my clients say about me:</p>

                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Ettah N. Ettah", feedback: "This is the best service I've ever used!", initial: "E" },
                            { name: "Jane Smith", feedback: "Absolutely fantastic experience!", initial: "J" },
                            { name: "Bob Johnson", feedback: "I can't recommend this enough!", initial: "B" },
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 transform hover:-translate-y-2 transition-all duration-300 relative">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#c46b31] to-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-3">
                                        {testimonial.initial}
                                    </div>
                                    <span className="font-bold text-gray-800">{testimonial.name}</span>
                                </div>
                                <div className="flex text-[#c46b31] text-3xl mb-2">★★★★★</div>
                                <p className="text-gray-600 leading-relaxed italic">"{testimonial.feedback}"</p>
                                {/* Notification badge */}
                                <div className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                                    Verified
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section with Map */}
            <section className="relative z-10 py-32 bg-white" id="contact">
                <BG_Glow size={50} color={{ one: "bg-purple-100", two: "bg-purple-200", three: "bg-purple-300" }} position="right-[30%] bottom-0" />
                <h2 className="text-4xl sm:text-5xl mb-4 text-center text-[var(--primary-color)] font-bold">Get In Touch</h2>
                <p className="text-center text-gray-500 mb-12 text-xl">Let's work together on your next project</p>

                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Map */}
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15573.566634894735!2d3.5438316!3d6.5279922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m3!2zNsKwMTMnNiU3MiA4LjA3ojEUqCC_qm4gTW9pbnBhbmUgVG9ub25pgJl!5e0!3m2!1sen!2sng!4v1678901234567!5m2!1sen!2sng"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location Map"
                            loading="lazy"
                        />
                    </div>

                    {/* Contact Info + Form */}
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 sm:p-10 border border-gray-100">
                        <h3 className="text-2xl font-bold mb-6 text-[#c46b31]">Let's Build Something Amazing Together</h3>

                        <div className="space-y-5 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#c46b31] rounded-full flex items-center justify-center text-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 11v6a2 2 0 002 2h8a2 2 0 002-2v-6M8 7a4 4 0 110 0 4 4 0 010 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Email</h4>
                                    <p className="text-gray-600">confidence@devar.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#c46b31] rounded-full flex items-center justify-center text-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.952.684l1.491 4.478a1 1 0 01-.473 1.09L5 11v5a2 2 0 002 2h9a2 2 0 002-2v-5.5a1 1 0 01-.394-.772l-1.86-5.58a1 1 0 00-.473-.772H8a2 2 0 01-2-2V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Phone</h4>
                                    <p className="text-gray-600">+234-902-537-7960</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-[#c46b31] rounded-full flex items-center justify-center text-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.65716.657a4 4 0 012.828 1.176l-3.5 3.5a4 4 0 11-1.414-1.414L19.485 4.24a.75.75 0 01.122-.582z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Location</h4>
                                    <p className="text-gray-600">Pelagica, Lagos, Nigeria</p>
                                </div>
                            </div>
                        </div>

                        <Contact />
                    </div>
                </div>
            </section>

            <Navigators style="justify-end" nav_to="Skills" />
        </div>
    )
}