import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import ProductList from './components/product/ProductList';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <Navbar/> 
      <Routes>
          <Route path = "/" element={<Login />}/>
          <Route path = "/about" element={<About />}/>
          <Route path = "/product-list" element={<ProductList />}/>
      </Routes>
    </Router>
  );
}

export default App;
