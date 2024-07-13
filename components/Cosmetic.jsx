import React from 'react'
const products = [
    { id: 1, name: 'Bag', image: '/images/c1.jpeg', discount: '70% off' },
    { id: 2, name: 'T-Shirt', image: '/images/c2.jpeg', discount: '40% off' },
    { id: 3, name: 'Shoe', image: '/images/c3.jpeg', discount: '30% off' },
    { id: 4, name: 'Watch', image: '/images/c5.jpeg', discount: '50% off' },
    { id: 5, name: 'Hat', image: '/images/c6.jpeg', discount: '20% off' },
    { id: 6, name: 'Jeans', image: '/images/c2.jpeg', discount: '60% off' },
    { id: 6, name: 'Jeans', image: '/images/c1.jpeg', discount: '60% off' },
    { id: 6, name: 'Jeans', image: '/images/c3.jpeg', discount: '60% off' },
    { id: 6, name: 'Jeans', image: '/images/c1.jpeg', discount: '60% off' },
    { id: 6, name: 'Jeans', image: '/images/c2.jpeg', discount: '60% off' },
  ];
function Cosmetic() {
  return (
    <div className="flex overflow-x-scroll p-10 space-x-6">
      {products.map(product => (
        <div key={product.id} className="relative min-w-[200px] border rounded-lg shadow-lg">
          <img src={product.image} className="w-full h-40 object-contain rounded-t-lg" alt={product.name} />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
            <p className="text-lg font-bold">{product.name}</p>
            <p className="text-sm">{product.discount}</p>
          </div>
        
        </div>
        
        
        
      ))}
    </div>
  )
}

export default Cosmetic