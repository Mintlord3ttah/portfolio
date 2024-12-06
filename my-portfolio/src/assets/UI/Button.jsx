
export default function Button({ children, onClick }) {
    return <button onClick={onClick} className="bg-red-900 px-4 py-2 rounded-sm">{children}</button>
}
