import { useAppProvider } from "../themeContext/AppProvider"

export default function Skill({name, children, contain=false}: {name: string, children: string, contain?: boolean}) {
    const {theme} = useAppProvider()
    return <li className={contain ? `${theme === "light" ? "bg-neutral-100" : "bg-neutral-800"} p-4 rounded-2xl` : ''}>
        <span className='text-amber-700 font-bold '>{name}</span> - {children}
    </li>
}
