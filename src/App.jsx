import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsArea from "./components/NewsArea";

const App = () => {
  const [category, setCategory] = useState("sports"); // Default category is 'sports'

  // Handle category change
  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <div>
      <Navbar onCategoryChange={handleCategoryChange} />
      <NewsArea category={category} />
    </div>
  );
};

export default App;
