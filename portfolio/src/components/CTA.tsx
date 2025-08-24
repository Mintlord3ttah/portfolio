
type CTAProps = {
    onClick: ()=> void
}
export default function CTA({onClick}:CTAProps) {
  return <button onClick={onClick} className="mt-6 w-fit px-6 py-2 bg-[#c46b31] cursor-pointer text-white rounded-full hover:bg-amber-800 transition duration-300">View Projects</button>
}
