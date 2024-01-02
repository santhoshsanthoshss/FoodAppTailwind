import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* overlay */}
        <div className="absolute bg-black/50 w-full h-full max-h-[500px] text-white flex flex-col justify-center">
          <h1 className=" px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The<span className="text-orange-500">Best</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold px-4">
            <span className="text-orange-500">Food</span>Delivery
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
