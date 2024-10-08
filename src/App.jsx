import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/App.css';
import Products from './Components/Products';
import Body from './Components/body';
import Checkout from './Components/Checkout';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <NavBar cart={cart} /> {/* Pass the cart state to NavBar */}
      <Routes>
        <Route path="/" element={<Body />} /> {/* Home page */}
        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} /> {/* Products page */}
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} /> {/* Checkout page */}
      </Routes>
    </div>
  );
}

export default App;
