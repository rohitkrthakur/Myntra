import React from 'react';

// Define an array of products
const products = [
  { id: 1, name: 'Bag', image: '/images/bag.png', discount: '70% off' },
  { id: 2, name: 'T-Shirt', image: '/images/Tshirt.jpeg', discount: '40% off' },
  { id: 3, name: 'Shoe', image: '/images/shoe.jpg', discount: '30% off' },
  { id: 4, name: 'facewash', image: '/images/c5.jpeg', discount: '50% off' },
  { id: 5, name: 'Shorts', image: '/images/n6.jpg', discount: '20% off' },
  { id: 6, name: 'shirt', image: '/images/m2.jpeg', discount: '60% off' },
  { id: 6, name: 'women t-shirt', image: '/images/w2.jpeg', discount: '60% off' },
  { id: 6, name: 'facepack', image: '/images/mc2.jpeg', discount: '60% off' },
  { id: 6, name: 'Jeans', image: '/images/f2.jpg', discount: '60% off' },
  { id: 6, name: 'Jeans', image: '/images/f2.jpg', discount: '60% off' },
];

function Products() {
  return (
    <div className="flex overflow-x-scroll p-10 space-x-6">
      {products.map(product => (
        <div key={product.id} className="relative min-w-[200px] border rounded-lg shadow-lg">
          <img src={product.image} className="w-full h-40 object-contain rounded-t-lg" alt={product.name} />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 rounded-md text-white text-center py-2">
            <p className="text-lg font-bold">{product.name}</p>
            <p className="text-sm">{product.discount}</p>
          </div>
        
        </div>
        
        
        
      ))}
    </div>
  );
}

export default Products;
