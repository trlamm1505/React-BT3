import React from 'react';

function CartModal({ cartItems, onClose, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-50 w-full max-w-6xl p-10 rounded shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative border-4 border-black">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
        >
          ✕
        </button>

        {/* Cart Title */}
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border text-center">
              <thead className="bg-gray-100 text-lg">
                <tr>
                  <th className="px-6 py-4">PRODUCT NAME</th>
                  <th className="px-6 py-4">IMAGE</th>
                  <th className="px-6 py-4">PRICE</th>
                  <th className="px-6 py-4">QUANTITY</th>
                  <th className="px-6 py-4">TOTAL</th>
                  <th className="px-6 py-4">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="text-base">
                {cartItems.map((shoe, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-4 font-bold">{shoe.name}</td>
                    <td className="px-6 py-4">
                      <img
                        src={shoe.image}
                        alt={shoe.name}
                        className="w-24 h-24 object-cover rounded mx-auto"
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold">${shoe.price}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center space-x-3">
                        <button
                          onClick={() => onDecreaseQuantity(index)}
                          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          -
                        </button>
                        <span>{shoe.quantity}</span>
                        <button
                          onClick={() => onIncreaseQuantity(index)}
                          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold">
                      ${shoe.price * shoe.quantity}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => onRemoveItem(index)}
                        className="text-red-500 font-bold hover:text-red-700 text-xl cursor-pointer"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;
