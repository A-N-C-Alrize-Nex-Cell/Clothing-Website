import React from 'react';

const ProductGrid = ({ products, onProductClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 hover:shadow-lg cursor-pointer" onClick={() => onProductClick(product)}>
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-xl mt-2 font-semibold">{product.name}</h2>
          <p className="text-gray-600 mt-1">Rs.{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
