import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Nav from "./Nav";

export default function Home() {
    const flexCenter = "flex flex-col justify-center items-center text-lg"
    return (
        <div className="app-home px-4">
            <Nav />
            <main className={`h-full ${flexCenter} gap-12`}>
                <div className={`${flexCenter} md:w-1/2 gap-5`}>
                    <h1 className="md:text-4xl text-4xl text-center md:font-bold font-medium">Make your brand stand out with our professional services!</h1>
                    <p className="text-center">Hi there, I'm Mint, a professional web developer. I can create you a sleek and modern website that will make your brand stand out from the crowd.</p>
                    <Button>See Projects &rarr;</Button>
                </div>
                <div className="cards flex gap-4 flex-wrap justify-center ">
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
                    <footer className="text-sm">&copy; All Rights Reserved</footer>
                </div>
            </main>
        </div>
    )
}
