import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadLineCard from "./components/HeadLineCard";
import Food from "./components/Food";
import Categories from "./components/Categories";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineCard />
      <Food />
      <Categories />
    </div>
  );
};

export default App;
