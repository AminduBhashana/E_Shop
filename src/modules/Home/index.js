import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero';
import Products from '../../components/ProductCard';
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/Categories';


const Home = () => {
    const [products ,setProducts] = useState([])
    useEffect(() => {
       const fetchProducts = async () => {
        const response = await fetch('https://dummyjson.com/products?limit=12')
        const data = await response.json()
        setProducts(data.products)
       }
    fetchProducts()
    }, []);

    return (
      <>
        <Hero/>
        <Categories/>
        <div className="flex flex-col text-center w-full mt-10">
            <h2 className="text-s text-blue-500 tracking-widest font-medium title-font mb-1">Products</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most Popular Products</h1>
          </div>
        {
            products.length > 0 ? <ProductCard products = {products}/> : <div>Loading......</div>
        }
        <Products/>
      </>
    )
}

export default Home
