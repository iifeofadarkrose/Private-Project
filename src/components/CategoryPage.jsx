import { useParams, useNavigate } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import Header from './Header';
import ContactUs from './ContactUs';

const CategoryPage = () => {
  const { categoryId, subcategoryId, subsubcategoryId } = useParams();
  const navigate = useNavigate();

  const handleCategoryClick = (id) => {
    navigate(`/category/${id}`);
  };

  const handleSubcategoryClick = (id) => {
    navigate(`/category/${categoryId}/subcategory/${id}`);
  };

  const handleSubsubcategoryClick = (id) => {
    navigate(`/category/${categoryId}/subcategory/${subcategoryId}/subsubcategory/${id}`);
  };

  return (
    <div>
      <Header />
      <CategoriesList
        selectedCategory={categoryId}
        selectedSubcategory={subcategoryId}
        selectedSubsubcategory={subsubcategoryId}
        onCategoryClick={handleCategoryClick}
        onSubcategoryClick={handleSubcategoryClick}
        onSubsubcategoryClick={handleSubsubcategoryClick}
      />
      <ContactUs />
    </div>
  );
};

export default CategoryPage;
