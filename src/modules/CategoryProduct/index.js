import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'

const CategoryProducts = () => {
    const { name } = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch(`https://dummyjson.com/products/category/${name}`)
        const data = await response.json()
        console.log(data)
        setProducts(data.products)
      }
      fetchProducts()
    }, [])
  
    if (products?.length === 0) return <div>Loading.....</div>
  
    return (
      <>
      <div className="flex flex-col text-center w-full mb-4 mt-8">
      <h2 className="text-lg text-blue-500 tracking-widest font-medium title-font mb-1 uppercase">{name}</h2>
      <ProductCard products={products} />
      </div>
      </>  
    )
  }
  
export default CategoryProducts;
