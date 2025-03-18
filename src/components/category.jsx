import React from "react";

const Category = ({ setCategory, theme }) => {
  return (
    <>
      <select
        className={`p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          theme === "DARK" ? "bg-black text-white" : "bg-white text-black"
        }`}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="furniture">Furniture</option>
        <option value="groceries">Groceries</option>
      </select>
    </>
  );
};

export default Category;
