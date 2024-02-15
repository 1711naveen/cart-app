import React, { useContext } from 'react'
import ProductContext from '../context/products/ProductContext'
import ProductCard from './ProductCard'

const Cart = () => {
    const context = useContext(ProductContext)
    const { cart, addToCart } = context

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };

    return (
        <div className='container'>
            <h4 className='text-end'>Cart Count: {cart.length}</h4>
            <h4 className='text-end'>Product Total: ${calculateTotal()}</h4>
            <div className='row'>
                <div className="col-sm">
                    {cart.map((product) => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                        // <li key={product.id}>{product.title}</li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cart
