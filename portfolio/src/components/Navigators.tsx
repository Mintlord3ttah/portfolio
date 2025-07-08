import { useNavigate } from "react-router-dom"

export default function Navigators({children, nav_to, nav_back, style}: 
    {children?: any, nav_to?: string | undefined, nav_back?: string | undefined, style?: string}) {

    const navigate = useNavigate()
  return <div className={`flex ${style}`}>
    {children}
      {/* <BG_Glow size={50} color={{one: "bg-red-300",two: "bg-purple-400", three: "bg-purple-500"}} position="left-[50%] bottom-0" /> */}

          {nav_back && (
            <button onClick={() => navigate(`/${nav_back?.toLocaleLowerCase()}`)} className="border border-gray-300 p-3 mt-12 hover:bg-gray-200 cursor-pointer transition duration-500 rounded-2xl">{nav_back} &larr;</button>
          )}
          {nav_to && (
            <button
              onClick={() => navigate(`/${nav_to?.toLocaleLowerCase()}`)}
              className="border border-gray-300 p-3 mt-12 hover:bg-gray-200 cursor-pointer transition duration-500 rounded-2xl">
              {nav_to} &rarr;
            </button>
          )}
      </div>
}
