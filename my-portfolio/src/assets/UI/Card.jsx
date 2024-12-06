
export default function Card({ heading, description, icon }) {
    return (
        <div className="card w-64 h-36 p-4 rounded-sm text-sm flex flex-col gap-2">
            <p className="font-semibold flex justify-between"><span>{heading}:</span> <span className="text-red-400 text-lg">{icon}</span></p>
            <p className="card-desc">{description}</p>

            <a href="#">See more...</a>
        </div>
    )
}
