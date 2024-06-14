import { useState } from 'react';
import Header from './Header';
import ContactUs from './ContactUs';
import Categories from './Categories';
import AboutUs from './AboutUs';

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
       <Header />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {!selectedCategory && <AboutUs />}
      <ContactUs />
    </div>
  );
};

export default MainPage;
