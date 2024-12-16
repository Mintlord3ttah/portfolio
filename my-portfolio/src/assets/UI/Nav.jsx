import { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";

export default function Nav() {
    const [menu, setMenu] = useState(false);

    return (
        <div>
            <div className="nav-wrap px-4 w-full">
                <div className="nav p-4 items-center  flex flex-row justify-between">
                    <Logo />
                    <UnOrderedList menuType="horizontal-nav-ul" />
                    <span onClick={() => setMenu(true)} className="menu"><ion-icon name="menu-outline"></ion-icon></span>
                </div>
            </div>
            <div className={`over-lay ${menu ? "" : "hidden"}`} >
                <div className="menu-list">
                    <UnOrderedList menuType="vertical-nav-ul" />
                    <button onClick={() => setMenu(false)} className="menu-close-btn text-2xl">&times;</button>
                </div>
            </div>
        </div>
    )
}

function UnOrderedList({ flexDir, menuType }) {
    return (
        <ul className={`${menuType} flex  gap-4 items-center`}>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li><a href="tel:+2349023172761"><Button>CONTACT <span><ion-icon name="call-outline"></ion-icon></span></Button></a></li>
        </ul>
    )
}
