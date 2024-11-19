import React from 'react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-3/4 md:w-1/2 lg:w-1/3 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">X</button>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
        <h2 className="text-2xl mt-2 font-semibold">{product.name}</h2>
        <p className="text-gray-600 mt-1">${product.price}</p>
        <button className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-600">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductModal;
