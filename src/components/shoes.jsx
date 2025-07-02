import React from 'react';

function Shoes({ shoe, onAddToCart }) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="block p-4">
        <img
          className="rounded-lg w-full aspect-[4/4] object-cover"
          src={shoe.image}
          alt={shoe.name}
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
          {shoe.name}
        </h5>
        <p className="mb-3 font-bold text-black">{shoe.price} $</p>
        <button
          onClick={() => onAddToCart(shoe)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
        >
          Add to Cart
          <i className="fa-solid fa-cart-plus ms-2 text-lg"></i>
        </button>
      </div>
    </div>
  );
}

export default Shoes;
