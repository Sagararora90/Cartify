import React, { useEffect, useState } from "react";
import Card from "./card";
import Category from "./category";
import axios from "axios";
import { FiMenu, FiX } from "react-icons/fi";

const Main = ({ theme }) => {
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      console.log(res.data.products);
      setData(res.data.products);
    };
    fetchData();
  }, [category]);

  const filteredData = category
    ? data.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    : data;

  return (
    <div className="container mx-auto px-4">
      <div className="my-6 z-50 text-xl">
        Category: <Category setCategory={setCategory} />
      </div>
      <hr className="mb-8"></hr>

      <div className="flex justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredData.map((product) => (
          <Card key={product.id} price={product.price} title={product.title} image={product.thumbnail} theme={theme} />
        ))}
        </div>
        
      </div>
    </div>
  );
};

export default Main;
