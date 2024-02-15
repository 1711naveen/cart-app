import React, { useState } from 'react'
import Products from './Products'

const Home = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Number.MAX_VALUE);

  const filterByPrice = (product) => {
    return product.price >= minPrice && product.price <= maxPrice;
  };

  return (
    <div >
      <div className="row">
        <div className="col-2 border-end border-5">
          <div className="border-bottom p-2">
            <h5>Filters:
              <hr />
            </h5>
            <div className='mt-3 '>
              <div className='my-4'>

                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Min Price:</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder='Input Min. Price' onChange={(e) => setMinPrice(Number(e.target.value))} />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Max Price:</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder='Input Max. Price' onChange={(e) => setMaxPrice(Number(e.target.value))} />
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="col-10">
          <div className='container'>
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <hr />
          <Products searchQuery={searchQuery} filterByPrice={filterByPrice} />
        </div>
      </div>
    </div>
  )
}

export default Home
