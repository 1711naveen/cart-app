import React, { useContext } from 'react'
import ProductContext from '../context/products/ProductContext'
import ProductCard from './ProductCard'

const Cart = () => {
    const context = useContext(ProductContext)
    const {cart, addToCart} = context
    return (
        <div>
            <p>Cart Count: {cart.length}</p>
            <div className='d-flex'>
                {cart.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    // <li key={product.id}>{product.title}</li>
                ))}
            </div>
        </div>
    )
}

export default Cart
