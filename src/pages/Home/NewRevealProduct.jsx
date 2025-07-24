import React from 'react';
import ProductCard from './ProductCard';

const NewRevealProduct = () => {
    const products=[
  {
    id: '1',
    name: 'T-shirt with Tape Details',
    price: 120,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'T-Shirts',
    description: 'Comfortable cotton t-shirt with modern tape details',
    isNewArrival: true,
    stock: 25,
    ratings: 4.5,
    discount: false,
    persent: 0
  },
  {
    id: '2',
    name: 'Skinny Fit Jeans',
    price: 240,
    originalPrice: 260,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Jeans',
    description: 'Modern skinny fit jeans with premium denim',
    isNewArrival: false,
    stock: 18,
    ratings: 3.5,
    discount: true,
    persent: 20
  },
  {
    id: '3',
    name: 'Checkered Shirt',
    price: 180,
    image: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Shirts',
    description: 'Classic checkered shirt perfect for casual wear',
    isNewArrival: true,
    stock: 32,
    ratings: 4.5,
    discount: false,
    persent: 0
  },
  {
    id: '4',
    name: 'Sleeve Striped T-shirt',
    price: 130,
    originalPrice: 160,
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'T-Shirts',
    description: 'Trendy striped sleeve t-shirt in vibrant colors',
    isNewArrival: false,
    stock: 14,
    ratings: 4.5,
    discount: true,
    persent: 30
  },
  {
    id: '5',
    name: 'Polo Gradient Shirt',
    price: 145,
    image: 'https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Polo',
    description: 'Premium polo shirt with gradient design',
    isNewArrival: true,
    stock: 28,
    ratings: 4.0,
    discount: false,
    persent: 0
  },
  {
    id: '6',
    name: 'Black Striped Shirt',
    price: 120,
    originalPrice: 150,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Shirts',
    description: 'Elegant black striped shirt for formal occasions',
    isNewArrival: false,
    stock: 0,
    ratings: 5.0,
    discount: true,
    persent: 20
  },
  {
    id: '7',
    name: 'Courage Graphic T-shirt',
    price: 145,
    image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'T-Shirts',
    description: 'Motivational graphic t-shirt with bold design',
    isNewArrival: true,
    stock: 22,
    ratings: 4.0,
    discount: false,
    persent: 0
  },
  {
    id: '8',
    name: 'Loose Fit Bermuda Shorts',
    price: 80,
    originalPrice: 100,
    image: 'https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Shorts',
    description: 'Comfortable loose fit bermuda shorts for summer',
    isNewArrival: false,
    stock: 35,
    ratings: 3.0,
    discount: true,
    persent: 20
  }
]
    return (
        <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              Fashion Store
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the latest trends and timeless classics in our curated collection
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      {/* <ProductSection
        title="NEW ARRIVALS"
        products={sampleProducts}
        onAddToCart={handleAddToCart}
      /> */}

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 p-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            // onAddToCart={onAddToCart}
          />
        ))}

       </div>
      {/* Additional Sections */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $100</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">100% satisfaction guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default NewRevealProduct;