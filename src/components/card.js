import React from "react"

const Card = ({ name, description, link }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-500 text-base">{description}</p>
      <a href={link} target="_blank" className="block p-2 mt-4 text-center bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 shadow">
        Visit {name}
      </a>
    </div>
  </div>
)

export default Card
