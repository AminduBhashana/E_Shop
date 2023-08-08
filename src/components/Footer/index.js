import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Description Column */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">E-Shopp</span>
            </div>
            <p className="text-sm text-gray-500">Elevate your shopping journey with our cutting-edge e-commerce
            platform, where you'll find an extensive collection of premium
            products, seamless navigation, and a secure checkout process.
            Experience shopping like never before.</p>
          </div>
  
          <div className="md:col-span-1 md:px-2"></div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">          
            {categories.map((category) => (
               <ul className="list-none">
              <li key={category}>
                <a
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                  href={`/categories/${category}`}
                >
                  {category}
                </a>
              </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );  
};
export default Footer;
