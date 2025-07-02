import React, { useState } from 'react';
import Shoes from './shoes';
import data from './data.json';
import Header from './header';
import CartModal from './cart';

function ShoppingShoes({ cartItems, setCartItems }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (shoe) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(item => item.id === shoe.id);

      if (existingItemIndex !== -1) {
        const updatedCart = [...prev];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prev, { ...shoe, quantity: 1 }];
      }
    });
  };

  const handleIncreaseQuantity = (index) => {
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity += 1;
      return updated;
    });
  };

  const handleDecreaseQuantity = (index) => {
    setCartItems((prev) => {
      const updated = [...prev];
      if (updated[index].quantity > 1) updated[index].quantity -= 1;
      return updated;
    });
  };

  const handleRemoveItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };
  
  

  return (
    <>
      <Header
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />

      <div className="grid grid-cols-3 gap-x-8 gap-y-10 px-24 mt-10">
        {data.map((shoes) => (
          <Shoes key={shoes.id} shoe={shoes} onAddToCart={handleAddToCart} />
        ))}
      </div>

      {isCartOpen && (
  <CartModal
    cartItems={cartItems}
    onClose={() => setIsCartOpen(false)}
    onIncreaseQuantity={handleIncreaseQuantity}
    onDecreaseQuantity={handleDecreaseQuantity}
    onRemoveItem={handleRemoveItem}       
    setCartItems={setCartItems}
  />
)}

    </>
  );
}

export default ShoppingShoes;
