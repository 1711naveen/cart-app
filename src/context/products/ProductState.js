import { useState } from 'react'
import ProductContext from './ProductContext'

const ProductState = (props) => {

    const initialProductState = [];

    const [products, setproducts] = useState(initialProductState)

    //Code to get all products
    const getProducts = async () => {
        const response = await fetch('https://dummyjson.com/products', {
            method: 'GET',
        });
        const jsondata = await response.json();
        setproducts(jsondata.products);
    }

    return (
        <ProductContext.Provider value={{products, getProducts}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState
