import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleFilterChange = () => {
    onFilterChange({ size, color, priceRange });
  };

  return (
    <div className="p-4 border rounded-md">
      <h3 className="text-lg font-bold">Filters</h3>
      <div className="mt-2">
        <label className="block">Size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
          <option value="">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </div>
      <div className="mt-2">
        <label className="block">Color:</label>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
      </div>
      <div className="mt-2">
        <label className="block">Price Range:</label>
        <input type="range" min="0" max="100" value={priceRange[1]} onChange={(e) => setPriceRange([0, e.target.value])} className="mt-1 block w-full" />
      </div>
      <button onClick={handleFilterChange} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Apply Filters</button>
    </div>
  );
};

export default Filters;
