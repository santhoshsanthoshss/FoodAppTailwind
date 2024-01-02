import React from "react";
import { categories } from "../data/Data";

const Categories = () => {
  return (
    <div className="max-w-[1640px] py-12 px-4">
      <h1 className="text-orange-600 text-center text-4xl font-bold">
        Top Rated Menu Items
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-gray-200 rounded-lg p-4 flex justify-between items-center"
            >
              <p className="font-bold sm:text-xl">{item.name}</p>
              <img className="w-12 md:w-20" src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
