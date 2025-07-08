import { IoIosFlash } from "react-icons/io";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 text-2xl font-bold">
        {/* <img src="/icon.jfif" alt="Logo" className="size-12 rounded-full" /> */}
        <h3 className="text-4xl text-[#c46b31]"><IoIosFlash /></h3>
        <span className="font-bold flex text-[#c46b31]">
            <span className=" py-1.5">code</span>
            <span className="flex items-center justify-center py-1.5 shadow-sm border-y border-y-gray-200  text-gray-700">split</span>
        </span>
    </div>
  )
}
