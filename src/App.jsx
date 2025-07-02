import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingShoes from './components/index';

function App() {
  const [cartItems, setCartItems] = useState([]); 

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ShoppingShoes
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
