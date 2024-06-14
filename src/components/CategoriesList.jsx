import { useTranslation } from "react-i18next";
import cat from "./categories.json";
import PropTypes from "prop-types";
import { useEffect, useCallback } from "react";

const CategoriesList = ({
  selectedCategory,
  selectedSubcategory,
  selectedSubsubcategory,
  selectedSubsubsubcategory,
  onCategoryClick,
  onSubcategoryClick,
  onSubsubcategoryClick,
  onSubsubsubcategoryClick,
}) => {
  const categories = cat;
  const { t } = useTranslation();

  const handleCategoryClick = useCallback((categoryKey) => {
    onCategoryClick(categoryKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [onCategoryClick]);

  const handleSubcategoryClick = useCallback((subcategoryKey) => {
    onSubcategoryClick(subcategoryKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [onSubcategoryClick]);

  const handleSubsubcategoryClick = useCallback((subsubcategoryKey) => {
    onSubsubcategoryClick(subsubcategoryKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [onSubsubcategoryClick]);

  const handleSubsubsubcategoryClick = useCallback((subsubsubcategoryKey) => {
    onSubsubsubcategoryClick(subsubsubcategoryKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [onSubsubsubcategoryClick]);

  // Automatically select the only subcategory if there's only one
  useEffect(() => {
    if (selectedCategory && !selectedSubcategory) {
      const category = categories[selectedCategory];
      if (
        category &&
        category.categories &&
        Object.keys(category.categories).length === 1
      ) {
        const onlySubcategoryKey = Object.keys(category.categories)[0];
        handleSubcategoryClick(onlySubcategoryKey);
      }
    }
  }, [selectedCategory, selectedSubcategory, categories, handleSubcategoryClick]);

  // Automatically select the only subsubcategory if there's only one
  useEffect(() => {
    if (selectedCategory && selectedSubcategory && !selectedSubsubcategory) {
      const subcategory =
        categories[selectedCategory].categories[selectedSubcategory];
      if (
        subcategory &&
        subcategory.subcategories &&
        Object.keys(subcategory.subcategories).length === 1
      ) {
        const onlySubsubcategoryKey = Object.keys(subcategory.subcategories)[0];
        handleSubsubcategoryClick(onlySubsubcategoryKey);
      }
    }
  }, [
    selectedCategory,
    selectedSubcategory,
    selectedSubsubcategory,
    categories,
    handleSubsubcategoryClick,
  ]);

  const renderSubSubsubcategories = () => {
    if (!selectedCategory || !selectedSubcategory || !selectedSubsubcategory)
      return null;

    const subsubcategory =
      categories[selectedCategory].categories[selectedSubcategory]
        .subcategories[selectedSubsubcategory];
    if (!subsubcategory || !subsubcategory.subcategories) return null;

    return Object.keys(subsubcategory.subcategories).map(
      (subsubsubcategoryKey) => {
        const subsubsubcategory =
          subsubcategory.subcategories[subsubsubcategoryKey];
        return (
          <div
            className="cursor-pointer"
            key={subsubsubcategoryKey}
            onClick={() => handleSubsubsubcategoryClick(subsubsubcategoryKey)}
          >
            <div className="text-center">
              <img
                src={subsubsubcategory.mainPh}
                alt={subsubsubcategory.name}
                className="h-[180px] w-[180px] object-contain mx-auto"
              />
              <h3>
                {t(
                  `${selectedCategory}.categories.${selectedSubcategory}.subcategories.${selectedSubsubcategory}.subcategories.${subsubsubcategoryKey}.name`
                )}
              </h3>
              <button
                className="mt-2 px-4 py-2 w-full bg-[#279CD5] text-white rounded"
                onClick={() => handleSubsubsubcategoryClick(subsubsubcategoryKey)}
              >
                More Info
              </button>
            </div>
          </div>
        );
      }
    );
  };

  const renderSubSubcategories = () => {
    if (!selectedCategory || !selectedSubcategory) return null;

    const subcategory =
      categories[selectedCategory].categories[selectedSubcategory];
    if (!subcategory || !subcategory.subcategories) return null;

    return Object.keys(subcategory.subcategories).map((subsubcategoryKey) => {
      const subsubcategory = subcategory.subcategories[subsubcategoryKey];
      return (
        <div
          className="cursor-pointer"
          key={subsubcategoryKey}
          onClick={() => handleSubsubcategoryClick(subsubcategoryKey)}
        >
          <div className="text-center">
            <img
              src={subsubcategory.mainPh}
              alt={subsubcategory.name}
              className="h-[180px] w-[180px]  lg:w-[250px] lg:h-[220px] mx-auto"
            />
            <h3>
              {t(
                `${selectedCategory}.categories.${selectedSubcategory}.subcategories.${subsubcategoryKey}.name`
              )}
            </h3>
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
      const customDimensions =
        selectedCategory === "IndustrialHeatingElements"
          ? "w-[220px] h-[200px] md:w-[289px] md:h-[250px] lg:w-[320px] lg:h-[270px]"
          : "w-[220px] h-[200px] md:w-[289px] md:h-[250px] lg:w-[250px] lg:h-[220px]";

      return (
        <div
          className="cursor-pointer"
          key={subcategoryKey}
          onClick={() => handleSubcategoryClick(subcategoryKey)}
        >
          <div className="text-center">
            <img
              src={subcategory.mainPh}
              alt={subcategory.name}
              className={`${customDimensions} mx-auto`}
            />
            <h3 className="md:text-xl p-4">
              {t(`${selectedCategory}.categories.${subcategoryKey}.name`)}
            </h3>
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
      let imgClasses;

      // Define responsive styles using Tailwind CSS classes
      imgClasses = "object-contain";

      if (categoryKey === "Infrared Heaters") {
        imgClasses +=
          " w-[289px] h-[250px] sm:w-[350px] sm:h-[200px] md:w-[450px] md:h-[240px]";
      } else if (categoryKey === "extruderRingHeaters") {
        imgClasses +=
          " w-[289px] h-[250px] sm:w-[350px] sm:h-[200px] md:w-[450px] md:h-[160px]";
      } else {
        imgClasses +=
          " w-[289px] h-[250px] sm:w-[350px] sm:h-[200px] md:w-[289px] md:h-[250px]";
      }

      return (
        <div
          className="cursor-pointer"
          key={categoryKey}
          onClick={() => handleCategoryClick(categoryKey)}
        >
          <div className="text-center hover:border-[1px] hover:border-[#409EFF] p-2 rounded-sm bg-white h-[300px] flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-grow">
              <img
                src={category.mainPh}
                alt={category.name}
                className={imgClasses}
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

    const subsubsubcategory =
      categories[selectedCategory].categories[selectedSubcategory]
        .subcategories[selectedSubsubcategory].subcategories[
        selectedSubsubsubcategory
      ];
    if (!subsubsubcategory) return null;

    const descrTranslationPath = `${selectedCategory}.categories.${selectedSubcategory}.subcategories.${selectedSubsubcategory}.subcategories.${selectedSubsubsubcategory}.descr`;
    const descrTranslation = t(descrTranslationPath);
    const isDescrTranslated = descrTranslation !== descrTranslationPath;

    return (
      <div className="bg-[#F5F5F5]">
        <h3 className="capitalize text-2xl font-thin text-[#818590]">
          {subsubsubcategory.name}
        </h3>
        <div className="text-center flex flex-col md:flex-row md:items-start">
          <div className="flex justify-center flex-shrink-0">
            <img
              src={subsubsubcategory.mainPh}
              alt={subsubsubcategory.name}
              className="h-[180px] w-[180px] object-contain mx-auto lg:h-[310px] lg:w-[330px]"
            />
          </div>
          <div className="text-left p-4 md:flex-grow md:max-w-[500px]">
            <ul className="list-none">
              {Object.entries(subsubsubcategory).map(([key, value]) => {
                if (key === "mainPh" || key === "ph" || key === "descr")
                  return null;
                return (
                  <li key={key}>
                    {key}:{" "}
                    {typeof value === "string" || typeof value === "number"
                      ? value
                      : JSON.stringify(value)}
                  </li>
                );
              })}
            </ul>
            {subsubsubcategory.descr && isDescrTranslated && (
              <h3 className="mt-[12%] list-none">
                <li key="descr">{t(descrTranslationPath)}</li>
              </h3>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderSelectedSubsubcategory = () => {
    if (!selectedSubsubcategory) return null;

    const getSubcategory = () => {
      let subcategory =
        categories[selectedCategory].categories[selectedSubcategory];
      if (
        subcategory &&
        subcategory.categories &&
        subcategory.categories[selectedSubsubcategory]
      ) {
        return subcategory.categories[selectedSubsubcategory];
      }
      if (
        subcategory &&
        subcategory.subcategories &&
        subcategory.subcategories[selectedSubsubcategory]
      ) {
        return subcategory.subcategories[selectedSubsubcategory];
      }
      return null;
    };

    const subsubcategory = getSubcategory();
    if (!subsubcategory) return null;

    // Check if there are subsubcategories
    const subsubcategories = subsubcategory.subcategories;
    if (subsubcategories && Object.keys(subsubcategories).length === 1) {
      const onlySubsubsubcategoryKey = Object.keys(subsubcategories)[0];
      handleSubsubsubcategoryClick(onlySubsubsubcategoryKey);
      return null; // Return null to wait for the state to update
    }

    const descrTranslationPath = `${selectedCategory}.categories.${selectedSubcategory}.subcategories.${selectedSubsubcategory}.descr`;
    const descrTranslation = t(descrTranslationPath);
    const isDescrTranslated = descrTranslation !== descrTranslationPath;

    return (
      <div className="w-[300px] md:w-[680px] lg:w-[1000px] px-5">
        <h3 className="capitalize text-2xl mb-[1%] font-thin text-[#818590]">
          {t(
            `${selectedCategory}.categories.${selectedSubcategory}.subcategories.${selectedSubsubcategory}.name`
          )}
        </h3>
        <div className="text-start flex flex-col md:flex-row">
          <div className="flex justify-center flex-shrink-0">
            <img
              src={subsubcategory.mainPh}
              alt={subsubcategory.name}
              className={`h-[220px] w-[250px] lg:h-[310px] lg:w-[330px] ${
                selectedCategory === "flexibleHeaters"
                  ? "object-contain bg-white"
                  : ""
              }`}
            />
          </div>
          <div className="text-left bg-[#F5F5F5] mt-4 md:mt-0 flex-grow p-4 lg:w-[500px]">
            <ul>
              {Object.entries(subsubcategory).map(([key, value]) => {
                if (key === "mainPh" || key === "ph" || key === "descr")
                  return null;
                return (
                  <li className="capitalize mb-1" key={key}>
                    {key}: {value}
                  </li>
                );
              })}
            </ul>
            {subsubcategory.descr && isDescrTranslated && (
              <h3 className="mt-4 list-none">
                {t(descrTranslationPath)}
              </h3>
            )}
          </div>
        </div>
        <div className="flex md:block">
        <div className="md:flex md:flex-row justify-center gap-8 my-8 w-[300px] md:w-[700px] lg:w-[1000px] items-center">
          <h3 className="md:mr-4 text-[14px] md:text-xl text-center">
            Details can be obtained from the <br /> manager by phone{" "}
            <span
              className="text-[#279CD5] cursor-pointer"
              onClick={() => (window.location.href = "tel:+33749143577")}
            >
              +33 749 143 577
            </span>
          </h3>
          <div className="flex justify-center flex-row gap-8">
            <button className="bg-[#279CD5] p-4 text-white  text-[12px] md:text-xl w-[100px] md:w-[220px] h-[100px] hover:border-black hover:border">
              Ask for consultations
            </button>
          </div>
        </div>
        </div>
        
      </div>
    );
  };

  return (
    <div
      id="work"
      className="flex mx-auto flex-wrap gap-5 justify-center max-w-[960px]"
    >
      {selectedSubsubsubcategory
        ? renderSelectedSubsubsubcategory()
        : selectedSubsubcategory &&
          categories[selectedCategory]?.categories[selectedSubcategory]
            ?.subcategories[selectedSubsubcategory]?.subcategories
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
