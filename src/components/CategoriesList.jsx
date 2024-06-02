import { useTranslation } from 'react-i18next';
import cat from "./categories.json";
import PropTypes from 'prop-types';

const CategoriesList = ({
  selectedCategory,
  selectedSubcategory,
  selectedSubsubcategory,
  selectedSubsubsubcategory,
  onCategoryClick,
  onSubcategoryClick,
  onSubsubcategoryClick,
  onSubsubsubcategoryClick
}) => {
  const categories = cat;
  const { t } = useTranslation();

  const renderSubSubsubcategories = () => {
    if (!selectedCategory || !selectedSubcategory || !selectedSubsubcategory) return null;

    const subsubcategory = categories[selectedCategory].categories[selectedSubcategory].subcategories[selectedSubsubcategory];
    if (!subsubcategory || !subsubcategory.subcategories) return null;

    return Object.keys(subsubcategory.subcategories).map((subsubsubcategoryKey) => {
      const subsubsubcategory = subsubcategory.subcategories[subsubsubcategoryKey];
      return (
        <div
          className="cursor-pointer"
          key={subsubsubcategoryKey}
          onClick={() => onSubsubsubcategoryClick(subsubsubcategoryKey)}
        >
          <div className="text-center">
            <img
              src={subsubsubcategory.mainPh}
              alt={subsubsubcategory.name}
              className="h-[180px] w-[180px] object-contain mx-auto"
            />
            <h3>{t(`${selectedCategory}.categories.${selectedSubcategory}.subcategories.${selectedSubsubcategory}.subcategories.${subsubsubcategoryKey}.name`)}</h3>
            <button
              className="mt-2 px-4 py-2 w-full bg-[#279CD5] text-white rounded"
              onClick={() => onSubsubsubcategoryClick(subsubsubcategoryKey)}
            >
              More Info
            </button>
          </div>
        </div>
      );
    });
  };

  const renderSubSubcategories = () => {
    if (!selectedCategory || !selectedSubcategory) return null;

    const subcategory = categories[selectedCategory].categories[selectedSubcategory];
    if (!subcategory || !subcategory.subcategories) return null;

    return Object.keys(subcategory.subcategories).map((subsubcategoryKey) => {
      const subsubcategory = subcategory.subcategories[subsubcategoryKey];
      return (
        <div
          className="cursor-pointer"
          key={subsubcategoryKey}
          onClick={() => onSubsubcategoryClick(subsubcategoryKey)}
        >
          <div className="text-center">
            <img
              src={subsubcategory.mainPh}
              alt={subsubcategory.name}
              className="h-[180px] w-[180px] object-contain mx-auto"
            />
            <h3>{t(`${selectedCategory}.categories.${selectedSubcategory}.subcategories.${subsubcategoryKey}.name`)}</h3>
          </div>
        </div>
      );
    });
  };

  const renderSubcategories = () => {
    if (!selectedCategory) return null;

    const category = categories[selectedCategory];
    if (!category || !category.categories) return null;

    return Object.keys(category.categories).map((subcategoryKey) => {
      const subcategory = category.categories[subcategoryKey];
      return (
        <div
          className="cursor-pointer"
          key={subcategoryKey}
          onClick={() => onSubcategoryClick(subcategoryKey)}
        >
          <div className="text-center">
            <img
              src={subcategory.mainPh}
              alt={subcategory.name}
              className="h-[180px] w-[180px] object-contain mx-auto"
            />
            <h3>{t(`${selectedCategory}.categories.${subcategoryKey}.name`)}</h3>
          </div>
        </div>
      );
    });
  };

  const renderCategories = () => {
    return Object.keys(categories).map((categoryKey) => {
      if (categoryKey === "IndustrialHeatingElements") {
        return null;
      }

      const category = categories[categoryKey];
      let imgStyles;
      if (categoryKey === "Infrared Heaters") {
        imgStyles = { width: '450px', height: '240px' };
      } else if (categoryKey === "extruderRingHeaters") {
        imgStyles = { width: '450px', height: '160px' };
      } else {
        imgStyles = { width: '289px', height: '250px' };
      }

      return (
        <div
          className="cursor-pointer"
          key={categoryKey}
          onClick={() => onCategoryClick(categoryKey)}
        >
          <div className="text-center hover:border-[1px] hover:border-[#409EFF] p-2 rounded-sm bg-white h-[300px] flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-grow">
              <img
                src={category.mainPh}
                alt={category.name}
                style={imgStyles}
                className="object-contain"
              />
            </div>
            <h2 className="font-serif text-[#486284] py-2 border-t-2 border-t-[#409EFF] w-full text-center">
              {t(`${categoryKey}.name`)}
            </h2>
          </div>
        </div>
      );
    });
  };

  const renderSelectedSubsubsubcategory = () => {
    if (!selectedSubsubsubcategory) return null;

    const subsubsubcategory = categories[selectedCategory].categories[selectedSubcategory].subcategories[selectedSubsubcategory].subcategories[selectedSubsubsubcategory];
    if (!subsubsubcategory) return null;

    return (
      <div className="bg-[#F5F5F5]">
        <h3 className="capitalize text-2xl font-thin text-[#818590]">{subsubsubcategory.name}</h3>
        <div className="text-center flex">
          <img
            src={subsubsubcategory.mainPh}
            alt={subsubsubcategory.name}
            className="h-[250px] w-[300px]"
          />
          <div className="text-left bg-[#F5F5F5] items-center ml-[15%]">
            <ul className="capitalize">
              {Object.entries(subsubsubcategory).map(([key, value]) => {
                if (key === 'mainPh' || key === 'ph' || key === 'descr') return null;
                return (
                  <li key={key}>
                    {key}: {typeof value === 'string' || typeof value === 'number' ? value : JSON.stringify(value)}
                  </li>
                );
              })}
            </ul>
            {subsubsubcategory.descr && (
              <h3 className="mt-[12%] list-none">
                <li key="descr">
                  {subsubsubcategory.descr}
                </li>
              </h3>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderSelectedSubsubcategory = () => {
    if (!selectedSubsubcategory) return null;

    const subsubcategory = categories[selectedCategory].categories[selectedSubcategory].subcategories[selectedSubsubcategory];
    if (!subsubcategory) return null;

    return (
      <div>
        <h3 className="capitalize text-2xl font-thin text-[#818590]">{subsubcategory.name}</h3>
        <div className="text-center flex">
          <img
            src={subsubcategory.mainPh}
            alt={subsubcategory.name}
            className="h-[310px] w-[330px]"
          />
          <div className="text-left bg-[#F5F5F5] items-center ml-[15%]">
            <ul className="">
              {Object.entries(subsubcategory).map(([key, value]) => {
                if (key === 'mainPh' || key === 'ph' || key === 'descr') return null;
                return (
                  <li className="capitalize mb-1" key={key}>
                    {key}: {value}
                  </li>
                );
              })}
            </ul>
            <h3 className="mt-[12%] list-none">
              {Object.entries(subsubcategory).map(([key, value]) => {
                if (key === 'descr')
                  return (
                    <li key={key}>
                      {key}: <br /> {value}
                    </li>
                  );
              })}
            </h3>
          </div>
        </div>
        <div className="flex justify-center gap-8 my-8">
          <h3 className="mr-4"> Details can be obtained from the 
            <br/>  manager by phone +33 749 143 577 
          </h3>
          <button className="p-4 border-[#279CD5] border text-[#279CD5] w-[220px] hover:text-black">Ask for consultations</button>
          <button className="bg-[#279CD5] p-4 text-white w-[220px] hover:border-black hover:border">Send request</button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex mx-auto flex-wrap gap-5 justify-center w-[960px]">
      {selectedSubsubsubcategory
        ? renderSelectedSubsubsubcategory()
        : selectedSubsubcategory && categories[selectedCategory]?.categories[selectedSubcategory]?.subcategories[selectedSubsubcategory]?.subcategories
        ? renderSubSubsubcategories()
        : selectedSubsubcategory
        ? renderSelectedSubsubcategory()
        : selectedSubcategory
        ? renderSubSubcategories()
        : selectedCategory
        ? renderSubcategories()
        : renderCategories()}
    </div>
  );
};

CategoriesList.propTypes = {
  selectedCategory: PropTypes.string,
  selectedSubcategory: PropTypes.string,
  selectedSubsubcategory: PropTypes.string,
  selectedSubsubsubcategory: PropTypes.string,
  onCategoryClick: PropTypes.func.isRequired,
  onSubcategoryClick: PropTypes.func.isRequired,
  onSubsubcategoryClick: PropTypes.func.isRequired,
  onSubsubsubcategoryClick: PropTypes.func.isRequired,
};

export default CategoriesList;