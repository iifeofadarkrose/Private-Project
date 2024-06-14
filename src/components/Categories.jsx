import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CatBlock from '../components/CatBlock';
import BestSeller from './BestSeller';
import CategoriesList from './CategoriesList';

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSubsubcategory, setSelectedSubsubcategory] = useState(null);
  const [selectedSubsubsubcategory, setSelectedSubsubsubcategory] = useState(null);
  const [selectedSubsubsubsubcategory, setSelectedSubsubsubsubcategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedSubcategory(null);
    setSelectedSubsubcategory(null);
    setSelectedSubsubsubcategory(null);
    setSelectedSubsubsubsubcategory(null);
    navigate(`/category/${categoryName}`);
  };

  const handleSubcategoryClick = (subcategoryName) => {
    setSelectedSubcategory(subcategoryName);
    setSelectedSubsubcategory(null);
    setSelectedSubsubsubcategory(null);
    setSelectedSubsubsubsubcategory(null);
    navigate(`/category/${selectedCategory}/subcategory/${subcategoryName}`);
  };

  const handleSubsubcategoryClick = (subsubcategoryName) => {
    setSelectedSubsubcategory(subsubcategoryName);
    setSelectedSubsubsubcategory(null);
    setSelectedSubsubsubsubcategory(null);
    navigate(`/category/${selectedCategory}/subcategory/${selectedSubcategory}/subsubcategory/${subsubcategoryName}`);
  };

  const handleSubsubsubcategoryClick = (subsubsubcategoryName) => {
    setSelectedSubsubsubcategory(subsubsubcategoryName);
    setSelectedSubsubsubsubcategory(null);
    navigate(`/category/${selectedCategory}/subcategory/${selectedSubcategory}/subsubcategory/${selectedSubsubcategory}/subsubsubcategory/${subsubsubcategoryName}`);
  };

  const handleSubsubsubsubcategoryClick = (subsubsubsubcategoryName) => {
    setSelectedSubsubsubsubcategory(subsubsubsubcategoryName);
    navigate(`/category/${selectedCategory}/subcategory/${selectedSubcategory}/subsubcategory/${selectedSubsubcategory}/subsubsubcategory/${selectedSubsubsubcategory}/subsubsubsubcategory/${subsubsubsubcategoryName}`);
  };

  // Handler for "More Info" button click
  const handleMoreInfoClick = () => {
    setSelectedCategory("IndustrialHeatingElements");
    setSelectedSubcategory("flatHeatingElements");
    setSelectedSubsubcategory(null);
    setSelectedSubsubsubcategory(null);
    setSelectedSubsubsubsubcategory(null);
    // You can add more state updates here based on the specific data needed for your view
  };

  return (
    <div className="md:mx-[5%] lg:mx-[15%]">
      <CatBlock onCategoryClick={handleCategoryClick} selectedSubsubcategory={selectedSubsubcategory} />
      {!selectedCategory && <BestSeller onMoreInfoClick={handleMoreInfoClick} />}
      <CategoriesList
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        selectedSubsubcategory={selectedSubsubcategory}
        selectedSubsubsubcategory={selectedSubsubsubcategory}
        selectedSubsubsubsubcategory={selectedSubsubsubsubcategory}
        onCategoryClick={handleCategoryClick}
        onSubcategoryClick={handleSubcategoryClick}
        onSubsubcategoryClick={handleSubsubcategoryClick}
        onSubsubsubcategoryClick={handleSubsubsubcategoryClick}
        onSubsubsubsubcategoryClick={handleSubsubsubsubcategoryClick}
      />
    </div>
  );
};

export default Categories;
