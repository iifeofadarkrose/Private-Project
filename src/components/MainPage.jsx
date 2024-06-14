import React, { useState } from 'react';
import Header from './Header';
import BestSeller from './BestSeller';
import CategoriesList from './CategoriesList';
import ContactUs from './ContactUs';

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Header />
      <BestSeller />
      <CategoriesList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ContactUs />
    </div>
  );
};

export default MainPage;
