import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Home() {
    const flexCenter = "flex flex-col justify-center items-center text-lg"
    return (
        <div className="app">
            <Nav />
            <div className="app-home">
                <main className={`h-full ${flexCenter} gap-12`}>
                    <div className="container-hero w-full flex justify-center px-4 py-8">
                        <div className={`${flexCenter} max-w-3xl gap-7`}>
                            <h1 className="md:text-5xl text-5xl text-center md:font-bold font-medium">Make your brand stand out with our professional services!</h1>
                            <p className="text-center">Hi there, I'm Mint, a professional web developer. I can create you a sleek and modern website that will make your brand stand out from the crowd.</p>
                            <Button>See Projects &rarr;</Button>
                        </div>
                    </div>
                    <div className="cards flex gap-7 px-4 flex-wrap justify-center ">
                        <Card heading={"Design Implementation"}
                            icon={<ion-icon name="fitness-outline"></ion-icon>}
                            description={"Lovingly crafted designs that are appealing to your audience"} />
                        <Card heading={"Performance/Accessibility"}
                            icon={<ion-icon name="construct-outline"></ion-icon>}
                            description={"Smooth user experience and fast loading times"} />
                        <Card heading={"Interactive Features"}
                            icon={<ion-icon name="gift-outline"></ion-icon>}
                            description={"Uses REACT to create interactive and engaging user interfaces"} />
                        <Card heading={"Reliablity/Best Practices"}
                            icon={<ion-icon name="shield-checkmark-outline"></ion-icon>}
                            description={"Follows best practices with security conciousness + fast delivery"} />
                        <footer className="text-sm">&copy; 2024 Devhunter by Mint </footer>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}
