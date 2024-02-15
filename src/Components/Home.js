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
            <strong>Filters:</strong>
            <div className='mt-3 '>
              <div className='my-4'>
                <label><strong>Min Price:</strong></label>
                <input
                  type="number"
                  placeholder='Input Minimum Price'
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                />

                <label className='mt-2'><strong>Max Price:</strong></label>
                <input
                  type="number"
                  placeholder='Input Maximum Price'
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-10">
          <div className='container'>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: "80%" }}
            />
          </div>
          <hr />
          <Products searchQuery={searchQuery} filterByPrice={filterByPrice}  />
        </div>
      </div>
    </div>
  )
}

export default Home
