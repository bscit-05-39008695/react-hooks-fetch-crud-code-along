import React, { useState, useEffect } from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import Item from './Item';

const ShoppingList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleUpdateItem = (updatedItem) => {
    const updatedItems = items.map((item) => {
      return item.id === updatedItem.id ? updatedItem : item;
    });
    setItems(updatedItems);
  };

  const handleDeleteItem = (deletedItem) => {
    const updatedItems = items.filter((item) => item.id !== deletedItem.id);
    setItems(updatedItems);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div>
      <ItemForm onAddItem={handleAddItem} />
      <Filter 
        category={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <ul className="space-y-2 mt-4">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            item={item}
            onUpdateItem={handleUpdateItem}
            onDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;