import { useState } from 'react';
import CatBlock from '../components/CatBlock';
import BestSeller from './BestSeller';
import CategoriesList from './CategoriesList';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSubsubcategory, setSelectedSubsubcategory] = useState(null);
  const [selectedSubsubsubcategory, setSelectedSubsubsubcategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedSubcategory(null);
    setSelectedSubsubcategory(null);
    setSelectedSubsubsubcategory(null);
  };

  const handleSubcategoryClick = (subcategoryName) => {
    setSelectedSubcategory(subcategoryName);
    setSelectedSubsubcategory(null);
    setSelectedSubsubsubcategory(null);
  };

  const handleSubsubcategoryClick = (subsubcategoryName) => {
    setSelectedSubsubcategory(subsubcategoryName);
    setSelectedSubsubsubcategory(null);
  };

  const handleSubsubsubcategoryClick = (subsubsubcategoryName) => {
    setSelectedSubsubsubcategory(subsubsubcategoryName);
  };

  return (
    <div className="md:mx-[5%] lg:mx-[15%]">
      <CatBlock onCategoryClick={handleCategoryClick} />
      <BestSeller />
      <CategoriesList
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        selectedSubsubcategory={selectedSubsubcategory}
        selectedSubsubsubcategory={selectedSubsubsubcategory}
        onCategoryClick={handleCategoryClick}
        onSubcategoryClick={handleSubcategoryClick}
        onSubsubcategoryClick={handleSubsubcategoryClick}
        onSubsubsubcategoryClick={handleSubsubsubcategoryClick}
      />
    </div>
  );
};

export default Categories;
