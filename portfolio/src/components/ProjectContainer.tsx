import { BiLinkAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { textTruncate } from "../utils/textTrunc";
import { useState } from "react";

export default function ProjectContainer({heading, text, photo, link, projectNumb, importance="regular", status, technologies}:
    {heading: string, link: string, text: string, photo: string, projectNumb: number, status:string[], technologies?: string[], importance?: "regular" | "major"}) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500
        ${importance === "major" ? "transform hover:-translate-y-2 hover:shadow-2xl" : "transform hover:-translate-y-1 hover:shadow-lg"}
        group
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section with 3D Effect */}
      <div className={`relative overflow-hidden transition-transform duration-500 ${importance === "major" ? "h-56 sm:h-64" : "h-48 sm:h-56"} ${isHovered ? "rotate-x-5" : ""}`}>
        <img
          src={photo}
          alt={`${heading} screenshot`}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${importance === "major" ? "" : "group-hover:opacity-90"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 bg-white">
        {/* Header with Project Number */}
        <div className="flex items-center gap-3 mb-3">
          <span className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#c46b31] to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm`}>
            {projectNumb}
          </span>
          <h3 className={`font-bold text-lg sm:text-xl text-gray-800 group-hover:text-[#c46b31] transition-colors duration-300`}>
            {heading}
          </h3>
        </div>

        {/* Project Link */}
        <div className={`flex gap-2 sm:gap-3 items-center text-sm mb-4 ${importance === "major" ? "text-base" : "text-sm"} text-blue-600`}>
          <BiLinkAlt className="flex-shrink-0" />
          <Link
            to={`https://${link}`}
            className="hover:underline break-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            {textTruncate(link, 20)}
          </Link>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
          {text}
        </p>

        {/* Status Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {status.map((stat, i) => (
            <span
              key={i}
              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                stat === "Deployed" || stat === "Completed"
                  ? "bg-green-100 text-green-800"
                  : stat === "Under Development" || stat === "Paused"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {stat}
            </span>
          ))}
        </div>

        {/* Technologies */}
        {technologies && (
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium hover:bg-orange-200 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover Overlay Effect */}
      <div className={`
        absolute inset-0 bg-gradient-to-r from-[#c46b31]/10 to-purple-500/10
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
        ${importance === "major" ? "" : ""}
      `} />
    </div>
  );
}