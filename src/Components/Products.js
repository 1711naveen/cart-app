import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductContext from '../context/products/ProductContext';
import ProductCard from './ProductCard';

const Products = (props) => {

    const context = useContext(ProductContext)
    const navigate = useNavigate();
    const { products, getProducts, addToCart } = context;
    

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getProducts();
        }
        else {
            navigate('/login');
        }
        //eslint-disable-next-line
    }, [])

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(props.searchQuery.toLowerCase())
    );

    return (
        <>
            <h1 className="text-center mt-3">Product List!</h1>
            <div className='row container my-5 '>
                {
                    props.searchQuery ? filteredProducts.map((product) => {
                        return <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    }) : products.map((product) => {
                        return <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    })
                }
            </div>
        </>
    )
}

export default Products
