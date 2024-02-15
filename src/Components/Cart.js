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

                {cart.map((product) => (
                    <div className="col-sm">
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Cart
