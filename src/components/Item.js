import React from 'react';

const Item = ({ item, onUpdateItem, onDeleteItem }) => {
  const handleAddToCartClick = () => {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !item.isInCart,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => onUpdateItem(updatedItem));
  };

  const handleDeleteClick = () => {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(item));
  };

  return (
    <li className={`p-4 border rounded flex justify-between items-center ${item.isInCart ? 'bg-gray-100' : ''}`}>
      <span className="font-medium">{item.name}</span>
      <span className="text-gray-600">{item.category}</span>
      <div className="space-x-2">
        <button
          onClick={handleAddToCartClick}
          className={`px-3 py-1 rounded ${
            item.isInCart 
              ? 'bg-yellow-500 hover:bg-yellow-600' 
              : 'bg-green-500 hover:bg-green-600'
          } text-white`}
        >
          {item.isInCart ? "Remove From" : "Add to"} Cart
        </button>
        <button
          onClick={handleDeleteClick}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Item;