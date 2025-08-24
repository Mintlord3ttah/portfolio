import { useNavigate } from "react-router-dom"
import { useAppProvider } from "../themeContext/AppProvider"

export default function Navigators({children, nav_to, nav_back, style}: 
    {children?: any, nav_to?: string | undefined, nav_back?: string | undefined, style?: string}) {
    
    const {theme} = useAppProvider()
    const navigate = useNavigate()
  return <div className={`flex ${style} w-full`}>
          {children}
          {nav_back && (
            <button onClick={() => navigate(`/${nav_back?.toLocaleLowerCase()}`)} className={`border ${theme === "light" ?"border-gray-300 hover:bg-gray-200" : "border-gray-700 hover:bg-gray-800"} p-3 mt-12 cursor-pointer transition duration-500 rounded-2xl`}>{nav_back} &larr;</button>
          )}
          {nav_to && (
            <button
              onClick={() => navigate(`/${nav_to?.toLocaleLowerCase()}`)}
              className={`border ${theme === "light" ?"border-gray-300 hover:bg-gray-200" : "border-gray-700 hover:bg-gray-800"} p-3 mt-12  cursor-pointer transition duration-500 rounded-2xl`}>
              {nav_to} &rarr;
            </button>
          )}
      </div>
}
