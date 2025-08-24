import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import useScrollIntoView, { type element } from "../utils/scrollIntoView";
import { useLocation } from "react-router-dom";

const fromStorage = localStorage.getItem("theme")
type theme = "light" | "dark";
interface ThemeSchema {
    theme: theme,
    setTheme: (theme: theme) => void
    specNavigation: boolean,
    setSpecNavigation: (nav: boolean)=> void,
    windowLoad: boolean,
    setWindowLoad: (nav: boolean)=> void,
}
const ThemeContext = createContext<ThemeSchema | undefined>(undefined)

function AppProviderContext({children}: {children: React.ReactNode}){
    const [theme, setTheme] = useState<theme>(fromStorage as theme || "light");
    const [windowLoad, setWindowLoad] = useState(true) // run timer on first load only
    const [specNavigation, setSpecNavigation] = useState(false)
    const resetLayout = useRef<HTMLDivElement>(null) // focus hero sections on mount
    const pathname = useLocation().pathname

    useScrollIntoView({element: resetLayout.current as element, trigger: pathname})
    useEffect(()=>{
        function getTheme(){
          if(!fromStorage) return localStorage.setItem("theme", "light")
          setTheme(fromStorage as theme)
        }
        getTheme()
    },[])

    return <ThemeContext.Provider value={{theme, setTheme, windowLoad, setWindowLoad, specNavigation, setSpecNavigation}}>
        <div className={`${theme === "light" ? "theme-light" : "theme-dark"} transition-all duration-300`}>
            <div ref={resetLayout}></div>
            {children}
        </div>
    </ThemeContext.Provider>
}

function useAppProvider(){
    const context = useContext(ThemeContext)
    if(context === undefined) throw Error("Using theme outside of the theme provider context.")
    return context
}

export {useAppProvider, AppProviderContext}