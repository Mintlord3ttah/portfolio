import { useEffect, useState } from "react"
import { useAppProvider } from "../themeContext/AppProvider";
let timer: number;
let windowLoadTimer: number;

export default function Stack({stack, level}: {stack: string, level: number}) {
  const [incremental, setIncremental] = useState(0);
  const {setWindowLoad, windowLoad} = useAppProvider() // run all timers on window load only
  // const regex = /[0-9]\%*/g

  useEffect(()=>{
    function incrementTimer(){
      if(!windowLoad) return clearTimeout(windowLoadTimer)
      timer = setTimeout(()=>{
        setIncremental(prev=> incremental === level ? level : prev + 1)
        if(incremental >= level) clearTimeout(timer)
      },50)
    }
    incrementTimer()

    if(incremental >= level) clearTimeout(timer)
    windowLoadTimer = setTimeout(()=> setWindowLoad(false), 6000)
  },[incremental])
  
  return <div className="mt-4">
  <div className="flex justify-between items-center">
    <p>{stack}</p>
    <p>{windowLoad ? incremental : level}</p>
  </div>
  <div className="h-2 w-full bg-gray-300 rounded-full">
      <div style={{width: `${windowLoad ? incremental : level}%`}} className={`h-full bg-[#aa6f47] rounded-full`}></div>
  </div>
</div>
}
