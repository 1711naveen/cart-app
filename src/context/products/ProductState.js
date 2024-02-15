import { useState } from 'react'
import ProductContext from './ProductContext'

const ProductState = (props) => {

    const initialProductState = [];
    const [products, setproducts] = useState(initialProductState);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const isInCart = cart.some((item) => item.id === product.id);

        if (!isInCart) {
            setCart((prevCart) => [...prevCart, product]);
        } else {
            console.log(`Product ${product.title} is already in the cart.`);
        }
    };

    //Code to get all products
    const getProducts = async () => {
        const response = await fetch('https://dummyjson.com/products', {
            method: 'GET',
        });
        const jsondata = await response.json();
        setproducts(jsondata.products);
    }




    return (
        <ProductContext.Provider value={{ products, getProducts, cart, addToCart }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState
