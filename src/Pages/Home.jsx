import Showcase from "../Components/Showcase";
import CategoryTabs from "../Components/CategoryTabs";
import { useState } from "react";
import Products from "../Components/Products";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div>
      <Showcase />
      <CategoryTabs setSelectedCategory={setSelectedCategory} />
      <Products selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
