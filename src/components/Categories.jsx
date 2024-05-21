import CategoriesList from "./CategoriesList";
import CatBlock from '../components/CatBlock'

const Categories = () => {
  return (
    <div className="md:mx-[5%] lg:mx-[15%]">
      <CatBlock/>
      <CategoriesList />
    </div>
  );
};

export default Categories;
