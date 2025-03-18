import React from "react";

const Card = ({ price, title, image, theme }) => {
  return (
    <div className={`px-6 py-6 w-80 rounded-xl shadow-lg border text-center
      ${theme === "DARK" ? "bg-black text-white border-gray-700" : "bg-white text-white border-gray-300"}
    `}>
      <div className={`${theme==="DARK"?"bg-gray-100 p-4 rounded-lg":"bg-gray-200 p-4 rounded-lg"}`}>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover rounded-lg"
      />
      </div>
      <h1 className={`text-xl font-semibold mt-3 ${theme === "DARK" ? "text-white": "text-black"}`}>{title}</h1>
      <p className={`text-lg mt-1 font-medium ${theme === "DARK" ? "text-white": "text-black"}`}>
        Price: <span className="text-green-400">${price}</span>
      </p>
      <button className="bg-purple-700 px-4 py-2 rounded-lg mt-1 cursor-pointer hover:bg-purple-900">
        View Details
      </button>
    </div>
  );
};

export default Card;
