import React from "react";

const HeadLineCard = () => {
  return (
    <div className="max-h-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6">
      {/* cards */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute rounded-xl w-full h-full bg-black/50 text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out,BOGO'S Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white mx-2 text-black absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[1200px] w-full object-cover rounded-xl "
          src="https://images.pexels.com/photos/7807710/pexels-photo-7807710.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadLineCard;
