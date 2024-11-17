import React from 'react';

const Filter = ({ category, onCategoryChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium">
        Filter by Category:
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="mt-1 p-2 border rounded ml-2"
        >
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
          <option value="Pantry">Pantry</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;