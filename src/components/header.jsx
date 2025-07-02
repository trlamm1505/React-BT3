import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function Header({ cartCount, onCartClick }) {
  return (
    <header className="bg-gray-400 text-white py-4 px-8 flex items-center justify-between">
      <h1 className="text-3xl font-bold cursor-pointer">Shoes Shop</h1>
      <div
        className="relative cursor-pointer"
        onClick={onCartClick} 
      >
        <FaShoppingCart className="text-2xl" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {cartCount}
        </span>
      </div>
    </header>
  );
}

export default Header;
