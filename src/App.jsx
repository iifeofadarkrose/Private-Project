import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import CategoryPage from './components/CategoryPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/category/:categoryId/subcategory/:subcategoryId" element={<CategoryPage />} />
        <Route path="/category/:categoryId/subcategory/:subcategoryId/subsubcategory/:subsubcategoryId" element={<CategoryPage />} />
        <Route path="/category/:categoryId/subcategory/:subcategoryId/subsubcategory/:subsubcategoryId/subsubsubcategory/:subsubsubcategoryId" element={<CategoryPage />} />
        <Route path="/category/:categoryId/subcategory/:subcategoryId/subsubcategory/:subsubcategoryId/subsubsubcategory/:subsubsubcategoryId/subsubsubsubcategory/:subsubsubsubcategoryId" element={<CategoryPage />} />
      </Routes>
 
  );
}

export default App;
