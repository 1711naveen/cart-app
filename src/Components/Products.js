import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductContext from '../context/products/ProductContext';
import ProductCard from './ProductCard';

const Products = () => {

    const context = useContext(ProductContext)
    const navigate = useNavigate();
    const { products, getProducts } = context;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getProducts();
        }
        else {
            navigate('/login');
        }
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <h1 className="text-center mt-3">Product List!</h1>
            <div className='row container my-5'>
                {products.map((product) => {
                    return <ProductCard key={product.id} product={product}  />
                })}
            </div>
        </>
    )
}

export default Products
