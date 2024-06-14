import { useState } from 'react';
import Categories from "./components/Categories";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Header />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {!selectedCategory && <AboutUs />}
      <ContactUs />
    </>
  );
}

export default App;
