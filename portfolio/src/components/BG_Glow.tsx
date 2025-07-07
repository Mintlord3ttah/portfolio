
export default function BG_Glow({size, color = {one:"", two:"", three:""}, position}: {size: number, color: {one: string, two: string, three: string}, position: string}) {
   
  return  <div className={`absolute blur-2xl ${position} shadow-[0 0 10px ${color.one}, 0 0 30px ${color.one}, 0 0 60px ${color.one}, 0 0 120px ${color.one}, 0 0 200px ${color.one}] size-[${size}%] ${color.one} rounded-full flex justify-center items-center`}>
            {/* <div className="absolute w-full h-full backdrop-blur-2xl rounded-full"></div> */}
            <div className={` size-32 ${color.two} rounded-full flex justify-center items-center`}>
              <div className={` size-24 ${color.three} rounded-full`}></div>
            </div>
        </div>
}
