import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  return (
    <div className="max-w-[1640] mx-auto p-4 flex justify-between items-center">
      {/* left side */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setnav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best<span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex p-1 rounded-full items-center bg-gray-200 text-[14px]">
          <p className="bg-black rounded-full p-2 text-white">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* Search input field */}
      <div className="bg-gray-200 flex rounded-full p-2 items-center w-[200px] sm:w-[300px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="w-full bg-transparent focus:outline-none p-1"
          type="text"
          placeholder="Search Food"
        />
      </div>
      {/* carts */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Carts
      </button>
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "bg-black/80 top-0 left-0 fixed z-10 w-full h-screen" : ""
        }
      ></div>

      {/* side bar menu */}

      <div
        className={
          nav
            ? "bg-white top-0 left-0 fixed w-[300px] h-screen z-10 duration-300"
            : "bg-white top-0 left-[-100%] fixed w-[300px] h-screen z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setnav(!nav)}
          size={20}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className=" p-4 text-2xl">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className=" flex flex-col p-4 text-gray-800">
            <li className="flex py-4 text-xl">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
