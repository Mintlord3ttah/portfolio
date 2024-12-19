import { useState } from "react";
import Nav from "../UI/Nav";
import Footer from "../UI/Footer";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Cards from "../UI/Cards";

export default function Home() {
    const flexCenter = "flex flex-col justify-center items-center text-lg"
    return (
        <div className="app">
            <Nav />
            <div className="app-home">
                <main className={`h-full ${flexCenter} gap-12`}>
                    <HeroSection flexCenter={flexCenter} />
                    <Cards />
                    <Projects />
                </main>
            </div>
            {/* <Footer /> */}
        </div>
    )
}


