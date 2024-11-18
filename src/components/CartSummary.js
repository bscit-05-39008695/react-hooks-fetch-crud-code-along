import React from 'react';

const CartSummary = ({ items }) => {
  const cartItems = items.filter(item => item.isInCart);
  
  return (
    <div className="mb-6 p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-bold mb-3">Shopping Cart ({cartItems.length} items)</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul className="space-y-2">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center">
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-600">{item.category}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t">
            <p className="text-right font-bold">
              Total Items: {cartItems.length}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartSummary;