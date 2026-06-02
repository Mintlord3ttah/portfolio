import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
    <div className="flex items-center gap-2 text-2xl font-bold">
        <img src="/companyname.png" alt="Logo" className="h-12" />
    </div>
    </Link>
  )
}
