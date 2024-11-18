import React, { useState } from 'react';

const ItemForm = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemData = {
      name: name,
      category: category,
      isInCart: false,
    };

    fetch("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then((newItem) => {
        onAddItem(newItem);
        setName("");
        setCategory("Produce");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <div>
        <label className="block text-sm font-medium">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium">
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Meat">Meat</option>
            <option value="Pantry">Pantry</option>
          </select>
        </label>
      </div>
      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Item
      </button>
    </form>
  );
};

export default ItemForm;