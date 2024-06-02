import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import cat from "./categories.json";
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const CatBlock = ({ onCategoryClick }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { t } = useTranslation();
  const categories = cat;

  const handleButtonClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleCategoryClick = (categoryKey) => {
    setDropdownVisible(false);
    onCategoryClick(categoryKey);
  };

  const renderCategories = () => {
    return (
      <div className="absolute bg-white border mt-1 rounded-lg shadow-lg w-full max-h-64 overflow-y-auto z-50">
        {Object.keys(categories).map((categoryKey) => (
          <div
            key={categoryKey}
            className="cursor-pointer p-2 hover:bg-gray-200"
            onClick={() => handleCategoryClick(categoryKey)}
          >
            {t(`${categoryKey}.name`)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center font-light mx-auto my-12 lg:w-[1000px] container relative">
      <button 
        onClick={handleButtonClick} 
        className="flex justify-between items-center mx-[2%] text-white bg-[#279CD5] md:text-[15px] w-[160px] h-[40px] md:w-[220px] md:h-[40px] rounded-t-lg"
      >
        <div className="ml-[12px] text-[20px] md:text-xl">Categories</div>
        <IoMenu className="mr-[12px] w-[16px] h-[16px]" />
      </button>
      {dropdownVisible && renderCategories()}
      <h1 className="text-xl md:text-3xl">Popular Products</h1>
    </div>
  );
};

CatBlock.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
};

export default CatBlock;
