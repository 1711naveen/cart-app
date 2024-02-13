import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {

    const { product } = props;

    return (
        <div className='col-md-4'>
            <div className="card my-4 shadow p-3 mb-5 bg-body-tertiary rounded border border-2 border-primary boxShadow" style={{ width: "18rem" }}>
                <div style={{
                    display:'flex',
                    justifyContent:'flex-end',
                    position:'absolute',
                    right:'0'
                }}>
                    <span className='badge rounded-pill bg-success p-2' >{product.discountPercentage}% Off</span>
                </div>
                <br />
                <img src={product.images[0]?product.images[0]:product.images[1]} className="card-img-top p-3" alt={product.images[2]} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <Link to="/" className="btn btn-primary btn-sm">${product.price}</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
