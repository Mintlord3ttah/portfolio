import { useAppProvider } from "../themeContext/AppProvider";

export default function TestimonialCard({ name, feedback }: { name: string; feedback: string }) {
    const {theme} = useAppProvider()
  return (
    <div className={`p-2  border ${theme === "light" ? "bg-gray-100 border-gray-300" : "bg-gray-800 border-gray-700"} rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300`}>
        <div className={`${theme === "light" ? "bg-white" : "bg-[#111]"} p-6 rounded-lg shadow-md`}>
            <h3 className={`text-xl font-semibold  ${theme === "light" ? "text-gray-800" : "text-gray-50"}`}>{name}</h3>
            <p className="text-gray-600 mt-4 text-2xl">"{feedback}</p>
        </div>
    </div>
    )
}
