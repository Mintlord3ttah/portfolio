
export default function TestimonialCard({ name, feedback }: { name: string; feedback: string }) {
  return (
    <div className="p-2  border border-gray-300 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600 mt-4 text-2xl">"{feedback}</p>
        </div>
    </div>
    )
}
